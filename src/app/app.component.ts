import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainLayoutComponent} from '../components/layouts/main-layout/main-layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dikii';
}
