import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
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
      items: new FormArray([
        new FormControl('')
      ])
    });
  }

  ngOnInit() {
  }

  createTodo() {
    const createModel = {
      name: this.newTodoForm.get('name').value,
      initialItems: (this.newTodoForm.get('items') as FormArray).value.filter(i => i).map(item => {
        return {
          text: item
        };
      })
    };

    this.todoService.createTodo(createModel).subscribe(response => {
      console.log(response);
    });
  }

  get items() {
    return (this.newTodoForm.get('items') as FormArray).controls as FormControl[];
  }

  itemFocusLost(i: number) {
    // If there are multiple items and this is not the last item and the input has no value. remove it.
    if (this.items.length > 1 && i + 1 !== this.items.length && !this.items[i].value) {
      (this.newTodoForm.get('items') as FormArray).removeAt(i);
    }
  }

  itemKeyUp(i: number) {
    if (i + 1 === this.items.length && this.items[i].value) {
      (this.newTodoForm.get('items') as FormArray).push(new FormControl(''));
    }
  }
}
