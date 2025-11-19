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
    { katakana: 'メール', answer: 'mail' },
    { katakana: 'ハンバーガー', answer: 'hamburger' },
    { katakana: 'ピザ', answer: 'pizza' },
    { katakana: 'チーズ', answer: 'cheese' },
    { katakana: 'ビール', answer: 'beer' },
    { katakana: 'ワイン', answer: 'wine' },
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
    { katakana: 'スプーン', answer: 'spoon' },
    { katakana: 'フォーク', answer: 'fork', alternates: ['fog', 'fuck'] },
    { katakana: 'ナイフ', answer: 'knife' },
    { katakana: 'バス', answer: 'bus', alternates: ['boss'] },
    { katakana: 'バイク', answer: 'bike' },
    { katakana: 'ウェブサイト', answer: 'website' },
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
    { katakana: 'サラリーマン', answer: 'salaryman' },
    { katakana: 'ドライブ', answer: 'drive' },
    { katakana: 'ノック', answer: 'knock' },
    { katakana: 'キャンセル', answer: 'cancel' },
    { katakana: 'ジョギング', answer: 'jogging' },
    { katakana: 'リラックス', answer: 'relax', alternates: ['lilacs'] },
    { katakana: 'ジャンプ', answer: 'jump' },
    { katakana: 'キス', answer: 'kiss' },
    { katakana: 'メイク', answer: 'make', alternates: ['makeup'] },
    { katakana: 'パーティー', answer: 'party', alternates: ['pate'] },
    { katakana: 'ギャンブル', answer: 'gamble' },
    { katakana: 'アップル', answer: 'apple' },
    { katakana: 'スターバックス', answer: 'starbucks' },
    { katakana: 'ケンタッキー', answer: 'kentucky' },
    { katakana: 'マクドナルド', answer: 'mcdonalds' },
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
    { katakana: 'アニメ', answer: 'animation' },
    { katakana: 'バター', answer: 'butter', alternates: ['batter'] },
    { katakana: 'バーゲン', answer: 'bargain' },
    { katakana: 'ドラマ', answer: 'drama' },
    { katakana: 'フライ', answer: 'fry', alternates: ['fly'] },
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
    { katakana: 'トラック', answer: 'truck' },
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
    { katakana: 'ピッチ', answer: 'pitch' },
    { katakana: 'クッション', answer: 'cushion' },
    { katakana: 'カーテン', answer: 'curtain', alternates: ['carton'] },
    { katakana: 'ベッド', answer: 'bed' },
    { katakana: 'ソファ', answer: 'sofa' },
    { katakana: 'チェア', answer: 'chair' },
    { katakana: 'テーブル', answer: 'table' },
    { katakana: 'キャビネット', answer: 'cabinet' },
    { katakana: 'ドア', answer: 'door', alternates: ['doer'] },
    { katakana: 'ガラス', answer: 'glass' },
    { katakana: 'プレート', answer: 'plate' },
    { katakana: 'ボウル', answer: 'bowl' },
    { katakana: 'カップ', answer: 'cup', alternates: ['cop'] },
    { katakana: 'ティーンエージャー', answer: 'teenager' },
    { katakana: 'スケルトン', answer: 'skeleton' },
    { katakana: 'ピクニック', answer: 'picnic' },
    { katakana: 'ベジタリアン', answer: 'vegetarian' },
    { katakana: 'エスケープ', answer: 'escape' },
    { katakana: 'トレーニング', answer: 'training' },
    { katakana: 'メモリー', answer: 'memory' },
    { katakana: 'アーカイブ', answer: 'archive' },
];

