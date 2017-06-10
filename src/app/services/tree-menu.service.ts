import { Injectable } from '@angular/core';
import {RequestsService} from './requests.service';
import * as lodash from 'lodash';

import { PATHS } from '../consts/path.consts';

@Injectable()
export class TreeMenuService {

  constructor(
    private requests: RequestsService
  ) { }

  public getMenuData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.requests.get(PATHS.CATALOGS).subscribe(
        (response) => {
          if (response.hasOwnProperty('hydra:member') && response['hydra:member'].length) {
            const catalogs = this.normalizeCatalogsData(response['hydra:member']);
            resolve(catalogs);
          } else {
            reject(null);
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  private normalizeCatalogsData(data): object {
    let menu;
    const menuMap = this.createMenuMap(data);
    this.mapParent2Child(data, menuMap);
    menu = this.finalizeMenuConfiguration(menuMap);
    return menu;
  }

  private createMenuMap(data: object[]): any {
    const menus = new Map();

    data.forEach((item) => {
      menus.set(item['@id'], item);
    });

    return menus;
  }

  private mapParent2Child(data: object[], map: any): any {
    data.forEach((item) => {
      if (item['parent'] !== null) {
        const parent = map.get(item['parent']['@id']);
        if (!parent.children) {
          parent.children = [];
        }
        parent.children.push(item);
        map.set(parent['@id'], parent);
      }
    });
  }

  private finalizeMenuConfiguration(map: any): object[] {
    const menu = [];
    map.forEach((value, key, map) => {
      if (value.parent === null) {
        menu.push(value);
      }
    });
    return menu;
  }

}
