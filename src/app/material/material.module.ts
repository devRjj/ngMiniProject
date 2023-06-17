import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'
import {MatRadioModule} from '@angular/material/radio'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list'

const MaterialComponents =[
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatRadioModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
