import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ContactModel} from '../models/contact.model';

@Injectable({
  providedIn: "root"
})
export class BackendService {
  readonly BACKEND_URL = 'http://localhost:8080/api'

  http: HttpClient = inject(HttpClient)

  getContacts(): Observable<ContactModel[]> {
    const url = `${this.BACKEND_URL}/contact`

    return this.http.get<ContactModel[]>(url)
  }

  postContact(body: ContactModel): Observable<ContactModel> {
    const url = `${this.BACKEND_URL}/contact`

    return this.http.post<ContactModel>(url, body)
  }

  deleteContact(id: number): Observable<{ status: string }> {
    const url = `${this.BACKEND_URL}/contact/${id}`

    return this.http.delete<{ status: string }>(url)
  }

  getFilteredContact(name: string): Observable<ContactModel[]> {
    const url = `${this.BACKEND_URL}/contact/search`
    const params = new HttpParams().set('searchTerm', name)

    return this.http.get<ContactModel[]>(url, {params})
  }
}
