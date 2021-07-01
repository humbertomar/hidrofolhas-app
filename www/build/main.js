webpackJsonp([4],{

/***/ 193:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 193;

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/forgot-password/forgot-password.module": [
		649,
		1
	],
	"../pages/home/home.module": [
		648,
		3
	],
	"../pages/login/login.module": [
		650,
		0
	],
	"../pages/registration/registration.module": [
		651,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 236;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'https://hidrofolhas.com.br/ws/controllers/_WS_/';
//let apiUrl = 'https://hidrofolhas.com.br/ws/controllers/WS/';
//let apiUrl = 'http://localhost/douglas/hidrofolhas.com.br/ws/controllers/_WS_/';
var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        //console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(apiUrl + type, JSON.stringify(credentials)).subscribe(function (res) {
                resolve(JSON.parse(JSON.stringify(res.json())));
                //console.log(JSON.stringify(res.json()));
            }, function (err) {
                reject(err);
                console.log(err);
            });
        });
    };
    AuthServiceProvider.prototype.getData = function (type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(apiUrl + type).subscribe(function (res) {
                resolve(JSON.parse(JSON.stringify(res.json())));
                //console.log(JSON.stringify(res.json()));
            }, function (err) {
                reject(err);
                console.log(err);
            });
        });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(94);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirebaseServiceProvider = /** @class */ (function () {
    function FirebaseServiceProvider(db) {
        this.db = db;
        //console.log('Hello FirebaseServiceProvider Provider');
    }
    FirebaseServiceProvider.prototype.getAll = function (path) {
        return this.db.list(path, function (ref) { return ref.orderByKey(); })
            .snapshotChanges()
            .map(function (data) {
            return data.map(function (d) { return (__assign({ key: d.payload.key }, d.payload.val())); });
        });
    };
    FirebaseServiceProvider.prototype.getItems = function (path) {
        return this.db.list(path)
            //return this.db.list(path, ref => ref.orderByChild(item1).equalTo(item2))
            .snapshotChanges()
            .map(function (data) {
            return data.map(function (d) { return (__assign({ key: d.payload.key }, d.payload.val())); });
        });
    };
    FirebaseServiceProvider.prototype.getItem = function (path, item1, item2) {
        //return this.db.list("/users/" + localStorage.getItem("uid") + "/cep")
        return this.db.list(path, function (ref) { return ref.orderByChild(item1).equalTo(item2); })
            .snapshotChanges()
            .map(function (data) {
            return data.map(function (d) { return (__assign({ key: d.payload.key }, d.payload.val())); });
        });
    };
    FirebaseServiceProvider.prototype.get = function (path, key) {
        return this.db.object(path + key).snapshotChanges()
            .map(function (d) {
            return __assign({ key: d.key }, d.payload.val());
        });
    };
    FirebaseServiceProvider.prototype.save = function (item, db_fb) {
        this.db.list(db_fb)
            .push(item)
            .then(function (r) { return console.log(r); });
    };
    FirebaseServiceProvider.prototype.update = function (item, db_fb) {
        //console.log(item);
        //return this.db.list('courses').update(course.key, course);
        return this.db.list(db_fb).update(item.token, item);
    };
    FirebaseServiceProvider.prototype.remove = function (key, db_fb) {
        //console.log(item);
        //return this.db.list('courses').remove(course.key);
        return this.db.list(db_fb).remove(key);
    };
    FirebaseServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], FirebaseServiceProvider);
    return FirebaseServiceProvider;
}());

//# sourceMappingURL=firebase-service.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Common; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Common = /** @class */ (function () {
    function Common(loadingCtrl, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        //console.log('Hello Common Provider');
    }
    Common.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({ content: "Aguarde ..." });
        this.loader.present();
    };
    Common.prototype.presentLoadingMsg = function (mensagem) {
        this.loader = this.loadingCtrl.create({ content: mensagem });
        this.loader.present();
    };
    Common.prototype.closeLoading = function () {
        this.loader.dismiss();
    };
    Common.prototype.presentToast = function (mensagem, duracao, posicao) {
        var toast = this.toastCtrl.create({
            message: mensagem,
            duration: duracao,
            position: posicao
        });
        toast.onDidDismiss(function () {
            //console.log('Dismissed toast');
        });
        toast.present();
    };
    Common = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], Common);
    return Common;
}());

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(557);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_auth__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_fire_database__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase_storage__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_date_picker__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_service_auth_service__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__firebase_config__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_social_sharing__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_firebase_service_firebase_service__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_common__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_brmasker_ionic_3__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ion2_calendar__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_spinner_spinner__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_map_map__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_native_geocoder__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_diagnostic__ = __webpack_require__(647);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























