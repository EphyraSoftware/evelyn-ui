import {Component, Input, OnInit} from '@angular/core';
import {Todo, TodoService} from '../todo.service';
import {faAngleDown, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-manage-todo',
  templateUrl: './manage-todo.component.html',
  styleUrls: ['./manage-todo.component.scss']
})
export class ManageTodoComponent implements OnInit {
  @Input() todo: Todo;

  open: boolean;
  stateIcon: IconDefinition;

  checkedValues: boolean[];

  constructor(private todoService: TodoService, private formBuilder: FormBuilder) {
    this.open = false;
    this.stateIcon = faAngleRight;
  }

  ngOnInit() {
    this.checkedValues = this.todo.items.map(value => {
      return value.complete;
    });
  }

  toggleItems() {
    this.open = !this.open;

    if (this.open) {
      this.stateIcon = faAngleDown;
    } else {
      this.stateIcon = faAngleRight;
    }
  }

  toggleItemComplete(i: number) {
    this.checkedValues[i] = !this.checkedValues[i];

    this.checkedValues.forEach(value => console.log(value));

    const item = {
      text: this.todo.items[i].text,
      complete: this.checkedValues[i]
    };

    this.todoService.updateItem(this.todo.id, i, item).subscribe(response => {
      console.log(response);
    });
  }
}
