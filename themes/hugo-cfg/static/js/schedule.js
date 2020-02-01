// try to read schedule from json

$(document).ready(function(e) {
  // load only on page with schedule selector
  if ($("#schedule").length) {
      // get file from selector content
      var file = "/schedule/" + $("#schedule").html()
      // clear selector content
      $("#schedule").html("")
      $.getJSON(file, function(result){
        if (0 == result.length) 
            console.log("No schedule data")
        else {
            console.log("Length " + result.length)
            $("#schedule").append("<ul>");
            $.each(result, function(i, field){
              console.log(field)
                $("#schedule").append("<li>");
                $("#schedule").append(field.date + ": " + field.title);
                $("#schedule").append("</li>");
            });
            $("#schedule").append("</ul>");
        }
      });
  } else
    console.log("No schedule id")
});


