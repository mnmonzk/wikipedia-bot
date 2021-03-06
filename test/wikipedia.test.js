const Wikipedia = require('../wikipedia');
const chai = require('chai');

const debugJSON = {
  batchcomplete: '',
  warnings: {
    extracts: {
      '*': '"exlimit" was too large for a whole article extracts request, lowered to 1.',
    },
  },
  query: {
    pages: {
      54455: {
        pageid: 54455,
        ns: 0,
        title: 'ハゲ',
        extract: 'ハゲ（禿、禿げ）とは、加齢、疾病および投薬の副作用、火傷、遺伝的要因などにより髪の毛が薄い、もしくは全くない頭部などを指す。またハゲた場合頭皮に艶が出やすい。頭部がつるつるに禿げている様を指し、つるっぱげ（つるっ禿げ）もしくはツルハゲ（つる禿げ）とも呼ぶ。頻繁に動詞化するが、その際「禿」の字が使われることはまれである。\n\n\n== 原因 ==\n\n2016年2月5日には、東京医科歯科大学（西村栄美教授ら）などの研究グループが加齢によるハゲの原因が、頭皮に存在するコラーゲンの一種が減少し、毛髪を作り出す細胞が死滅するためだとする研究成果を発表した。マウスの体毛が加齢とともに薄くなるメカニズムの研究で、体毛を生産する細胞が、加齢とともに細胞の生命維持に必要なコラーゲン「17型コラーゲン」を自ら分解し死滅することを突き止めた。この「17型コラーゲン」の減少を抑える遺伝子を組み替えたマウスでは体毛の減少が少なかった。研究グループはヒトの毛髪も同じメカニズムであると確認しており、コラーゲンの減少を抑制する治療薬となるべく物質を探し出すことで将来、ハゲの治療につながることが予想される。\n毛が抜けることを総じて脱毛症という。医学的側面についてはそちらを参照のこと。\n\n\n=== 加齢 ===\n加齢により頭髪の生える面積が狭くなる男性型脱毛症を指してハゲと呼ぶケースが一般的である。男性では30代後半〜40代頃から進行することが多いが、まれに20代頃から禿げ始める人もいて、このような人は「若ハゲ」と呼ばれる。\n男性の頭髪の生える面積が減少するパターンは大きく二つあり、ひとつは生え際から額が広くなるように禿げる。これを禿げ上がるという。特に両こめかみ上から進行する場合が多く、その生え際の形がアルファベットのMに似ていることから俗に「M字ハゲ」と呼ばれる。\nもう一つはつむじから次第に髪の密度が少なくなるように禿げ、その結果、頭頂部に地肌が出るが、後頭部と側頭部の髪は残る。この様子が河童に似ていることから俗に「カッパ禿げ」とも呼ばれる。この周囲の残っている髪を伸ばして、禿げている所の上を覆うように、本来毛が生えている方向とは反対側に寝かせてジェルで固定した髪型を、毛がまばらになった隙間から肌が見えるのをバーコードに見立ててバーコード頭と言う。\nなお、生え際と頭頂部のハゲが同時に進む場合もあるが、最終的には後頭部に髪が残るか、すべて無くなることもある。\n禿げはじめた男性が頭髪を丸刈りにして禿げていることを誤魔化そうとする例が散見されるが、髪の残った部分が再び伸びはじめると毛根が消失している部分との差異が際立ち禿げていることがはっきりするため、あまり有効な手段であるとはいえない。\n一般的にハゲとは毛が生えていない状況を指すものと思われがちだが、毛根がいきなり死滅するのではなく、ひとつの毛根から生える頭髪の数が減るケースが多く（2 - 3本生えているものが1本になるなど）、また毛が十分育たないまま成長が止まったり、成長する前に抜け落ちてまた生え変わるといったサイクルが早くなったり、毛髪の太さが細くなるなどの原因により、髪の毛の本数自体は一般的な人の毛髪量と大差がないのに、髪の毛が細くなったことにより髪の密度が減少している状態も「ハゲ」と呼ばれることが多く、毛根の数自体が減少しているためであると誤解されるケースが多い。また、毛根が死滅していても産毛が生えてくるケースがあるが、密度的には薄いため当然ながらこのようなケースもハゲと呼ばれることがある。\n女性の場合、禿げ上がることは少ないが、加齢と共に髪の密度が低くなるのは普通で、この場合頭頂部付近から全般に薄くなることが多い。\n\n\n=== 精神的理由 ===\nストレスで髪が抜ける場合もある。円形脱毛症は代表的な例である。\n\n\n=== 病気 ===\n円形脱毛症にはアレルギーなどが原因の場合もある。他に、感染症のケルズス禿瘡など。\n\n\n=== 薬 ===\n薬剤の副作用として頭髪が抜ける例もある。抗ガン剤はその点で有名。\n\n\n=== 放射線 ===\nある程度の放射線に被爆した場合に起こる急性放射線症の症状のひとつとして脱毛が起こる場合がある。毛根細胞が被爆により障害を受け毛髪が細くなり切れやすくなることから起こる。\n\n\n=== 外傷 ===\n頭髪の出る部分の皮膚に怪我をすると再生した皮膚から頭髪が出ない。小さいものなら自他共に気付くことは無いが、ある程度の範囲があると、小さなハゲとして認識される。やけどの場合、広い範囲となる可能性がある。\n\n\n=== 自分で抜く ===\n\n以上は毛が抜けたり生えなくなることでハゲになるものだが、中には自分自身の加工でハゲになるものもある。ファッションとしてのスキンヘッドや、職業による坊主（聖職者の剃髪やトンスラなど）等の例がある。その他、精神的なストレスのために自分で毛を抜いてしまう、という例もあり、抜毛症という。\n但し、狭義で「ハゲ」と言った場合、不可抗力で自然に脱毛したものを呼ぶのが一般的である。いわゆる「坊主刈り」も、毛髪の極めて少ない状態をハゲになぞらえて呼んでいると言える。\n\n\n== 文化 ==\nハゲはじめは男性にとって恥ずかしく感じられることが多い。それを目立たなくするために髪型などを工夫すると「ハゲ隠し」と笑われることがある。しかし、いよいよ禿げてしまえば開き直るより仕方ないと考え、ハゲを自慢する方向に転じる場合もある。禿頭コンクールが開催されたこともある。中には禿頭に卵白でパックして艶を出す人もいるらしい。ツル多はげます会（青森県鶴田町）や光頭会（横手市雄物川町）、禿頭会といった団体もあり、「全国ひかりサミット」という団体交流の場も開かれている。国会においても、第46回衆議院議員総選挙で初当選を果たした衆議院議員の中から、頭髪の薄い者が集まり「日本を明るくする会」が結成された。あとは流行で、スキンヘッドや丸刈りにしてる方に対しても悪口で、ハゲと言う人もいる。\nハゲの問題は、古くから人々を悩ませてきており、例えば『旧約聖書』に登場するエリシャには、子供たちにハゲ頭をからかわれた時、その子供たちを呪い、結果として42人の子供たちが熊に襲われたという逸話が載っている。\n\n\n== 頭髪以外での用例 ==\nハゲ（剝げ）とは、年月の経過、天候・気温・湿度の影響などによって塗料などが剝がれてしまっている部分、またその状況をいう。意図して剝がした場合には言わないことが多い。接着剤で接合したものがはがれかかっている場合にも、言うことがある。この状態を表現する語としては「ハゲチョロ」も多用される。\nその他では、木が乏しい山をハゲになぞらえてはげ山と呼ぶ。\n\n\n== 社会人類学的考察 ==\n江戸時代、多くの身分の男の髪型は月代を剃った髷のスタイルである。この習俗は平安時代の後期からあったと見られている。武士の男性は元服とともに前髪を落とした。公的な場では必ず月代を剃り、髪型を整えた。このように髷のスタイルは成人であるための公的な証明であり、出仕している武士であることの証明でもあった。そのため、髪が抜けすぎて髷が結えなくなると隠居するという慣習があり、禿げていても出仕する必要がある武士はかつらの使用を願い出ることもあった。\nこのような頭髪の一部をそりあげる習俗は世界各地にあり、後に清を建国する満州族にも頭頂部以外を剃り、残った髪の毛を長く編んだ辮髪の風習があった。清が中国大陸を支配すると、辮髪は全ての男性に義務付けられた。これは清の支配を受け入れたという証であり、髪を剃らない者は反逆者として扱われた。頭髪を剃ることが所属を表す形であったと見られている。\n\n\n== 旧ソ連における歴代支配者を巡る頭髪の法則 ==\nソビエト連邦及びロシア連邦において、レーニン、スターリン、フルシチョフ、・・・、ゴルバチョフ、エリツィン、プーチン（2000年 - 2008年）、メドベージェフ、現在のプーチン（2012年 - ）に至るまで、歴代指導者の頭髪が、ハゲか否かで順繰りとなっている。これはジョークでつるふさの法則と呼ばれる。実際にはスターリンとマレンコフ、アンドロポフとチェルネンコというようにフサフサが連なっている時期が存在する。\n\n\n== 脚注 ==\n\n\n== 関連項目 ==\n脱毛症（←育毛剤）\n白髪\nパイパン（←無毛症）\nかつら (装身具)・付け毛\nスキンヘッド・丸刈り\nスポーツ刈り',
      },
    },
  },
};

describe('twitter module', () => {
  it('extract page', () => {
    const page = Wikipedia.extractPage(debugJSON.query.pages);
    chai.expect(page).to.be.a('string');
    chai.assert.equal(page, debugJSON.query.pages[54455].extract);
  });
});
