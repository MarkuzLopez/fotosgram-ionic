import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-avatar-selector',
  templateUrl: './avatar-selector.component.html',
  styleUrls: ['./avatar-selector.component.scss'],
})
export class AvatarSelectorComponent implements OnInit {

@Output() avatarSSel = new EventEmitter<string>();
@Input() avatarActual = 'av-1.png';

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

  constructor() { }

  ngOnInit() {
    // primero selecionamos todoss y lo ponemos como falso los avatarss
    this.avatars.forEach( avatar => avatar.seleccionado = false);

    // despues con un ciclo todos los avatar vemos cual coincie con el 
    // que se mandaa dessde el tag osea el padre, para aplicar la actualizacion
    for ( const avatar  of this.avatars) {
      // si el avatar del ciclo con el actual es igual, pasarlo a true.
        if (avatar.img === this.avatarActual) {
          avatar.seleccionado = true;
          break;
        }
    }
  }

  selecionarAvatar(avatar) {

    /// dess ssselecdionar el aavatar para cambiar
    this.avatars.forEach(avtr => {
      avtr.seleccionado = false;
    });

    /// selecionador el nuevo avatar y desabilitar los demas 
    avatar.seleccionado = true;
    console.log(avatar.img);
    this.avatarSSel.emit(avatar.img);
  }

}
