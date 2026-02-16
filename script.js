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
    { katakana: 'パーティー', answer: 'party', alternates: ['pate'] },
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
    { katakana: 'マンガ', answer: 'manga' },
    { katakana: 'スシ', answer: 'sushi' },
    { katakana: 'トウフ', answer: 'tofu' },
    { katakana: 'スウドク', answer: 'sudoku' },
    { katakana: 'ボンサイ', answer: 'bonsai' },
    { katakana: 'テンプラ', answer: 'tempura' },
    { katakana: 'ラーメン', answer: 'ramen' },
    { katakana: 'カラオケ', answer: 'karaoke' },
    { katakana: 'ニンジャ', answer: 'ninja' },
    { katakana: 'サムライ', answer: 'samurai' },
    { katakana: 'キモノ', answer: 'kimono' },
    { katakana: 'フトン', answer: 'futon' },
    { katakana: 'オリガミ', answer: 'origami' },
    { katakana: 'エダマメ', answer: 'edamame' },
    { katakana: 'ミソ', answer: 'miso' },
    { katakana: 'テリヤキ', answer: 'teriyaki' },
    { katakana: 'ワサビ', answer: 'wasabi' },
    { katakana: 'サケ', answer: 'sake' },
    { katakana: 'ヒバチ', answer: 'hibachi' },
    { katakana: 'タタミ', answer: 'tatami' },
    { katakana: 'ゼン', answer: 'zen' },
    { katakana: 'ハイク', answer: 'haiku' },
    { katakana: 'エモジ', answer: 'emoji' },
    { katakana: 'オタク', answer: 'otaku' },
    { katakana: 'ツナミ', answer: 'tsunami' },
    { katakana: 'カラテ', answer: 'karate' },
    { katakana: 'ジュウドウ', answer: 'judo' },
    { katakana: 'スモウ', answer: 'sumo' },
    { katakana: 'マッチャ', answer: 'matcha' },
    { katakana: 'ウドン', answer: 'udon' },
    { katakana: 'ソバ', answer: 'soba' },
    { katakana: 'ギョウザ', answer: 'gyoza' },
    { katakana: 'サシミ', answer: 'sashimi' },
    { katakana: 'ウマミ', answer: 'umami' },
    { katakana: 'コイ', answer: 'koi' },
    { katakana: 'シアツ', answer: 'shiatsu' },
    { katakana: 'アイキドウ', answer: 'aikido' },
    { katakana: 'ケンドウ', answer: 'kendo' },
    { katakana: 'パンコ', answer: 'panko' },
    { katakana: 'ヤキソバ', answer: 'yakisoba' },
    { katakana: 'ニギリ', answer: 'nigiri' },
    { katakana: 'マキ', answer: 'maki' },
    { katakana: 'テマキ', answer: 'temaki' },
    { katakana: 'ナットウ', answer: 'natto' },
    { katakana: 'ミリン', answer: 'mirin' },
    { katakana: 'ショウユ', answer: 'shoyu', alternates: ['soy sauce'] },
    { katakana: 'ワギュウ', answer: 'wagyu' },
    { katakana: 'シバ', answer: 'shiba', alternates: ['shiba inu'] },
    { katakana: 'アキタ', answer: 'akita', alternates: ['akita inu'] },
    { katakana: 'カブキ', answer: 'kabuki' },
    { katakana: 'ゲイシャ', answer: 'geisha' },
    { katakana: 'リキシャ', answer: 'rickshaw' },
    { katakana: 'タイクーン', answer: 'tycoon' },
    { katakana: 'サヨナラ', answer: 'sayonara' },
    { katakana: 'バンザイ', answer: 'banzai' },
    { katakana: 'ポケモン', answer: 'pokemon' },
    { katakana: 'ニンテンドウ', answer: 'nintendo' },
    { katakana: 'テッパンヤキ', answer: 'teppanyaki' },
    { katakana: 'ショウグン', answer: 'shogun' },
    { katakana: 'カタナ', answer: 'katana' },
    { katakana: 'ロウニン', answer: 'ronin' },
    { katakana: 'センセイ', answer: 'sensei' },
    { katakana: 'ドウジョウ', answer: 'dojo' },
    { katakana: 'カミカゼ', answer: 'kamikaze' },
    { katakana: 'ハラキリ', answer: 'harakiri' },
    { katakana: 'セップク', answer: 'seppuku' },
    { katakana: 'カワイイ', answer: 'kawaii' },
    { katakana: 'ヒキコモリ', answer: 'hikikomori' },
    { katakana: 'タマゴッチ', answer: 'tamagotchi' },
    { katakana: 'シイタケ', answer: 'shiitake' },
    { katakana: 'ダイコン', answer: 'daikon' },
    { katakana: 'トンコツ', answer: 'tonkotsu' },
    { katakana: 'モチ', answer: 'mochi' },
    { katakana: 'マネキネコ', answer: 'maneki-neko', alternates: ['maneki neko'] },
    { katakana: 'ヤキトリ', answer: 'yakitori' },
    { katakana: 'タコヤキ', answer: 'takoyaki' },
    { katakana: 'オコノミヤキ', answer: 'okonomiyaki' },
    { katakana: 'イザカヤ', answer: 'izakaya' },
    { katakana: 'ベントウ', answer: 'bento' },
    { katakana: 'オニギリ', answer: 'onigiri' },
    { katakana: 'センパイ', answer: 'senpai' },
    { katakana: 'コウハイ', answer: 'kohai' },
    { katakana: 'ツンデレ', answer: 'tsundere' },
    { katakana: 'ヤンデレ', answer: 'yandere' },
    { katakana: 'シンカンセン', answer: 'shinkansen' },
    { katakana: 'カツドン', answer: 'katsudon' },
    { katakana: 'カツ', answer: 'katsu' },
    { katakana: 'ドンブリ', answer: 'donburi' },
    { katakana: 'カイゼン', answer: 'kaizen' },
    { katakana: 'モッタイナイ', answer: 'mottainai' },
    { katakana: 'ボケ', answer: 'bokeh' },
    { katakana: 'ヤクザ', answer: 'yakuza' },
    { katakana: 'ハローキティ', answer: 'hello kitty' },
    { katakana: 'ガンダム', answer: 'gundam' },
    { katakana: 'ゴジラ', answer: 'godzilla' },
    { katakana: 'ピカチュウ', answer: 'pikachu' },
    { katakana: 'カイジュウ', answer: 'kaiju' },
    { katakana: 'ジブリ', answer: 'ghibli' },
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

