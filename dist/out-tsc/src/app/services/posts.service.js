import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
var url = environment.url;
var PostsService = /** @class */ (function () {
    function PostsService(http) {
        this.http = http;
        this.paginado = 0;
    }
    PostsService.prototype.getPosts = function (pull) {
        if (pull === void 0) { pull = false; }
        if (pull) {
            this.paginado = 0;
        }
        this.paginado++;
        return this.http.get(url + "/post?pagina=" + this.paginado);
    };
    PostsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], PostsService);
    return PostsService;
}());
export { PostsService };
//# sourceMappingURL=posts.service.js.map