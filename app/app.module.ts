import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { CoreModule } from "./core";
import { HelloFrameworkModule } from "./hello-framework";
import { AppListItemComponent } from "./list.item.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, AppListItemComponent],
  imports: [CoreModule, HelloFrameworkModule, BrowserModule]
})
export class AppModule {}
