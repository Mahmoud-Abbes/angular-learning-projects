import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guess-the-number',
  imports: [CommonModule, FormsModule],
  templateUrl: './guess-the-number.html',
  styleUrl: './guess-the-number.scss',
})
export class GuessTheNumber {
  seceretNumber: number = this.generateRandomNumber();
  guessedNumber?: number;
  isWinner: boolean = false;
  gameOver: boolean = false;

  private static readonly MAX_NUMBER = 100;
  private static readonly MAX_ATTEMPTS = 10;

  attemptsLeft: number = GuessTheNumber.MAX_ATTEMPTS;

  private generateRandomNumber(): number {
    return Math.floor(Math.random() * GuessTheNumber.MAX_NUMBER);
  }

  isValidGuess() {
    return (
      this.guessedNumber !== undefined &&
      this.guessedNumber <= GuessTheNumber.MAX_NUMBER &&
      this.guessedNumber >= 1
    );
  }

  private evaluateGuess(): boolean {
    if (this.guessedNumber === this.seceretNumber) {
      return true;
    }
    return false;
  }

  submitGuess() {
    if (!this.gameOver) {
      if (this.isValidGuess()) {
        this.attemptsLeft--;
        if (this.evaluateGuess()) {
          this.isWinner = true;
          this.gameOver = true;
          return;
        }

        if (this.attemptsLeft === 0) {
          this.gameOver = true;
        }
      }
    }
  }

  resetGame() {
    this.seceretNumber = this.generateRandomNumber();
    this.attemptsLeft = GuessTheNumber.MAX_ATTEMPTS;
    this.gameOver = false;
    this.isWinner = false;
  }
}
