import { Component, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { RangechartComponent } from '../rangechart/rangechart.component';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';


interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

@Component({
  selector: 'dialog-elements',
  templateUrl: 'dialog-elements.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, RangechartComponent],
})
export class DialogComponentElements {
  logData: UserData;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { userData: UserData }) {
    this.logData = data.userData;
  }
}
