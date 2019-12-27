import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }

  createTask(task: any) {
    return this.http.post(`${environment.serviceUrl}/tasks`, task);
  }

  getTasks() {
    return this.http.get(`${environment.serviceUrl}/tasks`);
  }
}
