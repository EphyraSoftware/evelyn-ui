import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {Task} from './manage-tasks/manage-tasks.component';
import {Operation} from 'fast-json-patch';
import {map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }

  private refresh$ = new BehaviorSubject(undefined);

  createTask(task: any) {
    return this.http.post(`${environment.serviceUrl}/tasks`, task).pipe(
      map(val => {
        this.refresh$.next(undefined);
        return val;
      })
    );
  }

  getTasks() {
    return this.refresh$.pipe(
      switchMap(() => {
        return this.http.get(`${environment.serviceUrl}/tasks`) as Observable<Task[]>;
      })
    );
  }

  patchTask(taskId: string, patch: Operation[]) {
    return this.http.patch(`${environment.serviceUrl}/tasks/${taskId}`, patch).pipe(
      map(val => {
        this.refresh$.next(undefined);
        return val;
      })
    );
  }

  deleteTask(task: Task) {
    return this.http.delete(`${environment.serviceUrl}/tasks/${task.taskId}`).pipe(
      map(val => {
        this.refresh$.next(undefined);
        return val;
      })
    );
  }
}
