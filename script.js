/* Note: This code is AI-generated. */

// Katakana characters with romaji (visual rows)
// Use an explicit row for ン so it doesn't sit on the WA row.
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
    [ null, null, { kana: 'ン', romaji: 'N' }, null, null ],

    [ null, null, null, null, null ],
    [ { kana: 'ガ', romaji: 'GA' }, { kana: 'ギ', romaji: 'GI' }, { kana: 'グ', romaji: 'GU' }, { kana: 'ゲ', romaji: 'GE' }, { kana: 'ゴ', romaji: 'GO' } ],
    [ { kana: 'ザ', romaji: 'ZA' }, { kana: 'ジ', romaji: 'JI' }, { kana: 'ズ', romaji: 'ZU' }, { kana: 'ゼ', romaji: 'ZE' }, { kana: 'ゾ', romaji: 'ZO' } ],
    [ { kana: 'ダ', romaji: 'DA' }, { kana: 'ヂ', romaji: 'DI' }, { kana: 'ヅ', romaji: 'DU' }, { kana: 'デ', romaji: 'DE' }, { kana: 'ド', romaji: 'DO' } ],
    [ { kana: 'バ', romaji: 'BA' }, { kana: 'ビ', romaji: 'BI' }, { kana: 'ブ', romaji: 'BU' }, { kana: 'ベ', romaji: 'BE' }, { kana: 'ボ', romaji: 'BO' } ],
    [ { kana: 'パ', romaji: 'PA' }, { kana: 'ピ', romaji: 'PI' }, { kana: 'プ', romaji: 'PU' }, { kana: 'ペ', romaji: 'PE' }, { kana: 'ポ', romaji: 'PO' } ],

    [ null, null, null, null, null ],
    [ { kana: 'ャ', romaji: 'ya' }, null, { kana: 'ュ', romaji: 'yu' }, null, { kana: 'ョ', romaji: 'yo' }]
    [{kana: 'ァ', romaji:'a'}, { kana: 'ィ', romaji: 'i' }, {kana:'ゥ', romaji:'u'}, { kana: 'ェ', romaji: 'e' }, { kana: 'ォ', romaji: 'o'}],
    [ { kana: 'ッ', romaji:'(2x)' }, { kana: 'ー', romaji: '-' }, null, null, null]
];

// Build a fast lookup from kana -> romaji
const BASE_ROMAJI = {};
katakanaChart.forEach(row => {
    row.forEach(cell => {
        if (cell && cell.kana) {
            BASE_ROMAJI[cell.kana] = (cell.romaji || '').toString();
        }
    });
});

// Maps for applying dakuten/handakuten voicing rules
const DAKUTEN_MAP = {
    'KA': 'GA', 'KI': 'GI', 'KU': 'GU', 'KE': 'GE', 'KO': 'GO',
    'SA': 'ZA', 'SHI': 'JI', 'SU': 'ZU', 'SE': 'ZE', 'SO': 'ZO',
    'TA': 'DA', 'CHI': 'JI', 'TSU': 'ZU', 'TE': 'DE', 'TO': 'DO',
    'HA': 'BA', 'HI': 'BI', 'FU': 'BU', 'HE': 'BE', 'HO': 'BO'
};

const HANDAKUTEN_MAP = {
    'HA': 'PA', 'HI': 'PI', 'FU': 'PU', 'HE': 'PE', 'HO': 'PO'
};

function getRomajiForKana(ch) {
    if (!ch) return '';
    // long vowel mark
    if (ch === 'ー') return '-';
    // direct map
    if (BASE_ROMAJI[ch]) return BASE_ROMAJI[ch];

    // try Unicode decomposition to detect combining dakuten/handakuten
    const nfd = ch.normalize('NFD');
    if (nfd.length >= 2) {
        const base = nfd[0];
        const mark = nfd[1];
        const baseRom = BASE_ROMAJI[base] || '';
        if (!baseRom) return '';
        if (mark === '\u3099') { // combining dakuten
            return DAKUTEN_MAP[baseRom] || (baseRom[0] ? baseRom[0] + baseRom.slice(1) : baseRom);
        }
        if (mark === '\u309A') { // combining handakuten
            return HANDAKUTEN_MAP[baseRom] || baseRom;
        }
    }

    // fallback: unknown
    return '';
}

