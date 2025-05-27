import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
}
