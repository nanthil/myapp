import {Component, Input, OnChanges} from '@angular/core';

@Component({
    selector: 'config',
    template:  `
        <h2>{{configData.title}}</h2>
        <form action="demo_form.asp">
            Display Name <input type="text" name="dname" [attr.value]="configData.displayName"><br>
            {{configData.content.inputType}} <input type="text" name="url" [attr.value]="configData.content[configData.content.inputType]"><br>
            <input type="submit" value="Submit">
        </form>
    `,
    styles:[`
       
        
    `]
})
export class ConfigComponent implements OnChanges{
    @Input() configData: any;
    @Input() type: string;
    uiObj;
    constructor(){}
    ngOnInit(){
    }
    ngOnChanges(){
           
    }
     
}

            