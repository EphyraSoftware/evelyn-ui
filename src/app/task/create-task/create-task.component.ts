import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  newTaskForm: FormGroup;

  constructor(private taskService: TaskService) {
    this.newTaskForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
    });
  }

  ngOnInit() {
  }

  createTask() {
    this.taskService.createTask(this.newTaskForm.getRawValue()).subscribe(response => {
      console.log(response);
    });
  }
}
