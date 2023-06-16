import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToAccountComponent } from './to-account.component';

describe('ToAccountComponent', () => {
  let component: ToAccountComponent;
  let fixture: ComponentFixture<ToAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToAccountComponent]
    });
    fixture = TestBed.createComponent(ToAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
