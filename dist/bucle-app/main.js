(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Lhg":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function HeaderComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "My campaigns");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.router.events.subscribe(e => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
                this.isCampaigns = e.url === "/campaigns";
                console.log('e.url:', e.url);
            }
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 8, vars: 1, consts: [[1, "[", "gradient-border", "]"], [1, "[", "max-w-screen-xl", "mx-auto", "pb-5", "relative", "]"], [1, "[", "max-w-screen-lg", "mx-auto", "mt-5", "]"], [1, "[", "heading__main", "]", "[", "pt-10", "pb-1", "]", "[", "text-center", "]"], ["class", "[ back-link ] [ text-xl font-bold font-heading ] [ hover:underline hover:bg-primary-light ]", "routerLink", "campaigns", 4, "ngIf"], ["routerLink", "my-account", 1, "[", "heading__secondary", "]", "[", "absolute", "top-5", "right-5", "]", "[", "underline", "]", "[", "hover:bg-primary-light", "]"], ["routerLink", "campaigns", 1, "[", "back-link", "]", "[", "text-xl", "font-bold", "font-heading", "]", "[", "hover:underline", "hover:bg-primary-light", "]"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Bucle App");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HeaderComponent_a_5_Template, 2, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "My Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isCampaigns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkWithHref"]], styles: [".back-link[_ngcontent-%COMP%]::before{\n  content: '\\2190';\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrLWxpbms6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6ICdcXDIxOTAnO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Usuario02\Desktop\ux-tooling-app\ux-tooling-app\src\main.ts */"zUnb");


/***/ }),

/***/ "4oDb":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/components/create-campaign/create-campaign.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CreateCampaignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCampaignComponent", function() { return CreateCampaignComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_store_workspace_store_workspace_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/store/workspace-store/workspace.actions */ "YQew");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CreateCampaignComponent_div_2_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateCampaignComponent_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CreateCampaignComponent_div_2_div_9_div_1_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.newCampaignForm.get("name").errors == null ? null : ctx_r1.newCampaignForm.get("name").errors.required);
} }
function CreateCampaignComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateCampaignComponent_div_2_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.formOpened = !ctx_r3.formOpened; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreateCampaignComponent_div_2_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Your new campaign");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CreateCampaignComponent_div_2_div_9_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Create campaign");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.newCampaignForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.newCampaignForm.get("name").touched);
} }
class CreateCampaignComponent {
    constructor(fb, store) {
        this.fb = fb;
        this.store = store;
        this.formOpened = false;
        this.createForm();
    }
    ngOnInit() {
    }
    createForm() {
        this.newCampaignForm = this.fb.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
    }
    onSubmit() {
        if (!this.newCampaignForm.valid)
            return;
        const nameObj = this.newCampaignForm.value;
        this.store.dispatch(Object(src_app_shared_store_workspace_store_workspace_actions__WEBPACK_IMPORTED_MODULE_1__["createCampaign"])({ name: nameObj }));
        this.formOpened = false;
    }
}
CreateCampaignComponent.ɵfac = function CreateCampaignComponent_Factory(t) { return new (t || CreateCampaignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
CreateCampaignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateCampaignComponent, selectors: [["app-create-campaign"]], decls: 3, vars: 3, consts: [[1, "[", "-mt-8", "]", "[", "float-right", "]", 3, "ngClass", "click"], ["class", "[ overlay__white z-10 ]", 4, "ngIf"], [1, "[", "overlay__white", "z-10", "]"], [1, "[", "p-14", "mt-8", "mb-48", "max-w-screen-md", "]", "[", "bg-background", "]", "[", "rounded-lg", "shadow-2xl", "]"], [1, "[", "formOpened", "]", "[", "-mt-8", "]", "[", "float-right", "]", 3, "click"], [3, "formGroup", "ngSubmit"], [1, "[", "my-4", "]"], ["for", "newCampaign", 1, "[", "heading__secondary", "]"], ["type", "text", "placeholder", "What will be the name of your campaign?", "required", "", "name", "name", "formControlName", "name", "id", "newCampaign", 1, "[", "input__primary", "my-4", "]"], [4, "ngIf"], [1, "[", "flex", "justify-end", "]"], ["type", "submit", 1, "[", "btn__primary-color", "]"]], template: function CreateCampaignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateCampaignComponent_Template_button_click_0_listener() { return ctx.formOpened = !ctx.formOpened; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CreateCampaignComponent_div_2_Template, 13, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.formOpened ? "" : "btn__primary-color");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.formOpened ? "\u00D7" : "New campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.formOpened);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtY2FtcGFpZ24uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "7UCR":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "Go8p");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "Yu5h");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class UserModule {
}
UserModule.ɵfac = function UserModule_Factory(t) { return new (t || UserModule)(); };
UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: UserModule });
UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]] }); })();


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

/***/ "D+TJ":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/services/dashboard.service.ts ***!
  \*********************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_user_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/user-store.service */ "eHRQ");




