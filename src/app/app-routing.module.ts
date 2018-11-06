import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './modules/record/listing/listing.component';

const routes: Routes = [
  { path: '', redirectTo: '/my_record', pathMatch: 'full' },
  { path: 'my_record', component: ListingComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