// Katakana grid (used for both visual grid and romaji lookup)
const KATAKANA_DATA = [
    [{ kana: 'ア', romaji: 'A' }, { kana: 'イ', romaji: 'I' }, { kana: 'ウ', romaji: 'U' }, { kana: 'エ', romaji: 'E' }, { kana: 'オ', romaji: 'O' }],
    [{ kana: 'カ', romaji: 'KA' }, { kana: 'キ', romaji: 'KI' }, { kana: 'ク', romaji: 'KU' }, { kana: 'ケ', romaji: 'KE' }, { kana: 'コ', romaji: 'KO' }],
    [{ kana: 'サ', romaji: 'SA' }, { kana: 'シ', romaji: 'SHI' }, { kana: 'ス', romaji: 'SU' }, { kana: 'セ', romaji: 'SE' }, { kana: 'ソ', romaji: 'SO' }],
    [{ kana: 'タ', romaji: 'TA' }, { kana: 'チ', romaji: 'CHI' }, { kana: 'ツ', romaji: 'TSU' }, { kana: 'テ', romaji: 'TE' }, { kana: 'ト', romaji: 'TO' }],
    [{ kana: 'ナ', romaji: 'NA' }, { kana: 'ニ', romaji: 'NI' }, { kana: 'ヌ', romaji: 'NU' }, { kana: 'ネ', romaji: 'NE' }, { kana: 'ノ', romaji: 'NO' }],
    [{ kana: 'ハ', romaji: 'HA' }, { kana: 'ヒ', romaji: 'HI' }, { kana: 'フ', romaji: 'FU' }, { kana: 'ヘ', romaji: 'HE' }, { kana: 'ホ', romaji: 'HO' }],
    [{ kana: 'マ', romaji: 'MA' }, { kana: 'ミ', romaji: 'MI' }, { kana: 'ム', romaji: 'MU' }, { kana: 'メ', romaji: 'ME' }, { kana: 'モ', romaji: 'MO' }],
    [{ kana: 'ヤ', romaji: 'YA' }, null, { kana: 'ユ', romaji: 'YU' }, null, { kana: 'ヨ', romaji: 'YO' }],
    [{ kana: 'ラ', romaji: 'RA' }, { kana: 'リ', romaji: 'RI' }, { kana: 'ル', romaji: 'RU' }, { kana: 'レ', romaji: 'RE' }, { kana: 'ロ', romaji: 'RO' }],
    [{ kana: 'ワ', romaji: 'WA' }, null, null, null, { kana: 'ヲ', romaji: 'WO' }],
    [{ kana: 'ン', romaji: 'N' }],

    [null, null, null, null, null],
    [{ kana: 'ガ', romaji: 'GA' }, { kana: 'ギ', romaji: 'GI' }, { kana: 'グ', romaji: 'GU' }, { kana: 'ゲ', romaji: 'GE' }, { kana: 'ゴ', romaji: 'GO' }],
    [{ kana: 'ザ', romaji: 'ZA' }, { kana: 'ジ', romaji: 'JI' }, { kana: 'ズ', romaji: 'ZU' }, { kana: 'ゼ', romaji: 'ZE' }, { kana: 'ゾ', romaji: 'ZO' }],
    [{ kana: 'ダ', romaji: 'DA' }, { kana: 'ヂ', romaji: 'DI' }, { kana: 'ヅ', romaji: 'DU' }, { kana: 'デ', romaji: 'DE' }, { kana: 'ド', romaji: 'DO' }],
    [{ kana: 'バ', romaji: 'BA' }, { kana: 'ビ', romaji: 'BI' }, { kana: 'ブ', romaji: 'BU' }, { kana: 'ベ', romaji: 'BE' }, { kana: 'ボ', romaji: 'BO' }],
    [{ kana: 'パ', romaji: 'PA' }, { kana: 'ピ', romaji: 'PI' }, { kana: 'プ', romaji: 'PU' }, { kana: 'ペ', romaji: 'PE' }, { kana: 'ポ', romaji: 'PO' }],

    [null, null, null, null, null],
    [{ kana: 'ャ', romaji: 'ya' }, null, { kana: 'ュ', romaji: 'yu' }, null, { kana: 'ョ', romaji: 'yo' }],
    [{ kana: 'ァ', romaji: 'a' }, { kana: 'ィ', romaji: 'i' }, { kana: 'ゥ', romaji: 'u' }, { kana: 'ェ', romaji: 'e' }, { kana: 'ォ', romaji: 'o' }],
    [{ kana: 'ッ', romaji: "'" }, { kana: 'ー', romaji: '-' }, null, null, null]
];

const ROMAJI_LOOKUP = {};
KATAKANA_DATA.forEach(row => {
    row.forEach(cell => {
        if (cell && cell.kana && cell.romaji) {
            ROMAJI_LOOKUP[cell.kana] = cell.romaji;
        }
    });
});


// ==========================================
// HELPERS
// ==========================================

/**
 * Return a breakdown string for a katakana word, e.g. "ワ(WA)    イ(I)    ン(N)"
 * Handles digraphs like キャ → KYA
 */
function getKatakanaRomajiBreakdownString(katakanaStr) {
    const pairs = getKatakanaRomajiPairs(katakanaStr);
    const parts = pairs.map(pair => `${pair.kana}(${pair.romaji})`);
    return parts.join('    ');
}

function getKatakanaRomajiRubyHTML(katakanaStr) {
    const pairs = getKatakanaRomajiPairs(katakanaStr);
    const parts = pairs.map(pair => `<ruby style="ruby-position: under;">${pair.kana}<rt>${pair.romaji}</rt></ruby>`);
    return parts.join('');
}

