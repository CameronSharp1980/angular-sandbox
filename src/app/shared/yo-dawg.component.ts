import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";
import { IYoDawg } from '../interfaces/IYoDawg';

@Component({
    selector: 'yo-dawg',
    templateUrl: './yo-dawg.component.html',
    styleUrls: ['./yo-dawg.component.css']
})
export class yoDawgComponent implements OnChanges {
    title: 'yo-dawg'
    @Input() input: number;

    @Output() output: EventEmitter<string> = new EventEmitter<string>();

    imageUrl: string = '../assets/x1.jpg';
    yoDawgData: IYoDawg = {
        toggle: false
    }
    onClick(): void {
        this.output.emit("Ruff!");
        this.imageUrl = '../assets/x2.jpg';
    }

    ngOnChanges(): void {
        this.yoDawgData.toggle = !this.yoDawgData.toggle;
    }
}