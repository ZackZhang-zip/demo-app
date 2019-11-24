import { Component, HostBinding } from '@angular/core';
import { Router, NavigationStart, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { LayoutSettings } from 'src/models/layout-settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-app';

  layoutSettings: LayoutSettings;

  constructor(private router: Router) {
    router.events.subscribe(evt => {
      
    });
  }
}
