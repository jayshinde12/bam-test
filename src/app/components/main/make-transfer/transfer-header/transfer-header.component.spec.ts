import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferHeaderComponent } from './transfer-header.component';

describe('TransferHeaderComponent', () => {
  let component: TransferHeaderComponent;
  let fixture: ComponentFixture<TransferHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferHeaderComponent]
    });
    fixture = TestBed.createComponent(TransferHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
