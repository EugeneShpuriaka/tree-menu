import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  @Input() menu: object[];

  private expanded = true;

  constructor() { }

  ngOnInit() {
  }

  private toggleMenu(): void {
    this.expanded = !this.expanded;
  }

}