/*
import { CartService } from "../pages/cart.service";

import { InsertCepPage } from "../pages/insert-cep/insert-cep";
import { CheckoutPage } from "../pages/checkout/checkout";
import { AddEnderecoPage } from "../pages/add-endereco/add-endereco";
import { GoogleMapsGeolocalizacaoPage } from "../pages/google-maps-geolocalizacao/google-maps-geolocalizacao";
*/
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            //declarations: [MyApp, InsertCepPage, CheckoutPage, AddEnderecoPage, GoogleMapsGeolocalizacaoPage],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    platforms: {
                        ios: {
                            backButtonText: ''
                        },
                        android: {
                            backButtonText: ''
                        }
                    },
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: true
                }, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registration/registration.module#RegistrationPageModule', name: 'RegistrationPage', segment: 'registration', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_14__firebase_config__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_7__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_18_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_19_ion2_calendar__["CalendarModule"]
                //StatusBar
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_18_brmasker_ionic_3__["a" /* BrMaskerModule */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicApp"]],
            //entryComponents: [MyApp, InsertCepPage, CheckoutPage, AddEnderecoPage, GoogleMapsGeolocalizacaoPage],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__providers_common__["a" /* Common */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicErrorHandler"] },
                //CartService,
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_13__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_18_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_21__providers_spinner_spinner__["a" /* SpinnerProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_map_map__["a" /* MapProvider */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_diagnostic__["a" /* Diagnostic */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_database__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { Keyboard } from '@ionic-native/keyboard';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, af, db, socialSharing, events) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.af = af;
        this.db = db;
        this.socialSharing = socialSharing;
        this.events = events;
        this.Cart = [];
        this.imageUrl = "assets/img/profile-hidrofolhas.png";
        //rootPage: string = "LoginPage";
        this.rootPage = "HomePage";
        platform.ready().then(function () {
            /*Keyboard.onKeyboardShow().subscribe(() => {
              document.body.classList.add('keyboard-is-open');
              console.log("Show");
            });
            Keyboard.onKeyboardHide().subscribe(() => {
              document.body.classList.remove('keyboard-is-open');
              console.log("Hidden");
            });*/
            // Ok, então a plataforma está pronta e nossos plugins estão disponíveis.
            // Aqui você pode fazer qualquer coisa nativa de nível superior que possa precisar.
            statusBar.overlaysWebView(false);
            statusBar.styleDefault();
            //splashScreen.hide();
        });
        setTimeout(function () {
            _this.splashScreen.hide();
        }, 1000);
        this.initializeApp();
    }
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        this.uid = localStorage.getItem("uid");
        if (this.uid != null) {
            this.db
                .object("/users/" + this.uid)
                .valueChanges()
                .subscribe(function (res) {
                if (res != null) {
                    _this.name = res.name;
                    _this.imageUrl =
                        res.image != "" && res.image != null
                            ? res.image
                            : "assets/img/profile.jpg";
                }
                else {
                    _this.name = 'USER';
                    _this.imageUrl = 'assets/img/profile.jpg';
                }
            });
        }
        //this.getNewsCount();
        //this.getOfferCount();
        //this.listenEvents();
    };
    MyApp.prototype.getNewsCount = function () {
        var _this = this;
        this.db
            .list("/news")
            .valueChanges()
            .subscribe(function (res) {
            _this.noOfItemsInNews = res.length;
        });
    };
    MyApp.prototype.getOfferCount = function () {
        var _this = this;
        this.db
            .list("/menuItems", function (ref) { return ref.orderByChild("offer").equalTo(true); })
            .valueChanges()
            .subscribe(function (queriedItems) {
            _this.noOfItemsInOffer = queriedItems.length;
        });
    };
    MyApp.prototype.listenEvents = function () {
        var _this = this;
        this.events.subscribe("imageUrl", function (response) {
            _this.imageUrl =
                response.image != "" && response.image != null
                    ? response.image
                    : "assets/img/profile.jpg";
            _this.name = response.name;
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleLightContent();
            _this.splashScreen.hide();
        });
        /*usar no futuro
        if (this.platform.ready()) {
          this.platform.ready().then(res => {
            if (res == "cordova") {
              
            }
          });
        }
        */
    };
    MyApp.prototype.home = function () {
        this.nav.setRoot("HomePage");
    };
    MyApp.prototype.yourOrders = function () {
        this.nav.setRoot("OrderListPage");
    };
    MyApp.prototype.ordersSchedule = function () {
        this.nav.setRoot("OrdersSchedulePage");
    };
    MyApp.prototype.addToCart = function () {
        //this.nav.setRoot("CartPage");
        this.nav.push("CartPage");
    };
    MyApp.prototype.catagory = function () {
        this.nav.setRoot("CategoryPage");
    };
    MyApp.prototype.favourite = function () {
        this.nav.setRoot("FavouritePage");
    };
    MyApp.prototype.offer = function () {
        this.nav.setRoot("OfferPage");
    };
    MyApp.prototype.news = function () {
        this.nav.setRoot("NewsPage");
    };
    MyApp.prototype.contact = function () {
        this.nav.setRoot("ContactPage");
    };
    MyApp.prototype.aboutUs = function () {
        this.nav.setRoot("AboutUsPage");
    };
    MyApp.prototype.settings = function () {
        this.nav.setRoot("Settings");
    };
    MyApp.prototype.meusEnderecos = function () {
        this.nav.setRoot("MeusEnderecosPage");
    };
    MyApp.prototype.invite = function () {
        this.socialSharing.share("share Restaurant App with friends to get credits", null, null, "https://ionicfirebaseapp.com/#/");
    };
    MyApp.prototype.chat = function () {
        this.nav.setRoot("ChatPage");
    };
    MyApp.prototype.tableBooking = function () {
        this.nav.setRoot("TableBookingPage");
    };
    MyApp.prototype.bookingHistory = function () {
        this.nav.setRoot("BookingHistoryPage");
    };
    MyApp.prototype.login = function () {
        this.nav.setRoot("LoginPage");
    };
    MyApp.prototype.logout = function () {
        this.af.auth.signOut();
        //localStorage.clear();
        localStorage.removeItem("uid");
        localStorage.removeItem("email");
        localStorage.removeItem('playerId');
        localStorage.removeItem("cep");
        localStorage.removeItem("frete");
        localStorage.removeItem("keyAddress");
        localStorage.removeItem("key");
        this.imageUrl = "assets/img/profile.jpg";
        this.nav.setRoot("HomePage");
    };
    MyApp.prototype.isLoggedin = function () {
        return localStorage.getItem("uid") != null;
    };
    MyApp.prototype.isCart = function () {
        this.Cart = JSON.parse(localStorage.getItem("Cart"));
        this.noOfItemsInCart = this.Cart != null ? this.Cart.length : null;
        return true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\betim\Documents\Sistemas\Hidrofolhas\App\src\app\app.html"*/'<ion-menu persistent="true" class="menu" [content]="content" *ngIf="this.platform.dir()===\'ltr\'" side="left">\n  \n  <ion-content class="sidebar-menu">\n    <ion-row class="img-name-row">\n      <ion-col>\n        <img class="user-img" src="{{imageUrl}}">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col *ngIf="isLoggedin()">\n        <p class="user-name">{{name | uppercase}}</p>\n      </ion-col>\n    </ion-row>\n\n    <button menuClose class="menu-item" ion-item (click)="home()">\n      <ion-icon name="custom-home" item-left></ion-icon>\n      Home\n    </button>\n    <button menuClose class="menu-item" ion-item (click)="catagory()">\n      <ion-icon name="custom-list" item-left></ion-icon>\n      Categorias\n    </button>\n    <!--<button *ngIf="isCart()" menuClose class="menu-item" ion-item (click)="offer()">\n      <ion-icon name="pricetag" item-left></ion-icon>\n      {{\'Ofertas\'| translate}}\n      <ion-badge class="menu-badge">{{noOfItemsInOffer}}</ion-badge>\n    </button>-->\n    <button menuClose class="menu-item" ion-item (click)="addToCart()">\n      <ion-icon name="custom-bag" item-left></ion-icon>\n      Sacola\n      <ion-badge class="menu-badge">{{noOfItemsInCart}}</ion-badge>\n    </button>\n    <button *ngIf="isLoggedin()" menuClose class="menu-item" ion-item (click)="yourOrders()">\n      <ion-icon name="custom-meus-pedidos" item-left></ion-icon>\n      Meus Pedidos\n    </button>\n    <button *ngIf="isLoggedin()" menuClose class="menu-item" ion-item (click)="ordersSchedule()">\n      <ion-icon name="custom-meus-pedidos-agendados" item-left></ion-icon>\n      Meus Pedidos Agendados\n    </button>\n\n    <button *ngIf="isLoggedin()" menuClose class="menu-item" ion-item (click)="settings()">\n      <ion-icon name="custom-meus-dados" item-left></ion-icon>\n      Meus Dados\n    </button>\n\n    <button *ngIf="isLoggedin()" menuClose class="menu-item" ion-item (click)="meusEnderecos()">\n      <ion-icon name="custom-meus-enderecos" item-left></ion-icon>\n      Meus Endereços\n    </button>\n\n    <button menuClose class="menu-item" ion-item (click)="aboutUs()">\n      <ion-icon name="custom-sobre-nos" item-left></ion-icon>\n      Sobre Nós\n    </button>\n\n    <!--<button menuClose class="menu-item" ion-item (click)="contact()">\n      <ion-icon name="call" item-left></ion-icon>\n      Contato\n    </button>-->\n\n    <button *ngIf="!isLoggedin()" menuClose class="menu-item" ion-item (click)="login()">\n      <ion-icon name="custom-entrar" item-left></ion-icon>\n      Entrar\n    </button>\n    <button *ngIf="isLoggedin()" ion-item (click)="logout()" menuClose class="menu-item">\n      <ion-icon name="custom-sair" item-left></ion-icon>\n      Sair\n    </button>\n  </ion-content>\n\n  <ion-footer>\n    <p style="font-size: 12px; text-align: center;" ion-text color="light">26.665.619/0001-09<br>\n      Hidrofolhas Comércio de Verduras e Legumes LTDA</p>\n  </ion-footer>\n\n</ion-menu>\n\n<ion-menu persistent="true" class="menu" [content]="content" *ngIf="this.platform.dir()===\'rtl\'" side="right">\n  <ion-content class="sidebar-menu">\n    <ion-row class="img-name-row">\n      <ion-col>\n        <img class="user-img" src="{{imageUrl}}">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col *ngIf="isLoggedin()">\n        <p class="user-name">{{name}}</p>\n      </ion-col>\n    </ion-row>\n\n    <button menuClose class="menu-item" ion-item (click)="home()">\n      <ion-icon name="home" item-left></ion-icon>\n     Home\n    </button>\n    <button menuClose class="menu-item" ion-item (click)="catagory()">\n      <ion-icon name="apps" item-left></ion-icon>\n      Categorias\n    </button>\n    <!--<button *ngIf="isCart()" menuClose class="menu-item" ion-item (click)="offer()">\n      <ion-icon name="pricetag" item-left></ion-icon>\n      {{\'Ofertas\'| translate}}\n      <ion-badge class="menu-badge">{{noOfItemsInOffer}}</ion-badge>\n    </button>-->\n    <button menuClose class="menu-item" ion-item (click)="addToCart()">\n      <ion-icon name="cart" item-left></ion-icon>\n      Meu Carinho\n      <ion-badge class="menu-badge">{{noOfItemsInCart}}</ion-badge>\n    </button>\n    <button *ngIf="isLoggedin()" menuClose class="menu-item" ion-item (click)="yourOrders()">\n      <ion-icon name="timer" item-left></ion-icon>\n      Meus Pedidos\n    </button>\n    <button *ngIf="isLoggedin()" menuClose class="menu-item" ion-item (click)="ordersSchedule()">\n      <ion-icon name="timer" item-left></ion-icon>\n      Meus Pedidos Agendados\n    </button>\n\n    <button *ngIf="isLoggedin()" menuClose class="menu-item" ion-item (click)="settings()">\n      <ion-icon name="settings" item-left></ion-icon>\n      Configurações\n    </button>\n\n    <button menuClose class="menu-item" ion-item (click)="aboutUs()">\n      <ion-icon name="contacts" item-left></ion-icon>\n      Sobre Nós\n    </button>\n\n    <!--<button menuClose class="menu-item" ion-item (click)="contact()">\n      <ion-icon name="call" item-left></ion-icon>\n      Contato\n    </button>-->\n\n    <button *ngIf="!isLoggedin()" menuClose class="menu-item" ion-item (click)="login()">\n      <ion-icon name="log-in" item-left></ion-icon>\n      Entrar\n    </button>\n    <button *ngIf="isLoggedin()" ion-item (click)="logout()" menuClose class="menu-item">\n      <ion-icon name="log-out" item-left></ion-icon>\n      Sair\n    </button>\n  \n  </ion-content>\n\n  <!--<ion-footer>\n    <p style="font-size: 12px; text-align: center;" ion-text color="light">26.665.619/0001-09<br>\n      Hidrofolhas Comércio de Verduras e Legumes LTDA</p>\n  </ion-footer>-->\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\betim\Documents\Sistemas\Hidrofolhas\App\src\app\app.html"*/,
            selector: "MyApp",
            providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_5__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
//config default
var firebaseConfig = {
    apiKey: "AIzaSyAvoEI5dfc57-9N3HMC-JvVhnlnotPbXug",
    authDomain: "ionic-3-restaurantapp-32a62.firebaseapp.com",
    databaseURL: "https://ionic-3-restaurantapp-32a62.firebaseio.com",
    projectId: "ionic-3-restaurantapp-32a62",
    storageBucket: "ionic-3-restaurantapp-32a62.appspot.com",
    messagingSenderId: "474869075253"
};
//# sourceMappingURL=firebase.config.js.map

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 290,
	"./af.js": 290,
	"./ar": 291,
	"./ar-dz": 292,
	"./ar-dz.js": 292,
	"./ar-kw": 293,
	"./ar-kw.js": 293,
	"./ar-ly": 294,
	"./ar-ly.js": 294,
	"./ar-ma": 295,
	"./ar-ma.js": 295,
	"./ar-sa": 296,
	"./ar-sa.js": 296,
	"./ar-tn": 297,
	"./ar-tn.js": 297,
	"./ar.js": 291,
	"./az": 298,
	"./az.js": 298,
	"./be": 299,
	"./be.js": 299,
	"./bg": 300,
	"./bg.js": 300,
	"./bm": 301,
	"./bm.js": 301,
	"./bn": 302,
	"./bn.js": 302,
	"./bo": 303,
	"./bo.js": 303,
	"./br": 304,
	"./br.js": 304,
	"./bs": 305,
	"./bs.js": 305,
	"./ca": 306,
	"./ca.js": 306,
	"./cs": 307,
	"./cs.js": 307,
	"./cv": 308,
	"./cv.js": 308,
	"./cy": 309,
	"./cy.js": 309,
	"./da": 310,
	"./da.js": 310,
	"./de": 311,
	"./de-at": 312,
	"./de-at.js": 312,
	"./de-ch": 313,
	"./de-ch.js": 313,
	"./de.js": 311,
	"./dv": 314,
	"./dv.js": 314,
	"./el": 315,
	"./el.js": 315,
	"./en-au": 316,
	"./en-au.js": 316,
	"./en-ca": 317,
	"./en-ca.js": 317,
	"./en-gb": 318,
	"./en-gb.js": 318,
	"./en-ie": 319,
	"./en-ie.js": 319,
	"./en-il": 320,
	"./en-il.js": 320,
	"./en-in": 321,
	"./en-in.js": 321,
	"./en-nz": 322,
	"./en-nz.js": 322,
	"./en-sg": 323,
	"./en-sg.js": 323,
	"./eo": 324,
	"./eo.js": 324,
	"./es": 325,
	"./es-do": 326,
	"./es-do.js": 326,
	"./es-us": 327,
	"./es-us.js": 327,
	"./es.js": 325,
	"./et": 328,
	"./et.js": 328,
	"./eu": 329,
	"./eu.js": 329,
	"./fa": 330,
	"./fa.js": 330,
	"./fi": 331,
	"./fi.js": 331,
	"./fil": 332,
	"./fil.js": 332,
	"./fo": 333,
	"./fo.js": 333,
	"./fr": 334,
	"./fr-ca": 335,
	"./fr-ca.js": 335,
	"./fr-ch": 336,
	"./fr-ch.js": 336,
	"./fr.js": 334,
	"./fy": 337,
	"./fy.js": 337,
	"./ga": 338,
	"./ga.js": 338,
	"./gd": 339,
	"./gd.js": 339,
	"./gl": 340,
	"./gl.js": 340,
	"./gom-deva": 341,
	"./gom-deva.js": 341,
	"./gom-latn": 342,
	"./gom-latn.js": 342,
	"./gu": 343,
	"./gu.js": 343,
	"./he": 344,
	"./he.js": 344,
	"./hi": 345,
	"./hi.js": 345,
	"./hr": 346,
	"./hr.js": 346,
	"./hu": 347,
	"./hu.js": 347,
	"./hy-am": 348,
	"./hy-am.js": 348,
	"./id": 349,
	"./id.js": 349,
	"./is": 350,
	"./is.js": 350,
	"./it": 351,
	"./it-ch": 352,
	"./it-ch.js": 352,
	"./it.js": 351,
	"./ja": 353,
	"./ja.js": 353,
	"./jv": 354,
	"./jv.js": 354,
	"./ka": 355,
	"./ka.js": 355,
	"./kk": 356,
	"./kk.js": 356,
	"./km": 357,
	"./km.js": 357,
	"./kn": 358,
	"./kn.js": 358,
	"./ko": 359,
	"./ko.js": 359,
	"./ku": 360,
	"./ku.js": 360,
	"./ky": 361,
	"./ky.js": 361,
	"./lb": 362,
	"./lb.js": 362,
	"./lo": 363,
	"./lo.js": 363,
	"./lt": 364,
	"./lt.js": 364,
	"./lv": 365,
	"./lv.js": 365,
	"./me": 366,
	"./me.js": 366,
	"./mi": 367,
	"./mi.js": 367,
	"./mk": 368,
	"./mk.js": 368,
	"./ml": 369,
	"./ml.js": 369,
	"./mn": 370,
	"./mn.js": 370,
	"./mr": 371,
	"./mr.js": 371,
	"./ms": 372,
	"./ms-my": 373,
	"./ms-my.js": 373,
	"./ms.js": 372,
	"./mt": 374,
	"./mt.js": 374,
	"./my": 375,
	"./my.js": 375,
	"./nb": 376,
	"./nb.js": 376,
	"./ne": 377,
	"./ne.js": 377,
	"./nl": 378,
	"./nl-be": 379,
	"./nl-be.js": 379,
	"./nl.js": 378,
	"./nn": 380,
	"./nn.js": 380,
	"./oc-lnc": 381,
	"./oc-lnc.js": 381,
	"./pa-in": 382,
	"./pa-in.js": 382,
	"./pl": 383,
	"./pl.js": 383,
	"./pt": 384,
	"./pt-br": 385,
	"./pt-br.js": 385,
	"./pt.js": 384,
	"./ro": 386,
	"./ro.js": 386,
	"./ru": 387,
	"./ru.js": 387,
	"./sd": 388,
	"./sd.js": 388,
	"./se": 389,
	"./se.js": 389,
	"./si": 390,
	"./si.js": 390,
	"./sk": 391,
	"./sk.js": 391,
	"./sl": 392,
	"./sl.js": 392,
	"./sq": 393,
	"./sq.js": 393,
	"./sr": 394,
	"./sr-cyrl": 395,
	"./sr-cyrl.js": 395,
	"./sr.js": 394,
	"./ss": 396,
	"./ss.js": 396,
	"./sv": 397,
	"./sv.js": 397,
	"./sw": 398,
	"./sw.js": 398,
	"./ta": 399,
	"./ta.js": 399,
	"./te": 400,
	"./te.js": 400,
	"./tet": 401,
	"./tet.js": 401,
	"./tg": 402,
	"./tg.js": 402,
	"./th": 403,
	"./th.js": 403,
	"./tk": 404,
	"./tk.js": 404,
	"./tl-ph": 405,
	"./tl-ph.js": 405,
	"./tlh": 406,
	"./tlh.js": 406,
	"./tr": 407,
	"./tr.js": 407,
	"./tzl": 408,
	"./tzl.js": 408,
	"./tzm": 409,
	"./tzm-latn": 410,
	"./tzm-latn.js": 410,
	"./tzm.js": 409,
	"./ug-cn": 411,
	"./ug-cn.js": 411,
	"./uk": 412,
	"./uk.js": 412,
	"./ur": 413,
	"./ur.js": 413,
	"./uz": 414,
	"./uz-latn": 415,
	"./uz-latn.js": 415,
	"./uz.js": 414,
	"./vi": 416,
	"./vi.js": 416,
	"./x-pseudo": 417,
	"./x-pseudo.js": 417,
	"./yo": 418,
	"./yo.js": 418,
	"./zh-cn": 419,
	"./zh-cn.js": 419,
	"./zh-hk": 420,
	"./zh-hk.js": 420,
	"./zh-mo": 421,
	"./zh-mo.js": 421,
	"./zh-tw": 422,
	"./zh-tw.js": 422
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 639;

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the SpinnerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var SpinnerProvider = /** @class */ (function () {
    function SpinnerProvider(http, loadingCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        console.log('Hello SpinnerProvider Provider');
    }
    SpinnerProvider.prototype.load = function () {
        this.loader = this.loadingCtrl.create({
            content: ''
        });
        this.loader.present();
    };
    SpinnerProvider.prototype.dismiss = function () {
        if (this.loader) {
            this.loader.dismiss();
            this.loader = null;
        }
    };
    SpinnerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["LoadingController"]])
    ], SpinnerProvider);
    return SpinnerProvider;
}());

