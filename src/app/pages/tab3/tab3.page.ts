import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';
import { NgForm } from '@angular/forms';
import { UiservicesService } from '../../services/uiservices.service';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
 usuario: Usuario = {};
  constructor(private usuarioService: UsuarioService,
              private uiServicess: UiservicesService,
              private postService: PostsService ) {}

  ngOnInit() {
    this.usuario =  this.usuarioService.getUsuario();
    console.log(this.usuario);
  }

  async actualizar(fActualizar: NgForm) {
    if (fActualizar.invalid) {
      return;
    }

    const actualizado = await this.usuarioService.actualizarUsuario(this.usuario);
    console.log(actualizado);

    if (actualizado) {
        /// si se actualizado es true, mandaar un mensaje en un toast
      this.uiServicess.presentToast('Usuario Actualizado Correctamente');
    } else {
      // toas conm el erro 
      this.uiServicess.presentToast('Error Usuario no actualizado');
    }
  }

  logout() {
    this.postService.paginado = 0;
    this.usuarioService.logOut();
  }

}
