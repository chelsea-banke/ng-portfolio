import { Component } from '@angular/core';
import { RouterSwitchService } from './services/router-switch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chelsea Banke';
  prev = 'home';
  pageTitle = 'Home';

  constructor (private router: Router, private rss: RouterSwitchService){
    this.rss.route$.subscribe((route) => {
      this.router.navigate([route]);
    })
  }

  routeSwitch(route: string){
    this.rss.switch(route);

    if (this.prev != 'contact'){
      document.getElementById(this.prev)!.style.backgroundColor = 'rgb(241, 241, 241)';
      document.getElementById(this.prev)!.style.border = '1px solid rgb(110, 110, 110, 0)';
      document.getElementById(this.prev)!.style.boxShadow = '0px 0px 5px 0px rgb(51, 51, 51) inset';
    }
    if (route != 'contact'){
      document.getElementById(route)!.style.backgroundColor = 'rgb(129, 255, 104)';
      document.getElementById(route)!.style.border = '1px solid #00e400 !important';
      document.getElementById(route)!.style.boxShadow = '0px 0px 5px 0px rgb(51, 51, 51)';
    }

    this.prev = route;
    this.pageTitle = route.charAt(0).toLocaleUpperCase()+route.slice(1);
  }
}