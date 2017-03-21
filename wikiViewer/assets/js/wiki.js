$(document).ready(function(){
  // run search when search button is called
  $('#search').click(function(){
    var searchTerm = $('#searchTerm').val();
    // API url with the search Term
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

    $.ajax({
      type:"GET",
      url:url,
      crossDomain:true,
      async:true,
      success:function(data){
        console.log(data);
      },
      error: function(errorMessage){
        alert("Error");
      }
    });
  });
});
