$(function() {
    var rand = function(min, max) {
        if (typeof min === 'undefined') min = 0;
        if (typeof max === 'undefined') max = 1;
        if (min > max) {
            throw new RangeError('requested invalid range');
        }
        return Math.floor(Math.random() * (max - min)) + min;
    };
    var words = [
        'has a github',
        'has a github',
        'has a github',
        'is rad',
        'never used venmo',
        'develops internets',
        'rocks out',
        'designs apis',
        'develops javascript',
        'obsesses',
        'wrote this at 4 am',
        'is not a ninja',
        'needs a job',
        'つ ◕_◕ ༽つ'
    ];
    $('#man_why_you_even_got_to_do_a_thing').on('mouseover', function() {
        $('#fuck_yes_i_am_awesome').hide();
        $('#anticipa___________________tion').text(words[rand(0, words.length - 1)]).show();
    }).on('mouseleave', function() {
        $('#anticipa___________________tion').hide();
        $('#fuck_yes_i_am_awesome').show();
    });
    $('#click_click_click_click_click').on('click', function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        var cats = new Storm({ object: $('<img />').attr('src', 'img/nyan.gif') });
        cats.start();
        window.setTimeout(function() {
            window.location = href;
        }, 2000)
    });
});