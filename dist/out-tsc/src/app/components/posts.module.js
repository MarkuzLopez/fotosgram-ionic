import * as tslib_1 from "tslib";
import { PostComponent } from './post/post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
var PostsModule = /** @class */ (function () {
    function PostsModule() {
    }
    PostsModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                PostsComponent,
                PostComponent
            ],
            exports: [
                PostsComponent
            ],
            imports: [
                CommonModule,
                IonicModule,
                PipesModule
            ]
        })
    ], PostsModule);
    return PostsModule;
}());
export { PostsModule };
//# sourceMappingURL=posts.module.js.map