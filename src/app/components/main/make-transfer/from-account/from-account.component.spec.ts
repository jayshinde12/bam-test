import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromAccountComponent } from './from-account.component';

describe('FromAccountComponent', () => {
  let component: FromAccountComponent;
  let fixture: ComponentFixture<FromAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FromAccountComponent]
    });
    fixture = TestBed.createComponent(FromAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
