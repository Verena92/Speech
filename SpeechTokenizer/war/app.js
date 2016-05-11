var serverPath = '//speech-tokenizer-1282.appspot.com/';

function hangoutsid(state){
	var hangoutsid=gapi.hangout.getHangoutId();
	var idElement = document.getElementById('hangoutsid');
	setText(idElement, 'TEST');
	alert('Test');
}

// A function to be run at app initialization time which registers our callbacks
function init() {
  console.log('Init app.');

  var apiReady = function(eventObj) {
    if (eventObj.isApiReady) {
      console.log('API is ready');

      gapi.hangout.data.onStateChanged.add(function(eventObj) {
        hangoutsid(eventObj.state);
      });
      /*gapi.hangout.onParticipantsChanged.add(function(eventObj) {
        updateParticipantsUi(eventObj.participants);
      });*/

      gapi.hangout.onApiReady.remove(apiReady);
    }
  };

  // This application is pretty simple, but use this special api ready state
  // event if you would like to any more complex app setup.
  gapi.hangout.onApiReady.add(apiReady);
}

gadgets.util.registerOnLoadHandler(init);
