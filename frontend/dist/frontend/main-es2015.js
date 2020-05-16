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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Toolbar\n<mat-toolbar *ngIf=(this.toolBar) color=\"primary\" class=\"app-header\">\n  <span class=\"nav-tool-items\">\n    <button class=\"btn\" mat-raised-button *ngIf='(this.router.url == \"/homePage\") || (this.router.url==\"/notes\") || (this.router.url==\"/questionAnswers\")' routerLink='/homePage' routerLinkActive='active'>Home</button>\n    <button class=\"btn\" mat-raised-button routerLink='/login' *ngIf='(this.router.url == \"/login\") || (this.router.url==\"/register\") || (this.router.url==\"/passwordReset\")' routerLinkActive='active'>Login</button>\n    <button class=\"btn\" mat-raised-button routerLink='/register' *ngIf='(this.router.url == \"/login\") || (this.router.url == \"/register\") || (this.router.url ==\"/passwordReset\")' routerLinkActive='active'>Register</button>\n    <button class=\"btn\" mat-raised-button (click) = 'Logout()' *ngIf='(this.router.url == \"/homePage\") || (this.router.url==\"/notes\") || (this.router.url==\"/questionAnswers\")'>Logout</button>\n  </span>\n</mat-toolbar> -->\n\n\n\t\t\t\t\t<!-- Modal -->\n    <!--/.Content-->\n<!-- Modal -->\n\n  <!-- Header -->\n\n<div class=\"super_container\" *ngIf=\"toolBar\">\n  <header onload=\"loadscript()\" class=\"header d-flex flex-row\" *ngIf=\"toolBar\">\n\t\t<div class=\"header_content d-flex flex-row align-items-center\">\n\t\t\t<!-- Logo -->\n\t\t\t<div class=\"logo_container\">\n\t\t\t\t<div class=\"logo\">\n\t\t\t\t\t<img src=\"assets/img/logo.png\" alt=\"\">\n\t\t\t\t\t<span>PrepNotes</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<!-- Main Navigation -->\n\t\t\t<nav class=\"main_nav_container\">\n\t\t\t\t<div class=\"main_nav\">\n\t\t\t\t\t<ul class=\"main_nav_list\">\n\t\t\t\t\t\t<li *ngIf=\"!isLoggedIn\" class=\"main_nav_item\"><a routerLink='/mainPage' routerLinkActive='active'>home</a></li>\n\t\t\t\t\t\t<li *ngIf=\"isLoggedIn\" class=\"main_nav_item\"><a routerLink='/homePage' routerLinkActive='active'>home</a></li>\n            <li class=\"main_nav_item\"><a href=\"#\">about us</a></li>\n            <li *ngIf=\"!isLoggedIn\"  class=\"main_nav_item\"><a routerLink='/login' routerLinkActive='active'>Ask Questions</a></li>\n            <li *ngIf=\"isLoggedIn\" class=\"main_nav_item\"><a routerLink='/questionAnswers' routerLinkActive='active'>Ask Questions</a></li>\n            <li *ngIf=\"!isLoggedIn\"  class=\"main_nav_item\"><a routerLink='/login' routerLinkActive='active'>Notes</a></li>\n            <li *ngIf=\"isLoggedIn\" class=\"main_nav_item\"><a routerLink='/notes' routerLinkActive='active'>Notes</a></li>\n\t\t\t\t\t\t<li class=\"main_nav_item\"><a >contact us</a></li>\n\t\t\t\t\t\t<li *ngIf=\"isLoggedIn\" class=\"main_nav_item\"><a (click)='Logout()' >Logout</a></li>\n          </ul>\n\t\t\t\t</div>\n\t\t\t</nav>\n\t\t</div>\n\t\t<div class=\"header_side d-flex flex-row justify-content-center align-items-center\">\n\t\t\t<img src=\"assets/img/phone-call.svg\" alt=\"\">\n\t\t\t<span>+91 8123861957</span>\n\t\t</div>\n\n\t\t<!-- Hamburger -->\n\t\t<div class=\"hamburger_container\">\n\t\t\t<i class=\"fas fa-bars trans_200\"></i>\n\t\t</div>\n\n  </header>\n  <div class=\"menu_container menu_mm\" *ngIf=\"toolBar\" >\n\n\t\t<!-- Menu Close Button -->\n\t\t<div class=\"menu_close_container\">\n\t\t\t<div class=\"menu_close\"></div>\n\t\t</div>\n\n\t\t<!-- Menu Items -->\n\t\t<div class=\"menu_inner menu_mm\">\n\t\t\t<div class=\"menu menu_mm\">\n\t\t\t\t<ul class=\"menu_list menu_mm\">\n          <li *ngIf=\"!isLoggedIn\" class=\"menu_item menu_mm\"><a routerLink='/mainPage' routerLinkActive='active'>Home</a></li>\n          <li *ngIf=\"isLoggedIn\" class=\"menu_item menu_mm\"><a routerLink='/homePage' routerLinkActive='active'>Home</a></li>\n          <li class=\"menu_item menu_mm\"><a href=\"#\">About Us</a></li>\n          <li *ngIf=\"!isLoggedIn\"  class=\"menu_item menu_mm\"><a routerLink='/login' routerLinkActive='active'>Ask Questions</a></li>\n          <li *ngIf=\"isLoggedIn\" class=\"menu_item menu_mm\"><a routerLink='/questionAnswers' routerLinkActive='active'>Ask Questions</a></li>\n          <li *ngIf=\"!isLoggedIn\"  class=\"menu_item menu_mm\"><a routerLink='/login' routerLinkActive='active'>Notes</a></li>\n          <li *ngIf=\"isLoggedIn\" class=\"menu_item menu_mm\"><a routerLink='/notes' routerLinkActive='active'>Notes</a></li>\n          <li class=\"menu_item menu_mm\"><a >Contact Us</a></li>\n          <li *ngIf=\"isLoggedIn\" class=\"menu_item menu_mm\"><a (click)='Logout()' >Logout</a></li>\n\t\t\t\t</ul>\n\n\t\t\t\t<!-- Menu Social -->\n\n\t\t\t\t<div class=\"menu_social_container menu_mm\">\n\t\t\t\t\t<ul class=\"menu_social menu_mm\">\n\t\t\t\t\t\t<li class=\"menu_social_item menu_mm\"><a href=\"#\"><i class=\"fab fa-pinterest\"></i></a></li>\n\t\t\t\t\t\t<li class=\"menu_social_item menu_mm\"><a href=\"#\"><i class=\"fab fa-linkedin-in\"></i></a></li>\n\t\t\t\t\t\t<li class=\"menu_social_item menu_mm\"><a href=\"#\"><i class=\"fab fa-instagram\"></i></a></li>\n\t\t\t\t\t\t<li class=\"menu_social_item menu_mm\"><a href=\"#\"><i class=\"fab fa-facebook-f\"></i></a></li>\n\t\t\t\t\t\t<li class=\"menu_social_item menu_mm\"><a href=\"#\"><i class=\"fab fa-twitter\"></i></a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n<router-outlet></router-outlet>\n<footer *ngIf=\"(router.url !== '/questionAnswers') && toolBar\" class=\"footer\" style=\"position: sticky; height: 30%;padding-top:0px;padding-bottom: 0px;\">\n  <div class=\"container\">\n\n    <!-- Newsletter -->\n\n\n    <!-- Footer Content -->\n\n    <div class=\"footer_content\">\n      <div class=\"row\">\n\n        <!-- Footer Column - About -->\n        <div class=\"col-lg-3 footer_col\">\n\n          <!-- Logo -->\n          <div class=\"logo_container\">\n            <div class=\"logo\">\n              <img src=\"assets/img/logo.png\" alt=\"\">\n              <span>PrepNotes</span>\n            </div>\n          </div>\n\n\n        </div>\n\n        <!-- Footer Column - Menu -->\n\n        <div class=\"col-lg-3 footer_col\">\n          <div class=\"footer_column_title\">Menu</div>\n          <div class=\"footer_column_content\">\n            <ul>\n              <li *ngIf=\"!isLoggedIn\" class=\"footer_list_item\"><a routerLink='/mainPage' routerLinkActive='active'>Home</a></li>\n              <li *ngIf=\"isLoggedIn\" class=\"footer_list_item\"><a routerLink='/homePage' routerLinkActive='active'>Home</a></li>\n              <li class=\"footer_list_item\"><a href=\"#\">About Us</a></li>\n              <li *ngIf=\"!isLoggedIn\"  class=\"footer_list_item\"><a routerLink='/login' routerLinkActive='active'>Ask Questions</a></li>\n              <li *ngIf=\"isLoggedIn\" class=\"footer_list_item\"><a routerLink='/questionAnswers' routerLinkActive='active'>Ask Questions</a></li>\n              <li *ngIf=\"!isLoggedIn\"  class=\"footer_list_item\"><a routerLink='/login' routerLinkActive='active'>Notes</a></li>\n              <li *ngIf=\"isLoggedIn\" class=\"footer_list_item\"><a routerLink='/notes' routerLinkActive='active'>Notes</a></li>\n              <li class=\"footer_list_item\"><a >Contact Us</a></li>\n              <li *ngIf=\"isLoggedIn\" class=\"footer_list_item\"><a (click)='Logout()' >Logout</a></li>\n                </ul>\n          </div>\n        </div>\n\n        <!-- Footer Column - Usefull Links -->\n\n        <div class=\"col-lg-3 footer_col\">\n          <div class=\"footer_column_title\">Usefull Links</div>\n          <div class=\"footer_column_content\">\n            <ul>\n              <li class=\"footer_list_item\"><a >Testimonials</a></li>\n              <li class=\"footer_list_item\"><a >Tutorials</a></li>\n            </ul>\n          </div>\n        </div>\n\n        <!-- Footer Column - Contact -->\n\n        <div class=\"col-lg-3 footer_col\">\n          <div class=\"footer_column_title\">Contact</div>\n          <div class=\"footer_column_content\">\n            <ul>\n              <li class=\"footer_contact_item\">\n                <div class=\"footer_contact_icon\">\n                  <img src=\"assets/img/placeholder.svg\" alt=\"https://www.flaticon.com/authors/lucy-g\">\n                </div>\n                KLS GIT\n              </li>\n              <li class=\"footer_contact_item\">\n                <div class=\"footer_contact_icon\">\n                  <img src=\"assets/img/smartphone.svg\" alt=\"https://www.flaticon.com/authors/lucy-g\">\n                </div>\n                +91 9988776655\n              </li>\n              <li class=\"footer_contact_item\">\n                <div class=\"footer_contact_icon\">\n                  <img src=\"assets/img/envelope.svg\" alt=\"https://www.flaticon.com/authors/lucy-g\">\n                </div>queston@notes.com\n              </li>\n            </ul>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <!-- Footer Copyright -->\n\n\n  </div>\n</footer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page/home-page.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page/home-page.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <!-- <button routerLink='/questionAnswers' color= 'primary' class=\"btn\" mat-raised-button>Ask Question</button>\n  <button routerLink='/notes' color= 'primary' class=\"btn\" mat-raised-button>Notes</button> -->\n  <div class=\"home\" >\n\n\t\t<!-- Hero Slider -->\n\n\t\t<div class=\"hero_slider_container\">\n\n\t\t\t<div class=\"hero_slider owl-carousel\">\n\n\n\t\t\t\t<!-- Hero Slide -->\n\t\t\t\t<div class=\"hero_slide\">\n\n          <div class=\"hero_slide_background\" style=\"background-image:url(https://nimbletech.org/images/slide1.jpg)\"></div>\n\n\t\t\t\t\t<div class=\"hero_slide_container d-flex flex-column align-items-center justify-content-center\">\n\t\t\t\t\t\t<!-- <div class=\"home_content\">\n              <h1>\n                <a  class=\"typewrite\" data-period=\"2000\" data-type='[ \"Welcome to prepNotes !\", \"Build Creative Notes with us.\", \"Ask Questions & Get Solutions.\", \"prepNotes is your new study buddy.\" ]'>\n                <span class=\"wrap\"></span>\n                </a>\n              </h1>\n            </div> -->\n            <div class=\"buttons\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col\" style=\"padding-left: 131px;\">\n                    <div class=\"buttons_container\">\n                      <div class=\"button button_color_1 text-center trans_200\"><a routerLink='/questionAnswers'>Ask questions</a></div>\n                      <div class=\"button button_color_1 text-center trans_200\"><a routerLink='/notes'>Generate Notes</a></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/log-in/log-in.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/log-in/log-in.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <mat-card class=\"box\" style=\"top:140px; width: 100%;\">\n    <mat-card-header>\n      <mat-card-title>Log in</mat-card-title>\n    </mat-card-header>\n    <mat-error *ngIf='errorLoggingUser'>Inavlid Email or Password</mat-error>\n    <form class=\"example-form\" [formGroup]='form' (submit) = 'onSubmit()'>\n      <mat-card-content>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput type='text' formControlName=\"uName\" name=\"uName\" placeholder=\"Email\">\n          <mat-error *ngIf=\"form.get('uName').invalid\">Please enter a valid Email</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput type=\"password\" formControlName = 'password' name=\"password\" placeholder=\"Password\">\n          <mat-error *ngIf=\"form.get('password').invalid\">Please enter a valid Password</mat-error>\n        </mat-form-field>\n      </mat-card-content>\n      <button type=\"submit\" mat-stroked-button color=\"accent\" class=\"btn-block\">Log in</button>\n    </form>\n    <a routerLink='/passwordReset' style=\" padding-top: 20px ;\" fxLayoutAlign=\"center center\">Forgot password</a>\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-page/main-page.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-page/main-page.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <!-- Menu -->\n\t<!-- Home -->\n\n\t<div class=\"home\">\n\n\t\t<!-- Hero Slider -->\n\n\t\t<div class=\"hero_slider_container\">\n\n\t\t\t<div class=\"hero_slider owl-carousel\">\n\n\n\t\t\t\t<!-- Hero Slide -->\n\t\t\t\t<div class=\"hero_slide\">\n\n\t\t\t\t\t<div class=\"hero_slide_background\" style=\"background-image:url(https://nimbletech.org/images/slide1.jpg)\"></div>\n\t\t\t\t\t<div class=\"hero_slide_container d-flex flex-column align-items-center justify-content-center\">\n\t\t\t\t\t\t<div class=\"hero_slide_content text-center\">\n\t\t\t\t\t\t\t<h1 data-animation-in=\"fadeInUp\" data-animation-out=\"animate-out fadeOut\">Let's make <span>Notes</span> !</h1>\n            </div>\n            <div class=\"buttons\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col\">\n\n                    <div class=\"buttons_container\">\n                      <div class=\"button button_color_1 text-center trans_200\"><a routerLink='/login'>Login</a></div>\n                      <div class=\"button button_color_1 text-center trans_200\"><a routerLink='/register'>Register</a> </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Hero Slide -->\n\t\t\t\t<div class=\"hero_slide\">\n\t\t\t\t\t<div class=\"hero_slide_background\" style=\"background-image:url(https://www.qualtrics.com/m/assets/blog/wp-content/uploads/2018/08/shutterstock_1068141515.jpg)\"></div>\n\t\t\t\t\t<div class=\"hero_slide_container d-flex flex-column align-items-center justify-content-center\">\n\t\t\t\t\t\t<div class=\"hero_slide_content text-center\">\n\t\t\t\t\t\t\t<h1 data-animation-in=\"fadeInUp\" data-animation-out=\"animate-out fadeOut\">Let's make <span>Notes</span> !</h1>\n            </div>\n            <div class=\"buttons\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col\">\n\n                    <div class=\"buttons_container\">\n                      <div class=\"button button_color_1 text-center trans_200\"><a routerLink='/login'>Login</a></div>\n                      <div class=\"button button_color_1 text-center trans_200\"><a routerLink='/register'>Register</a> </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Hero Slide -->\n\t\t\t\t<div class=\"hero_slide\">\n\t\t\t\t\t<div class=\"hero_slide_background\" style=\"background-image:url(https://www.ecampusnews.com/files/2016/10/etextbook.jpg)\"></div>\n\t\t\t\t\t<div class=\"hero_slide_container d-flex flex-column align-items-center justify-content-center\">\n\t\t\t\t\t\t<div class=\"hero_slide_content text-center\">\n\t\t\t\t\t\t\t<h1 data-animation-in=\"fadeInUp\" data-animation-out=\"animate-out fadeOut\">Let's make <span>Notes</span> !</h1>\n            </div>\n            <div class=\"buttons\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col\">\n\n                    <div class=\"buttons_container\">\n                      <div class=\"button button_color_1 text-center trans_200\"><a routerLink='/login'>Login</a></div>\n                      <div class=\"button button_color_1 text-center trans_200\"><a routerLink='/register'>Register</a> </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\n\t\t\t<div class=\"hero_slider_left hero_slider_nav trans_200\"><span class=\"trans_200\">prev</span></div>\n\t\t\t<div class=\"hero_slider_right hero_slider_nav trans_200\"><span class=\"trans_200\">next</span></div>\n\t\t</div>\n\n\t</div>\n\n\n\t<div class=\"popular page_section\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<div class=\"section_title text-center\">\n\t\t\t\t\t\t<h1>About us</h1>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row course_boxes\">\n\n\t\t\t\t<!-- Popular Course Item -->\n\t\t\t\t<div class=\"col-lg-4 course_box\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<img class=\"card-img-top\" src=\"assets/img/course_1.jpg\" alt=\"https://unsplash.com/@kellybrito\">\n\t\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t\t<div class=\"card-title\"><a href=\"courses.html\">Get notes in one click</a></div>\n\t\t\t\t\t\t\t<div class=\"card-text\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Popular Course Item -->\n\t\t\t\t<div class=\"col-lg-4 course_box\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<img class=\"card-img-top\" src=\"assets/img/course_2.jpg\" alt=\"https://unsplash.com/@cikstefan\">\n\t\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t\t<div class=\"card-title\"><a href=\"courses.html\">Search for notes</a></div>\n\t\t\t\t\t\t\t<div class=\"card-text\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Popular Course Item -->\n\t\t\t\t<div class=\"col-lg-4 course_box\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<img class=\"card-img-top\" src=\"assets/img/course_3.jpg\" alt=\"https://unsplash.com/@dsmacinnes\">\n\t\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t\t<div class=\"card-title\"><a href=\"courses.html\">Get Notes</a></div>\n\t\t\t\t\t\t\t<div class=\"card-text\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!-- Popular -->\n\n\t<!-- Popular -->\n\n<!-- Services -->\n\n<div class=\"services page_section\">\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"section_title text-center\">\n          <h1>Our Services</h1>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row services_row\">\n\n      <div class=\"col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start\">\n        <div class=\"icon_container d-flex flex-column justify-content-end\">\n          <img src=\"assets/img/earth-globe.svg\" alt=\"\">\n        </div>\n        <h3>Online Notes</h3>\n        <p>High Quality and content notes are provided to you by prepNotes ! We assure that notes are accurate and are of best quality for you.</p>\n      </div>\n\n      <div class=\"col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start\">\n        <div class=\"icon_container d-flex flex-column justify-content-end\">\n          <img src=\"assets/img/exam.svg\" alt=\"\">\n        </div>\n        <h3>Indoor Quizs</h3>\n        <p>prepNotes provides quiz based on the notes you upload, So that you can easily brush-up the topics and know what is your strong or weak part of learning.</p>\n      </div>\n\n      <div class=\"col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start\">\n        <div class=\"icon_container d-flex flex-column justify-content-end\">\n          <img src=\"assets/img/books.svg\" alt=\"\">\n        </div>\n        <h3>Amazing Library</h3>\n        <p>In prepNotes, each user can access the library of notes of various categories. This feature saves user from the hassle of uploading the notes instead user can first seac for the required +notes .</p>\n      </div>\n\n      <div class=\"col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start\">\n        <div class=\"icon_container d-flex flex-column justify-content-end\">\n          <img src=\"assets/img/professor.svg\" alt=\"\">\n        </div>\n        <h3>Exceptional Professors</h3>\n        <p>If you have any doubts related to the notes or concepts, you can use this beautiful feature of chatbot with the experts provided by prepNotes.</p>\n      </div>\n\n      <div class=\"col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start\">\n        <div class=\"icon_container d-flex flex-column justify-content-end\">\n          <img src=\"assets/img/blackboard.svg\" alt=\"\">\n        </div>\n        <h3>Top Contestants</h3>\n        <p>In Dashboard, the rankings are displayed as per your quiz scores. Top winners of each quiz are also highlighted in every user Dashboard.</p>\n      </div>\n\n      <div class=\"col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start\">\n        <div class=\"icon_container d-flex flex-column justify-content-end\">\n          <img src=\"assets/img/mortarboard.svg\" alt=\"\">\n        </div>\n        <h3>International Quiz Certificate</h3>\n        <p>Some International level quiz are also organized and if your performance is good you also get a certificate in association with prepNotes.</p>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\t<!-- Testimonials -->\n\n\t<div class=\"testimonials page_section\">\n\t\t<!-- <div class=\"testimonials_background\" style=\"background-image:url(assets/img/testimonials_background.jpg)\"></div> -->\n\t\t<div class=\"testimonials_background_container prlx_parent\">\n\t\t\t<div class=\"testimonials_background prlx\" style=\"background-image:url(assets/img/testimonials_background.jpg)\"></div>\n\t\t</div>\n\t\t<div class=\"container\">\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<div class=\"section_title text-center\">\n\t\t\t\t\t\t<h1>What our students say</h1>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-10 offset-lg-1\">\n\n\t\t\t\t\t<div class=\"testimonials_slider_container\">\n\n\t\t\t\t\t\t<!-- Testimonials Slider -->\n\t\t\t\t\t\t<div class=\"owl-carousel owl-theme testimonials_slider\">\n\t\t\t\t\t\t\t<!-- Testimonials Item -->\n\t\t\t\t\t\t\t<div class=\"owl-item\">\n\t\t\t\t\t\t\t\t<div class=\"testimonials_item text-center\">\n\t\t\t\t\t\t\t\t\t<div class=\"quote\">“</div>\n\t\t\t\t\t\t\t\t\t<p class=\"testimonials_text\">prepNotes made it easy to get notes in one go.The quality of notes is just amazing.\n\t\t\t\t\t\t\t\t\t\t<br> I need notes in less time, I also refer prepNotes!&nbsp; Thank-you for making my experience better.</p>\n\t\t\t\t\t\t\t\t\t<div class=\"testimonial_user\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"testimonial_image mx-auto\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/testimonials_user.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"testimonial_name\">james cooper</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"testimonial_title\">Graduate Student</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<!-- Testimonials Item -->\n\t\t\t\t\t\t\t<div class=\"owl-item\">\n\t\t\t\t\t\t\t\t<div class=\"testimonials_item text-center\">\n\t\t\t\t\t\t\t\t\t<div class=\"quote\">“</div>\n\t\t\t\t\t\t\t\t\t<p class=\"testimonials_text\">prepNotes made it easy to get notes in one go.The quality of notes is just amazing.\n\t\t\t\t\t\t\t\t\t\t<br> I need notes in less time, I also refer prepNotes!&nbsp; Thank-you for making my experience better.</p>\n\t\t\t\t\t\t\t\t\t<div class=\"testimonial_user\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"testimonial_image mx-auto\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/testimonials_user.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"testimonial_name\">james cooper</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"testimonial_title\">Graduate Student</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<!-- Testimonials Item -->\n\t\t\t\t\t\t\t<div class=\"owl-item\">\n\t\t\t\t\t\t\t\t<div class=\"testimonials_item text-center\">\n\t\t\t\t\t\t\t\t\t<div class=\"quote\">“</div>\n\t\t\t\t\t\t\t\t\t<p class=\"testimonials_text\">prepNotes made it easy to get notes in one go.The quality of notes is just amazing.\n\t\t\t\t\t\t\t\t\t\t<br> I need notes in less time, I also refer prepNotes!&nbsp; Thank-you for making my experience better.</p>\n\t\t\t\t\t\t\t\t\t<div class=\"testimonial_user\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"testimonial_image mx-auto\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/testimonials_user.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"testimonial_name\">james cooper</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"testimonial_title\">Graduate Student</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\n  <div class=\"events page_section\">\n\t\t<div class=\"container\">\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<div class=\"section_title text-center\">\n\t\t\t\t\t\t<h1>Upcoming Events</h1>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"event_items\">\n\n\t\t\t\t<!-- Event Item -->\n\t\t\t\t<div class=\"row event_item\">\n\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t<div class=\"row d-flex flex-row align-items-end\">\n\n\t\t\t\t\t\t\t<div class=\"col-lg-2 order-lg-1 order-2\">\n\t\t\t\t\t\t\t\t<div class=\"event_date d-flex flex-column align-items-center justify-content-center\">\n\t\t\t\t\t\t\t\t\t<div class=\"event_day\">20</div>\n\t\t\t\t\t\t\t\t\t<div class=\"event_month\">March</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-lg-6 order-lg-2 order-3\">\n\t\t\t\t\t\t\t\t<div class=\"event_content\">\n\t\t\t\t\t\t\t\t\t<div class=\"event_name\"><a class=\"trans_200\" href=\"#\">TED-Talk on Upcoming technologies.</a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"event_location\">Grand Central Park</div>\n\t\t\t\t\t\t\t\t\t<p>Do attend the TED-Talk by Steve McIntosh on Upcoming technologies, oraganised & sponsered by prepNotes.</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-lg-4 order-lg-3 order-1\">\n\t\t\t\t\t\t\t\t<div class=\"event_image\">\n\t\t\t\t\t\t\t\t\t<img src=\"assets/img/event_1.jpg\" alt=\"https://unsplash.com/@theunsteady5\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Event Item -->\n\t\t\t\t<div class=\"row event_item\">\n\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t<div class=\"row d-flex flex-row align-items-end\">\n\n\t\t\t\t\t\t\t<div class=\"col-lg-2 order-lg-1 order-2\">\n\t\t\t\t\t\t\t\t<div class=\"event_date d-flex flex-column align-items-center justify-content-center\">\n\t\t\t\t\t\t\t\t\t<div class=\"event_day\">27</div>\n\t\t\t\t\t\t\t\t\t<div class=\"event_month\">June</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-lg-6 order-lg-2 order-3\">\n\t\t\t\t\t\t\t\t<div class=\"event_content\">\n\t\t\t\t\t\t\t\t\t<div class=\"event_name\"><a class=\"trans_200\" href=\"#\">Open day in the University Campus, Delhi</a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"event_location\">DU, Delhi</div>\n\t\t\t\t\t\t\t\t\t<p>In this events various technical and general level quizs are organized at DU College, Delhi. Do participate in large numbers and win existing prizes.</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-lg-4 order-lg-3 order-1\">\n\t\t\t\t\t\t\t\t<div class=\"event_image\">\n\t\t\t\t\t\t\t\t\t<img src=\"assets/img/event_2.jpg\" alt=\"https://unsplash.com/@claybanks1989\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Event Item -->\n\t\t\t\t<div class=\"row event_item\">\n\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t<div class=\"row d-flex flex-row align-items-end\">\n\n\t\t\t\t\t\t\t<div class=\"col-lg-2 order-lg-1 order-2\">\n\t\t\t\t\t\t\t\t<div class=\"event_date d-flex flex-column align-items-center justify-content-center\">\n\t\t\t\t\t\t\t\t\t<div class=\"event_day\">09</div>\n\t\t\t\t\t\t\t\t\t<div class=\"event_month\">October</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-lg-6 order-lg-2 order-3\">\n\t\t\t\t\t\t\t\t<div class=\"event_content\">\n\t\t\t\t\t\t\t\t\t<div class=\"event_name\"><a class=\"trans_200\" href=\"#\">Inter-College Coding Events</a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"event_location\">Grand Central Park</div>\n\t\t\t\t\t\t\t\t\t<p>Students across different parts of India are invited to participate in this coding event oraganised by prepNotes.Languages used are python/ C++ / Java. Participate soon !!</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-lg-4 order-lg-3 order-1\">\n\t\t\t\t\t\t\t\t<div class=\"event_image\">\n\t\t\t\t\t\t\t\t\t<img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdd5H-bpmbRFvzyvzUfQx21k_pXEowoW3ExZy3LXQS_hTrhBZT&s\" alt=\"https://unsplash.com/@juanmramosjr\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notes/notes.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notes/notes.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"padding-top: 15%;\">\n<mat-card class=\"box\">\n    <mat-card-header>\n      <mat-card-title>Notes Making</mat-card-title>\n    </mat-card-header>\n    <form class=\"example-form\" [formGroup]='form' (submit) = 'onSubmit()'>\n\n      <h3 align='center'>Please Select a docx file</h3>\n        <div align='center'>\n          <button mat-stroked-button type='button' (click)='filePicker.click()'>Pick File</button>\n          <input type=\"file\" #filePicker (change)='onImagePicked($event)'>\n      <div *ngFor=\"let item of noFile\">\n        <div *ngIf='form.value[item]'>\n            <div class=\"file-preview\" *ngIf=\"imagePreview !== '' && imagePreview\">\n                <img style=\"top:-4px\" src=\"assets/img/a.png\" />\n                <h4 style='display:inline;padding-left: 5px;'>{{form.value[item].name}} </h4>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div align='center'>\n        <button  mat-stroked-button *ngIf='submitBut' type=\"submit\" >Generate Notes</button>\n        <h4 *ngIf='waitingForDownload'>Processing Documents.Please wait..</h4>\n        <mat-spinner *ngIf='waitingForDownload'></mat-spinner>\n        <button type='button' *ngIf = 'downloadisReady' mat-stroked-button color=\"accent\" (click) = 'Download()'>Download Notes</button>\n      </div>\n    </form>\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/password-reset/password-reset.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/password-reset/password-reset.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <mat-card class=\"box\" style=\"top:140px; width: 100%;\">\n    <mat-card-header>\n      <mat-card-title style=\"font-size:26px\">Password Reset</mat-card-title>\n    </mat-card-header>\n    <mat-error *ngIf='errorMailSending'>Error in sending Password Reset mail</mat-error>\n    <form class=\"example-form\" [formGroup] = 'form' (submit) ='onSubmit()'>\n      <mat-card-content>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Email\" formControlName = email>\n          <mat-error *ngIf=\"form.get('email').invalid\">Enter a valid Email</mat-error>\n        </mat-form-field>\n      </mat-card-content>\n      <button mat-stroked-button color=\"accent\" class=\"btn-block\" type=\"submit\">Send Password Reset Mail</button>\n    </form>\n  </mat-card>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/question-answers/question-answers.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/question-answers/question-answers.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-wrapper\" style=\"padding-top: 25%;padding-bottom: 15%;\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <mat-card class=\"box\" style=\"top:30%\">\n    <mat-card-header>\n      <mat-card-title>Q and A</mat-card-title>\n    </mat-card-header>\n    <form class=\"example-form\" [formGroup]='form' (submit) = 'onSubmit()'>\n      <div align='center'>\n        <button mat-stroked-button type='button' (click)='filePicker.click()'>Pick File</button>\n        <input type=\"file\" #filePicker (change)='onImagePicked($event)'>\n      <div class=\"file-preview\" *ngIf=\"imagePreview !== '' && imagePreview && form.get('file').valid\">\n          <img src=\"assets/img/a.png\">\n          <h4  style='display:inline;padding-left: 5px;top :-10px;'>{{form.value.file.name}} </h4>\n      </div>\n        <button *ngIf='submitBut' type=\"submit\" mat-stroked-button color=\"accent\" class=\"btn-block\">Upload File</button>\n        <h4 *ngIf='Upload'>Processing Documents.Please wait..</h4>\n      </div>\n    </form>\n    <mat-spinner *ngIf=\"Upload && !submitBut\"></mat-spinner>\n    <mat-card *ngIf=\"!Upload && !submitBut\" style=\"margin-top: 50px; top: 50px;\">\n      <form [formGroup]=\"form2\" (submit) ='askQuestion()' >\n        <mat-form-field>\n        <input matInput  type=\"text\" formControlName=\"question\" name=\"title\" placeholder=\"Enter Your Question.\">\n        <mat-error *ngIf=\"form2.get('question').invalid\">Please enter a valid question</mat-error>\n      </mat-form-field>\n    <button mat-raised-button\n      color='accent' type=\"submit\">Ask</button>\n    </form>\n  </mat-card>\n  <mat-accordion style=\"position: relative; top: 30px;\" *ngIf=\"qNa\" multi='true'>\n    <mat-expansion-panel *ngFor=\"let item of qNa\">\n      <mat-expansion-panel-header>\n        {{item.question}}\n        <div id=\"share-buttons\">\n\n\n\n          <!-- Email -->\n          <a href=\"mailto:?Subject=Question Answer &amp;Body={{item.question}}%20{{item.answer}}\">\n              <img src=\"https://simplesharebuttons.com/images/somacro/email.png\" alt=\"Email\" />\n          </a>\n\n          <!-- Facebook -->\n          <a href=\"http://www.facebook.com/sharer.php?u={{item.question}}%20{{item.answer}}\" target=\"_blank\">\n              <img src=\"https://simplesharebuttons.com/images/somacro/facebook.png\" alt=\"Facebook\" />\n          </a>\n\n\n          <!-- LinkedIn -->\n          <a href=\"http://www.linkedin.com/shareArticle?mini=true&amp;url=https://simplesharebuttons.com\" target=\"_blank\">\n              <img src=\"https://simplesharebuttons.com/images/somacro/linkedin.png\" alt=\"LinkedIn\" />\n          </a>\n\n          <!-- Print -->\n          <a href=\"javascript:;\" onclick=\"window.print()\">\n              <img src=\"https://simplesharebuttons.com/images/somacro/print.png\" alt=\"Print\" />\n          </a>\n\n\n\n\n          <!-- Twitter -->\n          <a href=\"https://twitter.com/share?url=https://simplesharebuttons.com&amp;text=Simple%20Share%20Buttons&amp;hashtags=simplesharebuttons\" target=\"_blank\">\n              <img src=\"https://simplesharebuttons.com/images/somacro/twitter.png\" alt=\"Twitter\" />\n          </a>\n\n\n        <a href=\"whatsapp://send?text={{item.question}}%20{{item.answer}}\"><img src=\"assets/img/whatsapp.png\" alt=\"WhatsApp\" style=\"border-radius: 100%\" /></a>\n\n      </div>\n      </mat-expansion-panel-header>\n     <p *ngIf='! (item.answer == \"\") ' > {{item.answer}}</p>\n     <p *ngIf=' (item.answer == \"\") ' > No answer Found</p>\n    </mat-expansion-panel>\n  </mat-accordion>\n  <p *ngIf ='!qNa' class =\"info-text mat-body-1\" >No questions Asked</p>\n</mat-card>\n\n</div>\n<footer class=\"footer\" style=\"position: sticky; height: 30%;padding-top:0px;padding-bottom: 0px;\">\n  <div class=\"container\">\n\n    <!-- Newsletter -->\n\n\n    <!-- Footer Content -->\n\n    <div class=\"footer_content\">\n      <div class=\"row\">\n\n        <!-- Footer Column - About -->\n        <div class=\"col-lg-3 footer_col\">\n\n          <!-- Logo -->\n          <div class=\"logo_container\">\n            <div class=\"logo\">\n              <img src=\"assets/img/logo.png\" alt=\"\">\n              <span>PrepNotes</span>\n            </div>s\n          </div>\n\n\n        </div>\n\n        <!-- Footer Column - Menu -->\n\n        <div class=\"col-lg-3 footer_col\">\n          <div class=\"footer_column_title\">Menu</div>\n          <div class=\"footer_column_content\">\n            <ul>\n              <li class=\"footer_list_item\"><a routerLink='/homePage' routerLinkActive='active'>Home</a></li>\n                <li class=\"footer_list_item\"><a >About Us</a></li>\n                <li class=\"footer_list_item\"><a >Ask Questions</a></li>\n                <li class=\"footer_list_item\"><a >Notes</a></li>\n                <li class=\"footer_list_item\"><a >contact us</a></li>\n                </ul>\n          </div>\n        </div>\n\n        <!-- Footer Column - Usefull Links -->\n\n        <div class=\"col-lg-3 footer_col\">\n          <div class=\"footer_column_title\">Usefull Links</div>\n          <div class=\"footer_column_content\">\n            <ul>\n              <li class=\"footer_list_item\"><a >Testimonials</a></li>\n              <li class=\"footer_list_item\"><a >Tutorials</a></li>\n            </ul>\n          </div>\n        </div>\n\n        <!-- Footer Column - Contact -->\n\n        <div class=\"col-lg-3 footer_col\">\n          <div class=\"footer_column_title\">Contact</div>\n          <div class=\"footer_column_content\">\n            <ul>\n              <li class=\"footer_contact_item\">\n                <div class=\"footer_contact_icon\">\n                  <img src=\"assets/img/placeholder.svg\" alt=\"https://www.flaticon.com/authors/lucy-g\">\n                </div>\n                KLS GIT\n              </li>\n              <li class=\"footer_contact_item\">\n                <div class=\"footer_contact_icon\">\n                  <img src=\"assets/img/smartphone.svg\" alt=\"https://www.flaticon.com/authors/lucy-g\">\n                </div>\n                +91 9988776655\n              </li>\n              <li class=\"footer_contact_item\">\n                <div class=\"footer_contact_icon\">\n                  <img src=\"assets/img/envelope.svg\" alt=\"https://www.flaticon.com/authors/lucy-g\">\n                </div>queston@notes.com\n              </li>\n            </ul>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <!-- Footer Copyright -->\n\n\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-wrapper\"  fxLayout=\"row\" fxLayoutAlign=\"center center\">\n\n  <mat-card class=\"box\" style=\"top:130px; width: 100%;\">\n    <mat-card-header>\n      <mat-card-title>Registration</mat-card-title>\n    </mat-card-header>\n    <mat-error *ngIf='userCreateError'>Email already exists try again</mat-error>\n\n    <form class=\"example-form\" [formGroup] = 'form' (submit) ='onSubmit()'>\n      <mat-card-content>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput formControlName ='uName' placeholder=\"Username\">\n          <mat-error *ngIf=\"form.get('uName').invalid\">Enter a valid username</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput formControlName ='email' placeholder=\"Email\">\n          <mat-error *ngIf=\"form.get('email').invalid\">Enter a valid Email</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input type=\"password\" matInput formControlName ='password' placeholder=\"Password\">\n          <mat-error *ngIf=\"form.get('password').invalid\">Enter a valid password</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input type=\"password\" matInput formControlName ='cpassword' placeholder=\"Confirm Password\">\n          <mat-error *ngIf=\"(form.get('cpassword').invalid)\">Password invalid</mat-error>\n          <mat-error *ngIf=\"form.value.password !== form.value.cpassword\">Password do not match</mat-error>\n        </mat-form-field>\n\n      </mat-card-content>\n      <button mat-stroked-button color=\"accent\" class=\"btn-block\" type=\"submit\">Register</button>\n    </form>\n  </mat-card>\n\n</div>\n<div class=\"menu_container menu_mm\">\n\n  <!-- Menu Close Button -->\n  <div class=\"menu_close_container\">\n    <div class=\"menu_close\"></div>\n  </div>\n\n  <!-- Menu Items -->\n  <div class=\"menu_inner menu_mm\">\n    <div class=\"menu menu_mm\">\n      <ul class=\"menu_list menu_mm\">\n        <li class=\"menu_item menu_mm\"><a routerLink='/mainPage' routerLinkActive='active'>Home</a></li>\n        <li class=\"menu_item menu_mm\"><a href=\"#\">About us</a></li>\n        <li class=\"menu_item menu_mm\"><a >Courses</a></li>\n        <li class=\"menu_item menu_mm\"><a href=\"elements.html\">Elements</a></li>\n        <li class=\"menu_item menu_mm\"><a href=\"news.html\">News</a></li>\n        <li class=\"menu_item menu_mm\"><a href=\"contact.html\">Contact</a></li>\n      </ul>\n\n      <!-- Menu Social -->\n\n      <div class=\"menu_social_container menu_mm\">\n        <ul class=\"menu_social menu_mm\">\n          <li class=\"menu_social_item menu_mm\"><a href=\"#\"><i class=\"fab fa-pinterest\"></i></a></li>\n          <li class=\"menu_social_item menu_mm\"><a href=\"#\"><i class=\"fab fa-linkedin-in\"></i></a></li>\n          <li class=\"menu_social_item menu_mm\"><a href=\"#\"><i class=\"fab fa-instagram\"></i></a></li>\n          <li class=\"menu_social_item menu_mm\"><a href=\"#\"><i class=\"fab fa-facebook-f\"></i></a></li>\n          <li class=\"menu_social_item menu_mm\"><a href=\"#\"><i class=\"fab fa-twitter\"></i></a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n <!-- <div class=\"modal fade\" id=\"darkModalForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n aria-hidden=\"true\" >\n <div class=\"modal-dialog form-dark\" role=\"document\">\n   <form action=\"/examples/actions/confirmation.php\" method=\"post\">\n     <div class=\"modal-content card card-image\" style=\"background-image: url(https://www.ecampusnews.com/files/2016/10/etextbook.jpg);\">\n       <div class=\"text-white rgba-stylish-strong py-5 px-5 z-depth-4\">\n         <div class=\"signup-form\">\n           <h2>Register</h2>\n           <p class=\"hint-text\">Create your account. It's free and only takes a minute.</p>\n           <div class=\"form-group\">\n             <input type=\"text\" class=\"form-control\" name=\"first_name\" placeholder=\"First Name\" required=\"required\">\n           </div>\n           <div class=\"form-group\">\n             <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\" required=\"required\">\n           </div>\n           <div class=\"form-group\">\n             <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" required=\"required\">\n           </div>\n           <div class=\"form-group\">\n             <input type=\"password\" class=\"form-control\" name=\"confirm_password\" placeholder=\"Confirm Password\" required=\"required\">\n           </div>\n           <div class=\"form-group\">\n             <label class=\"checkbox-inline\"><input type=\"checkbox\" required=\"required\"> I accept the <a href=\"#\">Terms of Use</a> &amp; <a href=\"#\">Privacy Policy</a></label>\n           </div>\n           <div class=\"form-group\">\n             <button type=\"submit\" class=\"btn btn-success btn-lg btn-block\">Register Now</button>\n           </div>\n           <div class=\"text-center\">Already have an account? <a href=\"#\">Sign in</a></div>\n         </div>\n       </div>\n     </div>\n   </form>\n </div>\n</div> -->\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/angular-material.module.ts":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let AngularMaterialModule = class AngularMaterialModule {
};
AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"]
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"]
        ],
        providers: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
        ]
    })
], AngularMaterialModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/log-in/log-in.component */ "./src/app/components/log-in/log-in.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/components/home-page/home-page.component.ts");
/* harmony import */ var _components_question_answers_question_answers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/question-answers/question-answers.component */ "./src/app/components/question-answers/question-answers.component.ts");
/* harmony import */ var _components_notes_notes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/notes/notes.component */ "./src/app/components/notes/notes.component.ts");
/* harmony import */ var _components_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/password-reset/password-reset.component */ "./src/app/components/password-reset/password-reset.component.ts");
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/main-page/main-page.component */ "./src/app/components/main-page/main-page.component.ts");










