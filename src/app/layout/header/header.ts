import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  isMenuOpen = false; //mantém menu mobile fechado
  isScrolled = false; //mantém barra superior aparecendo

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50; //barra superior some ao descer 50 pixels
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen; //alterna entre true ou false ao ser clicado
  }
}

  
  
