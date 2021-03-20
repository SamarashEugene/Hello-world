import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../app.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  colorTextOn: boolean;
  toggle = 'On';

  show = false;

  text1 = 'Lorem it. in itaque nulla praesentium.';


  toggleButtonOn() {
    this.colorTextOn = !this.colorTextOn;
    this.show = !this.show;
    if (this.show === true) {
      this.toggle = 'Of';
    } else {
      this.toggle = 'On'
    }
  }

  inputHendler(event: any){
    const value = event.target.value;
    this.text1 = value;
  }

}
