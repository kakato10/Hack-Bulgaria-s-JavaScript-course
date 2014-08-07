$(document).ready(function(){
  $("a").on("click", function(){
    $(".active-content").addClass("hidden-content").removeClass("active-content");
    $($(this).attr("href")).removeClass("hidden-content").addClass("active-content");
  });
});
