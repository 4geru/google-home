const googlehome = require('google-home-notifier')
const language = 'ja';

googlehome.device('Google-Home', language); 

googlehome.notify('なかむらだよ', function(res) {
  console.log(res);
});

// googlehome.play('http://lax05.vid.anitu.be/Qsi5j8eayb_K5hzlIZdkrQ/1514484316/94712.mp4', function(res) {
//   console.log(res);
// });