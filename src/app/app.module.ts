import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaCheckboxComponent } from './tabla-checkbox/tabla-checkbox.component';
import { NgbModalModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    TablaCheckboxComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModalModule,
    NgbTooltipModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
