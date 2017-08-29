import { Component, Input, OnInit, NgZone, OnChanges, ViewChild, ElementRef, HostListener  } from '@angular/core';

import { OutputService } from './output.service';

@Component({
  selector: 'chart',
  providers: [OutputService],
  template: `
  <div class='container-fluid'>

    <div class="card-block">
      <div class = "row">
        <div class = "col-md-12">
          <div *ngIf="isDataAvailable" style="width:100%; min-height: 300px">
            <ngx-charts-line-chart

            [scheme]="colorScheme"
            [results]="chartData"
            [gradient]=false
            [xAxis]=true
            [yAxis]=true
            [legend]=false
            [showXAxisLabel]=true
            [showYAxisLabel]=true
            [xAxisLabel]="xAxisLabel"
            [yAxisLabel]="yAxisLabel"
            [autoScale]=true
            [tooltipDisabled]=false>
          </ngx-charts-line-chart>
        </div>
      </div>
    </div>

    <div class = "row">
      <div class = "col-md-6">
        <select class="form-control" (change)='onChangeX($event.target.value)' >
          <!--<option selected>X-axis</option>-->
          <option *ngFor="let key of keys" >{{key}}</option>
        </select>
      </div>

      <div class = "col-md-6">
        <select class = "form-control" (change)='onChangeY($event.target.value)' >
          <!--<option selected>Y-axis</option>-->
          <option *ngFor="let y_var of y_vars" >{{y_var}}</option>
        </select>
      </div>
    </div>

  </div>
</div>`,
  inputs:['lineChartLabel', 'lineChartData']
})

export class ChartsComponent implements OnInit{


  errorMessage: string;
  jobData: {};
  keys: Array<any>;
  y_vars: Array<any> = [];
  data: Array<any> = [];
  isDataAvailable:boolean = false;
  varX: string;
  varY: string;
  chartData: Array<any>

  // ngx-charts options

  //view: any[] = [500, 400];

  xAxisLabel = '';
  yAxisLabel = '';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private outputService:OutputService){}

  ngOnInit(){
    this.getJobData()
  }

  getJobData(){
    this.outputService.data
                      .subscribe(
                        allData => {
                          this.jobData = allData
                          this.keys = this.jobData["keys"]

                          for (let key of this.keys){
                            this.data.push(this.jobData[key])
                            if (typeof(this.jobData[key][0]) === 'number'){
                              this.y_vars.push(key)
                            }
                          }

                          //plot first 2 vars against each other
                          this.varY = this.y_vars[0]
                          if(this.keys[0] != this.y_vars[0]){
                            this.varX = this.keys[0]
                          }else{
                            this.varX = this.keys[1]
                            //reorder keys so that top choice in dropdown is name of X variable being plotted
                            let temp = this.keys[0]
                            this.keys[0] = this.keys[1]
                            this.keys[1] = temp
                          }

                          this.drawChart()

                          this.isDataAvailable = true;

                        },
                        error => {
                          this.errorMessage = <any> error
                        }
                      )
  }


drawChart(){
  this.chartData = [{"name":"", "series":[]}]

  let newData = [{"name":this.varY, "series":[]}]
  let type = typeof(this.jobData[this.varX][0])
  let date = new Date(this.jobData[this.varX][0]).toString()

  for(var i = 0; i<this.jobData[this.varX].length; i++){
    //var is a number - need to check first otherwise numbers will be treated as dates
    if(type==='number'){
      newData[0]["series"].push({'name':this.jobData[this.varX][i], 'value':this.jobData[this.varY][i]})
    }
    //the var is a valid date string
    else if(date !== 'Invalid Date'){
      newData[0]["series"].push({'name':new Date(this.jobData[this.varX][i]), 'value':this.jobData[this.varY][i]})
    //the var is a string i.e. category
    }else{
      newData[0]["series"].push({'name':this.jobData[this.varX][i], 'value':this.jobData[this.varY][i]})
    }
  }
  this.xAxisLabel = this.varX
  this.yAxisLabel = this.varY
  this.chartData = newData
}

onChangeX(key){
  this.varX = key
  this.drawChart()
}

onChangeY(key){
  this.varY = key
  this.drawChart()
}

}
