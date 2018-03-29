angular.module('primeiraApp').constant('consts', {
  appName: 'SENIB',
  version: '1.0',
  owner: 'Ministério de Internet',
  year: '2018',
  site: 'http://cod3r.com.br',
  apiUrl: 'http://localhost:3003/api',
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])
