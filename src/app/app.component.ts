import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Sandbox';
  dawgLoopNum: number[] = [1, 2, 3, 4, 5]
  inputOutputText: string;
  inputOutput(value: string) {
    this.inputOutputText = value;
  }
}
