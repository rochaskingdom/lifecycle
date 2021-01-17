import {
  AfterContentInit,
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-life-cycle-child',
  templateUrl: './life-cycle-child.component.html',
  styleUrls: ['./life-cycle-child.component.css']
})
export class LifeCycleChildComponent implements OnInit, OnDestroy, OnChanges, AfterContentInit, AfterViewInit {

  @Input() name: string;
  @Input() age: number;
  @Input() food: string;

  constructor() {
    console.log(this.name, '- constructor');
  }

  ngOnInit(): void {
    console.log(this.name, '- ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.name, '- ngOnChanges');
  }

  ngAfterContentInit(): void {
    console.log(this.name, '- ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log(this.name, '- ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.log(this.name, '- ngOnDestroy');
  }

}
