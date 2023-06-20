import { Component } from '@angular/core';
import { TransectionsService } from '../../../services/transections.service';

@Component({
  selector: 'app-transection-list',
  templateUrl: './transection-list.component.html',
  styleUrls: ['./transection-list.component.scss']
})


export class TransectionListComponent {
  transectionData:any=[];
  filteredTransactions:any=[];
  constructor(private _transections:TransectionsService){}
  ngOnInit(){
    this._transections.getTransections().subscribe(res=>{
      this.transectionData=res;
      this.filteredTransactions=this.transectionData;
      console.log(this.transectionData);
      
    })
  }
  filterData(event:any){
    this.filteredTransactions = this.transectionData.filter((transaction: { merchant: { name: string; }; }) =>
      transaction.merchant.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
  }
}
