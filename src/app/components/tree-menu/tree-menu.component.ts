import { Component, OnInit } from '@angular/core';
import { TreeMenuService } from '../../services/tree-menu.service';

@Component({
  selector: 'app-tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.css']
})
export class TreeMenuComponent implements OnInit {
  private menu: any;

  constructor(
    private menuService: TreeMenuService
  ) { }

  ngOnInit() {
    this.menuService.getMenuData()
      .then(catalogs => {
        this.menu = catalogs;
      })
      .catch(error => {
        console.warn(error);
      });
  }

}