const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'mainPage' },
    { path: 'mainPage', component: _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_9__["MainPageComponent"] },
    { path: 'login', component: _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__["LogInComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'homePage', component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"] },
    { path: 'questionAnswers', component: _components_question_answers_question_answers_component__WEBPACK_IMPORTED_MODULE_6__["QuestionAnswersComponent"] },
    { path: 'notes', component: _components_notes_notes_component__WEBPACK_IMPORTED_MODULE_7__["NotesComponent"] },
    { path: 'passwordReset', component: _components_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_8__["PasswordResetComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'mainPage' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800|Roboto:400,500,700');\n/* CSS Document */\n/******************************\r\n\r\nCOLOR PALETTE\r\n\r\n\r\n\r\n\r\n[Table of Contents]\r\n\r\n1. Fonts\r\n2. Body and some general stuff\r\n3. Header\r\n\t3.1 Logo\r\n\t3.2 Main Nav\r\n\t3.3 Header Side\r\n\t3.4 Hamburger\r\n4. Menu\r\n\t4.1 Menu Social\r\n\t4.2 Menu copyright\r\n5. Home\r\n\t5.1 Hero Slider\r\n\t5.2 Hero Slider Navigation\r\n6. Hero Boxes\r\n7. Page Section\r\n8. Buttons\r\n9. Popular\r\n10. Register\r\n11. Search\r\n\t11.1 Search Form\r\n12. Services\r\n13. Testimonials\r\n14. Events\r\n15. Footer\r\n\t15.1 Newsletter\r\n\t15.2 Footer Content\r\n\t15.3 Footer Copyright\r\n\r\n\r\n******************************/\n/***********\r\n1. Fonts\r\n***********/\n/*********************************\r\n2. Body and some general stuff\r\n*********************************/\n*\r\n{\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;\r\n\ttext-shadow: rgba(0,0,0,.01) 0 0 1px;\r\n}\nbody\r\n{\r\n\tfont-family: 'Roboto', sans-serif;\r\n\tfont-size: 14px;\r\n\tfont-weight: 400;\r\n\tbackground: #FFFFFF;\r\n\tcolor: #a5a5a5;\r\n}\ndiv\r\n{\r\n\tdisplay: block;\r\n\tposition: relative;\r\n box-sizing: border-box;\r\n}\nul\r\n{\r\n\tlist-style: none;\r\n\tmargin-bottom: 0px;\r\n}\np\r\n{\r\n\tfont-family: 'Roboto', sans-serif;\r\n\tfont-size: 14px;\r\n\tline-height: 2.29;\r\n\tfont-weight: 400;\r\n\tcolor: #a5a5a5;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;\r\n\ttext-shadow: rgba(0,0,0,.01) 0 0 1px;\r\n}\np a\r\n{\r\n\tdisplay: inline;\r\n\tposition: relative;\r\n\tcolor: inherit;\r\n\tborder-bottom: solid 1px #ffa07f;\r\n\t-webkit-transition: all 200ms ease;\r\n\ttransition: all 200ms ease;\r\n}\na, a:hover, a:visited, a:active, a:link\r\n{\r\n\ttext-decoration: none;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;\r\n\ttext-shadow: rgba(0,0,0,.01) 0 0 1px;\r\n}\np a:active\r\n{\r\n\tposition: relative;\r\n\tcolor: #FF6347;\r\n}\np a:hover\r\n{\r\n\tcolor: #FFFFFF;\r\n\tbackground: #ffa07f;\r\n}\np a:hover::after\r\n{\r\n\topacity: 0.2;\r\n}\n::-moz-selection\r\n{\r\n\tbackground: #FFD266;\r\n\tcolor: #C88E00;\r\n}\n::selection\r\n{\r\n\tbackground: #FFD266;\r\n\tcolor: #C88E00;\r\n}\np::-moz-selection\r\n{\r\n\tbackground: #FFD266;\r\n\tcolor: #C88E00;\r\n}\np::selection\r\n{\r\n\tbackground: #FFD266;\r\n\tcolor: #C88E00;\r\n}\nh1{font-size: 36px;}\nh2{font-size: 22px;}\nh3{font-size: 18px;}\nh4{font-size: 14px;}\nh5{font-size: 11px;}\nh1, h2, h3, h4, h5, h6\r\n{\r\n\tfont-family: 'Roboto', sans-serif;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;\r\n\ttext-shadow: rgba(0,0,0,.01) 0 0 1px;\r\n}\nh1::-moz-selection,\r\nh2::-moz-selection,\r\nh3::-moz-selection,\r\nh4::-moz-selection,\r\nh5::-moz-selection,\r\nh6::-moz-selection\r\n{\r\n\r\n}\nh1::selection,\r\nh2::selection,\r\nh3::selection,\r\nh4::selection,\r\nh5::selection,\r\nh6::selection\r\n{\r\n\r\n}\n::-webkit-input-placeholder\r\n{\r\n\tfont-size: 14px !important;\r\n\tfont-weight: 500 !important;\r\n\tcolor: #a5a5a5 !important;\r\n}\n:-moz-placeholder /* older Firefox*/\r\n{\r\n\tfont-size: 14px !important;\r\n\tfont-weight: 500 !important;\r\n\tcolor: #a5a5a5 !important;\r\n}\n::-moz-placeholder /* Firefox 19+ */\r\n{\r\n\tfont-size: 14px !important;\r\n\tfont-weight: 500 !important;\r\n\tcolor: #a5a5a5 !important;\r\n}\n:-ms-input-placeholder\r\n{\r\n\tfont-size: 14px !important;\r\n\tfont-weight: 500 !important;\r\n\tcolor: #a5a5a5 !important;\r\n}\n::input-placeholder\r\n{\r\n\tfont-size: 14px !important;\r\n\tfont-weight: 500 !important;\r\n\tcolor: #a5a5a5 !important;\r\n}\n.form-control\r\n{\r\n\tcolor: #db5246;\r\n}\nsection\r\n{\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\tbox-sizing: border-box;\r\n}\n.clear\r\n{\r\n\tclear: both;\r\n}\n.clearfix::before, .clearfix::after\r\n{\r\n\tcontent: \"\";\r\n\tdisplay: table;\r\n}\n.clearfix::after\r\n{\r\n\tclear: both;\r\n}\n.clearfix\r\n{\r\n\tzoom: 1;\r\n}\n.float_left\r\n{\r\n\tfloat: left;\r\n}\n.float_right\r\n{\r\n\tfloat: right;\r\n}\n.trans_200\r\n{\r\n\t-webkit-transition: all 200ms ease;\r\n\ttransition: all 200ms ease;\r\n}\n.trans_300\r\n{\r\n\t-webkit-transition: all 300ms ease;\r\n\ttransition: all 300ms ease;\r\n}\n.trans_400\r\n{\r\n\t-webkit-transition: all 400ms ease;\r\n\ttransition: all 400ms ease;\r\n}\n.trans_500\r\n{\r\n\t-webkit-transition: all 500ms ease;\r\n\ttransition: all 500ms ease;\r\n}\n.fill_height\r\n{\r\n\theight: 100%;\r\n}\n.super_container\r\n{\r\n\twidth: 100%;\r\n\toverflow: hidden;\r\n}\n.prlx_parent\r\n{\r\n\toverflow: hidden;\r\n}\n.prlx\r\n{\r\n\theight: 130% !important;\r\n}\n.nopadding\r\n{\r\n\tpadding: 0px !important;\r\n}\n/*********************************\r\n3. Header\r\n*********************************/\n.header\r\n{\r\n\tposition: fixed;\r\n\ttop: 45px;\r\n\tleft: 50%;\r\n\t-webkit-transform: translateX(-50%);\r\n\ttransform: translateX(-50%);\r\n\twidth: 1318px;\r\n\theight: 104px;\r\n\tbackground: #FFFFFF;\r\n\tz-index: 10;\r\n\t-webkit-transition: all 200ms ease;\r\n\ttransition: all 200ms ease;\r\n}\n.header.scrolled\r\n{\r\n\ttop: 15px;\r\n}\n.header.scrolled .header_content::before\r\n{\r\n\tbox-shadow: 0px 20px 49px rgba(0,0,0,0.17);\r\n}\n.header_content\r\n{\r\n\twidth: calc(100% - 279px);\r\n\theight: 100%;\r\n}\n.header_content::before\r\n{\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tcontent: '';\r\n\tbox-shadow: 0px 20px 49px rgba(0,0,0,0.67);\r\n\tz-index: -1;\r\n}\n/*********************************\r\n3.1 Logo\r\n*********************************/\n.logo_container\r\n{\r\n\tdisplay: inline-block;\r\n\tpadding-left: 76px;\r\n}\n.logo span\r\n{\r\n\tfont-family: 'Open Sans', sans-serif;\r\n\tfont-size: 30px;\r\n\tfont-weight: 900;\r\n\tcolor: #3a3a3a;\r\n\tvertical-align: middle;\r\n\ttext-transform: uppercase;\r\n\tmargin-left: 3px;\r\n}\n/*********************************\r\n3.2 Main Nav\r\n*********************************/\n.main_nav_container\r\n{\r\n\tdisplay: inline-block;\r\n\tmargin-left: auto;\r\n\tpadding-right: 93px;\r\n}\n.main_nav\r\n{\r\n\tmargin-top: 7px;\r\n}\n.main_nav_item\r\n{\r\n\tdisplay: inline-block;\r\n\tmargin-right: 40px;\r\n}\n.main_nav_item:last-child\r\n{\r\n\tmargin-right: 0px;\r\n}\n.main_nav_item a\r\n{\r\n\tfont-family: 'Open Sans', sans-serif;\r\n\tfont-size: 14px;\r\n\ttext-transform: uppercase;\r\n\tfont-weight: 700;\r\n\tcolor: #3a3a3a;\r\n\t-webkit-transition: all 200ms ease;\r\n\ttransition: all 200ms ease;\r\n}\n.main_nav_item a:hover\r\n{\r\n\tcolor: #ffb606;\r\n}\n/*********************************\r\n3.3 Header Side\r\n*********************************/\n.header_side\r\n{\r\n\twidth: 279px;\r\n\theight: 100%;\r\n\tbackground: #ffb606;\r\n}\n.header_side img\r\n{\r\n\twidth: 29px;\r\n\theight: 29px;\r\n}\n.header_side span\r\n{\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\tfont-size: 18px;\r\n\tfont-weight: 500;\r\n\tcolor: #FFFFFF;\r\n\tpadding-left: 12px;\r\n}\n/*********************************\r\n3.4 Hamburger\r\n*********************************/\n.hamburger_container\r\n{\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\t-webkit-transform: translateY(-50%);\r\n\ttransform: translateY(-50%);\r\n\tright: 20px;\r\n\tdisplay: none;\r\n\tcursor: pointer;\r\n}\n.hamburger_container i\r\n{\r\n\tfont-size: 24px;\r\n\tpadding: 10px;\r\n\tcolor: #3a3a3a;\r\n}\n.hamburger_container:hover i\r\n{\r\n\tcolor: #ffb606;\r\n}\n/*********************************\r\n4. Menu\r\n*********************************/\n.menu_container\r\n{\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tright: -50vw;\r\n\twidth: 50vw;\r\n\theight: 100vh;\r\n\tbackground: #FFFFFF;\r\n\tz-index: 12;\r\n\t-webkit-transition: all 0.6s ease;\r\n\ttransition: all 0.6s ease;\r\n\tvisibility: hidden;\r\n\topacity: 0;\r\n}\n.menu_container.active\r\n{\r\n\tvisibility: visible;\r\n\topacity: 1;\r\n\tright: 0;\r\n}\n.menu\r\n{\r\n\tposition: absolute;\r\n\ttop:150px;\r\n\tleft: 0;\r\n\tpadding-left: 15%;\r\n}\n.menu_list\r\n{\r\n\t-webkit-transform: translateY(3.5rem);\r\n\ttransform: translateY(3.5rem);\r\n\t-webkit-transition: all 200ms ease;\r\n\t-webkit-transition: all 1000ms 600ms ease;\r\n\ttransition: all 1000ms 600ms ease;\r\n\topacity: 0;\r\n}\n.menu_container.active .menu_list\r\n{\r\n\t-webkit-transform: translateY(0px);\r\n\ttransform: translateY(0px);\r\n\topacity: 1;\r\n}\n.menu_item\r\n{\r\n\tmargin-bottom: 9px;\r\n}\n.menu_item a\r\n{\r\n\tfont-family: 'Open Sans', sans-serif;\r\n\tfont-size: 36px;\r\n\tfont-weight: 700;\r\n\tcolor: #3a3a3a;\r\n\t-webkit-transition: all 200ms ease;\r\n\ttransition: all 200ms ease;\r\n}\n.menu_item a:hover\r\n{\r\n\tcolor: #ffb606;\r\n}\n.menu_close_container\r\n{\r\n\tposition: absolute;\r\n\ttop: 86px;\r\n\tright: 79px;\r\n\twidth: 21px;\r\n\theight: 21px;\r\n\tcursor: pointer;\r\n\t-webkit-transform: rotate(45deg);\r\n\ttransform: rotate(45deg);\r\n}\n.menu_close\r\n{\r\n\ttop: 9px;\r\n\twidth: 21px;\r\n\theight: 3px;\r\n\tbackground: #3a3a3a;\r\n\t-webkit-transition: all 200ms ease;\r\n\ttransition: all 200ms ease;\r\n}\n.menu_close::after\r\n{\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: -9px;\r\n\tleft: 9px;\r\n\tcontent: '';\r\n\twidth: 3px;\r\n\theight: 21px;\r\n\tbackground: #3a3a3a;\r\n\t-webkit-transition: all 200ms ease;\r\n\ttransition: all 200ms ease;\r\n}\n.menu_close_container:hover .menu_close,\r\n.menu_close_container:hover .menu_close::after\r\n{\r\n\tbackground: #ffb606;\r\n}\n/*********************************\r\n4.1 Menu Social\r\n*********************************/\n.menu_social_container\r\n{\r\n\tmargin-top: 100px;\r\n\t-webkit-transform: translateY(3.5rem);\r\n\ttransform: translateY(3.5rem);\r\n\t-webkit-transition: all 1000ms 1000ms ease;\r\n\ttransition: all 1000ms 1000ms ease;\r\n\topacity: 0;\r\n\tpadding-left: 4px;\r\n}\n.menu_social_item\r\n{\r\n\tdisplay: inline-block;\r\n\tmargin-right: 30px;\r\n}\n.menu_social_item a i\r\n{\r\n\tcolor: #3a3a3a;\r\n}\n.menu_social_item a i:hover\r\n{\r\n\tcolor: #ffb606;\r\n}\n.menu_container.active .menu_social_container\r\n{\r\n\t-webkit-transform: translateY(0px);\r\n\ttransform: translateY(0px);\r\n\topacity: 1;\r\n}\n/*********************************\r\n4.2 Menu copyright\r\n*********************************/\n.menu_copyright\r\n{\r\n\tmargin-top: 60px;\r\n\t-webkit-transform: translateY(3.5rem);\r\n\ttransform: translateY(3.5rem);\r\n\t-webkit-transition: all 1000ms 1200ms ease;\r\n\ttransition: all 1000ms 1200ms ease;\r\n\topacity: 0;\r\n\tpadding-left: 3px;\r\n}\n.menu_container.active .menu_copyright\r\n{\r\n\t-webkit-transform: translateY(0px);\r\n\ttransform: translateY(0px);\r\n\topacity: 1;\r\n}\n/*********************************\r\n5. Home\r\n*********************************/\n.home\r\n{\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n}\n/*********************************\r\n5.1 Hero Slider\r\n*********************************/\n.hero_slider_container\r\n{\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\n.hero_slide\r\n{\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\n.hero_slide_background\r\n{\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\tbackground-position: center center;\r\n}\n.hero_slide_container\r\n{\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n}\n.hero_slide_content\r\n{\r\n\tmax-width: 80%;\r\n\t-webkit-transform: translateY(30px);\r\n\ttransform: translateY(30px);\r\n}\n.hero_slide_content h1\r\n{\r\n\tfont-size: 72px;\r\n\tfont-weight: 400;\r\n\tcolor: #FFFFFF;\r\n}\n.hero_slide_content h1 span\r\n{\r\n\tbackground: #ffb606;\r\n\tpadding-left: 13px;\r\n\tpadding-right: 13px;\r\n\tmargin-left: -12px;\r\n\tmargin-right: -12px;\r\n}\n.animated\r\n{\r\n\t-webkit-animation-duration : 1s !important;\r\n\tanimation-duration : 1s !important;\r\n\t-webkit-animation-delay : 500ms;\r\n\tanimation-delay : 500ms;\r\n}\n.animate-out\r\n{\r\n\t-webkit-animation-delay : 0ms;\r\n\tanimation-delay : 0ms;\r\n}\n/*********************************\r\n5.2 Hero Slider Navigation\r\n*********************************/\n.hero_slider_nav\r\n{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t        flex-direction: column;\r\n\t-webkit-box-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\t-webkit-transform: translateY(-50%);\r\n\ttransform: translateY(calc(-50% + 30px));\r\n\twidth: 58px;\r\n\theight: 58px;\r\n\tbackground: transparent;\r\n\tz-index: 9;\r\n\tcursor: pointer;\r\n}\n.hero_slider_nav:hover\r\n{\r\n\tbackground: #ffb606;\r\n}\n.hero_slider_nav:hover span\r\n{\r\n\tcolor: #FFFFFF;\r\n}\n.hero_slider_nav span\r\n{\r\n\tdisplay: block;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 18px;\r\n\tfont-weight: 1000;\r\n\tcolor: white;\r\n\tline-height: 1;\r\n}\n.hero_slider_left\r\n{\r\n\tleft: 4.32%;\r\n}\n.hero_slider_right\r\n{\r\n\tright: 4.32%;\r\n}\n/*********************************\r\n6. Hero Boxes\r\n*********************************/\n.hero_boxes\r\n{\r\n\twidth: 100%;\r\n\theight: 0px;\r\n\tz-index: 9;\r\n\tpadding-top: 0px;\r\n}\n.hero_boxes_inner\r\n{\r\n\tposition: absolute;\r\n\ttop: -212px;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n}\n.hero_box\r\n{\r\n\twidth: 100%;\r\n\theight: 161px;\r\n\tbackground: #1a1a1a;\r\n\tpadding-left: 50px;\r\n\tcursor: pointer;\r\n}\n.hero_box:hover\r\n{\r\n\tbackground: #ffb606;\r\n}\n.hero_box img\r\n{\r\n\twidth: 62px;\r\n\theight: auto;\r\n\tmargin-top: -6px;\r\n}\n.svg path\r\n{\r\n\tfill: #ffb606;\r\n}\n.hero_box svg\r\n{\r\n\twidth: 62px;\r\n\theight: auto;\r\n}\n.hero_box:hover svg path\r\n{\r\n\tfill: #FFFFFF;\r\n}\n.hero_box_content\r\n{\r\n\tpadding-left: 13px;\r\n\tpadding-top: 11px;\r\n\tmargin-top: -6px;\r\n}\n.hero_box_title\r\n{\r\n\tfont-size: 24px;\r\n\tfont-weight: 500;\r\n\tcolor: #FFFFFF;\r\n\tmargin-bottom: 7px;\r\n}\n.hero_box_link\r\n{\r\n\tfont-size: 12px;\r\n\tfont-weight: 500;\r\n\ttext-transform: uppercase;\r\n\tcolor: #FFFFFF;\r\n\tpadding-left: 3px;\r\n}\n.hero_box_link:hover\r\n{\r\n\tcolor: #1a1a1a;\r\n}\n/*********************************\r\n7. Page Section\r\n*********************************/\n.page_section\r\n{\r\n\tpadding-top: 117px;\r\n\tpadding-bottom: 117px;\r\n}\n.section_title\r\n{\r\n\r\n}\n.section_title h1\r\n{\r\n\tdisplay: block;\r\n\tcolor: #1a1a1a;\r\n\tfont-weight: 500;\r\n\tpadding-top: 24px;\r\n}\n.section_title h1::before\r\n{\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 50%;\r\n\t-webkit-transform: translateX(-50%);\r\n\ttransform: translateX(-50%);\r\n\twidth: 55px;\r\n\theight: 4px;\r\n\tcontent: '';\r\n\tbackground: #ffb606;\r\n}\n/*********************************\r\n8. Buttons\r\n*********************************/\n.button\r\n{\r\n\tcursor: pointer;\r\n}\n.button:hover\r\n{\r\n\tbox-shadow: 0px 10px 20px rgba(0,0,0,0.2);\r\n}\n.button a\r\n{\r\n\tfont-size: 14px;\r\n\tline-height: 48px;\r\n\tfont-weight: 700;\r\n\ttext-transform: uppercase;\r\n}\n.button_1\r\n{\r\n\twidth: 202px;\r\n\theight: 48px;\r\n}\n/*********************************\r\n9. Popular\r\n*********************************/\n.popular\r\n{\r\n\r\n}\n.course_boxes\r\n{\r\n\tmargin-top: 68px;\r\n}\n.card\r\n{\r\n\tdisplay: block;\r\n\tbackground: #f8f9fb;\r\n\tborder: none;\r\n}\n.card-img-top\r\n{\r\n\tborder-top-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n}\n.card-body\r\n{\r\n\tpadding-top: 0px;\r\n\tpadding-bottom: 0px;\r\n\tpadding-left: 15px;\r\n\tpadding-right: 15px;\r\n}\n.card-title\r\n{\r\n\tmargin-top: 55px;\r\n}\n.card-title a\r\n{\r\n\tfont-size: 22px;\r\n\tfont-weight: 500;\r\n\tcolor: #1a1a1a;\r\n\tline-height: 1.2;\r\n}\n.card-title a:hover\r\n{\r\n\tcolor: #a5a5a5;\r\n}\n.card-text\r\n{\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tcolor: #a5a5a5;\r\n\tmargin-top: -12px;\r\n}\n.price_box\r\n{\r\n\twidth: 100%;\r\n\theight: 67px;\r\n\tbackground: #eaebec;\r\n\tmargin-top: 41px;\r\n\tpadding-left: 35px;\r\n}\n.course_author_image\r\n{\r\n\twidth: 46px;\r\n\theight: 46px;\r\n\tborder-radius: 50%;\r\n\toverflow: hidden;\r\n}\n.course_author_name\r\n{\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tcolor: #1a1a1a;\r\n\tpadding-left: 20px;\r\n\tmargin-top: 7px;\r\n}\n.course_author_name span\r\n{\r\n\tcolor: #a5a5a5;\r\n}\n.course_price\r\n{\r\n\twidth: 67px;\r\n\theight: 67px;\r\n\tbackground: #ffb606;\r\n\tmargin-left: auto;\r\n}\n.course_price span\r\n{\r\n\tcolor: #FFFFFF;\r\n\tfont-size: 18px;\r\n\tfont-weight: 500;\r\n\tmargin-top: 7px;\r\n}\n/*********************************\r\n10. Register\r\n*********************************/\n.register\r\n{\r\n\twidth: 100%;\r\n}\n.register_section\r\n{\r\n\twidth: 100%;\r\n\tbackground: #ffb606;\r\n\tpadding-top: 156px;\r\n\tpadding-bottom: 161px;\r\n}\n.register_content\r\n{\r\n\twidth: 522px;\r\n}\n.register_title\r\n{\r\n\tcolor: #FFFFFF;\r\n\tmargin-bottom: 16px;\r\n\tline-height: 1.63;\r\n}\n.register_title:last-child\r\n{\r\n\tmargin-bottom: 0px;\r\n}\n.register_title\tspan\r\n{\r\n\tcolor: #1a1a1a;\r\n}\n.register_text\r\n{\r\n\tcolor: #FFFFFF;\r\n\tfont-weight: 500;\r\n\tmargin-top: 32px;\r\n\tpadding-left: 25px;\r\n\tpadding-right: 25px;\r\n\tmargin-bottom: 0px;\r\n}\n.register_button\r\n{\r\n\tbackground: #1a1a1a;\r\n\tmargin-top: 65px;\r\n}\n.register_button a\r\n{\r\n\tcolor: #FFFFFF;\r\n}\n/*********************************\r\n11. Search\r\n*********************************/\n.search_section\r\n{\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground: #ececec;\r\n}\n.search_content\r\n{\r\n\twidth: 522px;\r\n}\n.search_background\r\n{\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: center center;\r\n\tbackground-size: cover;\r\n\topacity: 0.23;\r\n}\n.search_title\r\n{\r\n\tcolor: #1a1a1a;\r\n}\n/*********************************\r\n11.1 Search Form\r\n*********************************/\n.search_form\r\n{\r\n\tmargin-top: 57px;\r\n}\n.input_field\r\n{\r\n\twidth: 100%;\r\n\theight: 42px;\r\n\tbackground: #FFFFFF;\r\n\tbox-sizing: border-box;\r\n\tborder: solid 2px #FFFFFF;\r\n\tpadding-left: 25px;\r\n\tmargin-bottom: 24px;\r\n}\ninput:last-of-type\r\n{\r\n\tmargin-bottom: 0px;\r\n}\n.input_field:focus\r\n{\r\n\toutline: none !important;\r\n\tborder: solid 2px #ffb606;\r\n}\n.search_submit_button\r\n{\r\n\twidth: 100%;\r\n\theight: 48px;\r\n\tbackground: #ffb606;\r\n\tcolor: #FFFFFF;\r\n\tfont-size: 14px;\r\n\ttext-transform: uppercase;\r\n\tfont-weight: 700;\r\n\tmargin-top: 28px;\r\n\tborder: none;\r\n\tcursor: pointer;\r\n}\n.search_submit_button:hover\r\n{\r\n\tbox-shadow: 0px 10px 20px rgba(0,0,0,0.2);\r\n}\n.search_submit_button:focus\r\n{\r\n\toutline: solid 2px #FFFFFF;\r\n}\n/*********************************\r\n12. Services\r\n*********************************/\n.services\r\n{\r\n\tpadding-bottom: 76px;\r\n}\n.services_row\r\n{\r\n\tmargin-top: 65px;\r\n}\n.service_item\r\n{\r\n\tmargin-bottom: 41px;\r\n}\n.service_item h3\r\n{\r\n\tfont-family: 'Roboto', sans-serif;\r\n\tfont-size: 22px;\r\n\tfont-weight: 500;\r\n\tcolor: #1a1a1a;\r\n\tmargin-bottom: 13px;\r\n}\n.service_item p\r\n{\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tcolor: #a5a5a5;\r\n\tmax-width: 100%;\r\n\tmargin-bottom: 0px;\r\n}\n.icon_container\r\n{\r\n\theight: 41px;\r\n\twidth: auto;\r\n\tmargin-bottom: 30px;\r\n}\n.icon_container img\r\n{\r\n\theight: 100%;\r\n}\n/*********************************\r\n13. Testimonials\r\n*********************************/\n.testimonials\r\n{\r\n\twidth: 100%;\r\n\tbackground: #1a1a1a;\r\n}\n.testimonials_background_container\r\n{\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\n.testimonials_background\r\n{\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\tbackground-position: center center;\r\n\topacity: 0.27;\r\n}\n.testimonials .section_title h1\r\n{\r\n\tcolor: #FFFFFF;\r\n}\n.testimonials_slider_container\r\n{\r\n\tpadding-left: 30px;\r\n\tpadding-right: 30px;\r\n\tmargin-top: 56px;\r\n}\n.testimonials_item\r\n{\r\n\twidth: 100%;\r\n\tpadding-bottom: 75px;\r\n}\n.quote\r\n{\r\n\tfont-size: 36px;\r\n\tcolor: #ffb606;\r\n}\n.testimonials_text\r\n{\r\n\tcolor: #FFFFFF;\r\n\tmargin-bottom: 0px;\r\n}\n.testimonial_user\r\n{\r\n\tmargin-top: 43px;\r\n}\n.testimonial_image\r\n{\r\n\twidth: 98px;\r\n\theight: 98px;\r\n\tborder-radius: 50%;\r\n\toverflow: hidden;\r\n}\n.testimonial_image img\r\n{\r\n\twidth: 100%;\r\n\theight: auto;\r\n}\n.testimonial_name\r\n{\r\n\tfont-size: 16px;\r\n\tfont-weight: 700;\r\n\ttext-transform: uppercase;\r\n\tcolor: #f6af03;\r\n\tmargin-top: 21px;\r\n}\n.testimonial_title\r\n{\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tcolor: #FFFFFF;\r\n\tmargin-top: 6px;\r\n}\n.testimonials_slider .owl-dots\r\n{\r\n\tdisplay: -webkit-box !important;\r\n\tdisplay: flex !important;\r\n\t-webkit-box-orient: horizontal !important;\r\n\t-webkit-box-direction: normal !important;\r\n\t        flex-direction: row !important;\r\n\t-webkit-box-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n}\n.testimonials_slider .owl-dot span\r\n{\r\n\twidth: 8px !important;\r\n\theight: 8px !important;\r\n\tborder: solid 2px #FFFFFF;\r\n\tbackground: transparent !important;\r\n}\n.testimonials_slider .owl-dot.active span\r\n{\r\n\twidth: 16px !important;\r\n\theight: 16px !important;\r\n\tborder: none;\r\n\tbackground: #ffb606 !important;\r\n}\n/*********************************\r\n14. Events\r\n*********************************/\n.event_items\r\n{\r\n\tmargin-top: 68px;\r\n}\n.event_item\r\n{\r\n\tmargin-bottom: 56px;\r\n}\n.event_item:last-child\r\n{\r\n\tmargin-bottom: 0px;\r\n}\n.event_date\r\n{\r\n\twidth: 131px;\r\n\theight: 131px;\r\n\tborder: solid 2px #ffb606;\r\n\tmargin-bottom: 18px;\r\n}\n.event_day\r\n{\r\n\tfont-size: 48px;\r\n\tfont-weight: 700;\r\n\tcolor: #ffb606;\r\n\tmargin-bottom: 1px;\r\n\tline-height: 1;\r\n}\n.event_month\r\n{\r\n\tfont-size: 16px;\r\n\tfont-weight: 700;\r\n\tcolor: #ffb606;\r\n}\n.event_name a\r\n{\r\n\tfont-size: 22px;\r\n\tfont-weight: 500;\r\n\tcolor: #1a1a1a;\r\n}\n.event_name a:hover\r\n{\r\n\tcolor: #ffb606;\r\n}\n.event_location\r\n{\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tcolor: #1a1a1a;\r\n\tmargin-top: 2px;\r\n}\n.event_content p\r\n{\r\n\tfont-weight: 500;\r\n\tcolor: #a5a5a5;\r\n\tmargin-top: 21px;\r\n\tmargin-bottom: 13px;\r\n}\n.event_image\r\n{\r\n\r\n}\n.event_image img\r\n{\r\n\twidth: 100%;\r\n}\n/*********************************\r\n15. Footer\r\n*********************************/\n.footer\r\n{\r\n\twidth: 100%;\r\n\tpadding-top: 86px;\r\n\tbackground: #1a1a1a;\r\n}\n.footer .section_title h1\r\n{\r\n\tcolor: #FFFFFF;\r\n}\n/*********************************\r\n15.1 Newsletter\r\n*********************************/\n.newsletter\r\n{\r\n\tpadding-bottom: 85px;\r\n\tborder-bottom: solid 2px #4d4e4e;\r\n}\n.newsletter_form_container\r\n{\r\n\twidth: 60%;\r\n\tmargin-top: 48px;\r\n}\n.newsletter_email\r\n{\r\n\twidth: calc(100% - 164px);\r\n\theight: 42px;\r\n\tborder: none;\r\n\tpadding-left: 27px;\r\n\tfont-weight: 500;\r\n\tcolor: #1a1a1a;\r\n}\n.newsletter_email:focus\r\n{\r\n\toutline: solid 2px #ffb606;\r\n}\n.newsletter_submit_btn\r\n{\r\n\twidth: 164px;\r\n\theight: 42px;\r\n\tborder: none;\r\n\tbackground: #ffb606;\r\n\tcolor: #FFFFFF;\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tcursor: pointer;\r\n}\n.newsletter_submit_btn:focus\r\n{\r\n\tborder: solid 2px #FFFFFF;\r\n}\n/*********************************\r\n15.2 Footer Content\r\n*********************************/\n.footer_content\r\n{\r\n\tpadding-top: 80px;\r\n\tpadding-bottom: 83px;\r\n\tborder-bottom: solid 2px #4d4e4e;\r\n}\n.footer_content .logo_container\r\n{\r\n\tpadding-left: 0px;\r\n}\n.footer_content .logo span\r\n{\r\n\tcolor: #FFFFFF;\r\n}\n.footer_about_text\r\n{\r\n\tmargin-top: 24px;\r\n\tmargin-bottom: 0px;\r\n\tpadding-right: 20px;\r\n}\n.footer_column_title\r\n{\r\n\tfont-size: 18px;\r\n\tfont-weight: 500;\r\n\tcolor: #FFFFFF;\r\n\tpadding-top: 15px;\r\n}\n.footer_column_content\r\n{\r\n\tmargin-top: 32px;\r\n}\n.footer_list_item\r\n{\r\n\tmargin-bottom: 11px;\r\n}\n.footer_list_item a\r\n{\r\n\tfont-size: 14px;\r\n\tcolor: #a5a5a5;\r\n\t-webkit-transition: all 200ms ease;\r\n\ttransition: all 200ms ease;\r\n}\n.footer_list_item a:hover\r\n{\r\n\tcolor: #ffb606;\r\n}\n.footer_contact_item\r\n{\r\n\tfont-size: 14px;\r\n\tfont-weight: 400;\r\n\tcolor: #a5a5a5;\r\n\tmargin-bottom: 22px;\r\n}\n.footer_contact_item:last-child\r\n{\r\n\tmargin-bottom: 0px;\r\n}\n.footer_contact_icon\r\n{\r\n\tdisplay: inline-block;\r\n\twidth: 24px;\r\n\theight: 24px;\r\n\tvertical-align: middle;\r\n\tmargin-right: 10px;\r\n}\n.footer_contact_icon img\r\n{\r\n\twidth: 100%;\r\n}\n/*********************************\r\n15.3 Footer Copyright\r\n*********************************/\n.footer_bar\r\n{\r\n\tpadding-top: 19px;\r\n\tpadding-bottom: 19px;\r\n}\n.footer_social .menu_social_item a i\r\n{\r\n\tcolor: #FFFFFF;\r\n}\n.footer_social .menu_social_item a i:hover\r\n{\r\n\tcolor: #ffb606;\r\n}\n.footer_social .menu_social_item:last-child\r\n{\r\n\tmargin-right: 0px;\r\n}\n.buttonb {\r\n\tbackground-color: #4CAF50; /* Green */\r\n\tborder: none;\r\n\tborder-radius: 95px;\r\n\tcolor: white;\r\n\tpadding: 16px 32px;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tdisplay: inline-block;\r\n\tfont-size: 16px;\r\n\tfont-weight: bold;\r\n\tmargin: 4px 2px;\r\n\t-webkit-transition-duration: 0.4s; /* Safari */\r\n\ttransition-duration: 0.4s;\r\n\tcursor: pointer;\r\n  }\n.button1 {\r\n\tbackground-color: #ffb606;\r\n\tcolor: white;\r\n\tborder: 0px solid #4CAF50;\r\n  }\n.button1:hover {\r\n\tbackground-color: transparent;\r\n\tcolor: white;\r\n\tborder: 1px solid white;\r\n  }\n.signup-form{\r\n\twidth: 400px;\r\n\tmargin: 0 auto;\r\n\tpadding: 30px 0;\r\n}\n.signup-form h2{\r\n\tcolor: #636363;\r\n\tmargin: 0 0 15px;\r\n\tposition: relative;\r\n\ttext-align: center;\r\n}\n.signup-form h2:before, .signup-form h2:after{\r\n\tcontent: \"\";\r\n\theight: 2px;\r\n\twidth: 30%;\r\n\tbackground: #d4d4d4;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tz-index: 2;\r\n}\n.signup-form h2:before{\r\n\tleft: 0;\r\n}\n.signup-form h2:after{\r\n\tright: 0;\r\n}\n.signup-form .hint-text{\r\n\tcolor: #999;\r\n\tmargin-bottom: 30px;\r\n\ttext-align: center;\r\n}\n.signup-form form{\r\n\tcolor: #999;\r\n\tborder-radius: 3px;\r\n\tmargin-bottom: 15px;\r\n\tbackground: black;\r\n\tbox-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\tpadding: 30px;\r\n}\n.signup-form .form-group{\r\n\tmargin-bottom: 20px;\r\n}\n.signup-form input[type=\"checkbox\"]{\r\n\tmargin-top: 3px;\r\n}\n.signup-form .btn{\r\n\tfont-size: 16px;\r\n\tfont-weight: bold;\r\n\tmin-width: 140px;\r\n\tbackground-color: green;\r\n\toutline: none !important;\r\n}\n.signup-form .btn:hover{\r\n\tfont-size: 16px;\r\n\tfont-weight: bold;\r\n\tmin-width: 140px;\r\n\tbackground-color: transparent;\r\n\toutline: none !important;\r\n}\n.signup-form .row div:first-child{\r\n\tpadding-right: 10px;\r\n}\n.signup-form .row div:last-child{\r\n\tpadding-left: 10px;\r\n}\n.signup-form a{\r\n\tcolor: #fff;\r\n\ttext-decoration: underline;\r\n}\n.signup-form a:hover{\r\n\ttext-decoration: none;\r\n}\n.signup-form form a{\r\n\tcolor: #5cb85c;\r\n\ttext-decoration: none;\r\n}\n.signup-form form a:hover{\r\n\ttext-decoration: underline;\r\n}\n@charset \"utf-8\";\n/* CSS Document */\n/******************************\r\n\r\n[Table of Contents]\r\n\r\n1. 1600px\r\n2. 1440px\r\n3. 1280px\r\n4. 1199px\r\n5. 1024px\r\n6. 991px\r\n7. 959px\r\n8. 880px\r\n9. 768px\r\n10. 767px\r\n11. 539px\r\n12. 479px\r\n13. 400px\r\n\r\n******************************/\n/************\r\n1. 1600px\r\n************/\n@media only screen and (max-width: 1600px)\r\n{\r\n\r\n}\n/************\r\n2. 1440px\r\n************/\n@media only screen and (max-width: 1440px)\r\n{\r\n\r\n}\n/************\r\n3. 1380px\r\n************/\n@media only screen and (max-width: 1380px)\r\n{\r\n\t.header\r\n\t{\r\n\t\twidth: 1200px;\r\n\t}\r\n\t.header_content\r\n\t{\r\n\t\twidth: calc(100% - 219px);\r\n\t}\r\n\t.main_nav_container\r\n\t{\r\n\t\tpadding-right: 63px;\r\n\t}\r\n\t.header_side\r\n\t{\r\n\t\twidth: 219px;\r\n\t}\r\n\t.header_side span\r\n\t{\r\n\t\tfont-size: 14px;\r\n\t}\r\n\t.header_side img\r\n\t{\r\n\t\twidth: 20px;\r\n\t\theight: 20px;\r\n\t}\r\n}\n/************\r\n3. 1280px\r\n************/\n@media only screen and (max-width: 1280px)\r\n{\r\n\t.header\r\n\t{\r\n\t\twidth: 90%;\r\n\t}\r\n\t.header_content\r\n\t{\r\n\t\twidth: 100%;\r\n\t}\r\n\t.header_side\r\n\t{\r\n\t\tdisplay: none !important;\r\n\t}\r\n\t.main_nav_container\r\n\t{\r\n\t\tpadding-right: 53px;\r\n\t}\r\n\t.hero_slide_content h1\r\n\t{\r\n\t\tfont-size: 56px;\r\n\t}\r\n\t.card-title\r\n\t{\r\n\t\tfont-size: 20px;\r\n\t}\r\n\t.register_content,\r\n\t.search_content\r\n\t{\r\n\t\twidth: 442px;\r\n\t}\r\n}\n/************\r\n4. 1199px\r\n************/\n@media only screen and (max-width: 1199px)\r\n{\r\n\t.hero_box\r\n\t{\r\n\t\tpadding-left: 20px;\r\n\t}\r\n}\n/************\r\n4. 1100px\r\n************/\n@media only screen and (max-width: 1100px)\r\n{\r\n\r\n}\n/************\r\n5. 1024px\r\n************/\n@media only screen and (max-width: 1024px)\r\n{\r\n\t.main_nav_item\r\n\t{\r\n\t\tmargin-right: 33px;\r\n\t}\r\n}\n/************\r\n6. 991px\r\n************/\n@media only screen and (max-width: 991px)\r\n{\r\n\t.main_nav_container\r\n\t{\r\n\t\tdisplay: none;\r\n\t}\r\n\t.logo_container\r\n\t{\r\n\t\tpadding-left: 30px;\r\n\t}\r\n\t.hamburger_container\r\n\t{\r\n\t\tdisplay: block;\r\n\t}\r\n\t.hero_slide_content h1\r\n\t{\r\n\t\tfont-size: 48px;\r\n\t}\r\n\t.hero_boxes\r\n\t{\r\n\t\twidth: 100%;\r\n\t\theight: auto;\r\n\t\tpadding-top: 117px;\r\n\t}\r\n\t.hero_boxes_inner\r\n\t{\r\n\t\tposition: relative;\r\n\t\ttop: auto;\r\n\t\tleft: auto;\r\n\t}\r\n\t.hero_box\r\n\t{\r\n\t\tpadding-left: 50px;\r\n\t}\r\n\t.hero_box_col\r\n\t{\r\n\t\tmargin-bottom: 30px;\r\n\t}\r\n\t.hero_box_col:last-child\r\n\t{\r\n\t\tmargin-bottom: 0px;\r\n\t}\r\n\t.course_box\r\n\t{\r\n\t\tmargin-bottom: 80px;\r\n\t}\r\n\t.course_box:last-child\r\n\t{\r\n\t\tmargin-bottom: 0px;\r\n\t}\r\n\t.search_section\r\n\t{\r\n\t\tpadding-top: 156px;\r\n\t\tpadding-bottom: 161px;\r\n\t}\r\n\t.register_content,\r\n\t.search_content\r\n\t{\r\n\t\twidth: 75%;\r\n\t}\r\n\t.testimonials_slider_container\r\n\t{\r\n\t\tpadding-left: 0px;\r\n\t\tpadding-right: 0px;\r\n\t}\r\n\t.event_date\r\n\t{\r\n\t\tmargin-top: 30px;\r\n\t}\r\n\t.event_name\r\n\t{\r\n\t\tmargin-top: 17px;\r\n\t}\r\n\t.event_content p\r\n\t{\r\n\t\tmargin-bottom: 0px;\r\n\t}\r\n\t.newsletter_form_container\r\n\t{\r\n\t\twidth: 90%;\r\n\t}\r\n\t.footer_col\r\n\t{\r\n\t\tmargin-bottom: 30px;\r\n\t}\r\n\t.footer_col:last-child\r\n\t{\r\n\t\tmargin-bottom: 0px;\r\n\t}\r\n}\n/************\r\n7. 959px\r\n************/\n@media only screen and (max-width: 959px)\r\n{\r\n\r\n}\n/************\r\n8. 880px\r\n************/\n@media only screen and (max-width: 880px)\r\n{\r\n\r\n}\n/************\r\n9. 768px\r\n************/\n@media only screen and (max-width: 768px)\r\n{\r\n\r\n}\n/************\r\n10. 767px\r\n************/\n@media only screen and (max-width: 767px)\r\n{\r\n\t.menu_container\r\n\t{\r\n\t\tright: -100vw;\r\n\t\twidth: 100vw;\r\n\t\theight: 100vh;\r\n\t}\r\n\t.newsletter_email\r\n\t{\r\n\t\twidth: 100%;\r\n\t}\r\n\t.newsletter_submit_btn\r\n\t{\r\n\t\tmargin-top: 15px;\r\n\t}\r\n}\n/************\r\n11. 575px\r\n************/\n@media only screen and (max-width: 575px)\r\n{\r\n\th1{font-size: 24px;}\r\n\tp{font-size:13px;}\r\n\t.header\r\n\t{\r\n\t\theight: 74px;\r\n\t}\r\n\t.logo_container\r\n\t{\r\n\t\tpadding-left: 15px;\r\n\t}\r\n\t.logo img\r\n\t{\r\n\t\twidth: 30px;\r\n\t}\r\n\t.logo span\r\n\t{\r\n\t\tfont-size: 16px;\r\n\t}\r\n\t.hamburger_container\r\n\t{\r\n\t\tright: 5px;\r\n\t}\r\n\t.menu\r\n\t{\r\n\t\ttop: 70px;\r\n\t}\r\n\t.menu_item\r\n\t{\r\n\t\tmargin-bottom: 0px;\r\n\t}\r\n\t.menu_item a\r\n\t{\r\n\t\tfont-size: 24px;\r\n\t}\r\n\t.menu_copyright\r\n\t{\r\n\t\tdisplay: none;\r\n\t}\r\n\t.menu_social_container\r\n\t{\r\n\t\tmargin-top: 50px;\r\n\t}\r\n\t.menu_close_container\r\n\t{\r\n\t\tright: 30px;\r\n\t\ttop: 34px;\r\n\t}\r\n\t.hero_slider_nav\r\n\t{\r\n\t\tdisplay: none;\r\n\t}\r\n\t.hero_slide_content\r\n\t{\r\n\t\tmax-width: 100%;\r\n\t\tpadding-left: 15px;\r\n\t\tpadding-right: 15px;\r\n\t}\r\n\t.card-title\r\n\t{\r\n\t\tmargin-top: 30px;\r\n\t}\r\n\t.card-title a\r\n\t{\r\n\t\tfont-size: 20px;\r\n\t}\r\n\t.card-text\r\n\t{\r\n\t\tfont-size: 13px;\r\n\t}\r\n\t.price_box\r\n\t{\r\n\t\tmargin-top: 37px;\r\n\t}\r\n\t.register_section,\r\n\t.search_section\r\n\t{\r\n\t\tpadding-top: 115px;\r\n\t\tpadding-bottom: 120px;\r\n\t}\r\n\t.register_content,\r\n\t.search_content\r\n\t{\r\n\t\twidth: 100%;\r\n\t\tpadding-left: 15px;\r\n\t\tpadding-right: 15px;\r\n\t}\r\n\t.register_text\r\n\t{\r\n\t\tmargin-top: 25px;\r\n\t}\r\n\t.register_button\r\n\t{\r\n\t\tmargin-top: 53px;\r\n\t}\r\n\t.testimonials_slider .owl-dots\r\n\t{\r\n\t\tdisplay: none !important;\r\n\t}\r\n\t.testimonials_item\r\n\t{\r\n\t\tpadding-bottom: 0px;\r\n\t}\r\n\t.event_date\r\n\t{\r\n\t\twidth: 100px;\r\n\t\theight: 100px;\r\n\t}\r\n\t.event_day\r\n\t{\r\n\t\tfont-size: 36px;\r\n\t}\r\n\t.event_month\r\n\t{\r\n\t\tfont-size: 14px;\r\n\t}\r\n\t.event_name\r\n\t{\r\n\t\tmargin-top: 5px;\r\n\t}\r\n\t.footer_bar\r\n\t{\r\n\t\tpadding-top: 49px;\r\n\t\tpadding-bottom: 52px;\r\n\t}\r\n\t.footer_social\r\n\t{\r\n\t\tmargin-top: 20px;\r\n\t}\r\n\t.footer_copyright span\r\n\t{\r\n\t\tfont-size: 13px;\r\n\t}\r\n}\n/************\r\n11. 539px\r\n************/\n@media only screen and (max-width: 539px)\r\n{\r\n\r\n}\n/************\r\n12. 480px\r\n************/\n@media only screen and (max-width: 480px)\r\n{\r\n\r\n}\n/************\r\n13. 479px\r\n************/\n@media only screen and (max-width: 479px)\r\n{\r\n\t.header\r\n\t{\r\n\t\theight: 60px;\r\n\t\ttop: 15px;\r\n\t}\r\n\t.hero_slide_content h1\r\n\t{\r\n\t\tfont-size: 28px;\r\n\t}\r\n\t.hero_slide_content h1 span\r\n\t{\r\n\t\tpadding-left: 5px;\r\n\t\tpadding-right: 5px;\r\n\t\tmargin-left: 0px;\r\n\t\tmargin-right: 0px;\r\n\t}\r\n\t.hero_boxes\r\n\t{\r\n\t\tpadding-top: 80px;\r\n\t}\r\n\t.hero_box\r\n\t{\r\n\t\tpadding-left: 15px;\r\n\t\theight: 120px;\r\n\t}\r\n\t.hero_box_content\r\n\t{\r\n\t\tpadding-top: 6px;\r\n\t}\r\n\t.hero_box img\r\n\t{\r\n\t\twidth: 45px;\r\n\t}\r\n\t.hero_box_title\r\n\t{\r\n\t\tfont-size: 18px;\r\n\t\tmargin-bottom: 3px;\r\n\t}\r\n\t.hero_box_link\r\n\t{\r\n\t\tfont-size: 10px;\r\n\t}\r\n}\n/************\r\n14. 400px\r\n************/\n@media only screen and (max-width: 400px)\r\n{\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUE4Q0EsbUdBQW1HO0FBOUNuRyxpQkFBaUI7QUFFakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQXNDOEI7QUFFOUI7O1dBRVc7QUFJWDs7aUNBRWlDO0FBRWpDOztDQUVDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsbUNBQW1DO0NBQ25DLDRDQUE0QztDQUM1QyxvQ0FBb0M7QUFDckM7QUFDQTs7Q0FFQyxpQ0FBaUM7Q0FDakMsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsY0FBYztBQUNmO0FBQ0E7O0NBRUMsY0FBYztDQUNkLGtCQUFrQjtDQUdmLHNCQUFzQjtBQUMxQjtBQUNBOztDQUVDLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7QUFDQTs7Q0FFQyxpQ0FBaUM7Q0FDakMsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLG1DQUFtQztDQUNuQyw0Q0FBNEM7Q0FDNUMsb0NBQW9DO0FBQ3JDO0FBQ0E7O0NBRUMsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsZ0NBQWdDO0NBQ2hDLGtDQUFrQztDQUlsQywwQkFBMEI7QUFDM0I7QUFDQTs7Q0FFQyxxQkFBcUI7Q0FDckIsbUNBQW1DO0NBQ25DLDRDQUE0QztDQUM1QyxvQ0FBb0M7QUFDckM7QUFDQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsY0FBYztBQUNmO0FBQ0E7O0NBRUMsY0FBYztDQUNkLG1CQUFtQjtBQUNwQjtBQUNBOztDQUVDLFlBQVk7QUFDYjtBQUNBOztDQUVDLG1CQUFtQjtDQUNuQixjQUFjO0FBQ2Y7QUFKQTs7Q0FFQyxtQkFBbUI7Q0FDbkIsY0FBYztBQUNmO0FBQ0E7O0NBRUMsbUJBQW1CO0NBQ25CLGNBQWM7QUFDZjtBQUpBOztDQUVDLG1CQUFtQjtDQUNuQixjQUFjO0FBQ2Y7QUFDQSxHQUFHLGVBQWUs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LGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEI7Q0FDQTs7RUFFQyxpQkFBaUI7Q0FDbEI7Q0FDQTs7RUFFQyxrQkFBa0I7RUFDbEIsYUFBYTtDQUNkO0NBQ0E7O0VBRUMsZ0JBQWdCO0NBQ2pCO0NBQ0E7O0VBRUMsV0FBVztDQUNaO0NBQ0E7O0VBRUMsZUFBZTtFQUNmLGtCQUFrQjtDQUNuQjtDQUNBOztFQUVDLGVBQWU7Q0FDaEI7QUFDRDtBQUVBOztZQUVZO0FBRVo7OztBQUdBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDU1MgRG9jdW1lbnQgKi9cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbkNPTE9SIFBBTEVUVEVcclxuXHJcblxyXG5cclxuXHJcbltUYWJsZSBvZiBDb250ZW50c11cclxuXHJcbjEuIEZvbnRzXHJcbjIuIEJvZHkgYW5kIHNvbWUgZ2VuZXJhbCBzdHVmZlxyXG4zLiBIZWFkZXJcclxuXHQzLjEgTG9nb1xyXG5cdDMuMiBNYWluIE5hdlxyXG5cdDMuMyBIZWFkZXIgU2lkZVxyXG5cdDMuNCBIYW1idXJnZXJcclxuNC4gTWVudVxyXG5cdDQuMSBNZW51IFNvY2lhbFxyXG5cdDQuMiBNZW51IGNvcHlyaWdodFxyXG41LiBIb21lXHJcblx0NS4xIEhlcm8gU2xpZGVyXHJcblx0NS4yIEhlcm8gU2xpZGVyIE5hdmlnYXRpb25cclxuNi4gSGVybyBCb3hlc1xyXG43LiBQYWdlIFNlY3Rpb25cclxuOC4gQnV0dG9uc1xyXG45LiBQb3B1bGFyXHJcbjEwLiBSZWdpc3RlclxyXG4xMS4gU2VhcmNoXHJcblx0MTEuMSBTZWFyY2ggRm9ybVxyXG4xMi4gU2VydmljZXNcclxuMTMuIFRlc3RpbW9uaWFsc1xyXG4xNC4gRXZlbnRzXHJcbjE1LiBGb290ZXJcclxuXHQxNS4xIE5ld3NsZXR0ZXJcclxuXHQxNS4yIEZvb3RlciBDb250ZW50XHJcblx0MTUuMyBGb290ZXIgQ29weXJpZ2h0XHJcblxyXG5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqKioqKioqKioqXHJcbjEuIEZvbnRzXHJcbioqKioqKioqKioqL1xyXG5cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDYwMCw3MDAsODAwfFJvYm90bzo0MDAsNTAwLDcwMCcpO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4yLiBCb2R5IGFuZCBzb21lIGdlbmVyYWwgc3R1ZmZcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuKlxyXG57XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcblx0LXdlYmtpdC10ZXh0LXNoYWRvdzogcmdiYSgwLDAsMCwuMDEpIDAgMCAxcHg7XHJcblx0dGV4dC1zaGFkb3c6IHJnYmEoMCwwLDAsLjAxKSAwIDAgMXB4O1xyXG59XHJcbmJvZHlcclxue1xyXG5cdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG5cdGNvbG9yOiAjYTVhNWE1O1xyXG59XHJcbmRpdlxyXG57XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxudWxcclxue1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0bWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbnBcclxue1xyXG5cdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0bGluZS1oZWlnaHQ6IDIuMjk7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRjb2xvcjogI2E1YTVhNTtcclxuXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuXHQtd2Via2l0LXRleHQtc2hhZG93OiByZ2JhKDAsMCwwLC4wMSkgMCAwIDFweDtcclxuXHR0ZXh0LXNoYWRvdzogcmdiYSgwLDAsMCwuMDEpIDAgMCAxcHg7XHJcbn1cclxucCBhXHJcbntcclxuXHRkaXNwbGF5OiBpbmxpbmU7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGNvbG9yOiBpbmhlcml0O1xyXG5cdGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZmZhMDdmO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuXHQtbXMtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcblx0dHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcbn1cclxuYSwgYTpob3ZlciwgYTp2aXNpdGVkLCBhOmFjdGl2ZSwgYTpsaW5rXHJcbntcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcblx0LXdlYmtpdC10ZXh0LXNoYWRvdzogcmdiYSgwLDAsMCwuMDEpIDAgMCAxcHg7XHJcblx0dGV4dC1zaGFkb3c6IHJnYmEoMCwwLDAsLjAxKSAwIDAgMXB4O1xyXG59XHJcbnAgYTphY3RpdmVcclxue1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRjb2xvcjogI0ZGNjM0NztcclxufVxyXG5wIGE6aG92ZXJcclxue1xyXG5cdGNvbG9yOiAjRkZGRkZGO1xyXG5cdGJhY2tncm91bmQ6ICNmZmEwN2Y7XHJcbn1cclxucCBhOmhvdmVyOjphZnRlclxyXG57XHJcblx0b3BhY2l0eTogMC4yO1xyXG59XHJcbjo6c2VsZWN0aW9uXHJcbntcclxuXHRiYWNrZ3JvdW5kOiAjRkZEMjY2O1xyXG5cdGNvbG9yOiAjQzg4RTAwO1xyXG59XHJcbnA6OnNlbGVjdGlvblxyXG57XHJcblx0YmFja2dyb3VuZDogI0ZGRDI2NjtcclxuXHRjb2xvcjogI0M4OEUwMDtcclxufVxyXG5oMXtmb250LXNpemU6IDM2cHg7fVxyXG5oMntmb250LXNpemU6IDIycHg7fVxyXG5oM3tmb250LXNpemU6IDE4cHg7fVxyXG5oNHtmb250LXNpemU6IDE0cHg7fVxyXG5oNXtmb250LXNpemU6IDExcHg7fVxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2XHJcbntcclxuXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcblx0LXdlYmtpdC10ZXh0LXNoYWRvdzogcmdiYSgwLDAsMCwuMDEpIDAgMCAxcHg7XHJcblx0dGV4dC1zaGFkb3c6IHJnYmEoMCwwLDAsLjAxKSAwIDAgMXB4O1xyXG59XHJcbmgxOjpzZWxlY3Rpb24sXHJcbmgyOjpzZWxlY3Rpb24sXHJcbmgzOjpzZWxlY3Rpb24sXHJcbmg0OjpzZWxlY3Rpb24sXHJcbmg1OjpzZWxlY3Rpb24sXHJcbmg2OjpzZWxlY3Rpb25cclxue1xyXG5cclxufVxyXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJcclxue1xyXG5cdGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuXHRjb2xvcjogI2E1YTVhNSAhaW1wb3J0YW50O1xyXG59XHJcbjotbW96LXBsYWNlaG9sZGVyIC8qIG9sZGVyIEZpcmVmb3gqL1xyXG57XHJcblx0Zm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjYTVhNWE1ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjotbW96LXBsYWNlaG9sZGVyIC8qIEZpcmVmb3ggMTkrICovXHJcbntcclxuXHRmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuXHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6ICNhNWE1YTUgIWltcG9ydGFudDtcclxufVxyXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyXHJcbntcclxuXHRmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuXHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6ICNhNWE1YTUgIWltcG9ydGFudDtcclxufVxyXG46OmlucHV0LXBsYWNlaG9sZGVyXHJcbntcclxuXHRmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuXHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6ICNhNWE1YTUgIWltcG9ydGFudDtcclxufVxyXG4uZm9ybS1jb250cm9sXHJcbntcclxuXHRjb2xvcjogI2RiNTI0NjtcclxufVxyXG5zZWN0aW9uXHJcbntcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uY2xlYXJcclxue1xyXG5cdGNsZWFyOiBib3RoO1xyXG59XHJcbi5jbGVhcmZpeDo6YmVmb3JlLCAuY2xlYXJmaXg6OmFmdGVyXHJcbntcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcbi5jbGVhcmZpeDo6YWZ0ZXJcclxue1xyXG5cdGNsZWFyOiBib3RoO1xyXG59XHJcbi5jbGVhcmZpeFxyXG57XHJcblx0em9vbTogMTtcclxufVxyXG4uZmxvYXRfbGVmdFxyXG57XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmZsb2F0X3JpZ2h0XHJcbntcclxuXHRmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnRyYW5zXzIwMFxyXG57XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG5cdC1tcy10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuXHQtby10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxufVxyXG4udHJhbnNfMzAwXHJcbntcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XHJcblx0LW1zLXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xyXG59XHJcbi50cmFuc180MDBcclxue1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDQwMG1zIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgNDAwbXMgZWFzZTtcclxuXHQtbXMtdHJhbnNpdGlvbjogYWxsIDQwMG1zIGVhc2U7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDQwMG1zIGVhc2U7XHJcblx0dHJhbnNpdGlvbjogYWxsIDQwMG1zIGVhc2U7XHJcbn1cclxuLnRyYW5zXzUwMFxyXG57XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xyXG5cdC1tcy10cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcclxuXHQtby10cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcclxufVxyXG4uZmlsbF9oZWlnaHRcclxue1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG4uc3VwZXJfY29udGFpbmVyXHJcbntcclxuXHR3aWR0aDogMTAwJTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5wcmx4X3BhcmVudFxyXG57XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ucHJseFxyXG57XHJcblx0aGVpZ2h0OiAxMzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5vcGFkZGluZ1xyXG57XHJcblx0cGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuMy4gSGVhZGVyXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi5oZWFkZXJcclxue1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDQ1cHg7XHJcblx0bGVmdDogNTAlO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG5cdC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG5cdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblx0LW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuXHR3aWR0aDogMTMxOHB4O1xyXG5cdGhlaWdodDogMTA0cHg7XHJcblx0YmFja2dyb3VuZDogI0ZGRkZGRjtcclxuXHR6LWluZGV4OiAxMDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcblx0LW1zLXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG59XHJcbi5oZWFkZXIuc2Nyb2xsZWRcclxue1xyXG5cdHRvcDogMTVweDtcclxufVxyXG4uaGVhZGVyLnNjcm9sbGVkIC5oZWFkZXJfY29udGVudDo6YmVmb3JlXHJcbntcclxuXHRib3gtc2hhZG93OiAwcHggMjBweCA0OXB4IHJnYmEoMCwwLDAsMC4xNyk7XHJcbn1cclxuLmhlYWRlcl9jb250ZW50XHJcbntcclxuXHR3aWR0aDogY2FsYygxMDAlIC0gMjc5cHgpO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG4uaGVhZGVyX2NvbnRlbnQ6OmJlZm9yZVxyXG57XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRjb250ZW50OiAnJztcclxuXHRib3gtc2hhZG93OiAwcHggMjBweCA0OXB4IHJnYmEoMCwwLDAsMC42Nyk7XHJcblx0ei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuMy4xIExvZ29cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLmxvZ29fY29udGFpbmVyXHJcbntcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0cGFkZGluZy1sZWZ0OiA3NnB4O1xyXG59XHJcbi5sb2dvIHNwYW5cclxue1xyXG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDMwcHg7XHJcblx0Zm9udC13ZWlnaHQ6IDkwMDtcclxuXHRjb2xvcjogIzNhM2EzYTtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0bWFyZ2luLWxlZnQ6IDNweDtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4zLjIgTWFpbiBOYXZcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLm1haW5fbmF2X2NvbnRhaW5lclxyXG57XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cdHBhZGRpbmctcmlnaHQ6IDkzcHg7XHJcbn1cclxuLm1haW5fbmF2XHJcbntcclxuXHRtYXJnaW4tdG9wOiA3cHg7XHJcbn1cclxuLm1haW5fbmF2X2l0ZW1cclxue1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbn1cclxuLm1haW5fbmF2X2l0ZW06bGFzdC1jaGlsZFxyXG57XHJcblx0bWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLm1haW5fbmF2X2l0ZW0gYVxyXG57XHJcblx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0Y29sb3I6ICMzYTNhM2E7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG5cdC1tcy10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuXHQtby10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxufVxyXG4ubWFpbl9uYXZfaXRlbSBhOmhvdmVyXHJcbntcclxuXHRjb2xvcjogI2ZmYjYwNjtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4zLjMgSGVhZGVyIFNpZGVcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLmhlYWRlcl9zaWRlXHJcbntcclxuXHR3aWR0aDogMjc5cHg7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGJhY2tncm91bmQ6ICNmZmI2MDY7XHJcbn1cclxuLmhlYWRlcl9zaWRlIGltZ1xyXG57XHJcblx0d2lkdGg6IDI5cHg7XHJcblx0aGVpZ2h0OiAyOXB4O1xyXG59XHJcbi5oZWFkZXJfc2lkZSBzcGFuXHJcbntcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0Y29sb3I6ICNGRkZGRkY7XHJcblx0cGFkZGluZy1sZWZ0OiAxMnB4O1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbjMuNCBIYW1idXJnZXJcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLmhhbWJ1cmdlcl9jb250YWluZXJcclxue1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDUwJTtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuXHQtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cdC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblx0cmlnaHQ6IDIwcHg7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmhhbWJ1cmdlcl9jb250YWluZXIgaVxyXG57XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0Y29sb3I6ICMzYTNhM2E7XHJcbn1cclxuLmhhbWJ1cmdlcl9jb250YWluZXI6aG92ZXIgaVxyXG57XHJcblx0Y29sb3I6ICNmZmI2MDY7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuNC4gTWVudVxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4ubWVudV9jb250YWluZXJcclxue1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDA7XHJcblx0cmlnaHQ6IC01MHZ3O1xyXG5cdHdpZHRoOiA1MHZ3O1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0YmFja2dyb3VuZDogI0ZGRkZGRjtcclxuXHR6LWluZGV4OiAxMjtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlO1xyXG5cdC1tcy10cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2U7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZTtcclxuXHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0b3BhY2l0eTogMDtcclxufVxyXG4ubWVudV9jb250YWluZXIuYWN0aXZlXHJcbntcclxuXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0cmlnaHQ6IDA7XHJcbn1cclxuLm1lbnVcclxue1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6MTUwcHg7XHJcblx0bGVmdDogMDtcclxuXHRwYWRkaW5nLWxlZnQ6IDE1JTtcclxufVxyXG4ubWVudV9saXN0XHJcbntcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgzLjVyZW0pO1xyXG5cdC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMuNXJlbSk7XHJcblx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgzLjVyZW0pO1xyXG5cdC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgzLjVyZW0pO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzLjVyZW0pO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuXHQtbXMtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcblx0dHJhbnNpdGlvbjogYWxsIDEwMDBtcyA2MDBtcyBlYXNlO1xyXG5cdG9wYWNpdHk6IDA7XHJcbn1cclxuLm1lbnVfY29udGFpbmVyLmFjdGl2ZSAubWVudV9saXN0XHJcbntcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG5cdC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcblx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG5cdC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG5cdG9wYWNpdHk6IDE7XHJcbn1cclxuLm1lbnVfaXRlbVxyXG57XHJcblx0bWFyZ2luLWJvdHRvbTogOXB4O1xyXG59XHJcbi5tZW51X2l0ZW0gYVxyXG57XHJcblx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMzZweDtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGNvbG9yOiAjM2EzYTNhO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuXHQtbXMtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcblx0dHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcbn1cclxuLm1lbnVfaXRlbSBhOmhvdmVyXHJcbntcclxuXHRjb2xvcjogI2ZmYjYwNjtcclxufVxyXG4ubWVudV9jbG9zZV9jb250YWluZXJcclxue1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDg2cHg7XHJcblx0cmlnaHQ6IDc5cHg7XHJcblx0d2lkdGg6IDIxcHg7XHJcblx0aGVpZ2h0OiAyMXB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHQtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuLm1lbnVfY2xvc2Vcclxue1xyXG5cdHRvcDogOXB4O1xyXG5cdHdpZHRoOiAyMXB4O1xyXG5cdGhlaWdodDogM3B4O1xyXG5cdGJhY2tncm91bmQ6ICMzYTNhM2E7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG5cdC1tcy10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuXHQtby10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxufVxyXG4ubWVudV9jbG9zZTo6YWZ0ZXJcclxue1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IC05cHg7XHJcblx0bGVmdDogOXB4O1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdHdpZHRoOiAzcHg7XHJcblx0aGVpZ2h0OiAyMXB4O1xyXG5cdGJhY2tncm91bmQ6ICMzYTNhM2E7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG5cdC1tcy10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuXHQtby10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxufVxyXG4ubWVudV9jbG9zZV9jb250YWluZXI6aG92ZXIgLm1lbnVfY2xvc2UsXHJcbi5tZW51X2Nsb3NlX2NvbnRhaW5lcjpob3ZlciAubWVudV9jbG9zZTo6YWZ0ZXJcclxue1xyXG5cdGJhY2tncm91bmQ6ICNmZmI2MDY7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuNC4xIE1lbnUgU29jaWFsXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi5tZW51X3NvY2lhbF9jb250YWluZXJcclxue1xyXG5cdG1hcmdpbi10b3A6IDEwMHB4O1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMuNXJlbSk7XHJcblx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMy41cmVtKTtcclxuXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMuNXJlbSk7XHJcblx0LW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMuNXJlbSk7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMuNXJlbSk7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTAwMG1zIDEwMDBtcyBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDEwMDBtcyAxMDAwbXMgZWFzZTtcclxuXHQtbXMtdHJhbnNpdGlvbjogYWxsIDEwMDBtcyAxMDAwbXMgZWFzZTtcclxuXHQtby10cmFuc2l0aW9uOiBhbGwgMTAwMG1zIDEwMDBtcyBlYXNlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAxMDAwbXMgMTAwMG1zIGVhc2U7XHJcblx0b3BhY2l0eTogMDtcclxuXHRwYWRkaW5nLWxlZnQ6IDRweDtcclxufVxyXG4ubWVudV9zb2NpYWxfaXRlbVxyXG57XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG4ubWVudV9zb2NpYWxfaXRlbSBhIGlcclxue1xyXG5cdGNvbG9yOiAjM2EzYTNhO1xyXG59XHJcbi5tZW51X3NvY2lhbF9pdGVtIGEgaTpob3ZlclxyXG57XHJcblx0Y29sb3I6ICNmZmI2MDY7XHJcbn1cclxuLm1lbnVfY29udGFpbmVyLmFjdGl2ZSAubWVudV9zb2NpYWxfY29udGFpbmVyXHJcbntcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG5cdC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcblx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG5cdC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG5cdG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuNC4yIE1lbnUgY29weXJpZ2h0XHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi5tZW51X2NvcHlyaWdodFxyXG57XHJcblx0bWFyZ2luLXRvcDogNjBweDtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgzLjVyZW0pO1xyXG5cdC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMuNXJlbSk7XHJcblx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgzLjVyZW0pO1xyXG5cdC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgzLjVyZW0pO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzLjVyZW0pO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDEwMDBtcyAxMjAwbXMgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAxMDAwbXMgMTIwMG1zIGVhc2U7XHJcblx0LW1zLXRyYW5zaXRpb246IGFsbCAxMDAwbXMgMTIwMG1zIGVhc2U7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDEwMDBtcyAxMjAwbXMgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMTAwMG1zIDEyMDBtcyBlYXNlO1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0cGFkZGluZy1sZWZ0OiAzcHg7XHJcbn1cclxuLm1lbnVfY29udGFpbmVyLmFjdGl2ZSAubWVudV9jb3B5cmlnaHRcclxue1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcblx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcblx0LW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcblx0b3BhY2l0eTogMTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG41LiBIb21lXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi5ob21lXHJcbntcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbjUuMSBIZXJvIFNsaWRlclxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4uaGVyb19zbGlkZXJfY29udGFpbmVyXHJcbntcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmhlcm9fc2xpZGVcclxue1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG4uaGVyb19zbGlkZV9iYWNrZ3JvdW5kXHJcbntcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG59XHJcbi5oZXJvX3NsaWRlX2NvbnRhaW5lclxyXG57XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxufVxyXG4uaGVyb19zbGlkZV9jb250ZW50XHJcbntcclxuXHRtYXgtd2lkdGg6IDgwJTtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcclxuXHQtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcclxuXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xyXG5cdC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XHJcbn1cclxuLmhlcm9fc2xpZGVfY29udGVudCBoMVxyXG57XHJcblx0Zm9udC1zaXplOiA3MnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0Y29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLmhlcm9fc2xpZGVfY29udGVudCBoMSBzcGFuXHJcbntcclxuXHRiYWNrZ3JvdW5kOiAjZmZiNjA2O1xyXG5cdHBhZGRpbmctbGVmdDogMTNweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxM3B4O1xyXG5cdG1hcmdpbi1sZWZ0OiAtMTJweDtcclxuXHRtYXJnaW4tcmlnaHQ6IC0xMnB4O1xyXG59XHJcbi5hbmltYXRlZFxyXG57XHJcblx0LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb24gOiAxcyAhaW1wb3J0YW50O1xyXG5cdGFuaW1hdGlvbi1kdXJhdGlvbiA6IDFzICFpbXBvcnRhbnQ7XHJcblx0LXdlYmtpdC1hbmltYXRpb24tZGVsYXkgOiA1MDBtcztcclxuXHRhbmltYXRpb24tZGVsYXkgOiA1MDBtcztcclxufVxyXG4uYW5pbWF0ZS1vdXRcclxue1xyXG5cdC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5IDogMG1zO1xyXG5cdGFuaW1hdGlvbi1kZWxheSA6IDBtcztcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG41LjIgSGVybyBTbGlkZXIgTmF2aWdhdGlvblxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4uaGVyb19zbGlkZXJfbmF2XHJcbntcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNTAlO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cdC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblx0LW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKC01MCUgKyAzMHB4KSk7XHJcblx0d2lkdGg6IDU4cHg7XHJcblx0aGVpZ2h0OiA1OHB4O1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdHotaW5kZXg6IDk7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5oZXJvX3NsaWRlcl9uYXY6aG92ZXJcclxue1xyXG5cdGJhY2tncm91bmQ6ICNmZmI2MDY7XHJcbn1cclxuLmhlcm9fc2xpZGVyX25hdjpob3ZlciBzcGFuXHJcbntcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxufVxyXG4uaGVyb19zbGlkZXJfbmF2IHNwYW5cclxue1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiAxMDAwO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRsaW5lLWhlaWdodDogMTtcclxufVxyXG4uaGVyb19zbGlkZXJfbGVmdFxyXG57XHJcblx0bGVmdDogNC4zMiU7XHJcbn1cclxuLmhlcm9fc2xpZGVyX3JpZ2h0XHJcbntcclxuXHRyaWdodDogNC4zMiU7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuNi4gSGVybyBCb3hlc1xyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4uaGVyb19ib3hlc1xyXG57XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAwcHg7XHJcblx0ei1pbmRleDogOTtcclxuXHRwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcbi5oZXJvX2JveGVzX2lubmVyXHJcbntcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAtMjEycHg7XHJcblx0bGVmdDogMDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG4uaGVyb19ib3hcclxue1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTYxcHg7XHJcblx0YmFja2dyb3VuZDogIzFhMWExYTtcclxuXHRwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5oZXJvX2JveDpob3ZlclxyXG57XHJcblx0YmFja2dyb3VuZDogI2ZmYjYwNjtcclxufVxyXG4uaGVyb19ib3ggaW1nXHJcbntcclxuXHR3aWR0aDogNjJweDtcclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0bWFyZ2luLXRvcDogLTZweDtcclxufVxyXG4uc3ZnIHBhdGhcclxue1xyXG5cdGZpbGw6ICNmZmI2MDY7XHJcbn1cclxuLmhlcm9fYm94IHN2Z1xyXG57XHJcblx0d2lkdGg6IDYycHg7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5oZXJvX2JveDpob3ZlciBzdmcgcGF0aFxyXG57XHJcblx0ZmlsbDogI0ZGRkZGRjtcclxufVxyXG4uaGVyb19ib3hfY29udGVudFxyXG57XHJcblx0cGFkZGluZy1sZWZ0OiAxM3B4O1xyXG5cdHBhZGRpbmctdG9wOiAxMXB4O1xyXG5cdG1hcmdpbi10b3A6IC02cHg7XHJcbn1cclxuLmhlcm9fYm94X3RpdGxlXHJcbntcclxuXHRmb250LXNpemU6IDI0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxuXHRtYXJnaW4tYm90dG9tOiA3cHg7XHJcbn1cclxuLmhlcm9fYm94X2xpbmtcclxue1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Y29sb3I6ICNGRkZGRkY7XHJcblx0cGFkZGluZy1sZWZ0OiAzcHg7XHJcbn1cclxuLmhlcm9fYm94X2xpbms6aG92ZXJcclxue1xyXG5cdGNvbG9yOiAjMWExYTFhO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbjcuIFBhZ2UgU2VjdGlvblxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4ucGFnZV9zZWN0aW9uXHJcbntcclxuXHRwYWRkaW5nLXRvcDogMTE3cHg7XHJcblx0cGFkZGluZy1ib3R0b206IDExN3B4O1xyXG59XHJcbi5zZWN0aW9uX3RpdGxlXHJcbntcclxuXHJcbn1cclxuLnNlY3Rpb25fdGl0bGUgaDFcclxue1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGNvbG9yOiAjMWExYTFhO1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0cGFkZGluZy10b3A6IDI0cHg7XHJcbn1cclxuLnNlY3Rpb25fdGl0bGUgaDE6OmJlZm9yZVxyXG57XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiA1MCU7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuXHQtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG5cdHdpZHRoOiA1NXB4O1xyXG5cdGhlaWdodDogNHB4O1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdGJhY2tncm91bmQ6ICNmZmI2MDY7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuOC4gQnV0dG9uc1xyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4uYnV0dG9uXHJcbntcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJ1dHRvbjpob3ZlclxyXG57XHJcblx0Ym94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuLmJ1dHRvbiBhXHJcbntcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0bGluZS1oZWlnaHQ6IDQ4cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5idXR0b25fMVxyXG57XHJcblx0d2lkdGg6IDIwMnB4O1xyXG5cdGhlaWdodDogNDhweDtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG45LiBQb3B1bGFyXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi5wb3B1bGFyXHJcbntcclxuXHJcbn1cclxuLmNvdXJzZV9ib3hlc1xyXG57XHJcblx0bWFyZ2luLXRvcDogNjhweDtcclxufVxyXG4uY2FyZFxyXG57XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0YmFja2dyb3VuZDogI2Y4ZjlmYjtcclxuXHRib3JkZXI6IG5vbmU7XHJcbn1cclxuLmNhcmQtaW1nLXRvcFxyXG57XHJcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxufVxyXG4uY2FyZC1ib2R5XHJcbntcclxuXHRwYWRkaW5nLXRvcDogMHB4O1xyXG5cdHBhZGRpbmctYm90dG9tOiAwcHg7XHJcblx0cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuLmNhcmQtdGl0bGVcclxue1xyXG5cdG1hcmdpbi10b3A6IDU1cHg7XHJcbn1cclxuLmNhcmQtdGl0bGUgYVxyXG57XHJcblx0Zm9udC1zaXplOiAyMnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0Y29sb3I6ICMxYTFhMWE7XHJcblx0bGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG4uY2FyZC10aXRsZSBhOmhvdmVyXHJcbntcclxuXHRjb2xvcjogI2E1YTVhNTtcclxufVxyXG4uY2FyZC10ZXh0XHJcbntcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRjb2xvcjogI2E1YTVhNTtcclxuXHRtYXJnaW4tdG9wOiAtMTJweDtcclxufVxyXG4ucHJpY2VfYm94XHJcbntcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDY3cHg7XHJcblx0YmFja2dyb3VuZDogI2VhZWJlYztcclxuXHRtYXJnaW4tdG9wOiA0MXB4O1xyXG5cdHBhZGRpbmctbGVmdDogMzVweDtcclxufVxyXG4uY291cnNlX2F1dGhvcl9pbWFnZVxyXG57XHJcblx0d2lkdGg6IDQ2cHg7XHJcblx0aGVpZ2h0OiA0NnB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jb3Vyc2VfYXV0aG9yX25hbWVcclxue1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdGNvbG9yOiAjMWExYTFhO1xyXG5cdHBhZGRpbmctbGVmdDogMjBweDtcclxuXHRtYXJnaW4tdG9wOiA3cHg7XHJcbn1cclxuLmNvdXJzZV9hdXRob3JfbmFtZSBzcGFuXHJcbntcclxuXHRjb2xvcjogI2E1YTVhNTtcclxufVxyXG4uY291cnNlX3ByaWNlXHJcbntcclxuXHR3aWR0aDogNjdweDtcclxuXHRoZWlnaHQ6IDY3cHg7XHJcblx0YmFja2dyb3VuZDogI2ZmYjYwNjtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4uY291cnNlX3ByaWNlIHNwYW5cclxue1xyXG5cdGNvbG9yOiAjRkZGRkZGO1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdG1hcmdpbi10b3A6IDdweDtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4xMC4gUmVnaXN0ZXJcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLnJlZ2lzdGVyXHJcbntcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG4ucmVnaXN0ZXJfc2VjdGlvblxyXG57XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZDogI2ZmYjYwNjtcclxuXHRwYWRkaW5nLXRvcDogMTU2cHg7XHJcblx0cGFkZGluZy1ib3R0b206IDE2MXB4O1xyXG59XHJcbi5yZWdpc3Rlcl9jb250ZW50XHJcbntcclxuXHR3aWR0aDogNTIycHg7XHJcbn1cclxuLnJlZ2lzdGVyX3RpdGxlXHJcbntcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxuXHRtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjYzO1xyXG59XHJcbi5yZWdpc3Rlcl90aXRsZTpsYXN0LWNoaWxkXHJcbntcclxuXHRtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLnJlZ2lzdGVyX3RpdGxlXHRzcGFuXHJcbntcclxuXHRjb2xvcjogIzFhMWExYTtcclxufVxyXG4ucmVnaXN0ZXJfdGV4dFxyXG57XHJcblx0Y29sb3I6ICNGRkZGRkY7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRtYXJnaW4tdG9wOiAzMnB4O1xyXG5cdHBhZGRpbmctbGVmdDogMjVweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4ucmVnaXN0ZXJfYnV0dG9uXHJcbntcclxuXHRiYWNrZ3JvdW5kOiAjMWExYTFhO1xyXG5cdG1hcmdpbi10b3A6IDY1cHg7XHJcbn1cclxuLnJlZ2lzdGVyX2J1dHRvbiBhXHJcbntcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4xMS4gU2VhcmNoXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi5zZWFyY2hfc2VjdGlvblxyXG57XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGJhY2tncm91bmQ6ICNlY2VjZWM7XHJcbn1cclxuLnNlYXJjaF9jb250ZW50XHJcbntcclxuXHR3aWR0aDogNTIycHg7XHJcbn1cclxuLnNlYXJjaF9iYWNrZ3JvdW5kXHJcbntcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdG9wYWNpdHk6IDAuMjM7XHJcbn1cclxuLnNlYXJjaF90aXRsZVxyXG57XHJcblx0Y29sb3I6ICMxYTFhMWE7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuMTEuMSBTZWFyY2ggRm9ybVxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4uc2VhcmNoX2Zvcm1cclxue1xyXG5cdG1hcmdpbi10b3A6IDU3cHg7XHJcbn1cclxuLmlucHV0X2ZpZWxkXHJcbntcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDQycHg7XHJcblx0YmFja2dyb3VuZDogI0ZGRkZGRjtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJvcmRlcjogc29saWQgMnB4ICNGRkZGRkY7XHJcblx0cGFkZGluZy1sZWZ0OiAyNXB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbn1cclxuaW5wdXQ6bGFzdC1vZi10eXBlXHJcbntcclxuXHRtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmlucHV0X2ZpZWxkOmZvY3VzXHJcbntcclxuXHRvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyOiBzb2xpZCAycHggI2ZmYjYwNjtcclxufVxyXG4uc2VhcmNoX3N1Ym1pdF9idXR0b25cclxue1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogNDhweDtcclxuXHRiYWNrZ3JvdW5kOiAjZmZiNjA2O1xyXG5cdGNvbG9yOiAjRkZGRkZGO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0bWFyZ2luLXRvcDogMjhweDtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zZWFyY2hfc3VibWl0X2J1dHRvbjpob3ZlclxyXG57XHJcblx0Ym94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuLnNlYXJjaF9zdWJtaXRfYnV0dG9uOmZvY3VzXHJcbntcclxuXHRvdXRsaW5lOiBzb2xpZCAycHggI0ZGRkZGRjtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4xMi4gU2VydmljZXNcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLnNlcnZpY2VzXHJcbntcclxuXHRwYWRkaW5nLWJvdHRvbTogNzZweDtcclxufVxyXG4uc2VydmljZXNfcm93XHJcbntcclxuXHRtYXJnaW4tdG9wOiA2NXB4O1xyXG59XHJcbi5zZXJ2aWNlX2l0ZW1cclxue1xyXG5cdG1hcmdpbi1ib3R0b206IDQxcHg7XHJcbn1cclxuLnNlcnZpY2VfaXRlbSBoM1xyXG57XHJcblx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMjJweDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdGNvbG9yOiAjMWExYTFhO1xyXG5cdG1hcmdpbi1ib3R0b206IDEzcHg7XHJcbn1cclxuLnNlcnZpY2VfaXRlbSBwXHJcbntcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRjb2xvcjogI2E1YTVhNTtcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pY29uX2NvbnRhaW5lclxyXG57XHJcblx0aGVpZ2h0OiA0MXB4O1xyXG5cdHdpZHRoOiBhdXRvO1xyXG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLmljb25fY29udGFpbmVyIGltZ1xyXG57XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbjEzLiBUZXN0aW1vbmlhbHNcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLnRlc3RpbW9uaWFsc1xyXG57XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZDogIzFhMWExYTtcclxufVxyXG4udGVzdGltb25pYWxzX2JhY2tncm91bmRfY29udGFpbmVyXHJcbntcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcbi50ZXN0aW1vbmlhbHNfYmFja2dyb3VuZFxyXG57XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG5cdG9wYWNpdHk6IDAuMjc7XHJcbn1cclxuLnRlc3RpbW9uaWFscyAuc2VjdGlvbl90aXRsZSBoMVxyXG57XHJcblx0Y29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLnRlc3RpbW9uaWFsc19zbGlkZXJfY29udGFpbmVyXHJcbntcclxuXHRwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcblx0cGFkZGluZy1yaWdodDogMzBweDtcclxuXHRtYXJnaW4tdG9wOiA1NnB4O1xyXG59XHJcbi50ZXN0aW1vbmlhbHNfaXRlbVxyXG57XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZy1ib3R0b206IDc1cHg7XHJcbn1cclxuLnF1b3RlXHJcbntcclxuXHRmb250LXNpemU6IDM2cHg7XHJcblx0Y29sb3I6ICNmZmI2MDY7XHJcbn1cclxuLnRlc3RpbW9uaWFsc190ZXh0XHJcbntcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxuXHRtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLnRlc3RpbW9uaWFsX3VzZXJcclxue1xyXG5cdG1hcmdpbi10b3A6IDQzcHg7XHJcbn1cclxuLnRlc3RpbW9uaWFsX2ltYWdlXHJcbntcclxuXHR3aWR0aDogOThweDtcclxuXHRoZWlnaHQ6IDk4cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnRlc3RpbW9uaWFsX2ltYWdlIGltZ1xyXG57XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG59XHJcbi50ZXN0aW1vbmlhbF9uYW1lXHJcbntcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGNvbG9yOiAjZjZhZjAzO1xyXG5cdG1hcmdpbi10b3A6IDIxcHg7XHJcbn1cclxuLnRlc3RpbW9uaWFsX3RpdGxlXHJcbntcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxuXHRtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuLnRlc3RpbW9uaWFsc19zbGlkZXIgLm93bC1kb3RzXHJcbntcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94ICFpbXBvcnRhbnQ7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3ggIWltcG9ydGFudDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXggIWltcG9ydGFudDtcclxuXHRkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnRlc3RpbW9uaWFsc19zbGlkZXIgLm93bC1kb3Qgc3BhblxyXG57XHJcblx0d2lkdGg6IDhweCAhaW1wb3J0YW50O1xyXG5cdGhlaWdodDogOHB4ICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyOiBzb2xpZCAycHggI0ZGRkZGRjtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXN0aW1vbmlhbHNfc2xpZGVyIC5vd2wtZG90LmFjdGl2ZSBzcGFuXHJcbntcclxuXHR3aWR0aDogMTZweCAhaW1wb3J0YW50O1xyXG5cdGhlaWdodDogMTZweCAhaW1wb3J0YW50O1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRiYWNrZ3JvdW5kOiAjZmZiNjA2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuMTQuIEV2ZW50c1xyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4uZXZlbnRfaXRlbXNcclxue1xyXG5cdG1hcmdpbi10b3A6IDY4cHg7XHJcbn1cclxuLmV2ZW50X2l0ZW1cclxue1xyXG5cdG1hcmdpbi1ib3R0b206IDU2cHg7XHJcbn1cclxuLmV2ZW50X2l0ZW06bGFzdC1jaGlsZFxyXG57XHJcblx0bWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5ldmVudF9kYXRlXHJcbntcclxuXHR3aWR0aDogMTMxcHg7XHJcblx0aGVpZ2h0OiAxMzFweDtcclxuXHRib3JkZXI6IHNvbGlkIDJweCAjZmZiNjA2O1xyXG5cdG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbn1cclxuLmV2ZW50X2RheVxyXG57XHJcblx0Zm9udC1zaXplOiA0OHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0Y29sb3I6ICNmZmI2MDY7XHJcblx0bWFyZ2luLWJvdHRvbTogMXB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbi5ldmVudF9tb250aFxyXG57XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0Y29sb3I6ICNmZmI2MDY7XHJcbn1cclxuLmV2ZW50X25hbWUgYVxyXG57XHJcblx0Zm9udC1zaXplOiAyMnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0Y29sb3I6ICMxYTFhMWE7XHJcbn1cclxuLmV2ZW50X25hbWUgYTpob3ZlclxyXG57XHJcblx0Y29sb3I6ICNmZmI2MDY7XHJcbn1cclxuLmV2ZW50X2xvY2F0aW9uXHJcbntcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRjb2xvcjogIzFhMWExYTtcclxuXHRtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuLmV2ZW50X2NvbnRlbnQgcFxyXG57XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRjb2xvcjogI2E1YTVhNTtcclxuXHRtYXJnaW4tdG9wOiAyMXB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDEzcHg7XHJcbn1cclxuLmV2ZW50X2ltYWdlXHJcbntcclxuXHJcbn1cclxuLmV2ZW50X2ltYWdlIGltZ1xyXG57XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuMTUuIEZvb3RlclxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4uZm9vdGVyXHJcbntcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nLXRvcDogODZweDtcclxuXHRiYWNrZ3JvdW5kOiAjMWExYTFhO1xyXG59XHJcbi5mb290ZXIgLnNlY3Rpb25fdGl0bGUgaDFcclxue1xyXG5cdGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbjE1LjEgTmV3c2xldHRlclxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4ubmV3c2xldHRlclxyXG57XHJcblx0cGFkZGluZy1ib3R0b206IDg1cHg7XHJcblx0Ym9yZGVyLWJvdHRvbTogc29saWQgMnB4ICM0ZDRlNGU7XHJcbn1cclxuLm5ld3NsZXR0ZXJfZm9ybV9jb250YWluZXJcclxue1xyXG5cdHdpZHRoOiA2MCU7XHJcblx0bWFyZ2luLXRvcDogNDhweDtcclxufVxyXG4ubmV3c2xldHRlcl9lbWFpbFxyXG57XHJcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDE2NHB4KTtcclxuXHRoZWlnaHQ6IDQycHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdHBhZGRpbmctbGVmdDogMjdweDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdGNvbG9yOiAjMWExYTFhO1xyXG59XHJcbi5uZXdzbGV0dGVyX2VtYWlsOmZvY3VzXHJcbntcclxuXHRvdXRsaW5lOiBzb2xpZCAycHggI2ZmYjYwNjtcclxufVxyXG4ubmV3c2xldHRlcl9zdWJtaXRfYnRuXHJcbntcclxuXHR3aWR0aDogMTY0cHg7XHJcblx0aGVpZ2h0OiA0MnB4O1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRiYWNrZ3JvdW5kOiAjZmZiNjA2O1xyXG5cdGNvbG9yOiAjRkZGRkZGO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubmV3c2xldHRlcl9zdWJtaXRfYnRuOmZvY3VzXHJcbntcclxuXHRib3JkZXI6IHNvbGlkIDJweCAjRkZGRkZGO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbjE1LjIgRm9vdGVyIENvbnRlbnRcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLmZvb3Rlcl9jb250ZW50XHJcbntcclxuXHRwYWRkaW5nLXRvcDogODBweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogODNweDtcclxuXHRib3JkZXItYm90dG9tOiBzb2xpZCAycHggIzRkNGU0ZTtcclxufVxyXG4uZm9vdGVyX2NvbnRlbnQgLmxvZ29fY29udGFpbmVyXHJcbntcclxuXHRwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG4uZm9vdGVyX2NvbnRlbnQgLmxvZ28gc3BhblxyXG57XHJcblx0Y29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLmZvb3Rlcl9hYm91dF90ZXh0XHJcbntcclxuXHRtYXJnaW4tdG9wOiAyNHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDBweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5mb290ZXJfY29sdW1uX3RpdGxlXHJcbntcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxuXHRwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG4uZm9vdGVyX2NvbHVtbl9jb250ZW50XHJcbntcclxuXHRtYXJnaW4tdG9wOiAzMnB4O1xyXG59XHJcbi5mb290ZXJfbGlzdF9pdGVtXHJcbntcclxuXHRtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG59XHJcbi5mb290ZXJfbGlzdF9pdGVtIGFcclxue1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRjb2xvcjogI2E1YTVhNTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcblx0LW1zLXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG59XHJcbi5mb290ZXJfbGlzdF9pdGVtIGE6aG92ZXJcclxue1xyXG5cdGNvbG9yOiAjZmZiNjA2O1xyXG59XHJcbi5mb290ZXJfY29udGFjdF9pdGVtXHJcbntcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRjb2xvcjogI2E1YTVhNTtcclxuXHRtYXJnaW4tYm90dG9tOiAyMnB4O1xyXG59XHJcbi5mb290ZXJfY29udGFjdF9pdGVtOmxhc3QtY2hpbGRcclxue1xyXG5cdG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uZm9vdGVyX2NvbnRhY3RfaWNvblxyXG57XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOiAyNHB4O1xyXG5cdGhlaWdodDogMjRweDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uZm9vdGVyX2NvbnRhY3RfaWNvbiBpbWdcclxue1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbjE1LjMgRm9vdGVyIENvcHlyaWdodFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4uZm9vdGVyX2JhclxyXG57XHJcblx0cGFkZGluZy10b3A6IDE5cHg7XHJcblx0cGFkZGluZy1ib3R0b206IDE5cHg7XHJcbn1cclxuLmZvb3Rlcl9zb2NpYWwgLm1lbnVfc29jaWFsX2l0ZW0gYSBpXHJcbntcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxufVxyXG4uZm9vdGVyX3NvY2lhbCAubWVudV9zb2NpYWxfaXRlbSBhIGk6aG92ZXJcclxue1xyXG5cdGNvbG9yOiAjZmZiNjA2O1xyXG59XHJcbi5mb290ZXJfc29jaWFsIC5tZW51X3NvY2lhbF9pdGVtOmxhc3QtY2hpbGRcclxue1xyXG5cdG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcblxyXG4gLmJ1dHRvbmIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7IC8qIEdyZWVuICovXHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDk1cHg7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdHBhZGRpbmc6IDE2cHggMzJweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0bWFyZ2luOiA0cHggMnB4O1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40czsgLyogU2FmYXJpICovXHJcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uMSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmYjYwNjtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Ym9yZGVyOiAwcHggc29saWQgIzRDQUY1MDtcclxuICB9XHJcblxyXG4gIC5idXR0b24xOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgfVxyXG5cclxuXHJcbi5zaWdudXAtZm9ybXtcclxuXHR3aWR0aDogNDAwcHg7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0cGFkZGluZzogMzBweCAwO1xyXG59XHJcbi5zaWdudXAtZm9ybSBoMntcclxuXHRjb2xvcjogIzYzNjM2MztcclxuXHRtYXJnaW46IDAgMCAxNXB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNpZ251cC1mb3JtIGgyOmJlZm9yZSwgLnNpZ251cC1mb3JtIGgyOmFmdGVye1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0aGVpZ2h0OiAycHg7XHJcblx0d2lkdGg6IDMwJTtcclxuXHRiYWNrZ3JvdW5kOiAjZDRkNGQ0O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDUwJTtcclxuXHR6LWluZGV4OiAyO1xyXG59XHJcbi5zaWdudXAtZm9ybSBoMjpiZWZvcmV7XHJcblx0bGVmdDogMDtcclxufVxyXG4uc2lnbnVwLWZvcm0gaDI6YWZ0ZXJ7XHJcblx0cmlnaHQ6IDA7XHJcbn1cclxuLnNpZ251cC1mb3JtIC5oaW50LXRleHR7XHJcblx0Y29sb3I6ICM5OTk7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNpZ251cC1mb3JtIGZvcm17XHJcblx0Y29sb3I6ICM5OTk7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblx0YmFja2dyb3VuZDogYmxhY2s7XHJcblx0Ym94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuLnNpZ251cC1mb3JtIC5mb3JtLWdyb3Vwe1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnNpZ251cC1mb3JtIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXXtcclxuXHRtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuLnNpZ251cC1mb3JtIC5idG57XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdG1pbi13aWR0aDogMTQwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcblx0b3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2lnbnVwLWZvcm0gLmJ0bjpob3ZlcntcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0bWluLXdpZHRoOiAxNDBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaWdudXAtZm9ybSAucm93IGRpdjpmaXJzdC1jaGlsZHtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5zaWdudXAtZm9ybSAucm93IGRpdjpsYXN0LWNoaWxke1xyXG5cdHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4uc2lnbnVwLWZvcm0gYXtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uc2lnbnVwLWZvcm0gYTpob3ZlcntcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnNpZ251cC1mb3JtIGZvcm0gYXtcclxuXHRjb2xvcjogIzVjYjg1YztcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnNpZ251cC1mb3JtIGZvcm0gYTpob3ZlcntcclxuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuQGNoYXJzZXQgXCJ1dGYtOFwiO1xyXG4vKiBDU1MgRG9jdW1lbnQgKi9cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbltUYWJsZSBvZiBDb250ZW50c11cclxuXHJcbjEuIDE2MDBweFxyXG4yLiAxNDQwcHhcclxuMy4gMTI4MHB4XHJcbjQuIDExOTlweFxyXG41LiAxMDI0cHhcclxuNi4gOTkxcHhcclxuNy4gOTU5cHhcclxuOC4gODgwcHhcclxuOS4gNzY4cHhcclxuMTAuIDc2N3B4XHJcbjExLiA1MzlweFxyXG4xMi4gNDc5cHhcclxuMTMuIDQwMHB4XHJcblxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKioqKioqKioqKioqXHJcbjEuIDE2MDBweFxyXG4qKioqKioqKioqKiovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweClcclxue1xyXG5cclxufVxyXG5cclxuLyoqKioqKioqKioqKlxyXG4yLiAxNDQwcHhcclxuKioqKioqKioqKioqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpXHJcbntcclxuXHJcbn1cclxuXHJcbi8qKioqKioqKioqKipcclxuMy4gMTM4MHB4XHJcbioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM4MHB4KVxyXG57XHJcblx0LmhlYWRlclxyXG5cdHtcclxuXHRcdHdpZHRoOiAxMjAwcHg7XHJcblx0fVxyXG5cdC5oZWFkZXJfY29udGVudFxyXG5cdHtcclxuXHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAyMTlweCk7XHJcblx0fVxyXG5cdC5tYWluX25hdl9jb250YWluZXJcclxuXHR7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiA2M3B4O1xyXG5cdH1cclxuXHQuaGVhZGVyX3NpZGVcclxuXHR7XHJcblx0XHR3aWR0aDogMjE5cHg7XHJcblx0fVxyXG5cdC5oZWFkZXJfc2lkZSBzcGFuXHJcblx0e1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdH1cclxuXHQuaGVhZGVyX3NpZGUgaW1nXHJcblx0e1xyXG5cdFx0d2lkdGg6IDIwcHg7XHJcblx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0fVxyXG59XHJcblxyXG4vKioqKioqKioqKioqXHJcbjMuIDEyODBweFxyXG4qKioqKioqKioqKiovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweClcclxue1xyXG5cdC5oZWFkZXJcclxuXHR7XHJcblx0XHR3aWR0aDogOTAlO1xyXG5cdH1cclxuXHQuaGVhZGVyX2NvbnRlbnRcclxuXHR7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblx0LmhlYWRlcl9zaWRlXHJcblx0e1xyXG5cdFx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQubWFpbl9uYXZfY29udGFpbmVyXHJcblx0e1xyXG5cdFx0cGFkZGluZy1yaWdodDogNTNweDtcclxuXHR9XHJcblx0Lmhlcm9fc2xpZGVfY29udGVudCBoMVxyXG5cdHtcclxuXHRcdGZvbnQtc2l6ZTogNTZweDtcclxuXHR9XHJcblx0LmNhcmQtdGl0bGVcclxuXHR7XHJcblx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0fVxyXG5cdC5yZWdpc3Rlcl9jb250ZW50LFxyXG5cdC5zZWFyY2hfY29udGVudFxyXG5cdHtcclxuXHRcdHdpZHRoOiA0NDJweDtcclxuXHR9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKipcclxuNC4gMTE5OXB4XHJcbioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KVxyXG57XHJcblx0Lmhlcm9fYm94XHJcblx0e1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cdH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKlxyXG40LiAxMTAwcHhcclxuKioqKioqKioqKioqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpXHJcbntcclxuXHJcbn1cclxuXHJcbi8qKioqKioqKioqKipcclxuNS4gMTAyNHB4XHJcbioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KVxyXG57XHJcblx0Lm1haW5fbmF2X2l0ZW1cclxuXHR7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDMzcHg7XHJcblx0fVxyXG59XHJcblxyXG4vKioqKioqKioqKioqXHJcbjYuIDk5MXB4XHJcbioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpXHJcbntcclxuXHQubWFpbl9uYXZfY29udGFpbmVyXHJcblx0e1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblx0LmxvZ29fY29udGFpbmVyXHJcblx0e1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAzMHB4O1xyXG5cdH1cclxuXHQuaGFtYnVyZ2VyX2NvbnRhaW5lclxyXG5cdHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxuXHQuaGVyb19zbGlkZV9jb250ZW50IGgxXHJcblx0e1xyXG5cdFx0Zm9udC1zaXplOiA0OHB4O1xyXG5cdH1cclxuXHQuaGVyb19ib3hlc1xyXG5cdHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0cGFkZGluZy10b3A6IDExN3B4O1xyXG5cdH1cclxuXHQuaGVyb19ib3hlc19pbm5lclxyXG5cdHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHRvcDogYXV0bztcclxuXHRcdGxlZnQ6IGF1dG87XHJcblx0fVxyXG5cdC5oZXJvX2JveFxyXG5cdHtcclxuXHRcdHBhZGRpbmctbGVmdDogNTBweDtcclxuXHR9XHJcblx0Lmhlcm9fYm94X2NvbFxyXG5cdHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0fVxyXG5cdC5oZXJvX2JveF9jb2w6bGFzdC1jaGlsZFxyXG5cdHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDBweDtcclxuXHR9XHJcblx0LmNvdXJzZV9ib3hcclxuXHR7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG5cdH1cclxuXHQuY291cnNlX2JveDpsYXN0LWNoaWxkXHJcblx0e1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMHB4O1xyXG5cdH1cclxuXHQuc2VhcmNoX3NlY3Rpb25cclxuXHR7XHJcblx0XHRwYWRkaW5nLXRvcDogMTU2cHg7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMTYxcHg7XHJcblx0fVxyXG5cdC5yZWdpc3Rlcl9jb250ZW50LFxyXG5cdC5zZWFyY2hfY29udGVudFxyXG5cdHtcclxuXHRcdHdpZHRoOiA3NSU7XHJcblx0fVxyXG5cdC50ZXN0aW1vbmlhbHNfc2xpZGVyX2NvbnRhaW5lclxyXG5cdHtcclxuXHRcdHBhZGRpbmctbGVmdDogMHB4O1xyXG5cdFx0cGFkZGluZy1yaWdodDogMHB4O1xyXG5cdH1cclxuXHQuZXZlbnRfZGF0ZVxyXG5cdHtcclxuXHRcdG1hcmdpbi10b3A6IDMwcHg7XHJcblx0fVxyXG5cdC5ldmVudF9uYW1lXHJcblx0e1xyXG5cdFx0bWFyZ2luLXRvcDogMTdweDtcclxuXHR9XHJcblx0LmV2ZW50X2NvbnRlbnQgcFxyXG5cdHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDBweDtcclxuXHR9XHJcblx0Lm5ld3NsZXR0ZXJfZm9ybV9jb250YWluZXJcclxuXHR7XHJcblx0XHR3aWR0aDogOTAlO1xyXG5cdH1cclxuXHQuZm9vdGVyX2NvbFxyXG5cdHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0fVxyXG5cdC5mb290ZXJfY29sOmxhc3QtY2hpbGRcclxuXHR7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAwcHg7XHJcblx0fVxyXG59XHJcblxyXG4vKioqKioqKioqKioqXHJcbjcuIDk1OXB4XHJcbioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpXHJcbntcclxuXHJcbn1cclxuXHJcbi8qKioqKioqKioqKipcclxuOC4gODgwcHhcclxuKioqKioqKioqKioqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODBweClcclxue1xyXG5cclxufVxyXG5cclxuLyoqKioqKioqKioqKlxyXG45LiA3NjhweFxyXG4qKioqKioqKioqKiovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KVxyXG57XHJcblxyXG59XHJcblxyXG4vKioqKioqKioqKioqXHJcbjEwLiA3NjdweFxyXG4qKioqKioqKioqKiovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KVxyXG57XHJcblx0Lm1lbnVfY29udGFpbmVyXHJcblx0e1xyXG5cdFx0cmlnaHQ6IC0xMDB2dztcclxuXHRcdHdpZHRoOiAxMDB2dztcclxuXHRcdGhlaWdodDogMTAwdmg7XHJcblx0fVxyXG5cdC5uZXdzbGV0dGVyX2VtYWlsXHJcblx0e1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cdC5uZXdzbGV0dGVyX3N1Ym1pdF9idG5cclxuXHR7XHJcblx0XHRtYXJnaW4tdG9wOiAxNXB4O1xyXG5cdH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKlxyXG4xMS4gNTc1cHhcclxuKioqKioqKioqKioqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweClcclxue1xyXG5cdGgxe2ZvbnQtc2l6ZTogMjRweDt9XHJcblx0cHtmb250LXNpemU6MTNweDt9XHJcblx0LmhlYWRlclxyXG5cdHtcclxuXHRcdGhlaWdodDogNzRweDtcclxuXHR9XHJcblx0LmxvZ29fY29udGFpbmVyXHJcblx0e1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG5cdH1cclxuXHQubG9nbyBpbWdcclxuXHR7XHJcblx0XHR3aWR0aDogMzBweDtcclxuXHR9XHJcblx0LmxvZ28gc3BhblxyXG5cdHtcclxuXHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHR9XHJcblx0LmhhbWJ1cmdlcl9jb250YWluZXJcclxuXHR7XHJcblx0XHRyaWdodDogNXB4O1xyXG5cdH1cclxuXHQubWVudVxyXG5cdHtcclxuXHRcdHRvcDogNzBweDtcclxuXHR9XHJcblx0Lm1lbnVfaXRlbVxyXG5cdHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDBweDtcclxuXHR9XHJcblx0Lm1lbnVfaXRlbSBhXHJcblx0e1xyXG5cdFx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdH1cclxuXHQubWVudV9jb3B5cmlnaHRcclxuXHR7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHQubWVudV9zb2NpYWxfY29udGFpbmVyXHJcblx0e1xyXG5cdFx0bWFyZ2luLXRvcDogNTBweDtcclxuXHR9XHJcblx0Lm1lbnVfY2xvc2VfY29udGFpbmVyXHJcblx0e1xyXG5cdFx0cmlnaHQ6IDMwcHg7XHJcblx0XHR0b3A6IDM0cHg7XHJcblx0fVxyXG5cdC5oZXJvX3NsaWRlcl9uYXZcclxuXHR7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHQuaGVyb19zbGlkZV9jb250ZW50XHJcblx0e1xyXG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG5cdFx0cGFkZGluZy1yaWdodDogMTVweDtcclxuXHR9XHJcblx0LmNhcmQtdGl0bGVcclxuXHR7XHJcblx0XHRtYXJnaW4tdG9wOiAzMHB4O1xyXG5cdH1cclxuXHQuY2FyZC10aXRsZSBhXHJcblx0e1xyXG5cdFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdH1cclxuXHQuY2FyZC10ZXh0XHJcblx0e1xyXG5cdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdH1cclxuXHQucHJpY2VfYm94XHJcblx0e1xyXG5cdFx0bWFyZ2luLXRvcDogMzdweDtcclxuXHR9XHJcblx0LnJlZ2lzdGVyX3NlY3Rpb24sXHJcblx0LnNlYXJjaF9zZWN0aW9uXHJcblx0e1xyXG5cdFx0cGFkZGluZy10b3A6IDExNXB4O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDEyMHB4O1xyXG5cdH1cclxuXHQucmVnaXN0ZXJfY29udGVudCxcclxuXHQuc2VhcmNoX2NvbnRlbnRcclxuXHR7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHBhZGRpbmctbGVmdDogMTVweDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcblx0fVxyXG5cdC5yZWdpc3Rlcl90ZXh0XHJcblx0e1xyXG5cdFx0bWFyZ2luLXRvcDogMjVweDtcclxuXHR9XHJcblx0LnJlZ2lzdGVyX2J1dHRvblxyXG5cdHtcclxuXHRcdG1hcmdpbi10b3A6IDUzcHg7XHJcblx0fVxyXG5cdC50ZXN0aW1vbmlhbHNfc2xpZGVyIC5vd2wtZG90c1xyXG5cdHtcclxuXHRcdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuXHR9XHJcblx0LnRlc3RpbW9uaWFsc19pdGVtXHJcblx0e1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDBweDtcclxuXHR9XHJcblx0LmV2ZW50X2RhdGVcclxuXHR7XHJcblx0XHR3aWR0aDogMTAwcHg7XHJcblx0XHRoZWlnaHQ6IDEwMHB4O1xyXG5cdH1cclxuXHQuZXZlbnRfZGF5XHJcblx0e1xyXG5cdFx0Zm9udC1zaXplOiAzNnB4O1xyXG5cdH1cclxuXHQuZXZlbnRfbW9udGhcclxuXHR7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0fVxyXG5cdC5ldmVudF9uYW1lXHJcblx0e1xyXG5cdFx0bWFyZ2luLXRvcDogNXB4O1xyXG5cdH1cclxuXHQuZm9vdGVyX2JhclxyXG5cdHtcclxuXHRcdHBhZGRpbmctdG9wOiA0OXB4O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDUycHg7XHJcblx0fVxyXG5cdC5mb290ZXJfc29jaWFsXHJcblx0e1xyXG5cdFx0bWFyZ2luLXRvcDogMjBweDtcclxuXHR9XHJcblx0LmZvb3Rlcl9jb3B5cmlnaHQgc3BhblxyXG5cdHtcclxuXHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHR9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKipcclxuMTEuIDUzOXB4XHJcbioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTM5cHgpXHJcbntcclxuXHJcbn1cclxuXHJcbi8qKioqKioqKioqKipcclxuMTIuIDQ4MHB4XHJcbioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpXHJcbntcclxuXHJcbn1cclxuXHJcbi8qKioqKioqKioqKipcclxuMTMuIDQ3OXB4XHJcbioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpXHJcbntcclxuXHQuaGVhZGVyXHJcblx0e1xyXG5cdFx0aGVpZ2h0OiA2MHB4O1xyXG5cdFx0dG9wOiAxNXB4O1xyXG5cdH1cclxuXHQuaGVyb19zbGlkZV9jb250ZW50IGgxXHJcblx0e1xyXG5cdFx0Zm9udC1zaXplOiAyOHB4O1xyXG5cdH1cclxuXHQuaGVyb19zbGlkZV9jb250ZW50IGgxIHNwYW5cclxuXHR7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDVweDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDVweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAwcHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDBweDtcclxuXHR9XHJcblx0Lmhlcm9fYm94ZXNcclxuXHR7XHJcblx0XHRwYWRkaW5nLXRvcDogODBweDtcclxuXHR9XHJcblx0Lmhlcm9fYm94XHJcblx0e1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG5cdFx0aGVpZ2h0OiAxMjBweDtcclxuXHR9XHJcblx0Lmhlcm9fYm94X2NvbnRlbnRcclxuXHR7XHJcblx0XHRwYWRkaW5nLXRvcDogNnB4O1xyXG5cdH1cclxuXHQuaGVyb19ib3ggaW1nXHJcblx0e1xyXG5cdFx0d2lkdGg6IDQ1cHg7XHJcblx0fVxyXG5cdC5oZXJvX2JveF90aXRsZVxyXG5cdHtcclxuXHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDNweDtcclxuXHR9XHJcblx0Lmhlcm9fYm94X2xpbmtcclxuXHR7XHJcblx0XHRmb250LXNpemU6IDEwcHg7XHJcblx0fVxyXG59XHJcblxyXG4vKioqKioqKioqKioqXHJcbjE0LiA0MDBweFxyXG4qKioqKioqKioqKiovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KVxyXG57XHJcblxyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AppComponent = class AppComponent {
    constructor(renderer, authService, router) {
        this.renderer = renderer;
        this.authService = authService;
        this.router = router;
        this.toolBar = null;
        this.title = 'frontend';
        this.isLoggedIn = false;
        this.authenticated = false;
    }
    ngOnInit() {
        this.toolBar = null;
        this.authService.checkUser();
        this.authListenerSub = this.authService.getUser()
            .subscribe((isAuthenticated) => {
            this.authenticated = isAuthenticated;
            if (!this.authenticated) {
                if (this.router.url === '/homePage' || this.router.url === '/notes' || this.router.url === '/questionAnswers') {
                    this.router.navigate(['/', 'login']);
                }
                this.isLoggedIn = false;
                this.toolBar = true;
            }
            else {
                if (this.router.url === '/mainPage' || this.router.url === '/login' || this.router.url === '/register') {
                    this.router.navigate(['/', 'homePage']);
                }
                this.isLoggedIn = true;
                this.toolBar = true;
            }
        });
    }
    ngOnDestroy() {
        this.authListenerSub.unsubscribe();
    }
    Logout() {
        this.authService.logout();
        this.router.navigate(['/', 'mainPage']);
        this.isLoggedIn = true;
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/log-in/log-in.component */ "./src/app/components/log-in/log-in.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/components/home-page/home-page.component.ts");
/* harmony import */ var _components_question_answers_question_answers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/question-answers/question-answers.component */ "./src/app/components/question-answers/question-answers.component.ts");
/* harmony import */ var _components_notes_notes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/notes/notes.component */ "./src/app/components/notes/notes.component.ts");
/* harmony import */ var _components_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/password-reset/password-reset.component */ "./src/app/components/password-reset/password-reset.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services.service */ "./src/app/services.service.ts");
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/main-page/main-page.component */ "./src/app/components/main-page/main-page.component.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_6__["LogInComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
            _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_12__["HomePageComponent"],
            _components_question_answers_question_answers_component__WEBPACK_IMPORTED_MODULE_13__["QuestionAnswersComponent"],
            _components_notes_notes_component__WEBPACK_IMPORTED_MODULE_14__["NotesComponent"],
            _components_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_15__["PasswordResetComponent"],
            _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_18__["MainPageComponent"]
        ],
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_8__["AngularMaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"]
        ],
        providers: [_services_service__WEBPACK_IMPORTED_MODULE_17__["ServicesService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    createUser(email, password, uName) {
        const authData = { email, password, uName };
        return this.http
            .post('https://us-central1-learning-5ba3a.cloudfunctions.net/app/signup', authData);
    }
    loginUser(email, password) {
        const authData = { email, password };
        return this.http
            .post('https://learning-facilitator.herokuapp.com/login', authData);
    }
    getUser() {
        return this.authStatusListener.asObservable();
    }
    checkUser() {
        this.http.get('https://learning-facilitator.herokuapp.com/checkUser')
            .subscribe((response) => {
            if (response.value !== true) {
                this.authStatusListener.next(false);
            }
            else {
                this.authStatusListener.next(true);
            }
        });
    }
    logout() {
        this.http.get('https://learning-facilitator.herokuapp.com/logout')
            .subscribe((response) => {
            this.authStatusListener.next(false);
            this.router.navigate(['/']);
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/components/home-page/home-page.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".buttons_container\r\n{\r\n\tmargin-top: 107px;\r\n}\r\n.button\r\n{\r\n\tdisplay: inline-block;\r\n\twidth: 188px;\r\n\theight: 100px;\r\n\tvertical-align: middle;\r\n\tmargin-right: 113px;\r\n\tmargin-bottom: 15px;\r\n}\r\n.button:hover\r\n{\r\n\tbox-shadow: 0px 10px 20px rgba(0,0,0,0.2);\r\n}\r\n.button a\r\n{\r\n\tline-height: 102px;\r\n\tdisplay: block;\r\n\tfont-size: 16px;\r\n\tfont-weight: 700;\r\n}\r\n.button_color_1\r\n{\r\n\tbackground: #ffb606;\r\n}\r\n.button_color_1 a\r\n{\r\n\tcolor: #FFFFFF;\r\n}\r\n.button_color_2\r\n{\r\n\tbackground: #1a1a1a;\r\n}\r\n.button_color_2 a\r\n{\r\n\tcolor: #FFFFFF;\r\n}\r\n.button_line_1\r\n{\r\n\tbackground: transparent;\r\n\tborder: solid 2px #ffb606;\r\n}\r\n.button_line_1 a\r\n{\r\n\tcolor: #ffb606;\r\n}\r\n.button_line_2\r\n{\r\n\tbackground: transparent;\r\n\tborder: solid 2px #1a1a1a;\r\n}\r\n.button_line_2 a\r\n{\r\n\tcolor: #1a1a1a;\r\n}\r\n.home_content {\r\n    position: absolute;\r\n    left: 50%;\r\n    bottom: 70%;\r\n    -webkit-transform: translateX(-50%);\r\n    transform: translateX(-50%);\r\n    background: #ffb606;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    padding-left: 39px;\r\n    padding-right: 42px;\r\n}\r\n.home_content a{\r\n\t\tfont-family: Arial;\r\n  font-size: 100%;\r\n\t}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsaUJBQWlCO0FBQ2xCO0FBQ0E7O0NBRUMscUJBQXFCO0NBQ3JCLFlBQVk7Q0FDWixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixtQkFBbUI7QUFDcEI7QUFDQTs7Q0FFQyx5Q0FBeUM7QUFDMUM7QUFDQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7QUFDQTs7Q0FFQyxtQkFBbUI7QUFDcEI7QUFDQTs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTs7Q0FFQyxtQkFBbUI7QUFDcEI7QUFDQTs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTs7Q0FFQyx1QkFBdUI7Q0FDdkIseUJBQXlCO0FBQzFCO0FBQ0E7O0NBRUMsY0FBYztBQUNmO0FBQ0E7O0NBRUMsdUJBQXVCO0NBQ3ZCLHlCQUF5QjtBQUMxQjtBQUNBOztDQUVDLGNBQWM7QUFDZjtBQUVHO0lBQ0Msa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsbUNBQW1DO0lBSW5DLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBRUM7RUFDQyxrQkFBa0I7RUFDbEIsZUFBZTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbnNfY29udGFpbmVyXHJcbntcclxuXHRtYXJnaW4tdG9wOiAxMDdweDtcclxufVxyXG4uYnV0dG9uXHJcbntcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0d2lkdGg6IDE4OHB4O1xyXG5cdGhlaWdodDogMTAwcHg7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRtYXJnaW4tcmlnaHQ6IDExM3B4O1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLmJ1dHRvbjpob3ZlclxyXG57XHJcblx0Ym94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuLmJ1dHRvbiBhXHJcbntcclxuXHRsaW5lLWhlaWdodDogMTAycHg7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLmJ1dHRvbl9jb2xvcl8xXHJcbntcclxuXHRiYWNrZ3JvdW5kOiAjZmZiNjA2O1xyXG59XHJcbi5idXR0b25fY29sb3JfMSBhXHJcbntcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxufVxyXG4uYnV0dG9uX2NvbG9yXzJcclxue1xyXG5cdGJhY2tncm91bmQ6ICMxYTFhMWE7XHJcbn1cclxuLmJ1dHRvbl9jb2xvcl8yIGFcclxue1xyXG5cdGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbi5idXR0b25fbGluZV8xXHJcbntcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRib3JkZXI6IHNvbGlkIDJweCAjZmZiNjA2O1xyXG59XHJcbi5idXR0b25fbGluZV8xIGFcclxue1xyXG5cdGNvbG9yOiAjZmZiNjA2O1xyXG59XHJcbi5idXR0b25fbGluZV8yXHJcbntcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRib3JkZXI6IHNvbGlkIDJweCAjMWExYTFhO1xyXG59XHJcbi5idXR0b25fbGluZV8yIGFcclxue1xyXG5cdGNvbG9yOiAjMWExYTFhO1xyXG59XHJcblxyXG4gIFx0LmhvbWVfY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBib3R0b206IDcwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmYjYwNjtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM5cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MnB4O1xyXG59XHJcblxyXG5cdC5ob21lX2NvbnRlbnQgYXtcclxuXHRcdGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICBmb250LXNpemU6IDEwMCU7XHJcblx0fVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/home-page/home-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.ts ***!
  \*************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");




let HomePageComponent = class HomePageComponent {
    constructor(renderer, authService, router) {
        this.renderer = renderer;
        this.authService = authService;
        this.router = router;
        this.authenticated = false;
        this.loadscript();
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        // this.authListenerSub.unsubscribe();
    }
    loadscript() {
        const body = document.body;
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'assets/plugins/OwlCarousel2-2.2.1/owl.carousel.js';
        this.renderer.appendChild(document.body, script);
        script = document.createElement('script');
        script.src = 'assets/js/custom.js';
        script.type = 'text/javascript';
        this.renderer.appendChild(document.body, script);
        script = document.createElement('script');
        script.src = 'assets/js/afterLogin.js';
        script.type = 'text/javascript';
        this.renderer.appendChild(document.body, script);
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page/home-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page.component.css */ "./src/app/components/home-page/home-page.component.css")).default]
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/components/log-in/log-in.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/log-in/log-in.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html,body{height:100%;margin:0;padding:0;}\r\nbody{background-image:url(https://lh4.googleusercontent.com/-XplyTa1Za-I/VMSgIyAYkHI/AAAAAAAADxM/oL-rD6VP4ts/w1184-h666/Android-Lollipop-wallpapers-Google-Now-Wallpaper-2.png);background-position:center;background-size:cover;background-repeat:no-repeat;min-height:100vh;font-family:'Roboto', sans-serif;}\r\n.app-header{-webkit-box-pack:justify;justify-content:space-between;position:fixed;top:0;left:0;right:0;z-index:2;box-shadow:0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);}\r\n.login-wrapper{height:50%;}\r\n.positronx{text-decoration:none;color:#ffffff;}\r\n.box{position:relative;top:0%;opacity:1;float:left;padding:60px 50px 40px 50px;width:100%;background:#fff;border-radius:10px;transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);z-index:5;max-width:450px;}\r\n.box.back{transform:scale(.95);-webkit-transform:scale(.95);-ms-transform:scale(.95);top:-20px;opacity:.8;z-index:-1;}\r\n.box:before{content:\"\";width:100%;height:30px;border-radius:10px;position:absolute;top:0px;background:rgba(255, 255, 255, .6);left:0;transform:scale(.95);-webkit-transform:scale(.95);-ms-transform:scale(.95);z-index:-1;}\r\n.login-wrapper .example-form{min-width:100%;max-width:400px;width:100%;}\r\n.login-wrapper .example-full-width,.login-wrapper .btn-block{width:100%;}\r\n.login-wrapper mat-card-header{text-align:center;width:100%;display:block;font-weight:700;}\r\n.login-wrapper mat-card-header mat-card-title{font-size:30px;margin:0;}\r\n.login-wrapper .mat-card{padding:40px 70px 50px;}\r\n.login-wrapper .mat-stroked-button{border:1px solid currentColor;line-height:54px;background:#FFF7FA;}\r\n.login-wrapper .mat-form-field-appearance-legacy .mat-form-field-infix{padding:0.8375em 0;}\r\n.login-wrapper {\r\n  background-image:url('151059.jpg');\r\n  background-size:cover;\r\n  background-repeat:no-repeat;\r\n  width: 100%;\r\n  height: 700px;\r\n  padding-bottom: 100px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2ctaW4vbG9nLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVSxXQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztBQUN6QyxLQUFLLDBLQUEwSyxDQUFDLDBCQUEwQixDQUFDLHFCQUFxQixDQUFDLDJCQUEyQixDQUFDLGdCQUFnQixDQUFDLGdDQUFnQyxDQUFDO0FBQy9TLFlBQVksd0JBQTZCLENBQTdCLDZCQUE2QixDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsNkdBQTZHLENBQUM7QUFDdE0sZUFBZSxVQUFVLENBQUM7QUFDMUIsV0FBVyxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7QUFDOUMsS0FBSyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLDBCQUEwQixDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUM7QUFDNU4sVUFBVSxvQkFBb0IsQ0FBQyw0QkFBNEIsQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztBQUNySCxZQUFZLFVBQVUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsNEJBQTRCLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDO0FBQzNOLDZCQUE2QixjQUFjLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztBQUN2RSw2REFBNkQsVUFBVSxDQUFDO0FBQ3hFLCtCQUErQixpQkFBaUIsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQztBQUMxRiw4Q0FBOEMsY0FBYyxDQUFDLFFBQVEsQ0FBQztBQUN0RSx5QkFBeUIsc0JBQXNCLENBQUM7QUFDaEQsbUNBQW1DLDZCQUE2QixDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDO0FBQ3JHLHVFQUF1RSxrQkFBa0IsQ0FBQztBQUcxRjtFQUNFLGtDQUFzRDtFQUN0RCxxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2ctaW4vbG9nLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLGJvZHl7aGVpZ2h0OjEwMCU7bWFyZ2luOjA7cGFkZGluZzowO31cclxuYm9keXtiYWNrZ3JvdW5kLWltYWdlOnVybChodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLVhwbHlUYTFaYS1JL1ZNU2dJeUFZa0hJL0FBQUFBQUFBRHhNL29MLXJENlZQNHRzL3cxMTg0LWg2NjYvQW5kcm9pZC1Mb2xsaXBvcC13YWxscGFwZXJzLUdvb2dsZS1Ob3ctV2FsbHBhcGVyLTIucG5nKTtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtiYWNrZ3JvdW5kLXNpemU6Y292ZXI7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O21pbi1oZWlnaHQ6MTAwdmg7Zm9udC1mYW1pbHk6J1JvYm90bycsIHNhbnMtc2VyaWY7fVxyXG4uYXBwLWhlYWRlcntqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbjtwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDt6LWluZGV4OjI7Ym94LXNoYWRvdzowIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTt9XHJcbi5sb2dpbi13cmFwcGVye2hlaWdodDo1MCU7fVxyXG4ucG9zaXRyb254e3RleHQtZGVjb3JhdGlvbjpub25lO2NvbG9yOiNmZmZmZmY7fVxyXG4uYm94e3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDowJTtvcGFjaXR5OjE7ZmxvYXQ6bGVmdDtwYWRkaW5nOjYwcHggNTBweCA0MHB4IDUwcHg7d2lkdGg6MTAwJTtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLXJhZGl1czoxMHB4O3RyYW5zZm9ybTpzY2FsZSgxKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTstbXMtdHJhbnNmb3JtOnNjYWxlKDEpO3otaW5kZXg6NTttYXgtd2lkdGg6NDUwcHg7fVxyXG4uYm94LmJhY2t7dHJhbnNmb3JtOnNjYWxlKC45NSk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjk1KTstbXMtdHJhbnNmb3JtOnNjYWxlKC45NSk7dG9wOi0yMHB4O29wYWNpdHk6Ljg7ei1pbmRleDotMTt9XHJcbi5ib3g6YmVmb3Jle2NvbnRlbnQ6XCJcIjt3aWR0aDoxMDAlO2hlaWdodDozMHB4O2JvcmRlci1yYWRpdXM6MTBweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MHB4O2JhY2tncm91bmQ6cmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7bGVmdDowO3RyYW5zZm9ybTpzY2FsZSguOTUpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC45NSk7LW1zLXRyYW5zZm9ybTpzY2FsZSguOTUpO3otaW5kZXg6LTE7fVxyXG4ubG9naW4td3JhcHBlciAuZXhhbXBsZS1mb3Jte21pbi13aWR0aDoxMDAlO21heC13aWR0aDo0MDBweDt3aWR0aDoxMDAlO31cclxuLmxvZ2luLXdyYXBwZXIgLmV4YW1wbGUtZnVsbC13aWR0aCwubG9naW4td3JhcHBlciAuYnRuLWJsb2Nre3dpZHRoOjEwMCU7fVxyXG4ubG9naW4td3JhcHBlciBtYXQtY2FyZC1oZWFkZXJ7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrO2ZvbnQtd2VpZ2h0OjcwMDt9XHJcbi5sb2dpbi13cmFwcGVyIG1hdC1jYXJkLWhlYWRlciBtYXQtY2FyZC10aXRsZXtmb250LXNpemU6MzBweDttYXJnaW46MDt9XHJcbi5sb2dpbi13cmFwcGVyIC5tYXQtY2FyZHtwYWRkaW5nOjQwcHggNzBweCA1MHB4O31cclxuLmxvZ2luLXdyYXBwZXIgLm1hdC1zdHJva2VkLWJ1dHRvbntib3JkZXI6MXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtsaW5lLWhlaWdodDo1NHB4O2JhY2tncm91bmQ6I0ZGRjdGQTt9XHJcbi5sb2dpbi13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzowLjgzNzVlbSAwO31cclxuXHJcblxyXG4ubG9naW4td3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvMTUxMDU5LmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3MDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/log-in/log-in.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/log-in/log-in.component.ts ***!
  \*******************************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");






let LogInComponent = class LogInComponent {
    constructor(app, renderer, authService, router) {
        this.app = app;
        this.renderer = renderer;
        this.authService = authService;
        this.router = router;
        // public isLoading = true;
        this.authenticated = false;
        this.uName = '';
        this.password = '';
        this.errorLoggingUser = false;
        this.loadscript();
    }
    ngOnInit() {
        // this.authService.checkUser();
        // this.authListenerSub = this.authService.getUser()
        // .subscribe((isAuthenticated) => {
        //   this.authenticated = isAuthenticated;
        //   if (!this.authenticated) {
        //     this.isLoading = false;
        //   } else {
        //     this.isLoading = true;
        //     this.router.navigate(['/', 'homePage']);
        //   }
        // });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            uName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)] }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)] })
        });
    }
    ngOnDestroy() {
        // this.authListenerSub.unsubscribe();
    }
    onSubmit() {
        if (this.form.invalid) {
            return;
        }
        this.authService.loginUser(this.form.value.uName, this.form.value.password)
            .subscribe((response) => {
            if (response.message === 'User Logged in.') {
                this.app.isLoggedIn = true;
                this.router.navigate(['/', 'homePage']);
            }
            else {
                this.errorLoggingUser = true;
                this.form.reset();
            }
        });
    }
    loadscript() {
        const body = document.body;
        let script = document.createElement('script');
        script = document.createElement('script');
        script.src = 'assets/js/custom.js';
        script.type = 'text/javascript';
        this.renderer.appendChild(document.body, script);
    }
};
LogInComponent.ctorParameters = () => [
    { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LogInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-log-in',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./log-in.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/log-in/log-in.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./log-in.component.css */ "./src/app/components/log-in/log-in.component.css")).default]
    })
], LogInComponent);



/***/ }),

