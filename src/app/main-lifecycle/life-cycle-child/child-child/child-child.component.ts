import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-child',
  templateUrl: './child-child.component.html',
  styleUrls: ['./child-child.component.css']
})
export class ChildChildComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() name: string;

  constructor() {
  }

  ngOnInit(): void {
    console.log('    Child Child (ngOnInit) -', this.name);
  }

  ngAfterViewInit(): void {
    console.log('    Child Child (ngAfterViewInit) -', this.name);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('    Child Child (ngOnChanges) -', this.name);
  }



}
