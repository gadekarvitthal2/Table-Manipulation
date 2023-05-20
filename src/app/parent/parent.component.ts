import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{
  Table_Data={
  }
  constructor(private tableService:TableService) {}
  ApiStatus:boolean=false;
  ngOnInit(): void {
    this.tableService.getData()
    .subscribe(data=>{
      if(data){
        this.Table_Data=data
      }
    },(error)=>{this.ApiStatus=true})
  }



}
