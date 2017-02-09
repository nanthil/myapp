import {Component, Pipe, PipeTransform, Injectable, Input, Output, OnChanges, EventEmitter} from '@angular/core';

@Pipe({
    name: 'searchFilter',
    pure: false
})
@Injectable()
export class SearchFilterPipe implements PipeTransform{
    transform(items: any[], args: any[]){
        var returnArray = [];
        var filterObj = {}
        for(var property in items[0]){
            console.log(property);
           if(property !== 'picture' && property !== 'content'){
                filterObj[property] = args;
            }
        }
        for(var item in items){
            for(var property in items[item]){
                if(filterObj.hasOwnProperty(property)){
                    var compare = items[item][property].toString();
                    if(compare.indexOf(args) !== -1 ){
                        returnArray.push(items[item])
                    }
                }
            }
        }
        if(args.length === 0){
            return items;
        }
        return returnArray;
    }
}
@Component({
    selector: 'card',
    template:  `
        <div *ngFor="let card of cardData | searchFilter:searchValue">
            <div (click)="setSelectedItem(card)" class="card-border">
                <picture [isRounded]="card.roundPicture" [url]="card.picture"></picture>
                
                <div class="right-side">
                   
                    <card-title [name]="card.title"></card-title>
                    <card-content [cardData]="card.content"></card-content>
                </div>
            </div>
        
       </div>
    `,
    styles:[`
        .selected {
            background-color: green;
        }
        .right-side {
             float:right;    
        }
        .card-border {
            overflow:auto;
            padding-top: 15px;
            padding-left: 15px;
            font-size: 16px;
            
            margin-bottom:10px;
            border:5px solid #808080;
            border-radius: 15px;
        }
    `]
})
export class CardComponent{
    @Input() isSelected = false;
    @Input() searchValue;
    @Input() cardData: any;
    @Input() type: string;
    @Output() selected = new EventEmitter();
    constructor(){}
    ngOnInit(){
        console.log(this.cardData);
    }
    setSelectedItem(e: any, index:number){
        this.selected.next(e);
    }
     
}


            