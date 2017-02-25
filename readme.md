# Bookmarklets

To use use these bookmarklets, copy them, then in Chrome right click the bookmakrs bar, click add page, in the URL textbox paste what was copied add a nice nice name, then you are done.


## Side-by-side English translation
Bing offers a really nice side-by-side translation of webpages, this opens the current page using this side-by-side translation service.

```
javascript:(()=>{
  var bing = "http://www.microsofttranslator.com/bv.aspx?from=&to=en&a=";
  window.location.href = bing + window.location.href;
})();
```


## Page Refresher

This will open the current content in a new page in a an iframe that is 100% in size. It will ask how many minutes should pass before refresh.

You might get `in a frame because it set 'X-Frame-Options' to 'SAMEORIGIN'.` in the console, if so, you are out of luck. In the future maybe I'll look at making something that does the same thing, but reloads a parent tab/window or something.


```
javascript:(()=>{
  with(document){
    let s=createElement('script');
    s.src='https://cdn.rawgit.com/torypages/bookmarklets/master/refresh.js';
    head.appendChild(s)}
  })();
````