// Hiragana grid (same structure as katakana, for display in grid)
const HIRAGANA_DATA = [
    [{ kana: 'あ', romaji: 'A' }, { kana: 'い', romaji: 'I' }, { kana: 'う', romaji: 'U' }, { kana: 'え', romaji: 'E' }, { kana: 'お', romaji: 'O' }],
    [{ kana: 'か', romaji: 'KA' }, { kana: 'き', romaji: 'KI' }, { kana: 'く', romaji: 'KU' }, { kana: 'け', romaji: 'KE' }, { kana: 'こ', romaji: 'KO' }],
    [{ kana: 'さ', romaji: 'SA' }, { kana: 'し', romaji: 'SHI' }, { kana: 'す', romaji: 'SU' }, { kana: 'せ', romaji: 'SE' }, { kana: 'そ', romaji: 'SO' }],
    [{ kana: 'た', romaji: 'TA' }, { kana: 'ち', romaji: 'CHI' }, { kana: 'つ', romaji: 'TSU' }, { kana: 'て', romaji: 'TE' }, { kana: 'と', romaji: 'TO' }],
    [{ kana: 'な', romaji: 'NA' }, { kana: 'に', romaji: 'NI' }, { kana: 'ぬ', romaji: 'NU' }, { kana: 'ね', romaji: 'NE' }, { kana: 'の', romaji: 'NO' }],
    [{ kana: 'は', romaji: 'HA' }, { kana: 'ひ', romaji: 'HI' }, { kana: 'ふ', romaji: 'FU' }, { kana: 'へ', romaji: 'HE' }, { kana: 'ほ', romaji: 'HO' }],
    [{ kana: 'ま', romaji: 'MA' }, { kana: 'み', romaji: 'MI' }, { kana: 'む', romaji: 'MU' }, { kana: 'め', romaji: 'ME' }, { kana: 'も', romaji: 'MO' }],
    [{ kana: 'や', romaji: 'YA' }, null, { kana: 'ゆ', romaji: 'YU' }, null, { kana: 'よ', romaji: 'YO' }],
    [{ kana: 'ら', romaji: 'RA' }, { kana: 'り', romaji: 'RI' }, { kana: 'る', romaji: 'RU' }, { kana: 'れ', romaji: 'RE' }, { kana: 'ろ', romaji: 'RO' }],
    [{ kana: 'わ', romaji: 'WA' }, null, null, null, { kana: 'を', romaji: 'WO' }],
    [{ kana: 'ん', romaji: 'N' }],

    [null, null, null, null, null],
    [{ kana: 'が', romaji: 'GA' }, { kana: 'ぎ', romaji: 'GI' }, { kana: 'ぐ', romaji: 'GU' }, { kana: 'げ', romaji: 'GE' }, { kana: 'ご', romaji: 'GO' }],
    [{ kana: 'ざ', romaji: 'ZA' }, { kana: 'じ', romaji: 'JI' }, { kana: 'ず', romaji: 'ZU' }, { kana: 'ぜ', romaji: 'ZE' }, { kana: 'ぞ', romaji: 'ZO' }],
    [{ kana: 'だ', romaji: 'DA' }, { kana: 'ぢ', romaji: 'DI' }, { kana: 'づ', romaji: 'DU' }, { kana: 'で', romaji: 'DE' }, { kana: 'ど', romaji: 'DO' }],
    [{ kana: 'ば', romaji: 'BA' }, { kana: 'び', romaji: 'BI' }, { kana: 'ぶ', romaji: 'BU' }, { kana: 'べ', romaji: 'BE' }, { kana: 'ぼ', romaji: 'BO' }],
    [{ kana: 'ぱ', romaji: 'PA' }, { kana: 'ぴ', romaji: 'PI' }, { kana: 'ぷ', romaji: 'PU' }, { kana: 'ぺ', romaji: 'PE' }, { kana: 'ぽ', romaji: 'PO' }],

    [null, null, null, null, null],
    [{ kana: 'ゃ', romaji: 'ya' }, null, { kana: 'ゅ', romaji: 'yu' }, null, { kana: 'ょ', romaji: 'yo' }],
    [{ kana: 'ぁ', romaji: 'a' }, { kana: 'ぃ', romaji: 'i' }, { kana: 'ぅ', romaji: 'u' }, { kana: 'ぇ', romaji: 'e' }, { kana: 'ぉ', romaji: 'o' }],
    [{ kana: 'っ', romaji: "'" }, { kana: 'ー', romaji: '-' }, null, null, null]
];

