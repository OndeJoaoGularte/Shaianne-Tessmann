import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainService } from './train-service';

describe('TrainService', () => {
  let component: TrainService;
  let fixture: ComponentFixture<TrainService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
