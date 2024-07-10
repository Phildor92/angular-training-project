import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OptionalPipe } from '../pipes/optional.pipe';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [OptionalPipe],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss'
})
export class CharacterListComponent {
  @Input() characterList: Character[] = [];
  @Output() rowClicked = new EventEmitter<Character>();

  clickRow(character: Character){
    this.rowClicked.emit(character);
  }
}
