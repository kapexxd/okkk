function showInfo(title, description) {
  document.getElementById(
    "enlargedInfo"
  ).innerHTML = `<h2>${title}</h2><p>${description}</p>`;
  document.getElementById("enlargedContainer").style.display = "block";
}

function hideInfo() {
  document.getElementById("enlargedContainer").style.display = "none";
}

$(document).ready(function () {
  var timeoutId;

  $(".carsListItem").on("mouseover", ".carSmall", function () {
    var imageUrl = $(this).attr("src");
    clearTimeout(timeoutId);
    $("body")
      .css({
        position: "relative",
      })
      .prepend('<div class="background-layer"></div>');
    $(".background-layer").css({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      "background-image": "url(" + imageUrl + ")",
      "background-size": "cover",
      "background-repeat": "no-repeat",
      filter: "blur(20px)",
      opacity: "0.8",
      "z-index": "-1",
      transition: "opacity 0.5s ease, filter 0.5s ease",
    });
  });

  $(".carsListItem").on("mouseout", ".carSmall", function () {
    $(".background-layer").css({
      opacity: "0",
    });

    timeoutId = setTimeout(function () {
      $(".background-layer").remove();
    }, 200);
  });
});

function validateForm() {
  var wheelsInput = document.getElementById("wheels");
  if (!isPositiveInteger(wheelsInput.value)) {
    alert("Please enter a whole positive number for the number of wheels.");
    return false;
  }

  var upvoteSelect = document.getElementById("upvote");
  if (upvoteSelect.value === "") {
    alert("Please select a car to upvote.");
    return false;
  }

  var downvoteSelect = document.getElementById("downvote");
  if (downvoteSelect.value === "") {
    alert("Please select a car to downvote.");
    return false;
  }

  return true;
}

function isPositiveInteger(value) {
  var pattern = /^[1-9]\d*$/;
  return pattern.test(value);
}
