let ChordDisplay = {all: 0, only_chord: 1, delayed_chord: 2, only_name: 3, delayed_name: 4};
let i = 0;
let timer = null;

function showSingleChord(chord, display = ChordDisplay.all, delay = null) {
  let key = chord[0];
  let value = chord[1];
  
  
  console.log(display);
  console.log(display === ChordDisplay.only_chord);
  console.log(delay);
  console.log(key);
  console.log(value);

  if (display == ChordDisplay.all) {
      document.getElementById('chordName').innerText = key;
      document.getElementById('chordDiagram').innerText = createChordDiagram(value);
  }

  else if (display == ChordDisplay.only_chord) {
  console.log("herere only chord");
      document.getElementById('chordName').innerText = "";
      document.getElementById('chordDiagram').innerText = createChordDiagram(value);
  }

  else if (display == ChordDisplay.only_name) {
      document.getElementById('chordName').innerText = key;
      document.getElementById('chordDiagram').innerText = "";
  }

  else if (display == ChordDisplay.delayed_chord) {
      setTimeout(function() {
          document.getElementById('chordName').innerText = key;
      }, delay * 1000);
      document.getElementById('chordDiagram').innerText = createChordDiagram(value);
  }

  else if (display == ChordDisplay.delayed_name) {
      setTimeout(function() {
          document.getElementById('chordDiagram').innerText = createChordDiagram(value);
      }, delay * 1000);
      document.getElementById('chordName').innerText = key;
  }
}

function createChordDiagram(value) {
  let chordDiagram = "";
  for (let i = 0; i < value.length; i++) {
    let note = value[i];
    chordDiagram += strings_letters[i] + " | " + strings[note] + "\n";
  }
  console.log(chordDiagram);
  return chordDiagram;
}

function displayRandomChord(frequency, difficulty, game_mode) {
  document.getElementById('chordName').innerText = "?";
  document.getElementById('chordDiagram').innerText = "?";

  let all_chords = Object.entries(chords);
  let chords_difficulty_calced = [];
  
  for (let entry of all_chords) {
    chords_difficulty_calced.push(Math.pow(difficulty - chords_difficulty[entry[0]], 2))
  }

  let chord = all_chords[Math.floor(Math.random() * all_chords.length)];
  showSingleChord(chord, game_mode, frequency / 2)
  
  if (i < 20) {
    timer = setTimeout(displayRandomChord, frequency * 1000, frequency, difficulty, game_mode);
    i++;
  } else {
    clearTimeout(timer);
  }
}

document.getElementById('start').addEventListener('click', function() {
  let frequency = document.getElementById('frequency').value;
  let difficulty = document.getElementById('difficulty').value;
  let mode = document.getElementById('mode').value;

  console.log(frequency);
  console.log(difficulty);
  console.log(mode);

  i = 0;
  if (timer) clearTimeout(timer);
  displayRandomChord(frequency, difficulty, mode);
});
