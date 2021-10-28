import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieHouseComponent } from './movie-house.component';

describe('MovieHouseComponent', () => {
  let component: MovieHouseComponent;
  let fixture: ComponentFixture<MovieHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieHouseComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
