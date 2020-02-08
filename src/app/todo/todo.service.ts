import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

export interface TodoItem {
  text: string;
}

export interface Todo {
  name: string;
  items: TodoItem[];
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  createTodo(todoModel: any) {
    return this.http.post(`${environment.serviceUrl}/todos`, todoModel);
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get(`${environment.serviceUrl}/todos`) as Observable<Todo[]>;
  }
}
