$('#search').on('input', function (e) {
  if ('' == this.value) {
        $('ul').empty();
    }
});

$('#search').keyup(function (event) {
  if (event.keyCode === 13) {
    $('#submit').click();
  }
});

$('#submit').on("click", function () {
  $('ul').empty();
  var search = $('#search').val();
  var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + search + '&format=json&callback=?';
  $.ajax ({
  url: url,
  type: 'GET',
  async: false,
  dataType: 'json',
  success: function (data, status, jqXHR) {
    console.log(data);
    for (var i = data[1].length - 1; i > -1; i--) {
      $("#result").prepend(
        "<div><li class='well center'><a href="+data[3][i]+"><h2>"+data[1][i]+"</h2>"+"<p>"+data[2][i]+"</p></a></li></div>");
      }

}

})

})
