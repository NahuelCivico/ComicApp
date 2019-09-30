import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];
  constructor(
    private _heroesService: HeroesService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  verMas(index: number) {
    this._router.navigate(['/heroe', index]);
  }
}