class DashboardService {
    constructor(http, userStore) {
        this.http = http;
        this.userStore = userStore;
        this.API_ENDPOINT = "/api"; //add endpoint here when api is deployed
    }
    getWorkspace() {
        const workspace_id = this.userStore.workspace;
        const token = this.userStore.token;
        const workspaceEndpoint = `${this.API_ENDPOINT}/workspace/${workspace_id}`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Authorization': `Bearer ${token}` });
        return this.http.get(workspaceEndpoint, { headers });
    }
    create(name) {
        const workspace_id = this.userStore.workspace;
        const token = this.userStore.token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Authorization': `Bearer ${token}` });
        const newCampaignEndpoint = `${this.API_ENDPOINT}/workspace/new-campaign/${workspace_id}`;
        return this.http.post(newCampaignEndpoint, name, { headers });
    }
    getCampaigns(campaign_ids) {
        const campaignsEndpoint = `${this.API_ENDPOINT}/campaigns/find`;
        const token = this.userStore.token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Authorization': `Bearer ${token}` });
        return this.http.post(campaignsEndpoint, campaign_ids, { headers });
    }
}
DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_shared_services_user_store_service__WEBPACK_IMPORTED_MODULE_2__["UserStoreService"])); };
DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Go8p":
/*!**********************************************************!*\
  !*** ./src/app/user/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_store_user_store_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/store/user-store/user.actions */ "q5qN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "KUeB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_shared_services_user_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/user-store.service */ "eHRQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function LoginComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Invalid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_div_10_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LoginComponent_div_10_div_2_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.get("email").errors == null ? null : ctx_r0.loginForm.get("email").errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.get("email").errors == null ? null : ctx_r0.loginForm.get("email").errors.required);
} }
function LoginComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_div_13_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.loginForm.get("password").errors == null ? null : ctx_r1.loginForm.get("password").errors.required);
} }
class LoginComponent {
    constructor(fb, userService, router, store, userStoreService) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.store = store;
        this.userStoreService = userStoreService;
        this.message = "";
        this.createForm();
    }
    ngOnInit() {
        this.store.select('usersApp').subscribe(res => {
            /* if(res?.userIsLoggedIn) */ this.navigateToCampaigns();
            if (res === null || res === void 0 ? void 0 : res.error)
                this.message = "Invalid credentials";
        });
    }
    navigateToCampaigns() {
        this.router.navigate(['campaigns']);
    }
    createForm() {
        this.loginForm = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]],
        });
    }
    onSubmit() {
        var _a;
        const passwordHasValidLength = ((_a = this.loginForm.get('password').errors) === null || _a === void 0 ? void 0 : _a.minlength) === undefined;
        //Show invalid password length message only if user is signing up
        if (!passwordHasValidLength) {
            this.message = this.action === 'register' ? "Password is too short" : "Invalid Credentials";
            return;
        }
        this.message = "";
        if (this.action === 'login')
            this.login();
        if (this.action === 'register')
            this.register();
    }
    login() {
        this.message = "";
        const userDetails = this.loginForm.value;
        this.store.dispatch(Object(_shared_store_user_store_user_actions__WEBPACK_IMPORTED_MODULE_1__["login"])({ userDetails: userDetails }));
    }
    register() {
        const register = this.loginForm.value;
        this.userService.register(register).subscribe((res) => {
            this.message = "Successfully registered";
        }, (err) => {
            this.message = err.error.error || "Registration error";
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_user_store_service__WEBPACK_IMPORTED_MODULE_6__["UserStoreService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 4, consts: [[1, "[", "section__full-screen", "]", "[", "flex", "align-middle", "]"], ["aria-label", "login or register", 1, "[", "section__central-overlayed", "]", "[", "max-w-screen-sm", "flex-grow", "bg-background", "]"], [1, "[", "heading__main", "]", "[", "text-center", "]"], [1, "[", "text-center", "][", "italic", "]"], [3, "formGroup", "ngSubmit"], [1, "[", "my-4", "]"], ["type", "text", "placeholder", "email", "required", "", "name", "email", "formControlName", "email", 1, "[", "input__primary", "]"], [4, "ngIf"], ["type", "password", "placeholder", "Password", "required", "", "name", "password", "formControlName", "password", 1, "[", "input__primary", "]"], [1, "[", "mb-9", "]"], [1, "[", "flex", "]"], ["type", "submit", 1, "[", "btn", "]", "[", "w-1/3", "mr-1", "]", "[", "bg-secondary", "text-white", "text-xl", "font-extrabold", "]", 3, "click"], ["type", "submit", 1, "[", "btn", "]", "[", "flex-grow", "gradient-bg", "text-white", "text-xl", "font-extrabold", "hover:shadow-xl", "]", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Bucle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "UX tools unified");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, LoginComponent_div_10_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, LoginComponent_div_13_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() { return ctx.action = "register"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_19_listener() { return ctx.action = "login"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginForm.get("email").dirty || ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginForm.get("password").dirty || ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.message);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "KUeB":
/*!***********************************************!*\
  !*** ./src/app/user/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_user_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/user-store.service */ "eHRQ");





class UserService {
    constructor(http, userStore) {
        this.http = http;
        this.userStore = userStore;
        this.API_ENDPOINT = "/api"; //add endpoint here when api is deployed
        this.loginRoute = `${this.API_ENDPOINT}/auth/login`;
        this.registerRoute = `${this.API_ENDPOINT}/register`;
    }
    login(user) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(this.loginRoute, user, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            this.userStore.token = res.access_token; //Save token to local storage
            return res;
        }));
    }
    register(user) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(this.registerRoute, user, { headers });
    }
    getProfile() {
        const token = this.userStore.token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Authorization': `Bearer ${token}` });
        return this.http.get(`${this.API_ENDPOINT}/profile`, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            this.userStore.workspace = res.workspace_id; //Save workspace to local storage
            return res;
        }));
        ;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_user_store_service__WEBPACK_IMPORTED_MODULE_3__["UserStoreService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "Oy4E":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component */ "QX6l");
/* harmony import */ var _shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/guards/auth-guard.service */ "ZIhg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"], canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]] },
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); };
DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/services/user.service */ "KUeB");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _components_create_campaign_create_campaign_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/create-campaign/create-campaign.component */ "4oDb");
/* harmony import */ var _components_campaigns_list_campaigns_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/campaigns-list/campaigns-list.component */ "UB1/");





