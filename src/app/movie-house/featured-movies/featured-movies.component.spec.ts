import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayMode, PlotLength } from 'src/app/shared/movie-details';

import { FeaturedMoviesComponent } from './featured-movies.component';

describe('FeaturedMoviesComponent', () => {
  let component: FeaturedMoviesComponent;
  let fixture: ComponentFixture<FeaturedMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturedMoviesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize values for feature mode and plot length', () => {
    expect(component.isFeatureMode).toEqual(DisplayMode.FEATUREMODE);
    expect(component.featurePlotLength).toEqual(PlotLength.FULL);
  });
});
