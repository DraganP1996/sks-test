import { animate, query, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SimpleItem } from 'src/app/store/store.model';
import { ListItemColorMode } from './list-item.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  animations: [
    trigger('expandCollaps', [
      state('expanded', style({
        height: '*',
      })),
      state('collapsed', style({
        height: '0',
      })),
      transition('expanded => collapsed', [
        animate('0.3s 100ms ease-out')
      ]),
      transition('collapsed => expanded', [
        animate('0.3s 100ms ease-out')
      ]),
    ]),
  ]
})
export class ListItemComponent implements OnInit {

  @Input() item?: SimpleItem;
  @Input() expandable = false;
  @Input() totalCount?: number;
  @Input() colorMode!: ListItemColorMode;

  @Output() itemSelection = new EventEmitter<number>();

  colorModes = ListItemColorMode;
  isExpanded = false;

  constructor() { }

  ngOnInit(): void {
    console.log();
  }

  selectItem(id: number): void {
    this.itemSelection.emit(id);

    if (this.expandable)
      this.isExpanded = !this.isExpanded;
  }

}
