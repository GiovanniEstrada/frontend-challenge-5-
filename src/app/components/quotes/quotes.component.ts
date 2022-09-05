import { Component, OnInit } from '@angular/core';
import { AdvicesService } from 'src/app/services/advices.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quote:any = []

  constructor( private advicesServices: AdvicesService) { }

  ngOnInit() {
    this.advicesServices.getQuote().subscribe(
      res => {
        this.quote = res
      },
      err => console.log(err)
    )
  }

  refresh(): void {
    window.location.reload()
  }

}
