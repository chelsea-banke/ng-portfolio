import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
  @Input() bdColor:string|undefined;
  @Input() path:string|undefined;
  @Input() text:string|undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
