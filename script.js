// ==========================================
// DATA
// ==========================================

const VOCABULARY = [
    { katakana: 'バットマン', answer: 'batman' },
    { katakana: 'スーパーマン', answer: 'superman' },
    { katakana: 'ピアノ', answer: 'piano' },
    { katakana: 'サッカー', answer: 'soccer' },
    { katakana: 'テニス', answer: 'tennis' },
    { katakana: 'ゴルフ', answer: 'golf' },
    { katakana: 'アイスクリーム', answer: 'ice cream', alternates: ['icecream'] },
    { katakana: 'バナナ', answer: 'banana' },
    { katakana: 'オレンジ', answer: 'orange', alternates: ['orangey'] },
    { katakana: 'トマト', answer: 'tomato' },
    { katakana: 'コンピューター', answer: 'computer' },
    { katakana: 'インターネット', answer: 'internet' },
    { katakana: 'メール', answer: 'mail', alternates:['mare'] },
    { katakana: 'ハンバーガー', answer: 'hamburger' },
    { katakana: 'ピザ', answer: 'pizza' },
    { katakana: 'チーズ', answer: 'cheese' },
    { katakana: 'ベーコン', answer: 'bacon' },
    { katakana: 'ベーコンチーズバーガー', answer: 'bacon cheese burger' },
    { katakana: 'ビール', answer: 'beer' },
    { katakana: 'ワイン', answer: 'wine', alternates: ['whine'] },
    { katakana: 'ジュース', answer: 'juice' },
    { katakana: 'ティー', answer: 'tea' },
    { katakana: 'ミルク', answer: 'milk' },
    { katakana: 'ステーキ', answer: 'steak' },
    { katakana: 'ダンス', answer: 'dance' },
    { katakana: 'ギター', answer: 'guitar' },
    { katakana: 'マイク', answer: 'mic' },
    { katakana: 'ペン', answer: 'pen' },
    { katakana: 'デスク', answer: 'desk' },
    { katakana: 'カメラ', answer: 'camera' },
    { katakana: 'ビデオ', answer: 'video' },
    { katakana: 'ラジオ', answer: 'radio' },
    { katakana: 'ボタン', answer: 'button' },
    { katakana: 'エレベーター', answer: 'elevator' },
    { katakana: 'ドア', answer: 'door' },
    { katakana: 'ウィンドウ', answer: 'window' },
    { katakana: 'グラス', answer: 'glass', alternates: ['grass'] },
    { katakana: 'ガラス', answer: 'glass', alternates: ['grass'] },
    { katakana: 'スプーン', answer: 'spoon' },
    { katakana: 'フォーク', answer: 'fork', alternates: ['fog', 'fuck'] },
    { katakana: 'ナイフ', answer: 'knife' },
    { katakana: 'バス', answer: 'bus', alternates: ['boss', 'bath'] },
    { katakana: 'バイク', answer: 'bike' },
    { katakana: 'ウェブサイト', answer: 'website', alternates: ['web site'] },
    { katakana: 'ホテル', answer: 'hotel' },
    { katakana: 'レストラン', answer: 'restaurant' },
    { katakana: 'テーブル', answer: 'table' },
    { katakana: 'サービス', answer: 'service' },
    { katakana: 'サイズ', answer: 'size' },
    { katakana: 'シャツ', answer: 'shirt', alternates: ['shirts', 'shot', 'shots'] },
    { katakana: 'ネクタイ', answer: 'necktie' },
    { katakana: 'サンダル', answer: 'sandal' },
    { katakana: 'サングラス', answer: 'sunglass', alternates: ['sunglasses'] },
    { katakana: 'テスト', answer: 'test' },
    { katakana: 'サラリーマン', answer: 'salaryman', alternates: ['salary man'] },
    { katakana: 'ドライブ', answer: 'drive' },
    { katakana: 'ノック', answer: 'knock' },
    { katakana: 'キャンセル', answer: 'cancel' },
    { katakana: 'ジョギング', answer: 'jogging' },
    { katakana: 'リラックス', answer: 'relax', alternates: ['lilacs'] },
    { katakana: 'ジャンプ', answer: 'jump' },
    { katakana: 'キス', answer: 'kiss' },
    { katakana: 'メイク', answer: 'make', alternates: ['makeup'] },
    { katakana: 'パーティー', answer: 'party', alternates: ['pate', 'potty'] },
    { katakana: 'ギャンブル', answer: 'gamble' },
    { katakana: 'アップル', answer: 'apple' },
    { katakana: 'ウォーターメロン', answer: 'watermelon' },
    { katakana: 'スターバックス', answer: 'starbucks' },
    { katakana: 'ケンタッキー', answer: 'kentucky', alternates: ['kfc'] },
    { katakana: 'マクドナルド', answer: 'mcdonalds', alternates: ['mcdonald'] },
    { katakana: 'タイプ', answer: 'type' },
    { katakana: 'エンジン', answer: 'engine' },
    { katakana: 'カレンダー', answer: 'calendar' },
    { katakana: 'トンネル', answer: 'tunnel' },
    { katakana: 'マッチ', answer: 'match' },
    { katakana: 'ミシン', answer: 'machine', alternates: ['mission'] },
    { katakana: 'バー', answer: 'bar' },
    { katakana: 'スタイル', answer: 'style' },
    { katakana: 'ストーリー', answer: 'story' },
    { katakana: 'スマート', answer: 'smart' },
    { katakana: 'アイドル', answer: 'idol' },
    { katakana: 'アニメ', answer: 'anime', alternates: ['animation'] },
    { katakana: 'バター', answer: 'butter', alternates: ['batter'] },
    { katakana: 'バーゲン', answer: 'bargain' },
    { katakana: 'ドラマ', answer: 'drama' },
    { katakana: 'フライ', answer: 'fry', alternates: ['fly', 'fried'] },
    { katakana: 'フロント', answer: 'front' },
    { katakana: 'ハンドル', answer: 'handle' },
    { katakana: 'イメージ', answer: 'image' },
    { katakana: 'アメリカ', answer: 'america' },
    { katakana: 'イタリア', answer: 'italy', alternates: ['italia'] },
    { katakana: 'ホランダ', answer: 'holland', alternates: ['netherlands', 'the netherlands'] },
    { katakana: 'カナダ', answer: 'canada' },
    { katakana: 'スペイン', answer: 'spain' },
    { katakana: 'フランス', answer: 'france' },
    { katakana: 'スキー', answer: 'ski' },
    { katakana: 'スケート', answer: 'skate' },
    { katakana: 'パーティー', answer: 'party' },
    { katakana: 'バスケット', answer: 'basketball', alternates: ['basket'] },
    { katakana: 'ボウリング', answer: 'bowling' },
    { katakana: 'フライドポテト', answer: 'fried potato', alternates: ['french fries', 'fries', 'chips', 'friedpotato'] },
    { katakana: 'ホットケーキ', answer: 'hotcake', alternates: ['pancake'] },
    { katakana: 'ジーンズ', answer: 'jeans' },
    { katakana: 'スニーカー', answer: 'sneaker' },
    { katakana: 'ブレザー', answer: 'blazer', alternates: ['brazer', 'braiser'] },
    { katakana: 'ハンカチ', answer: 'handkerchief', alternates: ['hankie', 'hankerchief'] },
    { katakana: 'タクシー', answer: 'taxi' },
    { katakana: 'トラック', answer: 'truck', alternates:['track'] },
    { katakana: 'スクール', answer: 'school' },
    { katakana: 'プリンター', answer: 'printer' },
    { katakana: 'スキャナー', answer: 'scanner' },
    { katakana: 'モニター', answer: 'monitor' },
    { katakana: 'キーボード', answer: 'keyboard' },
    { katakana: 'マウス', answer: 'mouse' },
    { katakana: 'レンタル', answer: 'rental' },
    { katakana: 'シャンプー', answer: 'shampoo' },
    { katakana: 'コンディショナー', answer: 'conditioner' },
    { katakana: 'タオル', answer: 'towel' },
    { katakana: 'シート', answer: 'seat', alternates: ['sheet', 'shit'] },
    { katakana: 'ピッチ', answer: 'pitch', alternates: ['peach'] },
    { katakana: 'クッション', answer: 'cushion' },
    { katakana: 'カーテン', answer: 'curtain', alternates: ['carton'] },
    { katakana: 'ベッド', answer: 'bed' },
    { katakana: 'ソファ', answer: 'sofa' },
    { katakana: 'チェア', answer: 'chair' },
    { katakana: 'テーブル', answer: 'table' },
    { katakana: 'キャビネット', answer: 'cabinet' },
    { katakana: 'ドア', answer: 'door', alternates: ['doer'] },
    { katakana: 'プレート', answer: 'plate' },
    { katakana: 'ボウル', answer: 'bowl', alternates: ['ball'] },
    { katakana: 'カップ', answer: 'cup', alternates: ['cop'] },
    { katakana: 'ティーンエージャー', answer: 'teenager' },
    { katakana: 'スケルトン', answer: 'skeleton' },
    { katakana: 'ピクニック', answer: 'picnic' },
    { katakana: 'ベジタリアン', answer: 'vegetarian' },
    { katakana: 'エスケープ', answer: 'escape' },
    { katakana: 'トレーニング', answer: 'training' },
    { katakana: 'メモリー', answer: 'memory' },
    { katakana: 'マイ バット イズ ソー イッチー', answer: 'My butt is so itchy' },
    { katakana: 'アーカイブ', answer: 'archive' },
    { katakana: 'リユース', answer: 'reuse' },
    { katakana: 'リサイクルショップ', answer: 'recycling shop', alternates: ['recycle shop'] },
    { katakana: 'ブランド', answer: 'brand', alternates: ['bland'] },
    { katakana: 'フリーマーケット', answer: 'flea market', alternates: ['free market'] },
    { katakana: 'ロープウェー', answer: 'ropeway' }
];

