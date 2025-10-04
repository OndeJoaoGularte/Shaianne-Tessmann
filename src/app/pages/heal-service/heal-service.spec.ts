import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealService } from './heal-service';

describe('HealService', () => {
  let component: HealService;
  let fixture: ComponentFixture<HealService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
