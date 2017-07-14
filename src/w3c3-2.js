onconnect = function (e) {
  const port = e.ports[0];
  port.postMessage('Hello World!');
  port.onmessage = function (event) { // eslint-disable-line no-unused-vars
    port.postMessage('pong'); // not e.ports[0].postMessage!
    // e.target.postMessage('pong'); would work also
  };
};
