$(document).ready(function(){
  $(".tab").on("click", function(){
    $(".active-tab").removeClass("active-tab");
    $(".content").addClass("inactive-content");
    $(this).addClass("active-tab");
    $($(this).attr("href")).removeClass("inactive-content");
  });
});
