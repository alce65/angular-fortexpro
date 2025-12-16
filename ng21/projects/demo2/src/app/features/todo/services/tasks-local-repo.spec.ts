import { TestBed } from '@angular/core/testing';

import { TasksLocalRepo } from './tasks-local-repo';
import { AppStorage } from '../../../core/services/storage';

describe('TasksLocalRepo', () => {
  let service: TasksLocalRepo;

  const mockAppStorage = {
    get: vi.fn().mockReturnValue([]),
    set: vi.fn(),
    remove: vi.fn()
  }


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AppStorage,
          useValue: mockAppStorage
        }
      ]
    });
    service = TestBed.inject(TasksLocalRepo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
