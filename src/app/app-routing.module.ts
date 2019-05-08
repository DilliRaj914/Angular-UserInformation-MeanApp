import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UsereditComponent } from './useredit/useredit.component';

const routes: Routes = [
  {path:'',redirectTo:'users',pathMatch:'full'},
{path:'users',component:UsersComponent},
{path:'usercreate',component:UsercreateComponent},
{path:'useredit/:id',component:UsereditComponent},
{path:'userdetail/:id',component:UserdetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