const CHARACTERS = ([
    ["A","あ","ア"],["I","い","イ"],["U","う","ウ"],["E","え","エ"],["O","お","オ"],
    ["KA","か","カ"],["KI","き","キ"],["KU","く","ク"],["KE","け","ケ"],["KO","こ","コ"],
    ["SA","さ","サ"],["SHI","し","シ"],["SU","す","ス"],["SE","せ","セ"],["SO","そ","ソ"],
    ["TA","た","タ"],["CHI","ち","チ"],["TSU","つ","ツ"],["TE","て","テ"],["TO","と","ト"],
    ["NA","な","ナ"],["NI","に","ニ"],["NU","ぬ","ヌ"],["NE","ね","ネ"],["NO","の","ノ"],
    ["HA","は","ハ"],["HI","ひ","ヒ"],["FU","ふ","フ"],["HE","へ","ヘ"],["HO","ほ","ホ"],
    ["MA","ま","マ"],["MI","み","ミ"],["MU","む","ム"],["ME","め","メ"],["MO","も","モ"],
    ["YA","や","ヤ"],["YU","ゆ","ユ"],["YO","よ","ヨ"],
    ["RA","ら","ラ"],["RI","り","リ"],["RU","る","ル"],["RE","れ","レ"],["RO","ろ","ロ"],
    ["WA","わ","ワ"],["WO","を","ヲ"],
    ["N","ん","ン"],
    ["GA","が","ガ"],["GI","ぎ","ギ"],["GU","ぐ","グ"],["GE","げ","ゲ"],["GO","ご","ゴ"],
    ["ZA","ざ","ザ"],["JI","じ","ジ"],["ZU","ず","ズ"],["ZE","ぜ","ゼ"],["ZO","ぞ","ゾ"],
    ["DA","だ","ダ"],["DI","ぢ","ヂ"],["DU","づ","ヅ"],["DE","で","デ"],["DO","ど","ド"],
    ["BA","ば","バ"],["BI","び","ビ"],["BU","ぶ","ブ"],["BE","べ","ベ"],["BO","ぼ","ボ"],
    ["PA","ぱ","パ"],["PI","ぴ","ピ"],["PU","ぷ","プ"],["PE","ぺ","ペ"],["PO","ぽ","ポ"],
    ["ya","ゃ","ャ"],["yu","ゅ","ュ"],["yo","ょ","ョ"],
    ["a","ぁ","ァ"],["i","ぃ","ィ"],["u","ぅ","ゥ"],["e","ぇ","ェ"],["o","ぉ","ォ"],
    ["'","っ","ッ"],
    ["-","ー","ー"],
]).map(arr => ({romaji: arr[0], hiragana: arr[1], katakana: arr[2]}));

