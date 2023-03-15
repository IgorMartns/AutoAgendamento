import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { AgendamentoComponent } from '../agendamento/agendamento.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(public dialog: MatDialog) {}

  openModal(){
    const dialogRes = this.dialog.open(AgendamentoComponent, {
      width:'auto',
      height:'auto'
    })
    dialogRes.disableClose = true
    dialogRes.afterClosed().subscribe(res =>{
      console.log(res);
      
    })
  }

}
