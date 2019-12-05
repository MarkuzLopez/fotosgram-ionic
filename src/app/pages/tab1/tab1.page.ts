import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  posts: Post[] = [];
  habilitado = true;

  constructor(public postServi: PostsService) {}

  ngOnInit() {
    this.siguiente();
    this.postServi.nuevoPost.subscribe( post => {
      this.posts.unshift(post);
    });
  }

  siguiente(event?, pull: boolean = false) {

    this.postServi.getPosts(pull).subscribe(res => {
      console.log(res);
      this.posts.push(...res.posts);
      /// existe el evento cargar el infinite scroll 
      if (event) {
        event.target.complete();
        //  si el arreglo de postss es a 0 caancelar el infinite scroll 
        if (res.posts.length === 0) {
          // event.target.disabled = true;
          this.habilitado = false;
        }
      }
    });
  }

  recargar(event) {
    this.siguiente(event, true);
    this.habilitado = true;
    this.posts = [];
  }
}
