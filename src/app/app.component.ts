import { Component } from "@angular/core";
import { ServiceService } from "./GithubService/service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Githubapi";
  constructor(public service: ServiceService) {}
}
