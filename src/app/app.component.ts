import {Component, OnInit} from "@angular/core"
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html',
  
})
export class AppComponent implements OnInit {
  
  content = 'Welcome do Meat App!'

  nome:String ="edmar soares de lima"

  constructor() { }

  ngOnInit() {
  }

}
