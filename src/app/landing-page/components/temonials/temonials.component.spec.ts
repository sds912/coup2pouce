import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemonialsComponent } from './temonials.component';

describe('TemonialsComponent', () => {
  let component: TemonialsComponent;
  let fixture: ComponentFixture<TemonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemonialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
