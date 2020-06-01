import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { TabComponent } from "./tab/tab.component";
import { ProfileComponent } from "./profile/profile.component";
import { OverviewCardComponent } from "./overview-card/overview-card.component";
import { FollowersComponent } from "./followers/followers.component";
import { HttpClientModule } from "@angular/common/http";
import { ServiceService } from "./GithubService/service.service";
import { FormsModule } from "@angular/forms";
import { MyserviceService } from "./myservice.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TabComponent,
    ProfileComponent,
    OverviewCardComponent,
    FollowersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],

  providers: [ServiceService, MyserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
