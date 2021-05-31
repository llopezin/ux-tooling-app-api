(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["campaign-campaign-module"],{

/***/ "3vVB":
/*!*********************************************!*\
  !*** ./src/app/campaign/campaign.module.ts ***!
  \*********************************************/
/*! exports provided: CampaignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignModule", function() { return CampaignModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _campaign_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campaign-routing.module */ "MCi1");
/* harmony import */ var _campaign_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./campaign.component */ "G75O");
/* harmony import */ var _services_campaign_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/campaign.service */ "S+dN");
/* harmony import */ var _components_task_summaries_list_task_summaries_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/task-summaries-list/task-summaries-list.component */ "TzvS");
/* harmony import */ var _components_task_summary_task_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/task-summary/task-summary.component */ "C/q9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class CampaignModule {
}
CampaignModule.ɵfac = function CampaignModule_Factory(t) { return new (t || CampaignModule)(); };
CampaignModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CampaignModule });
CampaignModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_services_campaign_service__WEBPACK_IMPORTED_MODULE_3__["CampaignService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _campaign_routing_module__WEBPACK_IMPORTED_MODULE_1__["CampaignRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CampaignModule, { declarations: [_campaign_component__WEBPACK_IMPORTED_MODULE_2__["CampaignComponent"], _components_task_summaries_list_task_summaries_list_component__WEBPACK_IMPORTED_MODULE_4__["TaskSummariesListComponent"], _components_task_summary_task_summary_component__WEBPACK_IMPORTED_MODULE_5__["TaskSummaryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _campaign_routing_module__WEBPACK_IMPORTED_MODULE_1__["CampaignRoutingModule"]] }); })();


/***/ }),

/***/ "C/q9":
/*!****************************************************************************!*\
  !*** ./src/app/campaign/components/task-summary/task-summary.component.ts ***!
  \****************************************************************************/
/*! exports provided: TaskSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskSummaryComponent", function() { return TaskSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function (a1, a2) { return ["/results", a1, a2]; };
const _c1 = function (a1, a3) { return ["/campaign", a1, "update-task", a3]; };
class TaskSummaryComponent {
    constructor(route) {
        this.linkCopied = false;
        this.campaign_id = route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        setTimeout(() => { this.setProgress(); }, 500);
    }
    setProgress() {
        let usersRequired = this.task.usersRequired || 10;
        let progressBar = document.getElementById(this.task._id);
        let progress = (this.task.responses.length / usersRequired) * 100;
        progressBar.style.width = `${progress}%`;
        progressBar.style.display = `block`;
    }
    copyLinkToClipboard() {
        let textArea = document.getElementById(`link${this.task._id}`);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        this.changeButtonMessage();
    }
    changeButtonMessage() {
        this.linkCopied = true;
        setTimeout(() => { this.linkCopied = false; }, 2000);
    }
}
TaskSummaryComponent.ɵfac = function TaskSummaryComponent_Factory(t) { return new (t || TaskSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
TaskSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskSummaryComponent, selectors: [["app-task-summary"]], inputs: { task: "task" }, decls: 18, vars: 16, consts: [[1, "[", "flex", "flex-col", "justify-between", "h-full", "p-6", "mt-6", "]", "[", "bg-background", "]", "[", "rounded-lg", "shadow-2xl", "]"], [1, "[", "font-bold", "]"], [1, "[", "sr-only", "]", 3, "id", "value"], [1, "[", "-mt-3", "]", "[", "text-left", "underline", "]", 3, "click"], [1, "[", "relative", "mt-4", "]"], [1, "[", "absolute", "top-0", "right-0", "]"], [1, "[", "w-full", "h-4", "mx-auto", "]", "[", "bg-white", "]", "[", "border", "border-text", "rounded-full", "]"], [1, "[", "h-full", "hidden", "]", "[", "bg-primary", "]", "[", "rounded-full", "]", 3, "id"], [1, "[", "w-full", "flex", "mt-4", "]"], [1, "[", "lozenge", "]", "[", "flex-grow", "mr-2", "]", "[", "bg-primary-light", "]", 3, "routerLink"], [1, "[", "lozenge", "]", "[", "flex-grow", "]", "[", "bg-primary", "]", 3, "routerLink"]], template: function TaskSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskSummaryComponent_Template_button_click_4_listener() { return ctx.copyLinkToClipboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.task.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "link" + ctx.task._id)("value", "http://localhost:4200/complete-task/" + ctx.task._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.linkCopied ? "Copied to clipboard" : "Copy link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.task.active ? "In progress" : "Not started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.task.responses.length || 0, "/", ctx.task.usersRequired || 10, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.task._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, ctx.task._id, ctx.task.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c1, ctx.campaign_id, ctx.task._id));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".progress-bar[_ngcontent-%COMP%]{\n  transition: width 1s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2stc3VtbWFyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InRhc2stc3VtbWFyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyZXNzLWJhcntcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDFzO1xyXG59Il19 */"] });


/***/ }),

/***/ "G75O":
/*!************************************************!*\
  !*** ./src/app/campaign/campaign.component.ts ***!
  \************************************************/
/*! exports provided: CampaignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignComponent", function() { return CampaignComponent; });
/* harmony import */ var _shared_store_workspace_store_workspace_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/store/workspace-store/workspace.actions */ "YQew");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _shared_services_user_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/user-store.service */ "eHRQ");
/* harmony import */ var _components_task_summaries_list_task_summaries_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/task-summaries-list/task-summaries-list.component */ "TzvS");






