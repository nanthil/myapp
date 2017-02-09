import {Component, Input} from '@angular/core'
import {MappingService} from './mapping.service';
@Component({
    selector: 'mapping',
    template: `
        <div class="">
            <div class="mapping-main">
                <tabs class="user-management-tab"
                    [tabNames]="tabNames"
                    [navTabType]="tabStyle"
                    (changedTab)="selectViewByTab($event)"
                ></tabs>
                <div *ngIf="activeView.name==='Operational Maps'">
                    <card 
                        
                        [searchValue]="searchValue"
                        (selected)="setConfig($event)"
                        [cardData]=activeView.data
                        [type]=activeView.name>
                    </card>
                </div>
                <div *ngIf="activeView.name !=='Operational Maps'">
                    {{activeView.name}}
                    <div *ngFor="let mapItem of activeView.data">
                        <div (click)="setConfig(mapItem)">
                            {{mapItem.title}}
                        </div>
                    </div>
                </div>
            </div>
            <div *ngIf="activeItem !== undefined" class="config-window">
                <config [configData]="activeItem"></config>
            </div>
        </div>
    `,
    styles:[`
        .mapping-main{
            width: 500px;
        }
        .config-window{font-size: 20px; float:right; width:auto;position:fixed; top:0; right:0;}
    `]
})
export class MappingComponent{
    tabNames = ["Operational Maps", "Base Maps", "Tile Packages", "Offline Packages"];
    tabStyle = "nav nav-pills"
    methods=[this.mappingService.createOperationalMapObj, ]
    mappingViews = {};
    activeView: {};
    @Input() searchValue;
    //the item selected from the list of map objects
    //this correlates with the config view
    activeItem: {};

    //this sets the config view
    setConfig(e: any){
        this.activeItem = e;
    }
    ngOnInit(){
        //for each tab, push data to views
        this.mappingViews['Operational Maps'] = this.mappingService.foramtDataObjForView(this.mappingService.getOperationalMaps(), 'Operational Maps');
        this.mappingViews['Base Maps'] = this.mappingService.foramtDataObjForView('something', 'Base Maps');
        this.mappingViews['Tile Packages'] = this.mappingService.foramtDataObjForView('something', 'Tile Packages');
        
        this.activeView = {name: this.tabNames[0], data: this.mappingViews['Operational Maps']}
        console.log(this.mappingViews);
    }
    constructor(private mappingService: MappingService){}
    selectViewByTab(e: any){
        this.activeItem = undefined;
        console.log(this.mappingViews);
        this.activeView = {name: e, data: this.mappingViews[e]}
    }
}