const ROMAJI_LOOKUP = Object.fromEntries(CHARACTERS.flatMap(d => [[d.katakana, d.romaji], [d.hiragana, d.romaji]]));
const KATAKANA_LOOKUP = Object.fromEntries(CHARACTERS.flatMap(d => [[d.romaji, d.katakana], [d.hiragana, d.katakana]]));
const HIRAGANA_LOOKUP = Object.fromEntries(CHARACTERS.flatMap(d => [[d.romaji, d.hiragana], [d.katakana, d.hiragana]]));

const KATAKANA_GRID_STR = [
    "アイウエオ",
    "カキクケコ",
    "サシスセソ",
    "タチツテト",
    "ナニヌネノ",
    "ハヒフヘホ",
    "マミムメモ",
    "ヤ ユ ヨ",
    "ラリルレロ",
    "ワ   ヲ",
    "ン",
    "",
    "ガギグゲゴ",
    "ザジズゼゾ",
    "ダヂヅデド",
    "バビブベボ",
    "パピプペポ"
];
const KATAKANA_GRID = KATAKANA_GRID_STR.map(row => row ? row.split('').map(kana => ((kana===' ')? null : {kana: kana, romaji:ROMAJI_LOOKUP[kana]})) : [null, null, null, null, null]);
const HIRAGANA_GRID = KATAKANA_GRID.map(row => row.map(cell => (cell===null) ? null : {kana:HIRAGANA_LOOKUP[cell.kana], romaji:cell.romaji}))



