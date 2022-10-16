import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {
  @Input() text: string|undefined;
  @Input() icon: string|undefined;
  @Input() bdColor: string|undefined;
  @Input() bgColor: string|undefined;
  @Input() mgTop: string|undefined;
  @Input() margin: string|undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
