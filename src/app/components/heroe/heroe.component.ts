import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  heroe: any = {};

  constructor(
    private _activetedRouter: ActivatedRoute,
    private _heroeService: HeroesService
  ) { 
    this.heroe = this._heroeService.getHeroe(_activetedRouter.snapshot.params.id);
  }

}
