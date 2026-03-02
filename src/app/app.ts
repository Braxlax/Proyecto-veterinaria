import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink  } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('veterinaria-app');
  constructor(public router: Router) {}
}
