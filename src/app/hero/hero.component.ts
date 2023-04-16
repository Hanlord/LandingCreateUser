import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  heroHeading: string =  "Example.eu";
 heroText: string  =  " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores deserunt aspernatur aliquam voluptatum aperiam dolorum, sed fugit? Ipsam esse numquam eligendi optio magni rerum facere quidem nam, voluptate labore odit!";
 heroBtnText: string =  "Create User";

  constructor() { }

  ngOnInit(): void {
  }

}
