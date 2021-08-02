(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/carl/Documents/Privat/carljohanastrupdotcom/carl-website/src/main.ts */"zUnb");


/***/ }),

/***/ "1fes":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ExperienceComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 2, vars: 0, template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "experience works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-page-scroll-core */ "Zgu1");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _section_two_section_two_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./section-two/section-two.component */ "zONn");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "zyDg");






class AppComponent {
    constructor(pageScrollService, document) {
        this.pageScrollService = pageScrollService;
        this.document = document;
        this.title = 'carl-website';
        this.activeSection = 1;
    }
    fullPageScroll(e, i) {
        this.pageScrollService.scroll({
            scrollTarget: e,
            document: this.document
        });
        this.activeSection = i;
        console.log(this.activeSection);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_2__["PageScrollService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-section-two");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-portfolio");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _section_two_section_two_component__WEBPACK_IMPORTED_MODULE_4__["SectionTwoComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioComponent"]], styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  height: 100vh;\n  max-width: 1000px;\n}\n\n.scroll-outer[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #2196F3;\n}\n\n.card-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding: 25px;\n}\n\n.scroll-container[_ngcontent-%COMP%] {\n  width: 25px;\n  top: 25%;\n  right: 12%;\n  opacity: 0.7;\n  position: fixed;\n  transition: opacity 0.3s;\n  -webkit-transition: opacity 0.3s;\n}\n\n.scroll-container[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.step-section[_ngcontent-%COMP%] {\n  padding: 8px;\n  display: flex;\n  flex-direction: row;\n  background-color: cream;\n  justify-content: flex-start;\n}\n\n.vertical-nav[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.step-section[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 4px solid red;\n  border-radius: 100%;\n  width: 12px;\n  height: 12px;\n  display: inline-block;\n}\n\n.step-section.completed[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  visibility: visible;\n  border-color: black;\n}\n\n.step-section.active[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  visibility: visible;\n  border-color: black;\n}\n\n.step-section.empty[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7ICBcbn1cblxuLnNjcm9sbC1vdXRlciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMjE5NkYzO1xufVxuXG4uY2FyZC1jb250YWluZXIgaDMge1xuICAgIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5zY3JvbGwtY29udGFpbmVyIHtcbiAgd2lkdGg6IDI1cHg7XG4gIHRvcDogMjUlO1xuICByaWdodDogMTIlO1xuICBvcGFjaXR5OiAwLjc7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcbn1cblxuLnNjcm9sbC1jb250YWluZXI6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc3RlcC1zZWN0aW9uIHtcbiAgcGFkZGluZzogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmVhbTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyAgXG59XG5cbi52ZXJ0aWNhbC1uYXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zdGVwLXNlY3Rpb24gLmNpcmNsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiA0cHggc29saWQgcmVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnN0ZXAtc2VjdGlvbi5jb21wbGV0ZWQgLmNpcmNsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIGJvcmRlci1jb2xvcjogcmdiKDAsIDAsIDApO1xufVxuXG4uc3RlcC1zZWN0aW9uLmFjdGl2ZSAuY2lyY2xlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG59XG5cbi5zdGVwLXNlY3Rpb24uZW1wdHkgLmNpcmNsZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-page-scroll-core */ "Zgu1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.directive */ "vF8z");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _section_two_section_two_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./section-two/section-two.component */ "zONn");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "zyDg");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./experience/experience.component */ "1fes");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_1__["NgxPageScrollCoreModule"].forRoot({ duration: 1600 }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _header_directive__WEBPACK_IMPORTED_MODULE_5__["AppearDirective"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _section_two_section_two_component__WEBPACK_IMPORTED_MODULE_7__["SectionTwoComponent"],
        _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"],
        _experience_experience_component__WEBPACK_IMPORTED_MODULE_9__["ExperienceComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_1__["NgxPageScrollCoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderComponent {
    constructor() {
        this.hasAppeared = false;
    }
    onAppear() {
        this.hasAppeared = true;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 9, vars: 0, consts: [[2, "height", "1000px"], [1, "tracking-in-expand"], [2, "font-family", "lucy", "font-size", "100px", "text-align", "center", "line-height", "2"], [2, "margin-left", "10%", "max-width", "75%"], [1, "tracking-in-contract", 2, "font-family", "'NTR', sans-serif", "font-size", "50px", "color", "black"], [1, "tracking-in-contract", 2, "font-family", "'NTR', sans-serif", "font-size", "25px", "color", "grey"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hello Fellow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Hello Fellow ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " I'm a first-year MSc. Mathematical Modelling student at DTU in Copenhagen. I enjoy data science, financial engineering and programming. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".tracking-in-expand[_ngcontent-%COMP%] {\n  animation: tracking-in-expand 0.6s cubic-bezier(0.23, 1, 0.32, 1) 1s both;\n}\n@keyframes tracking-in-expand {\n  0% {\n    letter-spacing: -0.5em;\n    opacity: 0;\n  }\n  40% {\n    opacity: 0.6;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n\n.tracking-in-contract[_ngcontent-%COMP%] {\n  animation: tracking-in-contract 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 2s both;\n}\n@keyframes tracking-in-contract {\n  0% {\n    letter-spacing: 1em;\n    opacity: 0;\n  }\n  40% {\n    opacity: 0.6;\n  }\n  100% {\n    letter-spacing: normal;\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7bURBQUE7QUFPQTs7OztFQUFBO0FBS0M7RUFFUSx5RUFBQTtBQUFUO0FBZUU7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsVUFBQTtFQUFKO0VBRUU7SUFDRSxZQUFBO0VBQUo7RUFFRTtJQUNFLFVBQUE7RUFBSjtBQUNGO0FBR0U7Ozs7O2tEQUFBO0FBT0Y7Ozs7RUFBQTtBQU1DO0VBRVEsZ0ZBQUE7QUFIVDtBQWtCRTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VBRko7RUFJRTtJQUNFLFlBQUE7RUFGSjtFQUlFO0lBQ0Usc0JBQUE7SUFDQSxVQUFBO0VBRko7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAyMS04LTIgMTk6NDE6NTRcbiAqIExpY2Vuc2VkIHVuZGVyIEZyZWVCU0QgTGljZW5zZS5cbiAqIFNlZSBodHRwOi8vYW5pbWlzdGEubmV0L2xpY2Vuc2UgZm9yIG1vcmUgaW5mby4gXG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhbmltYXRpb24gdHJhY2tpbmctaW4tZXhwYW5kXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbiAudHJhY2tpbmctaW4tZXhwYW5kIHtcblx0LXdlYmtpdC1hbmltYXRpb246IHRyYWNraW5nLWluLWV4cGFuZCAwLjZzIGN1YmljLWJlemllcigwLjIzMCwgMS4wMDAsIDAuMzIwLCAxLjAwMCkgMXMgYm90aDtcblx0ICAgICAgICBhbmltYXRpb246IHRyYWNraW5nLWluLWV4cGFuZCAwLjZzIGN1YmljLWJlemllcigwLjIzMCwgMS4wMDAsIDAuMzIwLCAxLjAwMCkgMXMgYm90aDtcbn1cblxuIEAtd2Via2l0LWtleWZyYW1lcyB0cmFja2luZy1pbi1leHBhbmQge1xuICAgIDAlIHtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41ZW07XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA0MCUge1xuICAgICAgb3BhY2l0eTogMC42O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgdHJhY2tpbmctaW4tZXhwYW5kIHtcbiAgICAwJSB7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNWVtO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDIxLTgtMiAyMDoyOjIzXG4gKiBMaWNlbnNlZCB1bmRlciBGcmVlQlNEIExpY2Vuc2UuXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uIFxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYW5pbWF0aW9uIHRyYWNraW5nLWluLWNvbnRyYWN0XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuIC50cmFja2luZy1pbi1jb250cmFjdCB7XG5cdC13ZWJraXQtYW5pbWF0aW9uOiB0cmFja2luZy1pbi1jb250cmFjdCAwLjhzIGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCkgMnMgYm90aDtcblx0ICAgICAgICBhbmltYXRpb246IHRyYWNraW5nLWluLWNvbnRyYWN0IDAuOHMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKSAycyBib3RoO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHRyYWNraW5nLWluLWNvbnRyYWN0IHtcbiAgICAwJSB7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMWVtO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyB0cmFja2luZy1pbi1jb250cmFjdCB7XG4gICAgMCUge1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFlbTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIFxuICAiXX0= */"] });


/***/ }),

/***/ "vF8z":
/*!*************************************!*\
  !*** ./src/app/header.directive.ts ***!
  \*************************************/
/*! exports provided: AppearDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppearDirective", function() { return AppearDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class AppearDirective {
    constructor(element) {
        this.element = element;
        this.elementPos = 0;
        this.elementHeight = 0;
        this.scrollPos = 0;
        this.windowHeight = 0;
        this.hasAppeared = false;
        this.appear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    saveDimensions() {
        this.elementPos = this.getOffsetTop(this.element.nativeElement);
        this.elementHeight = this.element.nativeElement.offsetHeight;
        this.windowHeight = window.innerHeight;
    }
    saveScrollPos() {
        this.scrollPos = window.scrollY;
        console.log(window.scrollY);
    }
    getOffsetTop(element) {
        let offsetTop = element.offsetTop || 0;
        if (element.offsetParent) {
            offsetTop += this.getOffsetTop(element.offsetParent);
        }
        return offsetTop;
    }
    checkVisibility() {
        if (this.isVisible()) {
            // double check dimensions (due to async loaded contents, e.g. images)
            this.saveDimensions();
            if (this.isVisible()) {
                // this.unsubscribe();
                this.appear.emit(true);
                this.hasAppeared = true;
                console.log('herllo');
            }
        }
        else if (this.hasAppeared && !this.isVisible()) {
            this.appear.emit(false);
            this.hasAppeared = false;
            console.log('destroy');
        }
    }
    isVisible() {
        return this.scrollPos >= this.elementPos || (this.scrollPos + this.windowHeight) >= (this.elementPos + this.elementHeight);
    }
    subscribe() {
        this.subscriptionScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'scroll') // .startWith(null)
            .subscribe(() => {
            this.saveScrollPos();
            this.checkVisibility();
        });
        this.subscriptionResize = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'resize') // .startWith(null)
            .subscribe(() => {
            this.saveDimensions();
            this.checkVisibility();
        });
    }
    unsubscribe() {
        if (this.subscriptionScroll) {
            this.subscriptionScroll.unsubscribe();
        }
        if (this.subscriptionResize) {
            this.subscriptionResize.unsubscribe();
        }
    }
    ngAfterViewInit() {
        this.subscribe();
    }
    ngOnDestroy() {
        this.unsubscribe();
    }
}
AppearDirective.ɵfac = function AppearDirective_Factory(t) { return new (t || AppearDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AppearDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AppearDirective, selectors: [["", "appear", ""]], outputs: { appear: "appear" } });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zONn":
/*!******************************************************!*\
  !*** ./src/app/section-two/section-two.component.ts ***!
  \******************************************************/
/*! exports provided: SectionTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTwoComponent", function() { return SectionTwoComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header.directive */ "vF8z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function SectionTwoComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " About me ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " More about me here. Bla bla bla. More about me here. Bla bla bla. More about me here. Bla bla bla. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@enterAnimation", undefined);
} }
class SectionTwoComponent {
    constructor() {
        this.hasAppeared = false;
    }
    onAppear(appeared) {
        this.hasAppeared = appeared;
    }
}
SectionTwoComponent.ɵfac = function SectionTwoComponent_Factory(t) { return new (t || SectionTwoComponent)(); };
SectionTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SectionTwoComponent, selectors: [["app-section-two"]], decls: 2, vars: 1, consts: [[2, "height", "1000px", 3, "appear"], [4, "ngIf"], [2, "margin-left", "10%", "max-width", "30%"], [1, "tracking-in-contract", 2, "font-family", "'NTR', sans-serif", "font-size", "50px", "color", "black"], [2, "display", "flex"], [2, "font-family", "'NTR', sans-serif", "font-size", "25px", "color", "grey", "flex-grow", "1"], [2, "float", "right", "width", "100%"], ["src", "assets/me.jpg", "alt", "me", 2, "width", "300px"]], template: function SectionTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("appear", function SectionTwoComponent_Template_div_appear_0_listener($event) { return ctx.onAppear($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SectionTwoComponent_div_1_Template, 9, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasAppeared);
    } }, directives: [_header_directive__WEBPACK_IMPORTED_MODULE_2__["AppearDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".text-focus-in[_ngcontent-%COMP%] {\n  animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;\n}\n\n\n\n\n\n@keyframes text-focus-in {\n  0% {\n    filter: blur(12px);\n    opacity: 0;\n  }\n  100% {\n    filter: blur(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlY3Rpb24tdHdvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVMsc0VBQUE7QUFDVDs7QUFFQTs7Ozs7bURBQUE7O0FBT0E7Ozs7RUFBQTs7QUFpQkU7RUFDRTtJQUVVLGtCQUFBO0lBQ1IsVUFBQTtFQUFKO0VBRUU7SUFFVSxpQkFBQTtJQUNSLFVBQUE7RUFBSjtBQUNGIiwiZmlsZSI6InNlY3Rpb24tdHdvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtZm9jdXMtaW4ge1xuXHQtd2Via2l0LWFuaW1hdGlvbjogdGV4dC1mb2N1cy1pbiAxcyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDg1LCAwLjY4MCwgMC41MzApIGJvdGg7XG5cdCAgICAgICAgYW5pbWF0aW9uOiB0ZXh0LWZvY3VzLWluIDFzIGN1YmljLWJlemllcigwLjU1MCwgMC4wODUsIDAuNjgwLCAwLjUzMCkgYm90aDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMjEtOC0yIDE5OjUxOjIxXG4gKiBMaWNlbnNlZCB1bmRlciBGcmVlQlNEIExpY2Vuc2UuXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uIFxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYW5pbWF0aW9uIHRleHQtZm9jdXMtaW5cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuIEAtd2Via2l0LWtleWZyYW1lcyB0ZXh0LWZvY3VzLWluIHtcbiAgICAwJSB7XG4gICAgICAtd2Via2l0LWZpbHRlcjogYmx1cigxMnB4KTtcbiAgICAgICAgICAgICAgZmlsdGVyOiBibHVyKDEycHgpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAtd2Via2l0LWZpbHRlcjogYmx1cigwcHgpO1xuICAgICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgdGV4dC1mb2N1cy1pbiB7XG4gICAgMCUge1xuICAgICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMTJweCk7XG4gICAgICAgICAgICAgIGZpbHRlcjogYmx1cigxMnB4KTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMHB4KTtcbiAgICAgICAgICAgICAgZmlsdGVyOiBibHVyKDBweCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICAiXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('enterAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)', opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('700ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)', opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)', opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('700ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)', opacity: 0 }))
                ])
            ])
        ] } });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zyDg":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header.directive */ "vF8z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function PortfolioComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Projects ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " More about me here. Bla bla bla. More about me here. Bla bla bla. More about me here. Bla bla bla. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@enterAnimation", undefined);
} }
class PortfolioComponent {
    constructor() {
        this.hasAppeared = false;
    }
    onAppear(appeared) {
        this.hasAppeared = appeared;
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 2, vars: 1, consts: [[2, "height", "1000px", 3, "appear"], [4, "ngIf"], [2, "margin-left", "10%", "max-width", "30%"], [1, "tracking-in-contract", 2, "font-family", "'NTR', sans-serif", "font-size", "50px", "color", "black"], [2, "display", "flex"], [2, "font-family", "'NTR', sans-serif", "font-size", "25px", "color", "grey", "flex-grow", "1"], [2, "float", "right", "width", "100%"], ["src", "assets/me.jpg", "alt", "me", 2, "width", "300px"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("appear", function PortfolioComponent_Template_div_appear_0_listener($event) { return ctx.onAppear($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PortfolioComponent_div_1_Template, 9, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasAppeared);
    } }, directives: [_header_directive__WEBPACK_IMPORTED_MODULE_2__["AppearDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3J0Zm9saW8uY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('enterAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)', opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('700ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)', opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)', opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('700ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)', opacity: 0 }))
                ])
            ])
        ] } });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map