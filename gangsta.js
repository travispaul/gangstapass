(function (window) {
    'use strict';

    var pass = document.getElementById('pass'),
        button = document.getElementById('generate'),
        words = [],
        numbers = [],
        seperator = ['-', '_', '/', '', '!'],
        holla = function (library) {
           words = library.words;
           numbers = library.numbers;
           doit();
        },
        randmax = function (max) {
            return Math.floor(Math.random() * max);
        },
        random = function (items) {
            return items[randmax(items.length)];
        },
        doit = function () {
            var str1, count;
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

            str1 = str1.split('');
            for (count = 0; count < str1.length; count += 1) {
                str1[count] = (randmax(100) % 6 === 0) ?
                    str1[count].toUpperCase() : str1[count];
            }
            pass.value = str1.join('');

        };

    if (button.addEventListener) {
        button.addEventListener('click', doit); 
    } else if (el.attachEvent)  { // IE < 9 be straight trippin'
        button.attachEvent('onclick', doit);
    }

    // Export JSONP callback
    window.holla = holla;
})(window);
