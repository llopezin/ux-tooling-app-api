(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tasks-update-task-update-task-module"],{

/***/ "ADtB":
/*!*******************************************************************!*\
  !*** ./src/app/tasks/update-task/services/update-task.service.ts ***!
  \*******************************************************************/
/*! exports provided: updateTaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTaskService", function() { return updateTaskService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_user_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/user-store.service */ "eHRQ");




class updateTaskService {
    constructor(http, userStore) {
        this.http = http;
        this.userStore = userStore;
        this.API_ENDPOINT = "/api";
    }
    getTask(id) {
        return this.http.get(`${this.API_ENDPOINT}/tasks/${id}`);
    }
    updateTask(id, updatedTask) {
        const token = this.userStore.token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Authorization': `Bearer ${token}` });
        return this.http.put(`${this.API_ENDPOINT}/tasks/update/${id}`, updatedTask, { headers });
    }
}
updateTaskService.ɵfac = function updateTaskService_Factory(t) { return new (t || updateTaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_shared_services_user_store_service__WEBPACK_IMPORTED_MODULE_2__["UserStoreService"])); };
updateTaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: updateTaskService, factory: updateTaskService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Pngq":
/*!************************************************************!*\
  !*** ./src/app/tasks/update-task/update-task.component.ts ***!
  \************************************************************/
/*! exports provided: UpdateTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTaskComponent", function() { return UpdateTaskComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_update_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/update-task.service */ "ADtB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_update_survey_update_survey_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/update-survey/update-survey.component */ "z6T5");
/* harmony import */ var _components_update_card_sorting_update_card_sorting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/update-card-sorting/update-card-sorting.component */ "bxyd");
/* harmony import */ var _components_update_tree_test_update_tree_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/update-tree-test/update-tree-test.component */ "o9zs");










function UpdateTaskComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UpdateTaskComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UpdateTaskComponent_div_8_div_1_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.newTaskForm.get("name").errors == null ? null : ctx_r0.newTaskForm.get("name").errors.required);
} }
function UpdateTaskComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "At least one user is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UpdateTaskComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UpdateTaskComponent_div_13_div_1_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.newTaskForm.get("usersRequired").errors == null ? null : ctx_r1.newTaskForm.get("usersRequired").errors.min);
} }
function UpdateTaskComponent_app_update_survey_15_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-update-survey", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("updateSurvey", function UpdateTaskComponent_app_update_survey_15_Template_app_update_survey_updateSurvey_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.updateSurvey($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("task", ctx_r2.task);
} }
function UpdateTaskComponent_app_update_card_sorting_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-update-card-sorting");
} }
function UpdateTaskComponent_app_update_tree_test_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-update-tree-test");
} }
function UpdateTaskComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Updating Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UpdateTaskComponent_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Task updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UpdateTaskComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UpdateTaskComponent_div_18_div_1_Template, 7, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UpdateTaskComponent_div_18_div_2_Template, 5, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.taskPosting);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.taskPosted);
} }
class UpdateTaskComponent {
    constructor(fb, store, router, route, taskService) {
        this.fb = fb;
        this.store = store;
        this.router = router;
        this.route = route;
        this.taskService = taskService;
        this.type = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](' ', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.campaign_id = this.route.snapshot.paramMap.get('campaign_id');
        this.task_id = this.route.snapshot.paramMap.get('task_id');
        this.nullTask = { name: "", usersRequired: "" };
        this.updateForm(this.nullTask);
    }
    ngOnInit() {
        this.taskService.getTask(this.task_id).subscribe(task => { this.task = task; this.updateForm(this.task); });
    }
    updateForm({ name, usersRequired }) {
        this.newTaskForm = this.fb.group({
            name: [name, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            usersRequired: [usersRequired, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1)]],
        });
    }
    updateSurvey({ questions }) {
        this.task = Object.assign(Object.assign({}, this.newTaskForm.value), { questions, _id: this.task_id });
        this.taskService.updateTask(this.task_id, this.task).subscribe(res => {
            this.taskPosted = true;
            this.navigateToCampaign();
        });
        //dispatch get tasks
        this.taskPosting = true;
    }
    navigateToCampaign() {
        this.router.navigate([`campaign/${this.campaign_id}`]);
    }
}
UpdateTaskComponent.ɵfac = function UpdateTaskComponent_Factory(t) { return new (t || UpdateTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_update_task_service__WEBPACK_IMPORTED_MODULE_4__["updateTaskService"])); };
UpdateTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UpdateTaskComponent, selectors: [["app-update-task"]], decls: 19, vars: 8, consts: [[1, "[", "max-w-screen-lg", "mx-auto", "pt-8", "]"], [1, "[", "heading__secondary", "]"], [1, "[", "px-14", "pt-6", "pb-10", "my-8", "]", "[", "bg-background", "]", "[", "rounded-lg", "shadow-2xl", "]", 3, "formGroup"], [1, "[", "my-4", "]"], ["for", "task-name"], ["type", "text", "placeholder", "task name", "required", "", "name", "name", "formControlName", "name", "id", "task-name", 1, "[", "input__primary", "]"], [4, "ngIf"], ["for", "task-users"], ["type", "number", "required", "", "name", "usersRequired", "formControlName", "usersRequired", "id", "task-users", 1, "[", "input__primary", "]"], [3, "task", "updateSurvey", 4, "ngIf"], ["class", "[ overlay__white ]", 4, "ngIf"], [3, "task", "updateSurvey"], [1, "[", "overlay__white", "]"], ["class", "[ flex flex-col items-center ]", 4, "ngIf"], [1, "[", "flex", "flex-col", "items-center", "]"], [1, "lds-facebook"], [1, "[", "text-4xl", "font-bold", "]"], [1, "[", "text-6xl", "font-bold", "text-green-400", "]"]], template: function UpdateTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UpdateTaskComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Users required");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UpdateTaskComponent_div_13_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, UpdateTaskComponent_app_update_survey_15_Template, 1, 1, "app-update-survey", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UpdateTaskComponent_app_update_card_sorting_16_Template, 1, 0, "app-update-card-sorting", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, UpdateTaskComponent_app_update_tree_test_17_Template, 1, 0, "app-update-tree-test", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, UpdateTaskComponent_div_18_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.task == null ? null : ctx.task.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.newTaskForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.newTaskForm.get("name").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.newTaskForm.get("usersRequired").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.task == null ? null : ctx.task.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.task == null ? null : ctx.task.type) === "Card sorting");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.task == null ? null : ctx.task.type) === "Tree test");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.taskPosting || ctx.taskPosted);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _components_update_survey_update_survey_component__WEBPACK_IMPORTED_MODULE_6__["UpdateSurveyComponent"], _components_update_card_sorting_update_card_sorting_component__WEBPACK_IMPORTED_MODULE_7__["UpdateCardSortingComponent"], _components_update_tree_test_update_tree_test_component__WEBPACK_IMPORTED_MODULE_8__["UpdateTreeTestComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtdGFzay5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Y5+q":
/*!*****************************************************************!*\
  !*** ./src/app/tasks/update-task/update-task-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: UpdateTasksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTasksRoutingModule", function() { return UpdateTasksRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _update_task_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-task.component */ "Pngq");
/* harmony import */ var src_app_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/guards/auth-guard.service */ "ZIhg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', component: _update_task_component__WEBPACK_IMPORTED_MODULE_1__["UpdateTaskComponent"], canActivate: [src_app_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]] },
];
class UpdateTasksRoutingModule {
}
UpdateTasksRoutingModule.ɵfac = function UpdateTasksRoutingModule_Factory(t) { return new (t || UpdateTasksRoutingModule)(); };
UpdateTasksRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: UpdateTasksRoutingModule });
UpdateTasksRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UpdateTasksRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "bgDc":
/*!*********************************************************!*\
  !*** ./src/app/tasks/update-task/update-task.module.ts ***!
  \*********************************************************/
