To run this program, use the following command:

```python
python main.py <frequency> <difficulty> <game_mode>
```

Here's a brief explanation of each parameter:

- `<frequency>`: Determines how frequently a new chord appears. Suggested value is around 10.
- `<difficulty>`: Defines the complexity of the chords. It should be a number between 1 (easiest) and 5 (most difficult).
- `<game_mode>`: Dictates the way the chord is displayed, with each mode represented by a different code.

Here are the game modes and corresponding codes:

- `0` - `all`: Default display mode.
- `1` - `only chord`: Displays only the chord.
- `2` - `delayed chord`: Shows the chord after a delay.
- `3` - `only name`: Displays only the chord name.
- `4` - `delayed name`: Shows the chord name after a delay.
