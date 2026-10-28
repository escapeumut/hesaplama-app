# UMITCK ERP — Kurumsal Profil, KG/Boy Fiyat, Algoritmik Dilme & Çevrimdışı PWA

Canlı Firebase Uygulaması: **https://hesaplama-umitck.web.app**

## Öne Çıkan Özellikler

1. **Tek Aramada Otomatik Kutu & Boru Bulucu (Omni-Search)**
   - `40x20x1.5`, `20*40*2`, `60,3 boru 2.5`, `114x4`, `50x50x3.5`, `117 bant` veya katalog dışı özel ölçüler (`150x100x4`) tek arama kutusuna yazıldığında hat (`63H` / `140H`), kalıp, et kalınlığı ve bant genişliğini anında otomatik seçer.
2. **Hatasız Algoritmik Ağırlık & Bant Hesaplama**
   - Doğrulanmış **45 Fabrika Kalıbı** (`63 Hat` + `140 Hat`) ve kantar senkronize bant genişlikleri.
   - Ara kalınlıklarda (`1.3`, `1.6`, `1.8`, `2.2`, `2.7`, `3.7 mm` vb.) doğrusal interpolasyon/ekstrapolasyon ile otomatik bant hesabı + **EN 10219-2** köşe radyüslü kesit doğrulaması.
   - Bağ (Colisage), açık boy ve **Hedef Tonaj / 25T Tır Çözücü**.
3. **Çift Yönlü Sıfır Sapmalı Fiyatlandırma (`KG Bazlı` & `BOY Bazlı`)**
   - Hem **1 KG Birim Fiyatı** hem **1 BOY (Adet) Satış Fiyatı** üzerinden yuvarlama kaybı olmadan çift yönlü hesaplama.
   - İskonto %, ayarlanabilir KDV / TVA % (`HT` / `TTC`), çoklu para birimi (`DA`, `₺`, `$`, `€`), WhatsApp (`TR` & `FR/DZ`), Excel (`.xlsx`) ve Kurumsal PDF yazdırma.
4. **Algoritmik Çoklu Dilme & Rulo Optimizasyonu (DP Solver)**
   - Kombinatoryal Dinamik Programlama çözücüsü ile rulo genişliğine (`1000`, `1219`, `1250`, `1380`, `1500 mm`) `%99+` verimli çoklu bant kesim reçetelerini otomatik bulur ve `%100` kütle dengesi kurar.
5. **100% Çevrimdışı (Offline-First) PWA & Dosya Yükleme Kasası**
   - Tüm kütüphaneler (`xlsx.full.min.js`, `firebase-compat`) yerel olarak önbelleğe alınır; internet kesilse bile sahada tam hızda çalışır.
   - `.xlsx`, `.xls`, `.csv`, `.json`, `.pdf`, `.png/.jpg` dosya yükleme, otomatik sipariş/kalıp/dilme tablosu çözümleme ve **IndexedDB Çevrimdışı Dosya Kasası**.
6. **Rol Bazlı Yetki Sistemi (RBAC) & Tam Yönetici Kontrolü + Firebase Canlı Senkronizasyon**
   - **Yönetici (`admin` — Varsayılan PIN: `1234`)**, **Satış (`sales` — PIN: `2222`)**, **Operatör (`operator`)**, **Misafir (`viewer`)** rolleri.
   - Yönetici kurumsal kimlik, yoğunluk, hat sınırları, fiyat/vergi/taban fiyat/gizli maliyet marjı, 45 kalıp CRUD veritabanı ve rol yetki matrisini tek panelden yönetir; tüm değişiklikler `hesaplama-umitck` Firestore bulutuna ve çevrimdışı hafızaya senkronize edilir.
