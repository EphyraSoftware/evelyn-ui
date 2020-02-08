import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {
  newTodoForm: FormGroup;

  constructor(private todoService: TodoService) {
    this.newTodoForm = new FormGroup({
      name: new FormControl(''),
    });
  }

  ngOnInit() {
  }

  createTodo() {
    this.todoService.createTodo(this.newTodoForm.getRawValue()).subscribe(response => {
      console.log(response);
    });
  }
}
