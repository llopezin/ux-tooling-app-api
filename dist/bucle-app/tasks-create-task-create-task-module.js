(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tasks-create-task-create-task-module"],{

/***/ "2QuC":
/*!*****************************************************************!*\
  !*** ./src/app/tasks/create-task/create-task-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TasksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksRoutingModule", function() { return TasksRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _create_task_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-task.component */ "YG08");
/* harmony import */ var src_app_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/guards/auth-guard.service */ "ZIhg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', component: _create_task_component__WEBPACK_IMPORTED_MODULE_1__["CreateTaskComponent"], canActivate: [src_app_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]] },
];
class TasksRoutingModule {
}
TasksRoutingModule.ɵfac = function TasksRoutingModule_Factory(t) { return new (t || TasksRoutingModule)(); };
TasksRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TasksRoutingModule });
TasksRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TasksRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "AvYb":
/*!***************************************************************************************************!*\
  !*** ./src/app/tasks/create-task/components/create-card-sorting/create-card-sorting.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: CreateCardSortingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCardSortingComponent", function() { return CreateCardSortingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CreateCardSortingComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateCardSortingComponent_div_9_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.deleteCategory(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r3);
} }
function CreateCardSortingComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateCardSortingComponent_div_9_div_1_Template, 5, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.categories);
} }
function CreateCardSortingComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateCardSortingComponent_div_20_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.deleteCard(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r8);
} }
function CreateCardSortingComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateCardSortingComponent_div_20_div_1_Template, 5, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.cards);
} }
class CreateCardSortingComponent {
    constructor(fb, store) {
        this.fb = fb;
        this.store = store;
        this.categories = [];
        this.cards = [];
        this.instructionsCopy = "Please, assign the following cards to the category you believe they should belong to";
        this.createCardSorting = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.newCardSortingForm = this.fb.group({
            instructions: [this.instructionsCopy, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            category: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            card: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    addCategory() {
        let category = this.newCardSortingForm.value.category;
        if (!category)
            return;
        this.categories.push(category);
        this.newCardSortingForm.patchValue({ category: "" });
    }
    addCard() {
        let card = this.newCardSortingForm.value.card;
        if (!card)
            return;
        this.cards.push(card);
        this.newCardSortingForm.patchValue({ card: "" });
    }
    onSubmit() {
        let instructions = this.newCardSortingForm.get('instructions').value;
        let { categories, cards } = this;
        if (!categories || !cards)
            return;
        this.createCardSorting.emit({ categories, cards, instructions });
    }
    deleteCategory(i) {
        this.categories.splice(i, 1);
    }
    deleteCard(i) {
        this.cards.splice(i, 1);
    }
}
CreateCardSortingComponent.ɵfac = function CreateCardSortingComponent_Factory(t) { return new (t || CreateCardSortingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
CreateCardSortingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateCardSortingComponent, selectors: [["app-create-card-sorting"]], outputs: { createCardSorting: "createCardSorting" }, decls: 31, vars: 6, consts: [[1, "[", "p-14", "my-8", "]", "[", "bg-background", "]", "[", "rounded-lg", "shadow-2xl", "]", 3, "formGroup"], [1, "[", "font-bold", "my-2", "]"], ["for", "instructions", 1, "[", "hidden", "]"], ["cols", "30", "rows", "4", "required", "", "name", "instructions", "id", "instructions", 1, "[", "input__primary", "]", 3, "formControlName"], ["class", "[ m-8 ]  [ border border-b-0 border-primary ]", 4, "ngIf"], [1, "[", "flex", "mb-8", "mt-5]"], [1, "[", "flex-grow", "]"], ["for", "category", 1, "[", "hidden", "]"], ["type", "text", "placeholder", "Write your category name", "required", "", "name", "category", "id", "category", 1, "[", "input__primary", "]", 3, "formControlName"], [1, "[", "btn__primary-light", "]", "[", "mx-2", "]", 3, "click"], ["class", "[ flex m-5 flex-wrap ]", 4, "ngIf"], [1, "[", "flex", "]"], ["for", "card", 1, "[", "hidden", "]"], ["type", "text", "placeholder", "Write card name", "required", "", "name", "card", "id", "card", 1, "[", "input__primary", "]", 3, "formControlName", "keyup.enter"], [1, "[", "btn__primary-light", "]", "[", "mx-3", "]", 3, "click"], ["type", "submit", 1, "[", "btn__primary-color", "w-full", "my-10", "]", 3, "click"], [1, "[", "m-8", "]", "[", "border", "border-b-0", "border-primary", "]"], ["class", "[ flex justify-between p-3 ] [ bg-white ] [ border-b border-primary  ]", 4, "ngFor", "ngForOf"], [1, "[", "flex", "justify-between", "p-3", "]", "[", "bg-white", "]", "[", "border-b", "border-primary", "]"], [1, "[", "underline", "]", 3, "click"], [1, "[", "flex", "m-5", "flex-wrap", "]"], ["class", "[ lozenge ] [ flex justify-between flex-wrap p-2 mx-2 mb-2 ] [ bg-white ]", 4, "ngFor", "ngForOf"], [1, "[", "lozenge", "]", "[", "flex", "justify-between", "flex-wrap", "p-2", "mx-2", "mb-2", "]", "[", "bg-white", "]"], [1, "[", "ml-2", "]", "[", "font-bold", "text-contrast", "]", 3, "click"]], template: function CreateCardSortingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Intructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "instructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Task categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CreateCardSortingComponent_div_9_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateCardSortingComponent_Template_button_click_16_listener() { return ctx.addCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Add category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CreateCardSortingComponent_div_20_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function CreateCardSortingComponent_Template_input_keyup_enter_25_listener() { return ctx.addCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateCardSortingComponent_Template_button_click_27_listener() { return ctx.addCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Add card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateCardSortingComponent_Template_button_click_29_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Create Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newCardSortingForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "instructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.categories.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cards.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "card");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtY2FyZC1zb3J0aW5nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "YG08":
/*!************************************************************!*\
  !*** ./src/app/tasks/create-task/create-task.component.ts ***!
  \************************************************************/
