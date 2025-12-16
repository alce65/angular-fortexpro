import { Component, inject, output } from '@angular/core';
import { Card } from '../../../../core/components/card/card';
import { FormsModule, NgForm } from '@angular/forms';
import { TaskDTO } from '../../types/task';
import { TasksStore } from '../../store/tasks-store';

@Component({
  selector: 'fox-task-form',
  imports: [Card, FormsModule],
  template: `
    <fox-card title="Task Form">
      <form #form #ngForm="ngForm" (ngSubmit)="handleSubmit(ngForm)">
        <label for="task-title">
          <span>Título: </span>
          <input id="task-title" name="title" type="text" required minlength="5" ngModel />
        </label>
        @if (ngForm.controls['title']?.touched && ngForm.controls['title']?.invalid) {
          @if (ngForm.controls['title']?.errors?.['required']) {
            <p class="error">El campo es requerido.</p>
          }
          @if (ngForm.controls['title']?.errors?.['minlength']) {
            <p class="error">El campo debe tener al menos 5 caracteres.</p>
          }
        }
        <label for="task-owner">
          <span>Responsable: </span>
          <input id="task-owner" name="owner" type="text" ngModel />
        </label>
        <div>
          <button type="submit" [disabled]="ngForm.invalid">Crear</button>
        </div>
      </form>
    </fox-card>
  `,
  styles: `
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .error {
      color: red;
      font-size: 0.875rem;
      margin: 0;
    }
  `,
})
export class TaskForm {
  // form = viewChild<ElementRef>('form');
  // ngForm = viewChild<NgForm>('ngForm');
  protected readonly createEvent = output();
  private store = inject(TasksStore);

  // ngOnInit(): void {
  //   console.log(this.form());
  //   console.log(this.ngForm());
  // }

  protected handleSubmit(ngForm: NgForm) {
    const data: TaskDTO = ngForm.value;
    this.store.add(data);
    this.createEvent.emit();
    ngForm.resetForm();
  }
}
