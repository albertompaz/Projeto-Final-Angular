import { Component, OnInit } from '@angular/core';
import { AuthService } from '../index/auth.service';
import { Usuario } from '../index/usuario';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  formulario3: FormGroup;

  usuario: any;

  constructor(private formBuilder: FormBuilder ,private authService: AuthService) { }

 

  ngOnInit() {
    this.formulario3 = this.formBuilder.group({
      nome: [null],
      pontos: [null],
    })
    //dados => this.mostrarid(dados)
    this.authService.mostrarUsuarioEmitter.subscribe(dados => this.mostrarid(dados));
    //console.log(this.usuario)
  }

  mostrarid(dados) {
    this.usuario = dados;
    console.log("AAAA: "+ this.usuario)

    console.log('dados.nome:'+dados[0].nome)

    this.formulario3.patchValue({
      nome: [dados.nome],//[dados.nome],
      pontos: [dados.pontos]
    })
    
  }

  mostrarDados() {
    this.formulario3.patchValue({
      nome: [this.usuario.nome],//[dados.nome],
      pontos: [this.usuario.pontos[0]]
    })
  }

}
