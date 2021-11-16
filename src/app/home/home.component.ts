import { ApiconfigService } from './../apiconfig.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:any[]= [];
  constructor(private dataService: ApiconfigService) {

   }

  ngOnInit(): void {
    this.getNotes()
  }

  getNotes(){
    this.dataService.getConfig().subscribe(data=>{
    this.products=data;

    })


  }

}

