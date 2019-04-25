import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
import { FormsModule,FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Quinnox';
  inputForm:FormGroup;
  constructor(private userService:UserService) {
this.inputForm=new FormGroup({
  searchInput:new FormControl(null,[])
})
  }
  getData;
  ngOnInit() {
   this.get();
  };
get(){
  
  this.userService.getUsers()
  .subscribe( data => {
    
    this.getData=data;
  });
}
search(){
  this.getData=[];
  this.userService.getRecords(this.inputForm.value.searchInput)
  .subscribe( data => {
    this.getData.push(data);
  });
}
}
