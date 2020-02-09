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
  itemTextClasses: string[][];

  constructor(private todoService: TodoService, private formBuilder: FormBuilder) {
    this.open = false;
    this.stateIcon = faAngleRight;
  }

  ngOnInit() {
    this.checkedValues = this.todo.items.map(value => {
      return value.complete;
    });

    this.itemTextClasses = this.checkedValues.map(value => {
      const classes = ['ml-3'];
      if (value) {
        classes.push('text-muted');
        classes.push('complete');
      }

      return classes;
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

    if (this.checkedValues[i]) {
      this.itemTextClasses[i].push('text-muted');
      this.itemTextClasses[i].push('complete');
    } else {
      this.itemTextClasses[i] = this.itemTextClasses[i].filter(value => value !== 'text-muted' && value !== 'complete');
    }

    const item = {
      text: this.todo.items[i].text,
      complete: this.checkedValues[i]
    };

    this.todoService.updateItem(this.todo.id, i, item).subscribe(response => {
      console.log(response);
    });
  }
}
