import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';

@Component({
  selector: 'app-main-lifecycle',
  templateUrl: './main-lifecycle.component.html',
  styleUrls: ['./main-lifecycle.component.css']
})
export class MainLifecycleComponent implements OnInit {

  foods: string[] = ['Rice', 'Beans', 'Pizza'];
  clients: Client[] = [];
  name: string;
  age: number;
  food: string;
  editClient = -1;
  randomNumber: number;

  constructor() {
    this.generatedRandom();
  }

  ngOnInit(): void {
  }

  save(): void {
    if (this.editClient === -1) {
      this.clients.push({ name: this.name, age: this.age, food: this.food });
    } else {
      this.clients[this.editClient].age = this.age;
      this.clients[this.editClient].name = this.name;
      this.clients[this.editClient].food = this.food;
      this.editClient = -1;
    }
    this.age = null;
    this.name = '';
    this.food = '';
  }

  edit(i: number): void {
    this.age = this.clients[i].age;
    this.name = this.clients[i].name;
    this.food = this.clients[i].food;
    this.editClient = i;
  }

  remove(i: number): void {
    this.clients.splice(i, 1);
  }

  generatedRandom(): void {
    this.randomNumber = Math.round((Math.random() * 1000));
  }

}
