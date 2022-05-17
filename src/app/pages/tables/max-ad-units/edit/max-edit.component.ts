import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "max-details",
  templateUrl: "./max-edit.component.html",
  styleUrls: ["./max-edit.component.scss"],
})
export class MaxEditComponent implements OnInit {
  @Input() masterName;
  constructor() {}

  ngOnInit() {
    console.log(history.state);

    console.log(this.masterName);
  }
}
