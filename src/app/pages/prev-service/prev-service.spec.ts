import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevService } from './prev-service';

describe('PrevService', () => {
  let component: PrevService;
  let fixture: ComponentFixture<PrevService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrevService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrevService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
