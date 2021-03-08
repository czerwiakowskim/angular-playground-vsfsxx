import { Component, Input } from "@angular/core";

@Component({
  selector: "app-list-item",
  template: "<div>{{ itemValue }}</div>"
})
export class AppListItemComponent {
  @Input()
  public itemValue: string;
}
