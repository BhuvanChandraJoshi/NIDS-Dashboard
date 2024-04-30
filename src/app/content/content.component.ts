import { Component } from '@angular/core';

import { SidenavComponent } from '../sidenav/sidenav.component';
import { ViewComponent } from '../view/view.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [SidenavComponent, ViewComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
