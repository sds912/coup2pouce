import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogNewArticlesComponent } from './blog-new-articles.component';

describe('BlogNewArticlesComponent', () => {
  let component: BlogNewArticlesComponent;
  let fixture: ComponentFixture<BlogNewArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogNewArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogNewArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
