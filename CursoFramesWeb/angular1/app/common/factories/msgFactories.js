(function() {
  angular.module('primeiraApp').factory('msgs', [
    'toastr',
    MsgFactory
  ])

  function MsgFactory(toastr) {
    function addMsg(msgs, title, method) {
      if(msgs instanceof Array) {
        msgs.forEach(msgs = toastr[method](msg,title))
      } else {
        toastr[method](msgs, title)
      }
    }
  }
  function addSuccess(msgs) {
    addMsg(msgs, 'Sucesso', 'success')
  }
  function addError(msgs) {
    addMsg(msgs, 'Error','error')
  }
  return { addSuccess, addError }
})()
