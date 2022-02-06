import { Component } from '@angular/core';
import * as essentials from 'sk-essentials';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sk-essentials-test-angular';
  
  constructor() {
    const msg = essentials.merci();
    alert(msg);
  }
}
