import { Component } from '@angular/core';
import { HeroSection } from '../../components/hero-section/hero-section';
import { CtaSection } from '../../components/cta-section/cta-section';

@Component({
  selector: 'app-train-service',
  imports: [HeroSection, CtaSection],
  templateUrl: './train-service.html',
  styleUrl: './train-service.scss'
})
export class TrainService {

}
