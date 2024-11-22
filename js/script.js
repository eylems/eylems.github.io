// Ürün verileri
const urunler = {
    boya: [
        {
            id: 'b1',
            ad: 'DYO Dyoplast İç Cephe Boyası',
            fiyat: 899.90,
            resim: 'img/boya/ic-cephe2.jpg',
            aciklama: '15L Beyaz Mat İç Cephe Boyası'
        },
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
        }
    ],
    elektrik: [
        {
            id: "e1",
            ad: "Priz",
            aciklama: "Topraklı ikili priz, beyaz",
            fiyat: 85,
            resim: "img/elektrik/priz.jpg"
        },
        {
            id: "e2",
            ad: "Anahtar",
            aciklama: "Tekli anahtar, beyaz",
            fiyat: 45,
            resim: "img/elektrik/anahtar.jpg"
        },
        {
            id: "e3",
            ad: "Kablo",
            aciklama: "3x2.5 NYM kablo, 100m",
            fiyat: 1250,
            resim: "img/elektrik/kablo.jpg"
        },
        {
            id: "e4",
            ad: "Sigorta",
            aciklama: "Otomatik sigorta, 16A",
            fiyat: 95,
            resim: "img/elektrik/sigorta.jpg"
        }
    ],
    tesisat: [
        {
            id: "t1",
            ad: "PPR Boru",
            aciklama: "20mm PPR su borusu, 4m",
            fiyat: 49.99,
            resim: "img/tesisat/ppr.jpg"
        },
        {
            id: "t2",
            ad: "Musluk",
            aciklama: "Banyo bataryası, krom",
            fiyat: 899.99,
            resim: "img/tesisat/musluk.jpg"
        },
        {
            id: "t3",
            ad: "Dirsek",
            aciklama: "20mm PPR 90° dirsek",
            fiyat: 15.99,
            resim: "img/tesisat/dirsek.jpg"
        },
        {
            id: "t4",
            ad: "Vana",
            aciklama: "20mm PPR küresel vana",
            fiyat: 89.99,
            resim: "img/tesisat/vana.jpg"
        }
    ],
    bahce: [
        {
            id: "bh1",
            ad: "Bahçe Hortumu",
            aciklama: "20 metre bahçe hortumu",
            fiyat: 279.99,
            resim: "img/bahce/hortum.jpg"
        },
        {
            id: "bh2",
            ad: "Çim Makası",
            aciklama: "Profesyonel çim makası",
            fiyat: 179.99,
            resim: "img/bahce/makas.jpg"
        },
        {
            id: "bh3",
            ad: "Tırmık",
            aciklama: "Bahçe tırmığı, ahşap saplı",
            fiyat: 119.99,
            resim: "img/bahce/tirmik.jpg"
        },
        {
            id: "bh4",
            ad: "Kürek",
            aciklama: "Bahçe küreği, metal",
            fiyat: 149.99,
            resim: "img/bahce/kurek.jpg"
        }
    ],
    hirdavat: [
        {
            id: "h1",
            ad: "Tornavida Seti",
            aciklama: "6 parça tornavida seti",
            fiyat: 199.99,
            resim: "img/hirdavat/tornavida.jpg"
        },
        {
            id: "h2",
            ad: "Çekiç",
            aciklama: "450gr çekiç, ahşap saplı",
            fiyat: 89.99,
            resim: "img/hirdavat/cekic.jpg"
        },
        {
            id: "h3",
            ad: "Matkap",
            aciklama: "Darbeli matkap, 650W",
            fiyat: 699.99,
            resim: "img/hirdavat/matkap.jpg"
        },
        {
            id: "h4",
            ad: "Pense",
            aciklama: "180mm kombine pense",
            fiyat: 129.99,
            resim: "img/hirdavat/pense.jpg"
        }
    ],
    yapi: [
        {
            id: "y1",
            ad: "Çimento",
            aciklama: "Portland çimento, 42.5R, 50kg",
            fiyat: 159.99,
            resim: "img/yapi/cimento.jpg"
        },
        {
            id: "y2",
            ad: "Tuğla",
            aciklama: "13.5'luk tuğla",
            fiyat: 12.99,
            resim: "img/yapi/tugla.jpg"
        },
        {
            id: "y3",
            ad: "Kum",
            aciklama: "İnce dere kumu, 1 ton",
            fiyat: 399.99,
            resim: "img/yapi/kum.jpg"
        },
        {
            id: "y4",
            ad: "Demir",
            aciklama: "8'lik inşaat demiri, 12m",
            fiyat: 179.99,
            resim: "img/yapi/demir.jpg"
        },
        {
            id: "y5",
            ad: "Sıva",
            aciklama: "Hazır kaba sıva, 40kg",
            fiyat: 89.99,
            resim: "img/yapi/siva.jpg"
        },
        {
            id: "y6",
            ad: "Alçı",
            aciklama: "Saten perdah alçısı, 30kg",
            fiyat: 129.99,
            resim: "img/yapi/alci.jpg"
        }
    ]
};

