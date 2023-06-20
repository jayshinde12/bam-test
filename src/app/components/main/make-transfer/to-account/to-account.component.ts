import { Component } from '@angular/core';
import { Validators, FormBuilder  } from '@angular/forms';
import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-to-account',
  templateUrl: './to-account.component.html',
  styleUrls: ['./to-account.component.scss']
})
export class ToAccountComponent {
  constructor(private fb: FormBuilder, protected modalService: ModalService){}
  transfer=this.fb.group({
    toAccount :['', Validators.required],
    amount : ['',[Validators.required, Validators.pattern(/^-?\d*(\.\d+)?$/), Validators.min(-500)]]
});
addItem(newItem: Event):void {
  this.modalService.open('modal-1');
}
transferSend(){
  this.transfer.reset();
  this.modalService.close()
}
}
