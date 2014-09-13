console.log("PLP Theme activated")
document.styleSheets[0].disabled = true;
$('a.brand').html('<img alt="Logo-horiz" src="/assets/logo-horiz-390ef8d2489bce7aa07b97b813f028f8.png">');
$('ul.nav>li.dropdown>a.dropdown-toggle[data-target="dropdown-user"]').html('Alex<b class="caret"></b>');
$('ul.nav>li.dropdown>a.dropdown-toggle[data-target="dropdown-help"]').remove();
$('.the-line').hide();
$('title').html('PLP');
$('body').append('<div id="keyModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="keyModalLabel" aria-hidden="true"><div class="modal-body"><table class="table"><tbody><tr><th></th><th>Key shortcuts</th></tr><tr><td><kbd>d</kbd></td><td>Dashboard (Home Page)</td></tr><tr><td><kbd>y</kbd></td><td>This Year</td></tr><tr><td><kbd>g</kbd></td><td>Grades</td></tr><tr><td><kbd>r</kbd></td><td>Reflections</td></tr><tr><td><kbd>c</kbd></td><td>College</td></tr></tbody></table></div><div class="modal-footer"><button class="btn" data-dismiss="modal" aria-hidden="true">Close</button></div></div>');
var toggle = "javascript:$('.the-line').toggle()";
$('ul#dropdown-user>li').append('<a href="' + toggle + '">Toggle Line</a>')
$("body").keydown(function(e) {
  if(e.keyCode == 76) {
    $(".the-line").toggle();
  }
  if(e.keyCode == 68) {
    window.location.href = 'https://app.mysummitps.org/my/dashboard';
  }
  if(e.keyCode == 89) {
    window.location.href = 'https://app.mysummitps.org/my/year';
  }
  if(e.keyCode == 67) {
    window.location.href = 'https://app.mysummitps.org/my/college/step/0';
  }
  if(e.keyCode == 82) {
    window.location.href = 'https://app.mysummitps.org/my/reflections';
  }
  if(e.keyCode == 71) {
    window.location.href = 'https://app.mysummitps.org/my/grades';
  }
  if(e.keyCode == 191) {
    $('#keyModal').modal('toggle');
  }
});
$('.icon-holder').remove()
$('.row-fluid>.span8').css('padding-top', '10px')
