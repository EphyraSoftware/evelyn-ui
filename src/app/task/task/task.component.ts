import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  newTaskForm: FormGroup;
  tasks: object;

  constructor(private taskService: TaskService) {
    this.newTaskForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
    });
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe(response => {
      this.tasks = response;
    });
  }

  createTask() {
    this.taskService.createTask(this.newTaskForm.getRawValue()).subscribe(response => {
      console.log(response);
    });
  }
}
