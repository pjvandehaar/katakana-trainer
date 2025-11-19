const cognateWords = [
    { katakana: 'バットマン', answer: 'batman' },
    { katakana: 'スーパーマン', answer: 'superman' },
    { katakana: 'ピアノ', answer: 'piano' },
    { katakana: 'サッカー', answer: 'soccer' },
    { katakana: 'テニス', answer: 'tennis' },
    { katakana: 'ゴルフ', answer: 'golf' },
    { katakana: 'アイスクリーム', answer: 'ice cream' },
    { katakana: 'バナナ', answer: 'banana' },
    { katakana: 'オレンジ', answer: 'orange' },
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
    { katakana: 'コーヒー', answer: 'coffee' },
    { katakana: 'ティー', answer: 'tea' },
    { katakana: 'ミルク', answer: 'milk' },
    { katakana: 'ハムサンド', answer: 'ham sandwich' },
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
    { katakana: 'グラス', answer: 'glass', alternates:['grass'] },
    { katakana: 'スプーン', answer: 'spoon' },
    { katakana: 'フォーク', answer: 'fork', alternates: ['fog'] },
    { katakana: 'ナイフ', answer: 'knife' },
    { katakana: 'バス', answer: 'bus' },
    { katakana: 'バイク', answer: 'bike' },
    { katakana: 'ウェブサイト', answer: 'website' },
    { katakana: 'ホテル', answer: 'hotel' },
    { katakana: 'レストラン', answer: 'restaurant' },
    { katakana: 'テーブル', answer: 'table' },
    { katakana: 'サービス', answer: 'service' },
    { katakana: 'サイズ', answer: 'size' },
    { katakana: 'シャツ', answer: 'shirt' },
    { katakana: 'ネクタイ', answer: 'necktie' },
    { katakana: 'サンダル', answer: 'sandal' },
    { katakana: 'サングラス', answer: 'sunglass', alternates:['sunglasses'] },
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
    { katakana: 'パーティー', answer: 'party' },
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
    { katakana: 'ミシン', answer: 'machine' },
    { katakana: 'バー', answer: 'bar' },
    { katakana: 'スタイル', answer: 'style' },
    { katakana: 'ストーリー', answer: 'story' },
    { katakana: 'スマート', answer: 'smart' },
    { katakana: 'アイドル', answer: 'idol' },
    { katakana: 'アニメ', answer: 'animation' },
    { katakana: 'バター', answer: 'butter' },
    { katakana: 'バーゲン', answer: 'bargain' },
    { katakana: 'ドラマ', answer: 'drama' },
    { katakana: 'フライ', answer: 'fry' },
    { katakana: 'フロント', answer: 'front' },
    { katakana: 'ハンドル', answer: 'handle' },
    { katakana: 'イメージ', answer: 'image' },
    { katakana: 'アメリカ', answer: 'america' },
    { katakana: 'イタリア', answer: 'italy', alternates: ['italia'] },
    { katakana: 'ホランダ', answer: 'holland', alternates: ['netherlands', 'the netherlands'] },
    { katakana: 'カナダ', answer: 'canada' },
    { katakana: 'スペイン', answer: 'spain' },
    { katakana: 'フランス', answer: 'france' },
    // { katakana: 'トンカツ', answer: 'tonkatsu', alternates: ['cutlet'] },
    { katakana: 'スキー', answer: 'ski' },
    { katakana: 'スケート', answer: 'skate' },
    // { katakana: 'ヨット', answer: 'yacht' },
    { katakana: 'パーティー', answer: 'party' },
    { katakana: 'バスケット', answer: 'basketball', alternates: ['basket'] },
    { katakana: 'ボウリング', answer: 'bowling' },
    // { katakana: 'ハンバーグ', answer: 'hamburg' },
    { katakana: 'フライドポテト', answer: 'fried potato', alternates: ['french fries', 'fries', 'chips', 'friedpotato'] },
    { katakana: 'アイスコーヒー', answer: 'ice coffee', alternates: ['icecoffee', 'iced coffee'] },
    { katakana: 'ホットケーキ', answer: 'hotcake', alternates: ['pancake'] },
    { katakana: 'ジーンズ', answer: 'jeans' },
    { katakana: 'スニーカー', answer: 'sneaker' },
    { katakana: 'ブレザー', answer: 'blazer' },
    { katakana: 'ハンカチ', answer: 'handkerchief', alternates: ['hankie', 'hankerchief'] },
    { katakana: 'タクシー', answer: 'taxi' },
    { katakana: 'トラック', answer: 'truck' },
    { katakana: 'スクール', answer: 'school' },
    { katakana: 'プリンター', answer: 'printer' },
    { katakana: 'スキャナー', answer: 'scanner' },
    { katakana: 'モニター', answer: 'monitor' },
    { katakana: 'キーボード', answer: 'keyboard' },
    { katakana: 'マウス', answer: 'mouse' },
    // { katakana: 'ルーター', answer: 'router' },
    { katakana: 'レンタル', answer: 'rental' },
    { katakana: 'シャンプー', answer: 'shampoo' },
    { katakana: 'コンディショナー', answer: 'conditioner' },
    { katakana: 'タオル', answer: 'towel' },
    { katakana: 'シート', answer: 'seat', alternates: ['sheet','shit'] },
    { katakana: 'クッション', answer: 'cushion' },
    { katakana: 'カーテン', answer: 'curtain' },
    { katakana: 'ベッド', answer: 'bed' },
    { katakana: 'ソファ', answer: 'sofa' },
    { katakana: 'チェア', answer: 'chair' },
    { katakana: 'テーブル', answer: 'table' },
    { katakana: 'キャビネット', answer: 'cabinet' },
    { katakana: 'ドア', answer: 'door' },
    { katakana: 'ガラス', answer: 'glass' },
    { katakana: 'プレート', answer: 'plate' },
    { katakana: 'ボウル', answer: 'bowl' },
    { katakana: 'カップ', answer: 'cup' },
    { katakana: 'ティーンエージャー', answer: 'teenager' },
    { katakana: 'スケルトン', answer: 'skeleton' },
    { katakana: 'ピクニック', answer: 'picnic' },
    { katakana: 'ベジタリアン', answer: 'vegetarian' },
    { katakana: 'エスケープ', answer: 'escape' },
    { katakana: 'トレーニング', answer: 'training' },
    { katakana: 'メモリー', answer: 'memory' },
    // { katakana: 'ロープウェー', answer: 'ropeway', alternates: ['cable car'] },
    { katakana: 'アーカイブ', answer: 'archive' },
];

