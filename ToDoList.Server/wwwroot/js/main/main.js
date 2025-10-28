"use strict";
(self["webpackChunkToDoList"] = self["webpackChunkToDoList"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _screens_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/home/home.component */ 6518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;


class AppComponent {
  constructor() {
    this.title = 'ToDo List';
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 3,
    vars: 0,
    consts: [["role", "main", 1, "content"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-home")(2, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_screens_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */", "[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%], \nh5[_ngcontent-%COMP%], \nh6[_ngcontent-%COMP%] {\nmargin: 8px 0;\n}\n\np[_ngcontent-%COMP%] {\nmargin: 0;\n}\n\n.spacer[_ngcontent-%COMP%] {\nflex: 1;\n}\n\n.toolbar[_ngcontent-%COMP%] {\nposition: absolute;\ntop: 0;\nleft: 0;\nright: 0;\nheight: 60px;\ndisplay: flex;\nalign-items: center;\nbackground-color: #1976d2;\ncolor: white;\nfont-weight: 600;\n}\n\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\nmargin: 0 16px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\nheight: 40px;\nmargin: 0 8px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%] {\nheight: 40px;\nmargin: 0 16px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover, \n.toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%]:hover {\nopacity: 0.8;\n}\n\n.content[_ngcontent-%COMP%] {\ndisplay: flex;\nmargin: 82px auto 32px;\npadding: 0 16px;\nmax-width: 960px;\nflex-direction: column;\nalign-items: center;\n}\n\nsvg.material-icons[_ngcontent-%COMP%] {\nheight: 24px;\nwidth: auto;\n}\n\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\nmargin-right: 8px;\n}\n\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\nfill: #888;\n}\n\n.card-container[_ngcontent-%COMP%] {\ndisplay: flex;\nflex-wrap: wrap;\njustify-content: center;\nmargin-top: 16px;\n}\n\n.card[_ngcontent-%COMP%] {\nall: unset;\nborder-radius: 4px;\nborder: 1px solid #eee;\nbackground-color: #fafafa;\nheight: 40px;\nwidth: 200px;\nmargin: 0 8px 16px;\npadding: 16px;\ndisplay: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\ntransition: all 0.2s ease-in-out;\nline-height: 24px;\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\nmargin-right: 0;\n}\n\n.card.card-small[_ngcontent-%COMP%] {\nheight: 16px;\nwidth: 168px;\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\ncursor: pointer;\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\ntransform: translateY(-3px);\nbox-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\nfill: rgb(105, 103, 103);\n}\n\n.card.highlight-card[_ngcontent-%COMP%] {\nbackground-color: #1976d2;\ncolor: white;\nfont-weight: 600;\nborder: none;\nwidth: auto;\nmin-width: 30%;\nposition: relative;\n}\n\n.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\nmargin-left: 60px;\n}\n\nsvg#rocket[_ngcontent-%COMP%] {\nwidth: 80px;\nposition: absolute;\nleft: -10px;\ntop: -24px;\n}\n\nsvg#rocket-smoke[_ngcontent-%COMP%] {\nheight: calc(100vh - 95px);\nposition: absolute;\ntop: 10px;\nright: 180px;\nz-index: -10;\n}\n\na[_ngcontent-%COMP%], \na[_ngcontent-%COMP%]:visited, \na[_ngcontent-%COMP%]:hover {\ncolor: #1976d2;\ntext-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\ncolor: #125699;\n}\n\n.terminal[_ngcontent-%COMP%] {\nposition: relative;\nwidth: 80%;\nmax-width: 600px;\nborder-radius: 6px;\npadding-top: 45px;\nmargin-top: 8px;\noverflow: hidden;\nbackground-color: rgb(15, 15, 16);\n}\n\n.terminal[_ngcontent-%COMP%]::before {\ncontent: \"\\2022 \\2022 \\2022\";\nposition: absolute;\ntop: 0;\nleft: 0;\nheight: 4px;\nbackground: rgb(58, 58, 58);\ncolor: #c2c3c4;\nwidth: 100%;\nfont-size: 2rem;\nline-height: 0;\npadding: 14px 0;\ntext-indent: 4px;\n}\n\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\nfont-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\ncolor: white;\npadding: 0 1rem 1rem;\nmargin: 0;\n}\n\n.circle-link[_ngcontent-%COMP%] {\nheight: 40px;\nwidth: 40px;\nborder-radius: 40px;\nmargin: 8px;\nbackground-color: white;\nborder: 1px solid #eeeeee;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ncursor: pointer;\nbox-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\ntransition: 1s ease-out;\n}\n\n.circle-link[_ngcontent-%COMP%]:hover {\ntransform: translateY(-0.25rem);\nbox-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\n\nfooter[_ngcontent-%COMP%] {\nmargin-top: 8px;\ndisplay: flex;\nalign-items: center;\nline-height: 20px;\n}\n\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\ndisplay: flex;\nalign-items: center;\n}\n\n.github-star-badge[_ngcontent-%COMP%] {\ncolor: #24292e;\ndisplay: flex;\nalign-items: center;\nfont-size: 12px;\npadding: 3px 10px;\nborder: 1px solid rgba(27,31,35,.2);\nborder-radius: 3px;\nbackground-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\nmargin-left: 4px;\nfont-weight: 600;\n}\n\n.github-star-badge[_ngcontent-%COMP%]:hover {\nbackground-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\nborder-color: rgba(27,31,35,.35);\nbackground-position: -.5em;\n}\n\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\nheight: 16px;\nwidth: 16px;\nmargin-right: 4px;\n}\n\nsvg#clouds[_ngcontent-%COMP%] {\nposition: fixed;\nbottom: -160px;\nleft: -230px;\nz-index: -10;\nwidth: 1920px;\n}\n\n\n\n@media screen and (max-width: 767px) {\n.card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), \n.terminal[_ngcontent-%COMP%] {\nwidth: 100%;\n}\n\n.card[_ngcontent-%COMP%]:not(.highlight-card) {\nheight: 16px;\nmargin: 8px 0;\n}\n\n.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\nmargin-left: 72px;\n}\n\nsvg#rocket-smoke[_ngcontent-%COMP%] {\nright: 120px;\ntransform: rotate(-5deg);\n}\n}\n\n@media screen and (max-width: 575px) {\nsvg#rocket-smoke[_ngcontent-%COMP%] {\ndisplay: none;\nvisibility: hidden;\n}\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtFQUNBLDBKQUEwSjtFQUMxSixlQUFlO0VBQ2YsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixtQ0FBbUM7RUFDbkMsa0NBQWtDO0FBQ3BDOztBQUVBOzs7Ozs7QUFNQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsTUFBTTtBQUNOLE9BQU87QUFDUCxRQUFRO0FBQ1IsWUFBWTtBQUNaLGFBQWE7QUFDYixtQkFBbUI7QUFDbkIseUJBQXlCO0FBQ3pCLFlBQVk7QUFDWixnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQSxZQUFZO0FBQ1osYUFBYTtBQUNiOztBQUVBO0FBQ0EsWUFBWTtBQUNaLGNBQWM7QUFDZDs7QUFFQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEIsc0JBQXNCO0FBQ3RCLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBLFlBQVk7QUFDWixXQUFXO0FBQ1g7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsZUFBZTtBQUNmLHVCQUF1QjtBQUN2QixnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQSxVQUFVO0FBQ1Ysa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0Qix5QkFBeUI7QUFDekIsWUFBWTtBQUNaLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLGFBQWE7QUFDYixtQkFBbUI7QUFDbkIsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQixnQ0FBZ0M7QUFDaEMsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0EsWUFBWTtBQUNaLFlBQVk7QUFDWjs7QUFFQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQiwwQ0FBMEM7QUFDMUM7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekIsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osV0FBVztBQUNYLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxVQUFVO0FBQ1Y7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUIsa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVCxZQUFZO0FBQ1osWUFBWTtBQUNaOztBQUVBOzs7QUFHQSxjQUFjO0FBQ2QscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLFVBQVU7QUFDVixnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCLGlDQUFpQztBQUNqQzs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QixrQkFBa0I7QUFDbEIsTUFBTTtBQUNOLE9BQU87QUFDUCxXQUFXO0FBQ1gsMkJBQTJCO0FBQzNCLGNBQWM7QUFDZCxXQUFXO0FBQ1gsZUFBZTtBQUNmLGNBQWM7QUFDZCxlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0Esb0VBQW9FO0FBQ3BFLFlBQVk7QUFDWixvQkFBb0I7QUFDcEIsU0FBUztBQUNUOztBQUVBO0FBQ0EsWUFBWTtBQUNaLFdBQVc7QUFDWCxtQkFBbUI7QUFDbkIsV0FBVztBQUNYLHVCQUF1QjtBQUN2Qix5QkFBeUI7QUFDekIsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkIsZUFBZTtBQUNmLHdFQUF3RTtBQUN4RSx1QkFBdUI7QUFDdkI7O0FBRUE7QUFDQSwrQkFBK0I7QUFDL0IsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYixtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsYUFBYTtBQUNiLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBLGNBQWM7QUFDZCxhQUFhO0FBQ2IsbUJBQW1CO0FBQ25CLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsbUNBQW1DO0FBQ25DLGtCQUFrQjtBQUNsQiw4REFBOEQ7QUFDOUQsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBLDhEQUE4RDtBQUM5RCxnQ0FBZ0M7QUFDaEMsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0EsWUFBWTtBQUNaLFdBQVc7QUFDWCxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxlQUFlO0FBQ2YsY0FBYztBQUNkLFlBQVk7QUFDWixZQUFZO0FBQ1osYUFBYTtBQUNiOztBQUVBLHNCQUFzQjtBQUN0QjtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTtBQUNBLFlBQVk7QUFDWixhQUFhO0FBQ2I7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxZQUFZO0FBQ1osd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYixrQkFBa0I7QUFDbEI7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIlxuICA6aG9zdCB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG5tYXJnaW46IDhweCAwO1xufVxuXG5wIHtcbm1hcmdpbjogMDtcbn1cblxuLnNwYWNlciB7XG5mbGV4OiAxO1xufVxuXG4udG9vbGJhciB7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG50b3A6IDA7XG5sZWZ0OiAwO1xucmlnaHQ6IDA7XG5oZWlnaHQ6IDYwcHg7XG5kaXNwbGF5OiBmbGV4O1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbmJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG5jb2xvcjogd2hpdGU7XG5mb250LXdlaWdodDogNjAwO1xufVxuXG4udG9vbGJhciBpbWcge1xubWFyZ2luOiAwIDE2cHg7XG59XG5cbi50b29sYmFyICN0d2l0dGVyLWxvZ28ge1xuaGVpZ2h0OiA0MHB4O1xubWFyZ2luOiAwIDhweDtcbn1cblxuLnRvb2xiYXIgI3lvdXR1YmUtbG9nbyB7XG5oZWlnaHQ6IDQwcHg7XG5tYXJnaW46IDAgMTZweDtcbn1cblxuLnRvb2xiYXIgI3R3aXR0ZXItbG9nbzpob3Zlcixcbi50b29sYmFyICN5b3V0dWJlLWxvZ286aG92ZXIge1xub3BhY2l0eTogMC44O1xufVxuXG4uY29udGVudCB7XG5kaXNwbGF5OiBmbGV4O1xubWFyZ2luOiA4MnB4IGF1dG8gMzJweDtcbnBhZGRpbmc6IDAgMTZweDtcbm1heC13aWR0aDogOTYwcHg7XG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuc3ZnLm1hdGVyaWFsLWljb25zIHtcbmhlaWdodDogMjRweDtcbndpZHRoOiBhdXRvO1xufVxuXG5zdmcubWF0ZXJpYWwtaWNvbnM6bm90KDpsYXN0LWNoaWxkKSB7XG5tYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmNhcmQgc3ZnLm1hdGVyaWFsLWljb25zIHBhdGgge1xuZmlsbDogIzg4ODtcbn1cblxuLmNhcmQtY29udGFpbmVyIHtcbmRpc3BsYXk6IGZsZXg7XG5mbGV4LXdyYXA6IHdyYXA7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbm1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5jYXJkIHtcbmFsbDogdW5zZXQ7XG5ib3JkZXItcmFkaXVzOiA0cHg7XG5ib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbmhlaWdodDogNDBweDtcbndpZHRoOiAyMDBweDtcbm1hcmdpbjogMCA4cHggMTZweDtcbnBhZGRpbmc6IDE2cHg7XG5kaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246IHJvdztcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbnRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xubGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcbm1hcmdpbi1yaWdodDogMDtcbn1cblxuLmNhcmQuY2FyZC1zbWFsbCB7XG5oZWlnaHQ6IDE2cHg7XG53aWR0aDogMTY4cHg7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG5jdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciB7XG50cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG5ib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciAubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XG5maWxsOiByZ2IoMTA1LCAxMDMsIDEwMyk7XG59XG5cbi5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcbmJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG5jb2xvcjogd2hpdGU7XG5mb250LXdlaWdodDogNjAwO1xuYm9yZGVyOiBub25lO1xud2lkdGg6IGF1dG87XG5taW4td2lkdGg6IDMwJTtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcmQuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcbm1hcmdpbi1sZWZ0OiA2MHB4O1xufVxuXG5zdmcjcm9ja2V0IHtcbndpZHRoOiA4MHB4O1xucG9zaXRpb246IGFic29sdXRlO1xubGVmdDogLTEwcHg7XG50b3A6IC0yNHB4O1xufVxuXG5zdmcjcm9ja2V0LXNtb2tlIHtcbmhlaWdodDogY2FsYygxMDB2aCAtIDk1cHgpO1xucG9zaXRpb246IGFic29sdXRlO1xudG9wOiAxMHB4O1xucmlnaHQ6IDE4MHB4O1xuei1pbmRleDogLTEwO1xufVxuXG5hLFxuYTp2aXNpdGVkLFxuYTpob3ZlciB7XG5jb2xvcjogIzE5NzZkMjtcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciB7XG5jb2xvcjogIzEyNTY5OTtcbn1cblxuLnRlcm1pbmFsIHtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbndpZHRoOiA4MCU7XG5tYXgtd2lkdGg6IDYwMHB4O1xuYm9yZGVyLXJhZGl1czogNnB4O1xucGFkZGluZy10b3A6IDQ1cHg7XG5tYXJnaW4tdG9wOiA4cHg7XG5vdmVyZmxvdzogaGlkZGVuO1xuYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTYpO1xufVxuXG4udGVybWluYWw6OmJlZm9yZSB7XG5jb250ZW50OiBcIlxcMjAyMiBcXDIwMjIgXFwyMDIyXCI7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG50b3A6IDA7XG5sZWZ0OiAwO1xuaGVpZ2h0OiA0cHg7XG5iYWNrZ3JvdW5kOiByZ2IoNTgsIDU4LCA1OCk7XG5jb2xvcjogI2MyYzNjNDtcbndpZHRoOiAxMDAlO1xuZm9udC1zaXplOiAycmVtO1xubGluZS1oZWlnaHQ6IDA7XG5wYWRkaW5nOiAxNHB4IDA7XG50ZXh0LWluZGVudDogNHB4O1xufVxuXG4udGVybWluYWwgcHJlIHtcbmZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhcixDb25zb2xhcyxMaWJlcmF0aW9uIE1vbm8sTWVubG8sbW9ub3NwYWNlO1xuY29sb3I6IHdoaXRlO1xucGFkZGluZzogMCAxcmVtIDFyZW07XG5tYXJnaW46IDA7XG59XG5cbi5jaXJjbGUtbGluayB7XG5oZWlnaHQ6IDQwcHg7XG53aWR0aDogNDBweDtcbmJvcmRlci1yYWRpdXM6IDQwcHg7XG5tYXJnaW46IDhweDtcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5jdXJzb3I6IHBvaW50ZXI7XG5ib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG50cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcbn1cblxuLmNpcmNsZS1saW5rOmhvdmVyIHtcbnRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XG5ib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG5mb290ZXIge1xubWFyZ2luLXRvcDogOHB4O1xuZGlzcGxheTogZmxleDtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5saW5lLWhlaWdodDogMjBweDtcbn1cblxuZm9vdGVyIGEge1xuZGlzcGxheTogZmxleDtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5naXRodWItc3Rhci1iYWRnZSB7XG5jb2xvcjogIzI0MjkyZTtcbmRpc3BsYXk6IGZsZXg7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuZm9udC1zaXplOiAxMnB4O1xucGFkZGluZzogM3B4IDEwcHg7XG5ib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LDMxLDM1LC4yKTtcbmJvcmRlci1yYWRpdXM6IDNweDtcbmJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmYWZiZmMsI2VmZjNmNiA5MCUpO1xubWFyZ2luLWxlZnQ6IDRweDtcbmZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5naXRodWItc3Rhci1iYWRnZTpob3ZlciB7XG5iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywjZjBmM2Y2LCNlNmViZjEgOTAlKTtcbmJvcmRlci1jb2xvcjogcmdiYSgyNywzMSwzNSwuMzUpO1xuYmFja2dyb3VuZC1wb3NpdGlvbjogLS41ZW07XG59XG5cbi5naXRodWItc3Rhci1iYWRnZSAubWF0ZXJpYWwtaWNvbnMge1xuaGVpZ2h0OiAxNnB4O1xud2lkdGg6IDE2cHg7XG5tYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuc3ZnI2Nsb3VkcyB7XG5wb3NpdGlvbjogZml4ZWQ7XG5ib3R0b206IC0xNjBweDtcbmxlZnQ6IC0yMzBweDtcbnotaW5kZXg6IC0xMDtcbndpZHRoOiAxOTIwcHg7XG59XG5cbi8qIFJlc3BvbnNpdmUgU3R5bGVzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuLmNhcmQtY29udGFpbmVyID4gKjpub3QoLmNpcmNsZS1saW5rKSAsXG4udGVybWluYWwge1xud2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbmhlaWdodDogMTZweDtcbm1hcmdpbjogOHB4IDA7XG59XG5cbi5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xubWFyZ2luLWxlZnQ6IDcycHg7XG59XG5cbnN2ZyNyb2NrZXQtc21va2Uge1xucmlnaHQ6IDEyMHB4O1xudHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xufVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuc3ZnI3JvY2tldC1zbW9rZSB7XG5kaXNwbGF5OiBub25lO1xudmlzaWJpbGl0eTogaGlkZGVuO1xufVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 3870:
/*!*****************************************************!*\
  !*** ./src/app/modules/configClasses.repository.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Filter: () => (/* binding */ Filter)
/* harmony export */ });
class Filter {
  constructor() {
    this.search = '';
    this.related = false;
  }
  reset() {
    this.related = false;
    this.search = undefined;
  }
}

/***/ }),

/***/ 4162:
/*!*************************************************!*\
  !*** ./src/app/services/shared-edit.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedItemEditService: () => (/* binding */ SharedItemEditService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
var _staticBlock;


class SharedItemEditService {
  constructor() {
    this.itemlistEventSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.itemEventSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.itemlistEditEvent$ = this.itemlistEventSource.asObservable();
    this.itemEditEvent$ = this.itemEventSource.asObservable();
  }
  emitListEvent(message) {
    this.itemlistEventSource.next(message);
  }
  emitItemEvent(message) {
    this.itemEventSource.next(message);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function SharedItemEditService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SharedItemEditService)();
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: SharedItemEditService,
    factory: SharedItemEditService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }),