class DashboardComponent {
    constructor(userService, store) {
        this.userService = userService;
        this.store = store;
    }
    ngOnInit() {
        /*  this.store.select('workspaceApp').subscribe(state => {
           if (!state.workspace) this.getWorkspace()
         }) */
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-campaigns"]], decls: 5, vars: 0, consts: [[1, "[", "mt-8", "]"], [1, "[", "heading__secondary", "]"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Campaigns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-create-campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-campaigns-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_create_campaign_create_campaign_component__WEBPACK_IMPORTED_MODULE_3__["CreateCampaignComponent"], _components_campaigns_list_campaigns_list_component__WEBPACK_IMPORTED_MODULE_4__["CampaignsListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "S+dN":
/*!*******************************************************!*\
  !*** ./src/app/campaign/services/campaign.service.ts ***!
  \*******************************************************/
/*! exports provided: CampaignService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignService", function() { return CampaignService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_user_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/user-store.service */ "eHRQ");




class CampaignService {
    constructor(http, userStore) {
        this.http = http;
        this.userStore = userStore;
        this.API_ENDPOINT = "/api"; //add endpoint here when api is deployed
    }
    getCampaign(id) {
        const token = this.userStore.token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Authorization': `Bearer ${token}` });
        const findCampaignEndpoint = `${this.API_ENDPOINT}/campaigns/${id}`;
        return this.http.get(findCampaignEndpoint, { headers });
    }
    addTask(campaign_id, task) {
        console.log('task:', task);
        const token = this.userStore.token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Authorization': `Bearer ${token}` });
        const newTaskEndpoint = `${this.API_ENDPOINT}/campaigns/${campaign_id}/new-task`;
        return this.http.post(newTaskEndpoint, task, { headers });
    }
    getCampaignTasks(task_ids) {
        const token = this.userStore.token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Authorization': `Bearer ${token}` });
        const getTasksEndpoint = `${this.API_ENDPOINT}/tasks/find`;
        return this.http.post(getTasksEndpoint, task_ids, { headers });
    }
}
CampaignService.ɵfac = function CampaignService_Factory(t) { return new (t || CampaignService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_shared_services_user_store_service__WEBPACK_IMPORTED_MODULE_2__["UserStoreService"])); };
CampaignService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CampaignService, factory: CampaignService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _shared_store_user_store_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/store/user-store/user.actions */ "q5qN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_store_workspace_store_workspace_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/store/workspace-store/workspace.actions */ "YQew");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_user_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/user-store.service */ "eHRQ");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _user_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/services/user.service */ "KUeB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/header/header.component */ "/Lhg");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/footer/footer.component */ "kVkw");











function AppComponent_app_header_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
} }
function AppComponent_app_footer_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-footer");
} }
class AppComponent {
    constructor(userStoreService, store, userService, router) {
        this.userStoreService = userStoreService;
        this.store = store;
        this.userService = userService;
        this.router = router;
        this.title = 'ux-tooling-app';
    }
    ngOnInit() {
        this.subscribeToRouterChanges();
        this.subscribeToStore();
    }
    subscribeToStore() {
        this.store
            .select('usersApp').subscribe((res) => {
            this.userIsLoggedIn = res.userIsLoggedIn;
            if (!this.userIsLoggedIn)
                this.checkLocalForLoginToken();
            if (this.userIsLoggedIn)
                this.getWorkspace();
        });
    }
    checkLocalForLoginToken() {
        if (this.userStoreService.isLoggedIn()) {
            this.store.dispatch(Object(_shared_store_user_store_user_actions__WEBPACK_IMPORTED_MODULE_0__["browserTokenLogin"])());
        }
    }
    subscribeToRouterChanges() {
        this.router.events.subscribe(e => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.isCompleteTask = e.url.indexOf("/complete-task") > -1;
            }
        });
    }
    getWorkspace() {
        this.userService.getProfile().subscribe(() => {
            this.store.dispatch(Object(_shared_store_workspace_store_workspace_actions__WEBPACK_IMPORTED_MODULE_2__["getWorkspace"])());
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_user_store_service__WEBPACK_IMPORTED_MODULE_4__["UserStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_user_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 2, consts: [[4, "ngIf"], [1, "[", "min-h-full", "max-w-screen-xl", "mx-auto", "]", "[", "text-lg", "]"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AppComponent_app_header_0_Template, 1, 0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AppComponent_app_footer_3_Template, 1, 0, "app-footer", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userIsLoggedIn && !ctx.isCompleteTask);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userIsLoggedIn && !ctx.isCompleteTask);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "TDBs":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component */ "QX6l");
/* harmony import */ var _components_campaigns_list_campaigns_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/campaigns-list/campaigns-list.component */ "UB1/");
/* harmony import */ var _components_create_campaign_create_campaign_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/create-campaign/create-campaign.component */ "4oDb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "Oy4E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"], _components_campaigns_list_campaigns_list_component__WEBPACK_IMPORTED_MODULE_2__["CampaignsListComponent"], _components_create_campaign_create_campaign_component__WEBPACK_IMPORTED_MODULE_3__["CreateCampaignComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardRoutingModule"]] }); })();


/***/ }),

/***/ "UB1/":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/components/campaigns-list/campaigns-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CampaignsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignsListComponent", function() { return CampaignsListComponent; });
/* harmony import */ var src_app_shared_store_workspace_store_workspace_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/store/workspace-store/workspace.actions */ "YQew");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







function CampaignsListComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "You have not created your first campaign yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CampaignsListComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CampaignsListComponent_div_8_div_1_Template, 3, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.campaigns || (ctx_r0.campaigns == null ? null : ctx_r0.campaigns.length) === 0);
} }
function CampaignsListComponent_li_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const campaign_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", campaign_r3.name, "");
} }
const _c0 = function (a1) { return ["/campaign", a1]; };
function CampaignsListComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CampaignsListComponent_li_10_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const campaign_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, campaign_r3._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", campaign_r3.name.toLowerCase().indexOf(ctx_r1.searchForm.get("search").value.toLowerCase()) > -1);
} }
class CampaignsListComponent {
    constructor(fb, store) {
        this.fb = fb;
        this.store = store;
    }
    ngOnInit() {
        this.subscribeToCampaignsStore();
        this.createSearchForm();
    }
    subscribeToCampaignsStore() {
        this.store.select('workspaceApp').subscribe((state) => {
            this.loading = state.loading;
            let workspace = state.workspace;
            if (!workspace)
                return;
            this.getCampaigns(workspace);
            this.campaigns = workspace === null || workspace === void 0 ? void 0 : workspace.campaigns;
        });
    }
    getCampaigns(workspace) {
        if (this.campaign_ids != workspace.campaign_ids) {
            this.campaign_ids = workspace.campaign_ids;
            this.store.dispatch(Object(src_app_shared_store_workspace_store_workspace_actions__WEBPACK_IMPORTED_MODULE_0__["getCampaigns"])({ campaign_ids: this.campaign_ids }));
        }
    }
    createSearchForm() {
        this.searchForm = this.fb.group({
            search: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
}
CampaignsListComponent.ɵfac = function CampaignsListComponent_Factory(t) { return new (t || CampaignsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
CampaignsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CampaignsListComponent, selectors: [["app-campaigns-list"]], decls: 11, vars: 3, consts: [[3, "formGroup"], [1, "[", "relative", "mb-4", "mt-8", "flex", "justify-center", "]"], [1, "[", "relative", "]"], ["type", "text", "placeholder", "Search for a campaign", "name", "search", "formControlName", "search", 1, "[", "border", "border-contrast", "px-40", "rounded-lg", "]"], ["xmlns", "http://www.w3.org/2000/svg", "version", "1.1", "width", "18", "height", "18", "viewBox", "0 0 32 32", 1, "[", "absolute", "right-3", "top-3", "]", "[", "opacity-50", "]"], ["d", "M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"], [4, "ngIf"], [1, "[", "mx-auto", "my-10", "]"], [3, "routerLink", 4, "ngFor", "ngForOf"], ["class", "[ mt-12 py-10 ] [ bg-background ] [ rounded-md shadow-lg ]", 4, "ngIf"], [1, "[", "mt-12", "py-10", "]", "[", "bg-background", "]", "[", "rounded-md", "shadow-lg", "]"], [1, "[", "p-2", "text-center", "w-full", "]", "[", "text-xl", "]"], [3, "routerLink"], ["class", "[ arrow-right ] [ p-3 pl-10 my-2 ] [ text-xl font-bold ] [ bg-background rounded-md shadow-md cursor-pointer ]", 4, "ngIf"], [1, "[", "arrow-right", "]", "[", "p-3", "pl-10", "my-2", "]", "[", "text-xl", "font-bold", "]", "[", "bg-background", "rounded-md", "shadow-md", "cursor-pointer", "]"]], template: function CampaignsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CampaignsListComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CampaignsListComponent_li_10_Template, 2, 4, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.campaigns);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: [".arrow-right[_ngcontent-%COMP%]:after {\n  content: ' \\279C';\n  position: absolute;\n  right: 1rem;\n  --tw-text-opacity: 1;\n  color: rgba(254, 152, 115, var(--tw-text-opacity))\n}\n\nli[_ngcontent-%COMP%] {\n  position: relative\n}\n\nli[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:hover{\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 197, 128, var(--tw-bg-opacity))\n}\n\nli[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:hover::after{\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity))\n}\n\nsvg[_ngcontent-%COMP%] {\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbXBhaWducy1saXN0LmNvbXBvbmVudC5jc3MiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdGFpbHdpbmRjc3MvbGliL2xpYi9zdWJzdGl0dXRlQ2xhc3NBcHBseUF0UnVsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUNDckIsa0JBQW1CO0VBQW5CLFdBQW1CO0VBQW5CLG9CQUFtQjtFQUFuQjtBRENBOztBQUVBO0VDSEE7QURLQTs7QUFFQTtFQ1BBLGtCQUFtQjtFQUFuQjtBRFNBOztBQUVBO0VDWEEsb0JBQW1CO0VBQW5CO0FEYUE7O0FBRUE7QUFFQSIsImZpbGUiOiJjYW1wYWlnbnMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFycm93LXJpZ2h0OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcgXFwyNzlDJztcclxuICAgIEBhcHBseSB0ZXh0LXByaW1hcnkgYWJzb2x1dGUgcmlnaHQtNFxyXG59XHJcblxyXG5saSB7XHJcbiAgICBAYXBwbHkgcmVsYXRpdmUgXHJcbn1cclxuXHJcbmxpID4gZGl2OmhvdmVye1xyXG4gICAgQGFwcGx5IGJnLXByaW1hcnktbGlnaHRcclxufVxyXG5cclxubGkgPiBkaXY6aG92ZXI6OmFmdGVye1xyXG4gICAgQGFwcGx5IHRleHQtd2hpdGVcclxufVxyXG5cclxuc3ZnIHtcclxuXHJcbn0iLCJAdGFpbHdpbmQgYmFzZTtcbkB0YWlsd2luZCBjb21wb25lbnRzO1xuQHRhaWx3aW5kIHV0aWxpdGllczsiXX0= */"] });


/***/ }),

