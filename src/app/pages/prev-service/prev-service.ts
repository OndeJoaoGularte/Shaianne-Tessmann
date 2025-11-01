import { Component } from '@angular/core';
import { CtaSection } from '../../components/cta-section/cta-section';
import { HeroSection } from '../../components/hero-section/hero-section';

@Component({
  selector: 'app-prev-service',
  imports: [HeroSection, CtaSection],
  templateUrl: './prev-service.html',
  styleUrl: './prev-service.scss'
})
export class PrevService {

}
