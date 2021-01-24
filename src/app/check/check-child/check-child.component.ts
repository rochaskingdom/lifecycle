import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component, DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-check-child',
  templateUrl: './check-child.component.html',
  styleUrls: ['./check-child.component.css']
})
export class CheckChildComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('   CheckChild: constructor');
  }

  ngOnInit(): void {
    console.log('   CheckChild: ngOnInit');
  }

  ngAfterContentChecked(): void {
    console.log('   CheckChild: ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('   CheckChild: ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('   CheckChild: ngAfterViewInit');
  }

  ngDoCheck(): void {
    console.log('   CheckChild: ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('   CheckChild: ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('   CheckChild: ngOnDestroy');
  }

}
