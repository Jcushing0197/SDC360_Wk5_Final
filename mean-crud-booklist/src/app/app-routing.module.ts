import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CensusListComponent } from './components/census-list/census-list.component';
import { AddCensusComponent } from './components/add-census/add-census.component';

const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'census-list' },
{ path: 'census-list', component: CensusListComponent },
{ path: 'add-census', component: AddCensusComponent },
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }