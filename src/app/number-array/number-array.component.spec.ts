import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberArrayComponent } from './number-array.component';

describe('NumberArrayComponent', () => {
  let component: NumberArrayComponent;
  let fixture: ComponentFixture<NumberArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