/***/ "WvFI":
/*!*******************************************************************!*\
  !*** ./src/app/shared/store/workspace-store/workspace.effects.ts ***!
  \*******************************************************************/
/*! exports provided: WorkspaceEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceEffects", function() { return WorkspaceEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _workspace_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workspace.actions */ "YQew");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_dashboard_services_dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dashboard/services/dashboard.service */ "D+TJ");
/* harmony import */ var src_app_campaign_services_campaign_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/campaign/services/campaign.service */ "S+dN");








class WorkspaceEffects {
    constructor(actions$, dashboardService, campaignService) {
        this.actions$ = actions$;
        this.dashboardService = dashboardService;
        this.campaignService = campaignService;
        this.getWorkspace$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_workspace_actions__WEBPACK_IMPORTED_MODULE_3__["getWorkspace"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(() => this.dashboardService.getWorkspace().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((workspace) => Object(_workspace_actions__WEBPACK_IMPORTED_MODULE_3__["getWorkspaceSuccess"])({ workspace: workspace })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(_workspace_actions__WEBPACK_IMPORTED_MODULE_3__["getWorkspaceError"])({ payload: err })))))));
        this.getCampaigns$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_workspace_actions__WEBPACK_IMPORTED_MODULE_3__["getCampaigns"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])((action) => this.dashboardService.getCampaigns(action.campaign_ids).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((campaigns) => Object(_workspace_actions__WEBPACK_IMPORTED_MODULE_3__["getCampaignsSuccess"])({ campaigns: campaigns })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(_workspace_actions__WEBPACK_IMPORTED_MODULE_3__["getCampaignsError"])({ payload: err })))))));
        this.createCampaign$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_workspace_actions__WEBPACK_IMPORTED_MODULE_3__["createCampaign"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])((action) => this.dashboardService.create(action.name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((workspace) => Object(_workspace_actions__WEBPACK_IMPORTED_MODULE_3__["createCampaignSuccess"])({ campaign_id: workspace.campaign_ids.pop() })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(_workspace_actions__WEBPACK_IMPORTED_MODULE_3__["createCampaignError"])({ payload: err })))))));
        this.addTask$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_workspace_actions__WEBPACK_IMPORTED_MODULE_3__["addTask"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(({ task, campaign_id }) => this.campaignService.addTask(campaign_id, task).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((campaign) => Object(_workspace_actions__WEBPACK_IMPORTED_MODULE_3__["addTaskSuccess"])({ campaign: campaign })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(_workspace_actions__WEBPACK_IMPORTED_MODULE_3__["addTaskError"])({ payload: err })))))));
        this.getTasks$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_workspace_actions__WEBPACK_IMPORTED_MODULE_3__["getTasks"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(({ task_ids }) => this.campaignService.getCampaignTasks(task_ids).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((tasks) => Object(_workspace_actions__WEBPACK_IMPORTED_MODULE_3__["getTasksSuccess"])({ tasks: tasks })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(_workspace_actions__WEBPACK_IMPORTED_MODULE_3__["getTasksError"])({ payload: err })))))));
    }
}
WorkspaceEffects.ɵfac = function WorkspaceEffects_Factory(t) { return new (t || WorkspaceEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_dashboard_services_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_campaign_services_campaign_service__WEBPACK_IMPORTED_MODULE_6__["CampaignService"])); };
WorkspaceEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: WorkspaceEffects, factory: WorkspaceEffects.ɵfac });


/***/ }),

/***/ "YQew":
/*!*******************************************************************!*\
  !*** ./src/app/shared/store/workspace-store/workspace.actions.ts ***!
  \*******************************************************************/
