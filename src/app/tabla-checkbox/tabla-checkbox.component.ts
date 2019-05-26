import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef  } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabla-checkbox',
  templateUrl: './tabla-checkbox.component.html',
  styleUrls: ['./tabla-checkbox.component.css']
})
export class TablaCheckboxComponent implements OnInit {

  public modal : NgbModalRef;
  public showWindowNoSelectedProfessionals = false;

  public peoples: any = [
    {
      'first': 'lener',
      'last': 'cabeza',
      'handle': '@facebook',
      'checked': false,
      'selected': false

    },
    {
      'first': 'andrea',
      'last': 'lopez',
      'handle': '@twited',
      'checked': true,
      'selected': false
    },
    {
      'first': 'laura',
      'last': 'rojas',
      'handle': '@intagred',
      'checked': false,
      'selected': false
    }
  ]
  person: any = {
    'checked': false
  };
  constructor(private serviceModal: NgbModal) { }

  ngOnInit() {
  }

  addPeoples(modal) {
    this.showWindowNoSelectedProfessionals = false;
    this.peoples.forEach(element => {
      if (element.selected) {
        this.showWindowNoSelectedProfessionals = true;
      }
    });
    this.windowNoSelectedProfessionals(this.showWindowNoSelectedProfessionals, modal);
  }

  windowNoSelectedProfessionals(value: boolean, modal) {
    if (!value) {
      this.modal = this.serviceModal.open(modal);
    }
  }

  close() {
    this.showWindowNoSelectedProfessionals = false;
    this.modal.close();
  }
}
