import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangechartComponent } from './rangechart.component';

describe('RangechartComponent', () => {
  let component: RangechartComponent;
  let fixture: ComponentFixture<RangechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RangechartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RangechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
