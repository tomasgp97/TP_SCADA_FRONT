import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
  export class DataService {

    private backendUrl = 'localhost:5000'

    constructor(private httpClient: HttpClient) {}

    async getData(): Promise<Observable<IdList[]>> {
        return this.httpClient.get<IdList[]>(this.backendUrl+ '/data');
      }

      async record10Measures(): Promise<Observable<String[]>> {
        return this.httpClient.post<String[]>(this.backendUrl+ '/data', {});
      }

  }

  export interface IdList {
    _id: string
    timestamp: String
    value: number
  }