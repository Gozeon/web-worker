function get(url) { // eslint-disable-line no-unused-vars
  try {
    const xhr = new XMLHttpRequest();
    const u = `https://html.spec.whatwg.org/demos/workers/stocks/${url}`;
    xhr.open('GET', u, false);
    xhr.send();
    return xhr.responseText;
  } catch (e) {
    return ''; // turn all errors into empty results
  }
}
