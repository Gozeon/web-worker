onmessage = function (e) {
  const sum = Number(e.data[0]) + Number(e.data[1]);
  postMessage(sum);
};
