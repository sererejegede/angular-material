import {MatToolbarModule, MatButtonModule, MatIconModule, MatGridListModule, MatListModule, MatCardModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ]
})

export class CustomMaterialModule {}
