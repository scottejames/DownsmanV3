import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownsmanAppComponent } from './downsman-app.component';

describe('DownsmanAppComponent', () => {
  let component: DownsmanAppComponent;
  let fixture: ComponentFixture<DownsmanAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownsmanAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownsmanAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
