import {Component} from '@angular/core'

@Component({
    selector: 'main-page',
    template: `
        <div class="main-nav">
            <tabs class="user-management-tab"
                    [tabNames]="tabNames"
                    [navTabType]="tabStyle"
                    (changedTab)="selectViewByTab($event)"
                ></tabs>
        </div>

        <div class="main-content">
            <div *ngIf="activeTab === 'Mapping'">
                <mapping [searchValue]="searchValue"></mapping>
            </div>
            <div *ngIf="activeTab === 'User Management'">
                <userManagement [searchValue]="searchValue"></userManagement>
            </div>
        </div>
        <input class="search-bar" [(ngModel)]="searchValue">
    `,
    styles:[`
        .search-bar {
            top:0;
            right:0;
            position:fixed;
        }
        .main-nav {  
            width:300px;
        height:90%;
        float:left;

        }
        .main-content {
            height:90%;
        width:700px;
        float:left;
        }
    `]
})
export class MainPageComponent{
    searchValue = 'a';
    tabNames = ["Mapping", "User Management"];
    tabStyle = "nav nav-pills nav-stacked";
    activeTab: string;
    ngOnInit(){
        this.activeTab = this.tabNames[0];
    }
    selectViewByTab(e: any){
        this.activeTab = e;
    }
}