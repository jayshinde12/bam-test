import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransectionListComponent } from './transection-list.component';

describe('TransectionListComponent', () => {
  let component: TransectionListComponent;
  let fixture: ComponentFixture<TransectionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransectionListComponent]
    });
    fixture = TestBed.createComponent(TransectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
