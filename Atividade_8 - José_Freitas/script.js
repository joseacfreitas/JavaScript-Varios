// JavaScript Document
$(document).ready(function () {

  $("img").click(function () {
    $(this).hide(1000);
  });

  $("#esconde_ataque").click(function () {
    $("img.ataque").hide(1000);
    $(this).css("background-color", "red");
    $("#mostrar_tudo").css("background-color", "white");
    $("#mostra_xpto").css("background-color", "white");
  });

  $("#mostrar_tudo").click(function () {
    $("img").show(600);
    $(this).css("background-color", "red");
    $("#esconde_ataque").css("background-color", "white");
    $("#mostra_xpto").css("background-color", "white");
  });

  $("#mostra_xpto").click(function () {
    $("#medio3").children("img").show(1000);
    $(this).css("background-color", "red");
    $("#mostrar_tudo").css("background-color", "white");
    $("#esconde_ataque").css("background-color", "white");
  });
});
