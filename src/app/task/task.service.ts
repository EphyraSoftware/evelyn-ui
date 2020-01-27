import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';
import {Task} from './manage-tasks/manage-tasks.component';
import {Operation} from 'fast-json-patch';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }

  createTask(task: any) {
    return this.http.post(`${environment.serviceUrl}/tasks`, task);
  }

  getTasks() {
    return this.http.get(`${environment.serviceUrl}/tasks`) as Observable<Task[]>;
  }

  patchTask(taskId: string, patch: Operation[]) {
    return this.http.patch(`${environment.serviceUrl}/tasks/${taskId}`, patch);
  }
}
