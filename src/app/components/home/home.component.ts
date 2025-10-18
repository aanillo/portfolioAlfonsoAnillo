import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  activeRoute: string = '';
  fullText = 'Desarrollador Web Junior';
  displayedText = '';
  index = 0;

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
    this.typeWriter();
  }

  goToContact() {
   const element = document.getElementById('contact');
   if(element) {
    element.scrollIntoView({ behavior: 'smooth' })
   }
  }

  typeWriter() {
    if(this.index < this.fullText.length) {
      this.displayedText += this.fullText.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeWriter(), 50);
    }
  }

}
