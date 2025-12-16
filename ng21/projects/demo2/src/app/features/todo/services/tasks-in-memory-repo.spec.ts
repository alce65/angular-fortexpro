import { TestBed } from '@angular/core/testing';

import { TasksInMemoryRepo } from './tasks-in-memory-repo';

describe('TasksInMemoryRepo', () => {
  let service: TasksInMemoryRepo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksInMemoryRepo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
