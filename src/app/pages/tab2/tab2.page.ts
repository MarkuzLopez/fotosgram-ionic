import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

declare var window: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
 verKImg: any;
  post = {
    mensaje: '',
    cordenadas: null,
    posicion: false
  };

  tempImages: string[] = [];
  cargando = false;

  constructor(private postService: PostsService,
              private router: Router,
              private geolocation: Geolocation,
              private camera: Camera) { }


  async crearPost() {
    console.log(this.post);
    const creado = await this.postService.createPosst(this.post);

    this.post = {
      mensaje: '',
      cordenadas: null,
      posicion: false
    };
    this.tempImages = [];
    this.router.navigateByUrl('/main/tabs/tab1');

  }

  getGeo() {
    console.log(this.post);
    if (!this.post.posicion) {
      this.post.cordenadas = null;
      return;
    }

    this.cargando = true;

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.cargando = false;

      /// obteniendo las geolocacilicaciones.
      const coords = `${resp.coords.latitude}, ${resp.coords.longitude}`;
      console.log(coords);
      this.post.cordenadas =  coords;
      console.log(this.post);


     }).catch((error) => {
       console.log('Error getting location', error);
       this.cargando = false;
     });
  }

  camara() {
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
    this.procesarImg(options);
  }

  libreriaImg() {
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };

    this.procesarImg(options);
  }

  procesarImg(options: CameraOptions) {
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
     //  let base64Image = 'data:image/jpeg;base64,' + imageData;
     console.log('img data', imageData);

     const img = window.Ionic.WebView.convertFileSrc(imageData);
     this.verKImg = img;
     console.log('img de weebView', img);
     this.postService.subirImagen(imageData);
     this.tempImages.push( img );
     }, (err) => {
      // Handle error
     });
  }

}
