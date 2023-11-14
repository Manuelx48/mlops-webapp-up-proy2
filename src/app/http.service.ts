import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {

  }

  public post(req: any): Observable<any> {
    console.log(req);
    const jsonrequest = JSON.stringify(req);
    const url ="https://aml001-vmhcz.eastus2.inference.ml.azure.com/score";

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 5e1T14ew51AwyexXd5bDMlavJdQGraqG'
      }),
    };

    return this.http.post<any>(url, jsonrequest, httpOptions).pipe(
      tap((data: any) => {

      }),
      catchError(err => {
        throw 'Error in source. Details: ' + err;
      }),
    );
  }
}
