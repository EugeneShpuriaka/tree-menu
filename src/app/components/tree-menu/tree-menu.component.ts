import { Component, OnInit } from '@angular/core';
import { TreeMenuService } from '../../services/tree-menu.service';

@Component({
  selector: 'app-tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.css']
})
export class TreeMenuComponent implements OnInit {
  private menu: any;
  private order: boolean;

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

  private sortMenu(order): void {
    const menu = this.menu.slice();
    this.order = order;
    this.sorting(menu);
    this.menu = menu;
  }

  private sorting(arr) {
    arr.forEach((item) => {
       if (item.hasOwnProperty('children')) {
         this.sorting(item.children);
       }
      if (this.order) {
        arr.sort(this.sortAsc);
      } else {
        arr.sort(this.sortDesc);
      }
    });
  }

  private sortAsc(a, b): number {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  private sortDesc(a, b): number {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  }
}
