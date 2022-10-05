import { TestBed } from '@angular/core/testing';

import { MusicFestivalService } from './music-festival.service';

describe('MusicFestivalService', () => {
  let service: MusicFestivalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicFestivalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
