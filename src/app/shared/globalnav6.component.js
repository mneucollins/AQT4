"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var GlobalNav6Component = (function () {
    //global routing is in the app.module
    //GlobalNav6 a 6-icon menu bar for placement at the bottome of the screen
    function GlobalNav6Component(_router, _location) {
        this._router = _router;
        this._location = _location;
    }
    ;
    GlobalNav6Component.prototype.onHome = function () {
        this._router.navigate(['/home']);
    };
    GlobalNav6Component.prototype.onBack = function () {
        this._location.back();
    };
    GlobalNav6Component = __decorate([
        core_1.Component({
            selector: 'globalnav6',
            templateUrl: 'app/shared/globalnav6.component.html',
            styleUrls: ['app/shared/globalnav6.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location])
    ], GlobalNav6Component);
    return GlobalNav6Component;
}());
exports.GlobalNav6Component = GlobalNav6Component;
//# sourceMappingURL=globalnav6.component.js.map