import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/home/home.component';
import { AgendamentoComponent } from './layouts/agendamento/agendamento.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { MatInputModule } from '@angular/material/input'
import { MatRadioModule } from '@angular/material/radio'
import { FormsModule } from '@angular/forms';
import { ManagerComponent } from './layouts/manager/manager.component'
import { MatTabsModule } from '@angular/material/tabs'
import { MatSelectModule } from '@angular/material/select'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AgendamentoComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    MatTabsModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  entryComponents:[AgendamentoComponent],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
