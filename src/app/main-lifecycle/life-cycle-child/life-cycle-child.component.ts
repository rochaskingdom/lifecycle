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

export interface LifeCycleEvent {
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'app-life-cycle-child',
  templateUrl: './life-cycle-child.component.html',
  styleUrls: ['./life-cycle-child.component.css']
})
export class LifeCycleChildComponent implements OnInit, OnDestroy, OnChanges, AfterContentInit, AfterViewInit {

  @Input() name: string;
  @Input() age: number;
  @Input() food: string;

  events: LifeCycleEvent[] = [];
  nextEventId = 0;
  colors = ['accent', 'warn', 'primary'];

  constructor() {
    console.log(this.name, '- constructor');
    this.newEvent('constructor');
  }

  ngOnInit(): void {
    console.log(this.name, '- ngOnInit');
    this.newEvent('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(this.name, '- ngOnChanges');
    this.newEvent('ngOnChanges');
    // for (const propName in changes) {
    //   console.log(propName);
    //   console.log(changes.propName);
    // }
    // if (changes.name) {
    //   console.log('new name: ', changes.name.currentValue);
    // }
  }

  ngAfterContentInit(): void {
    console.log(this.name, '- ngAfterContentInit');
    this.newEvent('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log(this.name, '- ngAfterViewInit');
    this.newEvent('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.log(this.name, '- ngOnDestroy');
    this.newEvent('ngOnDestroy');
  }

  newEvent(name: string): void {
    const id = this.nextEventId++;
    this.events.push({
      id,
      color: this.colors[id % this.colors.length],
      name
    });
    setTimeout(() => {
      const idx = this.events.findIndex((e) => e.id === id);
      if (idx >= 0) {
        this.events.splice(idx, 1);
      }
    }, 3000 + this.events.length * 2000);
  }

}
