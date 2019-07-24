import { Component } from '@angular/core';
import { env, title } from './env';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  myenv: title = env;

  name = this.myenv.name;
}
