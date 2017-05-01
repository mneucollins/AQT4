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
var AidsActivism04Component = (function () {
    function AidsActivism04Component(_router) {
        this._router = _router;
    }
    ;
    AidsActivism04Component.prototype.onNavForward = function () {
        this._router.navigate(['/aids_activism_05']);
    };
    AidsActivism04Component.prototype.onNavBack = function () {
        this._router.navigate(['/aids_activism_03']);
    };
    AidsActivism04Component = __decorate([
        core_1.Component({
            templateUrl: 'app/threads/aids_activism/aids_activism_04.component.html',
            styleUrls: [
                'app/threads/aids_activism/aids_activism_base.css',
                'app/threads/aids_activism/aids_activism_04.component.css',
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AidsActivism04Component);
    return AidsActivism04Component;
}());
exports.AidsActivism04Component = AidsActivism04Component;
//# sourceMappingURL=aids_activism_04.component.js.map