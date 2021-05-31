(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tasks-complete-task-complete-task-module"],{

/***/ "68ST":
/*!****************************************************************!*\
  !*** ./src/app/tasks/complete-task/complete-task.component.ts ***!
  \****************************************************************/
/*! exports provided: CompleteTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteTaskComponent", function() { return CompleteTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_complete_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/complete-task.service */ "qj14");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_complete_survey_complete_survey_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/complete-survey/complete-survey.component */ "PerW");
/* harmony import */ var _components_complete_tree_test_complete_tree_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/complete-tree-test/complete-tree-test.component */ "6ZD1");
/* harmony import */ var _components_complete_card_sorting_complete_card_sorting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/complete-card-sorting/complete-card-sorting.component */ "wtyO");







function CompleteTaskComponent_div_0_app_complete_survey_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-complete-survey", 4);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", ctx_r2.task);
} }
function CompleteTaskComponent_div_0_app_complete_tree_test_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-complete-tree-test", 4);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", ctx_r3.task);
} }
function CompleteTaskComponent_div_0_app_complete_card_sorting_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-complete-card-sorting", 4);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", ctx_r4.task);
} }
function CompleteTaskComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CompleteTaskComponent_div_0_app_complete_survey_1_Template, 1, 1, "app-complete-survey", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CompleteTaskComponent_div_0_app_complete_tree_test_2_Template, 1, 1, "app-complete-tree-test", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CompleteTaskComponent_div_0_app_complete_card_sorting_3_Template, 1, 1, "app-complete-card-sorting", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.task == null ? null : ctx_r0.task.type) === "Survey");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.task == null ? null : ctx_r0.task.type) === "Tree test");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.task == null ? null : ctx_r0.task.type) === "Card sorting");
} }
function CompleteTaskComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sorry,");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "This task is no longer accepting responses.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Thanks for your time :)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CompleteTaskComponent {
    constructor(taskService, route) {
        this.taskService = taskService;
        this.route = route;
        this.isActive = true;
        this.task_id = this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.getTask();
    }
    getTask() {
        this.taskService.getTask(this.task_id).subscribe(res => { this.task = res, this.checkTaskIsActive(); });
    }
    checkTaskIsActive() {
        const responses = this.task.responses.length;
        this.isActive = responses < this.task.usersRequired;
    }
}
CompleteTaskComponent.ɵfac = function CompleteTaskComponent_Factory(t) { return new (t || CompleteTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_complete_task_service__WEBPACK_IMPORTED_MODULE_1__["CompleteTaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
CompleteTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompleteTaskComponent, selectors: [["app-complete-task"]], decls: 2, vars: 2, consts: [["class", "[ mt-12 ]", 4, "ngIf"], ["class", "[ overlay__white ]", 4, "ngIf"], [1, "[", "mt-12", "]"], [3, "task", 4, "ngIf"], [3, "task"], [1, "[", "overlay__white", "]"], [1, "[", "flex", "flex-col", "items-center", "]"], [1, "[", "text-5xl", "font-bold", "]"], [1, "[", "text-4xl", "font-bold", "]"], [1, "[", "text-2xl", "font-bold", "]"]], template: function CompleteTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CompleteTaskComponent_div_0_Template, 4, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CompleteTaskComponent_div_1_Template, 8, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isActive);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_complete_survey_complete_survey_component__WEBPACK_IMPORTED_MODULE_4__["CompleteSurveyComponent"], _components_complete_tree_test_complete_tree_test_component__WEBPACK_IMPORTED_MODULE_5__["CompleteTreeTestComponent"], _components_complete_card_sorting_complete_card_sorting_component__WEBPACK_IMPORTED_MODULE_6__["CompleteCardSortingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGV0ZS10YXNrLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "6ZD1":
/*!***************************************************************************************************!*\
  !*** ./src/app/tasks/complete-task/components/complete-tree-test/complete-tree-test.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: CompleteTreeTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteTreeTestComponent", function() { return CompleteTreeTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_complete_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/complete-task.service */ "qj14");
/* harmony import */ var src_app_shared_services_completed_task_user_store_service_copy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/completed-task-user-store.service copy */ "dJ9k");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CompleteTreeTestComponent_div_5_div_6_div_6_div_6_div_6_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompleteTreeTestComponent_div_5_div_6_div_6_div_6_div_6_div_6_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r19.selectItem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level5_r17 = ctx.$implicit;
    const taskIndex_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", level5_r17.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](level5_r17.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", taskIndex_r3);
} }
function CompleteTreeTestComponent_div_5_div_6_div_6_div_6_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompleteTreeTestComponent_div_5_div_6_div_6_div_6_div_6_Template_div_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r22.changeChildrenDisplay($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompleteTreeTestComponent_div_5_div_6_div_6_div_6_div_6_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r24.selectItem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CompleteTreeTestComponent_div_5_div_6_div_6_div_6_div_6_div_6_Template, 6, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level4_r14 = ctx.$implicit;
    const taskIndex_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", level4_r14.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", level4_r14.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", taskIndex_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, level4_r14.value));
} }
function CompleteTreeTestComponent_div_5_div_6_div_6_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompleteTreeTestComponent_div_5_div_6_div_6_div_6_Template_div_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r26.changeChildrenDisplay($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompleteTreeTestComponent_div_5_div_6_div_6_div_6_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r28.selectItem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CompleteTreeTestComponent_div_5_div_6_div_6_div_6_div_6_Template, 8, 6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level3_r11 = ctx.$implicit;
    const taskIndex_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", level3_r11.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](level3_r11.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", taskIndex_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, level3_r11.value));
} }
function CompleteTreeTestComponent_div_5_div_6_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompleteTreeTestComponent_div_5_div_6_div_6_Template_div_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r30.changeChildrenDisplay($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompleteTreeTestComponent_div_5_div_6_div_6_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r32.selectItem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CompleteTreeTestComponent_div_5_div_6_div_6_div_6_Template, 8, 6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level2_r8 = ctx.$implicit;
    const taskIndex_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", level2_r8.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](level2_r8.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", taskIndex_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, level2_r8.value));
} }
function CompleteTreeTestComponent_div_5_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompleteTreeTestComponent_div_5_div_6_Template_div_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.changeChildrenDisplay($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompleteTreeTestComponent_div_5_div_6_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.selectItem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CompleteTreeTestComponent_div_5_div_6_div_6_Template, 8, 6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level1_r5 = ctx.$implicit;
    const taskIndex_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", level1_r5.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](level1_r5.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", taskIndex_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, level1_r5.value));
} }
function CompleteTreeTestComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Click on a category name to see the items inside.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CompleteTreeTestComponent_div_5_div_6_Template, 8, 6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const taskIndex_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", taskIndex_r3 + 1, ". ", item_r2.task, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, ctx_r0.task.headings));
} }
function CompleteTreeTestComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Submiting your answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompleteTreeTestComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your answers have been submited");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Thanks for participating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompleteTreeTestComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CompleteTreeTestComponent_div_8_div_1_Template, 7, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CompleteTreeTestComponent_div_8_div_2_Template, 7, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.taskPosting && !ctx_r1.taskCompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.taskCompleted);
} }
class CompleteTreeTestComponent {
    constructor(completeTaskService, completedTaskStore) {
        this.completeTaskService = completeTaskService;
        this.completedTaskStore = completedTaskStore;
        this.response = {};
        this.taskCompleted = false;
        this.taskPosting = false;
    }
    ngOnInit() {
        this.taskCompleted = this.completedTaskStore.hasCompletedTask();
        console.log('this.taskCompleted:', this.taskCompleted);
    }
    changeChildrenDisplay(e) {
        let parent = e.target.parentElement.parentElement;
        parent.classList.toggle("hideChildren");
    }
    selectItem(e) {
        const taskId = +e.target.id + 1;
        this.removeSelected();
        let parent = e.target.parentElement.parentElement;
        e.target.parentElement.classList.add("selected");
        const path = [];
        while (parent.id != "headings") {
            path.push(parent.id);
            parent = parent.parentElement;
        }
        this.response[taskId] = path.reverse();
    }
    removeSelected() {
        var _a;
        let selected = document.querySelector(".selected");
        (_a = selected === null || selected === void 0 ? void 0 : selected.classList) === null || _a === void 0 ? void 0 : _a.remove("selected");
    }
    onSubmit() {
        this.taskPosting = true;
        this.completeTaskService.postResponse(this.task._id, this.response).subscribe(res => {
            this.taskCompleted = true;
            this.completedTaskStore.completeTask(this.task._id);
        });
    }
}
CompleteTreeTestComponent.ɵfac = function CompleteTreeTestComponent_Factory(t) { return new (t || CompleteTreeTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_complete_task_service__WEBPACK_IMPORTED_MODULE_1__["CompleteTaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_completed_task_user_store_service_copy__WEBPACK_IMPORTED_MODULE_2__["CompletedTaskUserStoreService"])); };
CompleteTreeTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompleteTreeTestComponent, selectors: [["app-complete-tree-test"]], inputs: { task: "task" }, decls: 9, vars: 3, consts: [[1, "[", "p-14", "mt-8", "mb-48", "]", "[", "bg-background", "]", "[", "rounded-lg", "shadow-2xl", "]"], [1, "[", "heading__secondary", "]"], [1, "[", "pb-8", "]"], [4, "ngFor", "ngForOf"], [1, "[", "btn", "gradient-bg", "w-full", "]", "[", "text-xl", "font-extrabold", "text-white", "]", 3, "click"], ["class", "[ overlay__white ]", 4, "ngIf"], ["id", "headings", 1, "[", "my-12", "]"], ["class", "[ level hideChildren ][ border-t border-primary mt-1 cursor-pointer ]", 3, "id", 4, "ngFor", "ngForOf"], [1, "[", "level", "hideChildren", "][", "border-t", "border-primary", "mt-1", "cursor-pointer", "]", 3, "id"], [1, "[", "tt__item", "]"], [1, "[", "tt__heading", "]", 3, "click"], [1, "[", "underlined", "color-contrast", "]", 3, "id", "click"], ["class", "[ level hideChildren ][ ml-8 ]", 3, "id", 4, "ngFor", "ngForOf"], [1, "[", "level", "hideChildren", "][", "ml-8", "]", 3, "id"], ["class", "[ level hideChildren ][ ml-16 ]", 3, "id", 4, "ngFor", "ngForOf"], [1, "[", "level", "hideChildren", "][", "ml-16", "]", 3, "id"], ["class", "[ level hideChildren ][ ml-24 ]", 3, "id", 4, "ngFor", "ngForOf"], [1, "[", "level", "hideChildren", "][", "ml-24", "]", 3, "id"], ["class", "[ ml-32 ]", 3, "id", 4, "ngFor", "ngForOf"], [1, "[", "ml-32", "]", 3, "id"], [1, "[", "tt__heading", "]"], [1, "[", "overlay__white", "]"], ["class", "[ flex flex-col items-center ]", 4, "ngIf"], [1, "[", "flex", "flex-col", "items-center", "]"], [1, "lds-facebook"], [1, "[", "text-4xl", "font-bold", "]"], [1, "[", "text-6xl", "font-bold", "text-green-400", "]"]], template: function CompleteTreeTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Instructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CompleteTreeTestComponent_div_5_Template, 8, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompleteTreeTestComponent_Template_button_click_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Submit my answers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CompleteTreeTestComponent_div_8_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.task.instructions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.task.tasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.taskPosting || ctx.taskCompleted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"]], styles: [".tt__heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  margin-left: 0.5rem\n}\n\n.tt__item[_ngcontent-%COMP%]  {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n  --tw-border-opacity: 1;\n  border-color: rgba(254, 152, 115, var(--tw-border-opacity));\n  border-width: 1px;\n  border-top-width: 0px;\n  display: flex;\n  padding: 0.75rem;\n  text-transform: capitalize\n}\n\n.hideChildren[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]{\n  display: none;\n}\n\n.hideChildren[_ngcontent-%COMP%]    > .tt__item[_ngcontent-%COMP%]{\n  display: flex;\n}\n\n.selected[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1;\n  border-color: rgba(254, 152, 115, var(--tw-border-opacity));\n  border-width: 8px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXRlLXRyZWUtdGVzdC5jb21wb25lbnQuY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RhaWx3aW5kY3NzL2xpYi9saWIvc3Vic3RpdHV0ZUNsYXNzQXBwbHlBdFJ1bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VDRUEsYUFBbUI7RUFBbkIsbUJBQW1CO0VBQW5CLFlBQW1CO0VBQW5CLGtCQUFtQjtFQUFuQixvQkFBbUI7RUFBbkI7QURBQTs7QUFFQTtFQ0ZBLGtCQUFtQjtFQUFuQiwyREFBbUI7RUFBbkIsc0JBQW1CO0VBQW5CLDJEQUFtQjtFQUFuQixpQkFBbUI7RUFBbkIscUJBQW1CO0VBQW5CLGFBQW1CO0VBQW5CLGdCQUFtQjtFQUFuQjtBRElBOztBQUVBO0VBQ0ksYUFBYTtBQUNqQjs7QUFFQTtFQUNJLGFBQWE7QUFDakI7O0FBRUE7RUNkQSxzQkFBbUI7RUFBbkIsMkRBQW1CO0VBQW5CO0FEZ0JBIiwiZmlsZSI6ImNvbXBsZXRlLXRyZWUtdGVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR0X19oZWFkaW5nIHsgXHJcbiAgICBAYXBwbHkgZmxleCBmbGV4LWdyb3cgaXRlbXMtY2VudGVyIG1sLTIgdGV4dC14bFxyXG59IFxyXG5cclxuLnR0X19pdGVtICB7XHJcbiAgICBAYXBwbHkgZmxleCBwLTMgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IGJvcmRlci10LTAgY2FwaXRhbGl6ZSBcclxufVxyXG5cclxuLmhpZGVDaGlsZHJlbiA+ICp7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uaGlkZUNoaWxkcmVuID4gLnR0X19pdGVte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnNlbGVjdGVkIHtcclxuICAgIEBhcHBseSBib3JkZXItOCBib3JkZXItcHJpbWFyeVxyXG59IiwiQHRhaWx3aW5kIGJhc2U7XG5AdGFpbHdpbmQgY29tcG9uZW50cztcbkB0YWlsd2luZCB1dGlsaXRpZXM7Il19 */"] });


/***/ }),

/***/ "85Ch":
/*!*************************************************************!*\
  !*** ./src/app/tasks/complete-task/complete-task.module.ts ***!
  \*************************************************************/
/*! exports provided: CompleteTaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteTaskModule", function() { return CompleteTaskModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_complete_survey_complete_survey_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/complete-survey/complete-survey.component */ "PerW");
/* harmony import */ var _components_complete_tree_test_complete_tree_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/complete-tree-test/complete-tree-test.component */ "6ZD1");
/* harmony import */ var _components_complete_card_sorting_complete_card_sorting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/complete-card-sorting/complete-card-sorting.component */ "wtyO");
/* harmony import */ var _complete_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./complete-task.component */ "68ST");
/* harmony import */ var _complete_task_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./complete-task-routing.module */ "N3Dg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class CompleteTaskModule {
}
CompleteTaskModule.ɵfac = function CompleteTaskModule_Factory(t) { return new (t || CompleteTaskModule)(); };
CompleteTaskModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CompleteTaskModule });
CompleteTaskModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _complete_task_routing_module__WEBPACK_IMPORTED_MODULE_5__["CompleteTaskRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CompleteTaskModule, { declarations: [_components_complete_survey_complete_survey_component__WEBPACK_IMPORTED_MODULE_1__["CompleteSurveyComponent"], _components_complete_tree_test_complete_tree_test_component__WEBPACK_IMPORTED_MODULE_2__["CompleteTreeTestComponent"], _components_complete_card_sorting_complete_card_sorting_component__WEBPACK_IMPORTED_MODULE_3__["CompleteCardSortingComponent"], _complete_task_component__WEBPACK_IMPORTED_MODULE_4__["CompleteTaskComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _complete_task_routing_module__WEBPACK_IMPORTED_MODULE_5__["CompleteTaskRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "N3Dg":
/*!*********************************************************************!*\
  !*** ./src/app/tasks/complete-task/complete-task-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: CompleteTaskRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteTaskRoutingModule", function() { return CompleteTaskRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _complete_task_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complete-task.component */ "68ST");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _complete_task_component__WEBPACK_IMPORTED_MODULE_1__["CompleteTaskComponent"] },
];
class CompleteTaskRoutingModule {
}
CompleteTaskRoutingModule.ɵfac = function CompleteTaskRoutingModule_Factory(t) { return new (t || CompleteTaskRoutingModule)(); };
CompleteTaskRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CompleteTaskRoutingModule });
CompleteTaskRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CompleteTaskRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "PerW":
/*!*********************************************************************************************!*\
  !*** ./src/app/tasks/complete-task/components/complete-survey/complete-survey.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CompleteSurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteSurveyComponent", function() { return CompleteSurveyComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_complete_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/complete-task.service */ "qj14");
