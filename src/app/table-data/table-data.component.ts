import { Component, Input, OnInit,AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit{
  isVisible: boolean =false;
  sortedArray=<any>[]
  searchText:any;
  EmplyeeDetails!:any[];
  @Input() Table_Data:any;
  @Input() ApiStatus!:boolean;
ngOnInit(){
  setTimeout(() => {
  if(this.Table_Data?.data) {
    this.EmplyeeDetails=this.Table_Data?.data
  }
  this.showAlert();
  }, 1500);
}

AssendingSort() {
  if(this.EmplyeeDetails){
    this.EmplyeeDetails=this.EmplyeeDetails.sort(((a, b) => {
      return a.employee_salary - b.employee_salary;
    })
    );
  }
}

DesendingSort() {
  if(this.EmplyeeDetails){
    this.EmplyeeDetails=this.EmplyeeDetails.sort(((a, b) => {
      return b.employee_salary - a.employee_salary;
    })
    );
  }

}

selectedAge(value:number){
  if(value<=20){
  this.EmplyeeDetails=this.Table_Data?.data.filter((item: { employee_age: number; })=>item.employee_age<value)
  }else if(value>=20 && value<=40){
  this.EmplyeeDetails=this.Table_Data?.data.filter((item: { employee_age: number; })=>item.employee_age>=20 && item.employee_age<=40)
  }else if(value>=40 && value<=60) {
  this.EmplyeeDetails=this.Table_Data?.data.filter((item: { employee_age: number; })=>item.employee_age>=40 && item.employee_age<=60)
  }else if(value>=60 && value<=80) {
  this.EmplyeeDetails=this.Table_Data?.data.filter((item: { employee_age: number; })=>item.employee_age>=60 && item.employee_age<=80)
  }
}

showAlert() : void {
  if (this.isVisible) {
    return;
  }
  this.isVisible=this.ApiStatus;
  setTimeout(()=> this.isVisible = false,2500)
}

resetData() {
  if(this.EmplyeeDetails){
    this.EmplyeeDetails=this.Table_Data?.data
  }
}

}
