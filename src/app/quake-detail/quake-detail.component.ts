import {Component, Input, OnInit} from '@angular/core';
import {Quake} from '../quake';

@Component({
  selector: 'app-quake-detail',
  templateUrl: './quake-detail.component.html',
  styleUrls: ['./quake-detail.component.scss']
})
export class QuakeDetailComponent implements OnInit {

  @Input() quake: Quake;

  constructor() {
  }

  ngOnInit(): void {
  }

}
