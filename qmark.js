!function(){"use strict";function e(e){e.className=e.className.replace(/help-isVisible*/g,""),e.className=e.className.trim()}function t(){var e=window,t=document,l=t.documentElement,n=t.getElementsByTagName("body")[0],i=e.innerWidth||l.clientWidth||n.clientWidth;return i}function l(){var e=document;return Math.max(e.body.scrollHeight,e.documentElement.scrollHeight,e.body.offsetHeight,e.documentElement.offsetHeight,e.body.clientHeight,e.documentElement.clientHeight)}function n(e){for(e.helpColsTotal=0,e.i=0;e.i<e.helpLists.length;e.i+=1)-1!==e.helpLists[e.i].className.indexOf("help-list")&&(e.helpColsTotal+=1),e.helpListsHeights[e.i]=e.helpLists[e.i].offsetHeight;e.maxHeight=Math.max.apply(Math,e.helpListsHeights),t()<=1180&&t()>630&&e.helpColsTotal>2&&(e.helpColsTotal=2,e.maxHeight=e.maxHeight*e.helpColsTotal),t()<=630&&(e.maxHeight=e.maxHeight*e.helpColsTotal,e.helpColsTotal=1),e.helpListWrap.style.offsetWidth=e.helpList.offsetWidth*e.helpColsTotal+"px",e.helpListWrap.style.height=e.maxHeight+"px",e.helpModal.style.width=e.helpList.offsetWidth*e.helpColsTotal+60+"px",e.helpModal.style.height=e.maxHeight+100+"px"}function i(e){e=e||window.event;var t=e.keyCode||e.which;return t}function o(){var t,o=document.getElementById("helpUnderlay"),s=document.getElementById("helpModal"),a=document.getElementById("helpClose"),h=null,d={i:null,maxHeight:null,helpListWrap:document.getElementById("helpListWrap"),helpList:document.querySelector(".help-list"),helpLists:document.querySelectorAll(".help-list"),helpModal:s,helpColsTotal:null,helpListsHeights:[]};n(d),document.addEventListener("keypress",function(e){63===i(e)&&(t=document.getElementById("helpUnderlay").className,-1===t.indexOf("help-isVisible")&&(document.getElementById("helpUnderlay").className+=" help-isVisible")),o.style.height=l()+"px"},!1),document.addEventListener("keyup",function(t){27===i(t)&&e(o)},!1),o.addEventListener("click",function(){e(o)},!1),s.addEventListener("click",function(e){e.stopPropagation()},!1),a.addEventListener("click",function(){e(o)},!1),window.onresize=function(){null!==h&&clearTimeout(h),h=setTimeout(function(){n(d)},100)}}function s(){var e=!1;return window.XMLHttpRequest&&(e=new XMLHttpRequest),e}function a(e,t){document.getElementById("helpUnderlay")||(document.getElementsByTagName("body")[0].innerHTML+=e,t())}function h(e){if(4===e.readyState&&(200===e.status||304===e.status)){var t=e.responseText;a(t,function(){o()})}}function d(){var e=s();e?(e.onreadystatechange=function(){h(e)},e.open("GET","https://rawgit.com/everestps/theme/master/qmark.html",!0),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),e.send(null)):document.getElementsByTagName("body")[0].innerHTML+="Error: Your browser does not support Ajax"}d()}();
