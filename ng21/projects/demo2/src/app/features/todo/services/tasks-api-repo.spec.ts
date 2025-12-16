import { TestBed } from '@angular/core/testing';

import { TasksApiRepo } from './tasks-api-repo';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { environment } from '../../../../environments/environment.development';
import { TASKS } from './tasks';


describe('TasksApiRepo', () => {
  let service: TasksApiRepo;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        // Versiones previas a la 21
        //provideHttpClient(withFetch()),
        provideHttpClientTesting(),
        TasksApiRepo,
      ],
    });
    service = TestBed.inject(TasksApiRepo);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all tasks', () => {
    const apiUrl = `${environment.apiUrl}/tasks`;

    const mockTasks = TASKS;

    service.getAll().subscribe((tasks) => {
      expect(tasks).toEqual(mockTasks);
      // Versiones previas a la 21
      //done()
    });
    const req = controller.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockTasks);
  });

  afterEach(() => {
    controller.verify();
  });
});