// Katakana grid (used for both visual grid and romaji lookup)
const katakanaChart = [
    [ { kana: 'ア', romaji: 'A' }, { kana: 'イ', romaji: 'I' }, { kana: 'ウ', romaji: 'U' }, { kana: 'エ', romaji: 'E' }, { kana: 'オ', romaji: 'O' } ],
    [ { kana: 'カ', romaji: 'KA' }, { kana: 'キ', romaji: 'KI' }, { kana: 'ク', romaji: 'KU' }, { kana: 'ケ', romaji: 'KE' }, { kana: 'コ', romaji: 'KO' } ],
    [ { kana: 'サ', romaji: 'SA' }, { kana: 'シ', romaji: 'SHI' }, { kana: 'ス', romaji: 'SU' }, { kana: 'セ', romaji: 'SE' }, { kana: 'ソ', romaji: 'SO' } ],
    [ { kana: 'タ', romaji: 'TA' }, { kana: 'チ', romaji: 'CHI' }, { kana: 'ツ', romaji: 'TSU' }, { kana: 'テ', romaji: 'TE' }, { kana: 'ト', romaji: 'TO' } ],
    [ { kana: 'ナ', romaji: 'NA' }, { kana: 'ニ', romaji: 'NI' }, { kana: 'ヌ', romaji: 'NU' }, { kana: 'ネ', romaji: 'NE' }, { kana: 'ノ', romaji: 'NO' } ],
    [ { kana: 'ハ', romaji: 'HA' }, { kana: 'ヒ', romaji: 'HI' }, { kana: 'フ', romaji: 'FU' }, { kana: 'ヘ', romaji: 'HE' }, { kana: 'ホ', romaji: 'HO' } ],
    [ { kana: 'マ', romaji: 'MA' }, { kana: 'ミ', romaji: 'MI' }, { kana: 'ム', romaji: 'MU' }, { kana: 'メ', romaji: 'ME' }, { kana: 'モ', romaji: 'MO' } ],
    [ { kana: 'ヤ', romaji: 'YA' }, null, { kana: 'ユ', romaji: 'YU' }, null, { kana: 'ヨ', romaji: 'YO' } ],
    [ { kana: 'ラ', romaji: 'RA' }, { kana: 'リ', romaji: 'RI' }, { kana: 'ル', romaji: 'RU' }, { kana: 'レ', romaji: 'RE' }, { kana: 'ロ', romaji: 'RO' } ],
    [ { kana: 'ワ', romaji: 'WA' }, null, null, null, { kana: 'ヲ', romaji: 'WO' } ],
    [ { kana: 'ン', romaji: 'N' } ],

    [ null, null, null, null, null ],
    [ { kana: 'ガ', romaji: 'GA' }, { kana: 'ギ', romaji: 'GI' }, { kana: 'グ', romaji: 'GU' }, { kana: 'ゲ', romaji: 'GE' }, { kana: 'ゴ', romaji: 'GO' } ],
    [ { kana: 'ザ', romaji: 'ZA' }, { kana: 'ジ', romaji: 'JI' }, { kana: 'ズ', romaji: 'ZU' }, { kana: 'ゼ', romaji: 'ZE' }, { kana: 'ゾ', romaji: 'ZO' } ],
    [ { kana: 'ダ', romaji: 'DA' }, { kana: 'ヂ', romaji: 'DI' }, { kana: 'ヅ', romaji: 'DU' }, { kana: 'デ', romaji: 'DE' }, { kana: 'ド', romaji: 'DO' } ],
    [ { kana: 'バ', romaji: 'BA' }, { kana: 'ビ', romaji: 'BI' }, { kana: 'ブ', romaji: 'BU' }, { kana: 'ベ', romaji: 'BE' }, { kana: 'ボ', romaji: 'BO' } ],
    [ { kana: 'パ', romaji: 'PA' }, { kana: 'ピ', romaji: 'PI' }, { kana: 'プ', romaji: 'PU' }, { kana: 'ペ', romaji: 'PE' }, { kana: 'ポ', romaji: 'PO' } ],

    [ null, null, null, null, null ],
    [ { kana: 'ャ', romaji: 'ya' }, null, { kana: 'ュ', romaji: 'yu' }, null, { kana: 'ョ', romaji: 'yo' }],
    [ { kana: 'ァ', romaji:'a' }, { kana: 'ィ', romaji: 'i' }, {kana:'ゥ', romaji:'u'}, { kana: 'ェ', romaji: 'e' }, { kana: 'ォ', romaji: 'o'}],
    [ { kana: 'ッ', romaji:"'" }, { kana: 'ー', romaji: '-' }, null, null, null]
];

