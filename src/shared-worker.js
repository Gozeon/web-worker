onconnect = function (e) {
  const port = e.ports[0];

  port.onmessage = function (event) {
    const workerResult = `Result:  + ${event.data[0] * event.data[1]}`;
    port.postMessage(workerResult);
  };
};
