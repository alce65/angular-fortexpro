import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskItem } from './task-item';
import { Task } from '../../types/task';

const mockTask: Task = {

} as Task

describe('TaskItem', () => {
  let component: TaskItem;
  let fixture: ComponentFixture<TaskItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskItem);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('task', mockTask)
    
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