/***/ "./src/app/components/main-page/main-page.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".buttons_container\r\n{\r\n\tmargin-top: 170px;\r\n}\r\n.button\r\n{\r\n\tdisplay: inline-block;\r\n\twidth: 170px;\r\n\theight: 53px;\r\n\tvertical-align: middle;\r\n\tmargin-right: 9px;\r\n\tmargin-bottom: 15px;\r\n}\r\n.button:hover\r\n{\r\n\tbox-shadow: 0px 10px 20px rgba(0,0,0,0.2);\r\n\tbackground: transparent;\r\n}\r\n.button a\r\n{\r\n\tline-height: 53px;\r\n\tdisplay: block;\r\n\tfont-size: 16px;\r\n\tfont-weight: 700;\r\n}\r\n.button_color_1\r\n{\r\n\tbackground: #ffb606;\r\n}\r\n.button_color_1 a\r\n{\r\n\tcolor: #FFFFFF;\r\n}\r\n.button_color_2\r\n{\r\n\tbackground: #1a1a1a;\r\n}\r\n.button_color_2 a\r\n{\r\n\tcolor: #FFFFFF;\r\n}\r\n.button_line_1\r\n{\r\n\tbackground: transparent;\r\n\tborder: solid 2px #ffb606;\r\n}\r\n.button_line_1 a\r\n{\r\n\tcolor: #ffb606;\r\n}\r\n.button_line_2\r\n{\r\n\tbackground: transparent;\r\n\tborder: solid 2px #1a1a1a;\r\n}\r\n.button_line_2 a\r\n{\r\n\tcolor: #1a1a1a;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsaUJBQWlCO0FBQ2xCO0FBQ0E7O0NBRUMscUJBQXFCO0NBQ3JCLFlBQVk7Q0FDWixZQUFZO0NBQ1osc0JBQXNCO0NBQ3RCLGlCQUFpQjtDQUNqQixtQkFBbUI7QUFDcEI7QUFDQTs7Q0FFQyx5Q0FBeUM7Q0FDekMsdUJBQXVCO0FBQ3hCO0FBQ0E7O0NBRUMsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCO0FBQ0E7O0NBRUMsbUJBQW1CO0FBQ3BCO0FBQ0E7O0NBRUMsY0FBYztBQUNmO0FBQ0E7O0NBRUMsbUJBQW1CO0FBQ3BCO0FBQ0E7O0NBRUMsY0FBYztBQUNmO0FBQ0E7O0NBRUMsdUJBQXVCO0NBQ3ZCLHlCQUF5QjtBQUMxQjtBQUNBOztDQUVDLGNBQWM7QUFDZjtBQUNBOztDQUVDLHVCQUF1QjtDQUN2Qix5QkFBeUI7QUFDMUI7QUFDQTs7Q0FFQyxjQUFjO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25zX2NvbnRhaW5lclxyXG57XHJcblx0bWFyZ2luLXRvcDogMTcwcHg7XHJcbn1cclxuLmJ1dHRvblxyXG57XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOiAxNzBweDtcclxuXHRoZWlnaHQ6IDUzcHg7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRtYXJnaW4tcmlnaHQ6IDlweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5idXR0b246aG92ZXJcclxue1xyXG5cdGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5idXR0b24gYVxyXG57XHJcblx0bGluZS1oZWlnaHQ6IDUzcHg7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLmJ1dHRvbl9jb2xvcl8xXHJcbntcclxuXHRiYWNrZ3JvdW5kOiAjZmZiNjA2O1xyXG59XHJcbi5idXR0b25fY29sb3JfMSBhXHJcbntcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxufVxyXG4uYnV0dG9uX2NvbG9yXzJcclxue1xyXG5cdGJhY2tncm91bmQ6ICMxYTFhMWE7XHJcbn1cclxuLmJ1dHRvbl9jb2xvcl8yIGFcclxue1xyXG5cdGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbi5idXR0b25fbGluZV8xXHJcbntcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRib3JkZXI6IHNvbGlkIDJweCAjZmZiNjA2O1xyXG59XHJcbi5idXR0b25fbGluZV8xIGFcclxue1xyXG5cdGNvbG9yOiAjZmZiNjA2O1xyXG59XHJcbi5idXR0b25fbGluZV8yXHJcbntcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRib3JkZXI6IHNvbGlkIDJweCAjMWExYTFhO1xyXG59XHJcbi5idXR0b25fbGluZV8yIGFcclxue1xyXG5cdGNvbG9yOiAjMWExYTFhO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/main-page/main-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.ts ***!
  \*************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");




let MainPageComponent = class MainPageComponent {
    constructor(renderer, authService, router) {
        this.renderer = renderer;
        this.authService = authService;
        this.router = router;
        this.isLoading = true;
        this.authenticated = false;
        this.uName = '';
        this.password = '';
        this.errorLoggingUser = false;
        this.loadscript();
    }
    ngOnInit() {
        // this.authService.checkUser();
        // this.authListenerSub = this.authService.getUser()
        // .subscribe((isAuthenticated) => {
        //   this.authenticated = isAuthenticated;
        //   if (!this.authenticated) {
        //     this.isLoading = false;
        //   } else {
        //     this.isLoading = true;
        //     this.router.navigate(['/', 'homePage']);
        //   }
        // });
    }
    ngOnDestroy() {
        // this.authListenerSub.unsubscribe();
    }
    loadscript() {
        const body = document.body;
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'assets/js/jquery-3.2.1.min.js';
        this.renderer.appendChild(document.body, script);
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'assets/plugins/greensock/TweenMax.min.js';
        this.renderer.appendChild(document.body, script);
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'assets/plugins/greensock/TimelineMax.min.js';
        this.renderer.appendChild(document.body, script);
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'assets/plugins/scrollmagic/ScrollMagic.min.js';
        this.renderer.appendChild(document.body, script);
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'assets/plugins/greensock/animation.gsap.min.js';
        this.renderer.appendChild(document.body, script);
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'assets/plugins/greensock/ScrollToPlugin.min.js';
        this.renderer.appendChild(document.body, script);
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'assets/plugins/OwlCarousel2-2.2.1/owl.carousel.js';
        this.renderer.appendChild(document.body, script);
        script = document.createElement('script');
        script.src = 'assets/plugins/scrollTo/jquery.scrollTo.min.js';
        script.type = 'text/javascript';
        this.renderer.appendChild(document.body, script);
        script = document.createElement('script');
        script.src = 'assets/plugins/easing/easing.js';
        script.type = 'text/javascript';
        this.renderer.appendChild(document.body, script);
        script = document.createElement('script');
        script.src = 'assets/js/custom.js';
        script.type = 'text/javascript';
        this.renderer.appendChild(document.body, script);
    }
};
MainPageComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-page/main-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-page.component.css */ "./src/app/components/main-page/main-page.component.css")).default]
    })
], MainPageComponent);



