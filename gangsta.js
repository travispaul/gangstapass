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
        swapChar = function (pwChar, lChars) {
            var c, 
            chosenChar = pwChar;
            for (c = 0; c < lChars.length; c += 1) {
                if (randmax(100) % 3 === 0) {
                    chosenChar = lChars[c];
                }
            }
            if (chosenChar === pwChar) {
                chosenChar = (randmax(100) % 4 === 0) ? 
                    pwChar.toUpperCase() : pwChar;
            }
            return chosenChar;
        },
        leetspeak = function (pw) {
            var i;
            pw = pw.split('');

            for(i = 0; i < pw.length; i += 1) {
                if (pw[i] === 'a' || pw[i] === 'A'){
                    pw[i] = swapChar(pw[i], leetChars.charA);
                } else if (pw[i] === 'b' || pw[i] === 'B') {
                    pw[i] = swapChar(pw[i], leetChars.charB);
                } else if (pw[i] === 'c' || pw[i] === 'C') {
                    pw[i] = swapChar(pw[i], leetChars.charC);
                } else if (pw[i] === 'e' || pw[i] === 'E') {
                    pw[i] = swapChar(pw[i], leetChars.charE);
                } else if (pw[i] === 'g' || pw[i] === 'G') {
                    pw[i] = swapChar(pw[i], leetChars.charG);
                } else if (pw[i] === 'i' || pw[i] === 'I') {
                    pw[i] = swapChar(pw[i], leetChars.charI);
                } else if (pw[i] === 'o' || pw[i] === 'O') {
                    pw[i] = swapChar(pw[i], leetChars.charO);
                } else if (pw[i] === 's' || pw[i] === 'S') {
                    pw[i] = swapChar(pw[i], leetChars.charS);
                } else if (pw[i] === 't' || pw[i] === 'T') {
                    pw[i] = swapChar(pw[i], leetChars.charT);
                } else if (pw[i] === 'x' || pw[i] === 'X') {
                    pw[i] = swapChar(pw[i], leetChars.charX);
                } else if (pw[i] === 'z' || pw[i] === 'Z') {
                    pw[i] = swapChar(pw[i], leetChars.charZ);
                } else {
                    pw[i] = (randmax(100) % 6 === 0) ? 
                        pw[i].toUpperCase() : pw[i];
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