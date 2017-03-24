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
        // clear previous content
        $('#reset').click();
        var i = 0
        $(data[1]).each(function(){
          $('results-heading').html('Search Results for: ' + searchTerm);
          $('#output').prepend("<li><a href=" + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
          i++;
        });
      },
      error: function(errorMessage){
        alert("Error");
      }
    });
  });

  // when press return we also do a search
  $("#searchTerm").keypress(function(e){
    // enter key pressed
    if(e.which == 13) {
      $('#search').click();

    }
  });

  // clear search
  $('#reset').click(function(){
    $('#output').html('');
    $('#searchTerm').val('');
    $('results-heading').html('');
  });
});