/**
 * Return a breakdown string for a katakana word, e.g. "ワ(WA)    イ(I)    ン(N)"
 * Handles digraphs like キャ → KYA
 */
function buildKanaRomaji(katakanaStr) {
    if (!katakanaStr) return '';
    const parts = [];
    const smallYaYuYo = ['ャ', 'ュ', 'ョ'];
    const smallI = ['ィ'];
    const smallE = ['ェ'];
    
    for (let i = 0; i < katakanaStr.length; i++) {
        const ch = katakanaStr[i];
        
        // Handle sokuon (small tsu) which indicates consonant doubling of the following kana.
        if (ch === 'ッ') {
            parts.push(`${ch}(double-next-consonant)`);
            continue;
        }
        
        // Check if next char is a small kana (digraph)
        const nextCh = katakanaStr[i + 1];
        if (nextCh && (smallYaYuYo.includes(nextCh) || smallI.includes(nextCh) || smallE.includes(nextCh))) {
            const baseRom = getRomajiForKana(ch) || '';
            const smallRom = getRomajiForKana(nextCh) || '';
            
            // Construct digraph romaji: e.g. KI + YA → KYA
            if (baseRom && smallRom) {
                let combined = '';
                if (smallYaYuYo.includes(nextCh)) {
                    // Replace the last vowel with Y + first letter of small kana
                    const consonant = baseRom.slice(0, -1); // e.g. "K" from "KI"
                    const smallVowel = smallRom; // e.g. "YA"
                    combined = consonant + smallVowel; // e.g. "KYA"
                } else if (smallI.includes(nextCh)) {
                    // Replace A/E with I
                    const consonant = baseRom.slice(0, -1);
                    combined = consonant + 'I';
                } else if (smallE.includes(nextCh)) {
                    // Replace A/E with E
                    const consonant = baseRom.slice(0, -1);
                    combined = consonant + 'E';
                }
                
                parts.push(`${ch}${nextCh}(${combined})`);
                i++; // skip the small kana
                continue;
            }
        }

        const rom = getRomajiForKana(ch) || '';
        parts.push(`${ch}(${rom})`);
    }
    return parts.join('    ');
}

