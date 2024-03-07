import { Component, Input, OnInit } from '@angular/core';

type Data = {
  name:string;
  imgAddress:string;
  imgAddressInactive:string;
}

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  @Input() selected:boolean = false;
  @Input() inactive:boolean = false;

  constructor() { }

  @Input() content!:Data;

  ngOnInit(): void {
  }

}