/***/ }),

/***/ "./src/app/components/notes/mime-type.validator.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/notes/mime-type.validator.ts ***!
  \*********************************************************/
/*! exports provided: mimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeType", function() { return mimeType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


const mimeType = (control) => {
    const file = control.value;
    const fileReader = new FileReader();
    const frObs = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((observer) => {
        fileReader.addEventListener('loadend', () => {
            let isValid = false;
            const arr = new Uint8Array(fileReader.result).subarray(0, 4);
            let header = '';
            let i = 0;
            for (i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            switch (header) {
                case '504b34':
                    // console.log('was here');
                    isValid = true;
                    break;
                default:
                    // console.log(header);
                    isValid = false;
                    break;
            }
            if (isValid) {
                // console.log('Here too');
                observer.next(null);
            }
            else {
                observer.next({ invalidMimeType: true });
            }
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
    });
    return frObs;
};


/***/ }),

/***/ "./src/app/components/notes/notes.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/notes/notes.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" html,body{height:100%;margin:0;padding:0;}\r\nbody{background-image:url(https://lh4.googleusercontent.com/-XplyTa1Za-I/VMSgIyAYkHI/AAAAAAAADxM/oL-rD6VP4ts/w1184-h666/Android-Lollipop-wallpapers-Google-Now-Wallpaper-2.png);background-position:center;background-size:cover;background-repeat:no-repeat;min-height:100vh;font-family:'Roboto', sans-serif;}\r\n.app-header{-webkit-box-pack:justify;justify-content:space-between;position:fixed;top:0;left:0;right:0;z-index:2;box-shadow:0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);}\r\n.login-wrapper{height:50%;}\r\n.positronx{text-decoration:none;color:#ffffff;}\r\n.box{position:relative;top:0%;opacity:1;float:left;padding:60px 50px 40px 50px;width:100%;background:#fff;border-radius:10px;transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);z-index:5;max-width:440px;}\r\n.box.back{transform:scale(.95);-webkit-transform:scale(.95);-ms-transform:scale(.95);top:-20px;opacity:.8;z-index:-1;}\r\n.box:before{content:\"\";width:100%;height:30px;border-radius:10px;position:absolute;top:0px;background:rgba(255, 255, 255, .6);left:0;transform:scale(.95);-webkit-transform:scale(.95);-ms-transform:scale(.95);z-index:-1;}\r\n.login-wrapper .example-form{min-width:100%;max-width:300px;width:100%;}\r\n.login-wrapper .example-full-width,.login-wrapper .btn-block{width:100%;}\r\n.login-wrapper mat-card-header{text-align:center;width:100%;display:block;font-weight:700;padding-bottom: 30px;}\r\n.login-wrapper mat-card-header mat-card-title{font-size:30px;margin:0;}\r\n.login-wrapper .mat-card{padding:40px 70px 50px;}\r\n.login-wrapper .mat-stroked-button{border:1px solid currentColor; width: 99%;background:#FFF7FA;}\r\n.login-wrapper .mat-form-field-appearance-legacy .mat-form-field-infix{padding:0.8375em 0;}\r\n.login-wrapper {\r\n  background-image:url('151059.jpg');\r\n  background-size:cover;\r\n  background-repeat:no-repeat;\r\n  width: 100%;\r\n  height: 700px;\r\n  padding-bottom: 100px;\r\n}\r\ninput[type='file'] {\r\n  visibility:hidden ;\r\n}\r\n.file-preview img {\r\n position: relative;\r\n top:4px;\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\nmat-spinner {\r\n  size: 5px;\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3Rlcy9ub3Rlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDLFVBQVUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7QUFDMUMsS0FBSywwS0FBMEssQ0FBQywwQkFBMEIsQ0FBQyxxQkFBcUIsQ0FBQywyQkFBMkIsQ0FBQyxnQkFBZ0IsQ0FBQyxnQ0FBZ0MsQ0FBQztBQUMvUyxZQUFZLHdCQUE2QixDQUE3Qiw2QkFBNkIsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLDZHQUE2RyxDQUFDO0FBQ3RNLGVBQWUsVUFBVSxDQUFDO0FBQzFCLFdBQVcsb0JBQW9CLENBQUMsYUFBYSxDQUFDO0FBQzlDLEtBQUssaUJBQWlCLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsMkJBQTJCLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQywwQkFBMEIsQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDO0FBQzVOLFVBQVUsb0JBQW9CLENBQUMsNEJBQTRCLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7QUFDckgsWUFBWSxVQUFVLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLDRCQUE0QixDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQztBQUMzTiw2QkFBNkIsY0FBYyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7QUFDdkUsNkRBQTZELFVBQVUsQ0FBQztBQUN4RSwrQkFBK0IsaUJBQWlCLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsb0JBQW9CLENBQUM7QUFDL0csOENBQThDLGNBQWMsQ0FBQyxRQUFRLENBQUM7QUFDdEUseUJBQXlCLHNCQUFzQixDQUFDO0FBQ2hELG1DQUFtQyw2QkFBNkIsRUFBRSxVQUFVLENBQUMsa0JBQWtCLENBQUM7QUFDaEcsdUVBQXVFLGtCQUFrQixDQUFDO0FBRzFGO0VBQ0Usa0NBQXNEO0VBQ3RELHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7QUFHQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLE9BQU87RUFDTixZQUFZO0VBQ1osV0FBVztBQUNiO0FBRUE7RUFDRSxTQUFTO0VBQ1QsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ub3Rlcy9ub3Rlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIGh0bWwsYm9keXtoZWlnaHQ6MTAwJTttYXJnaW46MDtwYWRkaW5nOjA7fVxyXG5ib2R5e2JhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vbGg0Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tWHBseVRhMVphLUkvVk1TZ0l5QVlrSEkvQUFBQUFBQUFEeE0vb0wtckQ2VlA0dHMvdzExODQtaDY2Ni9BbmRyb2lkLUxvbGxpcG9wLXdhbGxwYXBlcnMtR29vZ2xlLU5vdy1XYWxscGFwZXItMi5wbmcpO2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO2JhY2tncm91bmQtc2l6ZTpjb3ZlcjtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7bWluLWhlaWdodDoxMDB2aDtmb250LWZhbWlseTonUm9ib3RvJywgc2Fucy1zZXJpZjt9XHJcbi5hcHAtaGVhZGVye2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6Mjtib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO31cclxuLmxvZ2luLXdyYXBwZXJ7aGVpZ2h0OjUwJTt9XHJcbi5wb3NpdHJvbnh7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Y29sb3I6I2ZmZmZmZjt9XHJcbi5ib3h7cG9zaXRpb246cmVsYXRpdmU7dG9wOjAlO29wYWNpdHk6MTtmbG9hdDpsZWZ0O3BhZGRpbmc6NjBweCA1MHB4IDQwcHggNTBweDt3aWR0aDoxMDAlO2JhY2tncm91bmQ6I2ZmZjtib3JkZXItcmFkaXVzOjEwcHg7dHJhbnNmb3JtOnNjYWxlKDEpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpOy1tcy10cmFuc2Zvcm06c2NhbGUoMSk7ei1pbmRleDo1O21heC13aWR0aDo0NDBweDt9XHJcbi5ib3guYmFja3t0cmFuc2Zvcm06c2NhbGUoLjk1KTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOTUpOy1tcy10cmFuc2Zvcm06c2NhbGUoLjk1KTt0b3A6LTIwcHg7b3BhY2l0eTouODt6LWluZGV4Oi0xO31cclxuLmJveDpiZWZvcmV7Y29udGVudDpcIlwiO3dpZHRoOjEwMCU7aGVpZ2h0OjMwcHg7Ym9yZGVyLXJhZGl1czoxMHB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDowcHg7YmFja2dyb3VuZDpyZ2JhKDI1NSwgMjU1LCAyNTUsIC42KTtsZWZ0OjA7dHJhbnNmb3JtOnNjYWxlKC45NSk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjk1KTstbXMtdHJhbnNmb3JtOnNjYWxlKC45NSk7ei1pbmRleDotMTt9XHJcbi5sb2dpbi13cmFwcGVyIC5leGFtcGxlLWZvcm17bWluLXdpZHRoOjEwMCU7bWF4LXdpZHRoOjMwMHB4O3dpZHRoOjEwMCU7fVxyXG4ubG9naW4td3JhcHBlciAuZXhhbXBsZS1mdWxsLXdpZHRoLC5sb2dpbi13cmFwcGVyIC5idG4tYmxvY2t7d2lkdGg6MTAwJTt9XHJcbi5sb2dpbi13cmFwcGVyIG1hdC1jYXJkLWhlYWRlcnt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxMDAlO2Rpc3BsYXk6YmxvY2s7Zm9udC13ZWlnaHQ6NzAwO3BhZGRpbmctYm90dG9tOiAzMHB4O31cclxuLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIG1hdC1jYXJkLXRpdGxle2ZvbnQtc2l6ZTozMHB4O21hcmdpbjowO31cclxuLmxvZ2luLXdyYXBwZXIgLm1hdC1jYXJke3BhZGRpbmc6NDBweCA3MHB4IDUwcHg7fVxyXG4ubG9naW4td3JhcHBlciAubWF0LXN0cm9rZWQtYnV0dG9ue2JvcmRlcjoxcHggc29saWQgY3VycmVudENvbG9yOyB3aWR0aDogOTklO2JhY2tncm91bmQ6I0ZGRjdGQTt9XHJcbi5sb2dpbi13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzowLjgzNzVlbSAwO31cclxuXHJcblxyXG4ubG9naW4td3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvMTUxMDU5LmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3MDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcblxyXG5pbnB1dFt0eXBlPSdmaWxlJ10ge1xyXG4gIHZpc2liaWxpdHk6aGlkZGVuIDtcclxufVxyXG5cclxuLmZpbGUtcHJldmlldyBpbWcge1xyXG4gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gdG9wOjRweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbm1hdC1zcGlubmVyIHtcclxuICBzaXplOiA1cHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/notes/notes.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/notes/notes.component.ts ***!
  \*****************************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _mime_type_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mime-type.validator */ "./src/app/components/notes/mime-type.validator.ts");
/* harmony import */ var src_app_services_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services.service */ "./src/app/services.service.ts");








