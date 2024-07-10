import { Component } from '@angular/core';
import { LoadingComponent } from "../loading/loading.component";
import { CharacterListComponent } from "../character-list/character-list.component";
import { CharacterFormComponent } from "../character-form/character-form.component";
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character-main',
  standalone: true,
  imports: [LoadingComponent, CharacterListComponent, CharacterFormComponent],
  templateUrl: './character-main.component.html',
  styleUrl: './character-main.component.scss'
})
export class CharacterMainComponent {
  characterList: Character[] | undefined;

  constructor(){
    setInterval(() => {
       this.characterList = [
        { name: 'Reynald', class: 'fighter', race: 'human', level: 5, attack: 'club', companion: 'Bob', image: ''},
        { name: 'Ginar', class: 'wizard', race: 'elf', level: 3, attack: 'staff', image: ''},
        { name: 'Polly', class: 'rogue', race: 'halfling', level: 5, attack: 'dagger', image: ''}
      ]
    }, 2000)
  }

  attack(character: Character){
    window.alert(character.name + " used " + character.attack);
  }
}
