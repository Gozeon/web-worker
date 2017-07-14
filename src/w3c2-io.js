function get(url) {
  try {
    var xhr = new XMLHttpRequest();
    var u = "https://html.spec.whatwg.org/demos/workers/stocks/" + url;
    xhr.open('GET', u, false);
    xhr.send();
    return xhr.responseText;
  } catch (e) {
    return ''; // turn all errors into empty results
  }
}