/*! exports provided: CreateTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTaskComponent", function() { return CreateTaskComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_store_workspace_store_workspace_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/store/workspace-store/workspace.actions */ "YQew");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/create-survey/create-survey.component */ "cO9i");
/* harmony import */ var _components_create_card_sorting_create_card_sorting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/create-card-sorting/create-card-sorting.component */ "AvYb");
/* harmony import */ var _components_create_tree_test_create_tree_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/create-tree-test/create-tree-test.component */ "cTrx");










function CreateTaskComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateTaskComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CreateTaskComponent_div_8_div_1_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.newTaskForm.get("name").errors == null ? null : ctx_r0.newTaskForm.get("name").errors.required);
} }
function CreateTaskComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "At least one user is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateTaskComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CreateTaskComponent_div_13_div_1_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.newTaskForm.get("usersRequired").errors == null ? null : ctx_r1.newTaskForm.get("usersRequired").errors.min);
} }
function CreateTaskComponent_button_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Create Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateTaskComponent_app_create_survey_26_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-create-survey", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("createSurvey", function CreateTaskComponent_app_create_survey_26_Template_app_create_survey_createSurvey_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.createSurvey($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateTaskComponent_app_create_card_sorting_27_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-create-card-sorting", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("createCardSorting", function CreateTaskComponent_app_create_card_sorting_27_Template_app_create_card_sorting_createCardSorting_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.createCardSorting($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateTaskComponent_app_create_tree_test_28_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-create-tree-test", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("createTreetest", function CreateTaskComponent_app_create_tree_test_28_Template_app_create_tree_test_createTreetest_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.createTreetest($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateTaskComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Creating Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateTaskComponent_div_29_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Task created");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateTaskComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CreateTaskComponent_div_29_div_1_Template, 7, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CreateTaskComponent_div_29_div_2_Template, 5, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.taskPosting);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.taskPosted);
} }
class CreateTaskComponent {
    constructor(fb, store, router, route) {
        this.fb = fb;
        this.store = store;
        this.router = router;
        this.route = route;
        this.type = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](' ', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.campaign_id = this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.createForm();
        this.store.select('workspaceApp').subscribe(state => {
            if (state.loading)
                return;
            const workspace = state.workspace;
            const campaingsAreStored = !!(workspace === null || workspace === void 0 ? void 0 : workspace.campaigns);
            if (!workspace) {
                this.store.dispatch(Object(src_app_shared_store_workspace_store_workspace_actions__WEBPACK_IMPORTED_MODULE_1__["getWorkspace"])());
            }
            if (!campaingsAreStored) {
                this.getCamapigns(workspace);
                return;
            }
            if (!this.campaign)
                this.campaign = this.findCampaign(state);
            if (this.currentTaskIsPosted(state))
                this.onTaskPosted();
        });
    }
    getCamapigns(workspace) {
        this.store.dispatch(Object(src_app_shared_store_workspace_store_workspace_actions__WEBPACK_IMPORTED_MODULE_1__["getCampaigns"])({ campaign_ids: workspace.campaign_ids }));
    }
    onTaskPosted() {
        this.taskPosting = false;
        this.taskPosted = true;
        this.navigateToCampaign();
    }
    createForm() {
        this.newTaskForm = this.fb.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            usersRequired: [5, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1)]],
            type: this.type,
        });
    }
    createSurvey({ questions }) {
        this.task = Object.assign(Object.assign({}, this.newTaskForm.value), { questions, responses: [] });
        this.sendTask();
    }
    createCardSorting({ instructions, cards, categories }) {
        this.task = Object.assign(Object.assign({}, this.newTaskForm.value), { instructions, cards, categories, responses: [] });
        this.sendTask();
    }
    createTreetest({ instructions, tasks, headings }) {
        this.task = Object.assign(Object.assign({}, this.newTaskForm.value), { instructions, tasks, headings, responses: [] });
        this.sendTask();
    }
    sendTask() {
        this.store.dispatch(Object(src_app_shared_store_workspace_store_workspace_actions__WEBPACK_IMPORTED_MODULE_1__["addTask"])({ task: this.task, campaign_id: this.campaign_id }));
        this.taskPosting = true;
    }
    findCampaign(state) {
        const campaign = state.workspace.campaigns.find(campaign => campaign._id == this.campaign_id);
        return campaign;
    }
    currentTaskIsPosted(state) {
        var _a, _b, _c;
        const storedCampaign = this.findCampaign(state);
        this.campaign.user_task_ids = ((_a = this.campaign) === null || _a === void 0 ? void 0 : _a.user_task_ids) || [];
        const taskIsPosted = storedCampaign.user_task_ids.length > ((_c = (_b = this.campaign) === null || _b === void 0 ? void 0 : _b.user_task_ids) === null || _c === void 0 ? void 0 : _c.length);
        return taskIsPosted;
    }
    navigateToCampaign() {
        this.router.navigate([`campaign/${this.campaign_id}`]);
    }
}
CreateTaskComponent.ɵfac = function CreateTaskComponent_Factory(t) { return new (t || CreateTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
CreateTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateTaskComponent, selectors: [["app-create-task"]], decls: 30, vars: 8, consts: [[1, "[", "max-w-screen-lg", "mx-auto", "pt-8", "]"], [1, "[", "heading__secondary", "]"], [1, "[", "px-14", "pt-6", "pb-10", "my-8", "]", "[", "bg-background", "]", "[", "rounded-lg", "shadow-2xl", "]", 3, "formGroup"], [1, "[", "my-4", "]"], ["for", "task-name"], ["type", "text", "placeholder", "task name", "required", "", "name", "name", "formControlName", "name", "id", "task-name", 1, "[", "input__primary", "]"], [4, "ngIf"], ["for", "task-users"], ["type", "number", "required", "", "name", "usersRequired", "formControlName", "usersRequired", "id", "task-users", 1, "[", "input__primary", "]"], ["for", "task-type"], ["required", "", "name", "type", "formControlName", "type", "id", "task-type", 1, "[", "input__primary", "]"], ["value", "Survey", "selected", ""], ["value", "Tree test"], ["value", "Card sorting"], ["class", "[ btn__primary-color w-full mt-10 ]", 4, "ngIf"], [3, "createSurvey", 4, "ngIf"], [3, "createCardSorting", 4, "ngIf"], [3, "createTreetest", 4, "ngIf"], ["class", "[ overlay__white ]", 4, "ngIf"], [1, "[", "btn__primary-color", "w-full", "mt-10", "]"], [3, "createSurvey"], [3, "createCardSorting"], [3, "createTreetest"], [1, "[", "overlay__white", "]"], ["class", "[ flex flex-col items-center ]", 4, "ngIf"], [1, "[", "flex", "flex-col", "items-center", "]"], [1, "lds-facebook"], [1, "[", "text-4xl", "font-bold", "]"], [1, "[", "text-6xl", "font-bold", "text-green-400", "]"]], template: function CreateTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " New Task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CreateTaskComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Users required");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CreateTaskComponent_div_13_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Survey");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Tree test");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Card sorting");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, CreateTaskComponent_button_24_Template, 2, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, CreateTaskComponent_app_create_survey_26_Template, 1, 0, "app-create-survey", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, CreateTaskComponent_app_create_card_sorting_27_Template, 1, 0, "app-create-card-sorting", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, CreateTaskComponent_app_create_tree_test_28_Template, 1, 0, "app-create-tree-test", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, CreateTaskComponent_div_29_Template, 3, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.newTaskForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.newTaskForm.get("name").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.newTaskForm.get("usersRequired").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.newTaskForm.get("type").value.length === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type.value === "Survey");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type.value === "Card sorting");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type.value === "Tree test");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.taskPosting || ctx.taskPosted);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _components_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_6__["CreateSurveyComponent"], _components_create_card_sorting_create_card_sorting_component__WEBPACK_IMPORTED_MODULE_7__["CreateCardSortingComponent"], _components_create_tree_test_create_tree_test_component__WEBPACK_IMPORTED_MODULE_8__["CreateTreeTestComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtdGFzay5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "cO9i":
/*!***************************************************************************************!*\
  !*** ./src/app/tasks/create-task/components/create-survey/create-survey.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CreateSurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSurveyComponent", function() { return CreateSurveyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CreateSurveyComponent_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "options" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "options" + i_r2);
} }
function CreateSurveyComponent_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 16);
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
function CreateSurveyComponent_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tags are unique answers your question, users will only be able to pick one");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "tags" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "tags" + i_r2);
} }
function CreateSurveyComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateSurveyComponent_div_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const i_r2 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.deleteQuestion(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CreateSurveyComponent_div_2_div_9_Template, 4, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CreateSurveyComponent_div_2_div_10_Template, 4, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CreateSurveyComponent_div_2_div_11_Template, 6, 2, "div", 12);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.value.options !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.value.multipleChoice !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.value.tags !== undefined);
} }
class CreateSurveyComponent {
    constructor(fb, store) {
        this.fb = fb;
        this.store = store;
        this.createSurvey = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.newSurveyForm = this.fb.group({
            questions: this.fb.array([this.newOptionsQuestion()])
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
        if (!this.newSurveyForm.valid)
            return;
        this.createSurvey.emit(this.newSurveyForm.value);
    }
    get surveryQuestions() {
        return this.newSurveyForm.get('questions');
    }
}
CreateSurveyComponent.ɵfac = function CreateSurveyComponent_Factory(t) { return new (t || CreateSurveyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
CreateSurveyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateSurveyComponent, selectors: [["app-create-survey"]], outputs: { createSurvey: "createSurvey" }, decls: 10, vars: 2, consts: [[1, "[", "p-14", "my-8", "]", "[", "bg-background", "]", "[", "rounded-lg", "shadow-2xl", "]", 3, "formGroup", "ngSubmit"], ["formArrayName", "questions"], ["class", "[ mb-16 ]", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "[", "grid", "grid-cols-2", "mt-10", "]"], [1, "[", "btn__primary-light", "]", "[", "mx-2", "]", 3, "click"], ["type", "submit", 1, "[", "btn__primary-color", "w-full", "my-10", "]", 3, "click"], [1, "[", "mb-16", "]", 3, "formGroupName"], [1, "[", "font-bold", "text-xl", "]"], [1, "[", "float-right", "-mt-6", "]", "[", "underline", "]", 3, "click"], [1, "[", "my-4", "]"], [1, "[", "hidden", "]", 3, "for"], ["type", "text", "placeholder", "Write your question", "required", "", 1, "[", "input__primary", "]", 3, "name", "formControlName", "id"], ["class", "[ my-4 ]", 4, "ngIf"], [3, "for"], ["type", "text", "placeholder", "Type the options separated by commas", "required", "", "name", "options", "formControlName", "options", 1, "[", "input__primary", "]", 3, "id"], ["type", "checkbox", "name", "multipleChoice", "formControlName", "multipleChoice", 3, "id"], [1, "[", "ml-3", "]", 3, "for"], ["type", "text", "placeholder", "Type the tags separated by commas", "required", "", "name", "tags", "formControlName", "tags", 1, "[", "input__primary", "]", 3, "id"]], template: function CreateSurveyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateSurveyComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateSurveyComponent_div_2_Template, 12, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateSurveyComponent_Template_button_click_4_listener() { return ctx.addQuestion("options"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add options question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateSurveyComponent_Template_button_click_6_listener() { return ctx.addQuestion("likert"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add likert scale questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateSurveyComponent_Template_button_click_8_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Create Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newSurveyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.surveryQuestions.controls);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtc3VydmV5LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "cTrx":
/*!*********************************************************************************************!*\
  !*** ./src/app/tasks/create-task/components/create-tree-test/create-tree-test.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CreateTreeTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTreeTestComponent", function() { return CreateTreeTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = ["mainInput"];
function CreateTreeTestComponent_div_1_form_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "heading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTreeTestComponent_div_1_form_5_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.add(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.treeTestForm);
} }
function CreateTreeTestComponent_div_1_div_7_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTreeTestComponent_div_1_div_7_button_4_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.addSibling($event, ctx_r12.mainInput); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateTreeTestComponent_div_1_div_7_div_9_div_7_div_7_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTreeTestComponent_div_1_div_7_div_9_div_7_div_7_div_7_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r25.remove($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level5_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", level5_r23.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](level5_r23.key);
} }
function CreateTreeTestComponent_div_1_div_7_div_9_div_7_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTreeTestComponent_div_1_div_7_div_9_div_7_div_7_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r27.addChild($event, ctx_r27.mainInput); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTreeTestComponent_div_1_div_7_div_9_div_7_div_7_Template_button_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r29.remove($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreateTreeTestComponent_div_1_div_7_div_9_div_7_div_7_div_7_Template, 6, 2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level4_r20 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", level4_r20.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](level4_r20.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 3, level4_r20.value, ctx_r19.order));
} }
function CreateTreeTestComponent_div_1_div_7_div_9_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTreeTestComponent_div_1_div_7_div_9_div_7_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r30.addChild($event, ctx_r30.mainInput); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTreeTestComponent_div_1_div_7_div_9_div_7_Template_button_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r32.remove($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreateTreeTestComponent_div_1_div_7_div_9_div_7_div_7_Template, 9, 6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level3_r17 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", level3_r17.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](level3_r17.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 3, level3_r17.value, ctx_r16.order));
} }
function CreateTreeTestComponent_div_1_div_7_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTreeTestComponent_div_1_div_7_div_9_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r33.addChild($event, ctx_r33.mainInput); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTreeTestComponent_div_1_div_7_div_9_Template_button_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r35.remove($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreateTreeTestComponent_div_1_div_7_div_9_div_7_Template, 9, 6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level2_r14 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", level2_r14.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](level2_r14.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 3, level2_r14.value, ctx_r11.order));
} }
function CreateTreeTestComponent_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateTreeTestComponent_div_1_div_7_button_4_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTreeTestComponent_div_1_div_7_Template_button_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.addChild($event, ctx_r36.mainInput); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTreeTestComponent_div_1_div_7_Template_button_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.remove($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CreateTreeTestComponent_div_1_div_7_div_9_Template, 9, 6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level1_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", level1_r8.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](level1_r8.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r9 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r9 === 0 ? "child" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 5, level1_r8.value, ctx_r3.order));
} }
function CreateTreeTestComponent_div_1_div_9_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTreeTestComponent_div_1_div_9_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r42.treeCompleted = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create tree tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateTreeTestComponent_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateTreeTestComponent_div_1_div_9_button_1_Template, 2, 0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r40 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r40 === 0);
} }
function CreateTreeTestComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your tree");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add items to create your tree. Users will navigate through the tree to find an item of your choice.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateTreeTestComponent_div_1_form_5_Template, 8, 1, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreateTreeTestComponent_div_1_div_7_Template, 11, 8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CreateTreeTestComponent_div_1_div_9_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.inputOpened);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 3, ctx_r0.headings, ctx_r0.order));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 6, ctx_r0.headings, ctx_r0.order));
} }
function CreateTreeTestComponent_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r47 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "task" + i_r47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Task ", i_r47 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "task" + i_r47);
} }
function CreateTreeTestComponent_div_2_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTreeTestComponent_div_2_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r48.createTask(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateTreeTestComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tree tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Give your users a set of tasks to complete using your tree. Add some general instructions to set an schenario, this will help your users get into hte mindset a real life situation.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Instructions (optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "textarea", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CreateTreeTestComponent_div_2_div_10_Template, 5, 4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTreeTestComponent_div_2_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.treeCompleted = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Back to tree");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTreeTestComponent_div_2_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.addTask(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "add task");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CreateTreeTestComponent_div_2_button_17_Template, 2, 0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.treeTestTasksForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.treeTasks.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.treeTestTasksForm.valid);
} }
class CreateTreeTestComponent {
    constructor(fb) {
        this.fb = fb;
        this.treeCompleted = false;
        this.headings = {};
        this.inputOpened = true;
        this.createTreetest = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
    }
    ngOnInit() {
        this.createHeadingsForm();
        this.createTasksForm();
    }
    order(a, b) {
        return 1;
    }
    addHeading() {
        let heading = this.treeTestForm.value.heading;
        this.headings.push({ [`${heading}`]: [] });
        this.inputOpened = false;
    }
    createHeadingsForm() {
        this.treeTestForm = this.fb.group({
            heading: [""],
        });
    }
    createTasksForm() {
        this.treeTestTasksForm = this.fb.group({
            instructions: [""],
            tasks: this.fb.array([this.newTask()])
        });
    }
    addTask() {
        this.treeTasks.push(this.newTask());
    }
    newTask() {
        return this.fb.group({
            task: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    addSibling(e, target) {
        this.inputOpened = true;
        let parent = e.target.parentElement.parentElement.parentElement;
        this.findDataParent(parent);
        target === null || target === void 0 ? void 0 : target.nativeElement.scrollIntoView();
        this.mark(e.target.parentElement);
        this.treeTestForm.reset();
    }
    addChild(e, target) {
        this.inputOpened = true;
        let parent = e.target.parentElement.parentElement;
        this.findDataParent(parent);
        target === null || target === void 0 ? void 0 : target.nativeElement.scrollIntoView();
        this.mark(e.target.parentElement);
        this.treeTestForm.reset();
    }
    mark(node) {
        node === null || node === void 0 ? void 0 : node.classList.add("selected");
    }
    unmark() {
        let selected = document.querySelector(".selected");
        selected === null || selected === void 0 ? void 0 : selected.classList.remove("selected");
    }
    remove(e) {
        let parent = e.target.parentElement.parentElement.parentElement;
        let elem = e.target.parentElement.parentElement.id;
        let path = this.findPath(parent);
        let dataParent = this.headings;
        path.forEach(childHeading => {
            dataParent = dataParent[childHeading];
        });
        delete dataParent[elem];
        if (Object.keys(this.headings).length === 0)
            this.reset();
    }
    reset() {
        this.inputOpened = true;
        this.selectedParent = this.headings;
        this.treeTestForm.reset();
    }
    findDataParent(parent) {
        let dataParent = this.headings;
        this.findPath(parent).forEach(childHeading => { dataParent = dataParent[childHeading]; });
        this.selectedParent = dataParent;
    }
    findPath(parent) {
        const path = [];
        while (parent.id != "headings") {
            path.push(parent.id);
            parent = parent.parentElement;
        }
        return path.reverse();
    }
    add() {
        let name = this.treeTestForm.value.heading;
        if (!this.selectedParent)
            this.selectedParent = this.headings;
        this.selectedParent[name] = {};
        this.inputOpened = false;
        this.unmark();
    }
    createTask() {
        this.createTreetest.emit({
            headings: this.headings,
            instructions: this.treeTestTasksForm.value.instructions,
            tasks: this.treeTestTasksForm.value.tasks
        });
    }
    get treeTasks() {
        return this.treeTestTasksForm.get('tasks');
    }
}
CreateTreeTestComponent.ɵfac = function CreateTreeTestComponent_Factory(t) { return new (t || CreateTreeTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
CreateTreeTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateTreeTestComponent, selectors: [["app-create-tree-test"]], viewQuery: function CreateTreeTestComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mainInput = _t.first);
    } }, outputs: { createTreetest: "createTreetest" }, decls: 3, vars: 2, consts: [[1, "[", "p-14", "mt-8", "mb-48", "]", "[", "bg-background", "]", "[", "rounded-lg", "shadow-2xl", "]"], [4, "ngIf"], [1, "[", "heading__secondary", "]", "[", "mb-3", "]"], [1, "[", "mb-8", "]"], [3, "formGroup", 4, "ngIf"], ["id", "headings"], ["class", "[ border-t border-primary mt-1 ]", 3, "id", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [3, "formGroup"], [1, "[", "my-8", "flex", "]"], ["mainInput", ""], ["for", "heading", 1, "[", "hidden", "]"], ["type", "text", "placeholder", "Type tree item", "name", "heading", "formControlName", "heading", "id", "heading", 1, "[", "input__primary", "]"], [1, "[", "btn__primary-color", "mx-3", "]", 3, "click"], [1, "[", "border-t", "border-primary", "mt-1", "]", 3, "id"], [1, "[", "tt__item", "]"], [1, "[", "tt__heading", "]"], ["class", "[ tt__button btn__primary-light ]", 3, "click", 4, "ngIf"], [1, "[", "tt__button", "btn__primary-color", "]", 3, "click"], [1, "[", "tt__button--remove", "]", 3, "click"], ["class", "[ ml-8 ]", 3, "id", 4, "ngFor", "ngForOf"], [1, "[", "tt__button", "btn__primary-light", "]", 3, "click"], [1, "[", "ml-8", "]", 3, "id"], ["title", "add child", 1, "[", "tt__button", "btn__primary-color", "]", 3, "click"], ["class", "[ ml-16 ]", 3, "id", 4, "ngFor", "ngForOf"], [1, "[", "ml-16", "]", 3, "id"], ["class", "[ ml-24 ]", 3, "id", 4, "ngFor", "ngForOf"], [1, "[", "ml-24", "]", 3, "id"], ["class", "[ ml-32 ]", 3, "id", 4, "ngFor", "ngForOf"], [1, "[", "ml-32", "]", 3, "id"], ["class", "[ btn__primary-color w-full mt-10 ]", 3, "click", 4, "ngIf"], [1, "[", "btn__primary-color", "w-full", "mt-10", "]", 3, "click"], [1, "[", "heading__secondary", "]", "[", "mb-3", "mt-4", "]"], ["for", "instructions"], ["id", "instructions", "rows", "3", "name", "instructions", "formControlName", "instructions", 1, "[", "block", "w-full", "]"], ["formArrayName", "tasks"], ["class", "[ mb-16 ]", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "[", "flex", "justify-end", "]"], [1, "[", "btn__primary-light", "back-arrow", "]", 3, "click"], [1, "[", "mb-16", "]", 3, "formGroupName"], [1, "[", "my-8", "]"], [3, "for"], ["type", "text", "placeholder", "Task", "name", "heading", "formControlName", "task", 1, "[", "input__primary", "]", "[", "mb-4", "]", 3, "id"]], template: function CreateTreeTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateTreeTestComponent_div_1_Template, 11, 9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateTreeTestComponent_div_2_Template, 18, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.treeCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.treeCompleted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]], styles: [".tt__heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  margin-left: 0.5rem\n}\n\n.tt__item[_ngcontent-%COMP%]  {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n  --tw-border-opacity: 1;\n  border-color: rgba(254, 152, 115, var(--tw-border-opacity));\n  border-width: 1px;\n  border-top-width: 0px;\n  display: flex;\n  padding: 0.75rem;\n  text-transform: capitalize\n}\n\n.tt__button[_ngcontent-%COMP%]:hover {\n  --tw-bg-opacity: 0.5\n}\n\n.tt__button[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: relative;\n  --tw-text-opacity: 1;\n  color: rgba(63, 63, 66, var(--tw-text-opacity));\n  text-transform: capitalize\n}\n\n.tt__button[_ngcontent-%COMP%]::before{\n  content: \"+\";\n  font-weight: 600;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  margin-left: 0.25rem;\n  margin-right: 0.25rem\n}\n\n.selected[_ngcontent-%COMP%] {\n  border-width: 4px;\n  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  z-index: 10\n}\n\n.tt__button--remove[_ngcontent-%COMP%] {\n  font-size: 0;\n  margin-top: 3px;\n}\n\n.tt__button--remove[_ngcontent-%COMP%]::after {\n  content: \"\\00D7\";\n  line-height: 2rem;\n  vertical-align: middle;\n  font-weight: 700;\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  --tw-text-opacity: 1;\n  color: rgba(153, 27, 27, var(--tw-text-opacity))\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.125rem;\n  line-height: 1.75rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS10cmVlLXRlc3QuY29tcG9uZW50LmNzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy9saWIvbGliL3N1YnN0aXR1dGVDbGFzc0FwcGx5QXRSdWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQ0VBLGFBQW1CO0VBQW5CLG1CQUFtQjtFQUFuQixZQUFtQjtFQUFuQixrQkFBbUI7RUFBbkIsb0JBQW1CO0VBQW5CO0FEQUE7O0FBRUE7RUNGQSxrQkFBbUI7RUFBbkIsMkRBQW1CO0VBQW5CLHNCQUFtQjtFQUFuQiwyREFBbUI7RUFBbkIsaUJBQW1CO0VBQW5CLHFCQUFtQjtFQUFuQixhQUFtQjtFQUFuQixnQkFBbUI7RUFBbkI7QURJQTs7QUNKQTtFQUFBO0FBQW1COztBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQixvQkFBbUI7RUFBbkIsOEJBQW1CO0VBQW5CLG1CQUFtQjtFQUFuQixnQkFBbUI7RUFBbkIsbUJBQW1CO0VBQW5CLGtCQUFtQjtFQUFuQixvQkFBbUI7RUFBbkIsK0NBQW1CO0VBQW5CO0FBQW1COztBRFVuQjtFQUNJLFlBQVk7RUNYaEIsZ0JBQW1CO0VBQW5CLGtCQUFtQjtFQUFuQixvQkFBbUI7RUFBbkIsb0JBQW1CO0VBQW5CO0FEYUE7O0FBRUE7RUNmQSxpQkFBbUI7RUFBbkIsb0ZBQW1CO0VBQW5CLHVHQUFtQjtFQUFuQjtBRGlCQTs7QUFFQTtFQUNHLFlBQVk7RUFDWixlQUFlO0FBQ2xCOztBQUVBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUMzQjFCLGdCQUFtQjtFQUFuQixrQkFBbUI7RUFBbkIsbUJBQW1CO0VBQW5CLG1CQUFtQjtFQUFuQixvQkFBbUI7RUFBbkIsb0JBQW1CO0VBQW5CO0FENkJBOztBQUVBO0VDL0JBLGdCQUFtQjtFQUFuQixtQkFBbUI7RUFBbkI7QURpQ0EiLCJmaWxlIjoiY3JlYXRlLXRyZWUtdGVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR0X19oZWFkaW5nIHsgXHJcbiAgICBAYXBwbHkgZmxleCBmbGV4LWdyb3cgaXRlbXMtY2VudGVyIG1sLTIgdGV4dC14bFxyXG59IFxyXG5cclxuLnR0X19pdGVtICB7XHJcbiAgICBAYXBwbHkgZmxleCBwLTMgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IGJvcmRlci10LTAgY2FwaXRhbGl6ZSBcclxufVxyXG5cclxuLnR0X19idXR0b24ge1xyXG4gICAgQGFwcGx5IG14LTIgcmVsYXRpdmUgb3V0bGluZS1ub25lIGhvdmVyOmJnLW9wYWNpdHktNTAgcHktMCB0ZXh0LXRleHQgY2FwaXRhbGl6ZVxyXG59XHJcblxyXG4udHRfX2J1dHRvbjo6YmVmb3Jle1xyXG4gICAgY29udGVudDogXCIrXCI7XHJcbiAgICBAYXBwbHkgdGV4dC14bCBteC0xIGZvbnQtc2VtaWJvbGRcclxufVxyXG5cclxuLnNlbGVjdGVkIHtcclxuICAgIEBhcHBseSBzaGFkb3ctbGcgYm9yZGVyLTQgei0xMFxyXG59XHJcblxyXG4udHRfX2J1dHRvbi0tcmVtb3ZlIHtcclxuICAgZm9udC1zaXplOiAwOyBcclxuICAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcblxyXG4udHRfX2J1dHRvbi0tcmVtb3ZlOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlxcMDBEN1wiO1xyXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgQGFwcGx5ICBteC0yIHRleHQtNHhsIHRleHQtcmVkLTgwMCBmb250LWJvbGQgXHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIEBhcHBseSB0ZXh0LWxnIGZvbnQtYm9sZFxyXG59IiwiQHRhaWx3aW5kIGJhc2U7XG5AdGFpbHdpbmQgY29tcG9uZW50cztcbkB0YWlsd2luZCB1dGlsaXRpZXM7Il19 */"] });


