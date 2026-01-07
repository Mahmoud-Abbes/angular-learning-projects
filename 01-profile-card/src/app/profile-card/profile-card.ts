import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-card',
  imports: [FormsModule],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.scss',
})
export class ProfileCard {
  name: string = 'Mahmoud Abbes';
  age: number = 21;
  description: string = 'Passionnate web developper looking to boost his skills.';
}
