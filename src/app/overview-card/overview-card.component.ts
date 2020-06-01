import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-overview-card",
  templateUrl: "./overview-card.component.html",
  styleUrls: ["./overview-card.component.css"],
})
export class OverviewCardComponent implements OnInit {
  constructor() {}
  @Input() reponame;
  @Input() repourl;
  url = "https://github.com/abhishekn123/" + this.reponame;
  ngOnInit(): void {
    console.log(this.repourl);
  }
}
