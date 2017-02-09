import {Component, Input} from '@angular/core';
import {UserManagementService} from './userManagement.service';
@Component({
    selector: 'userManagement',
    template: `
        <tabs class="user-management-tab"
            [tabNames]="tabNames"
            [navTabType]="tabStyle"
            (changedTab)="selectViewByTab($event)"
            [shouldFloatLeft]="true"
        ></tabs>
        <div class="user-management-main">
        <card 
            [searchValue]="searchValue"
            [cardData]=activeView.data
            [type]=activeView.name>
        </card>
        </div>
    `,
    styles: [`
        .user-management-tab {margin-bottom: 200px;}
        .user-management-main {
            width:500px;
        }`]
})
export class UserManagementComponent{
    activeView = {};
    tabStyle = "nav nav-pills"
    @Input() searchValue;
    //collection of objects, {TabName: Data}
    userManagementViews = {};
    mobileRoles = [];
    tabNames = ['Mobile', 'Designer', 'Invite', 'API'];
    methods = [{name: "API", methodName: this.userManagementService.getApiKeys}, {name: "Mobile", methodName: this.userManagementService.getUsers}];
    
    constructor(private userManagementService: UserManagementService){}
    ngOnInit(){
        for(var method in this.methods){
            var results = this.methods[method].methodName();
           
            console.log(results);
            this.userManagementViews[this.methods[method].name] = this.userManagementService.modifiedDataObj(results, this.methods[method].name);
            
            //(this.userManagementService.modifiedDataObj(results, this.methods[method].name))
        }
        console.log(this.userManagementViews);
        this.activeView = {name: 'Mobile', data: this.userManagementViews['Mobile']};
    }
    selectViewByTab(e: any){
        this.activeView = {name: e, data: this.userManagementViews[e]};
    }
}