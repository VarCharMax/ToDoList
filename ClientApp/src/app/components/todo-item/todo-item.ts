import { Component, ElementRef, HostBinding, OnDestroy, OnInit, Renderer2, inject, input } from '@angular/core';
import { CommonModule, DatePipe, formatDate } from '@angular/common';
import { Subscription } from 'rxjs';
import { SharedItemEditService } from 'src/app/services/shared-edit.service';
import { ToDoItem } from '../../models/todoitem.model';
import { Repository } from 'src/app/services/repository';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: '[app-todo-item]',
  imports: [
            CommonModule,
            DatePipe,
            ReactiveFormsModule
          ],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css'
})
export class TodoItemComponent implements OnInit, OnDestroy {
    private repo: Repository = inject(Repository);
    private editService: SharedItemEditService = inject(SharedItemEditService);
    private listEventSubscription: Subscription = new Subscription();
    private todoitemChanged: Subscription = new Subscription();

    constructor(private el: ElementRef, private renderer: Renderer2){}

    todoItem = input.required<ToDoItem>();
    item: ToDoItem = new ToDoItem();
    isEditMode: boolean = false;
    todoitemForm: FormGroup = new FormGroup({
      title: new FormControl(null, Validators.required)
    });

    @HostBinding('class.statusComplete')

    /*
    get activeClass() {
      return this.item.isCompleted;
    }
*/
    ngOnInit() {
      let newItem : ToDoItem =  new ToDoItem(
        this.todoItem().id, 
        this.todoItem().title, 
        this.todoItem().creationDate, 
        this.todoItem().completedDate,
        this.todoItem().dueBy,
        this.todoItem().isCompleted);

      this.item = newItem;

      this.todoitemChanged = this.repo.todoitemChanged.subscribe((updatedItem) => {
        if (updatedItem.id === this.item.id) {
          const today = new Date();
          if (updatedItem.dueBy) {
            const completeByDate = updatedItem.dueBy;
            updatedItem.isOverdue = (!updatedItem.isCompleted && (completeByDate! < today));
          }
          if (updatedItem.isCompleted){
            this.renderer.addClass(this.el.nativeElement, 'statusComplete');
          }
          this.item = updatedItem;
        }
      })

      this.listEventSubscription = this.editService.itemlistEditEvent$.subscribe(message => {
        if (message !== this.todoItem().id) {
          this.isEditMode = false;
        }
      });
   }

   setItemComplete() {
       let updatedItem = new ToDoItem(
          this.item.id, 
          this.item.title, 
          this.item.creationDate, 
          new Date(formatDate(new Date(), 'dd/M/yyyy', 'en-AU')),
          this.item.dueBy,
          true,
          false);
          
       this.repo.replaceToDoItem(updatedItem);
   }

   setEditMode() {
        this.editService.emitItemEvent(this.item.id!);
        this.isEditMode = true;
   }
   
   cancelEdit() {
       this.isEditMode = false;
       this.todoitemForm.reset();
       this.item = this.todoItem();
   }

   saveChanges() {
     if (this.todoitemForm.valid) {
      this.isEditMode = false;
      this.item.title = this.todoitemForm.value.title!;
      this.repo.replaceToDoItem(this.item);
    } else {
      this.todoitemForm.markAllAsTouched();
    }
   }

  deleteItem() {
    this.editService.emitItemEvent(-1);
    this.repo.deleteToDoItem(this.item.id!);
   }

  ngOnDestroy(): void {
    this.listEventSubscription.unsubscribe();
    this.todoitemChanged.unsubscribe();
  }
}
