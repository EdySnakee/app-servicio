import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showSpinner = true;

  constructor(){

  }
  ngOnInit(): void {
    setTimeout(() => {
      this.showSpinner = false;
    }, 1333); // Ajusta el tiempo según sea necesario
  }






}


