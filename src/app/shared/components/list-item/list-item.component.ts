import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SimpleItem } from 'src/app/store/store.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() item!: SimpleItem;
  @Input() expandable = false;
  @Input() totalCount!: number;

  @Output() itemSelection = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    console.log();
  }

  selectItem(id: number): void {
    this.itemSelection.emit(id);
  }

}
