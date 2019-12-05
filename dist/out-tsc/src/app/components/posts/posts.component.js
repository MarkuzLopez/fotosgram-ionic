import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var PostsComponent = /** @class */ (function () {
    function PostsComponent() {
        this.posts = [];
    }
    PostsComponent.prototype.ngOnInit = function () {
        console.log(this.posts);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], PostsComponent.prototype, "posts", void 0);
    PostsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-posts',
            templateUrl: './posts.component.html',
            styleUrls: ['./posts.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PostsComponent);
    return PostsComponent;
}());
export { PostsComponent };
//# sourceMappingURL=posts.component.js.map