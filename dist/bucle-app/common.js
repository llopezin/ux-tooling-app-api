(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "qj14":
/*!***********************************************************************!*\
  !*** ./src/app/tasks/complete-task/services/complete-task.service.ts ***!
  \***********************************************************************/
/*! exports provided: CompleteTaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteTaskService", function() { return CompleteTaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class CompleteTaskService {
    constructor(http) {
        this.http = http;
        this.API_ENDPOINT = "/api";
    }
    getTask(id) {
        return this.http.get(`${this.API_ENDPOINT}/tasks/${id}`);
    }
    postResponse(id, response) {
        return this.http.post(`${this.API_ENDPOINT}/tasks/${id}/response`, response);
    }
}
CompleteTaskService.ɵfac = function CompleteTaskService_Factory(t) { return new (t || CompleteTaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CompleteTaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CompleteTaskService, factory: CompleteTaskService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map