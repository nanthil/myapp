import {Component, Input} from '@angular/core';

@Component({
    selector: 'card-title',
    template: `
        <div>
            <h3 class="card-name">{{name}}</h3>
        </div>
    `,
    styles: [`.card-name {
        color:green;
    }`]
})
export class CardTitleComponent{
    @Input() name = '';
    @Input() content = '';
}