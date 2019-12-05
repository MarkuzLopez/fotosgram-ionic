import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
var LoginPage = /** @class */ (function () {
    function LoginPage(usuarioService) {
        this.usuarioService = usuarioService;
        this.avatars = [
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
        this.avatarSlide = {
            slidesPerview: 3.5
        };
        this.swiperOpts = {
            allowSlidePrev: false,
            allowSlideNext: false
        };
        this.loginUser = {
            email: 'efren@gmail.com',
            password: '12345'
        };
    }
    LoginPage.prototype.ngOnInit = function () {
        this.slides.lockSwipes(true); /// bloquear el slider
    };
    LoginPage.prototype.login = function (fLogin) {
        console.log(fLogin.valid);
        if (fLogin.invalid) {
            return;
        }
        this.usuarioService.login(this.loginUser.email, this.loginUser.password);
    };
    LoginPage.prototype.registro = function (fRegistro) {
        console.log(fRegistro.valid);
    };
    LoginPage.prototype.selecionarAvatar = function (avatar) {
        /// dess ssselecdionar el aavatar para cambiar
        this.avatars.forEach(function (avtr) {
            avtr.seleccionado = false;
        });
        /// selecionador el nuevo avatar y desabilitar los demas 
        avatar.seleccionado = true;
    };
    LoginPage.prototype.mostrarLogin = function () {
        this.slides.lockSwipes(false); // dessbloquear el slider
        this.slides.slideTo(0); // mostrar el login deoendiendo de l slider posicion 0 y 1
        this.slides.lockSwipes(true); // volver a bloquear.s
    };
    LoginPage.prototype.mostrarRegistro = function () {
        this.slides.lockSwipes(false);
        this.slides.slideTo(1);
        this.slides.lockSwipes(true);
    };
    tslib_1.__decorate([
        ViewChild('slidePrincipal'),
        tslib_1.__metadata("design:type", IonSlides)
    ], LoginPage.prototype, "slides", void 0);
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [UsuarioService])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map