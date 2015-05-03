(function (window) {
    'use strict';

    var pass = document.getElementById('pass'),
        button = document.getElementById('generate'),
        words = [],
        numbers = [],
        leetChars,
        seperator = ['-', '_', '/', ''],
        holla = function (library) {
           words = library.words;
           numbers = library.numbers;
           leetChars = library.leetChars;
           doit();
        },
        randmax = function (max) {
            return Math.floor(Math.random() * max);
        },
        random = function (items) {
            return items[randmax(items.length)];
        },
        swapChar = function (pwChar) {
            var c,
            lcIndex = pwChar.toUpperCase();
            if (leetChars.hasOwnProperty(lcIndex)) {
                for (c = 0; c < leetChars[lcIndex].length; c += 1) {
                    if (randmax(100) % 3 === 0) {
                        return leetChars[lcIndex][c];
                    } else {
                        return pwChar
                    }
                }
            } else {
                return pwChar        
            }
        },
        leetspeak = function (pw) {
            var i, newPWC;
            pw = pw.split('');

            // sends characters to swapChar, randomly capitalizes a character
            //  if not changed in swapChar.
            for (i = 0; i < pw.length; i += 1) {
                newPWC = swapChar(pw[i]);
                if (pw[i] === newPWC) {
                    pw[i] = (randmax(100) % 4 === 0) ? 
                        pw[i].toUpperCase() : pw[i];
                } else {
                    pw[i] = newPWC;
                }
            }
            return pw.join('');

        },
        doit = function () {
            var str1, count,
                secureLvl = document.getElementById('security-lvl').value;
            switch(randmax(3)) {
                case 0:
                    str1 = random(words) + random(seperator) + random(words) + random(numbers);
                    break;
                case 1:
                    str1 = random(words) + random(numbers) + random(seperator) + random(words);
                    break;
                case 2:
                    str1 = random(numbers) + random(words) + random(seperator) + random(words);
                    break;
            }

            switch(secureLvl) {
                case 'high':
                    pass.value = leetspeak(str1);
                    break;
                case 'medium':
                    str1 = str1.split('');
                    for (count = 0; count < str1.length; count += 1) {
                        str1[count] = (randmax(100) % 4 === 0) ?
                            str1[count].toUpperCase() : str1[count];
                    }
                    pass.value = str1.join('');
                    break;
                case 'low':
                default:
                    pass.value = str1;
                    break;

            }

        };

    if (button.addEventListener) {
        button.addEventListener('click', doit); 
    } else if (el.attachEvent)  { // IE < 9 be straight trippin'
        button.attachEvent('onclick', doit);
    }

    // Export JSONP callback
    window.holla = holla;
})(window);

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-62472323-1', 'auto');
ga('send', 'pageview');