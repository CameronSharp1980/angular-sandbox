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
    clickyBool: boolean = false;

    _clickyClicky: string = 'Clickable';
    get clickyClicky(){
        return this._clickyClicky;
    }
    set clickyClicky(value: string){
        if(this.clickyBool){
            this._clickyClicky = 'Clicked!';
            this.clickyBool = !this.clickyBool;
        } else{
            this.clickyBool = !this.clickyBool;
            this._clickyClicky = 'Clickable';
        }
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