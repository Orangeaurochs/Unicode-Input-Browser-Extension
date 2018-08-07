var getActiveElement=function(document){
  document=document||window.document;
  if(document.body===document.activeElement||document.activeElement.tagName=='IFRAME'){
    var iframes=document.getElementsByTagName('iframe');
    for(var i=0;i<iframes.length;i++){
      var focused=getActiveElement(iframes[i].contentWindow.document);
      if(focused!==false){
        return focused;
      }
    }
  }
  else return document.activeElement;
  return false;
};

var entercode=function(event){
  if(event.which=='45'||event.keyCode=='45'){
    var activeEl=getActiveElement();
    if (activeEl.value.length>3){
      var cursorPosition = activeEl.selectionStart;
      if (cursorPosition>3) {
        var text=activeEl.value;
        var start = text.slice(0,cursorPosition-4);
        var chars = text.slice(cursorPosition-4,cursorPosition);
        var end = text.slice(cursorPosition);
        var symbol=String.fromCharCode('0x'+chars);
        var newText = start + symbol + end;
        activeEl.value = start + symbol + end;
        activeEl.setSelectionRange(cursorPosition-3,cursorPosition-3);
      }
    }
  }
};

window.onkeydown=entercode;




