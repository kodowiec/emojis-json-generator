# emojis.json generator (backporter)

This script retrieves latest emojilib data and generates emojis.json in old [emojilib](https://github.com/muan/emojilib) 2.x format:
```json
{
  "grinning": {
    "keywords": ["face", "smile", "happy", "joy"],
    "char": "😀",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  ...
}
```

### how to run it
it's scripted as post install, so simple `npm install` is enough.
tested on node 22


### why even bother
This is an oddly specific script. I have a solution that works well with the previous format, and I live in spite of _if it ain't broke, don't fix it_ - why risk breaking existing solution, when the data can be backported.

new format is more character oriented:
```json
{
  '😀': [
    'grinning_face',
    'face',
    'smile',
    'happy',
    'joy',
    ':D',
    'grin'
  ],
  '😃': [
    'grinning_face_with_big_eyes',
    'face',
    'happy',
    'joy',
    'haha',
  ...
}
```

