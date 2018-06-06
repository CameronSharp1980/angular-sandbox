import { Component } from "@angular/core";
import { usesInterface } from "../classes/usesInterface";

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
    tehInterfacez: usesInterface[] = [
        new usesInterface("Name 1", 1),
        new usesInterface("Name 2", 2)
    ]

    _typeType: string = 'Type Here';
    get clickyClicky() {
        return this._typeType;
    }
    set clickyClicky(value: string) {
        this._typeType = value;
    }

    clickMe() {
        if (this.clicked) {
            this.clicked = !this.clicked;
            this.eventBinding = 'True';
        } else {
            this.clicked = !this.clicked;
            this.eventBinding = 'False';
        }
    }
}