let NotesComponent = class NotesComponent {
    constructor(renderer, authService, service, router, fb) {
        this.renderer = renderer;
        this.authService = authService;
        this.service = service;
        this.router = router;
        this.fb = fb;
        this.isLoading = true;
        this.authenticated = false;
        this.downloadisReady = false;
        this.waitingForDownload = false;
        this.submitBut = false;
        this.fileCount = 5;
        this.noFile = ['file0'];
        this.count = 0;
        this.f = [1];
        this.ff = [];
        this.loadscript();
    }
    ngOnInit() {
        // this.authService.checkUser();
        // this.authListenerSub = this.authService.getUser()
        // .subscribe((isAuthenticated) => {
        //   this.authenticated = isAuthenticated;
        //   if (!this.authenticated) {
        //     this.router.navigate(['/']);
        //   } else {
        //     this.isLoading = false;
        //   }
        // });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({});
    }
    ngOnDestroy() {
        // this.authListenerSub.unsubscribe();
        if (this.DownloadReadyListenerSub) {
            this.DownloadReadyListenerSub.unsubscribe();
        }
        if (this.DownloadFile) {
            this.DownloadFile.unsubscribe();
        }
        if (this.a) {
            this.a.unsubscribe();
        }
    }
    onImagePicked(event) {
        const file = event.target.files[0];
        this.form.addControl('' + this.noFile[this.count], this.fb.control(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_6__["mimeType"]]
        }));
        this.form.controls['' + this.noFile[this.count]].setValue(file);
        this.form.get(this.noFile[this.count]).updateValueAndValidity();
        console.log(this.form.get(this.noFile[this.count]));
        console.log(this.form.value[this.noFile[this.count]]);
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result.toString();
        };
        this.count++;
        this.noFile.push('file' + this.count);
        this.submitBut = true;
        reader.readAsDataURL(file);
    }
    onSubmit() {
        // console.log('here');
        if (this.form.invalid) {
            // console.log(this.form);
            return;
        }
        // console.log('here');
        this.downloadisReady = false;
        this.waitingForDownload = true;
        for (let l of this.noFile) {
            if (this.form.value[l]) {
                // console.log(this.form.value[l]);
                this.ff.push(this.form.value[l]);
            }
        }
        console.log(this.ff);
        this.service.upload(this.ff);
        this.a = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(3000).subscribe((x) => {
            this.checkDownload();
        });
        this.submitBut = false;
        // this.router.navigate(['/', 'homePage']);
    }
    checkDownload() {
        this.service.getDownloadReadystatus();
        this.DownloadReadyListenerSub = this.service.checkDownload()
            .subscribe((ready) => {
            this.downloadisReady = ready;
            if (ready === true) {
                this.waitingForDownload = false;
                this.a.unsubscribe();
            }
        });
    }
    Download() {
        this.DownloadFile = this.service.downloadFile()
            .subscribe((data) => {
            if (data.active === true) {
                this.DownloadReadyListenerSub.unsubscribe();
                window.open(data.message);
                this.DownloadFile.unsubscribe();
            }
        });
    }
    loadscript() {
        const body = document.body;
        let script = document.createElement('script');
        script = document.createElement('script');
        script.src = 'assets/js/custom.js';
        script.type = 'text/javascript';
        this.renderer.appendChild(document.body, script);
    }
};
NotesComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_service__WEBPACK_IMPORTED_MODULE_7__["ServicesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
NotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notes/notes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notes.component.css */ "./src/app/components/notes/notes.component.css")).default]
    })
], NotesComponent);



