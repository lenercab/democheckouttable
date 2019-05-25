import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-checkbox',
  templateUrl: './tabla-checkbox.component.html',
  styleUrls: ['./tabla-checkbox.component.css']
})
export class TablaCheckboxComponent implements OnInit {

  public peoples: any=[
    {
      'first':'lener',
      'last':'cabeza',
      'handle':'@facebook',
      'checked':false
    },
    {
      'first':'andrea',
      'last':'lopez',
      'handle':'@twited',
      'checked':false
    },
    {
      'first':'laura',
      'last':'rojas',
      'handle':'@intagred',
      'checked':false
    }
  ]
  person:any={
    'checked':false
  };
  constructor() { }

  ngOnInit() {
  }

  addPeoples(){
    console.log("persona")
    console.log(this.person.checked);
    debugger
    this.peoples.forEach(element => {
      if(element.checked){
        console.log(element.first + " elemento chequeado");
      }else{
        console.log(element.first + " elemento no chequeado")
      }
    });
  }
}
