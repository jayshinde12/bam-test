import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-to-account',
  templateUrl: './to-account.component.html',
  styleUrls: ['./to-account.component.scss']
})
export class ToAccountComponent {
toAccount = new FormControl('',Validators.required);
}
