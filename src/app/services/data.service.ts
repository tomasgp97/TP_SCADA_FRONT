import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
  export class DataService {

    private backendUrl = 'http://localhost:5000'

    constructor(private httpClient: HttpClient) {}

    async getData():Promise<IdList[]> {
      return this.httpClient.get<any>(this.backendUrl + '/data').toPromise();
    }

    async record10Measures():Promise<string[]> {
      return this.httpClient.post<any>(this.backendUrl + '/data', {}).toPromise();
    }
  }

  export class NameValue {
    constructor(
      public name: String,
      public value: string
    ) {}
    public static toNameValue(obj: IdList) {
      return new NameValue(obj.timestamp,obj.value)
    }
  }
  
  export class WeightData {
    constructor(
      public name: string,
      public series: NameValue[]
    ) {
    }
    public static toWeightData(obj: NameValue[]){
      return new WeightData('WEIGHT', obj)
    }
  }

  export interface IdList {
    _id: string
    timestamp:string
    value:string
  }


   //  getData() {
    //     return this.httpClient.get<NameValue[]>(this.backendUrl+ '/data') .pipe(
    //       catchError(this.handleError)
    //     );;
    //   }

    //   record10Measures() {
    //     return this.httpClient.post<String[]>(this.backendUrl+ '/data', {}).pipe(
    //       catchError(this.handleError)
    //     );;
    //   }

    //   private handleError(error: HttpErrorResponse) {
    //     if (error.status === 0) {
    //       console.error('An error occurred:', error.error);
    //     } else {
    //       console.error(
    //         `Backend returned code ${error.status}, body was: `, error.error);
    //     }
    //     return throwError(() => new Error('Something bad happened; please try again later.'));
    //   }