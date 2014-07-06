'use strict';

$(document).ready(function(){
  var booksDb = [];
  var booksInCart = {};
  var pagesInCart = 0;
  var generateBook = function (aim, book) {
    var bookSource;
    if (aim === "store") {
      bookSource = $("#book-for-store").html();
    } else if (aim === "cart") {
      bookSource = $("#book-for-cart").html();
    }
    var bookTemplate = Handlebars.compile(bookSource);
    return bookTemplate(book);
  };

  var findBook = function(isbn) {
    var searchedBook;
    booksDb.forEach(function(book){
      if (book.isbn === isbn){
        searchedBook = book;
      }
    });
    return searchedBook;
  };

  var generateBookStore = function(books) {
    var bookStoreHtml = "";
    books.forEach(function(book){
      bookStoreHtml = bookStoreHtml + generateBook("store", book);
    });
    $("#book-store-container").append(bookStoreHtml)
  };

  var generateAmountParagraph = function(amount) {
    var source = $("#amount-template").html();
    var template = Handlebars.compile(source);
    return template({"amount" : amount});
  }

  var changePagesCounter = function(){
    var pagesCounterSource = $("#pages-container").html();
    var pagesCounterTemplate = Handlebars.compile(pagesCounterSource);
    var newPagesCounter = pagesCounterTemplate({
      "pages" : pagesInCart
    })
    console.log(newPagesCounter);
    $("#pages-counter").replaceWith(newPagesCounter);
  };

  var addToCart = function(isbn, usersAmount){
    var amount = usersAmount || 1;
    var stringedIsbn = isbn.toString();
    console.log(booksInCart);
    if(!(stringedIsbn in booksInCart)) {
      booksInCart[stringedIsbn] = findBook(isbn);
      booksInCart[stringedIsbn].amount = amount;
      $("#books-cart-container").append(generateBook("cart", booksInCart[stringedIsbn]));
      $("#"+isbn+"-cart").append(generateAmountParagraph(amount))
    } else {
      booksInCart[stringedIsbn].amount = booksInCart[stringedIsbn].amount + amount;
      $("#"+isbn+'-cart').children(".amount").replaceWith(generateAmountParagraph(booksInCart[stringedIsbn].amount));
    }
    pagesInCart = pagesInCart + booksInCart[stringedIsbn].num_pages * amount;
    changePagesCounter();
  };

  var removeFromCart= function(isbn, amount){
    var stringedIsbn = isbn.toString();
    if (amount > booksInCart[stringedIsbn].amount){
      alert("You can't remove such an amount from that book");
    } else {
      console.log(amount);
      (booksInCart[stringedIsbn].amount = booksInCart[stringedIsbn].amount - amount)
      pagesInCart = pagesInCart - booksInCart[stringedIsbn].num_pages * amount;
      changePagesCounter();
      if (booksInCart[stringedIsbn].amount === 0) {
        delete booksInCart[stringedIsbn];
        $("#" + stringedIsbn + "-cart").remove();
      } else {
        $("#"+isbn+'-cart').children(".amount").replaceWith(generateAmountParagraph(booksInCart[stringedIsbn].amount));
      }

    }
  }

  $.getJSON('http://localhost:3000/books', function(books, textStatus) {
    booksDb = books;
    generateBookStore(books);
  });

  $(document).on("click", ".to-cart", function(){
    var bookIsbn = $(this).parent().parent().data("isbn");
    var amount = parseInt($("#" + bookIsbn + "-store").children().children(".amount-to-enter").val(),10);

    if (isNaN(amount) || amount === 0){
      alert("You didn't asigned a correct value");
    } else {
      addToCart(bookIsbn, amount);
    }
  });
  $(document).on("click", ".remove", function(){
    var bookIsbn = $(this).parent().parent().data("isbn");
    var amount = parseInt($("#" + bookIsbn + "-cart").children().children(".amount-to-remove").val(),10);
    console.log(amount);
    if (isNaN(amount) || amount === 0){
      alert("You didn't asigned a correct value");
    } else {
      removeFromCart(bookIsbn, amount);
    }
  });
});
