import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search-heroes',
  templateUrl: './search-heroes.component.html'
})
export class SearchHeroesComponent implements OnInit {

  heroes: any[] = [];

  constructor(
    private _heroesService: HeroesService,
    private _router: Router,
    private _activatedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activatedRouter.params.subscribe(res => {
      this.heroes = this._heroesService.buscarHeroes(res['text'])
    });
  }

  verMas(index: number) {
    this._router.navigate(['/heroe', index]);
  }
}
