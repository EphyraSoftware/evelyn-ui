import {Component, OnInit} from '@angular/core';
import {TaskService} from '../task.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as moment from 'moment';

export interface Task {
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

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks$ = this.taskService.getTasks().pipe(
      map(value => {
        value.forEach(task => {
          task.displayDate = moment(task.createdDateTime).format('MMMM Do YYYY');
        });

        return value;
      })
    );
  }
}
