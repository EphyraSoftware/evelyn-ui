import {Component, OnInit} from '@angular/core';
import {TaskService} from '../task.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as moment from 'moment';
import {FormBuilder, FormGroup} from '@angular/forms';
import * as jp from 'fast-json-patch';

export interface Task {
  taskId: string;
  title: string;
  description: string;
  completed: boolean;
  createdDateTime: Date;
  displayDate: string;
}

@Component({
  selector: 'app-manage-tasks',
  templateUrl: './manage-tasks.component.html',
  styleUrls: ['./manage-tasks.component.scss']
})
export class ManageTasksComponent implements OnInit {
  tasks$: Observable<Task[]>;

  completedForms: FormGroup[];

  constructor(private taskService: TaskService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.tasks$ = this.taskService.getTasks().pipe(
      map(value => {
        this.createForms(value);
        value.forEach(task => {
          task.displayDate = moment(task.createdDateTime).format('MMMM Do YYYY');
        });

        return value;
      })
    );
  }

  private createForms(tasks: Task[]) {
    this.completedForms = tasks.map(task => {
      const result = this.formBuilder.group({
        completed: this.formBuilder.control(task.completed)
      });

      result.valueChanges.subscribe(this.updateHandler(task));

      return result;
    });
  }

  private updateHandler(task: Task) {
    return value => {
      const updatedTask = Object.assign({}, task);
      updatedTask.completed = value.completed;

      const patch = jp.compare(task, updatedTask);
      this.taskService.patchTask(task.taskId, patch).subscribe(result => {
        console.log(result);
      });
    };
  }
}
