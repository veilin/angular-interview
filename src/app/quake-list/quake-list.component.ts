import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Quake, Quakes} from '../quake';

@Component({
  selector: 'app-quake-list',
  templateUrl: './quake-list.component.html',
  styleUrls: ['./quake-list.component.scss']
})
export class QuakeListComponent implements OnInit {

  @Input() quakes: Quakes;
  @Output() onQuakeSelected: EventEmitter<Quake> = new EventEmitter<Quake>();

  constructor() { }

  ngOnInit(): void {
  }

  selectQuake(quake: Quake): void {  }
}
