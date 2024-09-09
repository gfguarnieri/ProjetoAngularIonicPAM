import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class HomePage {
  public nome: string = "";
  public sobrenome: string = "";
  public nomeCompleto: string = "";

  constructor(private alertController:AlertController) { }

  async aviso() {

    const mensagem = await this.alertController.create({
      header: 'Nome completo',
      message: 'O seu nome completo é ' + this.nomeCompleto,
      buttons: ["OK"]
    });

    await mensagem.present();
  }

  concatenarNomes(){
    this.nomeCompleto = this.nome + " " + this.sobrenome;
    this.aviso();
  }
  
}
