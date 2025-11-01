import { Component, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators} from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MomentDateAdapter, MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { Subscription } from 'rxjs';
import { TodoItemsList} from '../../components/todo-items-list/todo-items-list';
import { Repository } from '../../services/repository';
import { ToDoItem } from 'src/app/models/todoitem.model';
import { SharedItemEditService } from 'src/app/services/shared-edit.service';
import { noPastDatesValidator } from 'src/app/helpers/functions';


export const CUSTOM_DATE_FORMAT = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY', // "accessibility"
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-home',
  imports: [
    TodoItemsList,
    ReactiveFormsModule, 
    MatDatepickerModule,
    MatInputModule,
    MatMomentDateModule
  ],
  providers: [
      { provide: MAT_DATE_LOCALE, useValue: 'en-AU' },
      { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMAT },
      { provide: DateAdapter, useClass: MomentDateAdapter },
      { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
    ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
    private errorsChanged: Subscription = new Subscription();
    private todoitemListChanged: Subscription = new Subscription();
    private resetErrors: Subscription = new Subscription();
    private repo: Repository = inject(Repository);
    private editService: SharedItemEditService = inject(SharedItemEditService);
    private todoitem: ToDoItem = new ToDoItem();
    @ViewChild(FormGroupDirective) private formDirective!: FormGroupDirective;
    
    minDate = new Date().removeTimeFromDate();
    errorMessage = '';

    todoitemForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      dueBy: new FormControl(null, [Validators.required, noPastDatesValidator])
    });
    
    ngOnInit() {
      this.todoitemListChanged = this.repo.todoitemsChanged.subscribe((item) => {
        this.todoitemForm.reset();
        this.formDirective.resetForm();
      }); 
    
      this.errorsChanged = this.repo.errorsChanged.subscribe(message => {

        let err = '';
        Object.keys(message).forEach(key => {
          if (key !== '') {
              err += `${key}: ${message[key].join('\n')}`;
            } 
          });

        this.errorMessage = err;
      });

      this.resetErrors = this.editService.resetErrorsEvent$.subscribe(() => {
        this.errorMessage ='';
      });
    }

    addToDoItem() : void {
      this.editService.emitErrorsResetEvent();
      
      this.todoitem = new ToDoItem(
        undefined,
        this.todoitemForm.value.title!,
        new Date().removeTimeFromDate(),
        new Date(this.todoitemForm.value.dueBy!).removeTimeFromDate(),
        null,
        false
      );
      
      this.repo.createToDoItem(this.todoitem);
    }

     ngOnDestroy() {
        this.todoitemListChanged.unsubscribe();
        this.resetErrors.unsubscribe();
        this.errorsChanged.unsubscribe();
    }
}
