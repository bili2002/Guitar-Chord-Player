
window.onload = function() {
  var frequencySlider = document.getElementById('frequency');
  var difficultySlider = document.getElementById('difficulty');
  var modeSlider = document.getElementById('mode');

  var frequencyOutput = document.getElementById('freq-value');
  var difficultyOutput = document.getElementById('diff-value');
  var modeOutput = document.getElementById('mode-value');

  frequencyOutput.innerHTML = frequencySlider.value;
  difficultyOutput.innerHTML = difficultySlider.value;
  modeOutput.innerHTML = modeSlider.value;

  frequencySlider.oninput = function() {
    frequencyOutput.innerHTML = this.value;
  }

  difficultySlider.oninput = function() {
    difficultyOutput.innerHTML = this.value;
  }

  modeSlider.oninput = function() {
    modeOutput.innerHTML = this.value;
  }


  var modeOutput = document.getElementById('mode-value');
  modeOutput.innerHTML = 'All';

  modeSlider.oninput = function() {
      var modetext = '';
      switch (this.value) {
          case '0':
              modetext = 'All';
              break;
          case '1':
              modetext = 'Only Chord';
              break;
          case '2':
              modetext = 'Delayed Chord';
              break;
          case '3':
              modetext = 'Only Name';
              break;
          case '4':
              modetext = 'Delayed Name';
              break;
      }
      modeOutput.innerHTML = modetext;
  }
}