import { Component } from '@angular/core';
import { Character as Character } from '../models/character.model';
import { ShopComponent } from "./shop/shop.component";
import { CharacterFormComponent } from "./character-form/character-form.component";
import { CharacterListComponent } from "./character-list/character-list.component";
import { LoadingComponent } from "./loading/loading.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShopComponent, CharacterFormComponent, CharacterListComponent, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Etricc 7';
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

  imageUrl = 'https://img.freepik.com/free-vector/colourful-clown-cartoon-character_1308-96000.jpg'

  attack(character: Character){
    window.alert(character.name + " used " + character.attack);
  }
}
