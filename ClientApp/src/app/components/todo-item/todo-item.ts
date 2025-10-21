import { Component, OnDestroy, OnInit, inject, input } from '@angular/core';
import { CommonModule, DatePipe, formatDate } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SharedItemEditService } from 'src/app/services/shared-edit.service';
import { ToDoItemInfo } from 'src/app/models/todo-item';
import { ToDoItem } from '../../models/todoitem.model';
import { Repository } from 'src/app/services/repository';

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

    // constructor(private el: ElementRef, private renderer: Renderer2){}
    constructor(){}

    todoItem = input.required<ToDoItemInfo>();
    item: ToDoItemInfo = new ToDoItem();
    isEditMode: boolean = false;
    todoitemForm: FormGroup = new FormGroup({
      title: new FormControl(null, Validators.required)
    });

    // @HostBinding('class.statusComplete')
    // @HostBinding('class.statusOverdue')

    ngOnInit() {

      let newItem : ToDoItemInfo =  new ToDoItem(
          this.todoItem().id, 
          this.todoItem().title, 
          this.todoItem().creationDate, 
          this.todoItem().dueBy,
          this.todoItem().completedDate,
          this.todoItem().isCompleted,
          !this.todoItem().isCompleted && (this.todoItem().dueBy! < new Date())
        );

      this.item = newItem;

      this.todoitemForm.setValue({
        title: newItem.title!
      });

      this.todoitemChanged = this.repo.todoitemChanged.subscribe((updatedItem) => {
        if (updatedItem.id === this.item.id) {
          /*
          const today = new Date();
          if (updatedItem.dueBy) {
            const dueByDate = updatedItem.dueBy;
            updatedItem.isOverdue = (!updatedItem.isCompleted && (dueByDate! < today));
          }
          */
          if (updatedItem.isCompleted) {
            
            updatedItem.isOverdue = false;
            // Update class in parent selector in real time.
            // this.renderer.addClass(this.el.nativeElement, 'statusComplete');
            // this.renderer.removeClass(this.el.nativeElement, 'statusOverdue');
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
  
      let changes = new Map<string, any>();
      
      changes.set("isCompleted", true);
      changes.set("completedDate", new Date());
      
      this.repo.updateToDoItem(this.item.id!, changes);
   }

   setEditMode() {
        this.editService.emitItemEvent(this.item.id!);
        this.isEditMode = true;
   }
   
   cancelEdit() {
       this.isEditMode = false;
       this.todoitemForm.reset();
       this.item = this.item;
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
