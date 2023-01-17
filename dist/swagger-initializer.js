window.onload = function() {
  let swagger_url = window.location.href;
  if (swagger_url[swagger_url.length - 1] == '/') {
    swagger_url = swagger_url.slice(0, swagger_url.length - 1);
  }
  swagger_url = swagger_url + '.json';

  window.ui = SwaggerUIBundle({
    url: swagger_url,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
