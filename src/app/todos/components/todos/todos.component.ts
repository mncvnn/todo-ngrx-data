import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import ToDo from '../../data-store/todo.model';
import { TodoService } from '../../data-store/todo.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todo$: Observable<ToDo[]>;
  loading$: Observable<boolean>;
  title: string = '';
  completed: boolean = false;

  constructor(private todoService: TodoService) {
    this.todo$ = todoService.entities$;
    this.loading$ = todoService.loading$;
  }

  ngOnInit(): void {
    this.getAllTodo();
  }

  getAllTodo() {
    this.todoService.getAll();
  }

  createToDo() {
    const todo: ToDo = { title: this.title, completed: this.completed };
    this.todoService.add(todo);
    this.title = '';
    this.completed = false;
  }

}

