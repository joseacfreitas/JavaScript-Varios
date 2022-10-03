$(document).ready(function () {
  $("div.ilha").mousemove(function (e) {
    var x = e.pageX - 20;
    var y = e.pageY - 50;

    $("#labeldiv").css({ left: x, top: y });
  });

  //Início do Exercício 1
  // neste caso ao ser colocado o mouse sobre as imagens das ilhas, e executado um 'getJSON' que vai fazer uma requisição ao ficheiro 'get_ilha.php' para receber os dados desse ficheiro através do 'id', dados esses que serão apresentados numa 'labeldiv' por '.html', os dados recebidos e apresentados serão: 'nome_ilha', 'area' e 'populacoa', numa segunda face será feito com 'mouseleave' o contrário ou seja ao tirar o mouse de cima das imagens, desaparecera as informações da 'labeldiv'.

  $("div.ilha").mouseenter(function () {
    $.getJSON("/scripts/get_ilha.php", { id: this.id }, function (data) {
      $("#labeldiv").html(
        data.nome_ilha + "," + data.area + "," + data.populacao + "habitantes",
      );
      $("#labeldiv").show();
    });
  });

  $("div.ilha").mouseleave(function () {
    $("#labeldiv").hide();
  });
  //Fim do Exercício 1

  //Início do Exercício 2
  // neste caso ao ser clicar com mouse sobre as imagens das ilhas, é executado um 'getJSON' que vai fazer uma requisição ao ficheiro 'get_ilha.php' para receber os dados desse ficheiro através do 'id', dados esses que serão as fotos referentes a cada ilha, as imagens serão recebidas do 'data.foto' que através do 'id' sabe a que imagem da ilha se refere cada foto, essas fotos serão apresentadas através do '.html' no ecrã, essa mostragem é possivel atraves do 'css visible' e do '.animate' que define a opacidade da foto, tamanho e velocidade de apresentação, no segundo evento quando clicado sobre a foto a mesma desaparece do ecrã devido ao '.click' feito ao 'id' fotografia, onde o '.css' esconde a foto e coloca todos os outros valores a 0.

  $("div.ilha").click(function () {
    $.getJSON("/scripts/get_ilha.php", { id: this.id }, function (data) {
      $("#fotografia").html('<img src="' + data.foto + '"/>');
      $("#fotografia").css({ visibility: "visible" });
      $("#fotografia").animate(
        { opacity: "1.0", width: "600px", height: "500px" },
        "slow",
      );
    });
  });

  $("#fotografia").click(function () {
    $("#fotografia").css({
      visibility: "hidden",
      opacity: "0.0",
      width: "0px",
      height: "0px",
    });
  });
  //Fim do Exercício 2

  //Início do Exercício 3
  //O each vai buscar ao get_ipma_data.php, atraves dos Id das ilhas uma imagem svg animada e coloca em cada ilha correspondente ao seu id, que nos mostra animaçao sobre o tempo na respetiva ilha. 

  $("div.ilha").each(function () {
    $.getJSON("/scripts/get_ipma_data.php", { id: this.id }, function (data) {
      var divIlha = "#" + data.idIlha;
      $(divIlha).append(
        "<img class='tempo' src='/pics/tempo/w_ic_d_" +
          data.idTipoTempo +
          "anim.svg'/>",
      );
    });
  });
  //Fim do Exercício 3
});
