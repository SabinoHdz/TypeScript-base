(() => {
  enum AudioLevel {
    min = 1,
    medium = 5,
    max = 10,
  }
  let currendeAudio: AudioLevel = AudioLevel.medium;
  console.log(currendeAudio); // 2
  console.log(AudioLevel);
})();