/***/ }),

/***/ "./src/app/components/password-reset/password-reset.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/password-reset/password-reset.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html,body{height:100%;margin:0;padding:0;}\r\nbody{background-image:url(https://lh4.googleusercontent.com/-XplyTa1Za-I/VMSgIyAYkHI/AAAAAAAADxM/oL-rD6VP4ts/w1184-h666/Android-Lollipop-wallpapers-Google-Now-Wallpaper-2.png);background-position:center;background-size:cover;background-repeat:no-repeat;min-height:100vh;font-family:'Roboto', sans-serif;}\r\n.app-header{-webkit-box-pack:justify;justify-content:space-between;position:fixed;top:0;left:0;right:0;z-index:2;box-shadow:0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);}\r\n.login-wrapper{height:50%;}\r\n.positronx{text-decoration:none;color:#ffffff;}\r\n.box{position:relative;top:0%;opacity:1;float:left;padding:60px 50px 40px 50px;width:100%;background:#fff;border-radius:10px;transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);z-index:5;max-width:450px;}\r\n.box.back{transform:scale(.95);-webkit-transform:scale(.95);-ms-transform:scale(.95);top:-20px;opacity:.8;z-index:-1;}\r\n.box:before{content:\"\";width:100%;height:30px;border-radius:10px;position:absolute;top:0px;background:rgba(255, 255, 255, .6);left:0;transform:scale(.95);-webkit-transform:scale(.95);-ms-transform:scale(.95);z-index:-1;}\r\n.login-wrapper .example-form{min-width:100%;max-width:400px;width:100%;}\r\n.login-wrapper .example-full-width,.login-wrapper .btn-block{width:100%;}\r\n.login-wrapper mat-card-header{text-align:center;width:100%;display:block;font-weight:700;}\r\n.login-wrapper mat-card-header mat-card-title{font-size:30px;margin:0;}\r\n.login-wrapper .mat-card{padding:40px 70px 50px;}\r\n.login-wrapper .mat-stroked-button{border:1px solid currentColor;line-height:54px;background:#FFF7FA;}\r\n.login-wrapper .mat-form-field-appearance-legacy .mat-form-field-infix{padding:0.8375em 0;}\r\n.login-wrapper {\r\n  background-image:url('151059.jpg');\r\n  background-size:cover;\r\n  background-repeat:no-repeat;\r\n  width: 100%;\r\n  height: 700px;\r\n  padding-bottom: 100px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXNzd29yZC1yZXNldC9wYXNzd29yZC1yZXNldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7QUFDekMsS0FBSywwS0FBMEssQ0FBQywwQkFBMEIsQ0FBQyxxQkFBcUIsQ0FBQywyQkFBMkIsQ0FBQyxnQkFBZ0IsQ0FBQyxnQ0FBZ0MsQ0FBQztBQUMvUyxZQUFZLHdCQUE2QixDQUE3Qiw2QkFBNkIsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLDZHQUE2RyxDQUFDO0FBQ3RNLGVBQWUsVUFBVSxDQUFDO0FBQzFCLFdBQVcsb0JBQW9CLENBQUMsYUFBYSxDQUFDO0FBQzlDLEtBQUssaUJBQWlCLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsMkJBQTJCLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQywwQkFBMEIsQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDO0FBQzVOLFVBQVUsb0JBQW9CLENBQUMsNEJBQTRCLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7QUFDckgsWUFBWSxVQUFVLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLDRCQUE0QixDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQztBQUMzTiw2QkFBNkIsY0FBYyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7QUFDdkUsNkRBQTZELFVBQVUsQ0FBQztBQUN4RSwrQkFBK0IsaUJBQWlCLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUM7QUFDMUYsOENBQThDLGNBQWMsQ0FBQyxRQUFRLENBQUM7QUFDdEUseUJBQXlCLHNCQUFzQixDQUFDO0FBQ2hELG1DQUFtQyw2QkFBNkIsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztBQUNyRyx1RUFBdUUsa0JBQWtCLENBQUM7QUFHMUY7RUFDRSxrQ0FBc0Q7RUFDdEQscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFzc3dvcmQtcmVzZXQvcGFzc3dvcmQtcmVzZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsYm9keXtoZWlnaHQ6MTAwJTttYXJnaW46MDtwYWRkaW5nOjA7fVxyXG5ib2R5e2JhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vbGg0Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tWHBseVRhMVphLUkvVk1TZ0l5QVlrSEkvQUFBQUFBQUFEeE0vb0wtckQ2VlA0dHMvdzExODQtaDY2Ni9BbmRyb2lkLUxvbGxpcG9wLXdhbGxwYXBlcnMtR29vZ2xlLU5vdy1XYWxscGFwZXItMi5wbmcpO2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO2JhY2tncm91bmQtc2l6ZTpjb3ZlcjtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7bWluLWhlaWdodDoxMDB2aDtmb250LWZhbWlseTonUm9ib3RvJywgc2Fucy1zZXJpZjt9XHJcbi5hcHAtaGVhZGVye2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6Mjtib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO31cclxuLmxvZ2luLXdyYXBwZXJ7aGVpZ2h0OjUwJTt9XHJcbi5wb3NpdHJvbnh7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Y29sb3I6I2ZmZmZmZjt9XHJcbi5ib3h7cG9zaXRpb246cmVsYXRpdmU7dG9wOjAlO29wYWNpdHk6MTtmbG9hdDpsZWZ0O3BhZGRpbmc6NjBweCA1MHB4IDQwcHggNTBweDt3aWR0aDoxMDAlO2JhY2tncm91bmQ6I2ZmZjtib3JkZXItcmFkaXVzOjEwcHg7dHJhbnNmb3JtOnNjYWxlKDEpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpOy1tcy10cmFuc2Zvcm06c2NhbGUoMSk7ei1pbmRleDo1O21heC13aWR0aDo0NTBweDt9XHJcbi5ib3guYmFja3t0cmFuc2Zvcm06c2NhbGUoLjk1KTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOTUpOy1tcy10cmFuc2Zvcm06c2NhbGUoLjk1KTt0b3A6LTIwcHg7b3BhY2l0eTouODt6LWluZGV4Oi0xO31cclxuLmJveDpiZWZvcmV7Y29udGVudDpcIlwiO3dpZHRoOjEwMCU7aGVpZ2h0OjMwcHg7Ym9yZGVyLXJhZGl1czoxMHB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDowcHg7YmFja2dyb3VuZDpyZ2JhKDI1NSwgMjU1LCAyNTUsIC42KTtsZWZ0OjA7dHJhbnNmb3JtOnNjYWxlKC45NSk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjk1KTstbXMtdHJhbnNmb3JtOnNjYWxlKC45NSk7ei1pbmRleDotMTt9XHJcbi5sb2dpbi13cmFwcGVyIC5leGFtcGxlLWZvcm17bWluLXdpZHRoOjEwMCU7bWF4LXdpZHRoOjQwMHB4O3dpZHRoOjEwMCU7fVxyXG4ubG9naW4td3JhcHBlciAuZXhhbXBsZS1mdWxsLXdpZHRoLC5sb2dpbi13cmFwcGVyIC5idG4tYmxvY2t7d2lkdGg6MTAwJTt9XHJcbi5sb2dpbi13cmFwcGVyIG1hdC1jYXJkLWhlYWRlcnt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxMDAlO2Rpc3BsYXk6YmxvY2s7Zm9udC13ZWlnaHQ6NzAwO31cclxuLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIG1hdC1jYXJkLXRpdGxle2ZvbnQtc2l6ZTozMHB4O21hcmdpbjowO31cclxuLmxvZ2luLXdyYXBwZXIgLm1hdC1jYXJke3BhZGRpbmc6NDBweCA3MHB4IDUwcHg7fVxyXG4ubG9naW4td3JhcHBlciAubWF0LXN0cm9rZWQtYnV0dG9ue2JvcmRlcjoxcHggc29saWQgY3VycmVudENvbG9yO2xpbmUtaGVpZ2h0OjU0cHg7YmFja2dyb3VuZDojRkZGN0ZBO31cclxuLmxvZ2luLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1pbmZpeHtwYWRkaW5nOjAuODM3NWVtIDA7fVxyXG5cclxuXHJcbi5sb2dpbi13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy8xNTEwNTkuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDcwMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/password-reset/password-reset.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/password-reset/password-reset.component.ts ***!
  \***********************************************************************/
