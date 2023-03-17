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
  convenios: any = [
    { nome: "Portomed", sigla: "PM" },
    { nome: "Amil", sigla: "AML" },
    { nome: "Amais", sigla: "AM" },
    { nome: "Unimed", sigla: "UM" },
    { nome: "Bradesco", sigla: "BRD" },
  ]
  conveniosFilter: Observable<string[]>
  constructor() {
    this.conveniosFilter = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    )
  }

  _filter(value:string): string[] {
    const filterValue = value.toLowerCase()
    return this.convenios.filter(convenio => convenio.nome.toLowerCase().includes(filterValue))
  }

  changeSelect(item) {
    console.log(item);
  }
}
