import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { UiservicesService } from '../../services/uiservices.service';
import { Usuario } from '../../interfaces/interfaces';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal') slides: IonSlides;

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
];

avatarSlide = {
  slidesPerview: 3.5
};

swiperOpts = {
  allowSlidePrev: false,
  allowSlideNext: false
};

loginUser = {
  email: 'efren@gmail.com',
  password: '12345'
};

registroUsuario: Usuario = {
  email: 'test',
  password: '123456',
  nombre: 'Markuz'
};

  constructor(private usuarioService: UsuarioService,
              private navCtrl: NavController,
              private uisService: UiservicesService) { }

  ngOnInit() {
    this.slides.lockSwipes(true); /// bloquear el slider
  }

  async login(fLogin: NgForm) {
    console.log(fLogin.valid);
    if (fLogin.invalid) {
      return;
    }

    const vaalido =  await this.usuarioService.login(this.loginUser.email, this.loginUser.password);

    if (vaalido) {
      this.navCtrl.navigateRoot('/main/tabs/tab1', {animated: true});
    } else {
      // si el usuario no es valido.
      this.uisService.alertaMensaje('Usuario y/o contrasseña no son correctos');
    }

  }

  async registro(fRegistro: NgForm) {

    if (fRegistro.invalid) { return; }
    console.log(fRegistro.valid);

    const validoForm = await this.usuarioService.registro(this.registroUsuario);

    if (validoForm) {
      this.navCtrl.navigateRoot('/main/tabs/tab1', {animated: true});
    } else {
      // si el usuario no es valido.
      this.uisService.alertaMensaje('El correo ya existe');
    }

  }

  selecionarAvatar(avatar) {

    /// dess ssselecdionar el aavatar para cambiar
    this.avatars.forEach(avtr => {
      avtr.seleccionado = false;
    });

    /// selecionador el nuevo avatar y desabilitar los demas 
    avatar.seleccionado = true;
  }

  mostrarLogin() {
    this.slides.lockSwipes(false); // dessbloquear el slider
    this.slides.slideTo(0); // mostrar el login deoendiendo de l slider posicion 0 y 1
    this.slides.lockSwipes(true); // volver a bloquear.s
  }

  mostrarRegistro() {
  this.slides.lockSwipes(false);
  this.slides.slideTo(1);
  this.slides.lockSwipes(true);
  }

}