/***/ 4183:
/*!****************************************!*\
  !*** ./src/app/services/repository.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Repository: () => (/* binding */ Repository)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _models_todoitem_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/todoitem.model */ 8925);
/* harmony import */ var _modules_configClasses_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/configClasses.repository */ 3870);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3855);
var _staticBlock;





const itemsUrl = 'api/items';
class Repository {
  constructor(http) {
    this.http = http;
    this.todoitems = [];
    this.todoitem = new _models_todoitem_model__WEBPACK_IMPORTED_MODULE_1__.ToDoItem();
    this.todoitemsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.todoitemChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.errorsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.filter = new _modules_configClasses_repository__WEBPACK_IMPORTED_MODULE_2__.Filter();
  }
  /*
  * Get collections
  */
  getToDoItems() {
    this.http.get(itemsUrl).subscribe(t => {
      this.todoitems = [];
      t.forEach(item => {
        let newItem = new _models_todoitem_model__WEBPACK_IMPORTED_MODULE_1__.ToDoItem(item.id, item.title, item.creationDate, item.completedDate, item.dueBy, item.isCompleted, false);
        // since SQLite stores dates as strings, rehydrate dates.
        newItem.RehydrateDates();
        this.todoitems.push(newItem);
      });
      this.todoitemsChanged.next(this.todoitems.slice());
    });
  }
  /*
      This is an example of how to implement filtering on the server side using a query string.
      getToDoItems() {
          let url = `${itemsUrl}?related=${this.filter.related}`;
  
      if (this.filter.search) {
          url += `&search=true&${this.filter.search}`;
      }
  
          this.http.get<TodoItemInfo[]>(url).subscribe((p) => {
              this.todoitems = p.slice();
              this.todoitemsChanged.next(p.slice());
      });
  */
  /*
  * Get entity
  */
  getToDoItem(id) {
    this.http.get(`${itemsUrl}/${id}`).subscribe(i => {
      let newItem = new _models_todoitem_model__WEBPACK_IMPORTED_MODULE_1__.ToDoItem(i.id, i.title, i.creationDate, i.completedDate, i.dueBy, i.isCompleted, false);
      i.RehydrateDates();
      this.todoitemChanged.next(i);
    });
  }
  /*
  * Add entity
  */
  createToDoItem(todoitem) {
    this.http.post(itemsUrl, todoitem).subscribe({
      next: item => {
        let newItem = new _models_todoitem_model__WEBPACK_IMPORTED_MODULE_1__.ToDoItem(item.id, item.title, item.creationDate, item.completedDate, item.dueBy, item.isCompleted, false);
        // Fix issue wiht SQLIte DB storing dates as strings.
        newItem.RehydrateDates();
        this.todoitem = newItem;
        this.todoitemChanged.next(newItem);
        this.todoitems.push(newItem);
        // Sort list according to match DB sort rules.
        this.todoitems = this.todoitems.DBSort();
        this.todoitemsChanged.next(this.todoitems.slice());
      },
      error: e => {
        this.errorsChanged.next(e.error?.errors);
      }
    });
  }
  /*
  * Replace Entity
  */
  replaceToDoItem(todoitem) {
    this.http.put(`${itemsUrl}/${todoitem.id}`, todoitem).subscribe({
      next: t => {
        let index = this.todoitems.findIndex(t => t.id === todoitem.id);
        if (index !== -1) {
          let updateItem = new _models_todoitem_model__WEBPACK_IMPORTED_MODULE_1__.ToDoItem(t.id, t.title, t.creationDate, t.completedDate, t.dueBy, t.isCompleted, false);
          updateItem.RehydrateDates();
          this.todoitems[index] = updateItem;
          this.todoitems = this.todoitems.DBSort();
          this.todoitemChanged.next(updateItem);
        }
      },
      error: e => {
        this.errorsChanged.next(e.error?.errors);
      }
    });
  }
  /*
  * Update entity
  */
  updateContent(id, changes) {
    let patch = [];
    changes.forEach((value, key) => patch.push({
      op: 'replace',
      path: key,
      value: value
    }));
    this.http.patch(`${itemsUrl}/${id}`, patch).subscribe(() => this.getToDoItem(id));
  }
  deleteToDoItem(id) {
    this.http.delete(`${itemsUrl}/${id}`).subscribe({
      next: result => {
        if (result === true) {
          this.todoitems = this.todoitems.filter(p => p.id != id);
          this.todoitemsChanged.next(this.todoitems.slice());
        }
      },
      error: e => {
        this.errorsChanged.next(e.error?.errors);
      }
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function Repository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Repository)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: Repository,
    factory: Repository.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 2190);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _app_helpers_array_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/helpers/array-extensions */ 9292);





(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, {
  providers: [(0,_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.provideHttpClient)(), (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.importProvidersFrom)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.BrowserModule), {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__.LOCALE_ID,
    useValue: 'en-au'
  }]
}).catch(err => console.error(err));