// Create a katakana -> hiragana mapping
const KATAKANA_TO_HIRAGANA = {};
for (let i = 0; i < KATAKANA_DATA.length; i++) {
    const katakanaRow = KATAKANA_DATA[i];
    const hiraganaRow = HIRAGANA_DATA[i];
    for (let j = 0; j < katakanaRow.length; j++) {
        if (katakanaRow[j] && hiraganaRow[j]) {
            KATAKANA_TO_HIRAGANA[katakanaRow[j].kana] = hiraganaRow[j].kana;
        }
    }
}

/**
 * Convert a katakana string to hiragana
 */
function katakanaToHiragana(katakanaStr) {
    if (!katakanaStr) return '';
    return katakanaStr.split('').map(char => KATAKANA_TO_HIRAGANA[char] || char).join('');
}

const ROMAJI_LOOKUP = {};
KATAKANA_DATA.forEach(row => {
    row.forEach(cell => {
        if (cell && cell.kana && cell.romaji) {
            ROMAJI_LOOKUP[cell.kana] = cell.romaji;
        }
    });
});
// Add hiragana to romaji lookup as well
HIRAGANA_DATA.forEach(row => {
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
        this.useHiragana = false; // Track whether to use hiragana
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
            showSoundsBtn: document.getElementById('show-sounds-btn'),
            kanaToggle: document.getElementById('kana-toggle-checkbox')
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
        this.renderKatakanaGrid();
        // Only update flashcard if quiz is active
        if (this.elements.flashcardSection.classList.contains('show')) {
            this.updateFlashcard(true);
        }
        const title = this.useHiragana ? 'Hiragana Trainer' : 'Katakana Trainer';
        this.elements.cheatSheet.querySelector('h1').textContent = title + '!';
        document.title = title;
    }

    renderKatakanaGrid() {
        const grid = this.elements.katakanaGrid;
        grid.innerHTML = '';
        const kanaData = this.useHiragana ? HIRAGANA_DATA : KATAKANA_DATA;
        kanaData.forEach((row, idx) => {
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
        const displayText = this.useHiragana ? katakanaToHiragana(word.katakana) : word.katakana;

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
        const displayText = this.useHiragana ? katakanaToHiragana(this.game.getCurrentWord().katakana) : this.game.getCurrentWord().katakana;
        document.querySelectorAll('.flashcard-word').forEach(el => el.innerHTML = getKatakanaRomajiRubyHTML(displayText));
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
            const displayText = this.useHiragana ? katakanaToHiragana(this.game.getCurrentWord().katakana) : this.game.getCurrentWord().katakana;
            breakdown.textContent = getKatakanaRomajiBreakdownString(displayText);
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
