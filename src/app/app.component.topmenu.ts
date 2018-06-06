import { Component } from "@angular/core";

@Component({
    selector: 'TopMenu',
    templateUrl: 'app.component.topmenu.html',
    styleUrls: ['./app.component.topmenu.css']
})
export class TopMenu {
    title: 'Top Menu';
    dataBinding: string = 'Data Binding';
    eventBinding: string = 'Event Binding';
    clicked: boolean = false;

    _typeType: string = 'Type Here';
    get clickyClicky(){
        return this._typeType;
    }
    set clickyClicky(value: string){
        this._typeType = value;
    }

    clickMe(){
        if(this.clicked){
            this.clicked = !this.clicked;
            this.eventBinding = 'True';
        } else {
            this.clicked = !this.clicked;
            this.eventBinding = 'False';
        }
    }
}