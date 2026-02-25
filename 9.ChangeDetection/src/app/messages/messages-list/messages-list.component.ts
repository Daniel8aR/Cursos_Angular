import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { MessagesService } from '../messages.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent {
  private messageService = inject(MessagesService);
  // messages$ = this.messageService.messages$;
  
  // private cdRef = inject(ChangeDetectorRef)
  // private destroyRef = inject(DestroyRef)
  // private messages = signal<string[]>([])
  
  // ngOnInit() {
  //   const suscription = this.messageService.messages$.subscribe((messages) => {
  //     this.messages.set(messages);
  //     this.cdRef.markForCheck();
  //   });
  //   this.destroyRef.onDestroy(() => {
  //     suscription.unsubscribe();
  //   })
  // }

  messages = this.messageService.allMessages;

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
