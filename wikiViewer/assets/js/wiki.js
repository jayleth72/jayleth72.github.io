$(document).ready(function(){
  // run search when search button is called
  $('#search').click(function(){
    var searchTerm = $('#searchTerm').val();
    // API url with the search Term
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

    $.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType: "json",
      success:function(data){
        // clear output content
        $('#output').html('');
        var i = 0
        $(data[1]).each(function(){
          $('#output').prepend("<li><a href=" + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
          i++;
        });
      },
      error: function(errorMessage){
        alert("Error");
      }
    });
  });
});
