import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-transfer-amount',
  templateUrl: './transfer-amount.component.html',
  styleUrls: ['./transfer-amount.component.scss']
})
export class TransferAmountComponent {
  amount= new FormControl('', [Validators.required, Validators.pattern(/^-?\d*(\.\d+)?$/), Validators.min(-500)])
}
