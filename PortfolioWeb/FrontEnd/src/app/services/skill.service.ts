import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skills } from '../models/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  //URL = environment.URL + 'skill/';
  URL = 'https://backendtilajc.herokuapp.com/skill/';
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.URL+'lista');
  }

  public detail(id: number): Observable<Skills>{
    return this.httpClient.get<Skills>(this.URL+`detail/${id}`);
  }

  public save(skill: Skills): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', skill);
  }

  public update(id: number, skill: Skills): Observable<any>{
    return this.httpClient.put<any>(this.URL+`update/${id}`, skill);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete(this.URL+`delete/${id}`);
  }
}
