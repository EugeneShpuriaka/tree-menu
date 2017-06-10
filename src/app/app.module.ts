import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RequestsService } from './services/requests.service';
import { TreeMenuComponent } from './components/tree-menu/tree-menu.component';
import { TreeMenuService } from './services/tree-menu.service';
import { NodeComponent } from './components/tree-menu/node/node.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeMenuComponent,
    NodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RequestsService, TreeMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
