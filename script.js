console.log("PLP Theme activated")
document.styleSheets[0].disabled = true;
$('a.brand').html('<img alt="Logo-horiz" src="/assets/logo-horiz-bcbf020a2ee400540c5cd08c879731f0.png">');
$('ul.nav>li.dropdown>a.dropdown-toggle[data-target="dropdown-user"]').html('Alex<b class="caret"></b>');
$('ul.nav>li.dropdown>a.dropdown-toggle[data-target="dropdown-help"]').remove();
$('.the-line').hide();
$('title').html('PLP');
var toggle = "javascript:$('.the-line').toggle()";
$('ul#dropdown-user>li').append('<a href="' + toggle + '">Toggle Line</a>')
$('.dropdown-menu.pull-right').append('<li><a href="http://tinyurl.com/everestgrade9" target="_blank">Everest Grade 9 <i class="icon-external-link small"></i></a></li>');
$(window).keybind('keydown', {
  'd': function(){window.location.href = 'https://app.mysummitps.org/my/dashboard'},
  'y': function(){window.location.href = 'https://app.mysummitps.org/my/year'},
  'c': function(){window.location.href = 'https://app.mysummitps.org/my/college/step/0'},
  'r': function(){window.location.href = 'https://app.mysummitps.org/my/reflections'},
  'g': function(){window.location.href = 'https://app.mysummitps.org/my/goals'},
  'l': function(){$('.the-line').toggle()},
  'S-g': function(){window.location.href = 'https://app.mysummitps.org/my/grades'}
});
$('.icon-holder').remove()
$('.row-fluid>.span8').css('padding-top', '10px')
