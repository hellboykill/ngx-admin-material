import { Component, Input, OnInit } from "@angular/core";
import { switchMap } from "rxjs/operators";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { ad_network_settings } from "../create/max-helper";

@Component({
  selector: "max-details",
  templateUrl: "./max-edit.component.html",
  styleUrls: ["./max-edit.component.scss"],
})
export class MaxEditComponent implements OnInit {
  @Input() masterName;

  maxDetail$: Observable<ad_network_settings>;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    console.log(history.state);
    console.log(this.masterName);
  }
}
