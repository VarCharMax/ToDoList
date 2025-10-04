import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ToDoItemsResolver } from './resolvers/todoitems-resolver.service';
import { ToDoItemResolver } from './resolvers/todoitem-resolver.service';
import { ErrorPageComponent } from './screens/error-page/error-page.component';

export const routes: Routes = [{
        path: '',
        redirectTo: '/todoitems',
        pathMatch: 'full',
    },
    {
        path: 'todoitems',
        component: HomeComponent,
        resolve: {
        ToDoItemsResolver: ToDoItemsResolver,
}       ,
    },
    {
        path: 'todoitem',
        component: HomeComponent,
        resolve: {
        ToDoItemsResolver: ToDoItemResolver,
}       ,
    },
    {
        path: 'not-found',
        component: ErrorPageComponent,
        data: { message: 'Page not found!' },
    },
    { path: '**', redirectTo: '/not-found' },
];
