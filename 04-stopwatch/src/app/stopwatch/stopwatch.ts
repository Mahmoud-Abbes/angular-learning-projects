import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  imports: [CommonModule],
  templateUrl: './stopwatch.html',
  styleUrl: './stopwatch.scss',
})
export class Stopwatch {
  intervalRef: any;
  isRunning: boolean = false;
  elapsedTime: number = 0;

  start() {
    this.isRunning = true;
    this.intervalRef = setInterval(() => {
      this.elapsedTime += 0.1;
    }, 100);
  }

  stop() {
    clearInterval(this.intervalRef);
    this.isRunning = false;
  }

  reset() {
    this.elapsedTime = 0;
  }
}
