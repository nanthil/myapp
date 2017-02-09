import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'tabs',
    template: `
        <div class="tabs-content">
            <ul [ngClass]="navTabType" >
                <li role="presentation" 
                    (click)="setActiveTab(tab)" 
                    [ngClass]="{'active': tab === activeTab, 'tab-list': shouldFloatLeft}" 
                    *ngFor="let tab of tabNames">
                    <a href="#">{{tab}}</a>
                </li>
            </ul>
        </div>

        
    `,
    styles: [`body { padding-top: 70px; }
    .tabs-content{
        font-size: 17px;
        display:inline-block
    }
    .tab-list{
        float:left;
    }
    `]
})
export class TabsComponent{
    @Input() tabNames;
    //default false = main tabs
    @Input() navTabType;
    @Output() changedTab = new EventEmitter();
    @Input() shouldFloatLeft = false;
    activeTab = '';
    ngOnInit(){
        this.activeTab = this.tabNames[0]
    }
    setActiveTab(tab: any){
        this.activeTab = tab
        this.changedTab.next(tab);
    }
}