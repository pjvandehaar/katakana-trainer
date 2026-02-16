import { describe, it, expect } from 'vitest';
import { toHiragana, getKanaRomajiPairs } from './utils';

describe('toHiragana', () => {
  it('converts katakana to hiragana', () => {
    expect(toHiragana('ピアノ')).toBe('ぴあの');
    expect(toHiragana('バナナ')).toBe('ばなな');
  });

  it('handles long vowels correctly', () => {
    // ー should convert to the previous vowel
    expect(toHiragana('サッカー')).toBe('さっかあ');
    expect(toHiragana('コーヒー')).toBe('こおひい');
  });
});

describe('getKanaRomajiPairs', () => {
  it('correctly identifies pairs', () => {
    const pairs = getKanaRomajiPairs('ピアノ');
    expect(pairs).toEqual([
      { kana: 'ピ', romaji: 'PI' },
      { kana: 'ア', romaji: 'A' },
      { kana: 'ノ', romaji: 'NO' }
    ]);
  });

  it('handles digraphs', () => {
    const pairs = getKanaRomajiPairs('キャ');
    expect(pairs).toEqual([
      { kana: 'キャ', romaji: 'Kya' }
    ]);
  });
});
