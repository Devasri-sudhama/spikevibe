import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestForYouComponent } from './best-for-you.component';

describe('BestForYouComponent', () => {
  let component: BestForYouComponent;
  let fixture: ComponentFixture<BestForYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestForYouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
