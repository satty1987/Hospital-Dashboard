(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["entry-doctor-entry-doctor-module"],{

/***/ "./src/app/common/core/module/material-doctor/entry-material.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/common/core/module/material-doctor/entry-material.module.ts ***!
  \*****************************************************************************/
/*! exports provided: EntryMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryMaterialModule", function() { return EntryMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EntryMaterialModule = /** @class */ (function () {
    function EntryMaterialModule() {
    }
    EntryMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"]
            ]
        })
    ], EntryMaterialModule);
    return EntryMaterialModule;
}());



/***/ }),

/***/ "./src/app/entry-doctor/entry-doctor-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/entry-doctor/entry-doctor-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EntryDoctorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryDoctorRoutingModule", function() { return EntryDoctorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _entry_doctor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entry-doctor.component */ "./src/app/entry-doctor/entry-doctor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _entry_doctor_component__WEBPACK_IMPORTED_MODULE_2__["EntryDoctorComponent"], children: [
            { path: '', loadChildren: './dashboard-doctor/dashboard-doctor.module#DashboardDoctorModule' }
        ] }
];
var EntryDoctorRoutingModule = /** @class */ (function () {
    function EntryDoctorRoutingModule() {
    }
    EntryDoctorRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EntryDoctorRoutingModule);
    return EntryDoctorRoutingModule;
}());



/***/ }),

/***/ "./src/app/entry-doctor/entry-doctor.component.html":
/*!**********************************************************!*\
  !*** ./src/app/entry-doctor/entry-doctor.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n\n  <mat-sidenav>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n\n    <mat-toolbar>\n      <div class=\"wrap\">\n        <mat-toolbar>\n          <span routerLink=\"/\">Dashboard</span>\n          <button mat-icon-button [mat-menu-trigger-for]=\"posXMenuOverlay\">\n            <mat-icon>more_vert</mat-icon>\n          </button>\n        </mat-toolbar>\n      </div>\n    </mat-toolbar>\n\n    <div id=\"app-content\">\n      <router-outlet></router-outlet>\n    </div>\n\n  </mat-sidenav-content>\n\n</mat-sidenav-container>\n\n<mat-menu xPosition=\"before\" [overlapTrigger]=\"false\" #posXMenuOverlay=\"matMenu\">\n  <button mat-menu-item disabled>\n    <mat-icon>settings</mat-icon>\n    Settings\n  </button>\n  <button mat-menu-item (click)=\"onSignout()\" >\n    <mat-icon>power_settings_new</mat-icon>\n    Sign out\n  </button>\n</mat-menu>\n"

/***/ }),

/***/ "./src/app/entry-doctor/entry-doctor.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/entry-doctor/entry-doctor.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap .mat-toolbar {\n  padding: 0; }\n  .wrap .mat-toolbar .mat-icon-button {\n    margin-left: auto; }\n  #app-content {\n  height: calc(100vh - 64px);\n  overflow-y: auto;\n  overflow-x: hidden; }\n  @media (max-width: 575px) {\n  .mat-toolbar .wrap {\n    padding: 0; } }\n  @media (max-width: 599px) {\n  #app-content {\n    height: calc(100vh - 56px); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnktZG9jdG9yL0M6XFxVc2Vyc1xcVUlVWFxcRGVza3RvcFxcaGQtZGFzaGJvYXJkLW1hc3Rlci9zcmNcXGFwcFxcZW50cnktZG9jdG9yXFxlbnRyeS1kb2N0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVLEVBQUE7RUFEWjtJQUlJLGlCQUFpQixFQUFBO0VBSXJCO0VBQ0UsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTtFQUdwQjtFQUNFO0lBQ0UsVUFBVSxFQUFBLEVBQ1g7RUFHSDtFQUNFO0lBQ0UsMEJBQTBCLEVBQUEsRUFDM0IiLCJmaWxlIjoic3JjL2FwcC9lbnRyeS1kb2N0b3IvZW50cnktZG9jdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXAgLm1hdC10b29sYmFyIHtcbiAgcGFkZGluZzogMDtcblxuICAubWF0LWljb24tYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxufVxuXG4jYXBwLWNvbnRlbnQge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLm1hdC10b29sYmFyIC53cmFwIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1OTlweCkge1xuICAjYXBwLWNvbnRlbnQge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/entry-doctor/entry-doctor.component.ts":
/*!********************************************************!*\
  !*** ./src/app/entry-doctor/entry-doctor.component.ts ***!
  \********************************************************/
/*! exports provided: EntryDoctorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryDoctorComponent", function() { return EntryDoctorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/core/service/auth.service */ "./src/app/common/core/service/auth.service.ts");
/* harmony import */ var _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/core/service/firestore.service */ "./src/app/common/core/service/firestore.service.ts");
/* harmony import */ var _common_core_service_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/core/service/shared.service */ "./src/app/common/core/service/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EntryDoctorComponent = /** @class */ (function () {
    function EntryDoctorComponent(router, authService, firestoreService, sharedService) {
        this.router = router;
        this.authService = authService;
        this.firestoreService = firestoreService;
        this.sharedService = sharedService;
    }
    EntryDoctorComponent.prototype.ngOnInit = function () {
    };
    EntryDoctorComponent.prototype.onSignout = function () {
        var _this = this;
        this.authService.signOut().then(function () {
            _this.firestoreService.disableNetwork().then(function () {
                _this.router.navigate(['/']);
                _this.sharedService.signOutSuccess();
            });
        });
    };
    EntryDoctorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entry-doctor',
            template: __webpack_require__(/*! ./entry-doctor.component.html */ "./src/app/entry-doctor/entry-doctor.component.html"),
            styles: [__webpack_require__(/*! ./entry-doctor.component.scss */ "./src/app/entry-doctor/entry-doctor.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _common_core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"],
            _common_core_service_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], EntryDoctorComponent);
    return EntryDoctorComponent;
}());



/***/ }),

/***/ "./src/app/entry-doctor/entry-doctor.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/entry-doctor/entry-doctor.module.ts ***!
  \*****************************************************/
/*! exports provided: EntryDoctorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryDoctorModule", function() { return EntryDoctorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _entry_doctor_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entry-doctor-routing.module */ "./src/app/entry-doctor/entry-doctor-routing.module.ts");
/* harmony import */ var _common_core_module_material_doctor_entry_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/core/module/material-doctor/entry-material.module */ "./src/app/common/core/module/material-doctor/entry-material.module.ts");
/* harmony import */ var _entry_doctor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entry-doctor.component */ "./src/app/entry-doctor/entry-doctor.component.ts");
/* harmony import */ var _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/core/service/firestore.service */ "./src/app/common/core/service/firestore.service.ts");
/* harmony import */ var _common_core_service_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/core/service/database.service */ "./src/app/common/core/service/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var EntryDoctorModule = /** @class */ (function () {
    function EntryDoctorModule() {
    }
    EntryDoctorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _entry_doctor_routing_module__WEBPACK_IMPORTED_MODULE_2__["EntryDoctorRoutingModule"],
                _common_core_module_material_doctor_entry_material_module__WEBPACK_IMPORTED_MODULE_3__["EntryMaterialModule"]
            ],
            declarations: [
                _entry_doctor_component__WEBPACK_IMPORTED_MODULE_4__["EntryDoctorComponent"]
            ],
            providers: [
                _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"],
                _common_core_service_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"]
            ]
        })
    ], EntryDoctorModule);
    return EntryDoctorModule;
}());



/***/ })

}]);
//# sourceMappingURL=entry-doctor-entry-doctor-module.js.map