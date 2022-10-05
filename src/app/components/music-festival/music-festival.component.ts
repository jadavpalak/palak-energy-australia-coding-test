import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Band } from 'src/app/interfaces/band';
import { MusicFestival } from 'src/app/interfaces/musicfestival';
import { MusicFestivalService } from 'src/app/services/music-festival.service';

@Component({
  selector: 'app-music-festival',
  templateUrl: './music-festival.component.html',
  styleUrls: ['./music-festival.component.scss'],
})
export class MusicFestivalComponent implements OnInit {
  festivals: MusicFestival[] = [];
  recordLabels = new Map();
  loaded = false;
  constructor(private _musicFestivalService: MusicFestivalService) {}

  ngOnInit() {
    this.loadFestivals();
  }

  loadFestivals() {
    this.loaded = false;
    this._musicFestivalService.getMusicFestivalData().subscribe(
      (data: MusicFestival[]) => {
        this.festivals = data;
        this.parseFestivals();
        this.sortRecordlabels();
        this.loaded = true;
      },
      (error: any) => {
        console.log('Something went wrong');
      }
    );
  }

  parseFestivals() {
    if (this.festivals.length === 0) {
      return;
    }
    this.festivals.forEach((festival: MusicFestival) => {
      festival.bands.forEach((band) => {
        this.setUpRecordLabels(band, festival.name);
      });
    });
  }

  setUpRecordLabels(band: any, festival: any) {
    const label = band.recordLabel ? band.recordLabel : 'No label';
    const validFestival = festival ? true : false;
    const bandMap = this.recordLabels.get(label);
    if (bandMap !== undefined) {
      if (bandMap.get(band.name)) {
        if (validFestival) {
          bandMap.get(band.name).add(festival);
        }
      } else {
        const set = new Set<string>();
        if (validFestival) {
          set.add(festival);
        }
        bandMap.set(band.name, set);
      }
    } else {
      const map = new Map<string, Set<string>>();
      const set = new Set<string>();
      if (validFestival) {
        set.add(festival);
      }
      map.set(band.name, set);
      this.recordLabels.set(label, map);
    }
  }

  sortRecordlabels() {
    this.recordLabels.forEach(
      (
        bands: Map<string, Set<string>>,
        label: string,
        record: Map<string, Map<string, Set<string>>>
      ) => {
        bands.forEach(
          (
            festivals: Set<string>,
            band: string,
            map: Map<string, Set<string>>
          ) => {
            map.set(band, this.sortSet(festivals));
          }
        );
      }
    );
  }

  sortSet(set: Set<string>) {
    return new Set([...set].sort());
  }

  getRecordArray(setValue: any) {
    return Array.from(setValue);
  }

  getLengthOfSets(setValue: any) {
    return setValue.size;
  }
}
