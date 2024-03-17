import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit {
  @Input()
  photocover: string = "" 
  @Input()
  cardTitle:string = ""
  @Input()
  cardDescription:string = ""
  @Input()
  id:string = "0"

  ngOnInit(): void{
    this.setValuesToComponents(this.id)
  }

  setValuesToComponents(id:string|null){
    const result = dataFake.filter(article => article.id == id)[0]

      this.cardTitle = result.title;
      this.cardDescription = result.description;
      this.photocover = result.photo;
    }
}
