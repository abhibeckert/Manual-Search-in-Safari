const app = safari.application;
app.addEventListener('beforeSearch', handleBeforeSearch, false);

function handleBeforeSearch(e)
{
  // stop the normal google search
  e.preventDefault();
  
  var url;
  if (e.query.match(/^g /)) { // do we want a google search?
    url = 'http://google.com/search?q=' + e.query.replace(/^g +/, '');
    
  } else { // no google search, just slap http:// in front of it
    url = 'http://' + e.query;
    url = url.replace(' ', '+');
  }
  
  e.target.url = url;
}