// Cognate words for flashcard training
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
    { katakana: 'グラス', answer: 'glass' },
    { katakana: 'スプーン', answer: 'spoon' },
    { katakana: 'フォーク', answer: 'fork' },
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
    { katakana: 'サングラス', answer: 'sunglasses' },
    { katakana: 'テスト', answer: 'test' },
    { katakana: 'サラリーマン', answer: 'salaryman' },
    { katakana: 'ドライブ', answer: 'drive' },
    { katakana: 'ノック', answer: 'knock' },
    { katakana: 'キャンセル', answer: 'cancel' },
    { katakana: 'ジョギング', answer: 'jogging' },
    { katakana: 'リラックス', answer: 'relax' },
    { katakana: 'ジャンプ', answer: 'jump' },
    { katakana: 'キス', answer: 'kiss' },
    { katakana: 'メイク', answer: 'makeup' },
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
    { katakana: 'オランダ', answer: 'holland', alternates: ['netherlands', 'the netherlands'] },
    { katakana: 'カナダ', answer: 'canada' },
    { katakana: 'スペイン', answer: 'spain' },
    { katakana: 'フランス', answer: 'france' },
    { katakana: 'トンカツ', answer: 'tonkatsu', alternates: ['cutlet'] },
    { katakana: 'スキー', answer: 'ski' },
    { katakana: 'スケート', answer: 'skate' },
    { katakana: 'ヨット', answer: 'yacht' },
    { katakana: 'パーティー', answer: 'party' },
    { katakana: 'バスケット', answer: 'basketball', alternates: ['basket'] },
    { katakana: 'ボウリング', answer: 'bowling' },
    { katakana: 'ハンバーグ', answer: 'hamburg' },
    { katakana: 'フライドポテト', answer: 'french fries', alternates: ['fries', 'chips'] },
    { katakana: 'アイスコーヒー', answer: 'iced coffee', alternates: ['ice coffee'] },
    { katakana: 'ホットケーキ', answer: 'pancake', alternates: ['hotcake'] },
    { katakana: 'ジーンズ', answer: 'jeans' },
    { katakana: 'スニーカー', answer: 'sneaker' },
    { katakana: 'ブレザー', answer: 'blazer' },
    { katakana: 'ハンカチ', answer: 'handkerchief' },
    { katakana: 'タクシー', answer: 'taxi' },
    { katakana: 'トラック', answer: 'truck' },
    { katakana: 'スクール', answer: 'school' },
    { katakana: 'プリンター', answer: 'printer' },
    { katakana: 'スキャナー', answer: 'scanner' },
    { katakana: 'モニター', answer: 'monitor' },
    { katakana: 'キーボード', answer: 'keyboard' },
    { katakana: 'マウス', answer: 'mouse' },
    { katakana: 'ルーター', answer: 'router' },
    { katakana: 'レンタル', answer: 'rental' },
    { katakana: 'シャンプー', answer: 'shampoo' },
    { katakana: 'コンディショナー', answer: 'conditioner' },
    { katakana: 'タオル', answer: 'towel' },
    { katakana: 'シート', answer: 'seat' },
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
    { katakana: 'スケルトン', answer: 'skeleton', alternates: ['translucent', 'see-through'] },
    { katakana: 'ピクニック', answer: 'picnic' },
    { katakana: 'ベジタリアン', answer: 'vegetarian' },
    { katakana: 'エスケープ', answer: 'escape' },
    { katakana: 'トレーニング', answer: 'training' },
    { katakana: 'メモリー', answer: 'memory' },
    { katakana: 'ロープウェー', answer: 'ropeway', alternates: ['cable car'] },
    { katakana: 'アーカイブ', answer: 'archive' },
];

// Global state
let currentQuestionIndex = 0;
let score = 0;
let currentWords = [];
// track how many times the modal cheat-sheet was used during a session
let cheatUseCount = 0;
let sessionId = Date.now();
// when non-null, the quiz requires the user to type this exact answer to continue
let requiredAnswer = null;
// whether to show romaji/sounds under each katakana cell in the cheat sheet
let showSounds = false;

function toggleSounds() {
    showSounds = !showSounds;
    // update button label
    const btn = document.querySelector('.toggle-sounds');
    if (btn) btn.textContent = showSounds ? 'Hide sounds below katakana' : 'Show sounds below katakana';
    // re-render the current flashcard to show/hide romaji
    if (currentQuestionIndex < currentWords.length) {
        renderFlashcard();
    }
}

// Initialize katakana grid on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeKatakanaGrid();
    loadPreviousSessions();
    // ensure the toggle button label matches initial state
    const btn = document.querySelector('.toggle-sounds');
    if (btn) btn.textContent = showSounds ? 'Hide sounds below katakana' : 'Show sounds below katakana';
    // handle ESC to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCheatSheet();
        }
    });
});

