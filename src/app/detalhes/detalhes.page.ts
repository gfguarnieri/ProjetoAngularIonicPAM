import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PokeAPIService } from '../services/poke-api.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetalhesPage implements OnInit {

  public nome: string = "";
  public imagem: string = "";

  //ActivetedRoute é usado para buscar as informações da URL
  constructor(private route:ActivatedRoute, private pokeAPI:PokeAPIService) { }

  //Ao carregar a tela
  async ngOnInit() {
    //Pegando nome que veio pela rota (precisa ser igual ao do app.routes)
    this.nome = this.route.snapshot.paramMap.get("nome") || '';

    //Usando serviço criado
    const dados = await this.pokeAPI.buscarPokemon(this.nome.toLowerCase());

    //Alterando propriedade imagem
    this.imagem = dados.sprites.other.dream_world.front_default;
  }

}
