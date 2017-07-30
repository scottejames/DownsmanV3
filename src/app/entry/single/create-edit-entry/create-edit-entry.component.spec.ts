import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditEntryComponent } from './create-edit-entry.component';

describe('CreateEditEntryComponent', () => {
  let component: CreateEditEntryComponent;
  let fixture: ComponentFixture<CreateEditEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
