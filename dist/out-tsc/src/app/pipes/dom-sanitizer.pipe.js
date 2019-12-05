import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var DomSanitizerPipe = /** @class */ (function () {
    function DomSanitizerPipe(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    DomSanitizerPipe.prototype.transform = function (img) {
        // background-image: url('/assets/perro-1.jpg')
        var domImg = "background-image: url(" + img + ")";
        return this.domSanitizer.bypassSecurityTrustStyle(domImg);
    };
    DomSanitizerPipe = tslib_1.__decorate([
        Pipe({
            name: 'domSanitizer'
        }),
        tslib_1.__metadata("design:paramtypes", [DomSanitizer])
    ], DomSanitizerPipe);
    return DomSanitizerPipe;
}());
export { DomSanitizerPipe };
//# sourceMappingURL=dom-sanitizer.pipe.js.map