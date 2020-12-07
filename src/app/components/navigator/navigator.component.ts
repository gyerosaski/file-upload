import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = event.target.innerWidth;
  }
  width;
  activeRoute: string;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) public document: Document
  ) {
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.activeRoute = event.url;
        }
      });
    this.width = this.document.documentElement.clientWidth;
  }

  ngOnInit() {
  }

}
