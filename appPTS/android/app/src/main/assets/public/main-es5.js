function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list id=\"menu-list\">\n          <ion-list-header>Position Tracking System</ion-list-header>\n\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" [class.selected]=\"selectedIndex == i\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/authentication/authentication.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/authentication/authentication.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAuthenticationAuthenticationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>PTS App Login</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <ion-card>\n        <ion-card-header>\n            <ion-toolbar>\n                <ion-segment color=\"tertiary\" scrollable mode=\"md\" [(ngModel)]=\"segmentModel\" value=\"login\" (ionChange)=\"segmentChanged($event)\">\n                    <ion-segment-button value=\"login\">\n                        <ion-label>Login</ion-label>\n                    </ion-segment-button>\n                    <ion-segment-button value=\"register\">\n                        <ion-label>Register</ion-label>\n                    </ion-segment-button>\n                </ion-segment>\n            </ion-toolbar>\n        </ion-card-header>\n\n        <ion-card-content *ngIf=\"segmentModel == 'login'\">\n            <form [formGroup]=\"loginPage\">\n                <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\">Email</ion-label>\n                    <ion-input formControlName=\"lEmail\" type=\"email\" placeholder=\"Email\" name=\"email\"></ion-input>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\">Password</ion-label>\n                    <ion-input formControlName=\"lPassword\" type=\"password\" placeholder=\"Password\" name=\"password\"></ion-input>\n                </ion-item>\n\n                <ion-button (click)=\"login()\" [disabled]=\"!loginPage.valid\" expand=\"block\">Login</ion-button>\n            </form>\n        </ion-card-content>\n\n        <ion-card-content *ngIf=\"segmentModel == 'register'\">\n            <form [formGroup]=\"registerFirstPage\" *ngIf=\"!secondPage\">\n                <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\">\n                        Username\n                        <span *ngIf=\"formInputIsRequired('username')\" class=\"required\">&#42;</span>\n                    </ion-label>\n                    <ion-input formControlName=\"username\" type=\"text\" placeholder=\"Username\" name=\"uname\"></ion-input>\n                </ion-item>\n\n                <div *ngIf=\"registerFirstPage.controls.username.pending\">\n                    <p>Checking username...</p>\n                </div>\n\n                <div *ngIf=\"!registerFirstPage.controls.username.valid && !registerFirstPage.controls.username.pending && registerFirstPage.controls.username.dirty\">\n                    Sorry, that username can not be used!\n                </div>\n\n                <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\">\n                        Firstname\n                    </ion-label>\n                    <ion-input formControlName=\"firstname\" type=\"text\" placeholder=\"Firstname\" name=\"fname\"></ion-input>\n                </ion-item>\n\n                <div *ngIf=\"!registerFirstPage.controls.firstname.valid && !registerFirstPage.controls.firstname.pending && registerFirstPage.controls.firstname.dirty\">\n                    Sorry, that username can not be used!\n                </div>\n\n                <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\">\n                        Lastname\n                    </ion-label>\n                    <ion-input formControlName=\"lastname\" type=\"text\" placeholder=\"Lastname\" name=\"lname\"></ion-input>\n                </ion-item>\n\n                <div *ngIf=\"!registerFirstPage.controls.lastname.valid && !registerFirstPage.controls.lastname.pending && registerFirstPage.controls.lastname.dirty\">\n                    Sorry, that username can not be used!\n                </div>\n\n                <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\">\n                        Password\n                    </ion-label>\n                    <ion-input formControlName=\"rPassword\" type=\"password\" placeholder=\"Password\" name=\"pwd\"></ion-input>\n                </ion-item>\n\n                <div *ngIf=\"!registerFirstPage.controls.rPassword.valid  && registerFirstPage.controls.rPassword.dirty\">\n                    Please enter a valid password.\n                </div>\n\n                <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\">\n                        Confirm Password\n                    </ion-label>\n                    <ion-input formControlName=\"cPassword\" type=\"password\" placeholder=\"Confirm Password\" name=\"cPwd\"></ion-input>\n                </ion-item>\n\n                <div *ngIf=\"registerFirstPage.controls.cPassword.errors?.mustMatch && registerFirstPage.controls.cPassword.dirty\">\n                    Passwords must match!\n                </div>\n\n                <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\">Sex</ion-label>\n                    <ion-select formControlName=\"sex\" placeholder=\"Please select gender\">\n                        <ion-select-option value=\"m\">Male</ion-select-option>\n                        <ion-select-option value=\"f\">Female</ion-select-option>\n                        <ion-select-option value=\"d\">Diverse</ion-select-option>\n                    </ion-select>\n                </ion-item>\n\n                <ion-button type=\"submit\" [disabled]=\"!registerFirstPage.valid\" expand=\"block\" (click)=\"next()\">Next</ion-button>\n            </form>\n\n            <form [formGroup]=\"registerSecondPage\" *ngIf=\"secondPage\">\n                <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\">\n                        E-Mail\n                    </ion-label>\n                    <ion-input formControlName=\"rEmail\" type=\"mail\" placeholder=\"E-Mail\" name=\"mail\"></ion-input>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\">\n                        Confirm E-Mail\n                    </ion-label>\n                    <ion-input formControlName=\"cEmail\" type=\"mail\" placeholder=\"Confirm E-Mail\" name=\"cMail\"></ion-input>\n\n                    <div *ngIf=\"registerSecondPage.controls.cEmail.errors?.mustMatch && registerSecondPage.controls.cEmail.dirty\">\n                        Emails must match!\n                    </div>\n\n                    <div *ngIf=\"registerSecondPage.controls.cEmail.errors?.pattern\">\n                        Fick dich du dummer Wichser\n                    </div>\n                </ion-item>\n\n                <ion-grid>\n                    <ion-row>\n                        <ion-col size=\"8\">\n                            <ion-item lines=\"none\">\n                                <ion-label position=\"stacked\">\n                                    City\n                                </ion-label>\n                                <ion-input formControlName=\"city\" type=\"text\" placeholder=\"City\" name=\"city\"></ion-input>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col size=\"4\">\n                            <ion-item lines=\"none\">\n                                <ion-label position=\"stacked\">\n                                    Zip\n                                </ion-label>\n                                <ion-input formControlName=\"zip\" type=\"number\" placeholder=\"Zip\" name=\"zip\"></ion-input>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col size=\"8\">\n                            <ion-item lines=\"none\">\n                                <ion-label position=\"stacked\">\n                                    Street\n                                </ion-label>\n                                <ion-input formControlName=\"street\" type=\"text\" placeholder=\"Street\" name=\"street\"></ion-input>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col size=\"4\">\n                            <ion-item lines=\"none\">\n                                <ion-label position=\"stacked\">\n                                    Housenr.\n                                </ion-label>\n                                <ion-input formControlName=\"housenr\" type=\"text\" placeholder=\"Housenr.\" name=\"housenumber\"></ion-input>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n\n                <ion-button type=\"submit\" [disabled]=\"!registerSecondPage.valid\" expand=\"block\" (click)=\"register()\">Register</ion-button>\n            </form>\n\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/card.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/card.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCardCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-card>\n  <!--<div id={{task.taskid}} class=\"map\"></div>-->\n  <ion-card-header>\n    <ion-card-subtitle>{{task.starttime | date:'dd.MM.yyyy'}}</ion-card-subtitle>\n    <ion-card-title>{{task.title}}</ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content>\n    {{task.description}}\n  </ion-card-content>\n</ion-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course/course.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course/course.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseCourseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Bisherige Routen</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Bisherige Routen</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div *ngFor=\"let task of tasks\">\n    <app-card [task]=\"task\"></app-card>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Home</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n    <ion-header collapse=\"condense\">\n        <ion-toolbar>\n            <ion-title size=\"large\">Home</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <div id=\"map\"></div>\n\n    <!--\n    <ion-button color=\"success\" id=\"tracking\" (click)=\"changeTracking()\">Start Tracking</ion-button>\n    -->\n</ion-content>\n\n<!--\n  <ion-button *ngIf=\"!tracking\" color=\"success\" (click)=\"changeTracking()\">Start Tracking</ion-button>\n  <ion-button *ngIf=\"tracking\" color=\"success\" (click)=\"changeTracking()\">Stop Tracking</ion-button>\n-->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/settings.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/settings.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSettingsSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Settings</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <p>Settings</p>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-accept/task-accept.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-accept/task-accept.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTaskAcceptTaskAcceptPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-title>Informations</ion-title>\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"dismiss()\">\n                <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div id=\"route\"></div>\n    <ion-card>\n        <ion-card-content>\n            <ion-item-divider>\n                <!--<ion-item>\n                  <ion-label>\n                      State of Task\n                  </ion-label>\n                  <ion-label>\n                      {{task.status}}\n                  </ion-label>\n              </ion-item>-->\n                {{task.status}}\n            </ion-item-divider>\n            <ion-item-divider>\n                <!--<ion-item>\n                  Description\n              </ion-item><br> {{task.description}}-->\n                {{task.description}}\n            </ion-item-divider>\n            <ion-button class=\"swipeButton\" color=\"dark\" fill=\"outline\" shape=\"round\" size=\"default\" (click)=\"startTask()\">\n                Paket abgeholt\n            </ion-button>\n        </ion-card-content>\n    </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-finish/task-finish.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-finish/task-finish.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTaskFinishTaskFinishPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-title>Informations</ion-title>\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"dismiss()\">\n                <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div id=\"mapFinishTask\"></div>\n    <ion-card>\n        <ion-card-content>\n            <ion-item-divider>\n                <!--<ion-item>\n                <ion-label>\n                    State of Task\n                </ion-label>\n                <ion-label>\n                    {{task.status}}\n                </ion-label>\n            </ion-item>-->\n                {{task.status}}\n            </ion-item-divider>\n            <ion-item-divider>\n                <!--<ion-item>\n                Description\n            </ion-item><br> {{task.description}}-->\n                {{task.description}}\n            </ion-item-divider>\n            <ion-button class=\"swipeButton\" color=\"dark\" fill=\"outline\" shape=\"round\" size=\"default\" (click)=\"finishTask()\">\n                Paket abgegeben\n            </ion-button>\n        </ion-card-content>\n    </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-info/task-info.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-info/task-info.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTaskInfoTaskInfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-title>Informations</ion-title>\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"dismiss()\">\n                <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div id=\"route\"></div>\n    <ion-card>\n        <ion-card-content>\n            <ion-item-divider>\n                <!--<ion-item>\n                    <ion-label>\n                        State of Task\n                    </ion-label>\n                    <ion-label>\n                        {{task.status}}\n                    </ion-label>\n                </ion-item>-->\n                {{task.status}}\n            </ion-item-divider>\n            <ion-item-divider>\n                <!--<ion-item>\n                    Description\n                </ion-item><br> {{task.description}}-->\n                {{task.description}}\n            </ion-item-divider>\n            <ion-button class=\"swipeButton\" color=\"dark\" fill=\"outline\" shape=\"round\" size=\"default\" (click)=\"acceptTask()\">\n                Auftrag annehmen\n            </ion-button>\n        </ion-card-content>\n    </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_course_course_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/course/course.component */
    "./src/app/components/course/course.component.ts");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/settings/settings.component */
    "./src/app/components/settings/settings.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/authentication/authentication.component */
    "./src/app/components/authentication/authentication.component.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");

    var routes = [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_7__["AuthenticationComponent"]
    }, {
      path: 'home',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'course',
      component: _components_course_course_component__WEBPACK_IMPORTED_MODULE_4__["CourseComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'settings',
      component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: '**',
      component: _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_7__["AuthenticationComponent"]
    }, {
      path: 'task-info',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-task-info-task-info-module */
        "pages-task-info-task-info-module").then(__webpack_require__.bind(null,
        /*! ./pages/task-info/task-info.module */
        "./src/app/pages/task-info/task-info.module.ts")).then(function (m) {
          return m.TaskInfoPageModule;
        });
      }
    }, {
      path: 'task-accept',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-task-accept-task-accept-module */
        "pages-task-accept-task-accept-module").then(__webpack_require__.bind(null,
        /*! ./pages/task-accept/task-accept.module */
        "./src/app/pages/task-accept/task-accept.module.ts")).then(function (m) {
          return m.TaskAcceptPageModule;
        });
      }
    }, {
      path: 'task-finish',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-task-finish-task-finish-module */
        "pages-task-finish-task-finish-module").then(__webpack_require__.bind(null,
        /*! ./pages/task-finish/task-finish.module */
        "./src/app/pages/task-finish/task-finish.module.ts")).then(function (m) {
          return m.TaskFinishPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.selectedIndex = 0;
        this.appPages = [{
          title: 'Home',
          url: 'home',
          icon: 'mail'
        }, {
          title: 'Course',
          url: 'course',
          icon: 'paper-plane'
        }, {
          title: 'Settings',
          url: 'settings',
          icon: 'heart'
        }, {
          title: 'Log Out',
          url: '',
          icon: 'archive'
        }];
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var path = window.location.pathname.split('folder/')[1];

          if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(function (page) {
              return page.title.toLowerCase() === path.toLowerCase();
            });
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/nfc/ngx */
    "./node_modules/@ionic-native/nfc/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/authentication/authentication.component */
    "./src/app/components/authentication/authentication.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_course_course_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/course/course.component */
    "./src/app/components/course/course.component.ts");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/settings/settings.component */
    "./src/app/components/settings/settings.component.ts");
    /* harmony import */


    var _components_card_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/card/card.component */
    "./src/app/components/card/card.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_14__["AuthenticationComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"], _components_course_course_component__WEBPACK_IMPORTED_MODULE_16__["CourseComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_17__["SettingsComponent"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_18__["CardComponent"]],
      entryComponents: [_components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_14__["AuthenticationComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["IonicStorageModule"].forRoot()],
      providers: [_ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_13__["NFC"], _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_13__["Ndef"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/class/acceptedTask.ts":
  /*!***************************************!*\
    !*** ./src/app/class/acceptedTask.ts ***!
    \***************************************/

  /*! exports provided: acceptedTask */

  /***/
  function srcAppClassAcceptedTaskTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "acceptedTask", function () {
      return acceptedTask;
    });

    var acceptedTask = function acceptedTask(taskid, startlat, startlng, endlat, endlng, title, description, status, receiverid, routeid) {
      _classCallCheck(this, acceptedTask);

      this.taskid = taskid;
      this.startlat = startlat;
      this.startlng = startlng;
      this.endlat = endlat;
      this.endlng = endlng;
      this.title = title;
      this.description = description;
      this.status = status;
      this.receiverid = receiverid;
      this.routeid = routeid;
    };
    /***/

  },

  /***/
  "./src/app/components/authentication/authentication.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/authentication/authentication.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAuthenticationAuthenticationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-grid {\n  padding: 0%;\n}\n\nion-col {\n  padding: 0%;\n}\n\n.required {\n  color: red;\n}\n\n.invalid {\n  border: 1px solid #ea6153;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFuZ3JhYm5lci9Eb2N1bWVudHMvRGlwbG9tYXJiZWl0L2RpcGxDbGllbnRBcHAvYXBwUFRTL3NyYy9hcHAvY29tcG9uZW50cy9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQge1xuICAgIHBhZGRpbmc6IDAlO1xufVxuXG5pb24tY29sIHtcbiAgICBwYWRkaW5nOiAwJTtcbn1cblxuLnJlcXVpcmVkIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4uaW52YWxpZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VhNjE1Mztcbn0iLCJpb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDAlO1xufVxuXG5pb24tY29sIHtcbiAgcGFkZGluZzogMCU7XG59XG5cbi5yZXF1aXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5pbnZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhNjE1Mztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/authentication/authentication.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/authentication/authentication.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AuthenticationComponent */

  /***/
  function srcAppComponentsAuthenticationAuthenticationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function () {
      return AuthenticationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/auth.service */
    "./src/app/service/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _validators_username__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../validators/username */
    "./src/app/validators/username.ts");
    /* harmony import */


    var _validators_password__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../validators/password */
    "./src/app/validators/password.ts");
    /* harmony import */


    var _validators_email__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../validators/email */
    "./src/app/validators/email.ts");
    /* harmony import */


    var js_sha512__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! js-sha512 */
    "./node_modules/js-sha512/src/sha512.js");
    /* harmony import */


    var js_sha512__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_sha512__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var AuthenticationComponent = /*#__PURE__*/function () {
      function AuthenticationComponent(auth, router, storage, formBuilder) {
        var _this2 = this;

        _classCallCheck(this, AuthenticationComponent);

        this.auth = auth;
        this.router = router;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.segmentModel = "login";
        this.secondPage = true;
        this.submitAttempt = false;
        this.loginPage = formBuilder.group({
          lEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
          lPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=.*)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$')])]
        });
        this.registerFirstPage = formBuilder.group({
          username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$')]), _validators_username__WEBPACK_IMPORTED_MODULE_5__["UsernameValidator"].checkUsername],
          firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z ]*')])],
          lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z ]*')])],
          rPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=.*)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$')]), function (control) {
            return _validators_password__WEBPACK_IMPORTED_MODULE_6__["PasswordValidator"].confirmPassword(control, _this2.registerFirstPage, 'cPassword');
          }],
          cPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]), function (control) {
            return _validators_password__WEBPACK_IMPORTED_MODULE_6__["PasswordValidator"].confirmPassword(control, _this2.registerFirstPage, 'rPassword');
          }],
          sex: ['']
        }, {
          updateOn: "blur"
        });
        this.registerSecondPage = formBuilder.group({
          rEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]), function (control) {
            return _validators_email__WEBPACK_IMPORTED_MODULE_7__["EmailValidator"].confirmEmail(control, _this2.registerSecondPage, 'cEmail');
          }],
          cEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]), function (control) {
            return _validators_email__WEBPACK_IMPORTED_MODULE_7__["EmailValidator"].confirmEmail(control, _this2.registerSecondPage, 'rEmail');
          }],
          zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5)])],
          city: [''],
          street: [''],
          housenr: ['']
        }, {
          updateOn: 'blur'
        });
      }

      _createClass(AuthenticationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          var _this3 = this;

          var body = {
            email: this.loginPage.controls['lEmail'].value,
            password: Object(js_sha512__WEBPACK_IMPORTED_MODULE_8__["sha512"])(this.loginPage.controls['lPassword'].value)
          };
          this.auth.login(body).subscribe(function (result) {
            if (result) {
              _this3.storage.set('token', result);

              _this3.router.navigate(['home']);
            }
          });
        }
      }, {
        key: "register",
        value: function register() {
          var _this4 = this;

          var body = {
            username: this.registerFirstPage.controls['username'].value,
            firstname: this.registerFirstPage.controls['firstname'].value,
            lastname: this.registerFirstPage.controls['lastname'].value,
            password: Object(js_sha512__WEBPACK_IMPORTED_MODULE_8__["sha512"])(this.registerFirstPage.controls['rPassword'].value),
            sex: this.registerFirstPage.controls['sex'].value,
            email: this.registerSecondPage.controls['rEmail'].value,
            zip: this.registerSecondPage.controls['zip'].value,
            city: this.registerSecondPage.controls['city'].value,
            street: this.registerSecondPage.controls['street'].value,
            housenr: this.registerSecondPage.controls['housenr'].value
          };
          this.auth.register(body).subscribe(function (result) {
            if (result) {
              _this4.storage.set('token', result);

              _this4.router.navigate(['home']);
            }
          });
        }
      }, {
        key: "next",
        value: function next() {
          if (this.registerFirstPage.valid) {
            this.secondPage = true;
            console.log(this.registerFirstPage.controls['username'].value);
            console.log(this.registerFirstPage.controls['firstname'].value);
            console.log(this.registerFirstPage.controls['lastname'].value);
            console.log(this.registerFirstPage.controls['rPassword'].value);
            console.log(this.registerFirstPage.controls['sex'].value);
          }
        }
      }, {
        key: "formInputIsRequired",
        value: function formInputIsRequired(formInput) {
          if (this.registerFirstPage.controls[formInput]) {
            if (this.registerFirstPage.controls[formInput].hasError('required')) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(event) {
          this.secondPage = false; //Reset login

          this.loginPage.controls['lEmail'].reset();
          this.loginPage.controls['lPassword'].reset(); //Reset first register page

          this.registerFirstPage.controls['username'].reset();
          this.registerFirstPage.controls['firstname'].reset();
          this.registerFirstPage.controls['lastname'].reset();
          this.registerFirstPage.controls['rPassword'].reset();
          this.registerFirstPage.controls['cPassword'].reset();
          this.registerFirstPage.controls['sex'].reset(); //Reset second register page

          this.registerSecondPage.controls['rEmail'].reset();
          this.registerSecondPage.controls['cEmail'].reset();
          this.registerSecondPage.controls['zip'].reset();
          this.registerSecondPage.controls['city'].reset();
          this.registerSecondPage.controls['street'].reset();
          this.registerSecondPage.controls['housenr'].reset();
        }
      }]);

      return AuthenticationComponent;
    }();

    AuthenticationComponent.ctorParameters = function () {
      return [{
        type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    AuthenticationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-authentication',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./authentication.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/authentication/authentication.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./authentication.component.scss */
      "./src/app/components/authentication/authentication.component.scss"))["default"]]
    })], AuthenticationComponent);
    /***/
  },

  /***/
  "./src/app/components/card/card.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/card/card.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCardCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/card/card.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/card/card.component.ts ***!
    \***************************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppComponentsCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var osrm_url = "https://v2202010130694129625.goodsrv.de:50/route/v1";

    var CardComponent = /*#__PURE__*/function () {
      function CardComponent() {
        _classCallCheck(this, CardComponent);
      }

      _createClass(CardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          /*  let wp = []
            let lat = (this.task.startlat + this.task.endlat) / 2
            let lng = (this.task.startlng + this.task.endlng) / 2
            let map = new Map('' + this.task.taskid).setView([lat, lng], 11)
                   tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
                   wp.push(latLng(this.task.startlat, this.task.startlng))
            wp.push(latLng(this.task.endlat, this.task.endlng))
                   Routing.control({
              routeWhileDragging: false,
              show: false,
              router: new Routing.OSRMv1({
                serviceUrl: osrm_url
              }),
              addWaypoints: false,
              plan: Routing.plan(wp, {
                createMarker: function(j, waypoint) {
                  if (j == 0) {
                    return marker(waypoint.latLng, {
                      icon: new Icon({
                        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41]
                      }),
                      draggable: false
                    })
                  } else {
                    return marker(waypoint.latLng, {
                      icon: new Icon({
                        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41]
                      }),
                      draggable: false
                    })
                  }
                }
              })
            }).addTo(map)*/
        }
      }]);

      return CardComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "task", void 0);
    CardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/card.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./card.component.scss */
      "./src/app/components/card/card.component.scss"))["default"]]
    })], CardComponent);
    /***/
  },

  /***/
  "./src/app/components/course/course.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/course/course.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCourseCourseComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlL2NvdXJzZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/course/course.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/course/course.component.ts ***!
    \*******************************************************/

  /*! exports provided: CourseComponent */

  /***/
  function srcAppComponentsCourseCourseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseComponent", function () {
      return CourseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/http.service */
    "./src/app/service/http.service.ts");

    var CourseComponent = /*#__PURE__*/function () {
      function CourseComponent(http) {
        _classCallCheck(this, CourseComponent);

        this.http = http;
      }

      _createClass(CourseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.http.getFinishedTasks().subscribe(function (result) {
            result.subscribe(function (tasks) {
              _this5.tasks = tasks;
              console.log(tasks);
            });
          });
        }
      }]);

      return CourseComponent;
    }();

    CourseComponent.ctorParameters = function () {
      return [{
        type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }];
    };

    CourseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-course',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./course.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course/course.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./course.component.scss */
      "./src/app/components/course/course.component.scss"))["default"]]
    })], CourseComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/home/home.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#map {\n  height: 100%;\n  z-index: 0;\n}\n\n#tracking {\n  z-index: 2;\n  width: 50%;\n  margin-left: 25%;\n  margin-top: -35%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFuZ3JhYm5lci9Eb2N1bWVudHMvRGlwbG9tYXJiZWl0L2RpcGxDbGllbnRBcHAvYXBwUFRTL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMDtcbn1cblxuI3RyYWNraW5nIHtcbiAgICB6LWluZGV4OiAyO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBtYXJnaW4tdG9wOiAtMzUlO1xufSIsIiNtYXAge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDA7XG59XG5cbiN0cmFja2luZyB7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIG1hcmdpbi10b3A6IC0zNSU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _service_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/http.service */
    "./src/app/service/http.service.ts");
    /* harmony import */


    var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! leaflet-routing-machine */
    "./node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js");
    /* harmony import */


    var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _service_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_pages_task_info_task_info_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/pages/task-info/task-info.page */
    "./src/app/pages/task-info/task-info.page.ts");
    /* harmony import */


    var _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/nfc/ngx */
    "./node_modules/@ionic-native/nfc/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_app_class_acceptedTask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/class/acceptedTask */
    "./src/app/class/acceptedTask.ts");
    /* harmony import */


    var src_app_pages_task_accept_task_accept_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/pages/task-accept/task-accept.page */
    "./src/app/pages/task-accept/task-accept.page.ts");
    /* harmony import */


    var src_app_pages_task_finish_task_finish_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/pages/task-finish/task-finish.page */
    "./src/app/pages/task-finish/task-finish.page.ts");

    var osrm_url = "https://v2202010130694129625.goodsrv.de:50/route/v1";

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(platform, router, http, data, modalController, toastCtrl, nfc, ndef) {
        var _this6 = this;

        _classCallCheck(this, HomeComponent);

        this.platform = platform;
        this.router = router;
        this.http = http;
        this.data = data;
        this.modalController = modalController;
        this.toastCtrl = toastCtrl;
        this.nfc = nfc;
        this.ndef = ndef;
        this.wp = [];
        this.tracking = false;
        this.routing = false;
        this.acceptedTaskMarker = [];
        this.openTaskMarker = [];
        this.platform.ready().then(function () {
          _this6.addListenNFC();
        });
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this7 = this;

            var position;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Geolocation"].getCurrentPosition();

                  case 2:
                    position = _context.sent;
                    this.map = new leaflet__WEBPACK_IMPORTED_MODULE_4__["Map"]("map").setView([position.coords.latitude, position.coords.longitude], 13);
                    Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                      attribution: 'MapData @ <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                    }).addTo(this.map);
                    this.http.getOpenTasks().subscribe(function (result) {
                      result.subscribe(function (tasks) {
                        _this7.data.openTasks = tasks;

                        _this7.showOpenTasks(_this7.data.openTasks);
                      });
                    });
                    this.http.getAcceptedTasks().subscribe(function (result) {
                      result.subscribe(function (tasks) {
                        _this7.data.acceptedTasks = tasks;

                        _this7.showAcceptedTasks(_this7.data.acceptedTasks);
                      });
                    });

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "addListenNFC",
        value: function addListenNFC() {
          var _this8 = this;

          this.nfc.addNdefListener(function () {}, function (err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastCtrl.create({
                        message: err,
                        duration: 1000,
                        position: 'bottom'
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }).subscribe(function (data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this9 = this;

              var payload, tagContent, task, toast, _toast, _toast2;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      payload = data.tag.ndefMessage[0].payload;
                      tagContent = this.nfc.bytesToString(payload).substring(3);
                      task = this.data.acceptedTasks.find(function (i) {
                        return i.taskid == Number(tagContent);
                      });

                      if (!this.routing) {
                        _context3.next = 11;
                        break;
                      }

                      _context3.next = 6;
                      return this.toastCtrl.create({
                        message: 'Route beendet',
                        duration: 2000,
                        position: 'bottom'
                      });

                    case 6:
                      toast = _context3.sent;
                      toast.present();
                      this.endRoute(this.currentDrivingTask);
                      _context3.next = 23;
                      break;

                    case 11:
                      if (!(this.data.acceptedTasks.includes(task) && !this.routing)) {
                        _context3.next = 19;
                        break;
                      }

                      _context3.next = 14;
                      return this.toastCtrl.create({
                        message: 'Route wird gestartet',
                        duration: 2000,
                        position: 'bottom'
                      });

                    case 14:
                      _toast = _context3.sent;

                      _toast.present();

                      this.http.startRoute(tagContent).subscribe(function (result) {
                        result.subscribe(function (res) {
                          _this9.startRoute(tagContent);

                          _this9.reloadAcceptedTasks(tagContent);

                          _this9.routing = true;
                        });
                      });
                      _context3.next = 23;
                      break;

                    case 19:
                      _context3.next = 21;
                      return this.toastCtrl.create({
                        message: 'Kein Task gefunden',
                        duration: 2000,
                        position: 'bottom'
                      });

                    case 21:
                      _toast2 = _context3.sent;

                      _toast2.present();

                    case 23:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          });
        }
      }, {
        key: "presentModalOpenTask",
        value: function presentModalOpenTask(task) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this10 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalController.create({
                      component: src_app_pages_task_info_task_info_page__WEBPACK_IMPORTED_MODULE_9__["TaskInfoPage"],
                      swipeToClose: true,
                      componentProps: {
                        task: task
                      }
                    });

                  case 2:
                    modal = _context4.sent;
                    modal.onDidDismiss().then(function (data) {
                      if (data) {
                        _this10.acceptTask(data.data);
                      }
                    });
                    _context4.next = 6;
                    return modal.present();

                  case 6:
                    return _context4.abrupt("return", _context4.sent);

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "presentModalAcceptedTask",
        value: function presentModalAcceptedTask(task) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this11 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modalController.create({
                      component: src_app_pages_task_accept_task_accept_page__WEBPACK_IMPORTED_MODULE_12__["TaskAcceptPage"],
                      swipeToClose: true,
                      componentProps: {
                        task: task
                      }
                    });

                  case 2:
                    modal = _context5.sent;
                    modal.onDidDismiss().then(function (data) {
                      if (data) {
                        _this11.http.startRoute(data.data).subscribe(function (result) {
                          result.subscribe(function (res) {
                            _this11.startRoute(data.data);

                            _this11.reloadAcceptedTasks(data.data);

                            _this11.routing = true;
                          });
                        });
                      }
                    });
                    _context5.next = 6;
                    return modal.present();

                  case 6:
                    return _context5.abrupt("return", _context5.sent);

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "presentModalFinishTask",
        value: function presentModalFinishTask(task) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this12 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.modalController.create({
                      component: src_app_pages_task_finish_task_finish_page__WEBPACK_IMPORTED_MODULE_13__["TaskFinishPage"],
                      swipeToClose: true,
                      componentProps: {
                        task: task
                      }
                    });

                  case 2:
                    modal = _context6.sent;
                    modal.onDidDismiss().then(function (data) {
                      if (data) {
                        _this12.endRoute(data.data);
                      }
                    });
                    _context6.next = 6;
                    return modal.present();

                  case 6:
                    return _context6.abrupt("return", _context6.sent);

                  case 7:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "getLocation",
        value: function getLocation() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var position, body;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Geolocation"].getCurrentPosition();

                  case 2:
                    position = _context7.sent;
                    console.log(position);

                    if (position.coords.latitude != null) {
                      this.currentLocation = [position.coords.latitude, position.coords.longitude]; //Only for testing

                      /*let body
                      if (this.wp.length == 0) {
                        this.wp.push(this.currentLocation)
                        body = {
                          routeid: this.data.routeId,
                          lat: 48.151417,
                          lng: 14.020848
                        }
                      } else if (this.wp.length == 1) {
                        this.wp.push(this.currentLocation)
                        body = {
                          routeid: this.data.routeId,
                          lat: 48.163901,
                          lng: 14.033382
                        }
                      } else if (this.wp.length == 2) {
                        this.wp.push(this.currentLocation)
                        body = {
                          routeid: this.data.routeId,
                          lat: 48.170509,
                          lng: 14.051609
                        }
                      }*/

                      body = {
                        routeid: this.data.routeId,
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                      }; //this.wp.push(this.currentLocation)

                      this.http.setLocation(body).subscribe(function (result) {
                        result.subscribe();
                      });
                    }

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "newLocation",
        value: function newLocation() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.getLocation();

                  case 2:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "showOpenTasks",
        value: function showOpenTasks(tasks) {
          var _this13 = this;

          if (tasks != null) {
            tasks.forEach(function (task) {
              var marker = new leaflet__WEBPACK_IMPORTED_MODULE_4__["Marker"]([task.startlat, task.startlng], {
                icon: new leaflet__WEBPACK_IMPORTED_MODULE_4__["Icon"]({
                  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
                  iconSize: [25, 41],
                  iconAnchor: [12, 41]
                })
              }).addTo(_this13.map);
              marker.on('click', function () {
                _this13.presentModalOpenTask(task);
              });

              _this13.openTaskMarker.push(marker);
            });
          }
        }
      }, {
        key: "showAcceptedTasks",
        value: function showAcceptedTasks(tasks) {
          var _this14 = this;

          if (tasks != null) {
            tasks.forEach(function (task) {
              var marker = new leaflet__WEBPACK_IMPORTED_MODULE_4__["Marker"]([task.startlat, task.startlng], {
                icon: new leaflet__WEBPACK_IMPORTED_MODULE_4__["Icon"]({
                  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
                  iconSize: [25, 41],
                  iconAnchor: [12, 41]
                })
              }).addTo(_this14.map);
              marker.on('click', function () {
                _this14.presentModalAcceptedTask(task);
              });

              _this14.acceptedTaskMarker.push(marker);
            });
          }
        }
      }, {
        key: "reloadOpenTasks",
        value: function reloadOpenTasks(taskId) {
          var _this15 = this;

          var tasks = this.data.openTasks;
          var task = this.data.openTasks.find(function (i) {
            return i.taskid == taskId;
          });
          var index = tasks.indexOf(task);
          this.openTaskMarker.forEach(function (marker) {
            _this15.map.removeLayer(marker);
          });
          tasks.splice(index, 1);
          this.data.openTasks = tasks;
          this.openTaskMarker = [];
          this.showOpenTasks(tasks);
        }
      }, {
        key: "reloadAcceptedTasks",
        value: function reloadAcceptedTasks(taskId) {
          var _this16 = this;

          var tasks = this.data.acceptedTasks;
          var task = this.data.acceptedTasks.find(function (i) {
            return i.taskid == taskId;
          });
          var index = tasks.indexOf(task);
          this.currentDrivingTask = task;
          this.acceptedTaskMarker.forEach(function (marker) {
            _this16.map.removeLayer(marker);
          });
          tasks.splice(index, 1);
          this.data.acceptedTasks = tasks;
          this.acceptedTaskMarker = [];
          this.showAcceptedTasks(tasks);
        }
      }, {
        key: "acceptTask",
        value: function acceptTask(taskId) {
          var _this17 = this;

          this.http.acceptTask(taskId).subscribe(function (result) {
            result.subscribe(function (data) {
              var task = _this17.data.openTasks.find(function (i) {
                return i.taskid == taskId;
              });

              var newTask = new src_app_class_acceptedTask__WEBPACK_IMPORTED_MODULE_11__["acceptedTask"](task.taskid, task.startlat, task.startlng, task.endlat, task.endlng, task.title, task.description, task.status, task.receiverid, data.insertId);

              _this17.data.acceptedTasks.push(newTask);

              _this17.acceptedTaskMarker = [];

              _this17.showAcceptedTasks(_this17.data.acceptedTasks);

              _this17.reloadOpenTasks(taskId);
            });
          });
        }
      }, {
        key: "startRoute",
        value: function startRoute(taskId) {
          var _this18 = this;

          var task = this.data.acceptedTasks.find(function (i) {
            return i.taskid == taskId;
          });
          this.data.routeId = task.routeid;
          var wp = [];
          wp.push(Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["latLng"])(task.startlat, task.startlng));
          wp.push(Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["latLng"])(task.endlat, task.endlng));
          var targetMarker = new leaflet__WEBPACK_IMPORTED_MODULE_4__["Marker"](wp[1], {
            icon: new leaflet__WEBPACK_IMPORTED_MODULE_4__["Icon"]({
              iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
              iconSize: [25, 41],
              iconAnchor: [12, 41]
            }),
            draggable: false
          });
          targetMarker.on('click', function () {
            _this18.presentModalFinishTask(task);
          });
          this.route = leaflet__WEBPACK_IMPORTED_MODULE_4__["Routing"].control({
            routeWhileDragging: false,
            show: false,
            router: new leaflet__WEBPACK_IMPORTED_MODULE_4__["Routing"].OSRMv1({
              serviceUrl: osrm_url
            }),
            addWaypoints: false,
            plan: leaflet__WEBPACK_IMPORTED_MODULE_4__["Routing"].plan(wp, {
              createMarker: function createMarker(j, waypoint) {
                if (j == 0) {
                  return Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["marker"])(waypoint.latLng, {
                    icon: new leaflet__WEBPACK_IMPORTED_MODULE_4__["Icon"]({
                      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
                      iconSize: [25, 41],
                      iconAnchor: [12, 41]
                    }),
                    draggable: false
                  });
                } else {
                  return targetMarker;
                }
              }
            })
          });
          this.map.addControl(this.route);
          this.changeTracking();
        }
      }, {
        key: "endRoute",
        value: function endRoute(task) {
          this.http.endRoute(task.routeid).subscribe(function (result) {
            result.subscribe(function (res) {});
          });
          this.routing = false;
          this.map.removeControl(this.route);
          this.changeTracking();
        }
      }, {
        key: "changeTracking",
        value: function changeTracking() {
          var _this19 = this;

          this.tracking = !this.tracking;
          this.getLocation();

          if (this.tracking) {
            this.interval = setInterval(function () {
              _this19.getLocation();
            }, 60000);
          } else {
            clearInterval(this.interval);
          }
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _service_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
      }, {
        type: _service_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]
      }, {
        type: _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_10__["NFC"]
      }, {
        type: _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_10__["Ndef"]
      }];
    };

    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/components/home/home.component.scss"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/settings/settings.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/settings/settings.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSettingsSettingsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/settings/settings.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/settings/settings.component.ts ***!
    \***********************************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppComponentsSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SettingsComponent = /*#__PURE__*/function () {
      function SettingsComponent() {
        _classCallCheck(this, SettingsComponent);
      }

      _createClass(SettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SettingsComponent;
    }();

    SettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-settings',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./settings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/settings.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./settings.component.scss */
      "./src/app/components/settings/settings.component.scss"))["default"]]
    })], SettingsComponent);
    /***/
  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(storage) {
        _classCallCheck(this, AuthGuard);

        this.storage = storage;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.storage.get('token')) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/pages/task-accept/task-accept.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/task-accept/task-accept.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTaskAcceptTaskAcceptPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#route {\n  height: 30%;\n  z-index: 0;\n}\n\nion-card,\nion-item {\n  text-align: center;\n}\n\nion-item-divider {\n  width: 90%;\n  margin: auto;\n}\n\n.swipeButton {\n  margin-top: 5%;\n  --border-width: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFuZ3JhYm5lci9Eb2N1bWVudHMvRGlwbG9tYXJiZWl0L2RpcGxDbGllbnRBcHAvYXBwUFRTL3NyYy9hcHAvcGFnZXMvdGFzay1hY2NlcHQvdGFzay1hY2NlcHQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90YXNrLWFjY2VwdC90YXNrLWFjY2VwdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBOztFQUVJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YXNrLWFjY2VwdC90YXNrLWFjY2VwdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcm91dGUge1xuICAgIGhlaWdodDogMzAlO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbmlvbi1jYXJkLFxuaW9uLWl0ZW0ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5zd2lwZUJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbn0iLCIjcm91dGUge1xuICBoZWlnaHQ6IDMwJTtcbiAgei1pbmRleDogMDtcbn1cblxuaW9uLWNhcmQsXG5pb24taXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWl0ZW0tZGl2aWRlciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnN3aXBlQnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/task-accept/task-accept.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/task-accept/task-accept.page.ts ***!
    \*******************************************************/

  /*! exports provided: TaskAcceptPage */

  /***/
  function srcAppPagesTaskAcceptTaskAcceptPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskAcceptPage", function () {
      return TaskAcceptPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/http.service */
    "./src/app/service/http.service.ts");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var src_app_components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/home/home.component */
    "./src/app/components/home/home.component.ts");

    var osrm_url = "https://v2202010130694129625.goodsrv.de:50/route/v1";

    var TaskAcceptPage = /*#__PURE__*/function () {
      function TaskAcceptPage(modalCtrl, http, home) {
        _classCallCheck(this, TaskAcceptPage);

        this.modalCtrl = modalCtrl;
        this.http = http;
        this.home = home;
      }

      _createClass(TaskAcceptPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.lat = (this.task.startlat + this.task.endlat) / 2;
          this.lng = (this.task.startlng + this.task.endlng) / 2;
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.map = new leaflet__WEBPACK_IMPORTED_MODULE_4__["Map"]("route").setView([this.lat, this.lng], 11);
          Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
          this.showRoute();
        }
      }, {
        key: "showRoute",
        value: function showRoute() {
          var wp = [];
          wp.push(Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["latLng"])(this.task.startlat, this.task.startlng));
          wp.push(Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["latLng"])(this.task.endlat, this.task.endlng));
          leaflet__WEBPACK_IMPORTED_MODULE_4__["Routing"].control({
            routeWhileDragging: false,
            show: false,
            router: new leaflet__WEBPACK_IMPORTED_MODULE_4__["Routing"].OSRMv1({
              serviceUrl: osrm_url
            }),
            addWaypoints: false,
            plan: leaflet__WEBPACK_IMPORTED_MODULE_4__["Routing"].plan(wp, {
              createMarker: function createMarker(j, waypoint) {
                if (j == 0) {
                  return Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["marker"])(waypoint.latLng, {
                    icon: new leaflet__WEBPACK_IMPORTED_MODULE_4__["Icon"]({
                      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
                      iconSize: [25, 41],
                      iconAnchor: [12, 41]
                    }),
                    draggable: false
                  });
                } else {
                  return Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["marker"])(waypoint.latLng, {
                    icon: new leaflet__WEBPACK_IMPORTED_MODULE_4__["Icon"]({
                      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
                      iconSize: [25, 41],
                      iconAnchor: [12, 41]
                    }),
                    draggable: false
                  });
                }
              }
            })
          }).addTo(this.map);
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss(null);
        }
      }, {
        key: "startTask",
        value: function startTask() {
          this.modalCtrl.dismiss(this.task.taskid);
        }
      }]);

      return TaskAcceptPage;
    }();

    TaskAcceptPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
      }, {
        type: src_app_components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TaskAcceptPage.prototype, "task", void 0);
    TaskAcceptPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-task-accept',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./task-accept.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-accept/task-accept.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./task-accept.page.scss */
      "./src/app/pages/task-accept/task-accept.page.scss"))["default"]]
    })], TaskAcceptPage);
    /***/
  },

  /***/
  "./src/app/pages/task-finish/task-finish.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/task-finish/task-finish.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTaskFinishTaskFinishPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rhc2stZmluaXNoL3Rhc2stZmluaXNoLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/task-finish/task-finish.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/task-finish/task-finish.page.ts ***!
    \*******************************************************/

  /*! exports provided: TaskFinishPage */

  /***/
  function srcAppPagesTaskFinishTaskFinishPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskFinishPage", function () {
      return TaskFinishPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/http.service */
    "./src/app/service/http.service.ts");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var src_app_components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/home/home.component */
    "./src/app/components/home/home.component.ts");

    var osrm_url = "https://v2202010130694129625.goodsrv.de:50/route/v1";

    var TaskFinishPage = /*#__PURE__*/function () {
      function TaskFinishPage(modalCtrl, http, home) {
        _classCallCheck(this, TaskFinishPage);

        this.modalCtrl = modalCtrl;
        this.http = http;
        this.home = home;
      }

      _createClass(TaskFinishPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.lat = (this.task.startlat + this.task.endlat) / 2;
          this.lng = (this.task.startlng + this.task.endlng) / 2;
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.map = new leaflet__WEBPACK_IMPORTED_MODULE_4__["Map"]("mapFinishTask").setView([this.lat, this.lng], 11);
          Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
          this.showRoute();
        }
      }, {
        key: "showRoute",
        value: function showRoute() {
          var wp = [];
          wp.push(Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["latLng"])(this.task.startlat, this.task.startlng));
          wp.push(Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["latLng"])(this.task.endlat, this.task.endlng));
          leaflet__WEBPACK_IMPORTED_MODULE_4__["Routing"].control({
            routeWhileDragging: false,
            show: false,
            router: new leaflet__WEBPACK_IMPORTED_MODULE_4__["Routing"].OSRMv1({
              serviceUrl: osrm_url
            }),
            addWaypoints: false,
            plan: leaflet__WEBPACK_IMPORTED_MODULE_4__["Routing"].plan(wp, {
              createMarker: function createMarker(j, waypoint) {
                if (j == 0) {
                  return Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["marker"])(waypoint.latLng, {
                    icon: new leaflet__WEBPACK_IMPORTED_MODULE_4__["Icon"]({
                      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
                      iconSize: [25, 41],
                      iconAnchor: [12, 41]
                    }),
                    draggable: false
                  });
                } else {
                  return Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["marker"])(waypoint.latLng, {
                    icon: new leaflet__WEBPACK_IMPORTED_MODULE_4__["Icon"]({
                      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
                      iconSize: [25, 41],
                      iconAnchor: [12, 41]
                    }),
                    draggable: false
                  });
                }
              }
            })
          }).addTo(this.map);
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss(null);
        }
      }, {
        key: "finishTask",
        value: function finishTask() {
          this.modalCtrl.dismiss(this.task);
        }
      }]);

      return TaskFinishPage;
    }();

    TaskFinishPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
      }, {
        type: src_app_components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TaskFinishPage.prototype, "task", void 0);
    TaskFinishPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-task-finish',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./task-finish.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-finish/task-finish.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./task-finish.page.scss */
      "./src/app/pages/task-finish/task-finish.page.scss"))["default"]]
    })], TaskFinishPage);
    /***/
  },

  /***/
  "./src/app/pages/task-info/task-info.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/task-info/task-info.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTaskInfoTaskInfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#route {\n  height: 30%;\n  z-index: 0;\n}\n\nion-card,\nion-item {\n  text-align: center;\n}\n\nion-item-divider {\n  width: 90%;\n  margin: auto;\n}\n\n.swipeButton {\n  margin-top: 5%;\n  --border-width: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFuZ3JhYm5lci9Eb2N1bWVudHMvRGlwbG9tYXJiZWl0L2RpcGxDbGllbnRBcHAvYXBwUFRTL3NyYy9hcHAvcGFnZXMvdGFzay1pbmZvL3Rhc2staW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Rhc2staW5mby90YXNrLWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTs7RUFFSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFzay1pbmZvL3Rhc2staW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcm91dGUge1xuICAgIGhlaWdodDogMzAlO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbmlvbi1jYXJkLFxuaW9uLWl0ZW0ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5zd2lwZUJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbn0iLCIjcm91dGUge1xuICBoZWlnaHQ6IDMwJTtcbiAgei1pbmRleDogMDtcbn1cblxuaW9uLWNhcmQsXG5pb24taXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWl0ZW0tZGl2aWRlciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnN3aXBlQnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/task-info/task-info.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/task-info/task-info.page.ts ***!
    \***************************************************/

  /*! exports provided: TaskInfoPage */

  /***/
  function srcAppPagesTaskInfoTaskInfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskInfoPage", function () {
      return TaskInfoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/http.service */
    "./src/app/service/http.service.ts");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);

    var osrm_url = "https://v2202010130694129625.goodsrv.de:50/route/v1";

    var TaskInfoPage = /*#__PURE__*/function () {
      function TaskInfoPage(modalCtrl, http) {
        _classCallCheck(this, TaskInfoPage);

        this.modalCtrl = modalCtrl;
        this.http = http;
      }

      _createClass(TaskInfoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.lat = (this.task.startlat + this.task.endlat) / 2;
          this.lng = (this.task.startlng + this.task.endlng) / 2;
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.map = new leaflet__WEBPACK_IMPORTED_MODULE_4__["Map"]("route").setView([this.lat, this.lng], 11);
          Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
          this.showRoute();
        }
      }, {
        key: "showRoute",
        value: function showRoute() {
          var wp = [];
          wp.push(Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["latLng"])(this.task.startlat, this.task.startlng));
          wp.push(Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["latLng"])(this.task.endlat, this.task.endlng));
          leaflet__WEBPACK_IMPORTED_MODULE_4__["Routing"].control({
            routeWhileDragging: false,
            show: false,
            router: new leaflet__WEBPACK_IMPORTED_MODULE_4__["Routing"].OSRMv1({
              serviceUrl: osrm_url
            }),
            addWaypoints: false,
            plan: leaflet__WEBPACK_IMPORTED_MODULE_4__["Routing"].plan(wp, {
              createMarker: function createMarker(j, waypoint) {
                if (j == 0) {
                  return Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["marker"])(waypoint.latLng, {
                    icon: new leaflet__WEBPACK_IMPORTED_MODULE_4__["Icon"]({
                      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
                      iconSize: [25, 41],
                      iconAnchor: [12, 41]
                    }),
                    draggable: false
                  });
                } else {
                  return Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["marker"])(waypoint.latLng, {
                    icon: new leaflet__WEBPACK_IMPORTED_MODULE_4__["Icon"]({
                      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
                      iconSize: [25, 41],
                      iconAnchor: [12, 41]
                    }),
                    draggable: false
                  });
                }
              }
            })
          }).addTo(this.map);
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss(null);
        }
      }, {
        key: "acceptTask",
        value: function acceptTask() {
          this.modalCtrl.dismiss(this.task.taskid);
        }
      }]);

      return TaskInfoPage;
    }();

    TaskInfoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TaskInfoPage.prototype, "task", void 0);
    TaskInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-task-info',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./task-info.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-info/task-info.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./task-info.page.scss */
      "./src/app/pages/task-info/task-info.page.scss"))["default"]]
    })], TaskInfoPage);
    /***/
  },

  /***/
  "./src/app/service/auth.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/auth.service.ts ***!
    \*****************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServiceAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var TOKEN_KEY = 'token';
    var corsUrl = "https://cors-anywhere.herokuapp.com/"; //const baseUrl = corsUrl + "http://195.128.100.64:8080/"

    var baseUrl = "https://v2202010130694129625.goodsrv.de/"; //const baseUrl = "http://localhost:8080/"

    var AuthService = /*#__PURE__*/function () {
      function AuthService(storage, http, router) {
        _classCallCheck(this, AuthService);

        this.storage = storage;
        this.http = http;
        this.router = router;
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(body) {
          return this.http.post(baseUrl + 'authenticate/senderlogin', body, {
            responseType: 'text'
          });
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var token = this.storage.get(TOKEN_KEY);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', 'Bearer ' + token);
          return this.http.get(baseUrl + 'sender/getUser', {
            headers: headers
          });
        }
      }, {
        key: "logOut",
        value: function logOut() {
          var _this20 = this;

          this.storage.remove(TOKEN_KEY).then(function () {
            _this20.router.navigateByUrl('/');
          });
        }
      }, {
        key: "register",
        value: function register(body) {
          return this.http.post(baseUrl + 'authenticate/createSender', body, {
            responseType: 'text'
          });
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/service/data.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/data.service.ts ***!
    \*****************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServiceDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DataService = function DataService() {
      _classCallCheck(this, DataService);

      this.acceptedTasks = [];
      this.openTasks = [];
    };

    DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataService);
    /***/
  },

  /***/
  "./src/app/service/http.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/http.service.ts ***!
    \*****************************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppServiceHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"); //const baseUrl = corsUrl + "http://195.128.100.64:8080/"


    var baseUrl = "https://v2202010130694129625.goodsrv.de/"; //const baseUrl = "http://localhost:8080/"

    var HttpService = /*#__PURE__*/function () {
      function HttpService(http, storage, data) {
        _classCallCheck(this, HttpService);

        this.http = http;
        this.storage = storage;
        this.data = data;
      }

      _createClass(HttpService, [{
        key: "setLocation",
        value: function setLocation(body) {
          var _this21 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(this.storage.get('token').then(function (result) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + result);
            return _this21.http.post(baseUrl + 'sender/savePosition', body, {
              headers: headers
            });
          }));
        }
      }, {
        key: "getOpenTasks",
        value: function getOpenTasks() {
          var _this22 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(this.storage.get('token').then(function (result) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + result);
            /*return [new Task(1, 48.138435, 14.004268, 48.155429, 14.036327, 'Lieferung von 2 Kisten Bier (ZM und Hirter Privat Pils)', -1, 12),
                    new Task(2, 48.155429, 14.036327, 48.138435, 14.004268, 'Lieferung von 3 Kebap Scharf ohne Tomaten', -1, 13),
                    new Task(3, 48.165429, 14.136327, 48.138435, 14.004268, '15 Briefe', 0, 13)]*/

            return _this22.http.get(baseUrl + 'sender/getOpenTasks', {
              headers: headers
            });
          }));
        }
      }, {
        key: "getAcceptedTasks",
        value: function getAcceptedTasks() {
          var _this23 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(this.storage.get('token').then(function (result) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + result);
            return _this23.http.get(baseUrl + 'sender/getOpenTasksBySender', {
              headers: headers
            });
          }));
        }
      }, {
        key: "getFinishedTasks",
        value: function getFinishedTasks() {
          var _this24 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(this.storage.get('token').then(function (result) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + result);
            return _this24.http.get(baseUrl + 'sender/getFinishedTasksBySender', {
              headers: headers
            });
          }));
        }
      }, {
        key: "acceptTask",
        value: function acceptTask(taskId) {
          var _this25 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(this.storage.get('token').then(function (result) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + result);
            return _this25.http.get(baseUrl + 'sender/acceptTask/' + taskId, {
              headers: headers
            });
          }));
        }
      }, {
        key: "startRoute",
        value: function startRoute(taskId) {
          var _this26 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(this.storage.get('token').then(function (result) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + result);

            var routeid = _this26.data.acceptedTasks.find(function (i) {
              return i.taskid == taskId;
            }).routeid;

            return _this26.http.get(baseUrl + 'sender/startRoute/' + routeid, {
              headers: headers
            });
          }));
        }
      }, {
        key: "endRoute",
        value: function endRoute(routeId) {
          var _this27 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(this.storage.get('token').then(function (result) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + result);
            return _this27.http.get(baseUrl + 'sender/endRoute/' + routeId, {
              headers: headers
            });
          }));
        }
      }]);

      return HttpService;
    }();

    HttpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }];
    };

    HttpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], HttpService);
    /***/
  },

  /***/
  "./src/app/validators/email.ts":
  /*!*************************************!*\
    !*** ./src/app/validators/email.ts ***!
    \*************************************/

  /*! exports provided: EmailValidator */

  /***/
  function srcAppValidatorsEmailTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailValidator", function () {
      return EmailValidator;
    });

    var EmailValidator = /*#__PURE__*/function () {
      function EmailValidator() {
        _classCallCheck(this, EmailValidator);
      }

      _createClass(EmailValidator, null, [{
        key: "confirmEmail",
        value: function confirmEmail(control, group, matchEmail) {
          return new Promise(function (resolve) {
            if (!control.value && group.controls[matchEmail].value !== null || group.controls[matchEmail].value === control.value) {
              group.controls['cEmail'].setErrors(null);
              resolve(null);
            } else {
              group.controls['cEmail'].setErrors({
                'mustMatch': true
              });

              if (matchEmail == 'rEmail') {
                resolve({
                  'mustMatch': true
                });
              } else {
                resolve(null);
              }
            }
          });
        }
      }]);

      return EmailValidator;
    }();
    /***/

  },

  /***/
  "./src/app/validators/password.ts":
  /*!****************************************!*\
    !*** ./src/app/validators/password.ts ***!
    \****************************************/

  /*! exports provided: PasswordValidator */

  /***/
  function srcAppValidatorsPasswordTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordValidator", function () {
      return PasswordValidator;
    });

    var PasswordValidator = /*#__PURE__*/function () {
      function PasswordValidator() {
        _classCallCheck(this, PasswordValidator);
      }

      _createClass(PasswordValidator, null, [{
        key: "confirmPassword",
        value: function confirmPassword(control, group, matchPassword) {
          return new Promise(function (resolve) {
            if (!control.value && group.controls[matchPassword].value !== null || group.controls[matchPassword].value === control.value) {
              group.controls['cPassword'].setErrors(null);
              resolve(null);
            } else {
              group.controls['cPassword'].setErrors({
                'mustMatch': true
              });

              if (matchPassword == 'rPassword') {
                resolve({
                  'mustMatch': true
                });
              } else {
                resolve(null);
              }
            }
          });
        }
      }]);

      return PasswordValidator;
    }();
    /***/

  },

  /***/
  "./src/app/validators/username.ts":
  /*!****************************************!*\
    !*** ./src/app/validators/username.ts ***!
    \****************************************/

  /*! exports provided: UsernameValidator */

  /***/
  function srcAppValidatorsUsernameTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsernameValidator", function () {
      return UsernameValidator;
    });

    var UsernameValidator = /*#__PURE__*/function () {
      function UsernameValidator() {
        _classCallCheck(this, UsernameValidator);
      }

      _createClass(UsernameValidator, null, [{
        key: "checkUsername",
        value: function checkUsername(control) {
          return new Promise(function (resolve) {
            //Serverabfrage, ob username bereits vorhanden ist
            setTimeout(function () {
              if (control.value.toLowerCase() === "greg") {
                resolve({
                  "username taken": true
                });
              } else {
                resolve(null);
              }
            }, 2000);
          });
        }
      }]);

      return UsernameValidator;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/maximiliangrabner/Documents/Diplomarbeit/diplClientApp/appPTS/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map