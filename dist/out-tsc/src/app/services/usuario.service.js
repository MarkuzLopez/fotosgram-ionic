import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Storage } from '@ionic/storage';
var URL = environment.url;
var UsuarioService = /** @class */ (function () {
    function UsuarioService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.token = null;
    }
    UsuarioService.prototype.login = function (email, password) {
        var data = { email: email, password: password };
        this.http.post(URL + "/user/login", data).subscribe(function (resp) {
            console.log(resp);
        });
    };
    UsuarioService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, Storage])
    ], UsuarioService);
    return UsuarioService;
}());
export { UsuarioService };
//# sourceMappingURL=usuario.service.js.map