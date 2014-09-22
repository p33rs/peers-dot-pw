<!DOCTYPE html>
<html lang="en">
<head>

  <!-- you can read the source all you want, it'll still be an ugly fucking website -->

  <meta charset="utf-8" />
  <meta name="description" content="I'm Jon. I move mountains." />
  <title>Jon Pierce - Web Developer and Comic Sans Enthusiast</title>
  <link href='http://fonts.googleapis.com/css?family=Rubik+One' rel='stylesheet' type='text/css'>
  
  <script src="https://code.jquery.com/jquery-1.11.1.min.js" type="text/javascript"></script>
  
  <script type="text/javascript">
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
        }).on('click', function(e) {
            e.preventDefault();
            window.location = 'https://github.com/p33rs';
        });
    });
  </script>
  <style>
    * {
      padding: 0;
      margin: 0;
      font-family: 'Rubik One', 'Arial Black', sans-serif;
      font-size: 1.5em;
    }
    body {
      height: 100%;
      width: 100%;
    }
    #fuck_yes_i_am_awesome, #anticipa___________________tion {
      height: 1em;
      position: absolute;
      top: 50%;
      width: 100%;
      text-align: center;
      margin-top: -.5em;
      cursor: pointer;
    }
    #anticipa___________________tion {
      display: none;
    }
    #the_metals_kiss_and_the_fuel_turn_lively {
      display: none;
    }
  </style>
  
</head>
<body>
    <section id="man_why_you_even_got_to_do_a_thing">
        <p id="fuck_yes_i_am_awesome">jon pierce</p>
        <p id="anticipa___________________tion">(click)</p>
    </section>
</body>
</html>
