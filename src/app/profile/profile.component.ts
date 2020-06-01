import { Component, OnInit } from "@angular/core";
import { ServiceService } from "./../GithubService/service.service";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  constructor(public service: ServiceService) {}
  ngOnInit(): void {}
}