const ROMAJI_LOOKUP = {};
katakanaChart.forEach(row => {
    row.forEach(cell => {
        if (cell && cell.kana && cell.romaji ) {
            ROMAJI_LOOKUP[cell.kana] = cell.romaji;
        }
    });
});


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
    const smallCombiners = ['ャ', 'ュ', 'ョ', 'ィ', 'ェ', 'ゥ', 'ァ', 'ォ'];  // , 'ッ'];
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



// Global state
let currentWordList = [];
let currentQuestionIndex = 0;
let score = 0;
let cheatUseCount = 0;
let numWrongAnswersOnCurrentWord = 0;
function getCurrentWord() {
    return currentWordList[currentQuestionIndex];
}



// Initialize katakana grid on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeKatakanaGrid();
    // handle ESC to close modal
    document.addEventListener('keydown', (e) => {
        const cheatSheet = document.getElementById('cheatSheet');
        if (e.key === 'Escape' && cheatSheet && cheatSheet.classList.contains('modal') && cheatSheet.classList.contains('show')) {
            closeCheatSheetModal();
        }
    });
});

function initializeKatakanaGrid() {
    const grid = document.getElementById('katakanaGrid');
    grid.innerHTML = '';
    katakanaChart.forEach((row, idx) => {
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

function startTraining() {  // Also handles restart
    cheatUseCount = 0;
    currentQuestionIndex = 0;
    score = 0;
    
    currentWordList = randomSubset(10, cognateWords);
    
    // Hide cheat sheet, show flashcard
    document.getElementById('cheatSheet').classList.remove('show');
    document.getElementById('flashcardSection').classList.add('show');
    document.getElementById('results').classList.remove('show');
    
    showNextFlashcard(false);
}

function randomSubset(count, arr) {
    const selected = [];
    const available = [...arr];
    for (let i = 0; i < count && available.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * available.length);
        selected.push(available[randomIndex]);
        available.splice(randomIndex, 1);
    }
    return selected;
}

function showSounds() {
    document.querySelector('#showSoundsBtn').disabled = true;
    renderFlashcardWord(true);
}


function renderFlashcardWord(shouldShowSounds) {
    // TODO: Only use this function for shouldShowSounds
    if (currentQuestionIndex >= currentWordList.length) return;
    if (shouldShowSounds) {
        document.querySelectorAll('.flashcard-word').forEach(el => el.innerHTML = getKatakanaRomajiRubyHTML(getCurrentWord().katakana));
    } else {
        document.querySelectorAll('.flashcard-word').forEach(el => el.textContent = getCurrentWord().katakana);
    }
}

function showNextFlashcard(nextCard = true) {
    if (nextCard) {
        currentQuestionIndex++;
    }

    if (currentQuestionIndex >= currentWordList.length) {
        showResults();
        return;
    }

    const currentFlashcard = document.querySelector('.slide-nowhere');
    const nextFlashcard = document.querySelector('.slide-left');

    currentFlashcard.classList.add('slide-right');
    currentFlashcard.classList.remove('slide-nowhere');
    setTimeout(() => {
        currentFlashcard.classList.add('slide-left');
        currentFlashcard.classList.remove('slide-right');
    }, 250);
    nextFlashcard.querySelector('.flashcard-word').textContent = getCurrentWord().katakana;
    nextFlashcard.classList.add('slide-nowhere');
    nextFlashcard.classList.remove('slide-left');

    numWrongAnswersOnCurrentWord = 0;
    document.getElementById('progressText').textContent = `Question ${currentQuestionIndex + 1} of ${currentWordList.length}`;
    document.getElementById('answerInput').value = '';
    document.getElementById('answerInput').focus();
    document.getElementById('feedback').classList.add('hidden');
    document.getElementById('feedback').textContent = '';
    document.querySelector('#showSoundsBtn').disabled = false;
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        submitAnswer();
    }
}

function submitAnswer() {
    const userAnswer = document.getElementById('answerInput').value.trim().toLowerCase();
    const correctAnswer = getCurrentWord().answer.toLowerCase();
    const isCorrect = userAnswer === correctAnswer || (getCurrentWord().alternates||[]).map(alt => alt.toLowerCase()).includes(userAnswer);

    if (numWrongAnswersOnCurrentWord == 0) {  // first attempt
        if (isCorrect) {
            score++;
            showCorrectAndNextCard()
        } else if (!userAnswer) {
            showFeedback('Please enter an answer');
        } else {
            numWrongAnswersOnCurrentWord++;
            showFeedback(`Wrong! ${getCurrentWord().katakana} is "${getCurrentWord().answer}".`, { showAnswer: true });
        }
    } else {  // second+ attempt
        if (isCorrect) {
            showCorrectAndNextCard()
        } else if (!userAnswer) {
            showFeedback(`Please type "${correctAnswer}" to continue.`, { showAnswer: true});
        } else {
            numWrongAnswersOnCurrentWord++;
            showFeedback(`Still not correct (${numWrongAnswersOnCurrentWord}nd time) — please type "${correctAnswer}" and hit Submit to continue.`, { showAnswer: true });
        }
    }
}

function showFeedback(message, opts = {}) {
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = '';
    feedback.classList.remove('hidden');
    feedback.classList.remove('correct', 'incorrect');
    feedback.classList.add(opts.isCorrect ? 'correct' : 'incorrect');

    const msg = document.createElement('div');
    msg.textContent = message;
    feedback.appendChild(msg);

    if (opts.showAnswer) {
        // show breakdown
        const breakdown = document.createElement('div');
        breakdown.className = 'kana-breakdown';
        breakdown.textContent = getKatakanaRomajiBreakdownString(getCurrentWord().katakana);
        feedback.appendChild(breakdown);

        // instruction text
        const instr = document.createElement('div');
        instr.style.marginTop = '8px';
        instr.style.fontSize = '0.95em';
        instr.textContent = `Type "${getCurrentWord().answer}" and press Submit to continue.`;
        feedback.appendChild(instr);
    }
}

function showCorrectAndNextCard() {
    showPopup();
    setTimeout(() => {
        hidePopup();
        showNextFlashcard();
    }, 500);
}

function showPopup() {
    document.getElementById('popup').classList.remove('animate-out');
    document.getElementById('popup').classList.add('animate-in');  // animates 0.2s
}
function hidePopup() {
    document.getElementById('popup').classList.add('animate-out');  // animates 0.1s
    setTimeout(() => {
        document.getElementById('popup').classList.remove('animate-in', 'animate-out');
    }, 110);  // after slide-right finishes
}


function showCheatSheetModal() {
    // count modal uses during a quiz session
    cheatUseCount = (cheatUseCount || 0) + 1;
    // show
    document.getElementById('cheatSheet').classList.add('modal', 'show');
    document.getElementById('modalBackdrop').classList.add('show');
    document.querySelector('#cheatSheet h1').textContent = 'Katakana Cheat Sheet';
}

function closeCheatSheetModal() {
    document.getElementById('cheatSheet').classList.remove('modal', 'show');
    document.getElementById('modalBackdrop').classList.remove('show');
    document.getElementById('answerInput').focus();
    document.querySelector('#cheatSheet h1').textContent = 'Katakana Trainer!';
}

function showResults() {
    document.getElementById('flashcardSection').classList.remove('show');
    document.getElementById('results').classList.add('show');
    document.getElementById('resultsScore').textContent = `${score}/${currentWordList.length}`;
    
    let message = '';
    if (cheatUseCount && cheatUseCount > 0) {
        message = `You got ${score}/${currentWordList.length} correct. But you used the cheat sheet ${cheatUseCount} time${cheatUseCount>1?'s':''}!`;
    } else {
        if (score === currentWordList.length) {
            message = 'Perfect! You got them all correct!';
        } else if (score >= 8) {
            message = 'Excellent! Almost perfect!';
        } else if (score >= 6) {
            message = 'Great job! Keep practicing!';
        } else if (score >= 4) {
            message = 'Good effort! Try again to improve!';
        } else {
            message = 'Keep practicing! You\'ll get better!';
        }
    }
    document.getElementById('resultsMessage').textContent = message;
}


// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        selectRandomWords: randomSubset,
        katakanaChart,
        cognateWords
    };
}

if (window.location.href.includes('?test')) {
    console.log('=> Running tests...');
    for (const word of cognateWords) {
        const pairs = getKatakanaRomajiPairs(word.katakana);
        const isValid = pairs.every(pair => pair.romaji && pair.kana );
        if (!isValid) {
            console.error(`Error: Bad romaji for word: ${word.katakana} = ${word.answer} with pairs = ${JSON.stringify(pairs)}`);
        }
    }
    console.log('=> Done!');
}
