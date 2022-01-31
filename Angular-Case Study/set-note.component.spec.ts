import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetNoteComponent } from './set-note.component';

describe('SetNoteComponent', () => {
  let component: SetNoteComponent;
  let fixture: ComponentFixture<SetNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
