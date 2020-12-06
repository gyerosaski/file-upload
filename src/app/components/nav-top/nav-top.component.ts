import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.scss']
})
export class NavTopComponent implements OnInit {
  activeRoute: string;

  constructor(
    private router: Router,
  ) {
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.activeRoute = event.url;
        }
      });
  }

  ngOnInit() {
  }

}
