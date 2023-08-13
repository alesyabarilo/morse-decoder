const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const array = [];
    
    for (let i = 0; i < expr.length; i++) {
        if (i % 10 === 0) {
        array.push(expr.slice(i, i+10))
        }
    }

    const cutArray = array.map( item => {
        for (let i = 0; i < item.length; i++) {
            if (item[i] === '1') return item.slice(i);

            if (item[0] === '*') return item;
            }
        });

    const morseArray = cutArray.map( item => {
        if (item[0] === '*') return item;
        let signs = '';
        for (let i = 0; i < item.length; i = i + 2) {
            if (item[i + 1] === '0') {
                signs += '.';
            } else {
                signs += '-'; 
            }
        }
        return signs;
    })

    return morseArray.map( item => {
        if (item[0] === '*') return ' ';
        for (let key in MORSE_TABLE) {
            if (key === item) return MORSE_TABLE[key];
        }
    }).join('');
}

module.exports = {
    decode
}