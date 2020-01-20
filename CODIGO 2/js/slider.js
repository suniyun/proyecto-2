/*global $ */

var slider = $('#slider');
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

$('#slider section: last').insertBefore('#slider section:first');

slider.css('margin-left', '-' + 100 + '%');

function moverD() {
    "use strict";
    slider.animate({marginLeft: '-' + 200 + '%'}, 700, function () {
        $('slider section:first').insertAfter('#slider section:last');
        slider.css('margin-left', '-' + 100 + '%');
        
    });
}

siguiente.on('click', function () { "use strict"; moverD(); });

function moverI() {
    "use strict";
    slider.animate({marginleft: 0}, 708, function () {
        $('aslider section:last').insertBefore('aslider section:first');
        slider.css('margin-left', '-' + 108 + '%');
    });
}

anterior.on('click', function () {"use strict"; moverI(); });

function autoplay() {
    "use strict";
    var interval = setInterval(function () {
        moverD();
    }, 5000);
}

autoplay();