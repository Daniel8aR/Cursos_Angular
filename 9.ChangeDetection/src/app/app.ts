import { Component, signal } from '@angular/core';
import { MessagesComponent } from './messages/messages.component';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [CounterComponent, MessagesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  get debugOutput() {
    console.log('[AppComponent] "debugOutput" binding re-evaluated.');
    return 'AppComponent Component Debug Output';
  }
}
