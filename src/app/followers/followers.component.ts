import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-followers",
  templateUrl: "./followers.component.html",
  styleUrls: ["./followers.component.css"],
})
export class FollowersComponent implements OnInit {
  constructor() {}
  @Input() type;
  @Input() image_url;
  @Input() profile_url;
  @Input() username;
  @Input() location;
  @Input() bio;
  ngOnInit(): void {}
}
