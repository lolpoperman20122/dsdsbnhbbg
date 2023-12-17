$(function() {
  $.ajax({
    url: "https://cors-anywhere.herokuapp.com/$(function() {
  $.ajax({
    url: "https://cors-anywhere.herokuapp.com/",
    type: "POST",
    dataType: "json",
    contentType: "application/json",
    // set the request header authorization to the bearer token that is generated
    headers: {
      "X-Requested-With": "XMLHttpRequest"
    },
    success: function(result) {
      console.log(result);

    },
    error: function(error) {
      console.log(`Error ${error}`)
    },
  });
});",
    type: "POST",
    dataType: "json",
    contentType: "application/json",
    // set the request header authorization to the bearer token that is generated
    headers: {
      "X-Requested-With": "XMLHttpRequest"
    },
    success: function(result) {
      console.log(result);

    },
    error: function(error) {
      console.log(`Error ${error}`)
    },
  });
});
