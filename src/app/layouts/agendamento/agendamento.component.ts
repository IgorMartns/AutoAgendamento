import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})

export class AgendamentoComponent implements OnInit {
  dataNasc: any
  gender: string
  constructor() {

  }
  ngOnInit(): void {

  }
}