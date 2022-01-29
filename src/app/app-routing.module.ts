import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailComponent } from './card/card-detail/card-detail.component';
import { CardListComponent } from './card/card-list/card-list.component';

const routes: Routes = [
  {
    path: '',
    component: CardListComponent,
  },
  {
    path: 'card-detail/:id',
    component: CardDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
