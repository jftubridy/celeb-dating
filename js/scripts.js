$(function(){
var gender;
var color;

//Hides all contestants
    $("#piggy").addClass("hiding");
    $("#gladys").addClass("hiding");
    $("#spamela").addClass("hiding");
    $("#wanda").addClass("hiding");
    $("#animal").addClass("hiding");
    $("#beaker").addClass("hiding");
    $("#scooter").addClass("hiding");
    $("#kermit").addClass("hiding");

  $(".formOne").submit(function(event){
    color = $("#color").val();
    gender =$("#gender").val();
//Reveals contestants based on user preferences
      if (gender == 1 && color == "grn") {
      $("#piggy").addClass("hiding");
      $("#gladys").addClass("hiding");
      $("#spamela").addClass("hiding");
      $("#wanda").addClass("hiding");
      $("#animal").addClass("hiding");
      $("#beaker").addClass("hiding");
      $("#scooter").addClass("hiding");
      $("#kermit").removeClass("hiding");
    } else if (gender == 1 && color == "yel") {
      $("#piggy").addClass("hiding");
      $("#gladys").addClass("hiding");
      $("#spamela").addClass("hiding");
      $("#wanda").addClass("hiding");
      $("#animal").addClass("hiding");
      $("#beaker").addClass("hiding");
      $("#scooter").removeClass("hiding");
      $("#kermit").addClass("hiding");
    } else if (gender == 1 && color == "pink") {
      $("#piggy").addClass("hiding");
      $("#gladys").addClass("hiding");
      $("#spamela").addClass("hiding");
      $("#wanda").addClass("hiding");
      $("#animal").addClass("hiding");
      $("#beaker").removeClass("hiding");
      $("#scooter").addClass("hiding");
      $("#kermit").addClass("hiding");
    } else if (gender == 1 && color == "red") {
      $("#piggy").addClass("hiding");
      $("#gladys").addClass("hiding");
      $("#spamela").addClass("hiding");
      $("#wanda").addClass("hiding");
      $("#animal").removeClass("hiding");
      $("#beaker").addClass("hiding");
      $("#scooter").addClass("hiding");
      $("#kermit").addClass("hiding");
    } else if (gender == 2 && color == "grn") {
    $("#piggy").addClass("hiding");
    $("#gladys").addClass("hiding");
    $("#spamela").addClass("hiding");
    $("#wanda").removeClass("hiding");
    $("#animal").addClass("hiding");
    $("#beaker").addClass("hiding");
    $("#scooter").addClass("hiding");
    $("#kermit").addClass("hiding");
  } else if (gender == 2 && color == "yel") {
    $("#piggy").addClass("hiding");
    $("#gladys").removeClass("hiding");
    $("#spamela").addClass("hiding");
    $("#wanda").addClass("hiding");
    $("#animal").addClass("hiding");
    $("#beaker").addClass("hiding");
    $("#scooter").addClass("hiding");
    $("#kermit").addClass("hiding");
  } else if (gender == 2 && color == "pink") {
    $("#piggy").removeClass("hiding");
    $("#gladys").addClass("hiding");
    $("#spamela").addClass("hiding");
    $("#wanda").addClass("hiding");
    $("#animal").addClass("hiding");
    $("#beaker").addClass("hiding");
    $("#scooter").addClass("hiding");
    $("#kermit").addClass("hiding");
  } else if (gender == 2 && color == "red") {
    $("#piggy").addClass("hiding");
    $("#gladys").addClass("hiding");
    $("#spamela").removeClass("hiding");
    $("#wanda").addClass("hiding");
    $("#animal").addClass("hiding");
    $("#beaker").addClass("hiding");
    $("#scooter").addClass("hiding");
    $("#kermit").addClass("hiding");
  }
    event.preventDefault();
  });
});


// Kermit(grn,sitting on a log), Animal(red), Beaker (pink), Scooter
//Ms Piggy(pink), Gladys(yellow), Spamela Hamderson (red), Wanda (grn)
