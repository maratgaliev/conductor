chrome.extension.onRequest.addListener(function(request, sender, callback) {
  if (request.action == 'getJSON') {
    $.getJSON(request.url, callback);
  }
});
