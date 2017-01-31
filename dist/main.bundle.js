webpackJsonp([0,4],{

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PostsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsService = (function () {
    function PostsService(http) {
        this.http = http;
    }
    PostsService.prototype.fetchPosts = function () {
        return this.http.get('/api/posts').map(function (response) { return response.json(); });
    };
    PostsService.prototype.fetchPostById = function (id) {
        return this.http.get("/api/posts/" + id).map(function (response) { return response.json(); });
    };
    PostsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], PostsService);
    return PostsService;
    var _a;
}());
//# sourceMappingURL=C:/Users/lp/Desktop/mean-template/src/posts.service.js.map

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__(713),
            styles: [__webpack_require__(703)]
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
//# sourceMappingURL=C:/Users/lp/Desktop/mean-template/src/page-not-found.component.js.map

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PostDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostDetailComponent = (function () {
    function PostDetailComponent(route) {
        this.route = route;
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'] ? params['id'] : '';
        });
    };
    PostDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-post-detail',
            template: __webpack_require__(714),
            styles: [__webpack_require__(704)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], PostDetailComponent);
    return PostDetailComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/lp/Desktop/mean-template/src/post-detail.component.js.map

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_posts_service__ = __webpack_require__(336);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PostsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsComponent = (function () {
    function PostsComponent(route, postsService) {
        this.route = route;
        this.postsService = postsService;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) { return _this.postsType = data.postsType; });
        this.route.params.subscribe(function (params) {
            _this.page = params['page'] ? params['page'] : 1;
        });
        this.postsService.fetchPosts().subscribe(function (posts) { return _this.posts = posts; }, function (error) { return console.log('Error fetching posts'); });
    };
    PostsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-posts',
            template: __webpack_require__(715),
            styles: [__webpack_require__(705)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__api_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__api_posts_service__["a" /* PostsService */]) === 'function' && _b) || Object])
    ], PostsComponent);
    return PostsComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/lp/Desktop/mean-template/src/posts.component.js.map

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = (function () {
    function SearchComponent(route) {
        this.route = route;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.query = params['query'] ? params['query'] : '';
        });
        this.search();
    };
    SearchComponent.prototype.search = function () {
    };
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__(716),
            styles: [__webpack_require__(706)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/lp/Desktop/mean-template/src/search.component.js.map

/***/ },

/***/ 403:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 403;


/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(524);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_40" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/lp/Desktop/mean-template/src/main.js.map

/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* ViewEncapsulation */].None,
            template: __webpack_require__(708),
            styles: [__webpack_require__(698)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/lp/Desktop/mean-template/src/app.component.js.map

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_alert__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_posts_service__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__posts_posts_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_search_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_login_login_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__header_signup_signup_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__posts_post_detail_post_detail_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__page_not_found_page_not_found_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__footer_footer_component__ = __webpack_require__(526);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__posts_posts_component__["a" /* PostsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_12__header_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__header_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_14__posts_post_detail_post_detail_component__["a" /* PostDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_15__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_16__footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_alert__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__["a" /* ModalModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__api_posts_service__["a" /* PostsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/lp/Desktop/mean-template/src/app.module.js.map

/***/ },

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_search_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__posts_posts_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__posts_post_detail_post_detail_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__ = __webpack_require__(337);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routing; });