/*! exports provided: getWorkspace, getWorkspaceSuccess, getWorkspaceError, getCampaigns, getCampaignsSuccess, getCampaignsError, createCampaign, createCampaignSuccess, createCampaignError, addTask, addTaskSuccess, addTaskError, getTasks, getTasksSuccess, getTasksError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkspace", function() { return getWorkspace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkspaceSuccess", function() { return getWorkspaceSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkspaceError", function() { return getWorkspaceError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCampaigns", function() { return getCampaigns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCampaignsSuccess", function() { return getCampaignsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCampaignsError", function() { return getCampaignsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCampaign", function() { return createCampaign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCampaignSuccess", function() { return createCampaignSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCampaignError", function() { return createCampaignError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTask", function() { return addTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTaskSuccess", function() { return addTaskSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTaskError", function() { return addTaskError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTasks", function() { return getTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTasksSuccess", function() { return getTasksSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTasksError", function() { return getTasksError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

//Workspace
const getWorkspace = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Workspace] get workspace');
const getWorkspaceSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Workspace] get workspace success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getWorkspaceError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Workspace] get workspace Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
//get campaigns
const getCampaigns = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Workspace] get campaigns', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getCampaignsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Workspace] get campaigns success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getCampaignsError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Workspace] get campaigns Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
//create campaigns
const createCampaign = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Workspace] create campaigns', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createCampaignSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Workspace] create campaigns success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createCampaignError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Workspace] create campaigns Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
//create task
const addTask = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Workspace] create task', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addTaskSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Workspace] create task success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addTaskError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Workspace] create task Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
//get tasks
const getTasks = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Workspace] get tasks', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getTasksSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Workspace] get tasks success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getTasksError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Workspace] get tasks Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "Yu5h":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ "Go8p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
];
class UserRoutingModule {
}
UserRoutingModule.ɵfac = function UserRoutingModule_Factory(t) { return new (t || UserRoutingModule)(); };
UserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UserRoutingModule });
UserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UserRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.module */ "7UCR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/header/header.component */ "/Lhg");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/footer/footer.component */ "kVkw");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _shared_store_user_store_user_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/store/user-store/user.effects */ "q5Mj");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "TDBs");
/* harmony import */ var _app_reducers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.reducers */ "xxnn");
/* harmony import */ var _shared_store_workspace_store_workspace_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/store/workspace-store/workspace.effects */ "WvFI");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _user_user_module__WEBPACK_IMPORTED_MODULE_4__["UserModule"],
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_12__["DashboardModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forRoot(_app_reducers__WEBPACK_IMPORTED_MODULE_13__["appReducers"], {
                runtimeChecks: {
                    strictStateImmutability: false,
                    strictActionImmutability: false,
                },
            }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_2__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production,
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot([_shared_store_user_store_user_effects__WEBPACK_IMPORTED_MODULE_11__["UsersEffects"], _shared_store_workspace_store_workspace_effects__WEBPACK_IMPORTED_MODULE_14__["WorkspaceEffects"]]),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _user_user_module__WEBPACK_IMPORTED_MODULE_4__["UserModule"],
        _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_12__["DashboardModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_2__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsRootModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "ZIhg":
/*!*****************************************************!*\
  !*** ./src/app/shared/guards/auth-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user-store.service */ "eHRQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuardService {
    constructor(userStore, router) {
        this.userStore = userStore;
        this.router = router;
    }
    canActivate() {
        if (this.userStore.isLoggedIn()) {
            return true;
        }
        this.router.navigate(["user/login"]);
        return false;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_store_service__WEBPACK_IMPORTED_MODULE_1__["UserStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "eHRQ":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/user-store.service.ts ***!
  \*******************************************************/
/*! exports provided: UserStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStoreService", function() { return UserStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UserStoreService {
    constructor() {
        this._token = null;
        this._workspace = null;
        this._token = this.getTokenFromCookies() || null;
        this._workspace = this.getWorkspaceFromCookies() || null;
    }
    set token(token) {
        this._token = token;
        document.cookie = `access_token=${token}`;
    }
    set workspace(workspace) {
        this._workspace = workspace;
        document.cookie = `workspace=${workspace}`;
    }
    get token() {
        return this._token;
    }
    get workspace() {
        return this._workspace;
    }
    isLoggedIn() {
        return this.token !== null;
    }
    getTokenFromCookies() {
        return document.cookie.replace(/(?:(?:^|.*;\s*)access_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    }
    getWorkspaceFromCookies() {
        return document.cookie.replace(/(?:(?:^|.*;\s*)workspace\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    }
}
UserStoreService.ɵfac = function UserStoreService_Factory(t) { return new (t || UserStoreService)(); };
UserStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserStoreService, factory: UserStoreService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "kMil":
/*!*********************************************************!*\
  !*** ./src/app/shared/store/user-store/user.reducer.ts ***!
  \*********************************************************/
/*! exports provided: initialState, userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.actions */ "q5qN");


const initialState = {
    userIsLoggedIn: false,
    loading: false,
    loaded: false,
    error: null,
};
const _userReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_user_actions__WEBPACK_IMPORTED_MODULE_1__["login"], (state) => (Object.assign(Object.assign({}, state), { loading: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_user_actions__WEBPACK_IMPORTED_MODULE_1__["browserTokenLogin"], (state) => (Object.assign(Object.assign({}, state), { userIsLoggedIn: true, loading: false, loaded: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_user_actions__WEBPACK_IMPORTED_MODULE_1__["loginSuccess"], (state) => (Object.assign(Object.assign({}, state), { userIsLoggedIn: true, loading: false, loaded: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_user_actions__WEBPACK_IMPORTED_MODULE_1__["loginError"], (state, { payload }) => (Object.assign(Object.assign({}, state), { userIsLoggedIn: false, loading: false, loaded: false, error: {
        url: payload.url,
        status: payload.status,
        message: payload.message,
    } }))));
function userReducer(state, action) {
    return _userReducer(state, action);
}


/***/ }),

/***/ "kVkw":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 12, vars: 0, consts: [[1, "[", "bg-primary", "pb-20", "pt-10", "]"], [1, "[", "max-w-screen-xl", "mx-auto", "text-right", "]"], [1, "[", "px-7", "pb-2", "]", "[", "text-lg", "text-text", "font-heading", "font-bold", "]"], ["href", "https://laurainfantes.netlify.app/", "target", "_blank", "rel", "noopener noreferrer", 1, "[", "underline", "]"], [1, "[", "px-7", "]", "[", "text-text", "font-heading", "]"], ["href", "https://uoc.edu", "target", "_blank", "rel", "noopener noreferrer"], [1, "[", "px-7", "]", "[", "text-text", "font-heading", "font-bold", "]"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Designed and developed by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Laura Infantes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Student project @ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "UOC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "mXYj":
/*!*******************************************************************!*\
  !*** ./src/app/shared/store/workspace-store/workspace.reducer.ts ***!
  \*******************************************************************/
/*! exports provided: initialState, workspaceReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workspaceReducer", function() { return workspaceReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _workspace_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workspace.actions */ "YQew");


const initialState = {
    loading: false,
    loaded: false,
    error: null,
};
const _workspaceReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, 
//GET Workspace
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_workspace_actions__WEBPACK_IMPORTED_MODULE_1__["getWorkspace"], (state) => (Object.assign(Object.assign({}, state), { loading: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_workspace_actions__WEBPACK_IMPORTED_MODULE_1__["getWorkspaceSuccess"], (state, { workspace }) => {
    let newState = Object.assign(Object.assign({}, state), { workspace, loading: false, loaded: true });
    return newState;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_workspace_actions__WEBPACK_IMPORTED_MODULE_1__["getWorkspaceError"], (state, { payload }) => (Object.assign(Object.assign({}, state), { userIsLoggedIn: false, loading: false, loaded: false, error: {
        url: payload.url,
        status: payload.status,
        message: payload.message,
    } }))), 
//GET campaigns
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_workspace_actions__WEBPACK_IMPORTED_MODULE_1__["getCampaigns"], (state) => (Object.assign(Object.assign({}, state), { loading: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_workspace_actions__WEBPACK_IMPORTED_MODULE_1__["getCampaignsSuccess"], (state, { campaigns }) => {
    let newState = Object.assign(Object.assign({}, state), { workspace: Object.assign(Object.assign({}, state.workspace), { campaigns: campaigns.reverse() }), loading: false, loaded: true });
    return newState;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_workspace_actions__WEBPACK_IMPORTED_MODULE_1__["getCampaignsError"], (state, { payload }) => (Object.assign(Object.assign({}, state), { userIsLoggedIn: false, loading: false, loaded: false, error: {
        url: payload.url,
        status: payload.status,
        message: payload.message,
    } }))), 
//Create campaign
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_workspace_actions__WEBPACK_IMPORTED_MODULE_1__["createCampaign"], (state) => (Object.assign(Object.assign({}, state), { loading: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_workspace_actions__WEBPACK_IMPORTED_MODULE_1__["createCampaignSuccess"], (state, { campaign_id }) => {
    let newState = Object.assign(Object.assign({}, state), { workspace: Object.assign(Object.assign({}, state.workspace), { campaign_ids: [...state.workspace.campaign_ids, campaign_id] }), loading: false, loaded: true });
    return newState;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_workspace_actions__WEBPACK_IMPORTED_MODULE_1__["createCampaignError"], (state, { payload }) => (Object.assign(Object.assign({}, state), { userIsLoggedIn: false, loading: false, loaded: false, error: {
        url: payload.url,
        status: payload.status,
        message: payload.message,
    } }))), 
//Add task
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_workspace_actions__WEBPACK_IMPORTED_MODULE_1__["addTask"], (state) => (Object.assign(Object.assign({}, state), { loading: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_workspace_actions__WEBPACK_IMPORTED_MODULE_1__["addTaskSuccess"], (state, { campaign }) => {
    let newState = Object.assign(Object.assign({}, state), { workspace: Object.assign(Object.assign({}, state.workspace), { campaigns: state.workspace.campaigns.map(storedCampaign => storedCampaign._id === campaign._id ? campaign : storedCampaign) }), loading: false, loaded: true });
    return newState;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_workspace_actions__WEBPACK_IMPORTED_MODULE_1__["addTaskError"], (state, { payload }) => (Object.assign(Object.assign({}, state), { userIsLoggedIn: false, loading: false, loaded: false, error: {
        url: payload.url,
        status: payload.status,
        message: payload.message,
    } }))), 
//GET tasks
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_workspace_actions__WEBPACK_IMPORTED_MODULE_1__["getTasks"], (state) => (Object.assign(Object.assign({}, state), { loading: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_workspace_actions__WEBPACK_IMPORTED_MODULE_1__["getTasksSuccess"], (state, { tasks }) => {
    var _a;
    let campaign_id = (_a = window.location.href.match(/(campaign\/[0-9a-z]+)/)) === null || _a === void 0 ? void 0 : _a[0].replace('campaign/', '');
    let newState = Object.assign(Object.assign({}, state), { workspace: Object.assign(Object.assign({}, state.workspace), { campaigns: state.workspace.campaigns.map(storedCampaign => storedCampaign._id === campaign_id
                ? Object.assign(Object.assign({}, storedCampaign), { tasks: tasks.reverse() }) : storedCampaign) }), loading: false, loaded: true });
    return newState;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_workspace_actions__WEBPACK_IMPORTED_MODULE_1__["getTasksError"], (state, { payload }) => (Object.assign(Object.assign({}, state), { userIsLoggedIn: false, loading: false, loaded: false, error: {
        url: payload.url,
        status: payload.status,
        message: payload.message,
    } }))));
function workspaceReducer(state, action) {
    return _workspaceReducer(state, action);
}


/***/ }),

/***/ "q5Mj":
/*!*********************************************************!*\
  !*** ./src/app/shared/store/user-store/user.effects.ts ***!
  \*********************************************************/
/*! exports provided: UsersEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersEffects", function() { return UsersEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.actions */ "q5qN");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_user_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/user/services/user.service */ "KUeB");







class UsersEffects {
    constructor(actions$, userService) {
        this.actions$ = actions$;
        this.userService = userService;
        this.loginUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_user_actions__WEBPACK_IMPORTED_MODULE_1__["login"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((action) => this.userService.login(action.userDetails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((user) => Object(_user_actions__WEBPACK_IMPORTED_MODULE_1__["loginSuccess"])({ user: user })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_1__["loginError"])({ payload: err })))))));
    }
}
UsersEffects.ɵfac = function UsersEffects_Factory(t) { return new (t || UsersEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_user_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
UsersEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: UsersEffects, factory: UsersEffects.ɵfac });


/***/ }),

/***/ "q5qN":
/*!*********************************************************!*\
  !*** ./src/app/shared/store/user-store/user.actions.ts ***!
  \*********************************************************/
/*! exports provided: login, browserTokenLogin, loginSuccess, loginError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browserTokenLogin", function() { return browserTokenLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginError", function() { return loginError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

//Login
const login = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] login', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const browserTokenLogin = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] browser token login');
const loginSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Login success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loginError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Login Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
/* export const register = createAction('[User] register') */ 


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



const routes = [{ path: "", redirectTo: "/user/login", pathMatch: "full" },
    { path: "campaigns",
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "TDBs")).then((m) => m.DashboardModule),
    },
    {
        path: "user",
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./user/user.module */ "7UCR")).then((m) => m.UserModule),
    },
    { path: 'campaign/:id', loadChildren: () => __webpack_require__.e(/*! import() | campaign-campaign-module */ "campaign-campaign-module").then(__webpack_require__.bind(null, /*! ./campaign/campaign.module */ "3vVB")).then(m => m.CampaignModule) },
    { path: 'campaign/:id/new-task', loadChildren: () => __webpack_require__.e(/*! import() | tasks-create-task-create-task-module */ "tasks-create-task-create-task-module").then(__webpack_require__.bind(null, /*! ./tasks/create-task/create-task.module */ "eYNs")).then(m => m.TasksModule) },
    { path: 'results/:id', loadChildren: () => Promise.all(/*! import() | tasks-results-results-module */[__webpack_require__.e("common"), __webpack_require__.e("tasks-results-results-module")]).then(__webpack_require__.bind(null, /*! ./tasks/results/results.module */ "WA3C")).then(m => m.ResultsModule) },
    { path: 'campaign/:campaign_id/update-task/:task_id', loadChildren: () => __webpack_require__.e(/*! import() | tasks-update-task-update-task-module */ "tasks-update-task-update-task-module").then(__webpack_require__.bind(null, /*! ./tasks/update-task/update-task.module */ "bgDc")).then(m => m.UpdateTasksModule) },
    { path: 'complete-task/:id', loadChildren: () => Promise.all(/*! import() | tasks-complete-task-complete-task-module */[__webpack_require__.e("common"), __webpack_require__.e("tasks-complete-task-complete-task-module")]).then(__webpack_require__.bind(null, /*! ./tasks/complete-task/complete-task.module */ "85Ch")).then(m => m.CompleteTaskModule) },
    { path: 'my-account', loadChildren: () => __webpack_require__.e(/*! import() | my-account-my-account-module */ "my-account-my-account-module").then(__webpack_require__.bind(null, /*! ./my-account/my-account.module */ "J8OZ")).then(m => m.MyAccountModule) },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xxnn":
/*!*********************************!*\
  !*** ./src/app/app.reducers.ts ***!
  \*********************************/
/*! exports provided: appReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return appReducers; });
/* harmony import */ var _shared_store_user_store_user_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/store/user-store/user.reducer */ "kMil");
/* harmony import */ var _shared_store_workspace_store_workspace_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/store/workspace-store/workspace.reducer */ "mXYj");


const appReducers = {
    usersApp: _shared_store_user_store_user_reducer__WEBPACK_IMPORTED_MODULE_0__["userReducer"],
    workspaceApp: _shared_store_workspace_store_workspace_reducer__WEBPACK_IMPORTED_MODULE_1__["workspaceReducer"],
};


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

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map