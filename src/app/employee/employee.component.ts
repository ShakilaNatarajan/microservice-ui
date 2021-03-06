import { Component, OnInit } from '@angular/core';
import  {EmployeeService}  from 'src/app/shared/employee.service';
import { NgForm }     from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service:EmployeeService) { }

  ngOnInit() {
	  
	   this.resetForm();
  }
  
  
  resetForm(form? :NgForm){
	  
	  
		 
	  this.service.formData={
		 id :null,
		  firstname : '',
		  lastname : ''
	  }  
  }
  
  
  onSubmit(form: NgForm){
	  console.log('message    '+form.firstname);
	   console.log('message    '+form.lastname);
	 this.insertRecord(form);
  }
  
  
  insertRecord(form: NgForm){
	  

	  this.service.postEmployee(form.value).subscribe( res =>{
		
		
		this.resetForm(form); 
		  
	  }
	  );
	  
  }

}
