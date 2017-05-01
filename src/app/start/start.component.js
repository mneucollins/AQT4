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
var StartComponent = (function () {
    function StartComponent(_router) {
        this._router = _router;
    }
    ;
    StartComponent.prototype.onExplore = function () {
        this._router.navigate(['/explore']);
    };
    StartComponent.prototype.onMyQuilt = function () {
        this._router.navigate(['/my_quilt']);
    };
    StartComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/start/start.component.html',
            styleUrls: ['app/start/start.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], StartComponent);
    return StartComponent;
}());
exports.StartComponent = StartComponent;
//# sourceMappingURL=start.component.js.map