import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferPopupComponent } from './transfer-popup.component';

describe('TransferPopupComponent', () => {
  let component: TransferPopupComponent;
  let fixture: ComponentFixture<TransferPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferPopupComponent]
    });
    fixture = TestBed.createComponent(TransferPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
