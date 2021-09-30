import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() myData = {
    title : "",
    price : "",
    lineOne : "",
    lineTwo : "",
    lineThree : "",
    lineFour : "",
    one:
      {
      lineFive : "",
      mutedFive : true
      },
     two: {
        lineSix : "Dedicated Phone Support",
        mutedSix : true
      },
     three: {
        lineSeven : "Free Subdomain",
        mutedSeven : true
      },
      four:{
        lineEight : "Monthly Status Reports",
        mutedEight : true
      }
  };


  constructor() { }
  ngOnInit(): void {
  }
}
