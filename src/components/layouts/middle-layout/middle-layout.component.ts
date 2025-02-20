import { Component } from '@angular/core';
import {LeftSideLayoutComponent} from '../left-side-layout/left-side-layout.component';
import {WorkSpaceLayoutComponent} from '../work-space-layout/work-space-layout.component';
import {RightSideLayoutComponent} from '../right-side-layout/right-side-layout.component';

@Component({
  selector: 'app-middle-layout',
  imports: [
    LeftSideLayoutComponent,
    WorkSpaceLayoutComponent,
    RightSideLayoutComponent
  ],
  templateUrl: './middle-layout.component.html',
  styleUrl: './middle-layout.component.css'
})
export class MiddleLayoutComponent {

}
