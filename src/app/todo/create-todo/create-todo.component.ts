import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {TodoService} from '../todo.service';
import {NgbCalendar, NgbDate} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {
  newTodoForm: FormGroup;
  expiryDate: NgbDate;
  expiryTime: { hour: number, minute: number };
  today: NgbDate;

  constructor(private todoService: TodoService, private calendar: NgbCalendar) {
    this.newTodoForm = new FormGroup({
      name: new FormControl(''),
      neverExpire: new FormControl(false),
      items: new FormArray([
        new FormControl('')
      ])
    });
  }

  ngOnInit() {
    this.today = this.expiryDate = this.calendar.getToday();
    this.expiryTime = {hour: 23, minute: 59};
  }

  createTodo() {
    let expiry = null;
    if (!this.newTodoForm.get('neverExpire').value) {
      expiry = new Date(this.expiryDate.year, this.expiryDate.month - 1, this.expiryDate.day, this.expiryTime.hour, this.expiryTime.minute);
    }

    const createModel = {
      name: this.newTodoForm.get('name').value,
      expiry: expiry,
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

  updateExpiry($event: NgbDate) {
    this.expiryDate = $event;
  }
}
