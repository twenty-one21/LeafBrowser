chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    'outerBounds': {
      'width': 1100,
      'height': 800
    },
  "frame": {color: "#8f5b5b"},
  "resizable": true,
  });
});
