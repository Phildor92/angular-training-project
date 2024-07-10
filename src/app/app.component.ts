import { Component } from '@angular/core';
import { Character as Character } from '../models/character.model';
import { ShopComponent } from "./shop/shop.component";
import { CharacterFormComponent } from "./character-form/character-form.component";
import { CharacterListComponent } from "./character-list/character-list.component";
import { LoadingComponent } from "./loading/loading.component";
import { CharacterMainComponent } from "./character-main/character-main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShopComponent, CharacterFormComponent, CharacterListComponent, LoadingComponent, CharacterMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Etricc 7';


  imageUrl = 'https://img.freepik.com/free-vector/colourful-clown-cartoon-character_1308-96000.jpg'


}
