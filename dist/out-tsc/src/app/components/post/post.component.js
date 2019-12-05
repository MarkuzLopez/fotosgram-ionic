import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var PostComponent = /** @class */ (function () {
    function PostComponent() {
        this.post = {};
        this.img1 = '/assets/perro-1.jpg';
    }
    PostComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PostComponent.prototype, "post", void 0);
    PostComponent = tslib_1.__decorate([
        Component({
            selector: 'app-post',
            templateUrl: './post.component.html',
            styleUrls: ['./post.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PostComponent);
    return PostComponent;
}());
export { PostComponent };
//# sourceMappingURL=post.component.js.map