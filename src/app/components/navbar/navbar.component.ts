import { Component, Input, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  @Input() activeRoute: string = '';
  menuOpen = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.activeRoute = this.router.url;
    });
  }

  goTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.activeRoute = `/${sectionId}`;
    }
  }

  ngAfterViewInit() {
    const sectionIds = ['home', 'me', 'skills', 'projects', 'edu', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeRoute = `/${entry.target.id}`;
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
