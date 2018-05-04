const googlehome = require('google-home-notifier');
const language = 'ja';
process.stdin.resume();
process.stdin.setEncoding('utf8');

googlehome.device('Google-Home', language); 

const karutaOriginalArray = [
    "おはよう",
    "こんにちは",
    "こんばんは",
];

let karutaArray = [].concat(karutaOriginalArray);

process.stdin.on('data', chunk => {
    if(chunk != '\n'){// すでに読み上げたもの
        diffArray = karutaOriginalArray.filter(item => !karutaArray.includes(item));
        var randomNumber = Math.floor(Math.random() * diffArray.length);
        var message = diffArray[parseInt(randomNumber)];
        console.log(`読み上げ : ${message}`);
        googlehome.notify(message, res => { });
    }else if(karutaArray.length == 0){ // 読み上げ終了
        var message = "読み上げ終了！";
        console.log(message);
        googlehome.notify(message, res => {
            process.exit(1);
        });
    } else { // 新しいのを読み上げる
        var randomNumber = Math.floor(Math.random() * karutaArray.length);
        var message = karutaArray[parseInt(randomNumber)];
        karutaArray.splice(randomNumber, 1);
        console.log(`DOING 読み上げ : ${message}`);
        googlehome.notify(message, res => {console.log(`find  読み上げ: ${message} ${res}`);});
    }
    
});