/***/ }),

/***/ "eYNs":
/*!*********************************************************!*\
  !*** ./src/app/tasks/create-task/create-task.module.ts ***!
  \*********************************************************/
/*! exports provided: TasksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksModule", function() { return TasksModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _create_task_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-task-routing.module */ "2QuC");
/* harmony import */ var _create_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-task.component */ "YG08");
/* harmony import */ var _components_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/create-survey/create-survey.component */ "cO9i");
/* harmony import */ var _components_create_card_sorting_create_card_sorting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/create-card-sorting/create-card-sorting.component */ "AvYb");
/* harmony import */ var _components_create_tree_test_create_tree_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/create-tree-test/create-tree-test.component */ "cTrx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class TasksModule {
}
TasksModule.ɵfac = function TasksModule_Factory(t) { return new (t || TasksModule)(); };
TasksModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: TasksModule });
TasksModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _create_task_routing_module__WEBPACK_IMPORTED_MODULE_2__["TasksRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](TasksModule, { declarations: [_create_task_component__WEBPACK_IMPORTED_MODULE_3__["CreateTaskComponent"], _components_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_4__["CreateSurveyComponent"], _components_create_card_sorting_create_card_sorting_component__WEBPACK_IMPORTED_MODULE_5__["CreateCardSortingComponent"], _components_create_tree_test_create_tree_test_component__WEBPACK_IMPORTED_MODULE_6__["CreateTreeTestComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _create_task_routing_module__WEBPACK_IMPORTED_MODULE_2__["TasksRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=tasks-create-task-create-task-module.js.map