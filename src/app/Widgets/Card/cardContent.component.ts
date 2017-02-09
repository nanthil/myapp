import {Component, Input} from '@angular/core';

@Component({
    selector: 'card-content',
    template: `
        <div *ngFor="let key of contentKeys">
            <div *ngIf="key !== 'inputType'">
                <div class="card-pair">
                    {{key}}: 
                    <div *ngIf="key === 'groups'">
                        <ul>
                        <li class="card-group" *ngFor="let group of cardData[key]">
                            <div class="card-group">
                                {{group}}
                            </div>
                        </li>
                        </ul>
                    </div>
                    <div class="card-pair" *ngIf="key !== 'groups'">
                        {{cardData[key]}}
                    </div>
                </div>
            </div>
        </div>
    `,
    styles:[`
        .card-pair{
            display:inline-block;
        }
        .card-group{
            display: block;
        }
    `]
})
export class CardContentComponent{
    @Input() cardData: any;
    contentKeys = [];
        ngOnInit(){
        
        for(var key in this.cardData){
            this.contentKeys.push(key);
            
        }
    }
}