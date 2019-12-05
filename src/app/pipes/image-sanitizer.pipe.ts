import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'imageSanitizer'
})
export class ImageSanitizerPipe implements PipeTransform {

  constructor(private domnSanitizer: DomSanitizer) { }

  transform(img: any): any {
    return this.domnSanitizer.bypassSecurityTrustUrl(img);
  }

}
