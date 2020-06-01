import { Component, OnInit } from "@angular/core";
import { ServiceService } from "../GithubService/service.service";

@Component({
  selector: "app-tab",
  templateUrl: "./tab.component.html",
  styleUrls: ["./tab.component.css"],
})
export class TabComponent implements OnInit {
  constructor(public service: ServiceService) {}
  ngOnInit(): void {}
  getfollowers() {
    this.service.GetFollowersUrl().subscribe(
      (data) => {
        this.service.followers = data;
      },
      (err) => {
        alert("No Followers Found");
      }
    );
  }
  getfollowing() {
    console.log("called");
    this.service.GetFollowingUrl(this.service.search).subscribe(
      (data) => {
        this.service.following = data;
      },
      (err) => {
        alert("No Following Found");
      }
    );
  }
}