/***/ }),

/***/ 5928:
/*!***************************************************!*\
  !*** ./src/app/components/todo-item/todo-item.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoItemComponent: () => (/* binding */ TodoItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var src_app_services_shared_edit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shared-edit.service */ 4162);
/* harmony import */ var _models_todoitem_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/todoitem.model */ 8925);
/* harmony import */ var src_app_services_repository__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/repository */ 4183);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;










const _c0 = ["app-todo-item", ""];
function TodoItemComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td")(1, "input", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TodoItemComponent_Conditional_0_Conditional_8_Template_input_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.setItemComplete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "td")(3, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TodoItemComponent_Conditional_0_Conditional_8_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.setEditMode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", ctx_r2.item.isCompleted);
  }
}
function TodoItemComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "td");
  }
}
function TodoItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](8, TodoItemComponent_Conditional_0_Conditional_8_Template, 5, 1)(9, TodoItemComponent_Conditional_0_Conditional_9_Template, 3, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td")(11, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TodoItemComponent_Conditional_0_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.deleteItem());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](4, 4, ctx_r2.item.creationDate, "dd/M/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](7, 7, ctx_r2.item.dueBy, "dd/M/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r2.item.isCompleted == false ? 8 : 9);
  }
}
function TodoItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td")(1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td")(12, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TodoItemComponent_Conditional_1_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.saveChanges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "td")(15, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TodoItemComponent_Conditional_1_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.cancelEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r2.todoitemForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 5, ctx_r2.item.creationDate, "dd/M/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](8, 8, ctx_r2.item.dueBy, "dd/M/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.item.isCompleted ? "Yes" : "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r2.todoitemForm.invalid);
  }
}
class TodoItemComponent {
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
    this.repo = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(src_app_services_repository__WEBPACK_IMPORTED_MODULE_7__.Repository);
    this.editService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(src_app_services_shared_edit_service__WEBPACK_IMPORTED_MODULE_5__.SharedItemEditService);
    this.listEventSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    this.todoitemChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    this.todoItem = _angular_core__WEBPACK_IMPORTED_MODULE_1__.input.required(...(ngDevMode ? [{
      debugName: "todoItem"
    }] : []));
    this.item = new _models_todoitem_model__WEBPACK_IMPORTED_MODULE_6__.ToDoItem();
    this.isEditMode = false;
    this.todoitemForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required)
    });
  }
  /*
  get activeClass() {
    return this.item.isCompleted;
  }
  */
  ngOnInit() {
    let newItem = new _models_todoitem_model__WEBPACK_IMPORTED_MODULE_6__.ToDoItem(this.todoItem().id, this.todoItem().title, this.todoItem().creationDate, this.todoItem().completedDate, this.todoItem().dueBy, this.todoItem().isCompleted);
    this.item = newItem;
    this.todoitemForm.setValue({
      title: newItem.title
    });
    this.todoitemChanged = this.repo.todoitemChanged.subscribe(updatedItem => {
      if (updatedItem.id === this.item.id) {
        const today = new Date();
        if (updatedItem.dueBy) {
          const completeByDate = updatedItem.dueBy;
          updatedItem.isOverdue = !updatedItem.isCompleted && completeByDate < today;
        }
        if (updatedItem.isCompleted) {
          // Update class in parent selector in real time.
          this.renderer.addClass(this.el.nativeElement, 'statusComplete');
        }
        this.item = updatedItem;
      }
    });
    this.listEventSubscription = this.editService.itemlistEditEvent$.subscribe(message => {
      if (message !== this.todoItem().id) {
        this.isEditMode = false;
      }
    });
  }
  setItemComplete() {
    let updatedItem = new _models_todoitem_model__WEBPACK_IMPORTED_MODULE_6__.ToDoItem(this.item.id, this.item.title, this.item.creationDate, new Date((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.formatDate)(new Date(), 'dd/M/yyyy', 'en-AU')), this.item.dueBy, true, false);
    this.repo.replaceToDoItem(updatedItem);
  }
  setEditMode() {
    this.editService.emitItemEvent(this.item.id);
    this.isEditMode = true;
  }
  cancelEdit() {
    this.isEditMode = false;
    this.todoitemForm.reset();
    this.item = this.todoItem();
  }
  saveChanges() {
    if (this.todoitemForm.valid) {
      this.isEditMode = false;
      this.item.title = this.todoitemForm.value.title;
      this.repo.replaceToDoItem(this.item);
    } else {
      this.todoitemForm.markAllAsTouched();
    }
  }
  deleteItem() {
    this.editService.emitItemEvent(-1);
    this.repo.deleteToDoItem(this.item.id);
  }
  ngOnDestroy() {
    this.listEventSubscription.unsubscribe();
    this.todoitemChanged.unsubscribe();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function TodoItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TodoItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Renderer2));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: TodoItemComponent,
    selectors: [["", "app-todo-item", ""]],
    hostVars: 2,
    hostBindings: function TodoItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("statusComplete", ctx.ngOnInit);
      }
    },
    inputs: {
      todoItem: [1, "todoItem"]
    },
    attrs: _c0,
    decls: 2,
    vars: 1,
    consts: [["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "checkbox", 3, "click", "checked"], ["type", "button", 1, "btn", "btn-info", 3, "click"], [3, "formGroup"], ["type", "text", "formControlName", "title"], ["type", "submit", 1, "btn", "btn-success", 3, "click", "disabled"]],
    template: function TodoItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](0, TodoItemComponent_Conditional_0_Template, 13, 10)(1, TodoItemComponent_Conditional_1_Template, 17, 11);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.isEditMode == false ? 0 : 1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
    styles: ["table[_ngcontent-%COMP%] {\n  border-collapse: collapse; \n\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border: 1px solid black; \n\n}\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90b2RvLWl0ZW0vdG9kby1pdGVtLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QixFQUFFLGlDQUFpQztBQUM5RDs7QUFFQTtFQUNFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUN2RCIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiBNZXJnZXMgYWRqYWNlbnQgY2VsbCBib3JkZXJzICovXHJcbn1cclxuXHJcbnRoLCB0ZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IC8qIEFwcGxpZXMgYm9yZGVyIHRvIGNlbGxzICovXHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 6416:
/*!***************************************************************!*\
  !*** ./src/app/components/todo-items-list/todo-items-list.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoItemsList: () => (/* binding */ TodoItemsList)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _services_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/repository */ 4183);
