// Angular
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

/**
 * Sanitize HTML
 */
@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  /**
   * Pipe Constructor
   *
   * @param _sanitizer: DomSanitezer
   */
   constructor(private sanitizer: DomSanitizer) {}
   transform(url) {
     return this.sanitizer.bypassSecurityTrustResourceUrl(url);
   }
}