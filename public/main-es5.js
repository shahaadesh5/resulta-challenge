(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"main_banner\">\n  <div class=\"container\">\n    <h1 class=\"text-center\">Acme Sports</h1>\n  </div>\n</section>\n<section class=\"mt-5\">\n  <div class=\"container\">\n    <h2 class=\"text-center\">Team Data</h2>\n    <button (click)=\"onDisplayModeChange(1)\"\n    [ngClass]=\"{'btn-primary active': displayMode === 1}\">\n    Grid view\n  </button>\n  <button (click)=\"onDisplayModeChange(2)\"\n  [ngClass]=\"{'btn-primary active': displayMode === 2}\">\nList view\n  </button>\n<div *ngIf=\"displayMode===1\" class=\"container mt-5\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n    <div class=\"form-group\">\n        <label for=\"ascSort\">Ascending Sort:</label>\n        <select class=\"form-control\" id=\"ascSort\" (change)=\"sort_asc($event.target.value)\">\n            <option *ngFor=\"let columns of values\">{{columns}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n    <div class=\"form-group\">\n        <label for=\"ascSort\">Descending Sort:</label>\n        <select class=\"form-control\" id=\"ascSort\" (change)=\"sort_desc($event.target.value)\">\n            <option *ngFor=\"let columns of values\">{{columns}}</option>\n        </select>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3 col-sm-6 col-xs-6\" *ngFor='let team of teamData | paginate: { itemsPerPage: 8, currentPage: p }'>\n        <div class=\"card mt-4\">\n            <img src=\"https://www.w3schools.com/howto/img_avatar.png\" alt=\"Avatar\" style=\"width:100%\">\n            <div class=\"container text-center\">\n              <h3 class=\"\">{{team.name}}</h3>\n               <p>Region: {{team.display_name}}</p>\n              <p class=\"\">Division: {{team.division}}</p> \n            </div>\n            <div class=\"card_overlay\">\n                <div class=\"card_overlay_image\">\n                  <img src=\"https://www.w3schools.com/howto/img_avatar.png\" alt=\"Avatar\" class=\"img-fluid\">\n                </div>\n                <div class=\"card_overlay_detail text-center\">\n                  <h4>{{team.nickname}}</h4>\n                  <p>{{team.conference}} | {{team.division}}</p>\n                </div>\n              </div>\n          </div>\n          \n    </div>\n    <div class=\"mt-5\">\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n  </div>\n  </div>\n</div>\n<div *ngIf=\"displayMode===2\" class=\"container mt-5\">\n  <table class=\"table\">\n      <thead>\n        <tr>\n          <th *ngFor=\"let columns of values\">{{columns}} <span class=\"sort\" (click)=\"sort_asc(columns)\"> &#9660; </span><span class=\"sort\" (click)=\"sort_desc(columns)\"> &#9650; </span> </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let team of teamData\">\n          <td>{{team.name}}</td>\n          <td>{{team.nickname}}</td>\n          <td>{{team.display_name}}</td>\n          <td>{{team.id}}</td>\n          <td>{{team.conference}}</td>\n          <td>{{team.division}}</td>\n        </tr>\n      </tbody>\n    </table>\n</div>\n  </div>\n</section>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n.main_banner{\r\n    padding: 20px;\r\n    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);\r\n}\r\nh1{\r\n    font-size: 50px;\r\n    line-height: 55px;\r\n    letter-spacing: 2px;\r\n}\r\nbutton{\r\n    margin-right: 5px;\r\n    padding: 10px;\r\n    font-size: 15px;\r\n    line-height: 20px;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n    border: 1px solid;\r\n    background-color: #fff;\r\n    -webkit-transition: all 0.5s ease;\r\n    transition: all 0.5s ease;\r\n}\r\nbutton:hover{\r\n    background-color: #000;\r\n    color: #fff;\r\n}\r\nbutton.active {\r\n    color: green;\r\n   }\r\n.card{\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    cursor: pointer;\r\n}\r\nh3{\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n.card_overlay{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n    -webkit-transition: all 0.2s ease;\r\n    transition: all 0.2s ease;\r\n    background: #fff;\r\n}\r\n.card_overlay_image{\r\n    width: 150px;\r\n    height: 150px;\r\n    border-radius: 50%;\r\n    margin: 10px auto 0;\r\n    overflow: hidden;\r\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n.card_overlay_detail{\r\n    margin-top: 35px;\r\n    color: #000;\r\n}\r\n.card:hover .card_overlay{\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n}\r\nth{\r\n    text-transform: capitalize;\r\n}\r\n.sort{\r\n    opacity: 0;\r\n    cursor: pointer;\r\n}\r\n.sort:hover{\r\n    opacity: 1;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLGFBQWE7SUFDYixtR0FBbUc7QUFDdkc7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGlDQUF5QjtJQUF6Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7R0FDYjtBQUNIO0lBQ0ksdUNBQXVDO0lBQ3ZDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0lBRTNCLG1CQUFtQjtJQUNuQixpQ0FBeUI7SUFBekIseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiw2RUFBNkU7QUFDakY7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLDJCQUEyQjtJQUUzQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5tYWluX2Jhbm5lcntcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbn1cclxuaDF7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG59XHJcbmJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5idXR0b24uYWN0aXZlIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgfVxyXG4uY2FyZHtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5oM3tcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZF9vdmVybGF5e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmNhcmRfb3ZlcmxheV9pbWFnZXtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0byAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcbi5jYXJkX292ZXJsYXlfZGV0YWlse1xyXG4gICAgbWFyZ2luLXRvcDogMzVweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5jYXJkOmhvdmVyIC5jYXJkX292ZXJsYXl7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxudGh7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4uc29ydHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNvcnQ6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _teamlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teamlist.service */ "./src/app/teamlist.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(teams) {
        this.teams = teams;
        this.title = 'acmesport';
        this.displayMode = 1;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teams.getTeams().subscribe(function (data) {
            console.log(data);
            _this.teamData = data["results"]["data"]["team"];
            _this.newteamData = _this.teamData;
            console.log(_this.teamData);
            _this.columns = data["results"]["columns"];
            console.log(_this.columns);
            _this.values = Object.keys(_this.columns);
            console.log(_this.values);
        });
    };
    AppComponent.prototype.onDisplayModeChange = function (mode) {
        this.displayMode = mode;
    };
    AppComponent.prototype.sort_asc = function (columns) {
        console.log(columns);
        this.newteamData = this.teamData.sort(function (a, b) {
            if (a[columns] > b[columns])
                return 1;
            else if (a[columns] === b[columns])
                return 0;
            else
                return -1;
        });
    };
    AppComponent.prototype.sort_desc = function (columns) {
        console.log(columns);
        this.newteamData = this.teamData.sort(function (a, b) {
            if (a[columns] < b[columns])
                return 1;
            else if (a[columns] === b[columns])
                return 0;
            else
                return -1;
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _teamlist_service__WEBPACK_IMPORTED_MODULE_2__["TeamlistService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/teamlist.service.ts":
/*!*************************************!*\
  !*** ./src/app/teamlist.service.ts ***!
  \*************************************/
/*! exports provided: TeamlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamlistService", function() { return TeamlistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TeamlistService = /** @class */ (function () {
    function TeamlistService(http) {
        this.http = http;
    }
    TeamlistService.prototype.getTeams = function () {
        return this.http.get('https://acme-sport-php.herokuapp.com/');
    };
    TeamlistService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TeamlistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TeamlistService);
    return TeamlistService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! X:\Dalhousie\Internship\resulta\resulta-challenge\acmesport\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map