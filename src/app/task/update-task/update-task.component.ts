import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../manage-tasks/manage-tasks.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup} from '@angular/forms';
import * as jp from 'fast-json-patch';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent implements OnInit {
  @Input() task: Task;
  private updateForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private taskService: TaskService) {
    this.updateForm = this.formBuilder.group({
      title: this.formBuilder.control(''),
      description: this.formBuilder.control('')
    });
  }

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      title: this.formBuilder.control(this.task.title),
      description: this.formBuilder.control(this.task.description)
    });
  }

  save() {
    const updated = Object.assign({}, this.task);
    updated.title = this.updateForm.get('title').value;
    updated.description = this.updateForm.get('description').value;

    const patch = jp.compare(this.task, updated);
    this.taskService.patchTask(this.task.taskId, patch).subscribe(result => {
      console.log(result);
      this.activeModal.close('saved');
    });
  }
}
