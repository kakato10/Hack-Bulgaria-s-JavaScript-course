'use strict'
$(document).ready(function(){
  $(document).on("click", ".read", function(){
    var targetedModal = $(this).data("target");
    $(".bs-example-modal-lg").modal("show");
  });
});
