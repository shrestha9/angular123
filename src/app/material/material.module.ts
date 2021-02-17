import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
const materialComponent=[MatButtonModule]


@NgModule({
  declarations: [],
  imports: [
    materialComponent
  ],
  exports:[materialComponent]
})
export class MaterialModule { }
