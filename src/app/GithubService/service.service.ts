import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MyserviceService } from "./../myservice.service";
@Injectable({
  providedIn: "root",
})
export class ServiceService {
  constructor(private http: HttpClient, public service: MyserviceService) {}
  public repos: any = this.service.repos;
  public user: any = this.service.users;
  public followers: any = this.service.followers;
  public following: any = this.service.following;
  validuser = false;
  search = "abhishekn123";
  GetGithubuser(username) {
    this.search = username;
    return this.http.get("https://api.github.com/users/" + username);
  }
  GetGithubrepositories(username) {
    return this.http.get("https://api.github.com/users/" + username + "/repos");
  }
  GetFollowersUrl() {
    return this.http.get(this.user.followers_url);
  }
  GetFollowingUrl(username) {
    return this.http.get(
      "https://api.github.com/users/" + this.search + "/following"
    );
  }
}
