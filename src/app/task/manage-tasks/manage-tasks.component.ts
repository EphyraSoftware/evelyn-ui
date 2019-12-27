import {Component, OnInit} from '@angular/core';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-manage-tasks',
  templateUrl: './manage-tasks.component.html',
  styleUrls: ['./manage-tasks.component.scss']
})
export class ManageTasksComponent implements OnInit {
  tasks: object;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(response => {
      this.tasks = response;
    });
  }
}
