import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicFestivalComponent } from './music-festival.component';

describe('MusicFestivalComponent', () => {
  let component: MusicFestivalComponent;
  let fixture: ComponentFixture<MusicFestivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicFestivalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
