import { Component } from '@angular/core';
import { FormControl} from '@angular/forms';
@Component({
  selector: 'app-from-account',
  templateUrl: './from-account.component.html',
  styleUrls: ['./from-account.component.scss']
})
export class FromAccountComponent {
  
  fromAccount= new FormControl({value:'My Personal Account: € 5824.76',disabled:true});

}
