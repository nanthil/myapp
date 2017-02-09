import {Component, Input} from '@angular/core';
import {PictureService} from './picture.service';
@Component({
	selector: 'picture',
	template: `<img class="card-picture" 
                    [ngClass]="{rounded: isRounded}"
                    *ngIf="url" [src]="url"/>`,
    styles: [`
        .card-picture {
            height: 100px;
            float:left;
        }
        .rounded {
            
            border-radius: 50%;
        }
    `]
})
export class CardPictureComponent {
    @Input() url;
    @Input() isRounded = false;
    tmpurl;
    
    constructor(private pictureService: PictureService){

    }
    ngOnInit(){
        
    }
}