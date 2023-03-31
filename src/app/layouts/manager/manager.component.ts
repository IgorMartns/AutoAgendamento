import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, single, startWith } from 'rxjs';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {
  logged = false
  myControl = new FormControl('')
  myPlano : any 
  planos = []
  convenios: any = [
    {
      nome: "Portomed", sigla: "PM", planos: [
        { nome: "Diamante 10", sigla: "D10" },
        { nome: "Diamente 20", sigla: "D20" },
        { nome: "Diamente 30", sigla: "D30" },
      ]
    },
    {
      nome: "Amil", sigla: "AML", planos: [
        { nome: "Amil Fácil S40 SP Enf", sigla: "AF40" },
        { nome: "Amil Fácil S80 SP Apto", sigla: "AF80" },
      ]
    },
    {
      nome: "Amais", sigla: "AM", planos: [
        { nome: "Amais SP 100", sigla: "AM100" },
        { nome: "Amail 500", sigla: "AM500" },
        { nome: "SulAmerica Exato", sigla: "SAE" },
        { nome: "GNDI ADVANCE 600", sigla: "GNDI" },
      ]
    },
    {
      nome: "Unimed", sigla: "UM", planos: [
        { nome: "Unilivre", sigla: "UNI" },
      ]
    },
    {
      nome: "Bradesco", sigla: "BRD", planos: [
        { nome: "Nacional Flex", sigla: "NF" }
      ]
    },
  ]

  conveniosFilter: Observable<string[]>
  isValid: boolean = true
  constructor() {
    this.conveniosFilter = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    )
  }

  _filter(value: string): string[] {
    const filterValue = value.toLowerCase()
    var item = this.convenios.filter(convenio => convenio.nome.toLowerCase().includes(filterValue))
    this.planos = item[0].planos 
    this.myPlano = ''
    return item
  }
}