import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-child',
  templateUrl: './life-cycle-child.component.html',
  styleUrls: ['./life-cycle-child.component.css']
})
export class LifeCycleChildComponent implements OnInit {

  @Input() name: string;
  @Input() age: number;
  @Input() food: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
