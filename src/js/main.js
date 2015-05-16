/*********************************************************************
*  #### Twitter Post Fetcher v13.0 ####
*  Coded by Jason Mayes 2015. A present to all the developers out there.
*  www.jasonmayes.com
*  Please keep this disclaimer with my code if you use it. Thanks. :-)
*  Got feedback or questions, ask here:
*  http://www.jasonmayes.com/projects/twitterApi/
*  Github: https://github.com/jasonmayes/Twitter-Post-Fetcher
*  Updates will be posted to this site.
*********************************************************************/
(function(w,n){"function"===typeof define&&define.amd?define([],n):"object"===typeof exports?module.exports=n():n()})(this,function(){function w(a){return a.replace(/<b[^>]*>(.*?)<\/b>/gi,function(a,g){return g}).replace(/class=".*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function n(a){a=a.getElementsByTagName("a");for(var c=a.length-1;0<=c;c--)a[c].setAttribute("target","_blank")}function m(a,c){for(var g=[],f=new RegExp("(^| )"+c+"( |$)"),h=a.getElementsByTagName("*"),b=0,k=h.length;b<
k;b++)f.test(h[b].className)&&g.push(h[b]);return g}var B="",k=20,C=!0,u=[],x=!1,v=!0,q=!0,y=null,z=!0,D=!0,A=null,E=!0,F=!1,r=!0,G=!0,H={fetch:function(a){void 0===a.maxTweets&&(a.maxTweets=20);void 0===a.enableLinks&&(a.enableLinks=!0);void 0===a.showUser&&(a.showUser=!0);void 0===a.showTime&&(a.showTime=!0);void 0===a.dateFunction&&(a.dateFunction="default");void 0===a.showRetweet&&(a.showRetweet=!0);void 0===a.customCallback&&(a.customCallback=null);void 0===a.showInteraction&&(a.showInteraction=
!0);void 0===a.showImages&&(a.showImages=!1);void 0===a.linksInNewWindow&&(a.linksInNewWindow=!0);void 0===a.showPermalinks&&(a.showPermalinks=!0);if(x)u.push(a);else{x=!0;B=a.domId;k=a.maxTweets;C=a.enableLinks;q=a.showUser;v=a.showTime;D=a.showRetweet;y=a.dateFunction;A=a.customCallback;E=a.showInteraction;F=a.showImages;r=a.linksInNewWindow;G=a.showPermalinks;var c=document.createElement("script");c.type="text/javascript";c.src="//cdn.syndication.twimg.com/widgets/timelines/"+a.id+"?&lang="+(a.lang||
"en")+"&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+Math.random();document.getElementsByTagName("head")[0].appendChild(c)}},callback:function(a){var c=document.createElement("div");c.innerHTML=a.body;"undefined"===typeof c.getElementsByClassName&&(z=!1);a=[];var g=[],f=[],h=[],b=[],p=[],t=[],e=0;if(z)for(c=c.getElementsByClassName("tweet");e<c.length;){0<c[e].getElementsByClassName("retweet-credit").length?b.push(!0):b.push(!1);if(!b[e]||b[e]&&D)a.push(c[e].getElementsByClassName("e-entry-title")[0]),
p.push(c[e].getAttribute("data-tweet-id")),g.push(c[e].getElementsByClassName("p-author")[0]),f.push(c[e].getElementsByClassName("dt-updated")[0]),t.push(c[e].getElementsByClassName("permalink")[0]),void 0!==c[e].getElementsByClassName("inline-media")[0]?h.push(c[e].getElementsByClassName("inline-media")[0]):h.push(void 0);e++}else for(c=m(c,"tweet");e<c.length;)a.push(m(c[e],"e-entry-title")[0]),p.push(c[e].getAttribute("data-tweet-id")),g.push(m(c[e],"p-author")[0]),f.push(m(c[e],"dt-updated")[0]),
t.push(c[e].getElementsByClassName("permalink")[0]),void 0!==m(c[e],"inline-media")[0]?h.push(m(c[e],"inline-media")[0]):h.push(void 0),0<m(c[e],"retweet-credit").length?b.push(!0):b.push(!1),e++;a.length>k&&(a.splice(k,a.length-k),g.splice(k,g.length-k),f.splice(k,f.length-k),b.splice(k,b.length-k),h.splice(k,h.length-k),t.splice(k,t.length-k));c=[];e=a.length;for(b=0;b<e;){if("string"!==typeof y){var d=f[b].getAttribute("datetime"),l=new Date(f[b].getAttribute("datetime").replace(/-/g,"/").replace("T",
" ").split("+")[0]),d=y(l,d);f[b].setAttribute("aria-label",d);if(a[b].innerText)if(z)f[b].innerText=d;else{var l=document.createElement("p"),I=document.createTextNode(d);l.appendChild(I);l.setAttribute("aria-label",d);f[b]=l}else f[b].textContent=d}d="";C?(r&&(n(a[b]),q&&n(g[b])),q&&(d+='<div class="user">'+w(g[b].innerHTML)+"</div>"),d+='<p class="tweet">'+w(a[b].innerHTML)+"</p>",v&&(d=G?d+('<p class="timePosted"><a href="'+t[b]+'">'+f[b].getAttribute("aria-label")+"</a></p>"):d+('<p class="timePosted">'+
f[b].getAttribute("aria-label")+"</p>"))):a[b].innerText?(q&&(d+='<p class="user">'+g[b].innerText+"</p>"),d+='<p class="tweet">'+a[b].innerText+"</p>",v&&(d+='<p class="timePosted">'+f[b].innerText+"</p>")):(q&&(d+='<p class="user">'+g[b].textContent+"</p>"),d+='<p class="tweet">'+a[b].textContent+"</p>",v&&(d+='<p class="timePosted">'+f[b].textContent+"</p>"));E&&(d+='<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+p[b]+'" class="twitter_reply_icon"'+(r?' target="_blank">':
">")+'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id='+p[b]+'" class="twitter_retweet_icon"'+(r?' target="_blank">':">")+'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id='+p[b]+'" class="twitter_fav_icon"'+(r?' target="_blank">':">")+"Favorite</a></p>");F&&void 0!==h[b]&&(l=h[b],void 0!==l?(l=l.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0],l=decodeURIComponent(l).split('"')[1]):l=void 0,d+='<div class="media"><img src="'+l+'" alt="Image from tweet" /></div>');
c.push(d);b++}if(null===A){a=c.length;g=0;f=document.getElementById(B);for(h="<ul>";g<a;)h+="<li>"+c[g]+"</li>",g++;f.innerHTML=h+"</ul>"}else A(c);x=!1;0<u.length&&(H.fetch(u[0]),u.splice(0,1))}};return window.twitterFetcher=H});