/* harmony import */ var _todo_item_todo_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todo-item/todo-item */ 5928);
/* harmony import */ var src_app_services_shared_edit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared-edit.service */ 4162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






const _forTrack0 = ($index, $item) => $item.id;
function TodoItemsList_For_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 4);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("statusComplete", item_r1.isCompleted == true)("statusOverdue", item_r1.isOverdue == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("todoItem", item_r1);
  }
}
class TodoItemsList {
  constructor() {
    this.todoitemsListChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
    this.itemEventSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
    this.repo = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_repository__WEBPACK_IMPORTED_MODULE_2__.Repository);
    this.editService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(src_app_services_shared_edit_service__WEBPACK_IMPORTED_MODULE_4__.SharedItemEditService);
    this.todoitemList = [];
  }
  ngOnInit() {
    this.itemEventSubscription = this.editService.itemEditEvent$.subscribe(id => {
      this.editService.emitListEvent(id);
    });
    this.todoitemsListChanged = this.repo.todoitemsChanged.subscribe(itemList => {
      itemList.forEach(item => {
        const today = new Date();
        if (item.dueBy) {
          const completeByDate = item.dueBy;
          item.isOverdue = !item.isCompleted && completeByDate < today;
        }
      });
      this.todoitemList = itemList;
    });
    this.repo.getToDoItems();
  }
  ngOnDestroy() {
    this.todoitemsListChanged.unsubscribe();
    this.itemEventSubscription.unsubscribe();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function TodoItemsList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TodoItemsList)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: TodoItemsList,
    selectors: [["app-todo-items-list"]],
    decls: 19,
    vars: 0,
    consts: [[1, "results"], [1, "table", "table-striped", "table-hover"], [2, "display", "table-header-group"], ["app-todo-item", "", 3, "todoItem", "statusComplete", "statusOverdue"], ["app-todo-item", "", 3, "todoItem"]],
    template: function TodoItemsList_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0)(1, "table", 1)(2, "thead", 2)(3, "tr")(4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Creation Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Due By");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](17, TodoItemsList_For_18_Template, 1, 5, "tr", 3, _forTrack0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.todoitemList);
      }
    },
    dependencies: [_todo_item_todo_item__WEBPACK_IMPORTED_MODULE_3__.TodoItemComponent],
    styles: ["table {\n  border-collapse: collapse; /* Merges adjacent cell borders */\n}\n\nth, td {\n  border: 1px solid black; /* Applies border to cells */\n}\n\n.statusComplete > td:nth-child(-n + 3) {\n  background-color: lightgreen;\n  text-decoration: line-through;\n}\n\n.statusOverdue > td:nth-child(-n + 3)  {\n  background-color: lightcoral;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90b2RvLWl0ZW1zLWxpc3QvdG9kby1pdGVtcy1saXN0LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QixFQUFFLGlDQUFpQztBQUM5RDs7QUFFQTtFQUNFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUN2RDs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogTWVyZ2VzIGFkamFjZW50IGNlbGwgYm9yZGVycyAqL1xyXG59XHJcblxyXG50aCwgdGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAvKiBBcHBsaWVzIGJvcmRlciB0byBjZWxscyAqL1xyXG59XHJcblxyXG4uc3RhdHVzQ29tcGxldGUgPiB0ZDpudGgtY2hpbGQoLW4gKyAzKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG5cclxuLnN0YXR1c092ZXJkdWUgPiB0ZDpudGgtY2hpbGQoLW4gKyAzKSAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  }));
}
_staticBlock();

