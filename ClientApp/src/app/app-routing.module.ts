import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ErrorPageComponent } from './screens/error-page/error-page.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/todoitems',
        pathMatch: 'full',
    },
    {
        path: 'todoitems',
        component: HomeComponent,
        children: [
        ],
    },
    {
        path: 'not-found',
        component: ErrorPageComponent,
        data: { message: 'Page not found!' },
    },
    { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
