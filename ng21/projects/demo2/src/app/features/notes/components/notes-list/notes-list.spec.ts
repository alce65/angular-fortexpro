import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesList } from './notes-list';
import { Note } from '../../types/notes';
import { of } from 'rxjs';
import { NotesApiRepo } from '../../services/notes-api-repo';

describe('NotesList', () => {
  let component: NotesList;
  let fixture: ComponentFixture<NotesList>;

  const mockData: Note[] = [];
  const mockNoteLocalRepo: NotesApiRepo = {
    getAll: vi.fn().mockReturnValue(of(mockData)),
    add: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
  } as unknown as NotesApiRepo;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesList],
      providers: [
        {
          provide: NotesApiRepo,
          useValue: mockNoteLocalRepo,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NotesList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
