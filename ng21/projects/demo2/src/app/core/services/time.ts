import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Time {
  private readonly timestamp = new Date().getTime();

  getTimestamp(): number {
    return this.timestamp;
  }
}
