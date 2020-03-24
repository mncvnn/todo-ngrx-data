import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import ToDo from './todo.model';

@Injectable({ providedIn: 'root'})
export class TodoService extends EntityCollectionServiceBase<ToDo> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Todos', serviceElementsFactory);
  }
}