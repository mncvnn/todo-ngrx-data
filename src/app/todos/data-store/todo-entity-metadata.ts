import { EntityMetadataMap, DefaultDataServiceConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Todos: {},
}

// Since the fake API has plural the same as single
const pluralNames = { Todos: 'Todos' };


export const todoEntityConfig = {
  entityMetadata,
  pluralNames
}

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'https://jsonplaceholder.typicode.com/',
  timeout: 30000, // request timeout
}