/***/ }),

/***/ 6518:
/*!************************************************!*\
  !*** ./src/app/screens/home/home.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ 1977);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _components_todo_items_list_todo_items_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/todo-items-list/todo-items-list */ 6416);
/* harmony import */ var _services_repository__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/repository */ 4183);
/* harmony import */ var src_app_models_todoitem_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/todoitem.model */ 8925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 8388);
var _staticBlock;














function HomeComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Title is required.\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HomeComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "DueBy is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
class HomeComponent {
  constructor() {
    this.errorsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    this.todoitemChanged = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    this.repo = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_repository__WEBPACK_IMPORTED_MODULE_8__.Repository);
    this.todoitem = new src_app_models_todoitem_model__WEBPACK_IMPORTED_MODULE_9__.ToDoItem();
    this.errorMessage = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('', ...(ngDevMode ? [{
      debugName: "errorMessage"
    }] : []));
    this.todoitemForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required),
      dueBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required)
    });
  }
  ngOnInit() {
    this.todoitemChanged = this.repo.todoitemChanged.subscribe(item => {
      this.todoitemForm.reset();
    });
    this.errorsChanged = this.repo.errorsChanged.subscribe(message => {
      this.errorMessage.set(JSON.stringify(message));
    });
  }
  addToDoItem() {
    this.todoitem.title = this.todoitemForm.value.title;
    this.todoitem.creationDate = new Date((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.formatDate)(new Date(), 'dd/M/yyyy', 'en-AU'));
    this.todoitem.dueBy = this.todoitemForm.value.dueBy;
    this.todoitem.completedDate = null;
    this.todoitem.isCompleted = false;
    this.repo.createToDoItem(this.todoitem);
  }
  ngOnDestroy() {
    this.todoitemChanged.unsubscribe();
    this.errorsChanged.unsubscribe();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || HomeComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 28,
    vars: 7,
    consts: [["dueByPicker", ""], [3, "submit", "formGroup"], ["appearance", "fill", 1, "form-control"], ["matInput", "", "placeholder", "Buy groceries", "formControlName", "title"], ["matInput", "", "placeholder", "dd/M/yyyy", "formControlName", "dueBy", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "results"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section")(1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("submit", function HomeComponent_Template_form_submit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.addToDoItem());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-form-field", 2)(3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](6, HomeComponent_Conditional_6_Template, 2, 0, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "mat-form-field", 2)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Due By");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "dd/M/yyyy");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "mat-datepicker-toggle", 5)(15, "mat-datepicker", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](17, HomeComponent_Conditional_17_Template, 2, 0, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "br")(19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](25, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "app-todo-items-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_5_0;
        const dueByPicker_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.todoitemForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](((tmp_2_0 = ctx.todoitemForm.get("title")) == null ? null : tmp_2_0.hasError("required")) && ((tmp_2_0 = ctx.todoitemForm.get("title")) == null ? null : tmp_2_0.touched) ? 6 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matDatepicker", dueByPicker_r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("for", dueByPicker_r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](((tmp_5_0 = ctx.todoitemForm.get("dueBy")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx.todoitemForm.get("dueBy")) == null ? null : tmp_5_0.touched) ? 17 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.todoitemForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.errorMessage(), "\n");
      }
    },
    dependencies: [_components_todo_items_list_todo_items_list__WEBPACK_IMPORTED_MODULE_7__.TodoItemsList, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerToggle, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatHint, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatNativeDateModule],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 8925:
