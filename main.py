import random
import time
import os
import sys
from enum import IntEnum
from info import chords, strings, strings_letters, chords_difficulty

class ChordDisplay(IntEnum):
    all = 0
    only_chord = 1
    delayed_chord = 2
    only_name = 3
    delayed_name = 4

def show_single_chord(chord, display = ChordDisplay.all, delay = None):
    key, value = chord

    if display == ChordDisplay.all:
        print(key + ":")
        print()

        for (val, string_letter) in zip(value, strings_letters):
            print(string_letter + " | " + strings[val])
        print()
        time.sleep(delay)

    elif display == ChordDisplay.only_chord:
        for (val, string_letter) in zip(value, strings_letters):
            print(string_letter + " | " + strings[val])
        print()
        time.sleep(delay)

    elif display == ChordDisplay.only_name:
        print(key)
        print()
        time.sleep(delay)

    elif display == ChordDisplay.delayed_chord:
        for (val, string_letter) in zip(value, strings_letters):
            print(string_letter + " | " + strings[val])

        time.sleep(delay)
        print()
        print(key)
        print()

    elif display == ChordDisplay.delayed_name:
        print(key)
        print()

        time.sleep(delay)
        for (val, string_letter) in zip(value, strings_letters):
            print(string_letter + " | " + strings[val])
        print()


def print_line(chords_names):
    keys = chords_names
    values = [chords[chord_name] for chord_name in chords_names]

    lines = [""] * len(strings_letters)
    for (i, string_letter) in enumerate(strings_letters):
        lines[i] += string_letter

    for value in values:
        for (i, value) in enumerate(value):
            lines[i] += " | " + strings[value] 

    for key in keys[:-1]:
        print(key + ', ', end="")
    print(keys[-1] + ":")
    print()

    for line in lines:
        print(line)

    print()
    print()


def display_all_chords():
    for chord in chords.items():
        show_single_chord(chord)


def display_random_chords(frequency, difficulty, game_mode):
    all_chords = list(chords.items())
    chords_difficulty_calced = []
    for (curr_chord, _) in all_chords:
        chords_difficulty_calced.append((difficulty - chords_difficulty[curr_chord]) * (difficulty - chords_difficulty[curr_chord]))

    i = 0
    while i < 20:
        chord = random.choices(all_chords, weights=chords_difficulty_calced, k=1)[0]
        
        os.system('clear')
        show_single_chord(chord, game_mode, frequency / 2)
        time.sleep(frequency / 2)

if __name__ == "__main__":
    display_random_chords(int(sys.argv[1]), int(sys.argv[2]), int(sys.argv[3]))


# print_line(["G", "Em", "C", "D", "G", "Em", "C", "D", "G", "Em"])