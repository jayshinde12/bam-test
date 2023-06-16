import { Component } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.scss']
})
export class MakeTransferComponent {
  addItem(newItem: Event) {
    console.log(newItem,"newItem");
    // this.modalService.open(newItem);
    
  }
}
