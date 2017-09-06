webpackJsonp([2],{1144:function(t,e,o){"use strict";var n=this&&this.__decorate||function(t,e,o,n){var r,a=arguments.length,s=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(s=(a<3?r(s):a>3?r(e,o,s):r(e,o))||s);return a>3&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(e,"__esModule",{value:!0});var r=o(1),a=o(19),s=o(1194),i=o(1165),c=o(1164),u=o(1197),d=function(){function DashboardModule(){}return DashboardModule=n([r.NgModule({imports:[s.DashboardRoutingModule,a.CommonModule],declarations:[c.DashboardComponent,u.JobSummaryComponent],providers:[i.DashboardService],exports:[u.JobSummaryComponent]})],DashboardModule)}();e.DashboardModule=d},1164:function(t,e,o){"use strict";var n=this&&this.__decorate||function(t,e,o,n){var r,a=arguments.length,s=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(s=(a<3?r(s):a>3?r(e,o,s):r(e,o))||s);return a>3&&s&&Object.defineProperty(e,o,s),s},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var a=o(1),s=o(1165),i=function(){function DashboardComponent(t){this.dashboardService=t}return DashboardComponent.prototype.ngOnInit=function(){console.log("in dashboard"),localStorage.removeItem("job_id"),this.jobs=[],this.getJobsData()},DashboardComponent.prototype.getJobsData=function(){var t=this;console.log("getting job data"),this.dashboardService.data.subscribe(function(e){e.map(function(e){console.log("job"+e),"running"==e.status.toLowerCase()?t.dashboardService.getProgressInfo(e.id).subscribe(function(o){e.progress=o,console.log("Inprogress"),console.log(o),console.log(e),t.jobs.push(e)},function(e){t.errorMessage=e}):(e.progress={value:0,units:"percent",range_min:0,range_max:100},t.jobs.push(e))})})},DashboardComponent.prototype.getProgressInfoData=function(t){var e=this;this.dashboardService.getProgressInfo(t).subscribe(function(t){},function(t){e.errorMessage=t})},DashboardComponent.prototype.deleteJob=function(t){var e=this;this.jobs=this.jobs.filter(function(e){return e.id!==t}),this.dashboardService.deleteJob(t).subscribe(function(t){console.log("deleted")},function(t){e.errorMessage=t})},DashboardComponent=n([a.Component({selector:"dashboard",providers:[s.DashboardService],template:o(1195),styles:[o(1196)]}),r("design:paramtypes",[s.DashboardService])],DashboardComponent)}();e.DashboardComponent=i},1165:function(t,e,o){"use strict";var n=this&&this.__decorate||function(t,e,o,n){var r,a=arguments.length,s=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(s=(a<3?r(s):a>3?r(e,o,s):r(e,o))||s);return a>3&&s&&Object.defineProperty(e,o,s),s},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var a=o(1),s=o(247),i=o(0);o(465),o(248);var c=o(466),u=function(){function DashboardService(t){this.http=t,this.jobsUrl=c.environment.apiUrl+"jobs",this.progressUrl=c.environment.apiUrl+"progress/",this.data=this.getJobsData()}return DashboardService.prototype.getJobsData=function(){return this.http.get(this.jobsUrl).map(this.extractData).catch(this.handleError)},DashboardService.prototype.getProgressInfo=function(t){var e=this.progressUrl+t;return this.http.get(e).map(this.extractProgressJsonData).catch(this.handleError)},DashboardService.prototype.deleteJob=function(t){var e=this.jobsUrl+"/"+t;return this.http.delete(e).map(this.extractJsonData).catch(this.handleError)},DashboardService.prototype.extractData=function(t){return t.json().jobs||{}},DashboardService.prototype.extractJsonData=function(t){return t.json()||{}},DashboardService.prototype.extractProgressJsonData=function(t){return t.json().stdout.progress||{}},DashboardService.prototype.handleError=function(t){var e;if(t instanceof s.Response){var o=t.json()||"",n=o.error||JSON.stringify(o);e=t.status+" - "+(t.statusText||"")+" "+n}else e=t.message?t.message:t.toString();return console.error(e),i.Observable.throw(e)},DashboardService=n([a.Injectable(),r("design:paramtypes",[s.Http])],DashboardService)}();e.DashboardService=u},1179:function(t,e){t.exports="\n.card-job {\n    margin:1% 1% 1% 1%;\n    /* max-width: 70vh; */\n}\n\n.card-block-container {\n    padding: 0%;\n}\n\n\n.card-header-name {\n    color: #263238;\n}\n\n.card-header, a:focus, a:hover {\n    /* background-color: #a8c8d6; */\n}\n\n.badge-draft {\n    color: #f8cb00;\n}\n\n.badge-running {\n    color: #20a8d8;   \n}\n\n.badge-error {\n\n    color: #f86c6b;\n}\n\n.badge-complete {\n    \n    color: #4dbd74;\n\n\n}\n\n.badge-queued{\n\n    color: black;\n}\n\n.wrapper {\n   position: relative;\n   background-color: white;\n}\n\n.wrapper i {\n   position: absolute;\n   top: 50%;\n   left: 50%;\n}\n\n.img-job {\n    max-width:5rem;\n    /* max-height:5rem; */\n    /* padding-right: 1rem;\n    padding-left: 1rem; */\n}\n\n.descriptionText, a:focus, a:hover {\n    color: #263238;\n    text-decoration: none;\n}\n\n.break-word {\n    word-wrap: break-word;\n}\n\n.bg-job-success {\n    color: white;\n    background-color: #20a8d8;\n}\n\n.job-progress {\n    background-color: white;\n    display: inline-block;\n    width: 100%;\n}\n\n.btn.btn-primary.btn-action {\n    width: 7em;\n    margin: 0.25em;\n}\n"},1194:function(t,e,o){"use strict";var n=this&&this.__decorate||function(t,e,o,n){var r,a=arguments.length,s=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(s=(a<3?r(s):a>3?r(e,o,s):r(e,o))||s);return a>3&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(e,"__esModule",{value:!0});var r=o(1),a=o(119),s=o(1164),i=[{path:"",component:s.DashboardComponent,data:{title:"Dashboard"}}],c=function(){function DashboardRoutingModule(){}return DashboardRoutingModule=n([r.NgModule({imports:[a.RouterModule.forChild(i)],exports:[a.RouterModule]})],DashboardRoutingModule)}();e.DashboardRoutingModule=c},1195:function(t,e){t.exports='<div class="card-deck">\n    <div *ngFor="let job of jobs" class=\'card-jobs container-fluid\' style="width:100%">\n        <jobSummary [summary]="job" [type]=\'Dashboard\' (jobDeleted)="deleteJob($event)"></jobSummary>\n    </div>\n</div>\n'},1196:function(t,e){t.exports=".card-jobs{\n    /* margin: 1%; */\n    /*width: 75vh;*/\n}\n"},1197:function(t,e,o){"use strict";var n=this&&this.__decorate||function(t,e,o,n){var r,a=arguments.length,s=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(s=(a<3?r(s):a>3?r(e,o,s):r(e,o))||s);return a>3&&s&&Object.defineProperty(e,o,s),s},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var a=o(1),s=o(1198),i=function(){function JobSummaryComponent(){this.jobDeleted=new a.EventEmitter,this.dashboard=!0}return JobSummaryComponent.prototype.testMe=function(){console.log(this.summary)},JobSummaryComponent.prototype.ngOnInit=function(){this.jobHoverHidden=!0},JobSummaryComponent.prototype.storeJobId=function(t){localStorage.setItem("action_type",t),localStorage.setItem("job_id",this.summary.id)},JobSummaryComponent.prototype.getBadgeClass=function(){return"badge-"+this.summary.status.toLowerCase()},JobSummaryComponent.prototype.getHeaderClass=function(){return"card-header-"+this.summary.status.toLowerCase()},JobSummaryComponent.prototype.getShortDescription=function(){return this.summary.description},JobSummaryComponent.prototype.getProgressBarHidden=function(){return"Running"!=this.summary.status},JobSummaryComponent.prototype.getSpanIcon=function(){var t="";return"Running"==this.summary.status&&(t="fa fa-circle-o-notch fa-spin fa-lg"),t},JobSummaryComponent.prototype.getActionIcon=function(){var t="";return"Running"==this.summary.status&&(t="fa fa-circle-o-notch fa-spin fa-lg"),"Complete"==this.summary.status&&(t="fa fa-line-chart fa-lg"),"Error"==this.summary.status&&(t="fa fa-exclamation-triangle fa-lg"),"Draft"==this.summary.status&&(t="fa fa-pencil-square fa-lg"),"Queued"==this.summary.status&&(t="fa fa-hourglass-half fa-lg"),t},JobSummaryComponent.prototype.getActionText=function(){var t="";return"running"==this.summary.status.toLowerCase()&&(t="View"),"new"==this.summary.status.toLowerCase()&&(t="Edit"),"complete"==this.summary.status.toLowerCase()&&(t="View"),"error"==this.summary.status.toLowerCase()&&(t="Logs"),"draft"==this.summary.status.toLowerCase()&&(t="Edit"),"queued"==this.summary.status.toLowerCase()&&(t="View"),t},JobSummaryComponent.prototype.routeToInput=function(){return"running"==this.summary.status.toLowerCase()||("complete"==this.summary.status.toLowerCase()||"queued"==this.summary.status.toLowerCase())},JobSummaryComponent.prototype.routeToOutput=function(){return"new"==this.summary.status.toLowerCase()||"draft"==this.summary.status.toLowerCase()},JobSummaryComponent.prototype.getProgressValue=function(){return{width:this.summary.progress.value.toString()+"%"}},JobSummaryComponent.prototype.deleteMe=function(){console.log("Delete a Job"),this.jobDeleted.emit(this.summary.id)},n([a.Input(),r("design:type",s.JobInfo)],JobSummaryComponent.prototype,"summary",void 0),n([a.Input(),r("design:type",String)],JobSummaryComponent.prototype,"type",void 0),n([a.Input(),r("design:type",Boolean)],JobSummaryComponent.prototype,"caseInfo",void 0),n([a.Input(),r("design:type",Object)],JobSummaryComponent.prototype,"case",void 0),n([a.Output(),r("design:type",a.EventEmitter)],JobSummaryComponent.prototype,"jobDeleted",void 0),JobSummaryComponent=n([a.Component({selector:"jobSummary",template:o(1199),styles:[o(1179)]})],JobSummaryComponent)}();e.JobSummaryComponent=i},1198:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function JobInfo(){}return JobInfo}();e.JobInfo=n},1199:function(t,e){t.exports='<div class="card card-job">\n    <div class="card-header" >\n        <div class="container-fluid card-block-container">\n            <div class="row">\n                <div class="col-md-3">\n                    <strong>{{summary.name}}</strong>\n                </div>\n                <div class="col-md-3">\n                    <div class="progress job-progress" [hidden]="getProgressBarHidden()">\n                        <div class="progress-bar bg-job-success" role="progressbar" [ngStyle]="{\'width\':summary.progress.value+\'%\'}" >{{summary.progress.value}} {{summary.progress.units}}</div>\n                    </div>\n                </div>\n                <div class="col-md-2 offset-md-4">\n                     <span [ngClass]="getBadgeClass()"><strong>{{summary.status}}</strong></span>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="card-block">\n        <div class="container-fluid card-block-container">\n            \x3c!-- <a routerLinkActive = "active" [routerLink] = "[\'/output/output\', {id: summary.id}]"> --\x3e\n            \x3c!-- <a [routerLink] = "[\'/output/output\']" (click)="storeJobId()"> --\x3e\n            <div class="row">\n                <div class="col-md-2"><img src={{summary.thumbnail}}  class="img-job"></div>\n                <div class="col-md-7">\n                    <p class="descriptionText">{{getShortDescription()}}</p>\n                </div>\n                <div class="col-md-3">\n                    <div class="row" style="padding-top:3%" [hidden]="routeToOutput()">\n                        <div class="col-md-4 offset-md-2">\n                            <button type="button"\n                                    class="btn btn-primary btn-action"\n                                    (click)="storeJobId(\'Output\')"\n                                    [routerLink]="[\'/output/output\']" routerLinkActive="active">\n                                \x3c!-- <i [ngClass]="getActionIcon()"></i> --\x3e\n                                <span class="actionText"><strong> {{getActionText()}}</strong></span>\n                            </button>\n                        </div>\n                    </div>\n                    <div class="row" style="padding-top:3%" [hidden]="routeToInput()">\n                        <div class="col-md-4 offset-md-2">\n                            <button type="button"\n                                    class="btn btn-primary btn-action"\n                                    (click)="storeJobId(\'Edit\')"\n                                    [routerLink]="[\'/config/config\']" routerLinkActive="active">\n                                \x3c!-- <i [ngClass]="getActionIcon()"></i> --\x3e\n                                <span class="actionText"><strong> {{getActionText()}}</strong></span>\n                            </button>\n                        </div>\n                    </div>\n                    <div class="row" style="padding-top:3%">\n                        <div class="col-md-4 offset-md-2">\n                            <button type="button"\n                                    class="btn btn-primary btn-action"\n                                    (click)="deleteMe()">\n                                <i class="fa fa-trash-o fa-lg"></i>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n    </div>\n  </div>\n</div>\n'}});