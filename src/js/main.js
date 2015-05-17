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

//happy
var config1 = {
  "id": '599621806916505600',
  "domId": 'example1',
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

//sad
var config2 = {
  "id": '599647946376945665',
  "domId": 'example2',
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

//surprised
var config3 = {
  "id": '599648303853240321',
  "domId": 'example3',
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


//afraid
var config4 = {
  "id": '599648517834027008',
  "domId": 'example4',
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

//afraid
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



//TWEET IN
var config6 = {
  "id": '599889871369596928',
  "domId": 'example6',
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



//DEFINE VARIABLES ************//

var emotionCount = 0;

var happyTweets = [],
happyTop = 0,
happyCount = 0;

var sadTweets = [],
sadTop = 0,
sadCount = 0;

var surprisedTweets = [],
surprisedTop = 0,
surprisedCount = 0;

var afraidTweets = [],
afraidTop = 0,
afraidCount = 0;

var angryTweets = [],
angryTop = 0,
angryCount = 0;

var emotionProportion = [];

var emotionLink = [ 
'happy',
'sad',
'surprised',
'afraid',
'angry'
];

var previousTweet = [];


var tweets = [];

//DEFINE FUNCTIONS ************//

function getTop(emotionTweets) {
  return Math.max.apply(Math, emotionTweets);
}

function countVal(tweetsIn, topVal) {
   //count the number equal
    var thisCount = 0;
    for (var i = 0; i < tweetsIn.length; i++) {
        if (tweetsIn[i] == topVal) {
           thisCount++;
        }
    };
  return thisCount;
}

function setHtmlValue(emotion, emotionCount) {
  var emotionID = '#' + emotion + '-count-num';
  $(emotionID).html(emotionCount);
};

function setHtmlPercents(emotionProportion) {

  $('#happy-col').width(emotionProportion[0] + '%');
  $('#sad-col').width(emotionProportion[1] + '%')
  $('#surprised-col').width(emotionProportion[2] + '%')
  $('#afraid-col').width(emotionProportion[3] + '%')
  $('#angry-col').width(emotionProportion[4] + '%')

};


function accentHigh(emotionProportion) { // NOT USED NOW
  // var maxEmotion = getTop(emotionProportion);
  // var thisCount = 0;
  //   for (var i = 0; i < emotionProportion.length; i++) {
  //       if (emotionProportion[i] == maxEmotion) {
  //          // thisCount = i;
  //          emotionProportion[i] = emotionProportion[i] * 1.1;
  //       }
  //       else {
  //         console.log('else');
  //         emotionProportion[i] = emotionProportion[i] * 0.89;
  //       }
  //   };
  // return emotionProportion;
}

function emotionMonitor(emotionProportion) { // NOT USED NOW
  var maxEmotion = getTop(emotionProportion);

  //WORK OUT WHICH ONE THIS IS
  var thisCount = 0;
    for (var i = 0; i < emotionProportion.length; i++) {
        if (emotionProportion[i] == maxEmotion) {
          var cssEmotion = emotionLink[i];
           i = emotionProportion.length;
        }
    };
    
    //add div with class
    $('#monitor').append('<div class="emotion-high ' + cssEmotion + '-col"></div>');

    //rezise divs
    var totalMonitors = $('.emotion-high');
    var newWidth = 100 / totalMonitors.length;
    totalMonitors.width(newWidth + '%');
    
}

function handleTweets(tweets){

  //reset on first go
  if (emotionCount == 0 ) {
    //reset values
    happyTweets = [];
    happyTop = 0;
    happyCount = 0;

    sadTweets = [];
    sadTop = 0;
    sadCount = 0;

    surprisedTweets = [];
    surprisedTop = 0;
    surprisedCount = 0;

    afraidTweets = [];
    afraidTop = 0;
    afraidCount = 0;

    angryTweets = [];
    angryTop = 0;
    angryCount = 0;

  }

  //get number of tweets in last seconds

  //get time of first tweet
  var twtTime = tweets[0];
  // if (twtTime.indexOf('class="timePosted">') >= 0) {  
  if (twtTime != undefined) {  
    twtTime = twtTime.split('class="timePosted">')[1];
    twtTime = twtTime.split('">')[1];
    twtTime = twtTime.split(' ')[0];
  }
  else {
    return;
  }



    var x = tweets.length;
    var n = 0;
    var html = '<ul>';
    while(n < x) {

  //HERE WE GET THE TIME VALUE OF EACH TWEET
      var twtTime= tweets[n];
       twtTime = twtTime.split('class="timePosted">')[1];
       twtTime = twtTime.split('">')[1];
       twtTime = twtTime.split(' ')[0];

       //split in to seconds
       var a = twtTime.split(':'); // split it at the colons
       // minutes are worth 60 seconds. Hours are worth 60 minutes.
       var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 


        if (emotionCount === 0) {
          happyTweets[n] = seconds;
        }
        else if (emotionCount === 1) {
          sadTweets[n] = seconds;
        }
        else if (emotionCount === 2) {
          surprisedTweets[n] = seconds;
        }
        else if (emotionCount === 3) {
          afraidTweets[n] = seconds;
        }
        else if (emotionCount === 4) {
          angryTweets[n] = seconds;
        }
        else if (emotionCount === 5) {
          //get tweet content
          if (tweets[0] != undefined) {
            var twtContent = tweets[0];
            twtContent = twtContent.split('class="tweet">')[1];
            twtContent = twtContent.split('</p>')[0];
          }
          else {
            twtContent = " ";
          }
          
        }
      n++;
      }

// HERE WE DO DIFFERENT CALCS FOR EACH OF THE DIVS - GETTING AMMOUNT OF TWEETS IN A SECOND
      if (emotionCount === 0) {
        //GET HAPPY VALUES
        happyTop = getTop(happyTweets);
        happyCount = countVal(happyTweets, happyTop);
        // setHtmlValue('happy', happyCount);
      }

      if (emotionCount === 1) {
        //GET ANGRY VALUES
        sadTop = getTop(sadTweets);
        sadCount = countVal(sadTweets, sadTop);
        // setHtmlValue('sad', sadCount);
      }

      if (emotionCount === 2) {
        //GET ANGRY VALUES
        surprisedTop = getTop(surprisedTweets);
        surprisedCount = countVal(surprisedTweets, surprisedTop);
        // setHtmlValue('surprised', surprisedCount);
      }

      if (emotionCount === 3) {
        //GET ANGRY VALUES
        afraidTop = getTop(afraidTweets);
        afraidCount = countVal(afraidTweets, afraidTop);
        // setHtmlValue('afraid', afraidCount);
      }
       
      if (emotionCount === 4) {
        //GET ANGRY VALUES
        angryTop = getTop(angryTweets);
        angryCount = countVal(angryTweets, angryTop);
        // setHtmlValue('angry', angryCount);

        //run equation
        var tweetTotal =  happyCount + sadCount + surprisedCount +  afraidCount + angryCount;

        emotionProportion[0] = (happyCount*99.85 / tweetTotal).toFixed(1);
        emotionProportion[1] = (sadCount*99.85 / tweetTotal).toFixed(1);
        emotionProportion[2] = (surprisedCount*99.85 / tweetTotal).toFixed(1);
        emotionProportion[3] = (afraidCount*99.85 / tweetTotal).toFixed(1);
        emotionProportion[4] = (angryCount*99.85 / tweetTotal).toFixed(1);

        //set div widths
        setHtmlPercents(emotionProportion);

        //add new time monitor bar
        emotionMonitor(emotionProportion);
      }

      if (emotionCount === 5) {
          //reset test arrays
          var inTest = [];
          var newTweetTest = false;

          //loop in a loop to comapre array of previous tweets against array of new tweets
          for (var i = 0; i < tweets.length; i++) {
            var rowTest = "not"
            for (var x = 0; x < tweets.length; x++) {
              if (previousTweet[i] == tweets[x]) {
                rowTest = "found"
              }
            }
            inTest[i] = rowTest;
          }

          //check array to see if there were any non matched tweets
          for(var i=0;i<inTest.length;i++) {

            if (inTest[i] == "not") {
              newTweetTest = true;
            }
          }

          //if not new tweets, empty the div / or fill up if new found
          if (newTweetTest == false) {
            //set to empty
            $('#emoti-tweet').html('<p></p>');
          }
          else {
            $('#emoti-tweet').html('<p>' + twtContent + '</p>');
          }

          //fill up the previous tweets array for the next time round
          for (var i = 0; i < tweets.length; i++) {
            previousTweet[i] = tweets[i];
          }
       
      }

    emotionCount++;

} //*** END HANDLE TWEETS **//


function runTweet() {
emotionCount = 0;
twitterFetcher.fetch(config1);
twitterFetcher.fetch(config2);
twitterFetcher.fetch(config3);
twitterFetcher.fetch(config4);
twitterFetcher.fetch(config5);
twitterFetcher.fetch(config6);
}

runTweet();

window.setInterval(runTweet, 4000);