/* Return [{ kana, romaji }, ...] pairs for a katakana string, with digraphs handled */
function getKatakanaRomajiPairs(katakanaStr) {
    const pairs = [];
    if (!katakanaStr) return pairs;
    const smallCombiners = ['ャ', 'ュ', 'ョ', 'ィ', 'ェ', 'ゥ', 'ァ', 'ォ'];  // not 'ッ'
    for (let i = 0; i < katakanaStr.length; i++) {
        const kana = katakanaStr[i];
        const romaji = ROMAJI_LOOKUP[kana] || '';
        const nextKana = katakanaStr[i + 1];
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
     * Resets game state and selects new words.
     */
    reset() {
        this.cheatUseCount = 0;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.currentWordList = getRandomSubset(10, this.vocabulary);
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
        const currentWord = this.getCurrentWord();
        const correctAnswer = currentWord.answer.toLowerCase();
        const alternates = (currentWord.alternates || []).map(alt => alt.toLowerCase());

        return userAnswer === correctAnswer || alternates.includes(userAnswer);
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
        this.elements = {
            cheatSheet: document.getElementById('cheat-sheet'),
            flashcardSection: document.getElementById('flashcard-section'),
            results: document.getElementById('results'),
            katakanaGrid: document.getElementById('katakana-grid'),
            progressText: document.getElementById('progress-text'),
            answerInput: document.getElementById('answer-input'),
            feedback: document.getElementById('feedback'),
            popup: document.getElementById('popup'),
            resultsScore: document.getElementById('results-score'),
            resultsMessage: document.getElementById('results-message'),
            restartBtn: document.getElementById('restart-btn'),
            modalBackdrop: document.getElementById('modal-backdrop'),
            showSoundsBtn: document.getElementById('show-sounds-btn')
        };
    }

    setup() {
        this.renderKatakanaGrid();
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

    renderKatakanaGrid() {
        const grid = this.elements.katakanaGrid;
        grid.innerHTML = '';
        KATAKANA_DATA.forEach((row, idx) => {
            // Remove small kana row and long vowel mark row
            if (idx >= 17) return;

            if (row.length === 1) {
                // render a single cell spanning all columns (used for ン row)
                const cell = document.createElement('div');
                cell.className = 'katakana-cell full-width';
                cell.style.gridColumn = '1 / -1';
                cell.innerHTML = `<div class="kana">${row[0].kana}</div><div class="romaji">${row[0].romaji}</div>`;
                grid.appendChild(cell);
            } else {
                row.forEach(char => {
                    const cell = document.createElement('div');
                    cell.className = 'katakana-cell';
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

        if (isFirstCard) {
            document.querySelectorAll('.flashcard-word').forEach(el => el.textContent = word.katakana);
        } else {
            const currentFlashcard = document.querySelector('.slide-nowhere');
            const nextFlashcard = document.querySelector('.slide-left');

            currentFlashcard.classList.add('slide-right');
            currentFlashcard.classList.remove('slide-nowhere');
            setTimeout(() => {
                currentFlashcard.classList.add('slide-left');
                currentFlashcard.classList.remove('slide-right');
            }, 250);
            nextFlashcard.querySelector('.flashcard-word').textContent = word.katakana;
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
        document.querySelectorAll('.flashcard-word').forEach(el => el.innerHTML = getKatakanaRomajiRubyHTML(this.game.getCurrentWord().katakana));
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
            breakdown.textContent = getKatakanaRomajiBreakdownString(this.game.getCurrentWord().katakana);
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
        this.elements.cheatSheet.querySelector('h1').textContent = 'Katakana Cheat Sheet';
    }

    closeCheatSheetModal() {
        this.elements.cheatSheet.classList.remove('modal', 'show');
        this.elements.modalBackdrop.classList.remove('show');
        this.elements.answerInput.focus();
        this.elements.cheatSheet.querySelector('h1').textContent = 'Katakana Trainer!';
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

        // Expose for console access
        window.KatakanaTrainer = {
            game,
            ui,
            Game,
            UI,
            VOCABULARY,
            KATAKANA_DATA,
            getKatakanaRomajiBreakdownString,
            getKatakanaRomajiRubyHTML,
            getKatakanaRomajiPairs,
            randomSubset: getRandomSubset
        };
        console.log('Katakana Trainer initialized. Access via `KatakanaTrainer`.');
    });
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        selectRandomWords: getRandomSubset,
        KATAKANA_DATA,
        VOCABULARY
    };
}

if (typeof window !== 'undefined' && window.location.href.includes('?test')) {
    console.log('=> Running tests...');
    for (const word of VOCABULARY) {
        const pairs = getKatakanaRomajiPairs(word.katakana);
        const isValid = pairs.every(pair => pair.romaji && pair.kana);
        if (!isValid) {
            console.error(`Error: Bad romaji for word: ${word.katakana} = ${word.answer} with pairs = ${JSON.stringify(pairs)}`);
        }
    }
    console.log('=> Done!');
}

/*
// Unused words for reference:
// { katakana: 'コーヒー', answer: 'coffee' },
// { katakana: 'ハムサンド', answer: 'ham sandwich' },
// { katakana: 'トンカツ', answer: 'tonkatsu', alternates: ['cutlet'] },
// { katakana: 'ヨット', answer: 'yacht' },
// { katakana: 'ハンバーグ', answer: 'hamburg' },
// { katakana: 'アイスコーヒー', answer: 'ice coffee', alternates: ['icecoffee', 'iced coffee'] },
// { katakana: 'ルーター', answer: 'router' },
// { katakana: 'ロープウェー', answer: 'ropeway', alternates: ['cable car'] },
*/
