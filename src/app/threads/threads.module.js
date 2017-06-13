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
var http_1 = require('@angular/http');
var shared_module_1 = require('../shared/shared.module');
var aids_activism_01_component_1 = require('./aids_activism/aids_activism_01.component');
var aids_activism_02_component_1 = require('./aids_activism/aids_activism_02.component');
var aids_activism_03_component_1 = require('./aids_activism/aids_activism_03.component');
var aids_activism_04_component_1 = require('./aids_activism/aids_activism_04.component');
// import { AidsActivism05Component } from './aids_activism/aids_activism_05.component';
var ThreadsModule = (function () {
    function ThreadsModule() {
    }
    ThreadsModule = __decorate([
        core_1.NgModule({
            declarations: [
                aids_activism_01_component_1.AidsActivism01Component,
                aids_activism_02_component_1.AidsActivism02Component,
                aids_activism_03_component_1.AidsActivism03Component,
                aids_activism_04_component_1.AidsActivism04Component,
            ],
            imports: [
                http_1.HttpModule,
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild([
                    { path: 'aids_activism_01', component: aids_activism_01_component_1.AidsActivism01Component },
                    { path: 'aids_activism_02', component: aids_activism_02_component_1.AidsActivism02Component },
                    { path: 'aids_activism_03', component: aids_activism_03_component_1.AidsActivism03Component },
                    { path: 'aids_activism_04', component: aids_activism_04_component_1.AidsActivism04Component },
                ])
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ThreadsModule);
    return ThreadsModule;
}());
exports.ThreadsModule = ThreadsModule;
//# sourceMappingURL=threads.module.js.map