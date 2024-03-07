import { Component, Input, OnInit } from '@angular/core';


type Data = {
  checked:boolean,
  text:string
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {

  constructor() { }

  @Input() data!:Data;

  ngOnInit(): void {
  }

}
