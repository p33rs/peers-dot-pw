function WorstWebsite() {
    this.bind();
}
WorstWebsite.prototype.words = [
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
WorstWebsite.prototype.bind = function() {
    $('#man_why_you_even_got_to_do_a_thing')
        .on('mouseenter mouseleave', $.proxy(this.swapText, this));
    $('#click_click_click_click_click')
        .on('click', $.proxy(this.yesyesyesyesyes, this));
};
WorstWebsite.prototype.swapText = function(e) {
    if (e.type === 'mouseenter') {
        $('#fuck_yes_i_am_awesome').hide();

        $('#anticipa___________________tion').text(
            this.words[this.rand(0, this.words.length - 1)]
        ).show();
    } else if (e.type === 'mouseleave') {
        $('#anticipa___________________tion').hide();
        $('#fuck_yes_i_am_awesome').show();
    }
};
WorstWebsite.prototype.rand = function(min, max) {
    if (typeof min === 'undefined') min = 0;
    if (typeof max === 'undefined') max = 1;
    if (min > max) {
        throw new RangeError('requested invalid range');
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
WorstWebsite.prototype.yesyesyesyesyes = function(e) {
    e.preventDefault();
    this.catStorm().seizure();
    $('body').css('background-color', '#1c4170');
    window.setTimeout(function() {
        window.location = $(e.currentTarget).css('color', '#fff').attr('href');
    }, 2000)
};
WorstWebsite.prototype.catStorm = function() {
    this.cats = new Storm({ object: $('<img />').attr('src', 'img/nyan.gif'), spawners: 32, minDelay: 50 });
    this.cats.start();
    return this;
};
WorstWebsite.prototype.seizure = function() {
    this.seizure = new Epilepsy({
        object: $('<div />').html('HIRE<br />ME').addClass('seizure'),
        animation: function() {
            if ($(this).is('.seized')) {
                $(this).removeClass('seized');
            } else {
                $(this).addClass('seized');
            }
        },
        minDelay: 500,
        maxDelay: 1000,
        minDuration: 50,
        maxDuration: 50
    })
    this.seizure.start();
    return this;
};


$(function() {
    new WorstWebsite();
});