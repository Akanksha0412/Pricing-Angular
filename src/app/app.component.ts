import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cards=[
    {
      title : "Free",
      price : "$"+0,
      lineOne : "Single User",
      lineTwo : "5GB Storage",
      lineThree : "Unlimited Public Projects",
      lineFour : "Community Access",
      one:
        {
        lineFive : "Unlimited Private Projects",
        mutedFive : true
        },
      two: {
          lineSix : "Dedicated Phone Support",
          mutedSix : true
        },
      three:  {
          lineSeven : "Free Subdomain",
          mutedSeven : true
        },
      four:  {
          lineEight : "Monthly Status Reports",
          mutedEight : true
        }
    },
    {
      title : "Plus",
      price : "$"+9,
      lineOne : "5 Users",
      lineTwo : "50GB Storage",
      lineThree : "Unlimited Public Projects",
      lineFour : "Community Access",
      one:
        {
        lineFive : "Unlimited Private Projects",
        mutedFive : false
        },
      two:  {
          lineSix : "Dedicated Phone Support",
          mutedSix : false
        },
      three:  {
          lineSeven : "Free Subdomain",
          mutedSeven : false
        },
      four:  {
          lineEight : "Monthly Status Reports",
          mutedEight : true
        }
    },
    {
      title : "Pro",
      price : "$"+49,
      lineOne : "Unlimited Users",
      lineTwo : "150GB Storage",
      lineThree : "Unlimited Public Projects",
      lineFour : "Community Access",
      one:{
        lineFive : "Unlimited Private Projects",
        mutedFive : false
        },
      two:  {
          lineSix : "Dedicated Phone Support",
          mutedSix : false
        },
      three:  {
          lineSeven : "Unlimited Free Subdomains",
          mutedSeven : false
        },
      four:  {
          lineEight : "Monthly Status Reports",
          mutedEight : false
        }
    }
  ]
}
