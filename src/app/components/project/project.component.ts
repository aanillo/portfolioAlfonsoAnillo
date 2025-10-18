import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { proyecto } from '../../models/proyecto';
import { ProyectoService } from '../../services/proyecto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  projects: proyecto[] = [];
  filteredProjects: proyecto[] = [];
  selectedCategory: string = '';

  constructor(private router: Router, private service: ProyectoService) {

  }

  ngOnInit(): void {
    this.projects = this.service.getAllProjects();
    this.filteredProjects = this.projects;
    this.selectedCategory = '';
  }
  
  filterByCategory(category: string) {
    this.selectedCategory = category.toLowerCase();
    this.filteredProjects = this.service.getProjectsByCategory(this.selectedCategory);
  }

  showAllProjects() {
    this.filteredProjects = this.projects;
    this.selectedCategory = '';
  }
}
