import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  @Input('total') total?: number;
  @Input('completed') completed?: number;

  constructor() {}

  ngOnInit(): void {}
}
