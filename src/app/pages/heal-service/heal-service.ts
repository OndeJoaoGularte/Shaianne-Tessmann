import { Component } from '@angular/core';
import { HeroSection } from '../../components/hero-section/hero-section';
import { CtaSection } from '../../components/cta-section/cta-section';

@Component({
  selector: 'app-heal-service',
  imports: [HeroSection, CtaSection],
  templateUrl: './heal-service.html',
  styleUrl: './heal-service.scss'
})
export class HealService {

}