var routes = [
    { path: '', redirectTo: '/hot/1', pathMatch: 'full' },
    { path: 'hot', redirectTo: '/hot/1' },
    { path: 'trending', redirectTo: '/trending/1' },
    { path: 'fresh', redirectTo: '/fresh/1' },
    { path: 'hot/:page', component: __WEBPACK_IMPORTED_MODULE_2__posts_posts_component__["a" /* PostsComponent */], data: { postsType: 'hot' } },
    { path: 'trending/:page', component: __WEBPACK_IMPORTED_MODULE_2__posts_posts_component__["a" /* PostsComponent */], data: { postsType: 'trending' } },
    { path: 'fresh/:page', component: __WEBPACK_IMPORTED_MODULE_2__posts_posts_component__["a" /* PostsComponent */], data: { postsType: 'fresh' } },
    { path: 'post/:id', component: __WEBPACK_IMPORTED_MODULE_3__posts_post_detail_post_detail_component__["a" /* PostDetailComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_1__search_search_component__["a" /* SearchComponent */] },
    { path: 'search/:query', component: __WEBPACK_IMPORTED_MODULE_1__search_search_component__["a" /* SearchComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */], pathMatch: 'full' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=C:/Users/lp/Desktop/mean-template/src/app.routes.js.map

/***/ },

/***/ 526:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__(709),
            styles: [__webpack_require__(699)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=C:/Users/lp/Desktop/mean-template/src/footer.component.js.map

/***/ },

/***/ 527:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.search = function () {
        this.router.navigate([("search/" + (this.query ? this.query : ''))]);
        this.query = '';
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__(710),
            styles: [__webpack_require__(700)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _a) || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/lp/Desktop/mean-template/src/header.component.js.map

/***/ },

/***/ 528:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.loginModal.hide();
    };
    LoginComponent.prototype.show = function () {
        this.loginModal.show();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('loginModal'), 
        __metadata('design:type', Object)
    ], LoginComponent.prototype, "loginModal", void 0);
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(711),
            styles: [__webpack_require__(701)],
            exportAs: 'child'
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=C:/Users/lp/Desktop/mean-template/src/login.component.js.map

/***/ },

/***/ 529:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function () {
        this.signupModal.hide();
    };
    SignupComponent.prototype.show = function () {
        this.signupModal.show();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('signupModal'), 
        __metadata('design:type', Object)
    ], SignupComponent.prototype, "signupModal", void 0);
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__(712),
            styles: [__webpack_require__(702)],
            exportAs: 'child'
        }), 
        __metadata('design:paramtypes', [])
    ], SignupComponent);
    return SignupComponent;
}());
//# sourceMappingURL=C:/Users/lp/Desktop/mean-template/src/signup.component.js.map

/***/ },

/***/ 530:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/lp/Desktop/mean-template/src/environment.js.map

/***/ },

/***/ 531:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/lp/Desktop/mean-template/src/polyfills.js.map

/***/ },

/***/ 698:
/***/ function(module, exports) {

module.exports = "body {\n  padding-top: 70px; }\n\na {\n  cursor: pointer; }\n\n.center-block {\n  float: none; }\n\n.modal {\n  text-align: center;\n  padding: 0 !important; }\n  .modal:before {\n    content: '';\n    display: inline-block;\n    height: 100%;\n    vertical-align: middle;\n    margin-right: -4px; }\n\n.modal-dialog {\n  display: inline-block;\n  text-align: left;\n  vertical-align: middle; }\n"

/***/ },

/***/ 699:
/***/ function(module, exports) {

module.exports = "footer {\n  width: 100%;\n  padding: 15px 0;\n  margin-top: 50px;\n  background-color: #e8e8e8; }\n"

/***/ },

/***/ 700:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 701:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 702:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 703:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 704:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 705:
/***/ function(module, exports) {

module.exports = ".posts a {\n  color: inherit; }\n"

/***/ },

/***/ 706:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 708:
/***/ function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<!-- <app-footer></app-footer> -->"

/***/ },

/***/ 709:
/***/ function(module, exports) {

module.exports = "<footer>\r\n  <div class=\"container\">\r\n    Copyright &copy; 2017\r\n  </div>\r\n</footer>"

/***/ },

/***/ 710:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\r\n        aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">\r\n        <img alt=\"9GAG\" height=\"20\" src=\"../assets/img/header-logo.png\">\r\n      </a>\r\n    </div>\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/hot']\">Hot</a></li>\r\n        <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/trending']\">Trending</a></li>\r\n        <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/fresh']\">Fresh</a></li>\r\n      </ul>\r\n      <div class=\"nav navbar-right\">\r\n        <form class=\"navbar-form navbar-left\" role=\"search\" (ngSubmit)=\"search()\">\r\n          <div class=\"input-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Type to search...\" [(ngModel)]=\"query\" [ngModelOptions]=\"{standalone: true}\">\r\n            <span class=\"input-group-btn\">\r\n              <button type=\"submit\" class=\"btn btn-default\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\r\n            </span>\r\n          </div>\r\n        </form>\r\n        <button class=\"btn btn-default navbar-btn\" (click)=\"loginModal.show()\">Sign in</button>\r\n        <button class=\"btn btn-primary navbar-btn\" (click)=\"signupModal.show()\">Sign up</button>\r\n      </div>\r\n    </div>\r\n    <!-- /.navbar-collapse -->\r\n  </div>\r\n  <!-- /.container -->\r\n</nav>\r\n<app-login #loginModal=\"child\"></app-login>\r\n<app-signup #signupModal=\"child\"></app-signup>"

