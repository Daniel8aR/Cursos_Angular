import { Component, signal } from '@angular/core';
import { RectComponent } from './rect/rect.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RectComponent, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class AppComponent {
  rectSize = {
    width: '100',
    height: '100',
  };
}
