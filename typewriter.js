const delayedSentence = (sentence, delayTime) => {
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      if (sentence.length === 1) {
        process.stdout.write(sentence + '\n');
      }
      else {
        process.stdout.write(sentence[i]);
      }
    }, delayTime * (i + 1))
  }
};
const testSentence = "hello there from lighthouse labs\n";
//const testSentence = "h";

delayedSentence(testSentence, 50);