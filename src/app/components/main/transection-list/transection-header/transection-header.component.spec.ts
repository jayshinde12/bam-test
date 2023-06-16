import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransectionHeaderComponent } from './transection-header.component';

describe('TransectionHeaderComponent', () => {
  let component: TransectionHeaderComponent;
  let fixture: ComponentFixture<TransectionHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransectionHeaderComponent]
    });
    fixture = TestBed.createComponent(TransectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
