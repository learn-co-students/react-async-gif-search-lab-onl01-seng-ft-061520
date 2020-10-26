const APP_key = 'JgTMqhGSXiomjzV8E7A3uXm6e1X47llw';
  
fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=${API_KEY}&rating=g`)
.then(resp => resp.json())

