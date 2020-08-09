import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public skyBlue:any=[];
  public red:any=[];
  public yellow:any=[];
  public grey:any=[];
  public pie_arry:any=[]
  public redper:any;
  rows:any;
  email:any;
  user_name:any;
  name:any;
  PieChart = []
  constructor(private dataService: ApiService){}
  ngOnInit() {
    this.userDetail()
  
}
userDetail(){
  this.dataService.getData().subscribe((data)=>{
    this.rows = data
    this.name = this.rows[0].name
    this.user_name = this.rows[0].username
    this.email = this.rows[0].email
    this.rows.map(count=>{
      if(count.address.geo.lat<0){
        this.skyBlue.push(count) 
      } if(count.address.geo.lat>0){
        this.red.push(count)  
      }if(count.address.geo.lng<0){
        this.grey.push(count) 
      }else{
        this.yellow.push(count)
      }
    })
    
    let skyper = (this.skyBlue.length*100)/this.rows.length
    this.redper = (this.red.length*100)/this.rows.length
    let greyyper = (this.grey.length*100)/this.rows.length
    let yellowper = (this.yellow.length*100)/this.rows.length
    this.pie_arry.push(skyper,this.redper,greyyper,yellowper)
this.PieChart = new Chart('pieChart', {
      type: 'pie',
 data: {
      datasets: [{
      lable: 'user',
      data: this.pie_arry,
      backgroundColor: [
        '#87ceeb',
        '#f2482b',
        '#050403',
        '#ffff55'
        
      ]
    }]
}
   ,
  options: {
    title: {
     // text: "bar Chart",
      display: true
    }},
    scales: {
      yAxes: [{
        ticks: {
          begainAtZero: true
        }

        }]}

})
   
 })
 
}

}
