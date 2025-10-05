import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemsList } from './todo-items-list';

describe('TodoItemsList', () => {
  let component: TodoItemsList;
  let fixture: ComponentFixture<TodoItemsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoItemsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoItemsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
