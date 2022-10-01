import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyWorkingWhithComponent } from './company-working-whith.component';

describe('CompanyWorkingWhithComponent', () => {
  let component: CompanyWorkingWhithComponent;
  let fixture: ComponentFixture<CompanyWorkingWhithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyWorkingWhithComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyWorkingWhithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
