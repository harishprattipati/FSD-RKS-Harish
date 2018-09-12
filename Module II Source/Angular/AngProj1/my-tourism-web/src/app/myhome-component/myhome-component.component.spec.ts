import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhomeComponentComponent } from './myhome-component.component';

describe('MyhomeComponentComponent', () => {
  let component: MyhomeComponentComponent;
  let fixture: ComponentFixture<MyhomeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyhomeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyhomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
