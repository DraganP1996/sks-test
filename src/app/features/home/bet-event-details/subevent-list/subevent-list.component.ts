import { Component, Input, OnInit } from '@angular/core';
import { SubEvent } from 'src/app/store/store.model';

@Component({
  selector: 'app-subevent-list',
  templateUrl: './subevent-list.component.html',
  styleUrls: ['./subevent-list.component.scss']
})
export class SubeventListComponent implements OnInit {

  @Input() subevents?: SubEvent<number>[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log('LALALA', this.subevents)
  }

}
