// Ürün kategorileri ve ürünler
const urunler = {
    elAletleri: [
        {
            id: 'el1',
            ad: 'Stanley Çekiç',
            fiyat: 249.99,
            resim: 'img/el-aletleri/cekic.jpg',
            aciklama: 'Profesyonel çelik çekiç, ergonomik sap'
        },
        {
            id: 'el2',
            ad: 'Bosch Tornavida Seti',
            fiyat: 399.99,
            resim: 'img/el-aletleri/tornavida.jpg',
            aciklama: '12 parça profesyonel tornavida seti'
        },
        {
            id: 'el3',
            ad: 'Knipex Pense',
            fiyat: 299.99,
            resim: 'img/el-aletleri/pense.jpg',
            aciklama: 'Kombine pense, 180mm'
        },
        {
            id: 'el4',
            ad: 'Kerpeten',
            fiyat: 159.99,
            resim: 'img/el-aletleri/kerpeten.jpg',
            aciklama: 'Profesyonel çelik kerpeten'
        },
        {
            id: 'el5',
            ad: 'Stanley Şerit Metre',
            fiyat: 89.99,
            resim: 'img/el-aletleri/metre.jpg',
            aciklama: '5 metre, otomatik geri sarmalı'
        },
        {
            id: 'el6',
            ad: 'El Testeresi',
            fiyat: 179.99,
            resim: 'img/el-aletleri/testere.jpg',
            aciklama: 'Ahşap kesimi için el testeresi'
        },
        {
            id: 'el7',
            ad: 'İskarpela Seti',
            fiyat: 299.99,
            resim: 'img/el-aletleri/iskarpela.jpg',
            aciklama: '6 parça ahşap iskarpela seti'
        },
        {
            id: 'el8',
            ad: 'El Matkabı',
            fiyat: 129.99,
            resim: 'img/el-aletleri/matkap.jpg',
            aciklama: 'Manuel el matkabı'
        },
        {
            id: 'el9',
            ad: 'Eğe Seti',
            fiyat: 199.99,
            resim: 'img/el-aletleri/ege.jpg',
            aciklama: '5 parça metal eğe seti'
        },
        {
            id: 'el10',
            ad: 'Ahşap Törpü',
            fiyat: 69.99,
            resim: 'img/el-aletleri/torpu.jpg',
            aciklama: 'Ahşap işleme törpüsü'
        },
        {
            id: 'el11',
            ad: 'Alyan Takımı',
            fiyat: 149.99,
            resim: 'img/el-aletleri/alyan.jpg',
            aciklama: '9 parça alyan anahtarı seti'
        },
        {
            id: 'el12',
            ad: 'Lokma Takımı',
            fiyat: 449.99,
            resim: 'img/el-aletleri/lokma.jpg',
            aciklama: '40 parça lokma anahtar seti'
        },
        {
            id: 'el13',
            ad: 'Kargaburun',
            fiyat: 129.99,
            resim: 'img/el-aletleri/kargaburun.jpg',
            aciklama: 'Uzun ağızlı kargaburun pense'
        },
        {
            id: 'el14',
            ad: 'Yan Keski',
            fiyat: 139.99,
            resim: 'img/el-aletleri/yankeski.jpg',
            aciklama: 'Profesyonel yan keski'
        },
        {
            id: 'el15',
            ad: 'Su Terazisi',
            fiyat: 89.99,
            resim: 'img/el-aletleri/terazi.jpg',
            aciklama: '60cm su terazisi'
        },
        {
            id: 'el16',
            ad: 'Gönye',
            fiyat: 79.99,
            resim: 'img/el-aletleri/gonye.jpg',
            aciklama: 'Metal gönye, 30cm'
        },
        {
            id: 'el17',
            ad: 'Çizecek',
            fiyat: 29.99,
            resim: 'img/el-aletleri/cizecek.jpg',
            aciklama: 'Metal çizecek kalem'
        },
        {
            id: 'el18',
            ad: 'Zımba Tabancası',
            fiyat: 159.99,
            resim: 'img/el-aletleri/zimba.jpg',
            aciklama: 'Manuel zımba tabancası'
        },
        {
            id: 'el19',
            ad: 'Maket Bıçağı',
            fiyat: 39.99,
            resim: 'img/el-aletleri/maket.jpg',
            aciklama: 'Profesyonel maket bıçağı'
        },
        {
            id: 'el20',
            ad: 'Spatula Seti',
            fiyat: 89.99,
            resim: 'img/el-aletleri/spatula.jpg',
            aciklama: '4 parça spatula seti'
        },
        {
            id: 'el21',
            ad: 'Mengene',
            fiyat: 399.99,
            resim: 'img/el-aletleri/mengene.jpg',
            aciklama: '125mm tezgah mengenesi'
        },
        {
            id: 'el22',
            ad: 'İşkence',
            fiyat: 129.99,
            resim: 'img/el-aletleri/iskence.jpg',
            aciklama: '60cm F tipi işkence'
        },
        {
            id: 'el23',
            ad: 'Perçin Tabancası',
            fiyat: 199.99,
            resim: 'img/el-aletleri/percin.jpg',
            aciklama: 'Manuel perçin tabancası'
        },
        {
            id: 'el24',
            ad: 'Tel Fırça',
            fiyat: 29.99,
            resim: 'img/el-aletleri/telfirca.jpg',
            aciklama: 'Çelik tel fırça'
        },
        {
            id: 'el25',
            ad: 'Raspa',
            fiyat: 49.99,
            resim: 'img/el-aletleri/raspa.jpg',
            aciklama: 'Metal raspa, 250mm'
        }
    ],
    hirdavat: [
        {
            id: 'h1',
            ad: 'Civata Seti M8',
            fiyat: 89.99,
            resim: 'img/hirdavat/civata.jpg',
            aciklama: '100 adet galvanizli civata'
        },
        {
            id: 'h2',
            ad: 'Dübel Seti',
            fiyat: 45.99,
            resim: 'img/hirdavat/dubel.jpg',
            aciklama: 'Çok amaçlı plastik dübel seti'
        },
        {
            id: 'h3',
            ad: 'Vida Seti',
            fiyat: 69.99,
            resim: 'img/hirdavat/vida.jpg',
            aciklama: '500 adet karışık vida'
        },
        {
            id: 'h4',
            ad: 'Menteşe',
            fiyat: 29.99,
            resim: 'img/hirdavat/mentese.jpg',
            aciklama: 'Paslanmaz çelik menteşe'
        },
        {
            id: 'h5',
            ad: 'Kilit',
            fiyat: 149.99,
            resim: 'img/hirdavat/kilit.jpg',
            aciklama: 'Silindir kapı kilidi'
        },
        {
            id: 'h6',
            ad: 'Çekmece Rayı',
            fiyat: 79.99,
            resim: 'img/hirdavat/ray.jpg',
            aciklama: '45cm çekmece rayı'
        },
        {
            id: 'h7',
            ad: 'Mobilya Kulpu',
            fiyat: 19.99,
            resim: 'img/hirdavat/kulp.jpg',
            aciklama: 'Modern tasarım kulp'
        },
        {
            id: 'h8',
            ad: 'Zincir',
            fiyat: 129.99,
            resim: 'img/hirdavat/zincir.jpg',
            aciklama: '5 metre galvanizli zincir'
        },
        {
            id: 'h9',
            ad: 'Bağlantı Halkası',
            fiyat: 9.99,
            resim: 'img/hirdavat/halka.jpg',
            aciklama: '10 adet metal halka'
        },
        {
            id: 'h10',
            ad: 'Somun Seti',
            fiyat: 49.99,
            resim: 'img/hirdavat/somun.jpg',
            aciklama: '100 adet karışık somun'
        },
        {
            id: 'h11',
            ad: 'Cıvata-Somun Seti',
            fiyat: 199.99,
            resim: 'img/hirdavat/civata-somun.jpg',
            aciklama: '500 parça karışık set'
        },
        {
            id: 'h12',
            ad: 'Kapı Stoperi',
            fiyat: 39.99,
            resim: 'img/hirdavat/stoper.jpg',
            aciklama: 'Manyetik kapı stoperi'
        },
        {
            id: 'h13',
            ad: 'Dolap Kilidi',
            fiyat: 59.99,
            resim: 'img/hirdavat/dolap-kilidi.jpg',
            aciklama: 'Çekmece ve dolap kilidi'
        },
        {
            id: 'h14',
            ad: 'Askılık',
            fiyat: 29.99,
            resim: 'img/hirdavat/askilik.jpg',
            aciklama: 'Metal duvar askılığı'
        },
        {
            id: 'h15',
            ad: 'Tekerlekler',
            fiyat: 89.99,
            resim: 'img/hirdavat/tekerlek.jpg',
            aciklama: '4lü mobilya tekerleği seti'
        },
        {
            id: 'h16',
            ad: 'Köşe Bağlantı',
            fiyat: 14.99,
            resim: 'img/hirdavat/kose.jpg',
            aciklama: 'Metal köşe bağlantı elemanı'
        },
        {
            id: 'h17',
            ad: 'Mobilya Ayağı',
            fiyat: 39.99,
            resim: 'img/hirdavat/ayak.jpg',
            aciklama: '10cm metal mobilya ayağı'
        },
        {
            id: 'h18',
            ad: 'Kapı Kolu',
            fiyat: 129.99,
            resim: 'img/hirdavat/kapi-kolu.jpg',
            aciklama: 'Modern tasarım kapı kolu'
        },
        {
            id: 'h19',
            ad: 'Mandal',
            fiyat: 19.99,
            resim: 'img/hirdavat/mandal.jpg',
            aciklama: '10lu metal mandal seti'
        },
        {
            id: 'h20',
            ad: 'Pul Seti',
            fiyat: 29.99,
            resim: 'img/hirdavat/pul.jpg',
            aciklama: '200 adet karışık pul'
        },
        {
            id: 'h21',
            ad: 'Çektirme',
            fiyat: 299.99,
            resim: 'img/hirdavat/cektirme.jpg',
            aciklama: 'Profesyonel rulman çektirme'
        },
        {
            id: 'h22',
            ad: 'Kilit Karşılığı',
            fiyat: 24.99,
            resim: 'img/hirdavat/kilit-karsiligi.jpg',
            aciklama: 'Metal kilit karşılığı'
        },
        {
            id: 'h23',
            ad: 'Sürgü',
            fiyat: 49.99,
            resim: 'img/hirdavat/surgu.jpg',
            aciklama: 'Metal kapı sürgüsü'
        },
        {
            id: 'h24',
            ad: 'Conta Seti',
            fiyat: 34.99,
            resim: 'img/hirdavat/conta.jpg',
            aciklama: '100 adet kauçuk conta'
        },
        {
            id: 'h25',
            ad: 'Kelepçe',
            fiyat: 19.99,
            resim: 'img/hirdavat/kelepce.jpg',
            aciklama: '10lu metal kelepçe seti'
        }
    ],
    elektrik: [
        {
            id: 'e1',
            ad: 'LED Ampul',
            fiyat: 29.99,
            resim: 'img/elektrik/ampul.jpg',
            aciklama: '9W Beyaz LED Ampul'
        },
        {
            id: 'e2',
            ad: 'Priz Kasası',
            fiyat: 12.99,
            resim: 'img/elektrik/priz.jpg',
            aciklama: 'Sıva altı priz kasası'
        },
        {
            id: 'e3',
            ad: 'NYM Kablo',
            fiyat: 299.99,
            resim: 'img/elektrik/kablo.jpg',
            aciklama: '100 metre 3x2.5 NYM kablo'
        },
        {
            id: 'e4',
            ad: 'Anahtar',
            fiyat: 24.99,
            resim: 'img/elektrik/anahtar.jpg',
            aciklama: 'Tekli elektrik anahtarı'
        },
        {
            id: 'e5',
            ad: 'Sigorta',
            fiyat: 39.99,
            resim: 'img/elektrik/sigorta.jpg',
            aciklama: '16A Otomatik sigorta'
        },
        {
            id: 'e6',
            ad: 'Klemens',
            fiyat: 9.99,
            resim: 'img/elektrik/klemens.jpg',
            aciklama: '12li klemens seti'
        },
        {
            id: 'e7',
            ad: 'Kablo Kanalı',
            fiyat: 34.99,
            resim: 'img/elektrik/kanal.jpg',
            aciklama: '2 metre plastik kanal'
        },
        {
            id: 'e8',
            ad: 'Buat',
            fiyat: 14.99,
            resim: 'img/elektrik/buat.jpg',
            aciklama: 'Sıva altı buat'
        },
        {
            id: 'e9',
            ad: 'Regülatör',
            fiyat: 599.99,
            resim: 'img/elektrik/regulator.jpg',
            aciklama: '5000VA Voltaj regülatörü'
        },
        {
            id: 'e10',
            ad: 'Trafo',
            fiyat: 149.99,
            resim: 'img/elektrik/trafo.jpg',
            aciklama: '220V-12V 100W trafo'
        },
        {
            id: 'e11',
            ad: 'Grup Priz',
            fiyat: 79.99,
            resim: 'img/elektrik/grup-priz.jpg',
            aciklama: '6lı akım korumalı priz'
        },
        {
            id: 'e12',
            ad: 'TTR Kablo',
            fiyat: 199.99,
            resim: 'img/elektrik/ttr.jpg',
            aciklama: '50 metre 3x1.5 TTR kablo'
        },
        {
            id: 'e13',
            ad: 'Spot Lamba',
            fiyat: 44.99,
            resim: 'img/elektrik/spot.jpg',
            aciklama: 'LED spot lamba'
        },
        {
            id: 'e14',
            ad: 'Şalter',
            fiyat: 129.99,
            resim: 'img/elektrik/salter.jpg',
            aciklama: '40A Trifaze şalter'
        },
        {
            id: 'e15',
            ad: 'İzole Bant',
            fiyat: 9.99,
            resim: 'img/elektrik/izole.jpg',
            aciklama: '10 metre izole bant'
        },
        {
            id: 'e16',
            ad: 'Kaçak Akım Rölesi',
            fiyat: 189.99,
            resim: 'img/elektrik/role.jpg',
            aciklama: '40A 30mA kaçak akım rölesi'
        },
        {
            id: 'e17',
            ad: 'Sensör',
            fiyat: 89.99,
            resim: 'img/elektrik/sensor.jpg',
            aciklama: 'Hareket sensörü'
        },
        {
            id: 'e18',
            ad: 'Dimmer Anahtar',
            fiyat: 69.99,
            resim: 'img/elektrik/dimmer.jpg',
            aciklama: 'LED uyumlu dimmer'
        },
        {
            id: 'e19',
            ad: 'Zil',
            fiyat: 49.99,
            resim: 'img/elektrik/zil.jpg',
            aciklama: 'Kablosuz kapı zili'
        },
        {
            id: 'e20',
            ad: 'Kablo Pabucu',
            fiyat: 19.99,
            resim: 'img/elektrik/pabuc.jpg',
            aciklama: '100lü kablo pabucu seti'
        },
        {
            id: 'e21',
            ad: 'Projektör',
            fiyat: 249.99,
            resim: 'img/elektrik/projektor.jpg',
            aciklama: '50W LED projektör'
        },
        {
            id: 'e22',
            ad: 'Topraklama Çubuğu',
            fiyat: 79.99,
            resim: 'img/elektrik/topraklama.jpg',
            aciklama: '1 metre bakır topraklama çubuğu'
        },
        {
            id: 'e23',
            ad: 'Kablo Makası',
            fiyat: 159.99,
            resim: 'img/elektrik/makas.jpg',
            aciklama: 'Profesyonel kablo makası'
        },
        {
            id: 'e24',
            ad: 'Termostat',
            fiyat: 119.99,
            resim: 'img/elektrik/termostat.jpg',
            aciklama: 'Dijital termostat'
        },
        {
            id: 'e25',
            ad: 'Akım Ölçer',
            fiyat: 299.99,
            resim: 'img/elektrik/amper.jpg',
            aciklama: 'Dijital pens ampermetre'
        }
    ],
    boya: [
        {
            id: 'b2',
            ad: 'DYO Teknotex Dış Cephe Boyası',
            fiyat: 1299.90,
            resim: 'img/boya/dis-cephe.jpg',
            aciklama: '15L Beyaz Mat Dış Cephe Boyası'
        },
        {
            id: 'b3',
            ad: 'DYO Sentetik Tiner',
            fiyat: 229.90,
            resim: 'img/boya/tiner.jpg',
            aciklama: '3L Sentetik Tiner'
        },
        {
            id: 'b4',
            ad: 'DYO Antipas',
            fiyat: 319.90,
            resim: 'img/boya/antipas.jpg',
            aciklama: '2.5L Gri Antipas'
        },
        {
            id: 'b5',
            ad: 'DYO Dyosel Sentetik Boya',
            fiyat: 459.90,
            resim: 'img/boya/yagli.jpg',
            aciklama: '2.5L Beyaz Parlak'
        },
        {
            id: 'b6',
            ad: 'Marshall Astar',
            fiyat: 399.90,
            resim: 'img/boya/astar.jpg',
            aciklama: '10L İç Cephe Astarı'
        },
        {
            id: 'b7',
            ad: 'Marshall Silikon',
            fiyat: 129.90,
            resim: 'img/boya/silikon.jpg',
            aciklama: '310ml Şeffaf Silikon'
        },
        {
            id: 'b8',
            ad: 'Marshall Epoksi',
            fiyat: 549.90,
            resim: 'img/boya/epoksi.jpg',
            aciklama: '1kg İki Bileşenli Epoksi'
        },
        {
            id: 'b9',
            ad: 'Marshall Sprey Boya',
            fiyat: 89.90,
            resim: 'img/boya/sprey.jpg',
            aciklama: '400ml RAL9005 Siyah'
        },
        {
            id: 'b10',
            ad: 'Marshall Macun',
            fiyat: 189.90,
            resim: 'img/boya/macun.jpg',
            aciklama: '5kg İç Cephe Macunu'
        },
        {
            id: 'b11',
            ad: 'Marshall Vernik',
            fiyat: 299.90,
            resim: 'img/boya/vernik.jpg',
            aciklama: '2.5L Ahşap Vernik'
        },
        {
            id: 'b12',
            ad: 'Akfix Montaj Yapıştırıcısı',
            fiyat: 89.90,
            resim: 'img/boya/yapiskan.jpg',
            aciklama: '500g Montaj Yapıştırıcısı'
        },
        {
            id: 'b13',
            ad: 'Akfix Pas Sökücü',
            fiyat: 69.90,
            resim: 'img/boya/pas.jpg',
            aciklama: '400ml Sprey'
        },
        {
            id: 'b14',
            ad: 'Akfix Alçı',
            fiyat: 129.90,
            resim: 'img/boya/alci.jpg',
            aciklama: '10kg Saten Alçı'
        },
        {
            id: 'b15',
            ad: 'Akfix Mastik',
            fiyat: 79.90,
            resim: 'img/boya/mastik.jpg',
            aciklama: '310ml Akrilik Mastik'
        },
        {
            id: 'b1',
            ad: 'DYO Dyoplast İç Cephe Boyası',
            fiyat: 0,
            resim: 'img/boya/ic-cephe.jpg',
            aciklama: '15L Beyaz Mat İç Cephe Boyası'
        }
    ],
    tesisat: [
        {
            id: 't1',
            ad: 'PPR Boru',
            fiyat: 49.99,
            resim: 'img/tesisat/ppr.jpg',
            aciklama: '4m 20mm PPR Boru'
        },
        {
            id: 't2',
            ad: 'Musluk',
            fiyat: 159.99,
            resim: 'img/tesisat/musluk.jpg',
            aciklama: 'Lavabo Bataryası'
        },
        {
            id: 't3',
            ad: 'Dirsek',
            fiyat: 9.99,
            resim: 'img/tesisat/dirsek.jpg',
            aciklama: '20mm PPR Dirsek'
        },
        {
            id: 't4',
            ad: 'Vana',
            fiyat: 79.99,
            resim: 'img/tesisat/vana.jpg',
            aciklama: '1 inch Küresel Vana'
        },
        {
            id: 't5',
            ad: 'Sifon',
            fiyat: 39.99,
            resim: 'img/tesisat/sifon.jpg',
            aciklama: 'Lavabo Sifonu'
        },
        {
            id: 't6',
            ad: 'Pis Su Borusu',
            fiyat: 89.99,
            resim: 'img/tesisat/pissu.jpg',
            aciklama: '3m 100mm PVC Boru'
        },
        {
            id: 't7',
            ad: 'Uzatma',
            fiyat: 29.99,
            resim: 'img/tesisat/uzatma.jpg',
            aciklama: '50cm Spiral Uzatma'
        },
        {
            id: 't8',
            ad: 'Redüksiyon',
            fiyat: 14.99,
            resim: 'img/tesisat/reduksiyon.jpg',
            aciklama: '25-20mm PPR Redüksiyon'
        },
        {
            id: 't9',
            ad: 'Kelepçe',
            fiyat: 4.99,
            resim: 'img/tesisat/kelepce.jpg',
            aciklama: '20mm Boru Kelepçesi'
        },
        {
            id: 't10',
            ad: 'Te',
            fiyat: 12.99,
            resim: 'img/tesisat/te.jpg',
            aciklama: '20mm PPR Te'
        },
        {
            id: 't11',
            ad: 'Manşon',
            fiyat: 8.99,
            resim: 'img/tesisat/manson.jpg',
            aciklama: '20mm PPR Manşon'
        },
        {
            id: 't12',
            ad: 'Nipel',
            fiyat: 19.99,
            resim: 'img/tesisat/nipel.jpg',
            aciklama: '1/2 inch Nipel'
        },
        {
            id: 't13',
            ad: 'Duş Başlığı',
            fiyat: 129.99,
            resim: 'img/tesisat/dus.jpg',
            aciklama: 'Yağmurlama Duş Başlığı'
        },
        {
            id: 't14',
            ad: 'Rezervuar',
            fiyat: 249.99,
            resim: 'img/tesisat/rezervuar.jpg',
            aciklama: 'Asma Klozet Rezervuarı'
        },
        {
            id: 't15',
            ad: 'Conta Seti',
            fiyat: 24.99,
            resim: 'img/tesisat/conta.jpg',
            aciklama: '100lü Conta Seti'
        }
    ],
    bahce: [
        {
            id: 'bh1',
            ad: 'Çim Biçme Makinesi',
            fiyat: 2499.99,
            resim: 'img/bahce/cim.jpg',
            aciklama: 'Elektrikli Çim Biçme Makinesi'
        },
        {
            id: 'bh2',
            ad: 'Bahçe Hortumu',
            fiyat: 149.99,
            resim: 'img/bahce/hortum.jpg',
            aciklama: '30m Spiral Hortum'
        },
        {
            id: 'bh3',
            ad: 'Budama Makası',
            fiyat: 89.99,
            resim: 'img/bahce/budama.jpg',
            aciklama: 'Profesyonel Budama Makası'
        },
        {
            id: 'bh4',
            ad: 'Kürek',
            fiyat: 79.99,
            resim: 'img/bahce/kurek.jpg',
            aciklama: 'Saplı Bahçe Küreği'
        },
        {
            id: 'bh5',
            ad: 'Tırmık',
            fiyat: 69.99,
            resim: 'img/bahce/tirmik.jpg',
            aciklama: 'Metal Bahçe Tırmığı'
        },
        {
            id: 'bh6',
            ad: 'Çapa',
            fiyat: 59.99,
            resim: 'img/bahce/capa.jpg',
            aciklama: 'El Çapası'
        },
        {
            id: 'bh7',
            ad: 'Sulama Tabancası',
            fiyat: 44.99,
            resim: 'img/bahce/tabanca.jpg',
            aciklama: 'Ayarlanabilir Sulama Tabancası'
        },
        {
            id: 'bh8',
            ad: 'Çit Makası',
            fiyat: 199.99,
            resim: 'img/bahce/cit.jpg',
            aciklama: 'Elektrikli Çit Budama Makası'
        },
        {
            id: 'bh9',
            ad: 'Saksı',
            fiyat: 29.99,
            resim: 'img/bahce/saksi.jpg',
            aciklama: '5L Plastik Saksı'
        },
        {
            id: 'bh10',
            ad: 'Fıskiye',
            fiyat: 34.99,
            resim: 'img/bahce/fiskiye.jpg',
            aciklama: '360° Döner Fıskiye'
        },
        {
            id: 'bh11',
            ad: 'Çim Tohumu',
            fiyat: 119.99,
            resim: 'img/bahce/tohum.jpg',
            aciklama: '1kg Çim Tohumu'
        },
        {
            id: 'bh12',
            ad: 'Gübre',
            fiyat: 89.99,
            resim: 'img/bahce/gubre.jpg',
            aciklama: '5kg Organik Gübre'
        },
        {
            id: 'bh13',
            ad: 'Eldiven',
            fiyat: 24.99,
            resim: 'img/bahce/eldiven.jpg',
            aciklama: 'Bahçe Eldiveni'
        },
        {
            id: 'bh14',
            ad: 'Testere',
            fiyat: 79.99,
            resim: 'img/bahce/testere.jpg',
            aciklama: 'Dal Budama Testeresi'
        },
        {
            id: 'bh15',
            ad: 'Çim Çiti',
            fiyat: 49.99,
            resim: 'img/bahce/cit-cerceve.jpg',
            aciklama: '3m Plastik Çim Çiti'
        }
    ]
};

