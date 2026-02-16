import { ROMAJI_LOOKUP, HIRAGANA_LOOKUP, VOCABULARY } from './constants';
// ==========================================

/**
 * Convert a katakana/romaji string to hiragana
 */
export function toHiragana(str) {
    if (!str) return '';

    return str.split('').map((char, i, arr) => {
        // Convert "ー" to last vowel
        if (char === 'ー' && i > 0) {
            const prevRomaji = ROMAJI_LOOKUP[arr[i - 1]];
            if (prevRomaji) {
                return HIRAGANA_LOOKUP[prevRomaji.at(-1).toUpperCase()] || char;
            }
        }
        return HIRAGANA_LOOKUP[char] || char;
    }).join('');
}

/**
 * Return a breakdown string for a kana word, e.g. "ワ(WA)    イ(I)    ン(N)"
 * Handles digraphs like キャ → KYA
 * Handles katakana and hiragana
 */
export function getKanaRomajiBreakdownString(kanaStr) {
    const pairs = getKanaRomajiPairs(kanaStr);
    const parts = pairs.map(pair => `${pair.kana}(${pair.romaji})`);
    return parts.join('    ');
}

export function getKanaRomajiRubyHTML(kanaStr) {
    const pairs = getKanaRomajiPairs(kanaStr);
    const parts = pairs.map(pair => `<ruby style="ruby-position: under;">${pair.kana}<rt>${pair.romaji}</rt></ruby>`);
    return parts.join('');
}

/* Return [{ kana, romaji }, ...] pairs for a kana string, with digraphs handled */
export function getKanaRomajiPairs(kanaStr) {
    const pairs = [];
    if (!kanaStr) return pairs;
    const smallCombiners = ['ャ', 'ュ', 'ョ', 'ィ', 'ェ', 'ゥ', 'ァ', 'ォ'];  // not 'ッ'
    for (let i = 0; i < kanaStr.length; i++) {
        const kana = kanaStr[i];
        const romaji = ROMAJI_LOOKUP[kana] || '';
        const nextKana = kanaStr[i + 1];
        // Check if this is a digraph (consonant + small kana)
        if (nextKana && (smallCombiners.includes(nextKana))) {
            const baseRom = ROMAJI_LOOKUP[kana] || '';
            const smallRom = ROMAJI_LOOKUP[nextKana] || '';
            let consonant = baseRom.slice(0, -1) || baseRom[0];
            if (consonant === 'U') consonant = 'W'; // special case for ウ + small vowel
            pairs.push({ kana: kana + nextKana, romaji: consonant + smallRom });
            i++; // skip the small kana since we already rendered it
            continue
        } else {
            pairs.push({ kana, romaji });
        }
    }
    return pairs;
}

export function getRandomSubset(count, arr) {
    const selected = [];
    const available = [...arr];
    for (let i = 0; i < count && available.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * available.length);
        selected.push(available[randomIndex]);
        available.splice(randomIndex, 1);
    }
    return selected;
}

export function getWordsFromURL() {
    if (typeof window !== 'undefined') {
        const wordsParam = new window.URLSearchParams(window.location.search).get('words');
        if (wordsParam) {
            console.log(`getWordsFromURL()::wordsParam = ${wordsParam}`);
            const indexes = wordsParam.split(',').map(s => parseInt(s));
            console.log(`getWordsFromURL()::indexes = ${JSON.stringify(indexes)}`)
            if (indexes.every(idx => !isNaN(idx))) {
                const words = indexes.map(idx => VOCABULARY.at(idx));
                console.log(`getWordsFromURL()::words = ${JSON.stringify(words)}`)
                if (words.length && words.every(w => typeof w?.katakana === 'string')) {
                    return words;
                }
            }
        }
    }
}


// ==========================================
