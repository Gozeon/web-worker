let count = 0;
onconnect = function (e) {
  count += 1;
  const port = e.ports[0];
  port.postMessage(`Hello World! You are connection #${count}`);
  port.onmessage = function (event) { // eslint-disable-line no-unused-vars
    port.postMessage('pong');
  };
};