// Sepet verileri
let sepet = [];

// Sayfa yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', () => {
    tumUrunleriGoster();
    sepetGuncelle();
});

// Tüm ürünleri kategorilere göre gösteren fonksiyon
function tumUrunleriGoster() {
    // Her kategori için ürünleri göster
    Object.keys(urunler).forEach(kategori => {
        const liste = document.getElementById(`${kategori}Listesi`);
        if (liste) {
            liste.innerHTML = '';
            urunler[kategori].forEach(urun => {
                liste.innerHTML += createProductCard(urun);
            });
        }
    });
}

// Ürün kartı HTML'i oluşturan fonksiyon
function createProductCard(product) {
    const price = product.fiyat === 0 ? '' : `${product.fiyat.toLocaleString('tr-TR')} ₺`;
    if (price === '') return '';
    
    return `
        <div class="col-md-4 col-lg-3 mb-4">
            <div class="product-card">
                <img src="${product.resim}" alt="${product.ad}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${product.ad}</h5>
                    <p class="card-text">${product.aciklama || ''}</p>
                    <div class="price-action">
                        <div class="price">${price}</div>
                        <button class="btn btn-primary" onclick="sepeteEkle('${product.id}')">
                            Sepete Ekle
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Sepete ürün ekleme fonksiyonu
function sepeteEkle(urunId) {
    const urun = Object.values(urunler).flat().find(u => u.id === urunId);
    const sepetUrunu = sepet.find(u => u.id === urunId);
    
    if (sepetUrunu) {
        sepetUrunu.adet += 1;
    } else {
        sepet.push({
            ...urun,
            adet: 1
        });
    }
    
    sepetGuncelle();
}

// Sepetten ürün çıkarma fonksiyonu
function sepettenCikar(urunId) {
    sepet = sepet.filter(urun => urun.id !== urunId);
    sepetGuncelle();
}

// Sepeti güncelleme fonksiyonu
function sepetGuncelle() {
    const sepetUrunleri = document.getElementById('sepetUrunleri');
    let toplamTutar = 0;
    
    sepetUrunleri.innerHTML = '';
    
    sepet.forEach(urun => {
        const tutar = urun.fiyat * urun.adet;
        toplamTutar += tutar;
        
        const urunHTML = `
            <div class="sepet-urun">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h6>${urun.ad}</h6>
                        <small>${urun.adet} adet x ${urun.fiyat} TL</small>
                    </div>
                    <div>
                        <span class="me-3">${tutar} TL</span>
                        <button class="btn btn-sm btn-danger" onclick="sepettenCikar('${urun.id}')">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        sepetUrunleri.innerHTML += urunHTML;
    });
    
    if (sepet.length === 0) {
        sepetUrunleri.innerHTML = '<p class="text-center">Sepetiniz boş</p>';
    } else {
        sepetUrunleri.innerHTML += `
            <div class="mt-3 pt-3 border-top">
                <h5 class="text-end">Toplam: ${toplamTutar} TL</h5>
            </div>
        `;
    }
}

// Sipariş verme fonksiyonu
document.getElementById('siparisVer').addEventListener('click', () => {
    if (sepet.length === 0) {
        alert('Sepetiniz boş!');
        return;
    }
    
    // Burada sipariş işlemleri yapılacak
    alert('Siparişiniz alındı! Teşekkür ederiz.');
    sepet = [];
    sepetGuncelle();
    
    // Modal'ı kapat
    const sepetModal = bootstrap.Modal.getInstance(document.getElementById('sepetModal'));
    sepetModal.hide();
});

// İletişim formu gönderimi
document.getElementById('iletisimFormu').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mesajınız alındı! En kısa sürede size dönüş yapacağız.');
    e.target.reset();
});
