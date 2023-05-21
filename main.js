"use strict";
(self["webpackChunkcarl_website"] = self["webpackChunkcarl_website"] || []).push([["main"],{

/***/ 6698:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _header_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header.directive */ 9455);



function AboutComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " about me ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " I currently work at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Danske Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " as a Student Data Scientist in Data Science Risk, SuperAI. Here I work on performing customer segmentation. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Previously, I worked as a Student Quant in the Market Quants (SuperFly) department, student software engineer in the bank's anti-money-laundering platform, and as an IT student at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "GreenMobility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
class AboutComponent {
    constructor() {
        this.hasAppeared = false;
    }
    onAppear(appeared) {
        if (this.hasAppeared) {
            return;
        }
        this.hasAppeared = appeared;
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 2, vars: 1, consts: [[2, "min-height", "50vh", "max-width", "100%", "display", "flex", "flex-direction", "column", "font-size", "calc(10px + 2vmin)", 3, "appear"], [4, "ngIf"], [1, "fade-in", 2, "margin-left", "10%", "max-width", "75%"], [2, "font-family", "'NTR', sans-serif", "font-size", "50px", "color", "#64ffda"], [2, "display", "flex"], [2, "font-size", "25px", "color", "#8892b0", "flex-grow", "1"], ["href", "https://danskebank.dk", 1, "highlight_text"], ["href", "https://www.greenmobility.com", 1, "highlight_text"], [2, "float", "right", "width", "100%"], ["src", "assets/me.jpg", "alt", "me", 2, "width", "300px", "max-width", "100%"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("appear", function AboutComponent_Template_div_appear_0_listener($event) { return ctx.onAppear($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AboutComponent_div_1_Template, 17, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasAppeared);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _header_directive__WEBPACK_IMPORTED_MODULE_0__.AppearDirective], styles: [".text-focus-in[_ngcontent-%COMP%] {\n  animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;\n}\n\n\n\n\n\n@keyframes text-focus-in {\n  0% {\n    filter: blur(12px);\n    opacity: 0;\n  }\n  100% {\n    filter: blur(0px);\n    opacity: 1;\n  }\n}\n\n.highlight_text[_ngcontent-%COMP%] {\n  color: #64ffda;\n}\n\n.fade-in[_ngcontent-%COMP%] {\n  animation: fade-in 2s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\n\n\n\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVMsc0VBQUE7QUFDVDs7QUFFQTs7Ozs7bURBQUE7O0FBT0E7Ozs7RUFBQTs7QUFpQkU7RUFDRTtJQUVVLGtCQUFBO0lBQ1IsVUFBQTtFQUFKO0VBRUU7SUFFVSxpQkFBQTtJQUNSLFVBQUE7RUFBSjtBQUNGOztBQUdBO0VBQ0UsY0FBQTtBQURGOztBQUtBO0VBRVMsOERBQUE7QUFGVDs7QUFJQTs7Ozs7bURBQUE7O0FBT0E7Ozs7RUFBQTs7QUFhQTtFQUNFO0lBQ0UsVUFBQTtFQUZGO0VBSUE7SUFDRSxVQUFBO0VBRkY7QUFDRiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWZvY3VzLWluIHtcblx0LXdlYmtpdC1hbmltYXRpb246IHRleHQtZm9jdXMtaW4gMXMgY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA4NSwgMC42ODAsIDAuNTMwKSBib3RoO1xuXHQgICAgICAgIGFuaW1hdGlvbjogdGV4dC1mb2N1cy1pbiAxcyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDg1LCAwLjY4MCwgMC41MzApIGJvdGg7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDIxLTgtMiAxOTo1MToyMVxuICogTGljZW5zZWQgdW5kZXIgRnJlZUJTRCBMaWNlbnNlLlxuICogU2VlIGh0dHA6Ly9hbmltaXN0YS5uZXQvbGljZW5zZSBmb3IgbW9yZSBpbmZvLiBcbiAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFuaW1hdGlvbiB0ZXh0LWZvY3VzLWluXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbiBALXdlYmtpdC1rZXlmcmFtZXMgdGV4dC1mb2N1cy1pbiB7XG4gICAgMCUge1xuICAgICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMTJweCk7XG4gICAgICAgICAgICAgIGZpbHRlcjogYmx1cigxMnB4KTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMHB4KTtcbiAgICAgICAgICAgICAgZmlsdGVyOiBibHVyKDBweCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIHRleHQtZm9jdXMtaW4ge1xuICAgIDAlIHtcbiAgICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDEycHgpO1xuICAgICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMTJweCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDBweCk7XG4gICAgICAgICAgICAgIGZpbHRlcjogYmx1cigwcHgpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cblxuLmhpZ2hsaWdodF90ZXh0IHtcbiAgY29sb3I6ICM2NGZmZGE7XG59XG4gIFxuXG4uZmFkZS1pbiB7XG5cdC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlLWluIDJzIGN1YmljLWJlemllcigwLjM5MCwgMC41NzUsIDAuNTY1LCAxLjAwMCkgYm90aDtcblx0ICAgICAgICBhbmltYXRpb246IGZhZGUtaW4gMnMgY3ViaWMtYmV6aWVyKDAuMzkwLCAwLjU3NSwgMC41NjUsIDEuMDAwKSBib3RoO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMjItOS01IDIwOjE5OjE4XG4gKiBMaWNlbnNlZCB1bmRlciBGcmVlQlNEIExpY2Vuc2UuXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uIFxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYW5pbWF0aW9uIGZhZGUtaW5cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlLWluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-page-scroll-core */ 4398);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 6698);
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio/portfolio.component */ 5574);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experience/experience.component */ 1427);







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
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_5__.PageScrollService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header")(1, "app-about")(2, "app-experience")(3, "app-portfolio");
    } }, dependencies: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__.PortfolioComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_3__.ExperienceComponent], styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  height: 100vh;\n  max-width: 1000px;\n}\n\n.scroll-outer[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #2196F3;\n}\n\n.card-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding: 25px;\n}\n\n.scroll-container[_ngcontent-%COMP%] {\n  width: 25px;\n  top: 25%;\n  right: 12%;\n  opacity: 0.7;\n  position: fixed;\n  transition: opacity 0.3s;\n  -webkit-transition: opacity 0.3s;\n}\n\n.scroll-container[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.step-section[_ngcontent-%COMP%] {\n  padding: 8px;\n  display: flex;\n  flex-direction: row;\n  background-color: cream;\n  justify-content: flex-start;\n}\n\n.vertical-nav[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.step-section[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 4px solid red;\n  border-radius: 100%;\n  width: 12px;\n  height: 12px;\n  display: inline-block;\n}\n\n.step-section.completed[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  visibility: visible;\n  border-color: rgb(0, 0, 0);\n}\n\n.step-section.active[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  visibility: visible;\n  border-color: rgb(0, 0, 0);\n}\n\n.step-section.empty[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBQUo7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0ksYUFBQTtBQUFKOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNJLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsMEJBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsMEJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXgtd2lkdGg6IDEwMDBweDsgIFxufVxuXG4uc2Nyb2xsLW91dGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMyMTk2RjM7XG59XG5cbi5jYXJkLWNvbnRhaW5lciBoMyB7XG4gICAgcGFkZGluZzogMjVweDtcbn1cblxuLnNjcm9sbC1jb250YWluZXIge1xuICB3aWR0aDogMjVweDtcbiAgdG9wOiAyNSU7XG4gIHJpZ2h0OiAxMiU7XG4gIG9wYWNpdHk6IDAuNztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xufVxuXG4uc2Nyb2xsLWNvbnRhaW5lcjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zdGVwLXNlY3Rpb24ge1xuICBwYWRkaW5nOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJhY2tncm91bmQtY29sb3I6IGNyZWFtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7ICBcbn1cblxuLnZlcnRpY2FsLW5hdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnN0ZXAtc2VjdGlvbiAuY2lyY2xlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc3RlcC1zZWN0aW9uLmNvbXBsZXRlZCAuY2lyY2xlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG59XG5cbi5zdGVwLXNlY3Rpb24uYWN0aXZlIC5jaXJjbGUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBib3JkZXItY29sb3I6IHJnYigwLCAwLCAwKTtcbn1cblxuLnN0ZXAtc2VjdGlvbi5lbXB0eSAuY2lyY2xlIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufSJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-page-scroll-core */ 4398);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experience/experience.component */ 1427);
/* harmony import */ var _header_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.directive */ 9455);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio/portfolio.component */ 5574);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ 6698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);



















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_9__.NgxPageScrollCoreModule.forRoot({ duration: 1600 }),
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _header_directive__WEBPACK_IMPORTED_MODULE_3__.AppearDirective,
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent,
        _about_about_component__WEBPACK_IMPORTED_MODULE_6__.AboutComponent,
        _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__.PortfolioComponent,
        _experience_experience_component__WEBPACK_IMPORTED_MODULE_2__.ExperienceComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_9__.NgxPageScrollCoreModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListModule] }); })();


