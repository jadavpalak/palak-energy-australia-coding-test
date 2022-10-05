import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MusicFestival } from '../interfaces/musicfestival';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MusicFestivalService {
  constructor(private httpclient: HttpClient) {}

  getMusicFestivalData(): Observable<MusicFestival[]> {
    // let headers = new HttpHeaders();
    // headers.append('accept', 'application/json');
    // headers.append('content-type', 'application/json');
    // headers.append('Access-Control-Allow-Origin', '*');
    // return this.httpclient.get<MusicFestival[]>(
    //   'https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals',
    //   {
    //     headers: headers,
    //   }
    // );
    return this.httpclient.get<MusicFestival[]>('../../../assets/response_1.json');
  }
}
