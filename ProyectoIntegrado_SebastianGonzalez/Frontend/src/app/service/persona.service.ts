import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //URL = 'http://localhost:8080/personas/';
  URL = 'https://bkdportfolioseg.herokuapp.com/personas/'
  
  constructor(private httpClient: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.httpClient.get<persona>(this.URL + 'traer/perfil');
  }
}
