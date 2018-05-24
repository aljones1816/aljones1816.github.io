$(document).ready(function() {
  $("h1").hide();
  $("#blurbs").hide();
  $("#secondRound").hide();
  $("#randWiki")
    .attr("href", "https://en.wikipedia.org/wiki/Special:Random")
    .attr("target", "_blank");

  var animation = function() {
    /* Animates the search bar/buttons so they slowly move to the top of the page when the function is called. Called in the button-click functions below. */
    $("#form").animate(
      {
        top: "-=170px"
      },
      "slow"
    );
    $("#blurbs").animate(
      {
        top: "-=170px"
      },
      "slow"
    );
  };

  $("#wikiSearchBtn").one("click", function() {
    animation();
  });

  var searchWiki = function() {
    if ($("#wikiSearchBox").val().length != 0) {
      $("#blurbs").show();
      $("h1").show();
      var searchTerm = document.getElementById("wikiSearchBox").value;
      var WikiAPIurl =
        "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=";
      var returnLimit = 25;
      $.ajax(WikiAPIurl + returnLimit + "&search=" + searchTerm, {
        type: "GET",
        dataType: "jsonp",
        success: function(data) {
          for (i = 1; i <= 5; i++) {
            $("#text" + i).html(data[1][i - 1]);
            $("#textbod" + i).html(data[2][i - 1]);
            $("#link" + i)
              .attr("href", data[3][i - 1])
              .attr("target", "_blank");
          }
          /* When you click the 'more results' link at the bottom of the page, this code will expand your search results from 5 to 25*/
          $("#moreResults").on("click", function() {
            $("#moreResults").hide();
            $("#secondRound").show();
            for (i = 6; i <= 25; i++) {
              $("#text" + i).html(data[1][i - 1]);
              $("#textbod" + i).html(data[2][i - 1]);
              $("#link" + i)
                .attr("href", data[3][i - 1])
                .attr("target", "_blank");
            }
          });
        }
      });
    }
  };
  $("#wikiSearchBtn").on("click", function() {
    searchWiki();
  });

  $("#form").keypress(function(e) {
    if (e.which == 13) {
      e.preventDefault();
      document.getElementById("wikiSearchBtn").click();
    }
  });
});
