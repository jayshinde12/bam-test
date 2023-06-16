import { Component } from '@angular/core';
import { TransectionsService } from 'src/app/components/services/transections.service';

@Component({
  selector: 'app-transection-list',
  templateUrl: './transection-list.component.html',
  styleUrls: ['./transection-list.component.scss']
})


export class TransectionListComponent {
  transectionData:any=[];
  constructor(private _transections:TransectionsService){}
  ngOnInit(){
    this._transections.getTransections().subscribe(res=>{
      this.transectionData=res;
      console.log(this.transectionData);
      
    })
  }
  filterData(event:any){
   return this.transectionData.filter((item: { merchant: { name: any; }; }) => item.merchant.name === event.key);
  }
}
