// plain txt
const responseText = (req, res) => {
    res.setHeader("Content-type", "text/plain");
    res.end("Bonjour M. Ngalemo");
  };
  
  //Json
  const responseJson = (req, res) => {
    res.setHeader("Content-type", "application/json");
    res.end(JSON.stringify({ Text: "Fabrice", numbers: "[7,8,1,9]" }));
  };
  // not found response
  const responseNotFound = (req, res) => {
    res.writeHead(404, ("Content-type", "text/plain"));
    res.end("Page not found");
  };

  
  module.exports = {
    responseJson,
    responseText,
    responseJson
  }