import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';


@NgModule({
  declarations: [SlidesComponent, StartComponent],
  imports: [
    CommonModule, FormsModule, IonicModule
  ],
  exports: [SlidesComponent, StartComponent]
})
export class ComponentsModule { }
