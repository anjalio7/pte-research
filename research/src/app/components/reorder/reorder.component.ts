import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.component.html',
  styleUrls: ['./reorder.component.css']
})
export class ReorderComponent implements OnInit {

  opt1 = ['hello', 'world', 'hi'];
  opt2 = ['world', 'hello',  'hi'];
  opt3 = ['hello', 'world', 'hi', 'hiii'];

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  done = [] as any;

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    console.log(this.done)
  }


}
