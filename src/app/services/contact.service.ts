import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  public sendContactForm(body: any): Observable<any> {
 
    const REST_API_SERVER = environment.contactApi
    
    let result: any
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    
    return this.http.put(REST_API_SERVER, body, { headers: reqHeader }).pipe(map((data) => {
      return data;
    }),
      catchError((err) => {
        console.error(err);
        throw err;
      })
    )
  }
}
