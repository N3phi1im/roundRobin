'use strict';
namespace app.Controllers {
  export class HomeController {
    public books;


    constructor(private BookService: app.Services.BookService) {
      this.books = BookService.getBooks();
    }
  }

  angular.module('app').controller('HomeController', HomeController);

}