/*! exports provided: UpdateTasksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTasksModule", function() { return UpdateTasksModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _update_task_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-task-routing.module */ "Y5+q");
/* harmony import */ var _update_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-task.component */ "Pngq");
/* harmony import */ var _components_update_survey_update_survey_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/update-survey/update-survey.component */ "z6T5");
/* harmony import */ var _components_update_card_sorting_update_card_sorting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/update-card-sorting/update-card-sorting.component */ "bxyd");
/* harmony import */ var _components_update_tree_test_update_tree_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/update-tree-test/update-tree-test.component */ "o9zs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class UpdateTasksModule {
}
UpdateTasksModule.ɵfac = function UpdateTasksModule_Factory(t) { return new (t || UpdateTasksModule)(); };
UpdateTasksModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: UpdateTasksModule });
UpdateTasksModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _update_task_routing_module__WEBPACK_IMPORTED_MODULE_2__["UpdateTasksRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](UpdateTasksModule, { declarations: [_update_task_component__WEBPACK_IMPORTED_MODULE_3__["UpdateTaskComponent"], _components_update_survey_update_survey_component__WEBPACK_IMPORTED_MODULE_4__["UpdateSurveyComponent"], _components_update_card_sorting_update_card_sorting_component__WEBPACK_IMPORTED_MODULE_5__["UpdateCardSortingComponent"], _components_update_tree_test_update_tree_test_component__WEBPACK_IMPORTED_MODULE_6__["UpdateTreeTestComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _update_task_routing_module__WEBPACK_IMPORTED_MODULE_2__["UpdateTasksRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "bxyd":
/*!***************************************************************************************************!*\
  !*** ./src/app/tasks/update-task/components/update-card-sorting/update-card-sorting.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: UpdateCardSortingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCardSortingComponent", function() { return UpdateCardSortingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UpdateCardSortingComponent {
    constructor() { }
    ngOnInit() {
    }
}
UpdateCardSortingComponent.ɵfac = function UpdateCardSortingComponent_Factory(t) { return new (t || UpdateCardSortingComponent)(); };
UpdateCardSortingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateCardSortingComponent, selectors: [["app-update-card-sorting"]], decls: 2, vars: 0, template: function UpdateCardSortingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "update-card-sorting works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtY2FyZC1zb3J0aW5nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "o9zs":
/*!*********************************************************************************************!*\
  !*** ./src/app/tasks/update-task/components/update-tree-test/update-tree-test.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: UpdateTreeTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTreeTestComponent", function() { return UpdateTreeTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UpdateTreeTestComponent {
    constructor() { }
    ngOnInit() {
    }
}
UpdateTreeTestComponent.ɵfac = function UpdateTreeTestComponent_Factory(t) { return new (t || UpdateTreeTestComponent)(); };
UpdateTreeTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateTreeTestComponent, selectors: [["app-update-tree-test"]], decls: 2, vars: 0, template: function UpdateTreeTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "update-tree-test works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtdHJlZS10ZXN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "z6T5":
/*!***************************************************************************************!*\
  !*** ./src/app/tasks/update-task/components/update-survey/update-survey.component.ts ***!
  \***************************************************************************************/
/*! exports provided: UpdateSurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSurveyComponent", function() { return UpdateSurveyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function UpdateSurveyComponent_div_4_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "options" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "options" + i_r2);
} }
function UpdateSurveyComponent_div_4_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Allow user to choose multiple answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "multipleChoice" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "multipleChoice" + i_r2);
} }
function UpdateSurveyComponent_div_4_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tags are unique answers your question, users will only be able to pick one");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "tags" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "tags" + i_r2);
} }
function UpdateSurveyComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateSurveyComponent_div_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const i_r2 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.deleteQuestion(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UpdateSurveyComponent_div_4_div_9_Template, 4, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UpdateSurveyComponent_div_4_div_10_Template, 4, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UpdateSurveyComponent_div_4_div_11_Template, 6, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Question ", i_r2 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "question" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "question" + i_r2)("formControlName", "question")("id", "question" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r1.value.options == null ? null : item_r1.value.options.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.value.multipleChoice !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r1.value.tags == null ? null : item_r1.value.tags.length) > 0);
} }
class UpdateSurveyComponent {
    constructor(fb, store) {
        this.fb = fb;
        this.store = store;
        this.updateSurvey = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.updateForm();
    }
    updateForm() {
        this.newSurveyForm = this.fb.group({
            questions: this.fb.array(this.currentQuestions())
        });
    }
    addQuestion(type) {
        switch (type) {
            case 'options':
                this.surveryQuestions.push(this.newOptionsQuestion());
                break;
            case 'likert':
                this.surveryQuestions.push(this.newLikertScaleQuestion());
                break;
        }
    }
    deleteQuestion(i) {
        this.surveryQuestions.removeAt(i);
    }
    currentQuestions() {
        return this.task.questions.map(({ question, type, options, multipleChoice, tags }) => {
            return this.fb.group({
                question: [question, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                type: [type],
                options: [options, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                tags: [tags, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                multipleChoice: [multipleChoice],
            });
        });
    }
    newOptionsQuestion() {
        return this.fb.group({
            question: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            type: ["options"],
            options: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            multipleChoice: [false],
        });
    }
    newLikertScaleQuestion() {
        return this.fb.group({
            question: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            type: ["likert"],
            tags: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    onSubmit() {
        this.updateSurvey.emit(this.newSurveyForm.value);
    }
    get surveryQuestions() {
        return this.newSurveyForm.get('questions');
    }
}
UpdateSurveyComponent.ɵfac = function UpdateSurveyComponent_Factory(t) { return new (t || UpdateSurveyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
UpdateSurveyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateSurveyComponent, selectors: [["app-update-survey"]], inputs: { task: "task" }, outputs: { updateSurvey: "updateSurvey" }, decls: 12, vars: 2, consts: [[1, "[", "heading__secondary", "]"], [1, "[", "p-14", "my-8", "]", "[", "bg-background", "]", "[", "rounded-lg", "shadow-2xl", "]", 3, "formGroup", "ngSubmit"], ["formArrayName", "questions"], ["class", "[ mb-16 ]", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "[", "grid", "grid-cols-2", "mt-10", "]"], [1, "[", "btn__primary-light", "]", "[", "mx-2", "]", 3, "click"], ["type", "submit", 1, "[", "btn__primary-color", "w-full", "my-10", "]", 3, "click"], [1, "[", "mb-16", "]", 3, "formGroupName"], [1, "[", "font-bold", "text-xl", "]"], [1, "[", "float-right", "-mt-6", "]", "[", "underline", "]", 3, "click"], [1, "[", "my-4", "]"], [1, "[", "hidden", "]", 3, "for"], ["type", "text", "placeholder", "Write your question", "required", "", 1, "[", "input__primary", "]", 3, "name", "formControlName", "id"], ["class", "[ my-4 ]", 4, "ngIf"], [3, "for"], ["type", "text", "placeholder", "Type the options separated by commas", "required", "", "name", "options", "formControlName", "options", 1, "[", "input__primary", "]", 3, "id"], ["type", "checkbox", "name", "multipleChoice", "formControlName", "multipleChoice", 3, "id"], [1, "[", "ml-3", "]", 3, "for"], ["type", "text", "placeholder", "Type the tags separated by commas", "required", "", "name", "tags", "formControlName", "tags", 1, "[", "input__primary", "]", 3, "id"]], template: function UpdateSurveyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Survey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdateSurveyComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UpdateSurveyComponent_div_4_Template, 12, 9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateSurveyComponent_Template_button_click_6_listener() { return ctx.addQuestion("options"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add options question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateSurveyComponent_Template_button_click_8_listener() { return ctx.addQuestion("likert"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add likert scale questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateSurveyComponent_Template_button_click_10_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Update Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newSurveyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.surveryQuestions.controls);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtc3VydmV5LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=tasks-update-task-update-task-module.js.map