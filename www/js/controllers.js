angular.module('starter.controllers', [])


//PARTE-SLIDE
.controller('SlideCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
  $scope.ir = function(){
    $state.go('tab.inicio')}
  })


//PARTE-INÍCIO

.controller('InicioCtrl', function($scope, $state, $interval) {
     
  let imagens = [
    'https://blog.emania.com.br/content/uploads/2015/12/Papel-de-Parede-de-Paisagem.jpg',
    'https://www.epochtimes.com.br/wp-content/uploads/2014/11/cr-mais-belas-paisagens2.jpg',
    'https://i.pinimg.com/736x/22/30/45/223045f0a08c8e942f5c377eab222018--stf-roads.jpg'
  ]

  let posicao = 0;

  $scope.img = imagens[posicao];

  let mudarImagem = () =>{

     posicao++;

     if(posicao == imagens.length){
       posicao = 0;
     }

     $scope.img = imagens[posicao];
     console.log($scope.img);
     
  }
  
  $interval(mudarImagem, 1000);

 })


//PARTE LISTA DE ATIVIDADES
.controller('ListaCtrl', function($scope, $state, $ionicPopup, $timeout, ListaService) {
  $scope.atividades = ListaService.listarAtividades();
     $scope.concluir = (atividade) => {
      ListaService.escolherAtividade(atividade);
     };
 
    
  
  $scope.concluir = function(){
    $state.go('tab.editar')
  }

  $scope.showAlert = function() {
    var alertPopup = $ionicPopup.alert({
      template: 'A meditação diminui a ansiedade, melhora a depressão, melhora as dores crônicas, diminui a frequência cardíaca, controla apressão arterial e melhora o sono.',
      title: 'O porquê:',
    });
    alertPopup.then(function(res) {
    });
  };
})

//PARTE-GERENCIAR
.controller('EditarCtrl', function($scope, $state, $ionicPopup, $timeout, $stateParams, ListaService, pegarTexto){
  $scope.listados = ListaService.mostrarAtividade();
  $scope.showAlert1 = function() {
    var alertPopup = $ionicPopup.alert({
      template: 'Você tem uma atividade para o dia 08/02/2018, às 12:00',
      title: '',
    });
    alertPopup.then(function(res) {
    });
  };

  $scope.valor= pegarTexto.getInfo()
  console.log($scope.pegarTexto)

  // $scope.ir = function(){
  //   $state.go('dia')}
//   $scope.criacao = false;

//   $scope.abrirCriador = () => {
//       $scope.criacao = true;
//   }

//   let remove = false;

//   $scope.compromissos = [{
//       id: 1,
//       titulo: 'Filho Escola',
//       hora: '08:00',
//       dia: 'Qui'
//   }, {
//       id: 2,
//       titulo: 'Filho Piano',
//       hora: '08:00',
//       dia: 'Sex'
//   }]

//   $scope.itemClicked = (item) => {
//       if (!remove) {
//           console.log(item);
//       }
//       remove = false;
//   }

//   $scope.itemRemove = (item) => {
//       remove = true;
//       console.log('remove' + item);
//   }
// })
})
//PARTE-CONFIGURAÇÃO
.controller('ConfigurarCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }
  })

.controller('DiaCtrl', function($scope){

});

