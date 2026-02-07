// /works/daily-fit/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Award, Check, ChevronDown, ChevronUp } from 'lucide-react';

// 画像パス定義
const heroImage = '/images/dailyfit/menu_whitefish.png'; // 既存の画像を使用（変更なし）
const chefImage = '/images/dailyfit/chef_jinguji_final.png'; // 新シェフ：神宮寺 健
const nutritionistImage = '/images/dailyfit/nutritionist_final.png'; // 新管理栄養士

// 3ステップ画像
const stepImages = [
    '/images/dailyfit/step_01_relax.png',
    '/images/dailyfit/step_02_delivery.png',
    '/images/dailyfit/step_03_dining.png',
];

// メニューデータ（統一画像適用進行中）
const menuItems = [
    {
        name: "彩り野菜と鮭の西京焼き",
        comment: "西京味噌の芳醇な香りと、脂ののった鮭の旨味を最大限に引き立てる自信作です。季節の野菜を添えて。",
        image: "/images/dailyfit/menu_uniform_01_salmon.png",
        calories: 342,
        protein: 24.5, fat: 10.2, carb: 28.6
    },
    {
        name: "本格ガパオライス",
        comment: "フレッシュバジルの清涼感とスパイスの刺激。本格的な辛みの中に、鶏肉の甘みが広がる一品です。",
        image: "/images/dailyfit/menu_uniform_02_gapao.png",
        calories: 458,
        protein: 22.8, fat: 15.4, carb: 58.2
    },
    {
        name: "白身魚のレモンバターソテー",
        comment: "ふっくらと仕上げた白身魚に、焦がしバターとレモンの酸味が絡む。口の中でほどける上品な味わいを。",
        image: "/images/dailyfit/menu_uniform_03_whitefish.png",
        calories: 315,
        protein: 26.1, fat: 14.8, carb: 22.4
    },
    {
        name: "完熟トマトのハンバーグ",
        comment: "ナイフを入れた瞬間に溢れ出す肉汁。完熟トマトの甘みと酸味を凝縮した特製ソースで、レストランの味を再現しました。",
        image: "/images/dailyfit/menu_04_tomato_hamburg.png",
        calories: 480,
        protein: 28.5, fat: 18.2, carb: 32.1
    },
    {
        name: "鶏肉のバジルグリル",
        comment: "皮目はパリッと、身はジューシーに。香り高いバジルソースが食欲をそそる、ワインにもよく合う大人のグリルです。",
        image: "/images/dailyfit/menu_05_chicken_basil.png",
        calories: 385,
        protein: 32.4, fat: 12.1, carb: 25.6
    },
    {
        name: "牛肉の赤ワイン煮込み",
        comment: "赤ワインと香味野菜で、箸で切れるほど柔らかくなるまでじっくり煮込みました。濃厚なコクと深い旨味が、特別な時間を演出します。",
        image: "/images/dailyfit/menu_06_beef_redwine.png",
        calories: 520,
        protein: 27.2, fat: 19.5, carb: 35.8
    },
    {
        name: "豚ロースのジンジャーソース",
        comment: "豚ロースの甘みを引き立てる、特製ジンジャーソース。生姜の爽やかな香りと醤油の香ばしさが、ご飯との相性抜群です。",
        image: "/images/dailyfit/menu_07_pork_ginger.png",
        calories: 410,
        protein: 25.8, fat: 16.4, carb: 33.2
    },
    {
        name: "旬菜の豆腐ステーキ",
        comment: "大豆の甘みが濃い豆腐を、香ばしいステーキに。旬の野菜をたっぷりと添えた、ヘルシーながらも満足感のある一皿です。",
        image: "/images/dailyfit/menu_08_tofu_steak.png",
        calories: 286,
        protein: 18.2, fat: 8.5, carb: 24.8
    },
];

