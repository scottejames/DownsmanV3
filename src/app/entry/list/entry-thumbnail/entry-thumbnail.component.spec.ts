import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryThumbnailComponent } from './entry-thumbnail.component';

describe('EntryThumbnailComponent', () => {
  let component: EntryThumbnailComponent;
  let fixture: ComponentFixture<EntryThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
