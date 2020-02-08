import {Component, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-manage-todos',
  templateUrl: './manage-todos.component.html',
  styleUrls: ['./manage-todos.component.scss']
})
export class ManageTodosComponent implements OnInit {
  todos$: Observable<any>;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos$ = this.todoService.getTodos();
  }

}