export default function DailyFit() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-[#faf9f6] text-slate-800 font-sans pt-24">

            {/* ヒーローセクション */}
            <section className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={heroImage}
                        alt="白身魚のレモンバターソテー"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-90"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="relative z-10 text-center md:text-left md:w-full md:max-w-6xl md:px-12 p-4 mt-20 md:mt-0">
                    <p className="text-[#c9956a] font-bold tracking-[0.3em] text-xs uppercase mb-6 drop-shadow-md">
                        Premium Meal Delivery
                    </p>
                    <h1 className="text-3xl md:text-6xl font-serif font-bold leading-tight mb-8 text-white drop-shadow-lg">
                        一流シェフが考案し、<br />
                        <span className="tracking-tighter md:tracking-normal text-[0.85em] md:text-[1em] whitespace-nowrap">管理栄養士があなたの体調にあわせて</span><br />
                        <span className="text-[#e2b788]">セレクト。</span>
                    </h1>
                    <p className="text-2xl md:text-3xl mb-12 text-white font-serif tracking-wide border-l-4 border-[#c9956a] pl-6 ml-2 md:ml-0 shadow-sm">
                        <span className="font-bold">極上健康食</span>が届く。
                    </p>
                    <Link href="#menu" className="inline-block bg-[#1a1a1a] border border-[#c9956a]/50 text-white font-bold py-4 px-12 rounded-sm transition duration-300 shadow-[0_10px_30px_rgba(199,149,106,0.3)] hover:bg-[#333] tracking-widest text-lg relative group overflow-hidden">
                        <span className="relative z-10">あなた専用の献立プランを見る</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#c9956a] to-[#e2b788] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                    </Link>
                </div>
            </section>

            {/* 信頼セクション（テキストベースの高級タグ） */}
            <section className="w-full py-12 bg-white border-b border-gray-100 flex justify-center items-center">
                <div className="relative p-[1px] bg-gradient-to-r from-[#d4a574] via-[#f3d0a3] to-[#d4a574] rounded-sm shadow-md">
                    <div className="bg-white px-8 py-4 flex items-center gap-4 rounded-sm">
                        <Award className="text-[#d4a574]" size={24} />
                        <div>
                            <p className="text-[#c9956a] font-bold text-xs uppercase tracking-[0.2em] mb-1">Trusted by Professionals</p>
                            <p className="text-slate-800 font-serif text-sm md:text-base font-bold">プロフェッショナルが認めた、確かな品質。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* [Hidden Cost] 自炊コストの再定義 */}
            <section className="w-full py-24 bg-[#1a1a1a] text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black opacity-50" />
                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-center mb-20 leading-tight">
                        その自炊、<br />
                        <span className="text-[#c9956a]">実は、高い。</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Cost of Cooking */}
                        <div className="bg-white/5 backdrop-blur-sm p-10 border border-white/10 rounded-sm relative group hover:bg-white/10 transition-colors">
                            <h3 className="text-xl font-bold mb-8 text-gray-400 font-serif tracking-in-expand">これまでのコスト</h3>
                            <ul className="space-y-6 text-gray-300">
                                <li className="flex items-center gap-4">
                                    <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
                                    <span className="text-lg">献立を考える「思考コスト」</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
                                    <span className="text-lg">買い出し・調理の「時間コスト」</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
                                    <span className="text-lg">食材廃棄・光熱費の「見えない出費」</span>
                                </li>
                            </ul>
                        </div>

                        {/* Value of Daily Fit */}
                        <div className="bg-gradient-to-br from-[#c9956a] to-[#a07248] p-10 shadow-[0_20px_50px_rgba(199,147,104,0.2)] rounded-sm transform md:-translate-y-6 relative overflow-hidden">
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/20 rounded-full blur-2xl" />
                            <h3 className="text-2xl font-bold mb-8 text-white font-serif">DAILY FITの価値</h3>
                            <ul className="space-y-6 text-white font-medium">
                                <li className="flex items-center gap-4 text-xl">
                                    <div className="bg-white/20 p-1 rounded-full"><Check size={16} /></div>
                                    <span>プロの味が<span className="text-2xl font-bold font-serif ml-2">瞬時</span>に</span>
                                </li>
                                <li className="flex items-center gap-4 text-xl">
                                    <div className="bg-white/20 p-1 rounded-full"><Check size={16} /></div>
                                    <span>管理栄養士による<span className="text-2xl font-bold font-serif ml-2">完全管理</span></span>
                                </li>
                                <li className="flex items-center gap-4 text-xl">
                                    <div className="bg-white/20 p-1 rounded-full"><Check size={16} /></div>
                                    <span>自分のための<span className="text-2xl font-bold font-serif ml-2">自由時間</span></span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <p className="text-center mt-16 text-gray-400 font-serif italic tracking-wider">
                        お金では買えない「時間」と「健康」を、あなたの手元に。
                    </p>
                </div>
            </section>

            {/* [Story] ダブル監修の物語 */}
            <section className="w-full py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-[#c9956a] font-bold tracking-widest text-xs uppercase block mb-3">Professional Story</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-serif text-slate-900 leading-tight">
                            一皿に込めた、<br className="md:hidden" />プロフェッショナルの想い
                        </h2>
                    </div>

                    {/* Story 1: Chef (Updated) */}
                    <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
                        <div className="w-full md:w-1/2 aspect-[4/3] relative shadow-2xl overflow-hidden rounded-sm">
                            <Image
                                src={chefImage}
                                alt="元ミシュラン三ツ星総料理長 神宮寺 健"
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                                <p className="text-[#d4a574] text-xs font-bold tracking-[0.2em] uppercase mb-1">Total Chef</p>
                                <p className="text-white text-xl font-serif font-bold">神宮寺 健 <span className="text-sm font-sans font-normal opacity-80 ml-2">Ken Jinguji</span></p>
                                <p className="text-white/80 text-xs mt-1">元ミシュラン三ツ星レストラン総料理長</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:pl-8">
                            <h3 className="text-2xl font-bold mb-6 text-[#c9956a] font-serif border-b border-gray-200 pb-4 inline-block">「美味しい」は、健康への最短ルート。</h3>
                            <p className="text-slate-600 leading-8 font-medium">
                                「いくら体に良くても、美味しくなければ続かない。」<br />
                                私のレストランで提供している料理と同じ熱量で、素材の声を聞き、ソースの一滴までこだわり抜いています。冷凍だからこそできる、閉じ込められた凝縮の旨味をぜひ味わってください。
                            </p>
                        </div>
                    </div>

                    {/* Story 2: Nutritionist (Updated) */}
                    <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                        <div className="w-full md:w-1/2 aspect-[4/3] relative shadow-2xl overflow-hidden rounded-sm">
                            <Image
                                src={nutritionistImage}
                                alt="管理栄養士"
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-20 text-right">
                                <p className="text-[#d4a574] text-xs font-bold tracking-[0.2em] uppercase mb-1">Expert Team</p>
                                <p className="text-white text-xl font-serif font-bold">管理栄養士チーム</p>
                                <p className="text-white/80 text-xs mt-1">Professional Nutritionists</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:pr-8 text-right md:text-left">
                            <h3 className="text-2xl font-bold mb-6 text-[#c9956a] font-serif border-b border-gray-200 pb-4 inline-block">数字だけでなく、心を満たす栄養を。</h3>
                            <p className="text-slate-600 leading-8 font-medium">
                                PFCバランスはもちろん、色味や食感の多様性まで計算し尽くしました。
                                忙しい現代人が不足しがちな栄養素を補いながら、食べた時の「満足感」を大切に設計しています。あなたの体調に寄り添う、パーソナルな栄養管理をお任せください。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* メニューグリッド */}
            <section className="w-full py-24 bg-[#faf9f6]" id="menu">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-[#c9956a] font-bold tracking-widest text-xs uppercase block mb-3">Season's Menu</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-serif text-slate-900">一流シェフの献立メニュー</h2>
                        <p className="mt-4 text-slate-500 font-serif italic">毎月変わる80種類以上のレパートリー</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                        {menuItems.map((menu, i) => (
                            <div key={i} className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col h-full min-h-[480px]">
                                <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
                                    <Image
                                        src={menu.image}
                                        alt={menu.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="group-hover:scale-105 transition-transform duration-1000 ease-out"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    {/* 上部固定コンテナ：説明文の開始位置を揃えるため高さ指定 */}
                                    <div className="flex flex-col min-h-[80px] mb-4">
                                        {/* 【上段】メニュー名 */}
                                        <h3 className="text-[1rem] font-serif font-bold text-slate-900 leading-none tracking-wide mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                                            {menu.name}
                                        </h3>

                                        {/* 【中段】栄養成分 */}
                                        <div className="text-[10px] text-gray-400 font-mono tracking-tight leading-relaxed flex flex-wrap gap-x-2">
                                            <span>エネルギー {menu.calories}kcal</span>
                                            <span className="text-gray-300">/</span>
                                            <span>タンパク質 {menu.protein}g</span>
                                            <span className="text-gray-300">/</span>
                                            <span>脂質 {menu.fat}g</span>
                                            <span className="text-gray-300">/</span>
                                            <span>炭水化物 {menu.carb}g</span>
                                        </div>
                                    </div>

                                    {/* 【下段】説明文 */}
                                    <p className="text-sm text-gray-700 font-serif leading-[1.8] tracking-wider opacity-90 border-t border-gray-100 pt-4">
                                        {menu.comment}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* [3-Step] 夜の自由を手に入れる */}
            <section className="w-full py-24 bg-white relative">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-slate-900">
                        夜が、<span className="text-[#c9956a]">あなたのものになる。</span>
                    </h2>
                    <p className="text-slate-500 mb-20 font-serif">
                        3つのステップで完了する、スマートな食生活
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[150px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c9956a]/20 to-transparent -z-10" />

                        {/* Step 1 */}
                        <div className="flex flex-col items-center group">
                            <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden mb-8 shadow-lg">
                                <Image
                                    src={stepImages[0]}
                                    alt="選ぶ"
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <span className="text-5xl font-serif font-bold text-[#c9956a] drop-shadow-md">01</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-serif">選ぶ</h3>
                            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                                スマホから1分で完了。<br />苦手な食材も自動でスキップ。
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center group text-center">
                            <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden mb-8 shadow-lg">
                                <Image
                                    src={stepImages[1]}
                                    alt="届く"
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <span className="text-5xl font-serif font-bold text-[#c9956a] drop-shadow-md">02</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-serif">届く</h3>
                            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                                クール便で鮮度そのままに。<br />スキップや日時変更も自由自在。
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center group">
                            <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden mb-8 shadow-lg">
                                <Image
                                    src={stepImages[2]}
                                    alt="食べる"
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <span className="text-5xl font-serif font-bold text-[#c9956a] drop-shadow-md">03</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-serif">食べる</h3>
                            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                                レンジでわずか5分。<br />後片付けは、ゴミ箱へ捨てるだけ。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* [FAQ] 安心への配慮 */}
            <section className="w-full py-24 bg-[#faf9f6]">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16 font-serif text-slate-800">
                        よくあるご質問
                    </h2>
                    <div className="space-y-4">
                        {[
                            { q: "定期購入の「縛り」はありますか？", a: "一切ございません。1回だけのお試しも可能ですし、いつでもスキップ・解約が可能です。" },
                            { q: "配送エリアはどこまでですか？", a: "日本全国へクール便でお届けいたします（一部離島を除く）。日時指定も可能です。" },
                            { q: "添加物は使用していますか？", a: "国の基準よりも厳しい自社基準を設け、保存料・合成着色料は使用しておりません。素材本来の味を大切にしています。" },
                            { q: "アレルギー対応はしていますか？", a: "特定原材料7品目除去メニューなど、アレルギーフィルター機能でご自身に合ったメニューをお選びいただけます。" },
                            { q: "賞味期限はどのくらいですか？", a: "冷凍状態で約6ヶ月〜1年間保存可能です。ストック食としても大変便利です。" },
                        ].map((item, i) => (
                            <details key={i} className="group bg-white rounded-sm shadow-sm border-l-4 border-transparent hover:border-[#c9956a] transition-all">
                                <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-slate-800 list-none">
                                    <span className="flex items-center gap-4">
                                        <span className="text-[#c9956a] font-serif italic text-xl">Q.</span>
                                        {item.q}
                                    </span>
                                    <span className="transition-transform group-open:rotate-180 text-gray-400">
                                        <ChevronDown size={20} />
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 pl-14 text-slate-600 leading-relaxed border-t border-gray-100 pt-4">
                                    <p>{item.a}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* 価格セクション（CTA化・最終確認済み） */}
            <section className="w-full py-20 bg-[#1a1a1a] text-white text-center border-t border-white/10" id="plans">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-[#c9956a] font-bold tracking-[0.3em] text-xs uppercase mb-6">Start Your Premium Life</p>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-10 leading-tight">
                        今すぐ、<br className="md:hidden" />プロの食生活を始める。
                    </h2>
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-sm p-10 shadow-2xl inline-block w-full md:w-auto">
                        <h3 className="text-xl font-bold mb-6 text-gray-300 tracking-widest">初回限定 <span className="text-sm font-normal">（お試し5食セット）</span></h3>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8 border-b border-white/10 pb-8">
                            <span className="line-through text-gray-500 text-lg">通常 4,500円</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl md:text-6xl font-bold text-[#c9956a] font-serif">1,980</span>
                                <span className="text-xl">円</span>
                            </div>
                        </div>

                        <p className="text-sm text-gray-400 mb-8">
                            税込・送料無料 / 全額返金保証付き
                        </p>

                        <Link href="#" className="block w-full bg-[#c9956a] hover:bg-[#b08055] text-white font-bold py-5 px-10 rounded-sm transition duration-300 shadow-lg text-lg tracking-widest">
                            あなた専用の献立プランを見る
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}