/*! exports provided: PasswordResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetComponent", function() { return PasswordResetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services.service */ "./src/app/services.service.ts");






let PasswordResetComponent = class PasswordResetComponent {
    constructor(renderer, authService, service, router) {
        this.renderer = renderer;
        this.authService = authService;
        this.service = service;
        this.router = router;
        this.isLoading = true;
        this.authenticated = false;
        this.errorMailSending = false;
    }
    ngOnInit() {
        // this.authService.checkUser();
        // this.authListenerSub = this.authService.getUser()
        // .subscribe((isAuthenticated) => {
        //   this.authenticated = isAuthenticated;
        //   if (!this.authenticated) {
        //     this.isLoading = false;
        //   } else {
        //     this.isLoading = true;
        //     this.router.navigate(['/', 'homePage']);
        //   }
        // });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)] })
        });
    }
    ngOnDestroy() {
        // this.authListenerSub.unsubscribe();
    }
    onSubmit() {
        if (this.form.invalid) {
            return;
        }
        this.service.sendPasswordResetMail(this.form.value.email)
            .subscribe((response) => {
            if (response.sent) {
                this.router.navigate(['/']);
            }
            else {
                this.errorMailSending = true;
                this.form.reset();
            }
        }, error => {
            this.errorMailSending = true;
            this.form.reset();
        });
    }
    loadscript() {
        const body = document.body;
        let script = document.createElement('script');
        script = document.createElement('script');
        script.src = 'assets/js/custom.js';
        script.type = 'text/javascript';
        this.renderer.appendChild(document.body, script);
    }
};
PasswordResetComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_service__WEBPACK_IMPORTED_MODULE_5__["ServicesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PasswordResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-password-reset',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./password-reset.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/password-reset/password-reset.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./password-reset.component.css */ "./src/app/components/password-reset/password-reset.component.css")).default]
    })
], PasswordResetComponent);



