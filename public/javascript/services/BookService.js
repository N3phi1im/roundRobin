'use strict';
var app;
(function (app) {
    var Services;
    (function (Services) {
        var BookService = (function () {
            function BookService($resource) {
                this.$resource = $resource;
                this.BookResource = $resource('/v1/api/books/:id');
            }
            BookService.prototype.getBooks = function () {
                return console.log("this is not the book you are looking for");
            };
            return BookService;
        }());
        Services.BookService = BookService;
        angular.module('app').service('BookService', BookService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
