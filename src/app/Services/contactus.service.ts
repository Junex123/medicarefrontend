import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contactus } from '../Class/contactus';


const baseURL = 'http://localhost:9200/contactus';
const baseURL1 = 'http://localhost:9200/viewcontact';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {
 
  constructor(private http: HttpClient) {}
  baseURL1 = 'http://localhost:9200/viewcontact';
  getAll(): Observable<Contactus[]> {
    return this.http.get<Contactus[]>(baseURL1);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseURL, data);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseURL1}/${id}`);
  }

}