function dateFormatter(date) {
  return date.toTimeString();
}

// ##### Advanced example 2 #####
// Similar as previous, except this time we pass a custom function to render the
// tweets ourself! Useful if you need to know exactly when data has returned or
// if you need full control over the output.

var config5 = {
  "id": '598894124360667136',
  "domId": 'example5',
  "maxTweets": 20,
  "enableLinks": true,
  "showUser": true,
  "showTime": true,
  "dateFunction": '',
  "showRetweet": false,
  "dateFunction": dateFormatter,
  "customCallback": handleTweets,
  "showInteraction": false
};

// var initialTime = 0;

var angryTweets = [],
angryTop = 0,
angryCount = 0;

function logValues() {
  // var angryTop = Math.max.apply(Math, angryTweets);
  console.log('top ' + angryTop);
  console.log('tweets ' + angryTweets);
  console.log('count ' + angryCount);
  
}

function countVal() {
   //count the number equal
   

      var thisCount = 0;
      for (var i = 0; i < angryTweets.length; i++) {
          if (angryTweets[i] == angryTop) {
             thisCount++;
          }
      };
    return thisCount;
}


function test(total) {
  total = total / 2;
  return total;
}

function handleTweets(tweets){

  //reset values
  angryTweets = []
  angryCount = 0;
  angryTop = 0;

  //get number of tweets in last seconds

  //get time of first tweet
  var twtTime= tweets[0];
  twtTime = twtTime.split('class="timePosted">')[1];
  twtTime = twtTime.split('">')[1];
  twtTime = twtTime.split(' ')[0];



    var x = tweets.length;
    var n = 0;
    var element = document.getElementById('example5');
    var html = '<ul>';
    while(n < x) {

      var twtTime= tweets[n];
       twtTime = twtTime.split('class="timePosted">')[1];
       twtTime = twtTime.split('">')[1];
       twtTime = twtTime.split(' ')[0];

       //split in to seconds
       var a = twtTime.split(':'); // split it at the colons
       // minutes are worth 60 seconds. Hours are worth 60 minutes.
       var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 

       angryTweets[n] = seconds;



      // //get tweet content
      // var twtContent = tweets[n];
      // twtContent = twtContent.split('class="tweet">')[1];
      // twtContent = twtContent.split('</p>')[0];
      // // end get tweet content

      html += '<li>' + seconds + '</li>';
      n++;
      }
      html += '</ul>';
      element.innerHTML = html;
    



    countVal();
    //GET ANGRY VALUES
    angryTop = Math.max.apply(Math, angryTweets);
    angryCount = countVal();

    //console log the values for angry
    logValues();

}

twitterFetcher.fetch(config5);


