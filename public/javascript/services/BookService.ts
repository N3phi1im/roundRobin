'use strict';
namespace app.Services {
  export class BookService {
    private BookResource;

    public getBooks() {
      return console.log("this is not the book you are looking for");
    }

    constructor(private $resource: ng.resource.IResourceService) {
      this.BookResource = $resource('/v1/api/books/:id')
    }
  }

  angular.module('app').service('BookService', BookService);

}
