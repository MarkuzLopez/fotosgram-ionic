import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const url = environment.url;
@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, userId: string): string {
    console.log('img', img);
    console.log('userid', userId);
    console.log('url', url);
    // /post/imagen/5d0928f94c75b71a7f003c97/3rr3ghjovk3rvukhi.jpg
    return `${url}/post/imagen/${userId}/${img}`;
  }

}
