$(function(){
var gender;
var color;

  $(".formOne").submit(function(event){
    color = $("#color").val();
    gender =$("#gender").val();
      if (gender == 1 && color == "grn") {
      $("#piggy").hide();
      $("#gladys").hide();
      $("#spamela").hide();
      $("#wanda").hide();
      $("#animal").hide();
      $("#beaker").hide();
      $("#scooter").hide();
      $("#kermit").show();
    } else if (gender == 1 && color == "yel") {
      $("#piggy").hide();
      $("#gladys").hide();
      $("#spamela").hide();
      $("#wanda").hide();
      $("#animal").hide();
      $("#beaker").hide();
      $("#scooter").show();
      $("#kermit").hide();
    } else if (gender == 1 && color == "pink") {
      $("#piggy").hide();
      $("#gladys").hide();
      $("#spamela").hide();
      $("#wanda").hide();
      $("#animal").hide();
      $("#beaker").show();
      $("#scooter").hide();
      $("#kermit").hide();
    } else if (gender == 1 && color == "red") {
      $("#piggy").hide();
      $("#gladys").hide();
      $("#spamela").hide();
      $("#wanda").hide();
      $("#animal").show();
      $("#beaker").hide();
      $("#scooter").hide();
      $("#kermit").hide();
    } else if (gender == 2 && color == "grn") {
    $("#piggy").hide();
    $("#gladys").hide();
    $("#spamela").hide();
    $("#wanda").show();
    $("#animal").hide();
    $("#beaker").hide();
    $("#scooter").hide();
    $("#kermit").hide();
  } else if (gender == 2 && color == "yel") {
    $("#piggy").hide();
    $("#gladys").show();
    $("#spamela").hide();
    $("#wanda").hide();
    $("#animal").hide();
    $("#beaker").hide();
    $("#scooter").hide();
    $("#kermit").hide();
  } else if (gender == 2 && color == "pink") {
    $("#piggy").show();
    $("#gladys").hide();
    $("#spamela").hide();
    $("#wanda").hide();
    $("#animal").hide();
    $("#beaker").hide();
    $("#scooter").hide();
    $("#kermit").hide();
  } else if (gender == 2 && color == "red") {
    $("#piggy").hide();
    $("#gladys").hide();
    $("#spamela").show();
    $("#wanda").hide();
    $("#animal").hide();
    $("#beaker").hide();
    $("#scooter").hide();
    $("#kermit").hide();
  }
    event.preventDefault();
  });
});


// Kermit(grn,sitting on a log), Animal(red), Beaker (pink), Scooter
//Ms Piggy(pink), Gladys(yellow), Spamela Hamderson (red), Wanda (grn)
