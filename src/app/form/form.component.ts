import {Component, OnInit} from '@angular/core';
import {stringify} from 'querystring';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  colorTextOn: boolean;
  toggle = 'On';

  show = false;

  lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores est itaque quisquam velit voluptate. Aliquid eligendi in itaque nulla praesentium.';


  toggleButtonOn() {
    this.colorTextOn = !this.colorTextOn;
    this.show = !this.show;
    if (this.show === true) {
      this.toggle = 'Of';
    } else {
      this.toggle = 'On'
    }
  }

}
