import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { TodosResolver } from './todo/resolvers/todos.resolver';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'todos',
    loadChildren: () => import('./todo/todo.module').then((m) => m.TodoModule),
    canActivate: [AuthGuard],
    resolve: {todos: TodosResolver},
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
