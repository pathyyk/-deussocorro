angular.module('starter.services', [])

  .service('ListaService', function() {

    // dentro de um service nós NAO usamos $scope para declarar variáveis
    let atividades = [
        {nome: "Tire 10 minutos do dia para meditar"},
        {nome: "Caminhe alguns minutos"},
        {nome: "Não use o celular antes de dormir"},
        {nome: "Use protetor solar"},
        {nome: "Tome sol durante o dia"},
        {nome: "Alongue-se ao acordar"},
        {nome: "Diminua o consumo de açúcar"},
        {nome: "Coma fibras pelo menos duas vezes dia"},
        {nome: "Reduza seu estresse"},
        {nome: "Dormir e acordar no mesmo horário"},
      ];


    let servico = {}; //o objeto servico é quem possui os metodos/funçoes para informar a lista dos NinjasService
                      //e qual perfil foi selecionado pra ver

    //aqui estamos declarando que a funcao listarNinjas é um atributo do objeto servico
    servico.listarAtividades = () =>{
        return atividades; //essa funcao, que pertence ao objeto servico, retorna a lista de todos os ninjas quando chamada
    }


    let atividadeEscolhido = {}; // essa é uma variavel local, que ira armazenar as informacoes do perfil do ninja que for escolhido


    //aqui estamos declarando que a funcao escolherNinja é um atributo do objeto servico
    servico.escolherAtividade = (atividade) =>{ //essa funcao precisa de parametro, pois ela ira definir qual ninja que voce quer ver o perfil

        atividadeEscolhido = atividadeSelecionado;
         //nessa linha estamos passando as informacoes do ninja, que veio como parametro do controller, e armazenando como ninjaEscolhido
    }

    //aqui estamos declarando que a funcao mostrarNInja é um atributo do objeto servico
    servico.mostrarAtividade = () =>{
        return atividadeEscolhido; //essa funcao retorna para o controller as informacoes do ninjaEscolhido
    }
      // console.log(atividadeEscolhido.nome);
    return servico; // o objeto servico é retornado, pois assim podemos acessar seus metodos/funcoes através dos controllers
})

.service('pegarTexto', function(){

  let atividades = [
    {nome: "Tire 10 minutos do dia para meditar"},
    {nome: "Caminhe alguns minutos"},
    {nome: "Não use o celular antes de dormir"},
    {nome: "Use protetor solar"},
    {nome: "Tome sol durante o dia"},
    {nome: "Alongue-se ao acordar"},
    {nome: "Diminua o consumo de açúcar"},
    {nome: "Coma fibras pelo menos duas vezes dia"},
    {nome: "Reduza seu estresse"},
    {nome: "Dormir e acordar no mesmo horário"},
  ];

  let texto = atividades[0].nome
  
    return {
      getInfo: function(){
        return "Tire 10 minutos do dia para meditar"

      },
      getUser: function(index){
        return users[index];
      }
    }
  
  });