class CampaignComponent {
    constructor(route, store, localStore) {
        this.route = route;
        this.store = store;
        this.localStore = localStore;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.store.select('workspaceApp').subscribe((state) => {
                const { workspace, loading } = state;
                if (loading)
                    return;
                if (workspace === null || workspace === void 0 ? void 0 : workspace.campaigns)
                    this.getCampaignFromStore(workspace.campaigns);
                if (!workspace) {
                    this.getWorkspace();
                }
                if (workspace && !workspace.campaigns) {
                    this.getCampaigns(workspace);
                }
            });
        });
    }
    getCampaignFromStore(campaigns) {
        this.campaign = campaigns.find(campaign => { return campaign._id == this.id; });
    }
    getWorkspace() {
        this.store.dispatch(Object(_shared_store_workspace_store_workspace_actions__WEBPACK_IMPORTED_MODULE_0__["getWorkspace"])());
    }
    getCampaigns(workspace) {
        this.store.dispatch(Object(_shared_store_workspace_store_workspace_actions__WEBPACK_IMPORTED_MODULE_0__["getCampaigns"])({ campaign_ids: workspace.campaign_ids }));
    }
}
CampaignComponent.ɵfac = function CampaignComponent_Factory(t) { return new (t || CampaignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_user_store_service__WEBPACK_IMPORTED_MODULE_4__["UserStoreService"])); };
CampaignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CampaignComponent, selectors: [["app-campaign"]], decls: 8, vars: 1, consts: [[1, "[", "grid", "grid-cols-4", "]"], [1, "[", "p-4", "pt-8", "]", "[", "col-start-1", "col-end-5", "]"], [1, "[", "heading__secondary", "]"], ["routerLink", "new-task", 1, "[", "btn__primary-color", "]", "[", "-mt-8", "]", "[", "float-right", "]"], ["title", "Tasks"]], template: function CampaignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "New task");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-task-summaries-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.campaign == null ? null : ctx.campaign.name);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _components_task_summaries_list_task_summaries_list_component__WEBPACK_IMPORTED_MODULE_5__["TaskSummariesListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW1wYWlnbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "MCi1":
/*!*****************************************************!*\
  !*** ./src/app/campaign/campaign-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CampaignRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignRoutingModule", function() { return CampaignRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/guards/auth-guard.service */ "ZIhg");
/* harmony import */ var _campaign_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./campaign.component */ "G75O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [{
        path: '', component: _campaign_component__WEBPACK_IMPORTED_MODULE_2__["CampaignComponent"], canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
    }];
class CampaignRoutingModule {
}
CampaignRoutingModule.ɵfac = function CampaignRoutingModule_Factory(t) { return new (t || CampaignRoutingModule)(); };
CampaignRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CampaignRoutingModule });
CampaignRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CampaignRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "TzvS":
/*!******************************************************************************************!*\
  !*** ./src/app/campaign/components/task-summaries-list/task-summaries-list.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TaskSummariesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskSummariesListComponent", function() { return TaskSummariesListComponent; });
/* harmony import */ var src_app_shared_store_workspace_store_workspace_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/store/workspace-store/workspace.actions */ "YQew");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _task_summary_task_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../task-summary/task-summary.component */ "C/q9");






function TaskSummariesListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "You have not added any tasks yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TaskSummariesListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-task-summary", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("task", task_r2);
} }
class TaskSummariesListComponent {
    constructor(store, route) {
        this.store = store;
        this.route = route;
        this.campaign_id = this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.storeSubscription = this.store.select('workspaceApp').subscribe(state => {
            var _a;
            if (state.loading)
                return;
            this.updateCampaign(state);
            if ((_a = this.campaign) === null || _a === void 0 ? void 0 : _a.user_task_ids)
                this.getTasks();
        });
    }
    getTasks() {
        var _a;
        if (((_a = this.campaign.tasks) === null || _a === void 0 ? void 0 : _a.length) === this.campaign.user_task_ids.length)
            return;
        this.store.dispatch(Object(src_app_shared_store_workspace_store_workspace_actions__WEBPACK_IMPORTED_MODULE_0__["getTasks"])({ task_ids: this.campaign.user_task_ids }));
    }
    updateCampaign(state) {
        var _a, _b;
        this.campaign = (_b = (_a = state.workspace) === null || _a === void 0 ? void 0 : _a.campaigns) === null || _b === void 0 ? void 0 : _b.find(campaign => campaign._id == this.campaign_id);
    }
    ngOnDestroy() {
        this.storeSubscription.unsubscribe();
    }
}
TaskSummariesListComponent.ɵfac = function TaskSummariesListComponent_Factory(t) { return new (t || TaskSummariesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
TaskSummariesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TaskSummariesListComponent, selectors: [["app-task-summaries-list"]], decls: 3, vars: 2, consts: [[1, "[", "grid", "grid-cols-4", "gap-8", "p-3", "]"], ["class", "[ flex justify-center items-center col-span-full h-24 my-5 ] [ shadow-lg rounded-lg ] [ bg-background ]", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "[", "flex", "justify-center", "items-center", "col-span-full", "h-24", "my-5", "]", "[", "shadow-lg", "rounded-lg", "]", "[", "bg-background", "]"], [3, "task"]], template: function TaskSummariesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TaskSummariesListComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TaskSummariesListComponent_div_2_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.campaign == null ? null : ctx.campaign.tasks == null ? null : ctx.campaign.tasks.length) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.campaign == null ? null : ctx.campaign.tasks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _task_summary_task_summary_component__WEBPACK_IMPORTED_MODULE_5__["TaskSummaryComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrLXN1bW1hcmllcy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=campaign-campaign-module.js.map