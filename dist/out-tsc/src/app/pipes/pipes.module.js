import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizerPipe } from './dom-sanitizer.pipe';
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = tslib_1.__decorate([
        NgModule({
            declarations: [DomSanitizerPipe],
            exports: [DomSanitizerPipe],
            imports: [
                CommonModule
            ]
        })
    ], PipesModule);
    return PipesModule;
}());
export { PipesModule };
//# sourceMappingURL=pipes.module.js.map