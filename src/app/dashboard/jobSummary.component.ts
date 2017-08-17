import { Component, Input, OnInit} from '@angular/core';
import { JobInfo } from './jobInfo';

@Component({
  selector: 'jobSummary',
<<<<<<< HEAD
  templateUrl: './jobSummary.component.html',
//   template: `
//     <div class="card card-job">
//         <div class="card-header" [ngClass]="getHeaderClass()">
//             <span class="badge" [ngClass]="getTitleClass()">
//                 <i [ngClass]="getSpanIcon()"></i>
//             </span>
//             <strong>{{summary.status}}</strong>
//         </div>
//         <a routerLinkActive = "active" [routerLink] = "['/output/output', {id: summary.id}]">
//             <div class="wrapper">
//                 <img class="card-img-top img-job" src="{{summary.thumbnail}}"
//                     (mouseover)='setJobHoverHidden()'
//                     (mouseleave)='setJobHoverHidden()'>
//                 <i class="fa fa-sign-in fa-2x" [hidden]=jobHoverHidden></i>
//             </div>
//         </a>
//         <div class="card-block">
//             <p><button type="button" class="btn btn-primary">Details</button></p>
//             <p><small class="text-muted">Last updated 3 mins ago</small></p>
//         </div>
//     </div>`,
=======
  template: `
    <div class="card card-job">
        <div class="card-header" [ngClass]="getHeaderClass()">
            <span class="badge" [ngClass]="getTitleClass()">
                <i [ngClass]="getSpanIcon()"></i>
            </span>
            <strong>{{summary.status}}</strong>
        </div>
        <a routerLinkActive = "active" [routerLink] = "['/output/output', {id: summary.id}]">
            <div class="wrapper">
                <img class="card-img-top img-job" src="{{summary.thumbnail}}"
                    (mouseover)='setJobHoverHidden()'
                    (mouseleave)='setJobHoverHidden()'>
                <i class="fa fa-sign-in fa-2x" [hidden]=jobHoverHidden></i>
            </div>
        </a>
        <div class="card-block">
            <p><a routerLinkActive = "active" [routerLink] = "['/output/output', {id: summary.id}]">
              <button type="button" class="btn btn-primary">Details</button></a></p>
            <p><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>`,
>>>>>>> ce46aec2f1a981a04dc78948b292ee36dc696e21
    styleUrls: ['jobSummary.css']
})

export class JobSummaryComponent implements OnInit{
    @Input() summary: JobInfo;
    jobHoverHidden: boolean;

    testMe(): void {
        console.log(this.summary);
    }

    ngOnInit(): void {
        this.jobHoverHidden = true
    }

    // setJobHoverHidden(): void {
    //     this.jobHoverHidden = !this.jobHoverHidden
    // }

    getBadgeClass() : string {
        return "badge-"+this.summary.status.toLowerCase();
    }

    getHeaderClass() : string {
        //   console.log("card-outline-"+this.summary.status.toLowerCase());
        return "card-header-"+this.summary.status.toLowerCase();
<<<<<<< HEAD
    }

    getShortDescription(): string {
    return this.summary.description.slice(0,200);
    }

    getProgressBarHidden(): boolean {
        if (this.summary.status == "Running")
            return false
        else
            return true
=======
>>>>>>> ce46aec2f1a981a04dc78948b292ee36dc696e21
    }

    getSpanIcon() : string  {
        var icon = ""
        if (this.summary.status == "Running")
            icon = "fa fa-circle-o-notch fa-spin fa-lg"
        // if (this.summary.status == "Complete")
        //     icon ="fa fa-line-chart fa-lg"
        // if (this.summary.status == "Error")
        //     icon ="fa fa-exclamation-triangle fa-lg"
        // if (this.summary.status == "Draft")
        //     icon ="fa fa-pencil-square fa-lg"
        return icon
    }

    getActionIcon() : string  {
        var icon = ""
        if (this.summary.status == "Running")
            icon = "fa fa-circle-o-notch fa-spin fa-lg"
        if (this.summary.status == "Complete")
            icon ="fa fa-line-chart fa-lg"
        if (this.summary.status == "Error")
            icon ="fa fa-exclamation-triangle fa-lg"
        if (this.summary.status == "Draft")
            icon ="fa fa-pencil-square fa-lg"
        return icon
<<<<<<< HEAD
    }
<<<<<<< HEAD

    getActionText() : string  {
        var text = ""
        if (this.summary.status == "Running")
            text = "Logs"
        if (this.summary.status == "Complete")
            text ="View"
        if (this.summary.status == "Error")
            text ="Logs"
        if (this.summary.status == "Draft")
            text ="Edit"
        return text
    }
}
=======
}
>>>>>>> output page tweaks
=======
    }
}
>>>>>>> ce46aec2f1a981a04dc78948b292ee36dc696e21
