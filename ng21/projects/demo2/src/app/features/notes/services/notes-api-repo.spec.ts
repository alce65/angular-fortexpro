import { TestBed } from '@angular/core/testing';

import { NotesApiRepo } from './notes-api-repo';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { environment } from '../../../../environments/environment.development';
import { Note } from '../types/notes';


describe('NotesApiRepo', () => {
  let service: NotesApiRepo;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        // Versiones previas a la 21
        //provideHttpClient(withFetch()),
        provideHttpClientTesting(),
        NotesApiRepo,
      ],
    });
    service = TestBed.inject(NotesApiRepo);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all notes', () => {
    const apiUrl = `${environment.apiUrl}/notes`;

    const mockNotes: Note[] = [] //TASKS;

    service.getAll().subscribe((notes) => {
      expect(notes).toEqual(mockNotes);
      // Versiones previas a la 21
      //done()
    });
    const req = controller.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockNotes);
  });

  afterEach(() => {
    controller.verify();
  });
});
