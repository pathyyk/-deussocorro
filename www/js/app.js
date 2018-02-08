angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
     
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('slide', {
    url: '/slide',
    templateUrl: 'templates/slide.html',
    controller: 'SlideCtrl'
  })

  .state('dia', {
    url: '/dia',
    templateUrl: 'templates/dia.html',
    controller: 'DiaCtrl'
  })

  .state('tab.inicio', {
    url: '/inicio',
    views: {
      'tab-inicio': {
        templateUrl: 'templates/tab-inicio.html',
        controller: 'InicioCtrl'
      }
    }
  })

  .state('tab.lista', {
      url: '/lista',
      views: {
        'tab-lista': {
          templateUrl: 'templates/tab-lista.html',
          controller: 'ListaCtrl'
        }
      }
    })

    .state('tab.editar', {
      url: '/editar',
      views: {
        'tab-editar': {
          templateUrl: 'templates/tab-editar.html',
          controller: 'EditarCtrl'
        }
      }
    })

  .state('tab.configurar', {
    url: '/configurar',
    views: {
      'tab-configurar': {
        templateUrl: 'templates/tab-configurar.html',
        controller: 'ConfigurarCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('slide');

});
