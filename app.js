const fs = require('fs');
const newEmojilib = require('emojilib');
const unicodeEmoji = require('unicode-emoji-json');

const convertToOldFormat = () => {
  const oldEmojilib = {};

  for (const [emojiChar, emojiData] of Object.entries(unicodeEmoji)) {
    const keywords = newEmojilib[emojiChar] || [];
    const { slug: name, skin_tone_support: fitzpatrick_scale, group: category } = emojiData;

    oldEmojilib[name] = {
      keywords,
      char: emojiChar,
      fitzpatrick_scale,
      category: category.toLowerCase().replace(/ & /g, '_')
    };
  }

  fs.writeFileSync('emojis.json', JSON.stringify(oldEmojilib, null, 2));
};

convertToOldFormat();