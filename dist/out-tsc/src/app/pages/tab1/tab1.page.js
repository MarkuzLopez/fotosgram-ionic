import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
var Tab1Page = /** @class */ (function () {
    function Tab1Page(postServi) {
        this.postServi = postServi;
        this.posts = [];
        this.habilitado = true;
    }
    Tab1Page.prototype.ngOnInit = function () {
        this.siguiente();
    };
    Tab1Page.prototype.siguiente = function (event, pull) {
        var _this = this;
        if (pull === void 0) { pull = false; }
        this.postServi.getPosts(pull).subscribe(function (res) {
            var _a;
            console.log(res);
            (_a = _this.posts).push.apply(_a, res.posts);
            /// existe el evento cargar el infinite scroll 
            if (event) {
                event.target.complete();
                //  si el arreglo de postss es a 0 caancelar el infinite scroll 
                if (res.posts.length === 0) {
                    // event.target.disabled = true;
                    _this.habilitado = false;
                }
            }
        });
    };
    Tab1Page.prototype.recargar = function (event) {
        this.siguiente(event, true);
        this.habilitado = true;
        this.posts = [];
    };
    Tab1Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab1',
            templateUrl: 'tab1.page.html',
            styleUrls: ['tab1.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [PostsService])
    ], Tab1Page);
    return Tab1Page;
}());
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map