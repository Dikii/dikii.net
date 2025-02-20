import {Component} from '@angular/core';
import {HeaderLayoutComponent} from '../header-layout/header-layout.component';
import {MiddleLayoutComponent} from '../middle-layout/middle-layout.component';
import {FooterLayoutComponent} from '../footer-layout/footer-layout.component';

@Component({
  selector: 'app-main-layout',
  imports: [
    HeaderLayoutComponent,
    MiddleLayoutComponent,
    FooterLayoutComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