/* harmony import */ var src_app_shared_services_completed_task_user_store_service_copy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/completed-task-user-store.service copy */ "dJ9k");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CompleteSurveyComponent_div_1_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const optionIndex_r7 = ctx_r11.index;
    const option_r6 = ctx_r11.$implicit;
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", "question" + (i_r3 + 1))("formControlName", "question" + (i_r3 + 1))("id", "option" + (i_r3 + 1) + "." + (optionIndex_r7 + 1))("value", option_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", "option" + (i_r3 + 1) + "." + (optionIndex_r7 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r6);
} }
function CompleteSurveyComponent_div_1_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const optionIndex_r7 = ctx_r12.index;
    const option_r6 = ctx_r12.$implicit;
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", "option" + (optionIndex_r7 + 1))("formControlName", optionIndex_r7)("id", "option" + (i_r3 + 1) + "." + (optionIndex_r7 + 1))("value", option_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", "option" + (i_r3 + 1) + "." + (optionIndex_r7 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r6);
} }
function CompleteSurveyComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CompleteSurveyComponent_div_1_div_3_div_1_Template, 4, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CompleteSurveyComponent_div_1_div_3_div_3_Template, 4, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const question_r2 = ctx_r14.$implicit;
    const i_r3 = ctx_r14.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !question_r2.multipleChoice);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", "question" + (i_r3 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", question_r2.multipleChoice === true);
} }
function CompleteSurveyComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r15 = ctx.$implicit;
    const tagIndex_r16 = ctx.index;
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", "question" + (i_r3 + 1))("formControlName", "question" + (i_r3 + 1))("id", "tag" + (i_r3 + 1) + "." + (tagIndex_r16 + 1))("value", tag_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", "tag" + (i_r3 + 1) + "." + (tagIndex_r16 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tag_r15);
} }
function CompleteSurveyComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CompleteSurveyComponent_div_1_div_3_Template, 4, 3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CompleteSurveyComponent_div_1_div_4_Template, 4, 6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](question_r2.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", question_r2 == null ? null : question_r2.options == null ? null : question_r2.options.split(","));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", question_r2 == null ? null : question_r2.tags == null ? null : question_r2.tags.split(","));
} }
function CompleteSurveyComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Submiting your answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CompleteSurveyComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Your answers have been submited");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Thanks for participating");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CompleteSurveyComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CompleteSurveyComponent_div_4_div_1_Template, 7, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CompleteSurveyComponent_div_4_div_2_Template, 7, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.taskPosting && !ctx_r1.taskCompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.taskCompleted);
} }
class CompleteSurveyComponent {
    constructor(fb, completeTaskService, completedTaskStore) {
        this.fb = fb;
        this.completeTaskService = completeTaskService;
        this.completedTaskStore = completedTaskStore;
    }
    ngOnInit() {
        this.createForm();
        if (this.completedTaskStore.completed.includes(this.task._id))
            this.taskCompleted = true;
    }
    createForm() {
        this.completedTaskForm = this.fb.group(this.createGroup());
    }
    createGroup() {
        let formGroup = {};
        this.task.questions.forEach((question, i) => {
            question.multipleChoice
                ? formGroup[`question${i + 1}`] = this.createOptionsFormGroup(question)
                : formGroup[`question${i + 1}`] = ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]];
        });
        return formGroup;
    }
    createOptionsFormGroup({ options }) {
        let formGroup = {};
        options.split(',').forEach((option, i) => {
            formGroup[i] = [""];
        });
        return this.fb.group(formGroup);
    }
    onSubmit() {
        const response = this.completedTaskForm.value;
        const questions = this.task.questions;
        if (!this.completedTaskForm.valid)
            return;
        this.taskPosting = true;
        for (let value in response) {
            let questionIndex = parseFloat(value.replace(/[a-z]/g, '')) - 1;
            if (typeof response[value] === "object") {
                let optionsArr = questions[questionIndex].options.split(',');
                let checkedBoxesValues = optionsArr.filter((option, i) => { return response[value][i] ? option : false; });
                response[value] = checkedBoxesValues;
            }
            const questionText = questions[questionIndex].question;
            response[questionText] = response[value];
            delete response[value];
        }
        this.completeTaskService.postResponse(this.task._id, response).subscribe(res => {
            this.taskCompleted = true;
            this.completedTaskStore.completeTask(this.task._id);
        });
    }
}
CompleteSurveyComponent.ɵfac = function CompleteSurveyComponent_Factory(t) { return new (t || CompleteSurveyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_complete_task_service__WEBPACK_IMPORTED_MODULE_2__["CompleteTaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_completed_task_user_store_service_copy__WEBPACK_IMPORTED_MODULE_3__["CompletedTaskUserStoreService"])); };
CompleteSurveyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CompleteSurveyComponent, selectors: [["app-complete-survey"]], inputs: { task: "task" }, decls: 5, vars: 3, consts: [["action", "", 1, "[", "px-20", "pt-10", "pb-16", "mb-12", "mt-20", "]", "[", "bg-background", "]", "[", "rounded-lg", "shadow-2xl", "]", 3, "formGroup"], [4, "ngFor", "ngForOf"], [1, "[", "btn", "gradient-bg", "w-full", "]", "[", "text-xl", "font-extrabold", "text-white", "]", 3, "click"], ["class", "[ overlay__white ]", 4, "ngIf"], [1, "[", "mt-8", "]", "[", "text-xl", "font-bold", "]"], [4, "ngIf"], [3, "formGroupName"], ["type", "radio", 3, "name", "formControlName", "id", "value"], [1, "[", "ml-3", "]", 3, "for"], ["type", "checkbox", 3, "name", "formControlName", "id", "value"], [1, "[", "overlay__white", "]"], ["class", "[ flex flex-col items-center ]", 4, "ngIf"], [1, "[", "flex", "flex-col", "items-center", "]"], [1, "lds-facebook"], [1, "[", "text-4xl", "font-bold", "]"], [1, "[", "text-6xl", "font-bold", "text-green-400", "]"]], template: function CompleteSurveyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CompleteSurveyComponent_div_1_Template, 5, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompleteSurveyComponent_Template_button_click_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Submit my answers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CompleteSurveyComponent_div_4_Template, 3, 2, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.completedTaskForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.task.questions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.taskPosting || ctx.taskCompleted);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["CheckboxControlValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGV0ZS1zdXJ2ZXkuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "dJ9k":
/*!***************************************************************************!*\
  !*** ./src/app/shared/services/completed-task-user-store.service copy.ts ***!
  \***************************************************************************/
/*! exports provided: CompletedTaskUserStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedTaskUserStoreService", function() { return CompletedTaskUserStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CompletedTaskUserStoreService {
    constructor() {
        console.log('this.getcompletedFromCookies():', this.getcompletedFromCookies());
        this._completed = this.getcompletedFromCookies() || null;
    }
    set completed(value) {
        this._completed = value;
        document.cookie = `completed=${value}`;
    }
    get completed() {
        return this._completed;
    }
    hasCompletedTask() {
        return this.completed != null;
    }
    completeTask(task) {
        this._completed = task;
        document.cookie = `completed=${task}`;
    }
    getcompletedFromCookies() {
        return document.cookie.replace(/(?:(?:^|.*;\s*)completed\s*\=\s*([^;]*).*$)|^.*$/, "$1") || null;
    }
}
CompletedTaskUserStoreService.ɵfac = function CompletedTaskUserStoreService_Factory(t) { return new (t || CompletedTaskUserStoreService)(); };
CompletedTaskUserStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CompletedTaskUserStoreService, factory: CompletedTaskUserStoreService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "wtyO":
/*!*********************************************************************************************************!*\
  !*** ./src/app/tasks/complete-task/components/complete-card-sorting/complete-card-sorting.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CompleteCardSortingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteCardSortingComponent", function() { return CompleteCardSortingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_complete_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/complete-task.service */ "qj14");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CompleteCardSortingComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragstart", function CompleteCardSortingComponent_div_2_Template_div_dragstart_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onDragStart($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r3, "\n");
} }
function CompleteCardSortingComponent_tr_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function CompleteCardSortingComponent_tr_4_Template_td_dragover_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onDragOver($event); })("drop", function CompleteCardSortingComponent_tr_4_Template_td_drop_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onDrop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r7, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", category_r7);
} }
function CompleteCardSortingComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Submiting your answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompleteCardSortingComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your answers have been submited");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Thanks for participating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompleteCardSortingComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CompleteCardSortingComponent_div_7_div_1_Template, 7, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CompleteCardSortingComponent_div_7_div_2_Template, 7, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.taskPosting && !ctx_r2.taskCompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.taskCompleted);
} }
class CompleteCardSortingComponent {
    constructor(completeTaskService) {
        this.completeTaskService = completeTaskService;
        this.result = {};
    }
    ngOnInit() {
        this.cards = this.task.cards;
        this.categories = this.task.categories;
        this.setCategories();
    }
    setCategories() {
        this.categories.forEach(category => this.result[category] = []);
    }
    onDragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }
    onDragOver(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    onDrop(e) {
        const i = e.dataTransfer.getData('text');
        const draggedCardCopy = this.cards[i];
        const droppedCard = document.createElement('div');
        const category = e.currentTarget;
        const categoryName = category.id;
        if (!draggedCardCopy)
            return;
        e.preventDefault();
        this.result[categoryName].push(draggedCardCopy);
        droppedCard.classList.add('card');
        droppedCard.innerText = draggedCardCopy;
        droppedCard.draggable = true;
        category.insertAdjacentElement('beforeend', droppedCard);
        this.cards.splice(i, 1);
    }
    onSubmit() {
        this.taskPosting = true;
        this.completeTaskService.postResponse(this.task._id, this.result).subscribe(res => {
            this.taskCompleted = true;
        });
    }
}
CompleteCardSortingComponent.ɵfac = function CompleteCardSortingComponent_Factory(t) { return new (t || CompleteCardSortingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_complete_task_service__WEBPACK_IMPORTED_MODULE_1__["CompleteTaskService"])); };
CompleteCardSortingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompleteCardSortingComponent, selectors: [["app-complete-card-sorting"]], inputs: { task: "task" }, decls: 8, vars: 4, consts: [[1, "[", "my-6", "]"], ["class", "[ flex ] [ card ] [ cursor-pointer ]", "draggable", "true", 3, "id", "dragstart", 4, "ngFor", "ngForOf"], [1, "[", "w-full", "mt-6", "]", "[", "bg-background", "]"], [4, "ngFor", "ngForOf"], [1, "[", "btn", "gradient-bg", "w-full", "my-12", "px-8", "]", "[", "text-xl", "font-extrabold", "text-text", "]", 3, "click"], ["class", "[ overlay__white ]", 4, "ngIf"], ["draggable", "true", 1, "[", "flex", "]", "[", "card", "]", "[", "cursor-pointer", "]", 3, "id", "dragstart"], [1, "[", "h-48", "p-3", "]", "[", "bg-primary", "]", "[", "border-4", "border-white", "border-b-0", "]"], [1, "[", "w-4/5", "]", "[", "align-top", "]", "[", "border-4", "border-white", "border-t", "]", 3, "id", "dragover", "drop"], [1, "[", "drag", "]"], [1, "[", "overlay__white", "]"], ["class", "[ flex flex-col items-center ]", 4, "ngIf"], [1, "[", "flex", "flex-col", "items-center", "]"], [1, "lds-facebook"], [1, "[", "text-4xl", "font-bold", "]"], [1, "[", "text-6xl", "font-bold", "text-green-400", "]"]], template: function CompleteCardSortingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CompleteCardSortingComponent_div_2_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CompleteCardSortingComponent_tr_4_Template, 5, 2, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompleteCardSortingComponent_Template_button_click_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Submit my answers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CompleteCardSortingComponent_div_7_Template, 3, 2, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.task.instructions, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.task.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.task.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.taskPosting || ctx.taskCompleted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["button[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXRlLWNhcmQtc29ydGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJjb21wbGV0ZS1jYXJkLXNvcnRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=tasks-complete-task-complete-task-module.js.map