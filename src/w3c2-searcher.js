importScripts('w3c2-io.js');

onmessage = function (event) {
  postMessage(get(`search.cgi?${event.data}`));
};