//# sourceMappingURL=spinner.js.map

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Http, Headers, RequestOptions } from '@angular/http';


/*
  Generated class for the MapProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var MapProvider = /** @class */ (function () {
    function MapProvider(http) {
        this.http = http;
        this.contentHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.google_api_key = 'AIzaSyAjayuD_XLSuXptvzHPfsAt2OBEFDC4lOE';
        console.log('Hello MapProvider Provider');
    }
    MapProvider.prototype.getAddress = function (params) {
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?key=' + this.google_api_key + '&latlng=' + params.lat + ',' + params.long;
        return this.GET(url);
    };
    MapProvider.prototype.getStreetAddress = function (params) {
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?key=' + this.google_api_key + '&latlng=' + params.lat + ',' + params.long + '&result_type=street_address';
        return this.GET(url);
    };
    MapProvider.prototype.GET = function (url) {
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    MapProvider.prototype.POST = function (url, params) {
        // let options = new RequestOptions({
        //   headers: this.contentHeader
        // });
        // return this.http.post(url, params, options).map(res => res.json());
    };
    MapProvider.prototype.DEL = function (url) {
        // let options = new RequestOptions({
        //   headers: this.contentHeader
        // });
        // return this.http.delete(url, options).map(res => res.json());
    };
    MapProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], MapProvider);
    return MapProvider;
}());

//# sourceMappingURL=map.js.map

/***/ })

},[431]);
//# sourceMappingURL=main.js.map