console.log("PLP Theme activated")
document.styleSheets[0].disabled = true;
$('a.brand').html('<img alt="Logo-horiz" src="/assets/logo-horiz-390ef8d2489bce7aa07b97b813f028f8.png">');
$('ul.nav>li.dropdown>a.dropdown-toggle[data-target="dropdown-user"]').html('Alex<b class="caret"></b>');
$('ul.nav>li.dropdown>a.dropdown-toggle[data-target="dropdown-help"]').remove();
$('.the-line').hide();
$('title').html('PLP');
var toggle = "javascript:$('.the-line').toggle()";
$('ul#dropdown-user>li').append('<a href="' + toggle + '">Toggle Line</a>')
$('.dropdown-menu.pull-right').append('<li><a href="http://tinyurl.com/everestgrade9" target="_blank">Everest Grade 9 <i class="icon-external-link small"></i></a></li>');
key('d', function(){window.location.href = 'https://app.mysummitps.org/my/dashboard'})
key('y', function(){window.location.href = 'https://app.mysummitps.org/my/year'})
key('⌘+c, ctrl+c', function(){window.location.href = 'https://app.mysummitps.org/my/college/step/0'})
key('⌥+r, alt+r', function(){window.location.href = 'https://app.mysummitps.org/my/reflections'})
key('⌘+g, ctrl+g', function(){window.location.href = 'https://app.mysummitps.org/my/goals'})
key('⌥+g, alt+g', function(){window.location.href = 'https://app.mysummitps.org/my/grades'})
$(window).keybind('keydown', {
  'd': function(){window.location.href = 'https://app.mysummitps.org/my/dashboard'},
  'y': function(){window.location.href = 'https://app.mysummitps.org/my/year'},
  'd': function(){window.location.href = 'https://app.mysummitps.org/my/dashboard'},
  'd': function(){window.location.href = 'https://app.mysummitps.org/my/dashboard'},
  'd': function(){window.location.href = 'https://app.mysummitps.org/my/dashboard'},
  'd': function(){window.location.href = 'https://app.mysummitps.org/my/dashboard'},
});
$('.icon-holder').remove()
$('.row-fluid>.span8').css('padding-top', '10px')