function initializeKatakanaGrid() {
    const grid = document.getElementById('katakanaGrid');
    grid.innerHTML = '';
    // Filter out small kana and long vowel mark rows for the cheat sheet
    katakanaChart.forEach((row, idx) => {
        // Remove small kana row and long vowel mark row (last two rows)
        if (idx >= 17) return;
        // detect rows that should be rendered as a single full-width cell
        const nonNulls = row.reduce((acc, c, i) => {
            if (c !== null) acc.push({ char: c, index: i });
            return acc;
        }, []);

        if (nonNulls.length === 1 && row.length === 5) {
            // render a single cell spanning all columns (used for ン row)
            const only = nonNulls[0];
            const cell = document.createElement('div');
            cell.className = 'katakana-cell full-width';
            cell.style.gridColumn = '1 / -1';
            cell.innerHTML = `<div class="kana">${only.char.kana}</div><div class="romaji">${only.char.romaji}</div>`;
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

function startTraining() {
    cheatUseCount = 0;
    currentQuestionIndex = 0;
    score = 0;
    
    // Select 10 random words
    currentWords = selectRandomWords(10);
    
    // Hide cheat sheet, show flashcard
    document.getElementById('cheatSheet').classList.remove('show');
    document.getElementById('flashcardSection').classList.add('show');
    document.getElementById('results').classList.remove('show');
    
    showNextFlashcard();
}

function selectRandomWords(count) {
    const selected = [];
    const available = [...cognateWords];
    for (let i = 0; i < count && available.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * available.length);
        selected.push(available[randomIndex]);
        available.splice(randomIndex, 1);
    }
    return selected;
}

function renderFlashcard() {
    if (currentQuestionIndex >= currentWords.length) return;
    const word = currentWords[currentQuestionIndex];
    const wordEl = document.getElementById('flashcardWord');
    
    if (showSounds) {
        // render with ruby-style romaji below each character
        // Handle digraphs (small kana combinations)
        let html = '';
        const smallYaYuYo = ['ャ', 'ュ', 'ョ'];
        const smallI = ['ィ'];
        const smallE = ['ェ'];
        
        for (let i = 0; i < word.katakana.length; i++) {
            const ch = word.katakana[i];
            const nextCh = word.katakana[i + 1];
            
            // Check if this is a digraph (consonant + small kana)
            if (nextCh && (smallYaYuYo.includes(nextCh) || smallI.includes(nextCh) || smallE.includes(nextCh))) {
                const baseRom = getRomajiForKana(ch) || '';
                const smallRom = getRomajiForKana(nextCh) || '';
                
                let combined = '';
                if (smallYaYuYo.includes(nextCh)) {
                    const consonant = baseRom.slice(0, -1);
                    combined = consonant + smallRom;
                } else if (smallI.includes(nextCh)) {
                    const consonant = baseRom.slice(0, -1);
                    combined = consonant + 'I';
                } else if (smallE.includes(nextCh)) {
                    const consonant = baseRom.slice(0, -1);
                    combined = consonant + 'E';
                }
                
                // Render both characters with the combined romaji
                html += `<ruby style="ruby-position: under;">${ch}${nextCh}<rt>${combined}</rt></ruby>`;
                i++; // skip the small kana since we already rendered it
            } else {
                const rom = getRomajiForKana(ch) || '';
                html += `<ruby style="ruby-position: under;">${ch}<rt>${rom}</rt></ruby>`;
            }
        }
        wordEl.innerHTML = html;
    } else {
        // plain katakana
        wordEl.textContent = word.katakana;
    }
}

function showNextFlashcard() {
    if (currentQuestionIndex >= currentWords.length) {
        showResults();
        return;
    }
    
    const word = currentWords[currentQuestionIndex];
    renderFlashcard();
    document.getElementById('progressText').textContent = `Question ${currentQuestionIndex + 1} of ${currentWords.length}`;
    document.getElementById('answerInput').value = '';
    document.getElementById('answerInput').focus();
    document.getElementById('feedback').classList.add('hidden');
    document.getElementById('feedback').textContent = '';
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        submitAnswer();
    }
}



function submitAnswer() {
    const inputEl = document.getElementById('answerInput');
    const submitBtn = document.getElementById('submitButton');
    const feedbackEl = document.getElementById('feedback');

    // If we are currently requiring the user to re-type the correct English answer,
    // validate that first and only advance when it matches.
    if (requiredAnswer) {
        const typed = inputEl.value.trim().toLowerCase();
        if (!typed) {
            showFeedback(`Please type "${requiredAnswer}" to continue.`, false, { requireType: true, breakdown: buildKanaRomaji(currentWords[currentQuestionIndex].katakana) });
            return;
        }

        if (typed === requiredAnswer.toLowerCase()) {
            // correct re-typed answer — clear state and move on
            requiredAnswer = null;
            feedbackEl.classList.add('hidden');
            if (inputEl) {
                inputEl.value = '';
                inputEl.disabled = false;
            }
            if (submitBtn) submitBtn.disabled = false;
            currentQuestionIndex++;
            showNextFlashcard();
        } else {
            showFeedback(`Still not correct — please type "${requiredAnswer}" and hit Submit to continue.`, false, { requireType: true, breakdown: buildKanaRomaji(currentWords[currentQuestionIndex].katakana) });
        }
        return;
    }

    const userAnswer = inputEl.value.trim().toLowerCase();
    const word = currentWords[currentQuestionIndex];
    const correctAnswer = word.answer.toLowerCase();

    if (!userAnswer) {
        showFeedback('Please enter an answer', false, { autoHide: true });
        return;
    }

    // Check if the answer matches the main answer or any alternates
    let isCorrect = userAnswer === correctAnswer;
    if (!isCorrect && word.alternates && Array.isArray(word.alternates)) {
        isCorrect = word.alternates.some(alt => userAnswer === alt.toLowerCase());
    }

    if (isCorrect) {
        // correct: increment and auto-advance
        score++;
        if (inputEl) inputEl.disabled = true;
        if (submitBtn) submitBtn.disabled = true;
        showFeedback('✓ Correct!', true, { autoAdvance: true, autoHideDelay: 900 });
    } else {
        // wrong: require the user to type the correct English to continue
        requiredAnswer = word.answer;
        // ensure input is enabled so user can type the correct answer
        if (inputEl) {
            inputEl.disabled = false;
            inputEl.focus();
        }
        if (submitBtn) submitBtn.disabled = false;
        const breakdown = buildKanaRomaji(word.katakana);
        showFeedback(`Wrong! ${word.katakana} is "${word.answer}".`, false, { requireType: true, breakdown });
    }

    // Always turn off sounds after submit
    showSounds = false;
    const btn = document.querySelector('.toggle-sounds');
    if (btn) btn.textContent = 'Show sounds below katakana';
}

function showFeedback(message, isCorrect, opts = {}) {
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = '';
    feedback.classList.remove('hidden');
    feedback.classList.remove('correct', 'incorrect');
    feedback.classList.add(isCorrect ? 'correct' : 'incorrect');

    const msg = document.createElement('div');
    msg.textContent = message;
    feedback.appendChild(msg);

    const inputEl = document.getElementById('answerInput');
    const submitBtn = document.getElementById('submitButton');

    if (opts.requireType) {
        // show breakdown if available
        if (opts.breakdown) {
            const breakdown = document.createElement('div');
            breakdown.className = 'kana-breakdown';
            breakdown.textContent = opts.breakdown;
            feedback.appendChild(breakdown);
        }

        // instruction text (keeps input enabled)
        const instr = document.createElement('div');
        instr.style.marginTop = '8px';
        instr.style.fontSize = '0.95em';
        instr.textContent = 'Type the correct English word and press Submit to continue.';
        feedback.appendChild(instr);

        if (inputEl) {
            inputEl.disabled = false;
            inputEl.focus();
        }
        if (submitBtn) submitBtn.disabled = false;
    } else if (opts.showContinue) {
        // optionally include kana->romaji breakdown if provided
        if (opts.breakdown) {
            const breakdown = document.createElement('div');
            breakdown.className = 'kana-breakdown';
            breakdown.textContent = opts.breakdown;
            feedback.appendChild(breakdown);
        }

        const cont = document.createElement('button');
        cont.textContent = 'Continue';
        cont.style.marginLeft = '10px';
        cont.onclick = () => continueAfterFeedback();
        feedback.appendChild(cont);
    }

    if (opts.autoAdvance) {
        const delay = opts.autoHideDelay || 1000;
        setTimeout(() => {
            // clear feedback and move to next
            feedback.classList.add('hidden');
            if (inputEl) {
                inputEl.disabled = false;
                inputEl.value = '';
            }
            if (submitBtn) submitBtn.disabled = false;
            currentQuestionIndex++;
            showNextFlashcard();
        }, delay);
    } else if (opts.autoHide) {
        setTimeout(() => {
            feedback.classList.add('hidden');
        }, opts.autoHideDelay || 1000);
    }
}

function continueAfterFeedback() {
    const feedback = document.getElementById('feedback');
    const inputEl = document.getElementById('answerInput');
    const submitBtn = document.getElementById('submitButton');
    feedback.classList.add('hidden');
    if (inputEl) {
        inputEl.disabled = false;
        inputEl.value = '';
        inputEl.focus();
    }
    if (submitBtn) submitBtn.disabled = false;
    currentQuestionIndex++;
    showNextFlashcard();
}

function showCheatSheet() {
    const cheat = document.getElementById('cheatSheet');
    const flash = document.getElementById('flashcardSection');
    const backdrop = document.getElementById('modalBackdrop');

    // If the flashcard is currently visible, open the cheat-sheet as a modal overlay
    if (flash && flash.classList.contains('show')) {
        // count modal uses during a quiz session
        cheatUseCount = (cheatUseCount || 0) + 1;
        cheat.classList.add('modal', 'show');
        if (backdrop) backdrop.classList.add('show');
        // disable input while modal is open
        const input = document.getElementById('answerInput');
        if (input) input.disabled = true;
    } else {
        // default behavior (initial screen): show the cheat sheet and hide flashcards
        cheat.classList.add('show');
        if (flash) flash.classList.remove('show');
    }
}

function closeCheatSheet() {
    const cheat = document.getElementById('cheatSheet');
    const backdrop = document.getElementById('modalBackdrop');
    const flash = document.getElementById('flashcardSection');

    if (cheat.classList.contains('modal')) {
        // close modal and return to the quiz (preserve current question)
        cheat.classList.remove('modal', 'show');
        if (backdrop) backdrop.classList.remove('show');
        const input = document.getElementById('answerInput');
        if (input) {
            input.disabled = false;
            input.focus();
        }
    } else {
        // non-modal close: hide cheat-sheet and show flashcard section
        cheat.classList.remove('show');
        if (flash) flash.classList.add('show');
    }
}

function showResults() {
    document.getElementById('flashcardSection').classList.remove('show');
    document.getElementById('results').classList.add('show');
    
    const resultsScore = document.getElementById('resultsScore');
    const resultsMessage = document.getElementById('resultsMessage');
    
    resultsScore.textContent = `${score}/${currentWords.length}`;
    
    let message = '';
    if (cheatUseCount && cheatUseCount > 0) {
        message = `You got ${score}/${currentWords.length} correct. But you used the cheat sheet ${cheatUseCount} time${cheatUseCount>1?'s':''}!`;
    } else {
        if (score === currentWords.length) {
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
    
    resultsMessage.textContent = message;
    
    // Save session
    saveSession({
        score: score,
        total: currentWords.length,
        cheatUseCount: cheatUseCount || 0,
        words: currentWords.map(w => ({ katakana: w.katakana, answer: w.answer })),
        timestamp: new Date().toISOString()
    });
}

function restartTraining() {
    startTraining();
}

function saveSession(sessionData) {
    // Save to localStorage
    const sessions = JSON.parse(localStorage.getItem('katakana_sessions') || '[]');
    sessions.push(sessionData);
    localStorage.setItem('katakana_sessions', JSON.stringify(sessions));
}

function loadPreviousSessions() {
    // Load and parse previous sessions if needed
    const sessions = JSON.parse(localStorage.getItem('katakana_sessions') || '[]');
    console.log(`Loaded ${sessions.length} previous sessions`);
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        selectRandomWords,
        katakanaChart,
        cognateWords
    };
}
