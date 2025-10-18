import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-section',
  imports: [CommonModule, RouterLink],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.scss',
})
export class CtaSection {
  @Input() title: string = '';
  @Input() buttonText: string = '';
  @Input() buttonLink: string = '';
}
