import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogginService {
  log(message: string) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }


}
