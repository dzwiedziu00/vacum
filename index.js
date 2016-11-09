(function () {
    'use strict'
    var activeElement;
    var pages = {
        'contact': './pages/contact.json'
    };


    var renderPage = function (page) {
        $.getJSON('pages/' + page + '.json', function(data) {
            console.log(data);
            var $content = $('#content');
            var $title = $('#title');
            $content.empty();
            $title.empty();
            var html = $.parseHTML(data.content.join(''));
            $(html).appendTo($content);
            $title.html(data.title);
        });
    }
    renderPage('home');


    $(document).ready(function () {

        $('#contact').click(function() {
            handleClick('contact', this);
        });

        $('#home').click(function() {
            handleClick('home', this);
        });

        $('#tech').click(function() {
            handleClick('tech', this);
        });

        $('#gallery').click(function() {
            handleClick('gallery', this);
        });
    });

    var handleClick = function (pageHtml, elem) {
        var $elem = $(elem);
        console.log(activeElement);
        if(activeElement) {
            activeElement.removeClass('active');
        } else {
            $('#home').removeClass('active') ;
        }

        $elem.addClass('active');
        activeElement = $elem;
        renderPage(pageHtml);
    };
})();
