import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoteItem } from './note-item';
import { Note } from '../../types/notes';

const mockNote: Note = {} as Note;

describe('NoteItem', () => {
  let component: NoteItem;
  let fixture: ComponentFixture<NoteItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteItem],
    }).compileComponents();

    fixture = TestBed.createComponent(NoteItem);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('task', mockNote);

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
