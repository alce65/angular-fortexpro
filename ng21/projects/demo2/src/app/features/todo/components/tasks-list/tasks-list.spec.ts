import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksList } from './tasks-list';
import { Task } from '../../types/task';
import { of } from 'rxjs';
import { TasksLocalRepo } from '../../services/tasks-local-repo';

describe('TasksList', () => {
  let component: TasksList;
  let fixture: ComponentFixture<TasksList>;

  const mockData: Task[] = [];
  const mockTaskLocalRepo: TasksLocalRepo = {
    getAll: vi.fn().mockReturnValue(of(mockData)),
    add: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
  } as unknown as TasksLocalRepo;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksList],
      providers: [
        {
          provide: TasksLocalRepo,
          useValue: mockTaskLocalRepo,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
