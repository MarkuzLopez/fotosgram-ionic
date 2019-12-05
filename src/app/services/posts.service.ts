import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaaPosts, Post } from '../interfaces/interfaces';
import { UsuarioService } from './usuario.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  paginado = 0;
  nuevoPost = new EventEmitter<Post>();

  constructor(private http: HttpClient,
              private userService: UsuarioService,
              private transfer: FileTransfer) { }

  getPosts(pull: boolean = false) {

    if (pull) {
      this.paginado = 0;
    }
    this.paginado++;
    return this.http.get<RespuestaaPosts>(`${url}/post?pagina=${this.paginado}`);
  }

  createPosst(post) {
    const headers = new HttpHeaders({
      'x-token': this.userService.token
    });

    return new Promise(resolve => {
      this.http.post(`${url}/post`, post, { headers }).subscribe(resp => {
        console.log(resp);
        this.nuevoPost.emit(resp['post']);
        resolve(true);
      });
    });
  }

  subirImagen(img: string) {
    const options: FileUploadOptions = {
      fileKey: 'image',
      headers: {
        'x-token':  this.userService.token
      }
    };
    console.log(' img', img);
    // const fileTransfer: FileTransferObject = this.fileTransfer.create();
    const fileTransfer: FileTransferObject = this.transfer.create();

    console.log('fileTransfer', fileTransfer);

    fileTransfer.upload( img, `${url}/post/upload`, options )
      .then( data => {
        console.log('se carga el archivo', data);
      }).catch( err => {
        console.log('error en carga', err);
      });
  }
}

