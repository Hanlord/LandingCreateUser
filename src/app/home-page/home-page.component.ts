import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  heroText: string  =  " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores deserunt aspernatur aliquam voluptatum aperiam dolorum, sed fugit? Ipsam esse numquam eligendi optio magni rerum facere quidem nam, voluptate labore odit!";
  ngOnInit(): void {
  }

}