/*!******************************************!*\
  !*** ./src/app/models/todoitem.model.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToDoItem: () => (/* binding */ ToDoItem)
/* harmony export */ });
class ToDoItem {
  constructor(id, title, creationDate, completedDate, dueBy, isCompleted, isOverdue) {
    this.id = id;
    this.title = title;
    this.creationDate = creationDate;
    this.completedDate = completedDate;
    this.dueBy = dueBy;
    this.isCompleted = isCompleted;
    this.isOverdue = isOverdue;
  }
  RehydrateDates() {
    if (this.completedDate) this.completedDate = new Date(this.completedDate);
    if (this.dueBy) this.dueBy = new Date(this.dueBy);
    if (this.creationDate) this.creationDate = new Date(this.creationDate);
    return this;
  }
}

/***/ }),

/***/ 9292:
/*!*********************************************!*\
  !*** ./src/app/helpers/array-extensions.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
//This is to mirror the sort order returned from the database whenever an item is added or updated on the client.
if (!Array.prototype.DBSort) {
  Array.prototype.DBSort = function () {
    return this.sort((a, b) => b.creationDate.getTime() - a.creationDate.getTime()) //Descending
    .sort((a, b) => b.dueBy.getTime() - a.dueBy.getTime()) //Descending
    .sort((a, b) => {
      if (a.isCompleted && !b.isCompleted) {
        return 1;
      } else if (!a.isCompleted && b.isCompleted) {
        return -1;
      } //Ascending
      else {
        return 0;
      }
    }); //Preserve order
  };
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map