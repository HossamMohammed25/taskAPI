import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Iproduct } from '../iproduct';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private _ApiService:ApiService){}

  productList:Iproduct [] =[]
  
  ngOnInit(): void {
    this._ApiService.getData().subscribe({

      next:(res)=>{
        console.log(res);
        this.productList=res ;
      },
      error:(err)=>{
        console.log(err);
      }

    })
  }

}
