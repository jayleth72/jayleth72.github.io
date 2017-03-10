var quoteArray = [
  {name: "Albert Einstein", quote: "Truth is what stands the test of experience."},
  {name: "Lily Tomlin", quote: "Man invented language to satisfy his deep need to complain."},
  {name: "Abraham H. Maslow", quote: "A musician must make music, an artist must paint, a poet \
         must write, if he is to be ultimately at peace with himself. What a man can be, he must be."},
  {name: "H. Jackson Brown, Jr", quote: "The best preparation for tomorrow is doing your best today."},
  {name: "Renee Repound", quote: "We French found it and called it joie de vivre -- the joy of living."},
  {name: "Arnold schwarzenegger", quote: "Strength does not come from winning. Your struggles develop your strengths.\
          When you go through hardships and decide not to surrender, that is strength."},
  {name: "Dwayne 'The Rock' Johnson", quote: "Don’t be afraid to be ambitious about your goals. Hard work never stops. Neither should your dreams."},
  {name: "Arnold schwarzenegger", quote: "We all have great inner power. The power is self-faith. There's really an attitude to winning. You have to see \
          yourself winning before you win. And you have to be hungry. You have to want to conquer."},
  {name: "Dwayne 'The Rock' Johnson", quote: "The wall! Your success is on the other side. Can’t jump over it or go around it. You know what to do"},
  {name: "Dalai Lama", quote: "Give the ones you love wings to fly, roots to come back and reasons to stay."},
  {name: "Dalai Lama", quote: "The ultimate source of happiness is not money and power, but warm-heartedness"},
  {name: "Dwayne 'The Rock' Johnson", quote: "When life puts you in touch situations, don’t say “Why Me?” Just say “Try Me"},
  {name: "Arnold schwarzenegger", quote: "Help others and give something back. I guarantee you will discover that while public service improves the \
         lives and the world around you, its greatest reward is the enrichment and new meaning it will bring your own life."},
  {name: "Barack Obama", quote: "Nothing in life that’s worth anything is easy."},
  {name: "Barack Obama", quote: "If we aren’t willing to pay a price for our values then we should ask ourselves whether we truly believe in them at all"},
  {name: "Mother Teresa", quote: "Everytime you smile at someone, it is an action of love, a gift to that person, a beautiful thing."},
  {name: "Mother Teresa", quote: "It is a kingly act to assist the fallen."}
];

function generateQuote() {

// choose  a randon quote the quoteArray
var randomNumber = getRandomInt(0, quoteArray.length);
   //document.getElementById('displayQuote').innerHTML = quoteArray[randomNumber].quote;
   var x = document.getElementById("quotation");
   x.querySelector("blockquote").innerHTML = quoteArray[randomNumber].quote;

   x.querySelector("#quoter").innerHTML = quoteArray[randomNumber].name;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
