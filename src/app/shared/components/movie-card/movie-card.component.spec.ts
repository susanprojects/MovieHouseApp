import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { MovieCardComponent } from './movie-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MovieCardComponent],
      providers: []
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle isReadMore link on movie plot', () => {
    expect(component.isReadMore).toEqual(true);
    component.showPlotLengthText();
    expect(component.isReadMore).toEqual(false);
    component.showPlotLengthText();
    expect(component.isReadMore).toEqual(true);
  });
});