/***/ },

/***/ 711:
/***/ function(module, exports) {

module.exports = "<div class=\"modal fade center\" #loginModal=\"bs-modal\" bsModal>\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Sign in</h4>\r\n        <button type=\"button\" class=\"close pull-right\" (click)=\"loginModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form (ngSubmit)=\"login()\">\r\n          <div class=\"form-group\">\r\n            <span class=\"help-block\">Log in with your email address</span>\r\n            <label for=\"email\">Email</label>\r\n            <input id=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Email\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input id=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password\" required>\r\n          </div>\r\n          <div class=\"text-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        New to 9gag? <a (click)=\"loginModal.hide(); signupModal.show()\">Create an account.</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-signup #signupModal=\"child\"></app-signup>"

/***/ },

/***/ 712:
/***/ function(module, exports) {

module.exports = "<div class=\"modal fade center\" #signupModal=\"bs-modal\" bsModal>\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Join 9gag</h4>\r\n        <button type=\"button\" class=\"close pull-right\" (click)=\"signupModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form (ngSubmit)=\"signup()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"username\">Username</label>\r\n            <input id=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Username\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input id=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Email\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"confirmemail\">Confirm email</label>\r\n            <input id=\"confirmemail\" type=\"email\" class=\"form-control\" placeholder=\"Confirm email\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input id=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"confirmpassword\">Confirm password</label>\r\n            <input id=\"confirmpassword\" type=\"password\" class=\"form-control\" placeholder=\"Confirm password\" required>\r\n          </div>\r\n          <div class=\"text-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Sign up</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        By clicking on 'Sign up' above, you confirm that you accept the <a>Terms of use</a>.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ },

/***/ 713:
/***/ function(module, exports) {

module.exports = "<h3>404 - Page not found</h3>\r\n<p>Back to <a [routerLink]=\"['/']\">home</a></p>\r\n"

/***/ },

/***/ 714:
/***/ function(module, exports) {

module.exports = "<p>\r\n  post-detail works!\r\n</p>\r\n"

/***/ },

/***/ 715:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"posts\">\r\n  <div class=\"posts\" *ngFor=\"let post of posts\">\r\n    <a [routerLink]=\"['/post', post.id]\" target=\"_blank\">\r\n      <h4>{{post.title}}</h4>\r\n    </a>\r\n    <hr>\r\n  </div>\r\n  <nav>\r\n    <ul class=\"pager\">\r\n      <li [ngClass]=\"{disabled: page == 1}\">\r\n        <a [routerLink]=\"['/' + postsType, page - 1]\"><span aria-hidden=\"true\">&larr;</span>&nbsp;Previous</a>\r\n      </li>\r\n      <li>\r\n        <a [routerLink]=\"['/' + postsType, page + 1]\">Next&nbsp;<span aria-hidden=\"true\">&rarr;</span></a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</div>"

/***/ },

/***/ 716:
/***/ function(module, exports) {

module.exports = "<form class=\"form-inline\" role=\"search\" (ngSubmit)=\"search()\">\r\n  <div class=\"form-group\">\r\n    <div class=\"input-group\">\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Type to search...\" [(ngModel)]=\"query\" [ngModelOptions]=\"{standalone: true}\">\r\n      <span class=\"input-group-btn\">\r\n        <button type=\"submit\" class=\"btn btn-default\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\r\n      </span>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ },

/***/ 740:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(404);


/***/ }

},[740]);
//# sourceMappingURL=main.bundle.map