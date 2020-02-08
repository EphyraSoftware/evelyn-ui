import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  createTodo(todoModel: any) {
    return this.http.post(`${environment.serviceUrl}/todos`, todoModel);
  }

  getTodos() {
    return this.http.get(`${environment.serviceUrl}/todos`);
  }
}
