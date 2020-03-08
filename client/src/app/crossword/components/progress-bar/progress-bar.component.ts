import { Component, Input } from "@angular/core";

@Component({
  selector: "app-progress-bar",
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.css"]
})
export class ProgressBarComponent {

  @Input() public numberOfWords: string;
  @Input() public numberOfWordsFound: string;

}