// ==========================================
// HELPERS
// ==========================================

/**
 * Convert a katakana/romaji string to hiragana
 */
function toHiragana(str) {
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
function getKanaRomajiBreakdownString(kanaStr) {
    const pairs = getKanaRomajiPairs(kanaStr);
    const parts = pairs.map(pair => `${pair.kana}(${pair.romaji})`);
    return parts.join('    ');
}

function getKanaRomajiRubyHTML(kanaStr) {
    const pairs = getKanaRomajiPairs(kanaStr);
    const parts = pairs.map(pair => `<ruby style="ruby-position: under;">${pair.kana}<rt>${pair.romaji}</rt></ruby>`);
    return parts.join('');
}

/* Return [{ kana, romaji }, ...] pairs for a kana string, with digraphs handled */
function getKanaRomajiPairs(kanaStr) {
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

function getRandomSubset(count, arr) {
    const selected = [];
    const available = [...arr];
    for (let i = 0; i < count && available.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * available.length);
        selected.push(available[randomIndex]);
        available.splice(randomIndex, 1);
    }
    return selected;
}

function getWordsFromURL() {
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
// GAME LOGIC
// ==========================================

class Game {
    /**
     * @param {Array<{katakana: string, answer: string, alternates?: string[]}>} vocabulary
     */
    constructor(vocabulary) {
        this.vocabulary = vocabulary;
        this.currentWordList = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.cheatUseCount = 0;
        this.numWrongAnswersOnCurrentWord = 0;
    }

    /**
     * Resets game state and selects new words.  Runs at initialization.
     */
    reset() {
        this.cheatUseCount = 0;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.currentWordList = getWordsFromURL() || getRandomSubset(10, this.vocabulary);
        this.numWrongAnswersOnCurrentWord = 0;
    }

    /**
     * @returns {{katakana: string, answer: string, alternates?: string[]}}
     */
    getCurrentWord() {
        return this.currentWordList[this.currentQuestionIndex];
    }

    /**
     * @param {string} userAnswer
     * @returns {boolean}
     */
    checkAnswer(userAnswer) {
        const clean = s => s.toLowerCase().replace(/ /g, '');
        const currentWord = this.getCurrentWord();
        const correctAnswers = [currentWord.answer, ...(currentWord.alternates||[])].map(clean)
        return correctAnswers.includes(clean(userAnswer));
    }

    recordCorrect() {
        if (this.numWrongAnswersOnCurrentWord === 0) {
            this.score++;
        }
    }

    recordIncorrect() {
        this.numWrongAnswersOnCurrentWord++;
    }

    /**
     * Advances to the next question.
     * @returns {boolean} True if there are more questions, false if finished.
     */
    nextQuestion() {
        this.currentQuestionIndex++;
        this.numWrongAnswersOnCurrentWord = 0;
        return this.currentQuestionIndex < this.currentWordList.length;
    }

    isFinished() {
        return this.currentQuestionIndex >= this.currentWordList.length;
    }

    useCheat() {
        this.cheatUseCount++;
    }
}

// ==========================================
// UI LOGIC
// ==========================================

class UI {
    /**
     * @param {Game} game
     */
    constructor(game) {
        /** @type {Game} */
        this.game = game;
        this.useHiragana = false; // Track whether to use hiragana
        this.elements = {
            cheatSheet: document.getElementById('cheat-sheet'),
            flashcardSection: document.getElementById('flashcard-section'),
            results: document.getElementById('results'),
            kanaGrid: document.getElementById('kana-grid'),
            progressText: document.getElementById('progress-text'),
            answerInput: document.getElementById('answer-input'),
            feedback: document.getElementById('feedback'),
            popup: document.getElementById('popup'),
            resultsScore: document.getElementById('results-score'),
            resultsMessage: document.getElementById('results-message'),
            restartBtn: document.getElementById('restart-btn'),
            modalBackdrop: document.getElementById('modal-backdrop'),
            showSoundsBtn: document.getElementById('show-sounds-btn'),
            kanaToggle: document.getElementById('kana-toggle-checkbox')
        };
    }

    setup() {
        this.renderKanaGrid();
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Buttons
        document.getElementById('start-btn').addEventListener('click', () => this.startQuiz());
        document.getElementById('restart-btn').addEventListener('click', () => this.startQuiz());
        document.getElementById('submit-btn').addEventListener('click', () => this.submitAnswer());
        document.getElementById('show-cheat-sheet-btn').addEventListener('click', () => this.showCheatSheetModal());
        document.getElementById('close-cheat-sheet-btn').addEventListener('click', () => this.closeCheatSheetModal());
        document.getElementById('modal-backdrop').addEventListener('click', () => this.closeCheatSheetModal());
        this.elements.showSoundsBtn.addEventListener('click', () => this.showSounds());
        
        // Kana toggle
        this.elements.kanaToggle.addEventListener('change', (e) => this.handleKanaToggle(e));

        // Input
        this.elements.answerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.submitAnswer();
        });

        // Global Keys
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.elements.cheatSheet.classList.contains('modal') && this.elements.cheatSheet.classList.contains('show')) {
                this.closeCheatSheetModal();
            }
        });
    }

    handleKanaToggle(e) {
        this.useHiragana = e.target.checked;
        this.renderKanaGrid();
        // Only update flashcard if quiz is active
        if (this.elements.flashcardSection.classList.contains('show')) {
            this.updateFlashcard(true);
        }
        const title = this.useHiragana ? 'Hiragana Trainer' : 'Katakana Trainer';
        this.elements.cheatSheet.querySelector('h1').textContent = title + '!';
        document.title = title;
    }

    renderKanaGrid() {
        const grid = this.elements.kanaGrid;
        grid.innerHTML = '';
        const kanaData = this.useHiragana ? HIRAGANA_GRID : KATAKANA_GRID;
        kanaData.forEach((row, idx) => {
            // Remove small kana row and long vowel mark row
            if (idx >= 17) return;

            if (row.length === 1) {
                // render a single cell spanning all columns (used for ン row)
                const cell = document.createElement('div');
                cell.className = 'kana-cell full-width';
                cell.style.gridColumn = '1 / -1';
                cell.innerHTML = `<div class="kana">${row[0].kana}</div><div class="romaji">${row[0].romaji}</div>`;
                grid.appendChild(cell);
            } else {
                row.forEach(char => {
                    const cell = document.createElement('div');
                    cell.className = 'kana-cell';
                    if (char === null) {
                        cell.style.visibility = 'hidden';
                        cell.innerHTML = '';
                    } else {
                        cell.innerHTML = `<div class="kana">${char.kana}</div><div class="romaji">${char.romaji}</div>`;
                    }
                    grid.appendChild(cell);
                });
            }
        });
    }

    startQuiz() {
        this.game.reset();

        this.elements.cheatSheet.classList.remove('show');
        this.elements.flashcardSection.classList.add('show');
        this.elements.results.classList.remove('show');

        this.updateFlashcard(true);
    }

    updateFlashcard(isFirstCard = false) {
        const word = this.game.getCurrentWord();
        const displayText = this.useHiragana ? toHiragana(word.katakana) : word.katakana;

        if (isFirstCard) {
            document.querySelectorAll('.flashcard-word').forEach(el => el.textContent = displayText);
        } else {
            const currentFlashcard = document.querySelector('.slide-nowhere');
            const nextFlashcard = document.querySelector('.slide-left');

            currentFlashcard.classList.add('slide-right');
            currentFlashcard.classList.remove('slide-nowhere');
            setTimeout(() => {
                currentFlashcard.classList.add('slide-left');
                currentFlashcard.classList.remove('slide-right');
            }, 250);
            nextFlashcard.querySelector('.flashcard-word').textContent = displayText;
            nextFlashcard.classList.add('slide-nowhere');
            nextFlashcard.classList.remove('slide-left');
        }

        this.elements.progressText.textContent = `Question ${this.game.currentQuestionIndex + 1} of ${this.game.currentWordList.length}`;
        this.elements.answerInput.value = '';
        this.elements.answerInput.focus();
        this.elements.feedback.classList.add('hidden');
        this.elements.feedback.textContent = '';
        this.elements.showSoundsBtn.disabled = false;
    }

    showSounds() {
        this.elements.showSoundsBtn.disabled = true;
        const displayText = this.useHiragana ? toHiragana(this.game.getCurrentWord().katakana) : this.game.getCurrentWord().katakana;
        document.querySelectorAll('.flashcard-word').forEach(el => el.innerHTML = getKanaRomajiRubyHTML(displayText));
    }

    submitAnswer() {
        const input = this.elements.answerInput.value.trim().toLowerCase();
        const isCorrect = this.game.checkAnswer(input);
        const currentWord = this.game.getCurrentWord();

        if (this.game.numWrongAnswersOnCurrentWord === 0) { // First attempt
            if (isCorrect) {
                this.game.recordCorrect();
                this.handleCorrectAnswerTransition();
            } else if (!input) {
                this.showFeedback('Please enter an answer');
            } else {
                this.game.recordIncorrect();
                this.showFeedback(`Wrong! ${currentWord.katakana} is "${currentWord.answer}".`, { showAnswer: true });
            }
        } else { // Subsequent attempts
            if (isCorrect) {
                this.handleCorrectAnswerTransition();
            } else if (!input) {
                this.showFeedback(`Please type "${currentWord.answer}" to continue.`, { showAnswer: true });
            } else {
                this.game.recordIncorrect();
                this.showFeedback(`Still not correct (${this.game.numWrongAnswersOnCurrentWord}nd time) — please type "${currentWord.answer}" and hit Submit to continue.`, { showAnswer: true });
            }
        }
    }

    showFeedback(message, opts = {}) {
        const feedback = this.elements.feedback;
        feedback.innerHTML = '';
        feedback.classList.remove('hidden');
        feedback.classList.remove('correct', 'incorrect');
        feedback.classList.add(opts.isCorrect ? 'correct' : 'incorrect'); // Note: Logic here slightly changed, usually incorrect for this flow

        const msg = document.createElement('div');
        msg.textContent = message;
        feedback.appendChild(msg);

        if (opts.showAnswer) {
            const breakdown = document.createElement('div');
            breakdown.className = 'kana-breakdown';
            const displayText = this.useHiragana ? toHiragana(this.game.getCurrentWord().katakana) : this.game.getCurrentWord().katakana;
            breakdown.textContent = getKanaRomajiBreakdownString(displayText);
            feedback.appendChild(breakdown);

            const instr = document.createElement('div');
            instr.style.marginTop = '8px';
            instr.style.fontSize = '0.95em';
            instr.textContent = `Type "${this.game.getCurrentWord().answer}" and press Submit to continue.`;
            feedback.appendChild(instr);
        }
    }

    handleCorrectAnswerTransition() {
        this.showPopup();
        setTimeout(() => {
            this.hidePopup();
            if (this.game.nextQuestion()) {
                this.updateFlashcard();
            } else {
                this.showResults();
            }
        }, 500);
    }

    showPopup() {
        this.elements.popup.classList.remove('animate-out');
        this.elements.popup.classList.add('animate-in');
    }

    hidePopup() {
        this.elements.popup.classList.add('animate-out');
        setTimeout(() => {
            this.elements.popup.classList.remove('animate-in', 'animate-out');
        }, 110);
    }

    showResults() {
        this.elements.flashcardSection.classList.remove('show');
        this.elements.results.classList.add('show');
        this.elements.resultsScore.textContent = `${this.game.score}/${this.game.currentWordList.length}`;
        this.elements.restartBtn.focus();

        let message = '';
        if (this.game.cheatUseCount > 0) {
            message = `You got ${this.game.score}/${this.game.currentWordList.length} correct. But you used the cheat sheet ${this.game.cheatUseCount} time${this.game.cheatUseCount > 1 ? 's' : ''}!`;
        } else {
            if (this.game.score === this.game.currentWordList.length) {
                message = 'Perfect! You got them all correct!';
            } else if (this.game.score >= 8) {
                message = 'Excellent! Almost perfect!';
            } else if (this.game.score >= 6) {
                message = 'Great job! Keep practicing!';
            } else if (this.game.score >= 4) {
                message = 'Good effort! Try again to improve!';
            } else {
                message = 'Keep practicing! You\'ll get better!';
            }
        }
        this.elements.resultsMessage.textContent = message;
    }

    showCheatSheetModal() {
        this.game.useCheat();
        this.elements.cheatSheet.classList.add('modal', 'show');
        this.elements.modalBackdrop.classList.add('show');
        this.elements.cheatSheet.querySelector('h1').textContent = this.useHiragana ? 'Hiragana Cheat Sheet' : 'Katakana Cheat Sheet';
    }

    closeCheatSheetModal() {
        this.elements.cheatSheet.classList.remove('modal', 'show');
        this.elements.modalBackdrop.classList.remove('show');
        this.elements.answerInput.focus();
        this.elements.cheatSheet.querySelector('h1').textContent = this.useHiragana ? 'Hiragana Trainer!' : 'Katakana Trainer!';
    }
}

// ==========================================
// INITIALIZATION
// ==========================================

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const game = new Game(VOCABULARY);
        const ui = new UI(game);
        ui.setup();

        console.log('Katakana Trainer initialized.');
    });
}

if (typeof window !== 'undefined' && window.location.href.includes('?test')) {
    console.log('=> Running tests...');
    for (const word of VOCABULARY) {
        const pairs = getKanaRomajiPairs(word.katakana);
        const isValid = pairs.every(pair => pair.romaji && pair.kana || pair.kana===" ");
        if (!isValid) {
            console.error(`Error: Bad romaji for word: ${word.katakana} = ${word.answer} with pairs = ${JSON.stringify(pairs)}`);
        }
    }
    console.log('=> Done!');
}
