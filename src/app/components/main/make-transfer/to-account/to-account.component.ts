import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder  } from '@angular/forms';

@Component({
  selector: 'app-to-account',
  templateUrl: './to-account.component.html',
  styleUrls: ['./to-account.component.scss']
})
export class ToAccountComponent {
  constructor(private fb: FormBuilder){}
  transfer=this.fb.group({
    toAccount :['', Validators.required],
    amount : ['',[Validators.required, Validators.pattern(/^-?\d*(\.\d+)?$/), Validators.min(-500)]]
});
addItem(newItem: Event) {
  console.log(newItem,"newItem");
  // this.modalService.open(newItem);
}
}
