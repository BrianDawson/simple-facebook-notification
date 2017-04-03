var imgURL = chrome.extension.getURL("icon.ico");
var currentIconSrc = getFavicon().attr("href");

var msgElement = $("#mercurymessagesCountValue");
var notifElement = $("#notificationsCountValue");

$(msgElement).bind("DOMSubtreeModified",function() {
  checkNotifs();
});

$(notifElement).bind("DOMSubtreeModified",function() {
  checkNotifs();
});

function checkNotifs() {
  var favicon = getFavicon();
  var msgCount = parseInt($(msgElement).text());
  var notifCount = parseInt($(notifElement).text());
    
  if(msgCount > 0 || notifCount > 0) {
    if($(favicon).attr("href") != imgURL) {
      $(favicon).attr("href", imgURL);
    }
  } else {
    if($(favicon).attr("href") == imgURL) {
      $(favicon).attr("href", currentIconSrc);
    }
  }
}

function getFavicon(){
  var favicon = undefined;
  
  $("link").each(function() {
    if($(this).attr("rel") == "icon" || $(this).attr("rel") == "shortcut icon") {
      favicon = $(this);
    }
  });
  
  return $(favicon);     
}