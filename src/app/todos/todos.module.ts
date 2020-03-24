import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';

import { todoEntityConfig, defaultDataServiceConfig } from './data-store/todo-entity-metadata';
import { TodosComponent } from './components/todos/todos.component';


@NgModule({
  declarations: [TodosComponent],
  providers: [{ provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(todoEntityConfig)
  ],
  exports: [TodosComponent]
})
export class TodosModule { }
