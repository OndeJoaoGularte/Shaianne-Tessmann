import { Component } from '@angular/core';
import { CtaSection } from '../../components/cta-section/cta-section';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, CtaSection],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
