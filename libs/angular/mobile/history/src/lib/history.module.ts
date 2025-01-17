import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NgShadowModule } from 'nativescript-ngx-shadow';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';

import { HistoryListItemComponent } from './components/history-list-item/history-list-item.component';
import { HistoryListComponent } from './components/history-list/history-list.component';
import { HistoryPageComponent } from './containers/history-page/history-page.component';
import { HistoryRoutingModule } from './history-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NativeScriptCommonModule,
    HistoryRoutingModule,
    NgShadowModule,
    NativeScriptUIListViewModule
  ],
  declarations: [HistoryPageComponent, HistoryListComponent, HistoryListItemComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HistoryModule {}
