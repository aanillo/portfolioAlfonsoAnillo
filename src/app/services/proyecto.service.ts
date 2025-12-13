import { Injectable } from '@angular/core';
import { proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private proyectos: proyecto[] = [
    {
      id: 1,
      titulo: 'El rincón del dev',
      imagen: 'img2/dev.jpg',
      descripcion: 'Proyecto web que consiste en crear un espacio donde los desarrolladores y programadores puedan compartir sus vivencias y experiencias tanto laborales como educativas dentro del mundo de la informática.',
      categoria: 'full-stack',
      tecnologias: 'laravel, php, blade, tailwind, alpinejs, mysql',
      enlace: 'https://github.com/aanillo/BlogDev.git',
      demo: 'https://elrincondeldev.up.railway.app/'
    },
    {
      id: 2,
      titulo: 'Libreros',
      imagen: 'img2/libreros.jpg',
      descripcion: 'TFG del Grado Superior de DAW. Proyecto web que consiste en crear un rincón para lectores, donde los usuarios pueden comprar libros, además de consultar información relevante, valorarlos y comentar.',
      categoria: 'full-stack',
      tecnologias: 'laravel, php, blade, tailwind, alpinejs, mysql',
      enlace: 'https://github.com/aanillo/ProyectoLibreros',
      demo: 'https://libreros.duckdns.org'
    },
    {
      id: 3,
      titulo: 'Liga 24/25',
      imagen: 'img2/liga.jpg',
      descripcion: 'Proyecto personal con información referente a la temporada 24/25 en la liga española de fútbol, mostrando información sobre cada club, la clasificación de la temporada y datos históricos.',
      categoria: 'front',
      tecnologias: 'angular, typescript, html, css',
      enlace: 'https://github.com/aanillo/ProyectoLiga24-25',
      demo: 'https://aanillo.github.io/ProyectoLiga24-25/'
    },
    {
      id: 4,
      titulo: 'La casa napolitana',
      imagen: 'img2/napolitana.jpg',
      descripcion: 'Proyecto personal para un restaurante italiano, con información del lugar, el menú, información detallada sobre cada elemento de la carta y la gestión de reservas.',
      categoria: 'front',
      tecnologias: 'angular, typescript, html, css',
      enlace: 'https://github.com/aanillo/CasaNapolitana',
      demo: 'https://aanillo.github.io/CasaNapolitana/'
    },
    {
      id: 5,
      titulo: 'APIRest repartos online',
      imagen: 'img2/stock.jpg',
      descripcion: 'Proyecto que desarrolla el backend de una web encargada de venta online de todo tipo de productos, gestionando los envíos y el stock. Se emplea Spring Security para el control de las sesiones de usuarios.',
      categoria: 'backend',
      tecnologias: 'spring boot, java, mysql, insomnia',
      enlace: 'https://github.com/aanillo/APIRESTPedidos',
      demo: null
    }, 
    {
      id: 6,
      titulo: 'API Hoenn Pokedex',
      imagen: 'img2/hoenn.png',
      descripcion: 'Elaboración de una API con datos de Pokemon de la región de Hoenn, con todo tipo de información sobre características como el tipo, los ataques o la naturaleza.',
      categoria: 'backend',
      tecnologias: 'spring boot, java, mysql, insomnia',
      enlace: 'https://github.com/aanillo/PokedexHoennAPI',
      demo: null
    }, 
  ]

  constructor() { }

  getAllProjects(): proyecto[] {
    return this.proyectos;
  }

  getProjectsByCategory(category: string): proyecto[] {
    return this.proyectos.filter(p => p.categoria === category);
  }
}