/***/ }),

/***/ "./src/app/components/question-answers/question-answers.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/question-answers/question-answers.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html,body{height:100%;margin:0;padding:0;}\r\nbody{background-image:url(https://lh4.googleusercontent.com/-XplyTa1Za-I/VMSgIyAYkHI/AAAAAAAADxM/oL-rD6VP4ts/w1184-h666/Android-Lollipop-wallpapers-Google-Now-Wallpaper-2.png);background-position:center;background-size:cover;background-repeat:no-repeat;min-height:100vh;font-family:'Roboto', sans-serif;}\r\n.app-header{-webkit-box-pack:justify;justify-content:space-between;position:fixed;top:0;left:0;right:0;z-index:2;box-shadow:0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);}\r\n.login-wrapper{height:50%;}\r\n.positronx{text-decoration:none;color:#ffffff;}\r\n.box{position:relative;top:0%;opacity:1;float:left;padding:60px 50px 40px 50px;width:100%;background:#fff;border-radius:10px;transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);z-index:5;max-width:800px;}\r\n.box.back{transform:scale(.95);-webkit-transform:scale(.95);-ms-transform:scale(.95);top:-20px;opacity:.8;z-index:-1;}\r\n.box:before{content:\"\";width:100%;height:30px;border-radius:10px;position:absolute;top:0px;background:rgba(255, 255, 255, .6);left:0;transform:scale(.95);-webkit-transform:scale(.95);-ms-transform:scale(.95);z-index:-1;}\r\n.login-wrapper .example-form{min-width:100%;max-width:300px;width:100%;}\r\n.login-wrapper .example-full-width,.login-wrapper .btn-block{width:100%;}\r\n.login-wrapper mat-card-header{text-align:center;width:100%;display:block;font-weight:700;padding-bottom: 30px;}\r\n.login-wrapper mat-card-header mat-card-title{font-size:30px;margin:0;}\r\n.login-wrapper .mat-card{padding:40px 70px 50px;}\r\n.login-wrapper .mat-stroked-button{border:1px solid currentColor; width: 70%;background:#FFF7FA;}\r\n.login-wrapper .mat-form-field-appearance-legacy .mat-form-field-infix{padding:0.8375em 0;}\r\n.login-wrapper {\r\n  background-image:url('151059.jpg');\r\n  background-size:cover;\r\n  background-repeat:no-repeat;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\ninput[type='file'] {\r\n  visibility:hidden ;\r\n}\r\n.file-preview img {\r\n position: relative;\r\n top:4px;\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n#share-buttons img {\r\n  padding: 5px;\r\n  right: 0px;\r\n  border: 0;\r\n  box-shadow: 0;\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\nmat-form-field {\r\n  width: 100%;\r\n}\r\nmat-spinner {\r\n  margin: auto;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWVzdGlvbi1hbnN3ZXJzL3F1ZXN0aW9uLWFuc3dlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO0FBQ3pDLEtBQUssMEtBQTBLLENBQUMsMEJBQTBCLENBQUMscUJBQXFCLENBQUMsMkJBQTJCLENBQUMsZ0JBQWdCLENBQUMsZ0NBQWdDLENBQUM7QUFDL1MsWUFBWSx3QkFBNkIsQ0FBN0IsNkJBQTZCLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyw2R0FBNkcsQ0FBQztBQUN0TSxlQUFlLFVBQVUsQ0FBQztBQUMxQixXQUFXLG9CQUFvQixDQUFDLGFBQWEsQ0FBQztBQUM5QyxLQUFLLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLDJCQUEyQixDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsMEJBQTBCLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQztBQUM1TixVQUFVLG9CQUFvQixDQUFDLDRCQUE0QixDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO0FBQ3JILFlBQVksVUFBVSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyw0QkFBNEIsQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLENBQUM7QUFDM04sNkJBQTZCLGNBQWMsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO0FBQ3ZFLDZEQUE2RCxVQUFVLENBQUM7QUFDeEUsK0JBQStCLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLG9CQUFvQixDQUFDO0FBQy9HLDhDQUE4QyxjQUFjLENBQUMsUUFBUSxDQUFDO0FBQ3RFLHlCQUF5QixzQkFBc0IsQ0FBQztBQUNoRCxtQ0FBbUMsNkJBQTZCLEVBQUUsVUFBVSxDQUFDLGtCQUFrQixDQUFDO0FBQ2hHLHVFQUF1RSxrQkFBa0IsQ0FBQztBQUkxRjtFQUNFLGtDQUFzRDtFQUN0RCxxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLE9BQU87RUFDTixZQUFZO0VBQ1osV0FBVztBQUNiO0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3F1ZXN0aW9uLWFuc3dlcnMvcXVlc3Rpb24tYW5zd2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxib2R5e2hlaWdodDoxMDAlO21hcmdpbjowO3BhZGRpbmc6MDt9XHJcbmJvZHl7YmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cHM6Ly9saDQuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1YcGx5VGExWmEtSS9WTVNnSXlBWWtISS9BQUFBQUFBQUR4TS9vTC1yRDZWUDR0cy93MTE4NC1oNjY2L0FuZHJvaWQtTG9sbGlwb3Atd2FsbHBhcGVycy1Hb29nbGUtTm93LVdhbGxwYXBlci0yLnBuZyk7YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7YmFja2dyb3VuZC1zaXplOmNvdmVyO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDttaW4taGVpZ2h0OjEwMHZoO2ZvbnQtZmFtaWx5OidSb2JvdG8nLCBzYW5zLXNlcmlmO31cclxuLmFwcC1oZWFkZXJ7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7ei1pbmRleDoyO2JveC1zaGFkb3c6MCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIC4xMik7fVxyXG4ubG9naW4td3JhcHBlcntoZWlnaHQ6NTAlO31cclxuLnBvc2l0cm9ueHt0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjojZmZmZmZmO31cclxuLmJveHtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6MCU7b3BhY2l0eToxO2Zsb2F0OmxlZnQ7cGFkZGluZzo2MHB4IDUwcHggNDBweCA1MHB4O3dpZHRoOjEwMCU7YmFja2dyb3VuZDojZmZmO2JvcmRlci1yYWRpdXM6MTBweDt0cmFuc2Zvcm06c2NhbGUoMSk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7LW1zLXRyYW5zZm9ybTpzY2FsZSgxKTt6LWluZGV4OjU7bWF4LXdpZHRoOjgwMHB4O31cclxuLmJveC5iYWNre3RyYW5zZm9ybTpzY2FsZSguOTUpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC45NSk7LW1zLXRyYW5zZm9ybTpzY2FsZSguOTUpO3RvcDotMjBweDtvcGFjaXR5Oi44O3otaW5kZXg6LTE7fVxyXG4uYm94OmJlZm9yZXtjb250ZW50OlwiXCI7d2lkdGg6MTAwJTtoZWlnaHQ6MzBweDtib3JkZXItcmFkaXVzOjEwcHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjBweDtiYWNrZ3JvdW5kOnJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO2xlZnQ6MDt0cmFuc2Zvcm06c2NhbGUoLjk1KTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOTUpOy1tcy10cmFuc2Zvcm06c2NhbGUoLjk1KTt6LWluZGV4Oi0xO31cclxuLmxvZ2luLXdyYXBwZXIgLmV4YW1wbGUtZm9ybXttaW4td2lkdGg6MTAwJTttYXgtd2lkdGg6MzAwcHg7d2lkdGg6MTAwJTt9XHJcbi5sb2dpbi13cmFwcGVyIC5leGFtcGxlLWZ1bGwtd2lkdGgsLmxvZ2luLXdyYXBwZXIgLmJ0bi1ibG9ja3t3aWR0aDoxMDAlO31cclxuLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVye3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjEwMCU7ZGlzcGxheTpibG9jaztmb250LXdlaWdodDo3MDA7cGFkZGluZy1ib3R0b206IDMwcHg7fVxyXG4ubG9naW4td3JhcHBlciBtYXQtY2FyZC1oZWFkZXIgbWF0LWNhcmQtdGl0bGV7Zm9udC1zaXplOjMwcHg7bWFyZ2luOjA7fVxyXG4ubG9naW4td3JhcHBlciAubWF0LWNhcmR7cGFkZGluZzo0MHB4IDcwcHggNTBweDt9XHJcbi5sb2dpbi13cmFwcGVyIC5tYXQtc3Ryb2tlZC1idXR0b257Ym9yZGVyOjFweCBzb2xpZCBjdXJyZW50Q29sb3I7IHdpZHRoOiA3MCU7YmFja2dyb3VuZDojRkZGN0ZBO31cclxuLmxvZ2luLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1pbmZpeHtwYWRkaW5nOjAuODM3NWVtIDA7fVxyXG5cclxuXHJcblxyXG4ubG9naW4td3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvMTUxMDU5LmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPSdmaWxlJ10ge1xyXG4gIHZpc2liaWxpdHk6aGlkZGVuIDtcclxufVxyXG5cclxuLmZpbGUtcHJldmlldyBpbWcge1xyXG4gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gdG9wOjRweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbiNzaGFyZS1idXR0b25zIGltZyB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJveC1zaGFkb3c6IDA7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1zcGlubmVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/question-answers/question-answers.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/question-answers/question-answers.component.ts ***!
  \***************************************************************************/
/*! exports provided: QuestionAnswersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionAnswersComponent", function() { return QuestionAnswersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_services_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services.service */ "./src/app/services.service.ts");
/* harmony import */ var _notes_mime_type_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notes/mime-type.validator */ "./src/app/components/notes/mime-type.validator.ts");









let QuestionAnswersComponent = class QuestionAnswersComponent {
    constructor(renderer, authService, service, router, sanitizer) {
        this.renderer = renderer;
        this.authService = authService;
        this.service = service;
        this.router = router;
        this.sanitizer = sanitizer;
        this.isLoading = true;
        this.authenticated = false;
        this.qNa = [];
        this.Upload = false;
        this.submitBut = true;
        this.loadscript();
    }
    ngOnInit() {
        // this.authService.checkUser();
        // this.authListenerSub = this.authService.getUser()
        // .subscribe((isAuthenticated) => {
        //   this.authenticated = isAuthenticated;
        //   if (!this.authenticated) {
        //     this.router.navigate(['/']);
        //   } else {
        //     this.isLoading = false;
        //   }
        // });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                asyncValidators: [_notes_mime_type_validator__WEBPACK_IMPORTED_MODULE_8__["mimeType"]]
            })
        });
        this.form2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required] })
        });
    }
    ngOnDestroy() {
        // this.authListenerSub.unsubscribe();
        if (this.uploadStatus) {
            this.uploadStatus.unsubscribe();
        }
        if (this.a) {
            this.a.unsubscribe();
        }
        if (this.Answer) {
            this.Answer.unsubscribe();
        }
    }
    onImagePicked(event) {
        const file = event.target.files[0];
        this.form.patchValue({ file });
        console.log(this.form.get('file').valid);
        this.form.get('file').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result.toString();
        };
        // console.log(this.imagePreview);
        reader.readAsDataURL(file);
    }
    onSubmit() {
        if (this.form.invalid) {
            return;
        }
        this.uploadStatus = this.service.uploadStatusDoc(this.form.value.file)
            .subscribe((value) => {
            console.log(value.message);
            if (value.active === true) {
                this.Upload = false;
                console.log('done');
            }
            else {
                console.log('not done');
            }
        });
        this.submitBut = false;
        this.Upload = true;
        // this.router.navigate(['/', 'homePage']);
    }
    askQuestion() {
        this.submitBut = false;
        this.Upload = true;
        console.log('chekcing this');
        this.question = this.form2.value.question;
        this.service.askQuestion(this.form2.value.question);
        this.a = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(3000).subscribe((x) => {
            this.AnswerStatus();
        });
        this.form2.reset();
    }
    AnswerStatus() {
        this.service.getAnswerStatus();
        this.AnswerReadyListenerSub = this.service.CheckAnswer()
            .subscribe((ready) => {
            // this.answerReady = ready;
            if (ready === true) {
                this.Answer = this.service.getAnswer(this.question)
                    .subscribe((value) => {
                    if (value.value === true) {
                        const list = { question: value.question, answer: value.answer };
                        let flag = 0;
                        let i = 0;
                        for (i = 0; i < this.qNa.length; i++) {
                            if (this.qNa[i] === list) {
                                flag = 1;
                                break;
                            }
                        }
                        if (flag === 0) {
                            this.qNa.push(list);
                        }
                        this.Upload = false;
                        console.log(this.qNa);
                        this.Answer.unsubscribe();
                    }
                });
                this.a.unsubscribe();
            }
        });
    }
    loadscript() {
        const body = document.body;
        let script = document.createElement('script');
        script = document.createElement('script');
        script.src = 'assets/js/custom.js';
        script.type = 'text/javascript';
        this.renderer.appendChild(document.body, script);
    }
};
QuestionAnswersComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_service__WEBPACK_IMPORTED_MODULE_7__["ServicesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }
];
QuestionAnswersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question-answers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./question-answers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/question-answers/question-answers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./question-answers.component.css */ "./src/app/components/question-answers/question-answers.component.css")).default]
    })
], QuestionAnswersComponent);



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html,body{height:100%;margin:0;padding:0;}\r\nbody{background-image:url(https://lh4.googleusercontent.com/-XplyTa1Za-I/VMSgIyAYkHI/AAAAAAAADxM/oL-rD6VP4ts/w1184-h666/Android-Lollipop-wallpapers-Google-Now-Wallpaper-2.png);background-position:center;background-size:cover;background-repeat:no-repeat;min-height:100vh;font-family:'Roboto', sans-serif;}\r\n.app-header{-webkit-box-pack:justify;justify-content:space-between;position:fixed;top:0;left:0;right:0;z-index:2;box-shadow:0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);}\r\n.login-wrapper{height:50%;}\r\n.positronx{text-decoration:none;color:#ffffff;}\r\n.box{position:relative;top:0%;opacity:1;float:left;padding:60px 50px 40px 50px;width:100%;background:#fff;border-radius:10px;transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);z-index:5;max-width:400px;}\r\n.box.back{transform:scale(.95);-webkit-transform:scale(.95);-ms-transform:scale(.95);top:-20px;opacity:.8;z-index:-1;}\r\n.box:before{content:\"\";width:100%;height:30px;border-radius:10px;position:absolute;top:0px;background:rgba(255, 255, 255, .6);left:0;transform:scale(.95);-webkit-transform:scale(.95);-ms-transform:scale(.95);z-index:-1;}\r\n.login-wrapper .example-form{min-width:100%;max-width:400px;width:100%;}\r\n.login-wrapper .example-full-width,.login-wrapper .btn-block{width:100%;}\r\n.login-wrapper mat-card-header{text-align:center;width:100%;display:block;font-weight:700;}\r\n.login-wrapper mat-card-header mat-card-title{font-size:30px;margin:0;}\r\n.login-wrapper .mat-card{padding:40px 70px 50px;}\r\n.login-wrapper .mat-stroked-button{border:1px solid currentColor;line-height:54px;background:#FFF7FA;}\r\n.login-wrapper .mat-form-field-appearance-legacy .mat-form-field-infix{padding:0.8375em 0;}\r\n.login-wrapper {\r\n  background-image:url('151059.jpg');\r\n  background-size:cover;\r\n  background-repeat:no-repeat;\r\n  width: 100%;\r\n  height: 700px;\r\n  padding-bottom: 100px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7QUFDekMsS0FBSywwS0FBMEssQ0FBQywwQkFBMEIsQ0FBQyxxQkFBcUIsQ0FBQywyQkFBMkIsQ0FBQyxnQkFBZ0IsQ0FBQyxnQ0FBZ0MsQ0FBQztBQUMvUyxZQUFZLHdCQUE2QixDQUE3Qiw2QkFBNkIsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLDZHQUE2RyxDQUFDO0FBQ3RNLGVBQWUsVUFBVSxDQUFDO0FBQzFCLFdBQVcsb0JBQW9CLENBQUMsYUFBYSxDQUFDO0FBQzlDLEtBQUssaUJBQWlCLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsMkJBQTJCLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQywwQkFBMEIsQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDO0FBQzVOLFVBQVUsb0JBQW9CLENBQUMsNEJBQTRCLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7QUFDckgsWUFBWSxVQUFVLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLDRCQUE0QixDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQztBQUMzTiw2QkFBNkIsY0FBYyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7QUFDdkUsNkRBQTZELFVBQVUsQ0FBQztBQUN4RSwrQkFBK0IsaUJBQWlCLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUM7QUFDMUYsOENBQThDLGNBQWMsQ0FBQyxRQUFRLENBQUM7QUFDdEUseUJBQXlCLHNCQUFzQixDQUFDO0FBQ2hELG1DQUFtQyw2QkFBNkIsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztBQUNyRyx1RUFBdUUsa0JBQWtCLENBQUM7QUFHMUY7RUFDRSxrQ0FBc0Q7RUFDdEQscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsYm9keXtoZWlnaHQ6MTAwJTttYXJnaW46MDtwYWRkaW5nOjA7fVxyXG5ib2R5e2JhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vbGg0Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tWHBseVRhMVphLUkvVk1TZ0l5QVlrSEkvQUFBQUFBQUFEeE0vb0wtckQ2VlA0dHMvdzExODQtaDY2Ni9BbmRyb2lkLUxvbGxpcG9wLXdhbGxwYXBlcnMtR29vZ2xlLU5vdy1XYWxscGFwZXItMi5wbmcpO2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO2JhY2tncm91bmQtc2l6ZTpjb3ZlcjtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7bWluLWhlaWdodDoxMDB2aDtmb250LWZhbWlseTonUm9ib3RvJywgc2Fucy1zZXJpZjt9XHJcbi5hcHAtaGVhZGVye2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6Mjtib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO31cclxuLmxvZ2luLXdyYXBwZXJ7aGVpZ2h0OjUwJTt9XHJcbi5wb3NpdHJvbnh7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Y29sb3I6I2ZmZmZmZjt9XHJcbi5ib3h7cG9zaXRpb246cmVsYXRpdmU7dG9wOjAlO29wYWNpdHk6MTtmbG9hdDpsZWZ0O3BhZGRpbmc6NjBweCA1MHB4IDQwcHggNTBweDt3aWR0aDoxMDAlO2JhY2tncm91bmQ6I2ZmZjtib3JkZXItcmFkaXVzOjEwcHg7dHJhbnNmb3JtOnNjYWxlKDEpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpOy1tcy10cmFuc2Zvcm06c2NhbGUoMSk7ei1pbmRleDo1O21heC13aWR0aDo0MDBweDt9XHJcbi5ib3guYmFja3t0cmFuc2Zvcm06c2NhbGUoLjk1KTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOTUpOy1tcy10cmFuc2Zvcm06c2NhbGUoLjk1KTt0b3A6LTIwcHg7b3BhY2l0eTouODt6LWluZGV4Oi0xO31cclxuLmJveDpiZWZvcmV7Y29udGVudDpcIlwiO3dpZHRoOjEwMCU7aGVpZ2h0OjMwcHg7Ym9yZGVyLXJhZGl1czoxMHB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDowcHg7YmFja2dyb3VuZDpyZ2JhKDI1NSwgMjU1LCAyNTUsIC42KTtsZWZ0OjA7dHJhbnNmb3JtOnNjYWxlKC45NSk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjk1KTstbXMtdHJhbnNmb3JtOnNjYWxlKC45NSk7ei1pbmRleDotMTt9XHJcbi5sb2dpbi13cmFwcGVyIC5leGFtcGxlLWZvcm17bWluLXdpZHRoOjEwMCU7bWF4LXdpZHRoOjQwMHB4O3dpZHRoOjEwMCU7fVxyXG4ubG9naW4td3JhcHBlciAuZXhhbXBsZS1mdWxsLXdpZHRoLC5sb2dpbi13cmFwcGVyIC5idG4tYmxvY2t7d2lkdGg6MTAwJTt9XHJcbi5sb2dpbi13cmFwcGVyIG1hdC1jYXJkLWhlYWRlcnt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxMDAlO2Rpc3BsYXk6YmxvY2s7Zm9udC13ZWlnaHQ6NzAwO31cclxuLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIG1hdC1jYXJkLXRpdGxle2ZvbnQtc2l6ZTozMHB4O21hcmdpbjowO31cclxuLmxvZ2luLXdyYXBwZXIgLm1hdC1jYXJke3BhZGRpbmc6NDBweCA3MHB4IDUwcHg7fVxyXG4ubG9naW4td3JhcHBlciAubWF0LXN0cm9rZWQtYnV0dG9ue2JvcmRlcjoxcHggc29saWQgY3VycmVudENvbG9yO2xpbmUtaGVpZ2h0OjU0cHg7YmFja2dyb3VuZDojRkZGN0ZBO31cclxuLmxvZ2luLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1pbmZpeHtwYWRkaW5nOjAuODM3NWVtIDA7fVxyXG5cclxuXHJcbi5sb2dpbi13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy8xNTEwNTkuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDcwMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");





let RegisterComponent = class RegisterComponent {
    constructor(renderer, authService, router) {
        this.renderer = renderer;
        this.authService = authService;
        this.router = router;
        this.isLoading = true;
        this.authenticated = false;
        this.userCreateError = false;
        this.loadscript();
    }
    ngOnInit() {
        // this.authService.checkUser();
        // this.authListenerSub = this.authService.getUser()
        // .subscribe((isAuthenticated) => {
        //   this.authenticated = isAuthenticated;
        //   if (!this.authenticated) {
        //     this.isLoading = false;
        //   } else {
        //     this.isLoading = true;
        //     this.router.navigate(['/', 'homePage']);
        //   }
        // });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            uName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)] }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)] }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)] }),
            cpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
        });
    }
    ngOnDestroy() {
        // this.authListenerSub.unsubscribe();
    }
    onSubmit() {
        if (this.form.invalid) {
            return;
        }
        this.authService.createUser(this.form.value.email, this.form.value.password, this.form.value.uName)
            .subscribe(response => {
            if (response.result) {
                this.router.navigate(['/']);
            }
            else {
                console.log(response.message);
                console.log(response.result);
            }
        }, error => {
            this.userCreateError = true;
            this.form.reset();
        });
    }
    loadscript() {
        const body = document.body;
        let script = document.createElement('script');
        script = document.createElement('script');
        script.src = 'assets/js/custom.js';
        script.type = 'text/javascript';
        this.renderer.appendChild(document.body, script);
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/services.service.ts":
/*!*************************************!*\
  !*** ./src/app/services.service.ts ***!
  \*************************************/
/*! exports provided: ServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesService", function() { return ServicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let ServicesService = class ServicesService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.DownloadReady = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.AnswerReady = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.userPresent = null;
    }
    sendPasswordResetMail(email) {
        const body = { email };
        return this.http
            .post('https://learning-facilitator.herokuapp.com/passwordreset', body);
    }
    upload(files) {
        console.log(files);
        console.log('It was here');
        const body = new FormData();
        for (const file of files) {
            body.append('f', file, file.name);
        }
        this.http.post('https://learning-facilitator.herokuapp.com/Upload', body)
            .subscribe((value) => {
            console.log(value.message);
        });
    }
    checkDownload() {
        return this.DownloadReady.asObservable();
    }
    getDownloadReadystatus() {
        this.http.get('https://learning-facilitator.herokuapp.com/DownloadStatus')
            .subscribe((response) => {
            if (response.value !== true) {
                // console.log('Download not Ready');
                this.DownloadReady.next(false);
            }
            else {
                // console.log('Download Ready');
                this.DownloadReady.next(true);
            }
        });
    }
    uploadStatusDoc(file) {
        const body = new FormData();
        console.log(file.name);
        body.append('f', file, file.name);
        return this.http
            .post('https://learning-facilitator.herokuapp.com/UploadQuestionDoc', body);
    }
    downloadFile() {
        return this.http.get('https://learning-facilitator.herokuapp.com/downloadfile');
    }
    askQuestion(question) {
        const body = {
            question
        };
        console.log(question);
        this.http.post('https://learning-facilitator.herokuapp.com/askQuestion', body)
            .subscribe((value) => {
            console.log('done');
        });
    }
    getAnswerStatus() {
        this.http.get('https://learning-facilitator.herokuapp.com/AnswerStatus')
            .subscribe((response) => {
            if (response.value !== true) {
                // console.log('Download not Ready');
                this.AnswerReady.next(false);
            }
            else {
                // console.log('Download Ready');
                this.AnswerReady.next(true);
            }
        });
    }
    CheckAnswer() {
        return this.AnswerReady.asObservable();
    }
    getAnswer(question) {
        const body = {
            question
        };
        return this.http
            .post('https://learning-facilitator.herokuapp.com/getAnswer', body);
    }
};
ServicesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ServicesService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! H:\Projects\SIH\Frontend\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map