// Sepet verileri
let sepet = [];

// Sayfa yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
    tumUrunleriGoster();
    sepetGuncelle();

    // Tesisat sekmesi için arka plan kontrolü
    const allTabs = document.querySelectorAll('[data-bs-toggle="tab"]');

    // Tüm sekmelere tıklama olayı ekle
    allTabs.forEach(tab => {
        tab.addEventListener('shown.bs.tab', function(event) {
            // Önceki aktif sekme class'ını kaldır
            document.body.removeAttribute('data-active-tab');
            
            // Yeni sekmenin id'sini al (örn: "tesisat-tab" -> "tesisat")
            const activeTabId = event.target.id.replace('-tab', '');
            document.body.setAttribute('data-active-tab', activeTabId);
        });
    });
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

// Ürün kartı oluşturan fonksiyon
function createProductCard(urun) {
    return `
        <div class="col-6 col-md-3">
            <div class="card product-card">
                <img src="${urun.resim}" class="card-img-top" alt="${urun.ad}">
                <div class="card-body">
                    <h5 class="card-title">${urun.ad}</h5>
                    <p class="card-text">${urun.aciklama}</p>
                    <div class="price-action">
                        <span class="price">${urun.fiyat.toFixed(2)} ₺</span>
                        <button class="btn btn-primary btn-sm sepete-ekle" 
                                data-urun-id="${urun.id}" 
                                data-urun-ad="${urun.ad}" 
                                data-urun-fiyat="${urun.fiyat}">
                            <i class="fas fa-cart-plus"></i>
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

// Ürünleri sayfaya render eden fonksiyon
function renderProducts() {
    // Boya ve Kimyasallar
    const boyaListesi = document.getElementById('boyaListesi');
    if (boyaListesi) {
        boyaListesi.innerHTML = urunler.boya.map(urun => createProductCard(urun)).join('');
    }

    // Hırdavat
    const hirdavatListesi = document.getElementById('hirdavatListesi');
    if (hirdavatListesi) {
        hirdavatListesi.innerHTML = urunler.hirdavat.map(urun => createProductCard(urun)).join('');
    }

    // Elektrik
    const elektrikListesi = document.getElementById('elektrikListesi');
    if (elektrikListesi) {
        elektrikListesi.innerHTML = urunler.elektrik.map(urun => createProductCard(urun)).join('');
    }

    // Tesisat
    const tesisatListesi = document.getElementById('tesisatListesi');
    if (tesisatListesi) {
        tesisatListesi.innerHTML = urunler.tesisat.map(urun => createProductCard(urun)).join('');
    }

    // Bahçe
    const bahceListesi = document.getElementById('bahceListesi');
    if (bahceListesi) {
        bahceListesi.innerHTML = urunler.bahce.map(urun => createProductCard(urun)).join('');
    }

    // Yapı
    const yapiListesi = document.getElementById('yapiListesi');
    if (yapiListesi) {
        yapiListesi.innerHTML = urunler.yapi.map(urun => createProductCard(urun)).join('');
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

// Scroll efekti için navbar kontrolü
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
