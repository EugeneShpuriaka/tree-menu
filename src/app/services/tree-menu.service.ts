import { Injectable } from '@angular/core';
import {RequestsService} from './requests.service';

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

  private normalizeCatalogsData(data): object[] {
    let catalogs = {};

    const d = [
      {id: 1, parent: null},
      {id: 2, parent: null},
      {id: 3, parent: [
        {id: 4},
        {id: 5},
        {id: 6}
      ]}
    ];

    const setParent = () => {

    };



    // const alreadyInCatalogs = (id: string) => {
    //   return catalogs.hasOwnProperty(id);
    // };
    // const getParentById = (id: string) => {
    //   return data.filter((item) => {
    //     return item.id === id;
    //   });
    // };
    // catalogs = data.reduce((acc, value) => {
    //   if (value.hasOwnProperty('parent') && value.parent !== null) {
    //     if (alreadyInCatalogs(value.parent.id)) {
    //       acc[value.parent.id].children.push(value);
    //     } else {
    //       const parent = getParentById(value.parent.id)[0];
    //       acc[parent.id] = Object.assign({}, parent);
    //       acc[parent.id].children.push(value);
    //     }
    //   } else {
    //     catalogs[value.id] = Object.assign({}, value);
    //   }
    //   return catalogs;
    // }, data);
    return d;
  }

}