/***/ }),

/***/ 1427:
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienceComponent": () => (/* binding */ ExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ 6517);





function ExperienceComponent_mat_expansion_panel_4_mat_list_item_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item")(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "arrow_forward_ios");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", task_r4, " ");
} }
function ExperienceComponent_mat_expansion_panel_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function ExperienceComponent_mat_expansion_panel_4_Template_mat_expansion_panel_opened_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r2 = restoredCtx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.setStep(i_r2 + 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header")(2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExperienceComponent_mat_expansion_panel_4_mat_list_item_9_Template, 4, 1, "mat-list-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx_r0.step === i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.company, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.role, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.tasks);
} }
class ExperienceComponent {
    constructor() {
        this.step = 0;
        this.experiences = [
            {
                company: "Danske Bank",
                role: "Student Data Scientist",
                icon: "settings_suggest",
                tasks: [
                    "Performing customer segmentation using machine learning techniques"
                ]
            },
            {
                company: "Danske Bank",
                role: "Student Quant",
                icon: "account_balance",
                tasks: [
                    "Implemented crash detection of the nightly batch-jobs calculating valuations and risk for desks, clients and the Danish FSA, resulting in less delays in deliveries",
                    "Simplified risk and value calculations delivered to Market Risk, resulting in faster calculations and a simplified code-base",
                    "Participated in the nightly calculation batch on-call rotation"
                ]
            },
            {
                company: "Danske Bank",
                role: "Student Software Engineer",
                icon: "terminal",
                tasks: [
                    "Completed an MVP frontend solution in Angular, to be used by case-handlers to process anti-money laundering cases for the whole bank",
                    "Developed customer anti-money laundering questionnaires in C#, deployed a customer frontend in Angular and setup CI/CD for both solutions",
                    "Participated in the nightly calculation batch on-call rotation"
                ]
            },
            {
                company: "GreenMobility",
                role: "IT Student",
                icon: "electric_car",
                tasks: [
                    "Was the only developer in the company, leading to me being responsible for software development and architecture",
                    "Developed various tools utilised by customer support to reduce the amount of manual labour, and infrastructure to enable customer subscriptions",
                    "Developed data-visualization dashboards for various departments"
                ]
            }
        ];
    }
    setStep(index) {
        this.step = index;
    }
    nextStep() {
        this.step++;
    }
    prevStep() {
        this.step--;
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(); };
ExperienceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 5, vars: 1, consts: [[1, "text-focus-in", 2, "min-height", "20vw"], [1, "example-headers-align"], ["hideToggle", "", "class", "panel-class", 3, "expanded", "opened", 4, "ngFor", "ngForOf"], ["hideToggle", "", 1, "panel-class", 3, "expanded", "opened"], [4, "ngFor", "ngForOf"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-accordion", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExperienceComponent_mat_expansion_panel_4_Template, 10, 5, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiences);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanelDescription, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListItem], styles: [".example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n@keyframes text-focus-in {\n  0% {\n    filter: blur(12px);\n    opacity: 0;\n  }\n  100% {\n    filter: blur(0px);\n    opacity: 1;\n  }\n}\n\n.text-focus-in[_ngcontent-%COMP%] {\n  animation: text-focus-in 2.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;\n  min-height: 30vh;\n  display: flex;\n  flex-direction: column;\n  margin-top: 5%;\n}\n\n.text-focus-in[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  font-size: 50px;\n  color: #64ffda;\n  margin-left: 10%;\n  max-width: 75%;\n}\n\n.panel-class[_ngcontent-%COMP%] {\n  margin-left: 10%;\n  margin-right: 10%;\n  color: #8892b0;\n  border-radius: 4px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 1.75rem;\n  letter-spacing: 0.00938em;\n  color: #64ffda;\n  font-family: \"NTR\", sans-serif;\n}\n\n.mat-expansion-panel-header-description[_ngcontent-%COMP%], .mat-expansion-indicator[_ngcontent-%COMP%]::after {\n  color: #8892b0;\n  font-family: \"NTR\", sans-serif;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  background-color: #112240;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  color: #64ffda;\n}\n\n.mat-list[_ngcontent-%COMP%] {\n  font-family: \"NTR\", sans-serif;\n}\n\n.mat-list-item[_ngcontent-%COMP%] {\n  color: #8892b0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQWdCQTtFQUNFO0lBRUUsa0JBQUE7SUFDQSxVQUFBO0VBREY7RUFJQTtJQUVFLGlCQUFBO0lBQ0EsVUFBQTtFQUZGO0FBQ0Y7O0FBS0E7RUFFRSx3RUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwrR0FBQTtBQUhGOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0VBQ0EsOEJBQUE7QUFIRjs7QUFNQTtFQUNFLHlCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSw4QkFBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtBQUhGIiwiZmlsZSI6ImV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWZvcm0tZmllbGQrLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHRleHQtZm9jdXMtaW4ge1xuICAwJSB7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMTJweCk7XG4gICAgZmlsdGVyOiBibHVyKDEycHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxMDAlIHtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigwcHgpO1xuICAgIGZpbHRlcjogYmx1cigwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyB0ZXh0LWZvY3VzLWluIHtcbiAgMCUge1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDEycHgpO1xuICAgIGZpbHRlcjogYmx1cigxMnB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMHB4KTtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi50ZXh0LWZvY3VzLWluIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHRleHQtZm9jdXMtaW4gMi41cyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDg1LCAwLjY4MCwgMC41MzApIGJvdGg7XG4gIGFuaW1hdGlvbjogdGV4dC1mb2N1cy1pbiAyLjVzIGN1YmljLWJlemllcigwLjU1MCwgMC4wODUsIDAuNjgwLCAwLjUzMCkgYm90aDtcbiAgbWluLWhlaWdodDogMzB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi50ZXh0LWZvY3VzLWluID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjb2xvcjogIzY0ZmZkYTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWF4LXdpZHRoOiA3NSU7XG59XG5cbi5wYW5lbC1jbGFzcyB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xuICBjb2xvcjogIzg4OTJiMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMS43NXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDA5MzhlbTtcbiAgY29sb3I6ICM2NGZmZGE7XG4gIGZvbnQtZmFtaWx5OiAnTlRSJywgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uLCAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyIHtcbiAgY29sb3I6ICM4ODkyYjA7XG4gIGZvbnQtZmFtaWx5OiAnTlRSJywgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEyMjQwO1xufVxuXG4ubWF0LWljb257XG4gIGNvbG9yOiAjNjRmZmRhO1xufVxuXG4ubWF0LWxpc3Qge1xuICBmb250LWZhbWlseTogJ05UUicsIHNhbnMtc2VyaWY7XG59XG5cbi5tYXQtbGlzdC1pdGVte1xuICBjb2xvcjogIzg4OTJiMDtcbn0iXX0= */"] });


/***/ }),

/***/ 9455:
/*!*************************************!*\
  !*** ./src/app/header.directive.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppearDirective": () => (/* binding */ AppearDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6312);



class AppearDirective {
  constructor(element) {
    this.element = element;
    this.elementPos = 0;
    this.elementHeight = 0;
    this.scrollPos = 0;
    this.windowHeight = 0;
    this.hasAppeared = false;
    this.appear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  saveDimensions() {
    this.elementPos = this.getOffsetTop(this.element.nativeElement);
    this.elementHeight = this.element.nativeElement.offsetHeight;
    this.windowHeight = window.innerHeight;
  }
  saveScrollPos() {
    this.scrollPos = window.scrollY;
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
      }
    } else if (this.hasAppeared && !this.isVisible()) {
      this.appear.emit(false);
      this.hasAppeared = false;
    }
  }
  isVisible() {
    return this.scrollPos + 500 >= this.elementPos || this.scrollPos + this.windowHeight >= this.elementPos + this.elementHeight;
  }
  subscribe() {
    this.subscriptionScroll = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(window, 'scroll') // .startWith(null)
    .subscribe(() => {
      this.saveScrollPos();
      this.checkVisibility();
    });
    this.subscriptionResize = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(window, 'resize') // .startWith(null)
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
AppearDirective.ɵfac = function AppearDirective_Factory(t) {
  return new (t || AppearDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
AppearDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: AppearDirective,
  selectors: [["", "appear", ""]],
  outputs: {
    appear: "appear"
  }
});

/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HeaderComponent {
    constructor() {
        this.hasAppeared = false;
    }
    onAppear() {
        if (this.hasAppeared) {
            return;
        }
        this.hasAppeared = true;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 26, vars: 0, consts: [[2, "min-height", "50vh", "display", "flex", "flex-direction", "column", "font-size", "calc(10px + 2vmin)", "margin-top", "5%"], [2, "margin-left", "10%", "max-width", "75%"], [1, "text-flicker-in-glow", 2, "font-size", "50px", "color", "#64ffda"], [1, "text-focus-in", 2, "font-size", "25px", "color", "#8892b0"], ["href", "https://www.dtu.dk"], ["href", "https://www.ku.dk/english/"], ["href", "https://www.nus.edu.sg"], [1, "highlight_text"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " i'm carl! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " I'm a second-year MSc. Mathematical Modelling student at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "DTU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " in Copenhagen. I hold a BSc. degree in computer science from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " University of Copenhagen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " where I specialized in data science, and I just returned from an exchange stay at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "National University of Singapore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " My primary interests are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "data science");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "finance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "programming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: ["@keyframes text-flicker-in-glow {\n  0% {\n    opacity: 0;\n  }\n  10% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  10.1% {\n    opacity: 1;\n    text-shadow: none;\n  }\n  10.2% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  20% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  20.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);\n  }\n  20.6% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  30% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  30.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);\n  }\n  30.5% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);\n  }\n  30.6% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  45% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  45.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);\n  }\n  50% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);\n  }\n  55% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);\n  }\n  55.1% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  57% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  57.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);\n  }\n  60% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);\n  }\n  60.1% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  65% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  65.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n  75% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n  75.1% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  77% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  77.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n  85% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n  85.1% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  86% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  86.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.text-flicker-in-glow[_ngcontent-%COMP%] {\n  animation: text-flicker-in-glow 2s linear both;\n}\n\n\n@keyframes text-focus-in {\n  0% {\n    filter: blur(12px);\n    opacity: 0;\n  }\n  100% {\n    filter: blur(0px);\n    opacity: 1;\n  }\n}\n.text-focus-in[_ngcontent-%COMP%] {\n  animation: text-focus-in 2.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;\n}\n.highlight_text[_ngcontent-%COMP%] {\n  color: #64ffda;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7bURBQUE7QUFPQTs7OztFQUFBO0FBa0lBO0VBQ0U7SUFDRSxVQUFBO0VBQUY7RUFFQTtJQUNFLFVBQUE7SUFDQSxpQkFBQTtFQUFGO0VBRUE7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUFBRjtFQUVBO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0VBQUY7RUFFQTtJQUNFLFVBQUE7SUFDQSxpQkFBQTtFQUFGO0VBRUE7SUFDRSxVQUFBO0lBQ0EsK0NBQUE7RUFBRjtFQUVBO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0VBQUY7RUFFQTtJQUNFLFVBQUE7SUFDQSxpQkFBQTtFQUFGO0VBRUE7SUFDRSxVQUFBO0lBQ0EsbUZBQUE7RUFBRjtFQUVBO0lBQ0UsVUFBQTtJQUNBLG1GQUFBO0VBQUY7RUFFQTtJQUNFLFVBQUE7SUFDQSxpQkFBQTtFQUFGO0VBRUE7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUFBRjtFQUVBO0lBQ0UsVUFBQTtJQUNBLG1GQUFBO0VBQUY7RUFFQTtJQUNFLFVBQUE7SUFDQSxtRkFBQTtFQUFGO0VBRUE7SUFDRSxVQUFBO0lBQ0EsbUZBQUE7RUFBRjtFQUVBO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0VBQUY7RUFFQTtJQUNFLFVBQUE7SUFDQSxpQkFBQTtFQUFGO0VBRUE7SUFDRSxVQUFBO0lBQ0EsbUZBQUE7RUFBRjtFQUVBO0lBQ0UsVUFBQTtJQUNBLG1GQUFBO0VBQUY7RUFFQTtJQUNFLFVBQUE7SUFDQSxpQkFBQTtFQUFGO0VBRUE7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUFBRjtFQUVBO0lBQ0UsVUFBQTtJQUNBLHVIQUFBO0VBQUY7RUFFQTtJQUNFLFVBQUE7SUFDQSx1SEFBQTtFQUFGO0VBRUE7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUFBRjtFQUVBO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0VBQUY7RUFFQTtJQUNFLFVBQUE7SUFDQSwwSkFBQTtFQUFGO0VBRUE7SUFDRSxVQUFBO0lBQ0EsMEpBQUE7RUFBRjtFQUVBO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0VBQUY7RUFFQTtJQUNFLFVBQUE7SUFDQSxpQkFBQTtFQUFGO0VBRUE7SUFDRSxVQUFBO0lBQ0EsMkpBQUE7RUFBRjtFQUVBO0lBQ0UsVUFBQTtFQUFGO0FBQ0Y7QUFJQTtFQUVTLDhDQUFBO0FBRlQ7QUFLQTs7Ozs7bURBQUE7QUFPQTs7OztFQUFBO0FBaUJBO0VBQ0U7SUFFVSxrQkFBQTtJQUNSLFVBQUE7RUFIRjtFQUtBO0lBRVUsaUJBQUE7SUFDUixVQUFBO0VBSEY7QUFDRjtBQU1BO0VBRVMsd0VBQUE7QUFKVDtBQU9BO0VBQ0UsY0FBQTtBQUpGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDIyLTktNSAxMToxMTo0OFxuICogTGljZW5zZWQgdW5kZXIgRnJlZUJTRCBMaWNlbnNlLlxuICogU2VlIGh0dHA6Ly9hbmltaXN0YS5uZXQvbGljZW5zZSBmb3IgbW9yZSBpbmZvLiBcbiAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFuaW1hdGlvbiB0ZXh0LWZsaWNrZXItaW4tZ2xvd1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4gQC13ZWJraXQta2V5ZnJhbWVzIHRleHQtZmxpY2tlci1pbi1nbG93IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIDEwLjElIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIDEwLjIlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIDIwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgfVxuICAyMC4xJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgfVxuICAyMC42JSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgfVxuICAzMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgMzAuMSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIH1cbiAgMzAuNSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIH1cbiAgMzAuNiUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgNDUlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIDQ1LjElIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgfVxuICA1NSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIH1cbiAgNTUuMSUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgNTclIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIDU3LjElIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xuICB9XG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcbiAgfVxuICA2MC4xJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgfVxuICA2NSUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgNjUuMSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIH1cbiAgNzUlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICB9XG4gIDc1LjElIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIDc3JSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgfVxuICA3Ny4xJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLCAwIDAgMTEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICB9XG4gIDg1JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLCAwIDAgMTEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICB9XG4gIDg1LjElIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIDg2JSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgfVxuICA4Ni4xJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgMTEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCAxMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHRleHQtZmxpY2tlci1pbi1nbG93IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIDEwLjElIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIDEwLjIlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIDIwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgfVxuICAyMC4xJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgfVxuICAyMC42JSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgfVxuICAzMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgMzAuMSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIH1cbiAgMzAuNSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIH1cbiAgMzAuNiUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgNDUlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIDQ1LjElIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgfVxuICA1NSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIH1cbiAgNTUuMSUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgNTclIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIDU3LjElIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xuICB9XG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcbiAgfVxuICA2MC4xJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgfVxuICA2NSUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgNjUuMSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIH1cbiAgNzUlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICB9XG4gIDc1LjElIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIDc3JSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgfVxuICA3Ny4xJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLCAwIDAgMTEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICB9XG4gIDg1JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLCAwIDAgMTEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICB9XG4gIDg1LjElIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIDg2JSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgfVxuICA4Ni4xJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgMTEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cblxuLnRleHQtZmxpY2tlci1pbi1nbG93IHtcblx0LXdlYmtpdC1hbmltYXRpb246IHRleHQtZmxpY2tlci1pbi1nbG93IDJzIGxpbmVhciBib3RoO1xuXHQgICAgICAgIGFuaW1hdGlvbjogdGV4dC1mbGlja2VyLWluLWdsb3cgMnMgbGluZWFyIGJvdGg7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDIyLTktNSAxMToyMDo1MFxuICogTGljZW5zZWQgdW5kZXIgRnJlZUJTRCBMaWNlbnNlLlxuICogU2VlIGh0dHA6Ly9hbmltaXN0YS5uZXQvbGljZW5zZSBmb3IgbW9yZSBpbmZvLiBcbiAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFuaW1hdGlvbiB0ZXh0LWZvY3VzLWluXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbiBALXdlYmtpdC1rZXlmcmFtZXMgdGV4dC1mb2N1cy1pbiB7XG4gIDAlIHtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigxMnB4KTtcbiAgICAgICAgICAgIGZpbHRlcjogYmx1cigxMnB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDBweCk7XG4gICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHRleHQtZm9jdXMtaW4ge1xuICAwJSB7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMTJweCk7XG4gICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMTJweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigwcHgpO1xuICAgICAgICAgICAgZmlsdGVyOiBibHVyKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4udGV4dC1mb2N1cy1pbiB7XG5cdC13ZWJraXQtYW5pbWF0aW9uOiB0ZXh0LWZvY3VzLWluIDIuNXMgY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA4NSwgMC42ODAsIDAuNTMwKSBib3RoO1xuXHQgICAgICAgIGFuaW1hdGlvbjogdGV4dC1mb2N1cy1pbiAyLjVzIGN1YmljLWJlemllcigwLjU1MCwgMC4wODUsIDAuNjgwLCAwLjUzMCkgYm90aDtcbn1cblxuLmhpZ2hsaWdodF90ZXh0IHtcbiAgY29sb3I6ICM2NGZmZGE7XG59Il19 */"] });


/***/ }),

/***/ 5574:
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioComponent": () => (/* binding */ PortfolioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _header_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header.directive */ 9455);




function PortfolioComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " software projects ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "mat-card", 5)(6, "mat-card-header")(7, "div", 6)(8, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "StudyBot");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Teams bot powered by NLP");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-card-content")(15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " A Microsoft Teams study bot, which can help out with studying, baking and other stuff.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " React, NLP, Javascript, Azure");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-card", 5)(20, "mat-card-header")(21, "div", 6)(22, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "carl-website");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Personal website ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-card-content")(29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " A simple Angular website to show who I am!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Angular, Typescript, HTML, CSS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-card", 5)(34, "mat-card-header")(35, "div", 6)(36, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "LaundryAnalytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Laundry booking forecasting ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-card-content")(43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " A Python application employing a machine learning model to alert me via email when there's a high likelihood of laundry needing to be done in the upcoming week. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Python ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-card", 12)(48, "mat-card-header")(49, "div", 6)(50, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Titanic");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Titanic Kaggle Challenge ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-card-content")(57, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "This project demonstrates an end-to-end data science workflow with the Kaggle Titanic dataset. It involves data cleaning, feature engineering and model training, providing a real-world modeling scenario. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " Python ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
} }
class PortfolioComponent {
    constructor() {
        this.hasAppeared = false;
    }
    onAppear(appeared) {
        if (this.hasAppeared) {
            return;
        }
        this.hasAppeared = appeared;
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(); };
PortfolioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 2, vars: 1, consts: [[2, "min-height", "100vh", "display", "flex", "flex-direction", "column", "font-size", "calc(10px + 2vmin)", 3, "appear"], [4, "ngIf"], [1, "fade-in", 2, "margin-left", "10%", "max-width", "80%"], [2, "font-family", "'NTR', sans-serif", "font-size", "50px", "color", "#64ffda"], [2, "display", "flex", "flex-wrap", "wrap"], [1, "card"], ["mat-card-avatar", "", 2, "max-width", "300px"], ["href", "https://github.com/Fiskehandleren/StudyBot"], ["src", "assets/GitHub-Mark-64px.png", "alt", "github icon", "width", "32px"], [1, "tech_tags"], ["href", "https://github.com/Fiskehandleren/carl-website"], ["href", "https://github.com/Fiskehandleren/LaundryAnalytics"], [1, "card-last"], ["href", "assets/titanic.html", "target", "_blank"], ["src", "assets/Python.png", "alt", "github icon", "width", "32px"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("appear", function PortfolioComponent_Template_div_appear_0_listener($event) { return ctx.onAppear($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PortfolioComponent_div_1_Template, 61, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasAppeared);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardAvatar, _header_directive__WEBPACK_IMPORTED_MODULE_0__.AppearDirective], styles: ["@font-face {\n  font-family: lucy;\n  src: url('Lucy.otf') format(\"opentype\");\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #112240;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"NTR\", \"Helvetica Neue\", sans-serif;\n}\na[_ngcontent-%COMP%] {\n  color: #64ffda;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:visited {\n  color: #64ffda;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #64ffda;\n}\n\na[_ngcontent-%COMP%]:active {\n  color: #64ffda;\n}\n\n@media (max-width: 600px) {\n  .flex-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    padding-left: 15vh;\n  }\n  .nameblock[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n    padding-left: 0;\n  }\n}\n.tech_tags[_ngcontent-%COMP%] {\n  color: textcolor;\n  opacity: 50%;\n}\n.fade-in[_ngcontent-%COMP%] {\n  animation: fade-in 2s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.mat-card[_ngcontent-%COMP%] {\n  font-family: \"NTR\", sans-serif;\n  background-color: #112240;\n  box-shadow: 0 0 0 2px #1a1a1a;\n  color: #8892b0;\n  border-color: #1a1a1a;\n}\n.mat-card[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%] {\n  color: #8892b0;\n}\n.mat-card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\n  color: #64ffda;\n}\n.card[_ngcontent-%COMP%] {\n  width: 42.5%;\n  margin-right: 2.5%;\n  margin-bottom: 20px;\n}\n.card[_ngcontent-%COMP%]:hover {\n  animation: shadow-drop-2-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n.card-last[_ngcontent-%COMP%] {\n  width: 42.5%;\n  margin-bottom: 20px;\n}\n.card-last[_ngcontent-%COMP%]:hover {\n  animation: shadow-drop-2-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n.shadow-drop-2-center[_ngcontent-%COMP%] {\n  animation: shadow-drop-2-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n\n@keyframes shadow-drop-2-center {\n  0% {\n    transform: translateZ(0);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n  100% {\n    transform: translateZ(50px);\n    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3N0eWxlcy5zY3NzIiwicG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQ0E7RUFDSSxpQkFBQTtFQUNBLHVDQUFBO0FDQ0o7QURNQTtFQUFhLFlBQUE7RUFBYyx5QkFMZjtBQ0daO0FER0E7RUFBTyxTQUFBO0VBQVcsZ0RBQUE7QUNFbEI7QURBQTtFQUFHLGNBTFM7RUFLUyxxQkFBQTtBQ0tyQjtBRExzRCxvQkFBQTtBQUN0RDtFQUFXLGNBTkM7QUNhWjtBRFA4QixvQkFBQTtBQUM5QjtFQUFTLGNBUEc7QUNnQlo7QURUOEIsb0JBQUE7QUFDOUI7RUFBVSxjQVJFO0FDbUJaO0FEWDhCLG9CQUFBO0FBRTlCO0VBQ0k7SUFDQyxzQkFBQTtFQ1dIO0VEVEY7SUFDSyxrQkFBQTtFQ1dIO0VEVEY7SUFDSyxVQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUNXSDtBQUNGO0FBdENBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBd0NKO0FBckNBO0VBRVMsOERBQUE7QUF3Q1Q7QUF0Q0E7Ozs7O21EQUFBO0FBT0E7Ozs7RUFBQTtBQWFBO0VBQ0U7SUFDRSxVQUFBO0VBd0NGO0VBdENBO0lBQ0UsVUFBQTtFQXdDRjtBQUNGO0FBckNBO0VBQ0UsOEJBQUE7RUFDQSx5QkRyQ1U7RUN1Q1YsNkJBQUE7RUFDQSxjRHRDVTtFQzZDVixxQkFBQTtBQWdDRjtBQXRDRTtFQUNFLGNEeENRO0FDZ0ZaO0FBdENFO0VBQ0UsY0QxQ1E7QUNrRlo7QUFuQ0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQXNDRjtBQXBDRTtFQUVVLDhFQUFBO0FBc0NaO0FBbENBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBcUNGO0FBcENFO0VBRVUsOEVBQUE7QUFzQ1o7QUFqQ0E7RUFFUyw4RUFBQTtBQW9DVDtBQWpDQTs7Ozs7bURBQUE7QUFPQTs7OztFQUFBO0FBbUJBO0VBQ0U7SUFFVSx3QkFBQTtJQUVBLG9DQUFBO0VBbUNWO0VBakNBO0lBRVUsMkJBQUE7SUFFQSw0Q0FBQTtFQW1DVjtBQUNGIiwiZmlsZSI6InBvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBsdWN5O1xuICAgIHNyYzogdXJsKGFzc2V0cy9MdWN5Lm90ZikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG4kYm9keWNvbG9yOiAjMTEyMjQwO1xuJHRpdGxlY29sb3I6ICMyYTlkOGY7XG4kdGV4dGNvbG9yOiAjODg5MmIwO1xuJGxpbmtjb2xvcjogIzY0ZmZkYTtcblxuaHRtbCwgYm9keSB7IGhlaWdodDogMTAwJTsgYmFja2dyb3VuZC1jb2xvcjogJGJvZHljb2xvcjt9XG5ib2R5IHsgbWFyZ2luOiAwOyBmb250LWZhbWlseTogJ05UUicsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuXG5hIHtjb2xvcjokbGlua2NvbG9yOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH0gICAgICAgICAvKiBVbnZpc2l0ZWQgbGluayAgKi9cbmE6dmlzaXRlZCB7Y29sb3I6JGxpbmtjb2xvcjt9IC8qIFZpc2l0ZWQgbGluayAgICAqL1xuYTpob3ZlciB7Y29sb3I6JGxpbmtjb2xvcjt9ICAgLyogTW91c2Ugb3ZlciBsaW5rICovXG5hOmFjdGl2ZSB7Y29sb3I6JGxpbmtjb2xvcjt9ICAvKiBTZWxlY3RlZCBsaW5rICAgKi9cblxuQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpeyBcbiAgICAuZmxleC1jb250YWluZXIge1xuICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4uaW1nIGltZ3sgXG4gICAgIHBhZGRpbmctbGVmdDogMTV2aDtcbiAgfSBcbi5uYW1lYmxvY2t7XG4gICAgIHdpZHRoOjkwJTtcbiAgICAgbWFyZ2luOiBhdXRvO1xuICAgICBwYWRkaW5nLWxlZnQ6MDtcbiAgfVxufSIsIkB1c2UgJy4uLy4uL3N0eWxlcy5zY3NzJztcblxuLnRlY2hfdGFnc3tcbiAgICBjb2xvcjogdGV4dGNvbG9yO1xuICAgIG9wYWNpdHk6IDUwJTtcbn1cblxuLmZhZGUtaW4ge1xuXHQtd2Via2l0LWFuaW1hdGlvbjogZmFkZS1pbiAycyBjdWJpYy1iZXppZXIoMC4zOTAsIDAuNTc1LCAwLjU2NSwgMS4wMDApIGJvdGg7XG5cdCAgICAgICAgYW5pbWF0aW9uOiBmYWRlLWluIDJzIGN1YmljLWJlemllcigwLjM5MCwgMC41NzUsIDAuNTY1LCAxLjAwMCkgYm90aDtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDIyLTktNSAyMDoxOToxOFxuICogTGljZW5zZWQgdW5kZXIgRnJlZUJTRCBMaWNlbnNlLlxuICogU2VlIGh0dHA6Ly9hbmltaXN0YS5uZXQvbGljZW5zZSBmb3IgbW9yZSBpbmZvLiBcbiAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFuaW1hdGlvbiBmYWRlLWluXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbiBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZS1pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLm1hdC1jYXJkIHtcbiAgZm9udC1mYW1pbHk6ICdOVFInLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBzdHlsZXMuJGJvZHljb2xvcjtcbiAgLy8gQ3JlYXRlIHNoYWRvdyBvbiBib3JkZXJcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICMxYTFhMWE7XG4gIGNvbG9yOiBzdHlsZXMuJHRleHRjb2xvcjtcbiAgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgICBjb2xvcjogc3R5bGVzLiR0ZXh0Y29sb3I7XG4gIH1cbiAgLm1hdC1jYXJkLXRpdGxlIHtcbiAgICBjb2xvcjogc3R5bGVzLiRsaW5rY29sb3I7XG4gIH1cbiAgYm9yZGVyLWNvbG9yOiAjMWExYTFhO1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiA0Mi41JTtcbiAgbWFyZ2luLXJpZ2h0OiAyLjUlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAvLyB3aGVuIGhvdmVyaW5nIG92ZXIgY2FyZCwgYWRkIHNoYWRvd1xuICAmOmhvdmVyIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2hhZG93LWRyb3AtMi1jZW50ZXIgMC40cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XG4gICAgICAgICAgICBhbmltYXRpb246IHNoYWRvdy1kcm9wLTItY2VudGVyIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xuICB9XG59XG5cbi5jYXJkLWxhc3Qge1xuICB3aWR0aDogNDIuNSU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICY6aG92ZXIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzaGFkb3ctZHJvcC0yLWNlbnRlciAwLjRzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2hhZG93LWRyb3AtMi1jZW50ZXIgMC40cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XG4gIH1cbn1cblxuLy8gYXR0ZW1wdFxuLnNoYWRvdy1kcm9wLTItY2VudGVyIHtcblx0LXdlYmtpdC1hbmltYXRpb246IHNoYWRvdy1kcm9wLTItY2VudGVyIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xuXHQgICAgICAgIGFuaW1hdGlvbjogc2hhZG93LWRyb3AtMi1jZW50ZXIgMC40cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDIzLTUtMTkgMjE6Mzo0NVxuICogTGljZW5zZWQgdW5kZXIgRnJlZUJTRCBMaWNlbnNlLlxuICogU2VlIGh0dHA6Ly9hbmltaXN0YS5uZXQvbGljZW5zZSBmb3IgbW9yZSBpbmZvLiBcbiAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFuaW1hdGlvbiBzaGFkb3ctZHJvcC0yLWNlbnRlclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4gQC13ZWJraXQta2V5ZnJhbWVzIHNoYWRvdy1kcm9wLTItY2VudGVyIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDUwcHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDUwcHgpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgfVxufVxuQGtleWZyYW1lcyBzaGFkb3ctZHJvcC0yLWNlbnRlciB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWig1MHB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWig1MHB4KTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map