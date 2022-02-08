import { Component, QueryList, VERSION, ViewChildren } from "@angular/core";
import { ScrollViewDirective } from "./scroll-view.directive";


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  @ViewChildren(ScrollViewDirective) viewChildren!: QueryList<
  ScrollViewDirective
  >;

  moveTo(section) {
    this.viewChildren.forEach(x => {
      if (x.appScrollView === section) {
        x.elementRef.nativeElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  }
}
