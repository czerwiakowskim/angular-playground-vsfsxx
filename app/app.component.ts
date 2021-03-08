import { Component } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: "my-app",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent {
  public items$: Subject<string[]> = new Subject<string[]>();

  constructor() {
    var items = this.calculateItems();
    this.items$.next(items);
  }

  private calculateItems(): string[] {
    var items = [];
    for (let i = 0; i < 100; i++) {
      items.push(i);
    }
    return items;
  }

  public updateItems(): void {
    let items = this.calculateItems();
    this.items$.next(items);
    this.items$.subscribe(value => console.log("Updated items", items));
  }
}
