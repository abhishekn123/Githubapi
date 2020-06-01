import { Component, OnInit } from "@angular/core";
import { ServiceService } from "./../GithubService/service.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor(public service: ServiceService) {}
  search;
  ngOnInit(): void {}
  searchUser() {
    this.service.GetGithubuser(this.service.search).subscribe(
      (data) => {
        this.service.user = data;
      },
      (err) => {
        console.log(err);
        alert("Invalid user");
        return;
      }
    );
    this.service.GetGithubrepositories(this.service.search).subscribe(
      (data) => {
        console.log("data", data);
        this.service.repos = data;
      },
      (err) => {
        alert("Something Went Wrong");
      }
    );
  }
}
