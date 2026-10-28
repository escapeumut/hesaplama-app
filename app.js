/* ==========================================================================
   UMITCK ERP v5.0 — Kurumsal Profil, KG/Boy Fiyat, Algoritmik Dilme & PWA
   100% Çevrimdışı (Offline-First), Tek Aramada Otomatik Seçim, Rol Bazlı Yönetim
   ========================================================================== */

'use strict';

// ==================== 1. DOĞRULANMIŞ 45 FABRİKA KALIP VERİTABANI ====================
const DEFAULT_MOLDS = [
  // --- 63 HAT (21Ø – 63Ø) ---
  { id: '63_21_B', line: '63', kalip: '21Ø', type: 'Boru', shape: 'pipe', label: 'Ø21 Boru', aliases: '21.3 1/2 yarim parmak', a: 21, b: 0, defaultBag: 127, note: '', strips: { '0.8': 67, '1': 66, '1.5': 66 } },
  { id: '63_25_B', line: '63', kalip: '25Ø', type: 'Boru', shape: 'pipe', label: 'Ø25 Boru', aliases: '25 boru', a: 25, b: 0, defaultBag: 91, note: '', strips: { '0.8': 80, '1': 79.5, '1.5': 79, '2': 78.5 } },
  { id: '63_25_K_20x20', line: '63', kalip: '25Ø', type: 'Kutu', shape: 'square', label: '20x20', aliases: '20 kare 20*20', a: 20, b: 20, defaultBag: 100, note: '', strips: { '0.8': 80, '1': 79, '1.5': 78.5, '2': 78 } },
  { id: '63_269_B', line: '63', kalip: '26,9Ø', type: 'Boru', shape: 'pipe', label: 'Ø26,9 Boru', aliases: '26.9 27 3/4 uc ceyrek parmak', a: 26.9, b: 0, defaultBag: 91, note: '', strips: { '0.8': 85, '1': 84, '1.5': 84, '2': 83 } },
  { id: '63_32_B', line: '63', kalip: '32Ø', type: 'Boru', shape: 'pipe', label: 'Ø32 Boru', aliases: '32 boru', a: 32, b: 0, defaultBag: 61, note: '', strips: { '0.8': 100, '1': 99, '1.5': 99, '2': 98, '2.5': 97 } },
  { id: '63_32_K_25x25', line: '63', kalip: '32Ø', type: 'Kutu', shape: 'square', label: '25x25', aliases: '25 kare 25*25', a: 25, b: 25, defaultBag: 64, note: '', strips: { '0.8': 99, '1': 98.5, '1.5': 98, '2': 97.5, '2.5': 97 } },
  { id: '63_337_B', line: '63', kalip: '33,7Ø', type: 'Boru', shape: 'pipe', label: 'Ø33,7 Boru', aliases: '33.7 34 1 parmak 1"', a: 33.7, b: 0, defaultBag: 61, note: '', strips: { '0.8': 106, '1': 105, '1.5': 104, '2': 104, '2.5': 103 } },
  { id: '63_38_B', line: '63', kalip: '38Ø', type: 'Boru', shape: 'pipe', label: 'Ø38 Boru', aliases: '38 boru', a: 38, b: 0, defaultBag: 61, note: '', strips: { '0.8': 120, '1': 119, '1.5': 118, '2': 117, '2.5': 116 } },
  { id: '63_38_K_30x30', line: '63', kalip: '38Ø', type: 'Kutu', shape: 'square', label: '30x30', aliases: '30 kare 30*30', a: 30, b: 30, defaultBag: 64, note: '', strips: { '0.8': 119, '1': 118, '1.5': 117, '2': 116, '2.5': 115 } },
  { id: '63_38_K_40x20', line: '63', kalip: '38Ø', type: 'Kutu', shape: 'box', label: '40x20', aliases: '20x40 40*20', a: 40, b: 20, defaultBag: 60, note: '', strips: { '0.8': 119, '1': 118, '1.5': 117, '2': 116, '2.5': 115 } },
  { id: '63_42_B', line: '63', kalip: '42Ø', type: 'Boru', shape: 'pipe', label: 'Ø42 Boru', aliases: '42.4 42 1 1/4 bir ceyrek', a: 42, b: 0, defaultBag: 37, note: '', strips: { '0.8': 133, '1': 132, '1.5': 131, '2': 130, '2.5': 129 } },
  { id: '63_42_K_40x27', line: '63', kalip: '42Ø', type: 'Kutu', shape: 'box', label: '40x27', aliases: '27x40 40*27', a: 40, b: 27, defaultBag: 48, note: '42Ø kalıp modifiye ediliyor (42Ø referans bant)', strips: { '0.8': 133, '1': 132, '1.5': 131, '2': 130, '2.5': 129 } },
  { id: '63_45_B', line: '63', kalip: '45Ø', type: 'Boru', shape: 'pipe', label: 'Ø45 Boru', aliases: '45 boru', a: 45, b: 0, defaultBag: 37, note: '', strips: { '0.8': 142, '1': 141, '1.5': 140, '2': 139, '2.5': 138, '3': 138 } },
  { id: '63_45_K_40x30', line: '63', kalip: '45Ø', type: 'Kutu', shape: 'box', label: '40x30', aliases: '30x40 40*30', a: 40, b: 30, defaultBag: 48, note: '', strips: { '0.8': 141.5, '1': 141, '1.5': 139.5, '2': 139, '2.5': 138.5, '3': 138 } },
  { id: '63_45_K_35x35', line: '63', kalip: '45Ø', type: 'Kutu', shape: 'square', label: '35x35', aliases: '35 kare 35*35', a: 35, b: 35, defaultBag: 49, note: '', strips: { '0.8': 141.5, '1': 141, '1.5': 139.5, '2': 139, '2.5': 138.5, '3': 138 } },
  { id: '63_483_B', line: '63', kalip: '48,3Ø', type: 'Boru', shape: 'pipe', label: 'Ø48,3 Boru', aliases: '48.3 48 1 1/2 bir bucuk parmak', a: 48.3, b: 0, defaultBag: 37, note: '', strips: { '0.8': 152, '1': 151, '1.5': 150, '2': 149, '2.5': 148 } },
  { id: '63_51_B', line: '63', kalip: '51Ø', type: 'Boru', shape: 'pipe', label: 'Ø51 Boru', aliases: '51 boru', a: 51, b: 0, defaultBag: 37, note: '', strips: { '0.8': 160, '1': 159, '1.5': 158, '2': 157, '2.5': 156, '3': 155 } },
  { id: '63_51_K_40x40', line: '63', kalip: '51Ø', type: 'Kutu', shape: 'square', label: '40x40', aliases: '40 kare 40*40', a: 40, b: 40, defaultBag: 36, note: '', strips: { '0.8': 159, '1': 158, '1.5': 157, '2': 156, '2.5': 155, '3': 154 } },
  { id: '63_51_K_50x30', line: '63', kalip: '51Ø', type: 'Kutu', shape: 'box', label: '50x30', aliases: '30x50 50*30', a: 50, b: 30, defaultBag: 36, note: '', strips: { '0.8': 159, '1': 158, '1.5': 157, '2': 156, '2.5': 155, '3': 154 } },
  { id: '63_57_B', line: '63', kalip: '57Ø', type: 'Boru', shape: 'pipe', label: 'Ø57 Boru', aliases: '57 boru', a: 57, b: 0, defaultBag: 37, note: 'Yeni kalıp • Defter referans bant: 178 mm', strips: { '1': 179, '1.5': 178, '2': 177, '2.5': 176, '3': 175 } },
  { id: '63_603_B', line: '63', kalip: '60,3Ø', type: 'Boru', shape: 'pipe', label: 'Ø60,3 Boru', aliases: '60.3 60 2 parmak 2"', a: 60.3, b: 0, defaultBag: 37, note: '', strips: { '1': 189, '1.5': 188, '2': 187, '2.5': 186, '3': 185, '3.5': 184 } },
  { id: '63_63_B', line: '63', kalip: '63Ø', type: 'Boru', shape: 'pipe', label: 'Ø63 Boru (63H)', aliases: '63 boru', a: 63, b: 0, defaultBag: 37, note: '', strips: { '1.5': 197, '2': 196, '2.5': 195, '3': 194, '3.5': 193, '4': 192 } },
  { id: '63_63_K_50x50', line: '63', kalip: '63Ø', type: 'Kutu', shape: 'square', label: '50x50 (63H)', aliases: '50 kare 50*50', a: 50, b: 50, defaultBag: 25, note: '', strips: { '1.5': 197, '2': 196, '2.5': 195, '3': 194, '3.5': 193, '4': 192 } },
  { id: '63_63_K_60x40', line: '63', kalip: '63Ø', type: 'Kutu', shape: 'box', label: '60x40 (63H)', aliases: '40x60 60*40', a: 60, b: 40, defaultBag: 24, note: '', strips: { '1.5': 197, '2': 196, '2.5': 195, '3': 194, '3.5': 193, '4': 192 } },

  // --- 140 HAT (63Ø – 139,7Ø) ---
  { id: '140_63_B', line: '140', kalip: '63Ø', type: 'Boru', shape: 'pipe', label: 'Ø63 Boru (140H)', aliases: '63 boru 140h', a: 63, b: 0, defaultBag: 37, note: '', strips: { '1.5': 197, '2': 196, '2.5': 195, '3': 194, '3.5': 193, '4': 192 } },
  { id: '140_63_K_50x50', line: '140', kalip: '63Ø', type: 'Kutu', shape: 'square', label: '50x50 (140H)', aliases: '50 kare 50*50 140h', a: 50, b: 50, defaultBag: 25, note: '', strips: { '1.5': 197, '2': 196, '2.5': 195, '3': 194, '3.5': 193, '4': 192 } },
  { id: '140_63_K_60x40', line: '140', kalip: '63Ø', type: 'Kutu', shape: 'box', label: '60x40 (140H)', aliases: '40x60 60*40 140h', a: 60, b: 40, defaultBag: 24, note: '', strips: { '1.5': 197, '2': 196, '2.5': 195, '3': 194, '3.5': 193, '4': 192 } },
  { id: '140_761_B', line: '140', kalip: '76,1Ø', type: 'Boru', shape: 'pipe', label: 'Ø76,1 Boru', aliases: '76.1 76 2 1/2 iki bucuk parmak', a: 76.1, b: 0, defaultBag: 19, note: '', strips: { '1.5': 239, '2': 238, '2.5': 237, '3': 236, '3.5': 235, '4': 234, '4.5': 233, '5': 232 } },
  { id: '140_761_K_60x60', line: '140', kalip: '76,1Ø', type: 'Kutu', shape: 'square', label: '60x60', aliases: '60 kare 60*60', a: 60, b: 60, defaultBag: 20, note: '', strips: { '1.5': 238, '2': 237, '2.5': 236, '3': 235, '3.5': 234, '4': 233, '4.5': 232, '5': 231 } },
  { id: '140_761_K_80x40', line: '140', kalip: '76,1Ø', type: 'Kutu', shape: 'box', label: '80x40', aliases: '40x80 80*40', a: 80, b: 40, defaultBag: 20, note: '', strips: { '1.5': 238, '2': 237, '2.5': 236, '3': 235, '3.5': 234, '4': 233, '4.5': 232, '5': 231 } },
  { id: '140_761_K_70x50', line: '140', kalip: '76,1Ø', type: 'Kutu', shape: 'box', label: '70x50', aliases: '50x70 70*50', a: 70, b: 50, defaultBag: 20, note: '', strips: { '1.5': 238, '2': 237, '2.5': 236, '3': 235, '3.5': 234, '4': 233, '4.5': 232, '5': 231 } },
  { id: '140_889_B', line: '140', kalip: '88,9Ø', type: 'Boru', shape: 'pipe', label: 'Ø88,9 Boru', aliases: '88.9 89 3 parmak 3"', a: 88.9, b: 0, defaultBag: 19, note: '', strips: { '1.5': 279, '2': 278, '2.5': 277, '3': 276, '3.5': 275, '4': 274, '4.5': 273, '5': 272 } },
  { id: '140_889_K_100x40', line: '140', kalip: '88,9Ø', type: 'Kutu', shape: 'box', label: '100x40', aliases: '40x100 100*40', a: 100, b: 40, defaultBag: 16, note: '', strips: { '1.5': 278, '2': 277, '2.5': 276, '3': 275, '3.5': 274, '4': 273, '4.5': 272, '5': 271 } },
  { id: '140_889_K_80x60', line: '140', kalip: '88,9Ø', type: 'Kutu', shape: 'box', label: '80x60', aliases: '60x80 80*60', a: 80, b: 60, defaultBag: 16, note: '', strips: { '1.5': 278, '2': 277, '2.5': 276, '3': 275, '3.5': 274, '4': 273, '4.5': 272, '5': 271 } },
  { id: '140_889_K_90x50', line: '140', kalip: '88,9Ø', type: 'Kutu', shape: 'box', label: '90x50', aliases: '50x90 90*50', a: 90, b: 50, defaultBag: 16, note: '', strips: { '1.5': 278, '2': 277, '2.5': 276, '3': 275, '3.5': 274, '4': 273, '4.5': 272, '5': 271 } },
  { id: '140_889_K_70x70', line: '140', kalip: '88,9Ø', type: 'Kutu', shape: 'square', label: '70x70', aliases: '70 kare 70*70', a: 70, b: 70, defaultBag: 16, note: '', strips: { '1.5': 278, '2': 277, '2.5': 276, '3': 275, '3.5': 274, '4': 273, '4.5': 272, '5': 271 } },
  { id: '140_95_B', line: '140', kalip: '95Ø', type: 'Boru', shape: 'pipe', label: 'Ø95 Boru', aliases: '95 boru', a: 95, b: 0, defaultBag: 19, note: '3.5mm seriye göre 295mm (basılı listede 293 kontrol notlu)', strips: { '1.5': 298, '2': 298, '2.5': 297, '3': 296, '3.5': 295, '4': 294, '4.5': 293, '5': 292, '5.5': 291 } },
  { id: '140_95_K_100x50', line: '140', kalip: '95Ø', type: 'Kutu', shape: 'box', label: '100x50', aliases: '50x100 100*50', a: 100, b: 50, defaultBag: 12, note: '', strips: { '1.5': 297, '2': 296, '2.5': 295, '3': 294, '3.5': 293, '4': 292, '4.5': 291, '5': 290, '5.5': 289 } },
  { id: '140_95_K_90x60', line: '140', kalip: '95Ø', type: 'Kutu', shape: 'box', label: '90x60', aliases: '60x90 90*60', a: 90, b: 60, defaultBag: 12, note: 'Mengene yok (95Ø Kalıp)', strips: { '1.5': 297, '2': 296, '2.5': 295, '3': 294, '3.5': 293, '4': 292, '4.5': 291, '5': 290, '5.5': 289 } },
  { id: '140_95_K_80x70', line: '140', kalip: '95Ø', type: 'Kutu', shape: 'box', label: '80x70', aliases: '70x80 80*70', a: 80, b: 70, defaultBag: 12, note: 'Mengene yok (95Ø Kalıp)', strips: { '1.5': 297, '2': 296, '2.5': 295, '3': 294, '3.5': 293, '4': 292, '4.5': 291, '5': 290, '5.5': 289 } },
  { id: '140_1143_B', line: '140', kalip: '114,3Ø', type: 'Boru', shape: 'pipe', label: 'Ø114,3 Boru', aliases: '114.3 114 4 parmak 4"', a: 114.3, b: 0, defaultBag: 14, note: '', strips: { '1.5': 359, '2': 358, '2.5': 357, '3': 356, '3.5': 355, '4': 354, '4.5': 353, '5': 352, '5.5': 351 } },
  { id: '140_1143_K_120x60', line: '140', kalip: '114,3Ø', type: 'Kutu', shape: 'box', label: '120x60', aliases: '60x120 120*60', a: 120, b: 60, defaultBag: 10, note: 'Defterden eklendi (114,3Ø referans bant)', strips: { '1.5': 358, '2': 357, '2.5': 356, '3': 355, '3.5': 354, '4': 353, '4.5': 352, '5': 351, '5.5': 350 } },
  { id: '140_127_B', line: '140', kalip: '127Ø', type: 'Boru', shape: 'pipe', label: 'Ø127 Boru', aliases: '127 5 parmak 5"', a: 127, b: 0, defaultBag: 10, note: '', strips: { '1.5': 399, '2': 398, '2.5': 397, '3': 396, '3.5': 395, '4': 394, '4.5': 393, '5': 392, '5.5': 391 } },
  { id: '140_127_K_100x100', line: '140', kalip: '127Ø', type: 'Kutu', shape: 'square', label: '100x100', aliases: '100 kare 100*100', a: 100, b: 100, defaultBag: 9, note: '', strips: { '1.5': 398, '2': 397, '2.5': 396, '3': 395, '3.5': 394, '4': 393, '4.5': 392, '5': 391, '5.5': 390 } },
  { id: '140_1397_B', line: '140', kalip: '139,7Ø', type: 'Boru', shape: 'pipe', label: 'Ø139,7 Boru', aliases: '139.7 140 5 1/2 bes bucuk parmak', a: 139.7, b: 0, defaultBag: 7, note: '', strips: { '2': 438, '2.5': 437, '3': 436, '3.5': 435, '4': 434, '4.5': 433, '5': 432, '5.5': 431 } }
];

const ALL_WALL_COLUMNS = ['0.8', '1', '1.2', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6'];
const SLIT_BAR_COLORS = ['#1d4ed8', '#d97706', '#047857', '#7c3aed', '#0891b2', '#be123c', '#4f46e5'];

// ==================== 2. VARSAYILAN YÖNETİCİ AYARLARI & RBAC ====================
const DEFAULT_SETTINGS = {
  brandName: 'UMITCK ERP',
  brandCode: 'UC',
  brandSub: 'Kurumsal Profil, KG/Boy Fiyat & Dilme Sistemi',
  companyLegal: 'UMITCK Çelik Profil & Boru Sanayi',
  companyPhone: '',
  companyAddress: '63 & 140 Hat Üretim Tesisi',
  companyTaxId: '',
  quoteFooter: 'Fiyatlarımız teklif tarihinde geçerlidir. Kantar tonajı esas alınır.',
  defaultDensity: 7.85,
  max63Wall: 2.9,
  stripRoundStep: 0.5,
  truckTon: 25,
  quickLengths: [6, 12],
  quickBundles: [1, 2, 5, 10],
  standardCoils: [1000, 1219, 1250, 1380, 1500],
  defaultTrim: 0,
  defaultKerf: 0,
  defaultCurrency: 'DA',
  defaultKgPrice: 145,
  defaultVatRate: 19,
  minFloorKgPrice: 0,
  maxDiscountPct: 25,
  quickPrices: [135, 140, 145, 150, 160],
  rawCostPerKg: 0,
  prodCostPerKg: 0,
  rateUSD: 135,
  rateEUR: 146,
  rateTRY: 4.1,
  requirePinOnSwitch: true,
  darkMode: false
};

const DEFAULT_USERS = [
  { id: 'u_admin', name: 'Yönetici (Admin)', role: 'admin', pin: '1234' },
  { id: 'u_sales', name: 'Satış & Teklif Uzmanı', role: 'sales', pin: '2222' },
  { id: 'u_oper', name: 'Üretim & Dilme Operatörü', role: 'operator', pin: '' },
  { id: 'u_view', name: 'Misafir / Görüntüleyici', role: 'viewer', pin: '' }
];

const DEFAULT_PERMISSIONS = {
  sales:    { viewPrices: true,  editPrices: true,  bypassFloor: false, useSlitter: true,  uploadFiles: true,  manageMolds: false },
  operator: { viewPrices: false, editPrices: false, bypassFloor: false, useSlitter: true,  uploadFiles: true,  manageMolds: false },
  viewer:   { viewPrices: true,  editPrices: false, bypassFloor: false, useSlitter: false, uploadFiles: false, manageMolds: false }
};

const ROLE_META = {
  admin:    { icon: '👑', title: 'Yönetici' },
  sales:    { icon: '💼', title: 'Satış' },
  operator: { icon: '⚙️', title: 'Operatör' },
  viewer:   { icon: '👁️', title: 'Misafir' }
};

const PERMISSION_LABELS = [
  { key: 'viewPrices',  label: 'Fiyatları ve Teklif Sekmesini Görebilir' },
  { key: 'editPrices',  label: 'KG / Boy Birim Fiyatlarını Değiştirebilir' },
  { key: 'bypassFloor', label: 'Taban Fiyat & İskonto Sınırını Aşabilir' },
  { key: 'useSlitter',  label: 'Çoklu Dilme & Rulo Optimizasyonu Kullanabilir' },
  { key: 'uploadFiles', label: 'Excel / CSV / PDF Dosya Yükleyebilir' },
  { key: 'manageMolds', label: 'Kalıp Veritabanını İçe Aktarıp Düzenleyebilir' }
];

// ==================== 3. UYGULAMA DURUMU (STATE) ====================
let settings = cloneObj(DEFAULT_SETTINGS);
let molds = cloneObj(DEFAULT_MOLDS);
let users = cloneObj(DEFAULT_USERS);
let rolePermissions = cloneObj(DEFAULT_PERMISSIONS);
let currentUser = users[0]; // İlk kurulumda Yönetici aktif

let activeTab = 'calc';
let catalogLineFilter = 'ALL';
let catalogTypeFilter = 'ALL';
let catalogCollapsed = false;

let isCustomMode = false;
let customShape = 'box';
let activeMold = null;
let stripSourceInfo = 'Tablo Değeri';

let pricingBasis = 'KG'; // 'KG' | 'PIECE'
let showVatIncluded = false;

let quoteItems = [];
let savedQuotes = [];

let slitItems = [
  { id: 101, moldId: '63_38_K_40x20', label: '40x20 (38Ø)', line: '63', stripWidth: 116, count: 10, defaultBag: 60 }
];

let pendingRoleTargetUser = null;
let omniMatchesCache = [];
let omniHighlightIdx = 0;
let deferredPwaPrompt = null;
let pendingParsedUpload = null;

// ==================== 4. YARDIMCI MATEMATİK & FORMAT FONKSİYONLARI ====================
function cloneObj(o) {
  return JSON.parse(JSON.stringify(o));
}

function roundTo(val, step) {
  if (!step || step <= 0) return val;
  return Math.round((val + Number.EPSILON) / step) * step;
}

function roundDec(val, dec = 2) {
  const f = Math.pow(10, dec);
  return Math.round((Number(val) + Number.EPSILON) * f) / f;
}

function fmt(num, dec = 2) {
  const n = Number(num);
  if (!isFinite(n)) return '0,00';
  return n.toLocaleString('tr-TR', { minimumFractionDigits: dec, maximumFractionDigits: dec });
}

function cleanNumKey(n) {
  const v = roundDec(Number(n), 3);
  return String(v);
}

function hasPerm(permKey) {
  if (!currentUser || currentUser.role === 'admin') return true;
  const r = rolePermissions[currentUser.role];
  return !!(r && r[permKey]);
}

let toastTimeout = null;
function showToast(msg, isError = false) {
  const el = document.getElementById('toastEl');
  if (!el) return;
  el.innerHTML = `<span>${isError ? '⚠️' : '✅'}</span><span>${escapeHtml(msg)}</span>`;
  el.style.borderColor = isError ? '#ef4444' : '#10b981';
  el.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => el.classList.remove('show'), 3200);
}

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ==================== 5. ALGORİTMİK BANT & EN 10219 KESİT MOTORU ====================

/**
 * Seçilen kalıp ve istenen et kalınlığı (mm) için:
 * 1) Tam tablo eşleşmesi varsa doğrudan verir
 * 2) İki tablo kalınlığı arasındaysa doğrusal interpolasyon yapar
 * 3) Tablo sınırları dışındaysa hadde profil eğimiyle (-2mm / +1mm et) ekstrapolasyon yapar
 */
function resolveAlgorithmicStrip(mold, wallMm) {
  if (!mold || !mold.strips) return { strip: 100, source: 'Özel', exact: false };
  const t = Math.max(0.3, Number(wallMm) || 1.5);
  const keyExact = cleanNumKey(t);

  if (mold.strips[keyExact] !== undefined) {
    return { strip: Number(mold.strips[keyExact]), source: 'Tablo Değeri', exact: true };
  }

  const entries = Object.entries(mold.strips)
    .map(([k, v]) => ({ t: Number(k), w: Number(v) }))
    .filter((e) => isFinite(e.t) && isFinite(e.w))
    .sort((a, b) => a.t - b.t);

  if (entries.length === 0) {
    const est = computeCustomStrip(mold.shape, mold.a, mold.b || mold.a, t);
    return { strip: est, source: 'Geometrik Hesap', exact: false };
  }
  if (entries.length === 1) {
    const delta = (t - entries[0].t) * -2.0;
    const w = roundTo(Math.max(15, entries[0].w + delta), settings.stripRoundStep || 0.5);
    return { strip: roundDec(w, 2), source: 'Algoritmik Tahmin', exact: false };
  }

  // Alt sınırın altı
  if (t < entries[0].t) {
    const slope = (entries[1].w - entries[0].w) / (entries[1].t - entries[0].t || 1);
    const effSlope = isFinite(slope) && slope !== 0 ? slope : -2.0;
    const raw = entries[0].w + (t - entries[0].t) * effSlope;
    const w = roundTo(Math.max(15, raw), settings.stripRoundStep || 0.5);
    return { strip: roundDec(w, 2), source: `Ekstrapolasyon (<${entries[0].t}mm)`, exact: false };
  }

  // Üst sınırın üstü
  const last = entries[entries.length - 1];
  if (t > last.t) {
    const prev = entries[entries.length - 2];
    const slope = (last.w - prev.w) / (last.t - prev.t || 1);
    const effSlope = isFinite(slope) && slope !== 0 ? slope : -2.0;
    const raw = last.w + (t - last.t) * effSlope;
    const w = roundTo(Math.max(15, raw), settings.stripRoundStep || 0.5);
    return { strip: roundDec(w, 2), source: `Ekstrapolasyon (>${last.t}mm)`, exact: false };
  }

  // İki değer arası doğrusal interpolasyon
  for (let i = 0; i < entries.length - 1; i++) {
    const e1 = entries[i];
    const e2 = entries[i + 1];
    if (t >= e1.t && t <= e2.t) {
      const ratio = (t - e1.t) / (e2.t - e1.t);
      const raw = e1.w + ratio * (e2.w - e1.w);
      const w = roundTo(raw, settings.stripRoundStep || 0.5);
      return { strip: roundDec(w, 2), source: `İnterpolasyon (${e1.t}–${e2.t}mm)`, exact: false };
    }
  }

  return { strip: entries[0].w, source: 'Tablo', exact: false };
}

/**
 * Serbest / Özel kesit için fabrika haddeleme bant genişliği tahmini
 */
function computeCustomStrip(shape, a, b, t) {
  const A = Math.max(0, Number(a) || 0);
  const B = Math.max(0, Number(b) || 0);
  const T = Math.max(0, Number(t) || 0);
  const step = settings.stripRoundStep || 0.5;

  if (shape === 'pipe') {
    if (A <= T) return roundDec(A * Math.PI, 1);
    return roundDec(roundTo(Math.PI * (A - T) + 0.5, step), 2);
  }
  if (shape === 'square') {
    const perim = 4 * A;
    const offset = perim >= 220 ? 1 : 0;
    return roundDec(roundTo(Math.max(10, perim - 2 * T + offset), step), 2);
  }
  if (shape === 'box') {
    const perim = 2 * (A + B);
    const offset = perim >= 220 ? 1 : 0;
    return roundDec(roundTo(Math.max(10, perim - 2 * T + offset), step), 2);
  }
  if (shape === 'sheet') {
    return roundDec(A, 2);
  }
  if (shape === 'angle') {
    return roundDec(roundTo(Math.max(10, A + B - T), step), 2);
  }
  return roundDec(A, 2);
}

/**
 * EN 10219-2 Soğuk Şekillendirilmiş Kesit Alanı (mm²) - Köşe radyüsü dahil gerçek mühendislik hesabı
 */
function computeEN10219AreaMm2(shape, a, b, t) {
  const A = Math.max(0, Number(a) || 0);
  const B = shape === 'square' ? A : Math.max(0, Number(b) || 0);
  const T = Math.max(0, Number(t) || 0);

  if (shape === 'roundbar') {
    return Math.PI * Math.pow(A / 2, 2);
  }
  if (shape === 'sheet') {
    return A * T;
  }
  if (shape === 'pipe') {
    const effT = Math.min(T, A / 2);
    return Math.PI * effT * (A - effT);
  }
  if (shape === 'angle') {
    const effT = Math.min(T, A, B);
    return effT * (A + B - effT);
  }
  // Kutu veya Kare Profil (EN 10219-2 dış köşe radyüsü Ro: t<=6 -> 2t, 6<t<=10 -> 2.5t, t>10 -> 3t)
  if (A <= 0 || B <= 0 || T <= 0) return 0;
  const minSide = Math.min(A, B);
  const effT = Math.min(T, minSide / 2.05);
  const cFactor = effT <= 6 ? 2.0 : (effT <= 10 ? 2.5 : 3.0);
  const Ro = Math.min(cFactor * effT, minSide / 2);
  const Ri = Math.max(0, Ro - effT);
  const straightPerim = 2 * ((A - 2 * Ro) + (B - 2 * Ro));
  const straightArea = Math.max(0, straightPerim) * effT;
  const cornerArea = Math.PI * (Ro * Ro - Ri * Ri);
  return straightArea + cornerArea;
}

// ==================== 6. AKILLI TEK ARAMA MOTORU (OMNI-SEARCH) ====================

/**
 * Kullanıcının yazdığı tek satır metni analiz eder:
 * Örn: "40x20x1.5", "20*40 2mm 12m", "60,3 boru 2.5", "114x4", "117 bant", "150x100x4"
 */
function parseSmartQuery(rawQuery) {
  if (!rawQuery || !rawQuery.trim()) return null;

  let q = rawQuery.toLowerCase().trim()
    .replace(/,/g, '.')
    .replace(/[×*]/g, 'x')
    .replace(/ø|q|Φ/g, ' boru ');

  let preferredLine = null;
  if (/\b63\s*h(at)?\b/.test(q)) {
    preferredLine = '63';
    q = q.replace(/\b63\s*h(at)?\b/g, ' ');
  } else if (/\b140\s*h(at)?\b/.test(q)) {
    preferredLine = '140';
    q = q.replace(/\b140\s*h(at)?\b/g, ' ');
  }

  // Boy (metre) algılama (mm ile karışmaması için)
  let parsedLength = null;
  const lenMatch = q.match(/\b(\d+(?:\.\d+)?)\s*(?:m|mt|metre)\b(?!m)/);
  if (lenMatch) {
    parsedLength = parseFloat(lenMatch[1]);
    q = q.replace(lenMatch[0], ' ');
  }

  // Bağ adedi algılama
  let parsedBundles = null;
  const bagMatch = q.match(/\b(\d+(?:\.\d+)?)\s*ba[gğ]\b/);
  if (bagMatch) {
    parsedBundles = parseFloat(bagMatch[1]);
    q = q.replace(bagMatch[0], ' ');
  }

  // Bant genişliği araması: "117 bant" veya "bant 117"
  let targetStripSearch = null;
  const stripMatch = q.match(/(?:bant\s*(\d+(?:\.\d+)?)|(\d+(?:\.\d+)?)\s*bant)/);
  if (stripMatch) {
    targetStripSearch = parseFloat(stripMatch[1] || stripMatch[2]);
  }

  const wantsPipe = /\b(boru|pipe|parmak)\b/.test(q);
  const wantsBox = /\b(kutu|kare|profil)\b/.test(q);

  // x ile ayrılmış veya boşluklu sayıları yakala
  const cleanForNums = q.replace(/mm/g, ' ');
  const xChain = cleanForNums.match(/(\d+(?:\.\d+)?)\s*x\s*(\d+(?:\.\d+)?)(?:\s*x\s*(\d+(?:\.\d+)?))?/);
  const allNums = (cleanForNums.match(/\d+(?:\.\d+)?/g) || []).map(Number);

  let nums = [];
  if (xChain) {
    nums = [Number(xChain[1]), Number(xChain[2])];
    if (xChain[3] !== undefined) nums.push(Number(xChain[3]));
    else if (allNums.length >= 3) nums.push(allNums[2]);
  } else {
    nums = allNums.slice(0, 3);
  }

  const results = [];
  const max63 = settings.max63Wall || 2.9;

  // Bant araması modu
  if (targetStripSearch && isFinite(targetStripSearch)) {
    molds.forEach((m) => {
      Object.entries(m.strips).forEach(([wKey, sVal]) => {
        const diff = Math.abs(Number(sVal) - targetStripSearch);
        if (diff <= 2.5) {
          results.push({
            type: 'mold',
            mold: m,
            wall: Number(wKey),
            strip: Number(sVal),
            length: parsedLength,
            bundles: parsedBundles,
            score: 100 - diff * 20
          });
        }
      });
    });
    results.sort((a, b) => b.score - a.score);
    return { results: results.slice(0, 10), exactAuto: false };
  }

  // 3 Sayılı Durum: A x B x T (Örn: 40x20x1.5 veya 20x40x1.5 veya 50x50x3.5)
  if (nums.length >= 3) {
    const dimA = Math.max(nums[0], nums[1]);
    const dimB = Math.min(nums[0], nums[1]);
    const wall = nums[2];

    molds.forEach((m) => {
      if (m.type === 'Kutu') {
        const mA = Math.max(m.a, m.b || m.a);
        const mB = Math.min(m.a, m.b || m.a);
        if (Math.abs(mA - dimA) < 0.2 && Math.abs(mB - dimB) < 0.2) {
          let score = 200;
          if (preferredLine && m.line === preferredLine) score += 25;
          else if (!preferredLine) {
            if (wall > max63 && m.line === '140') score += 20;
            if (wall <= max63 && m.line === '63') score += 20;
          }
          const resolved = resolveAlgorithmicStrip(m, wall);
          results.push({
            type: 'mold',
            mold: m,
            wall,
            strip: resolved.strip,
            length: parsedLength,
            bundles: parsedBundles,
            score
          });
        }
      }
    });

    // Katalogda yoksa Özel Algoritmik Kesit önerisi ekle
    if (results.length === 0 && dimA >= 10 && dimB >= 5 && wall >= 0.4 && wall < dimB) {
      const shp = Math.abs(dimA - dimB) < 0.01 ? 'square' : 'box';
      const estStrip = computeCustomStrip(shp, dimA, dimB, wall);
      results.push({
        type: 'custom',
        shape: shp,
        a: dimA,
        b: dimB,
        wall,
        strip: estStrip,
        length: parsedLength,
        bundles: parsedBundles,
        label: `${dimA}x${dimB}x${wall} mm Özel ${shp === 'square' ? 'Kare' : 'Kutu'}`,
        score: 150
      });
    }

    results.sort((a, b) => b.score - a.score);
    return { results, exactAuto: results.length > 0 };
  }

  // 2 Sayılı Durum: (40x20 Kutu) VEYA (60.3x2.5 / 114x4 Boru)
  if (nums.length === 2) {
    const n1 = nums[0];
    const n2 = nums[1];
    const maxD = Math.max(n1, n2);
    const minD = Math.min(n1, n2);

    // 1) Kutu/Kare A x B eşleşmesi
    if (!wantsPipe) {
      molds.forEach((m) => {
        if (m.type === 'Kutu') {
          const mA = Math.max(m.a, m.b || m.a);
          const mB = Math.min(m.a, m.b || m.a);
          if (Math.abs(mA - maxD) < 0.2 && Math.abs(mB - minD) < 0.2) {
            let score = 190;
            if (preferredLine === m.line) score += 20;
            else if (m.line === '63') score += 5;
            results.push({
              type: 'mold',
              mold: m,
              wall: null,
              length: parsedLength,
              bundles: parsedBundles,
              score
            });
          }
        }
      });
    }

    // 2) Boru Çap x Et eşleşmesi (Örn: 60.3x2, 38x1.5, 114x4, 89x3)
    if (!wantsBox && n2 <= 12 && n1 >= 15) {
      molds.forEach((m) => {
        if (m.type === 'Boru') {
          const diffDia = Math.abs(m.a - n1);
          if (diffDia <= 1.2) {
            let score = 185 - diffDia * 10;
            if (wantsPipe) score += 20;
            if (preferredLine === m.line) score += 20;
            else {
              if (n2 > max63 && m.line === '140') score += 15;
              if (n2 <= max63 && m.line === '63') score += 15;
            }
            const resolved = resolveAlgorithmicStrip(m, n2);
            results.push({
              type: 'mold',
              mold: m,
              wall: n2,
              strip: resolved.strip,
              length: parsedLength,
              bundles: parsedBundles,
              score
            });
          }
        }
      });
    }

    // Katalogda bulunamadıysa özel kutu veya özel boru öner
    if (results.length === 0) {
      if (wantsPipe && n1 >= 12 && n2 <= 16 && n2 < n1 / 2) {
        results.push({
          type: 'custom',
          shape: 'pipe',
          a: n1,
          b: 0,
          wall: n2,
          strip: computeCustomStrip('pipe', n1, 0, n2),
          length: parsedLength,
          bundles: parsedBundles,
          label: `Ø${n1}x${n2} mm Özel Boru`,
          score: 120
        });
      } else if (maxD >= 10 && minD >= 10) {
        const shp = Math.abs(maxD - minD) < 0.01 ? 'square' : 'box';
        const defT = parseFloat(document.getElementById('inputWall').value) || 1.5;
        results.push({
          type: 'custom',
          shape: shp,
          a: maxD,
          b: minD,
          wall: defT,
          strip: computeCustomStrip(shp, maxD, minD, defT),
          length: parsedLength,
          bundles: parsedBundles,
          label: `${maxD}x${minD}x${defT} mm Özel ${shp === 'square' ? 'Kare' : 'Kutu'}`,
          score: 115
        });
      }
    }

    results.sort((a, b) => b.score - a.score);
    return { results: results.slice(0, 10), exactAuto: results.length > 0 && results[0].score >= 175 };
  }

  // Genel Metin / Tek Sayı Araması (Örn: "38", "60", "kare", "2 parmak")
  const rawLower = rawQuery.toLowerCase().trim().replace(/,/g, '.');
  molds.forEach((m) => {
    const hay = `${m.label} ${m.kalip} ${m.type} ${m.aliases || ''} ${m.line}h`.toLowerCase().replace(/,/g, '.');
    let score = 0;

    if (nums.length === 1) {
      const n = nums[0];
      if (m.type === 'Boru' && Math.abs(m.a - n) <= 1.1) score += 150 - Math.abs(m.a - n) * 15;
      if (m.shape === 'square' && Math.abs(m.a - n) < 0.2) score += 148;
      if (m.a === n || m.b === n) score += 95;
      if (m.kalip.replace(',', '.').startsWith(String(n))) score += 85;
    }

    if (hay.includes(rawLower)) score += 110;
    if (wantsPipe && m.type === 'Boru') score += 30;
    if (wantsBox && m.type === 'Kutu') score += 30;
    if (preferredLine && m.line === preferredLine) score += 20;

    if (score > 0) {
      results.push({
        type: 'mold',
        mold: m,
        wall: null,
        length: parsedLength,
        bundles: parsedBundles,
        score
      });
    }
  });

  results.sort((a, b) => b.score - a.score);
  return {
    results: results.slice(0, 12),
    exactAuto: results.length === 1 && results[0].score >= 140
  };
}

function onOmniSearchInput(val) {
  const clearBtn = document.getElementById('btnClearOmni');
  if (val && val.trim().length > 0) clearBtn.classList.remove('hidden');
  else clearBtn.classList.add('hidden');

  renderCatalogGrid(val);

  if (!val || !val.trim()) {
    hideOmniDropdown();
    return;
  }

  const parsed = parseSmartQuery(val);
  if (!parsed || parsed.results.length === 0) {
    hideOmniDropdown();
    return;
  }

  omniMatchesCache = parsed.results;
  omniHighlightIdx = 0;
  renderOmniDropdown();

  // Kesin profil+et eşleşmesi varsa beklemeden anında otomatik uygula!
  if (parsed.exactAuto && parsed.results[0].type === 'mold') {
    applyOmniResult(parsed.results[0], false);
  }
}

function onOmniSearchFocus() {
  const val = document.getElementById('omniSearchInput').value;
  if (val && val.trim() && omniMatchesCache.length > 0) {
    renderOmniDropdown();
  }
}

function onOmniSearchKeydown(e) {
  const dd = document.getElementById('omniDropdown');
  if (dd.classList.contains('hidden') || omniMatchesCache.length === 0) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    omniHighlightIdx = (omniHighlightIdx + 1) % omniMatchesCache.length;
    renderOmniDropdown();
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    omniHighlightIdx = (omniHighlightIdx - 1 + omniMatchesCache.length) % omniMatchesCache.length;
    renderOmniDropdown();
  } else if (e.key === 'Enter') {
    e.preventDefault();
    applyOmniResult(omniMatchesCache[omniHighlightIdx], true);
  } else if (e.key === 'Escape') {
    hideOmniDropdown();
  }
}

function renderOmniDropdown() {
  const dd = document.getElementById('omniDropdown');
  if (!omniMatchesCache.length) {
    dd.classList.add('hidden');
    return;
  }
  dd.innerHTML = omniMatchesCache.map((item, idx) => {
    const activeCls = idx === omniHighlightIdx ? 'highlighted' : '';
    if (item.type === 'custom') {
      return `
        <button type="button" class="omni-item ${activeCls}" onclick="applyOmniByIndex(${idx})">
          <div>
            <span class="badge badge-purple">ÖZEL KESİT</span>
            <strong style="margin-left:6px;">${escapeHtml(item.label)}</strong>
          </div>
          <span class="mono badge badge-amber">Bant: ~${item.strip} mm</span>
        </button>
      `;
    }
    const m = item.mold;
    const wInfo = item.wall ? `${item.wall} mm Et → ${item.strip} mm Bant` : `1 Bağ: ${m.defaultBag} Boy`;
    const lineCls = m.line === '63' ? 'badge-blue' : 'badge-purple';
    return `
      <button type="button" class="omni-item ${activeCls}" onclick="applyOmniByIndex(${idx})">
        <div>
          <span class="badge ${lineCls}">${m.line} HAT • ${escapeHtml(m.kalip)}</span>
          <strong style="margin-left:6px;font-size:0.9rem;">${escapeHtml(m.label)}</strong>
          <span class="text-muted" style="font-size:0.75rem;margin-left:4px;">(${m.type})</span>
        </div>
        <span class="mono badge badge-amber">${escapeHtml(wInfo)}</span>
      </button>
    `;
  }).join('');
  dd.classList.remove('hidden');
}

function applyOmniByIndex(idx) {
  const item = omniMatchesCache[idx];
  if (item) applyOmniResult(item, true);
}

function applyOmniResult(item, closeDropdown = true) {
  if (item.length && item.length > 0) {
    document.getElementById('inputLength').value = item.length;
  }
  if (item.type === 'custom') {
    isCustomMode = true;
    activeMold = null;
    customShape = item.shape;
    document.getElementById('customDimensionsPanel').classList.remove('hidden');
    document.getElementById('inputDimA').value = item.a;
    document.getElementById('inputDimB').value = item.b || item.a;
    document.getElementById('inputWall').value = item.wall;
    document.getElementById('inputStripWidth').value = item.strip;
    stripSourceInfo = 'Algoritmik Özel Kesit';
    updateCustomShapeUI();
    renderWallButtons();
    recalculateMain();
  } else if (item.mold) {
    selectMold(item.mold.id, item.wall);
  }
  if (item.bundles && item.bundles > 0) {
    document.getElementById('inputBundleCount').value = item.bundles;
    onBundleCountInput();
  }
  if (closeDropdown) {
    hideOmniDropdown();
    showToast(`${item.type === 'custom' ? item.label : item.mold.label} otomatik seçildi.`);
  }
}

function clearOmniSearch() {
  const inp = document.getElementById('omniSearchInput');
  inp.value = '';
  document.getElementById('btnClearOmni').classList.add('hidden');
  hideOmniDropdown();
  renderCatalogGrid('');
  inp.focus();
}

function hideOmniDropdown() {
  document.getElementById('omniDropdown').classList.add('hidden');
}

document.addEventListener('click', (e) => {
  const box = document.getElementById('omniContainer');
  if (box && !box.contains(e.target)) hideOmniDropdown();
});

// ==================== 7. KATALOG, KALIP SEÇİMİ VE HESAPLAMA KONTROLLERİ ====================

function setCatalogFilter(line, type) {
  if (line !== null) {
    catalogLineFilter = line;
    ['ALL', '63', '140'].forEach((l) => {
      const b = document.getElementById('fltLine_' + l);
      if (b) b.classList.toggle('active', l === catalogLineFilter);
    });
  }
  if (type !== null) {
    catalogTypeFilter = catalogTypeFilter === type ? 'ALL' : type;
    ['Kutu', 'Boru'].forEach((t) => {
      const b = document.getElementById('fltType_' + t);
      if (b) b.classList.toggle('active', t === catalogTypeFilter);
    });
  }
  renderCatalogGrid(document.getElementById('omniSearchInput').value);
}

function toggleCatalogCollapse() {
  catalogCollapsed = !catalogCollapsed;
  document.getElementById('catalogCollapsible').classList.toggle('hidden', catalogCollapsed);
  document.getElementById('btnToggleCatalog').innerText = catalogCollapsed ? 'Kalıp Listesini Göster' : 'Kalıp Listesini Gizle';
}

function renderCatalogGrid(filterText = '') {
  const grid = document.getElementById('moldCatalogGrid');
  document.getElementById('lblTotalMoldCount').innerText = molds.length;
  const q = (filterText || '').toLowerCase().trim().replace(/,/g, '.');

  const filtered = molds.filter((m) => {
    if (catalogLineFilter !== 'ALL' && m.line !== catalogLineFilter) return false;
    if (catalogTypeFilter !== 'ALL' && m.type !== catalogTypeFilter) return false;
    if (q) {
      // Eğer çoklu ölçü girildiyse (örn 40x20x1.5) ilk ölçü kısmını da eşle
      const baseQ = q.split(/[x*\s]/)[0];
      const hay = `${m.label} ${m.kalip} ${m.aliases || ''}`.toLowerCase().replace(/,/g, '.');
      if (!hay.includes(q) && (!baseQ || !hay.includes(baseQ))) return false;
    }
    return true;
  });

  grid.innerHTML = filtered.map((m) => {
    const sel = !isCustomMode && activeMold && activeMold.id === m.id;
    const badgeCls = m.line === '63' ? 'badge-blue' : 'badge-purple';
    return `
      <button type="button" onclick="selectMold('${m.id}')" class="mold-card ${sel ? 'selected' : ''}">
        <div class="row-between" style="width:100%;">
          <span class="badge ${badgeCls}" style="font-size:0.64rem;padding:1px 5px;">${m.line}H • ${escapeHtml(m.kalip)}</span>
          ${m.note ? '<span title="' + escapeHtml(m.note) + '" style="font-size:0.72rem;">⚠️</span>' : ''}
        </div>
        <div style="font-weight:800;font-size:0.86rem;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%;">${escapeHtml(m.label)}</div>
        <div class="mono text-muted" style="font-size:0.7rem;">Bağ: <b>${m.defaultBag}</b> Boy</div>
      </button>
    `;
  }).join('');
}

function selectMold(moldId, explicitWall = null) {
  const m = molds.find((x) => x.id === moldId);
  if (!m) return;

  isCustomMode = false;
  activeMold = m;
  document.getElementById('customDimensionsPanel').classList.add('hidden');
  document.getElementById('btnCustomMode').classList.remove('btn-primary');
  document.getElementById('btnCustomMode').classList.add('btn-outline');

  document.getElementById('inputDimA').value = m.a;
  document.getElementById('inputDimB').value = m.b || m.a;
  document.getElementById('inputPcsPerBundle').value = m.defaultBag;

  const curBundles = Math.max(0.1, parseFloat(document.getElementById('inputBundleCount').value) || 1);
  document.getElementById('inputTotalPieces').value = Math.max(1, Math.round(curBundles * m.defaultBag));

  const wallKeys = Object.keys(m.strips);
  let targetWall = explicitWall !== null && explicitWall !== undefined
    ? Number(explicitWall)
    : parseFloat(document.getElementById('inputWall').value) || 1.5;

  if (explicitWall === null && !m.strips[cleanNumKey(targetWall)] && wallKeys.length > 0) {
    targetWall = wallKeys.includes('1.5') ? 1.5 : Number(wallKeys[0]);
  }

  document.getElementById('inputWall').value = targetWall;
  const resolved = resolveAlgorithmicStrip(m, targetWall);
  document.getElementById('inputStripWidth').value = resolved.strip;
  stripSourceInfo = resolved.source;

  renderCatalogGrid(document.getElementById('omniSearchInput').value);
  renderWallButtons();
  recalculateMain();
}

function enableCustomMode() {
  isCustomMode = true;
  activeMold = null;
  document.getElementById('customDimensionsPanel').classList.remove('hidden');
  document.getElementById('btnCustomMode').classList.remove('btn-outline');
  document.getElementById('btnCustomMode').classList.add('btn-primary');
  updateCustomShapeUI();
  onCustomDimInput();
  renderCatalogGrid('');
  renderWallButtons();
}

function setCustomShape(shp) {
  customShape = shp;
  updateCustomShapeUI();
  onCustomDimInput();
}

function updateCustomShapeUI() {
  ['box', 'square', 'pipe', 'sheet', 'roundbar', 'angle'].forEach((s) => {
    const btn = document.getElementById('shp_' + s);
    if (btn) btn.classList.toggle('active', s === customShape);
  });
  const wrapB = document.getElementById('wrapCustomB');
  const lblA = document.getElementById('lblCustomA');
  if (customShape === 'box' || customShape === 'angle') {
    wrapB.classList.remove('hidden');
    lblA.innerText = 'Kenar A (mm)';
  } else if (customShape === 'square') {
    wrapB.classList.add('hidden');
    lblA.innerText = 'Kare Kenarı (mm)';
  } else if (customShape === 'pipe' || customShape === 'roundbar') {
    wrapB.classList.add('hidden');
    lblA.innerText = 'Dış Çap Ø (mm)';
  } else if (customShape === 'sheet') {
    wrapB.classList.add('hidden');
    lblA.innerText = 'Sac / Plaka Eni (mm)';
  }
}

function onCustomDimInput() {
  const a = parseFloat(document.getElementById('inputDimA').value) || 40;
  const b = parseFloat(document.getElementById('inputDimB').value) || 20;
  const t = parseFloat(document.getElementById('inputWall').value) || 1.5;
  const est = computeCustomStrip(customShape, a, b, t);
  document.getElementById('inputStripWidth').value = est;
  stripSourceInfo = 'Algoritmik Özel Kesit';
  recalculateMain();
}

function renderWallButtons() {
  const grid = document.getElementById('wallButtonsGrid');
  const currentWallStr = cleanNumKey(parseFloat(document.getElementById('inputWall').value) || 0);

  if (isCustomMode || !activeMold) {
    const commonWalls = [0.8, 1, 1.2, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6];
    const a = parseFloat(document.getElementById('inputDimA').value) || 40;
    const b = parseFloat(document.getElementById('inputDimB').value) || 20;
    grid.innerHTML = commonWalls.map((w) => {
      const est = computeCustomStrip(customShape, a, b, w);
      const sel = currentWallStr === cleanNumKey(w);
      return `
        <button type="button" onclick="selectWallThickness(${w}, ${est}, 'Algoritmik Özel')" class="wall-btn ${sel ? 'selected' : ''}">
          <div class="mono fw-800" style="font-size:0.84rem;">${w} mm</div>
          <div class="mono text-amber" style="font-size:0.7rem;">~${est} mm</div>
        </button>
      `;
    }).join('');
    return;
  }

  const max63 = settings.max63Wall || 2.9;
  const entries = Object.entries(activeMold.strips).sort((a, b) => Number(a[0]) - Number(b[0]));
  grid.innerHTML = entries.map(([w, strip]) => {
    const sel = currentWallStr === cleanNumKey(w);
    const over63 = activeMold.line === '63' && Number(w) > max63;
    return `
      <button type="button" onclick="selectWallThickness(${Number(w)}, ${Number(strip)}, 'Tablo Değeri')" class="wall-btn ${sel ? 'selected' : ''}">
        <div class="mono fw-800" style="font-size:0.84rem;">
          ${w} mm ${over63 ? '<span class="text-danger" title="63 Hat sınırı üstü">!</span>' : ''}
        </div>
        <div class="mono text-amber" style="font-size:0.72rem;font-weight:700;">${strip} mm</div>
      </button>
    `;
  }).join('');
}

function selectWallThickness(wallNum, stripNum, sourceLabel) {
  document.getElementById('inputWall').value = wallNum;
  document.getElementById('inputStripWidth').value = stripNum;
  stripSourceInfo = sourceLabel || 'Tablo Değeri';
  renderWallButtons();
  recalculateMain();
}

function onWallManualInput() {
  const t = parseFloat(document.getElementById('inputWall').value) || 0;
  if (t > 0) {
    if (!isCustomMode && activeMold) {
      const resolved = resolveAlgorithmicStrip(activeMold, t);
      document.getElementById('inputStripWidth').value = resolved.strip;
      stripSourceInfo = resolved.source;
    } else {
      const a = parseFloat(document.getElementById('inputDimA').value) || 40;
      const b = parseFloat(document.getElementById('inputDimB').value) || 20;
      document.getElementById('inputStripWidth').value = computeCustomStrip(customShape, a, b, t);
      stripSourceInfo = 'Algoritmik Özel Kesit';
    }
  }
  renderWallButtons();
  recalculateMain();
}

function onStripManualInput() {
  stripSourceInfo = 'Manuel Bant Girişi';
  recalculateMain();
}

function onCalcMethodChange() {
  recalculateMain();
}

function onMaterialChange() {
  recalculateMain();
}

function find140EquivalentMold() {
  if (!activeMold || activeMold.line !== '63') return null;
  return molds.find((m) =>
    m.line === '140' &&
    m.type === activeMold.type &&
    Math.abs(m.a - activeMold.a) < 0.2 &&
    Math.abs((m.b || 0) - (activeMold.b || 0)) < 0.2
  ) || null;
}

function switchTo140Equivalent() {
  const eq = find140EquivalentMold();
  if (eq) {
    const curWall = parseFloat(document.getElementById('inputWall').value) || 3;
    selectMold(eq.id, curWall);
    showToast(`140 Hat • ${eq.label} kalıbına geçildi.`);
  }
}

// ==================== 8. MİKTAR, BAĞ VE HEDEF TONAJ SENKRONİZASYONU ====================

function onPcsPerBundleInput() {
  const pcsPerBag = Math.max(1, parseInt(document.getElementById('inputPcsPerBundle').value) || 1);
  const bundles = Math.max(0, parseFloat(document.getElementById('inputBundleCount').value) || 1);
  document.getElementById('inputTotalPieces').value = Math.max(1, Math.round(pcsPerBag * bundles));
  recalculateMain();
}

function onBundleCountInput() {
  const pcsPerBag = Math.max(1, parseInt(document.getElementById('inputPcsPerBundle').value) || 1);
  const bundles = Math.max(0, parseFloat(document.getElementById('inputBundleCount').value) || 0);
  document.getElementById('inputTotalPieces').value = Math.max(1, Math.round(pcsPerBag * bundles));
  document.getElementById('inputTargetTon').value = '';
  recalculateMain();
}

function onTotalPiecesInput() {
  const pcsPerBag = Math.max(1, parseInt(document.getElementById('inputPcsPerBundle').value) || 1);
  const totalPcs = Math.max(1, parseInt(document.getElementById('inputTotalPieces').value) || 1);
  const bCount = roundDec(totalPcs / pcsPerBag, 2);
  document.getElementById('inputBundleCount').value = bCount;
  document.getElementById('inputTargetTon').value = '';
  recalculateMain();
}

function stepBundles(delta) {
  const cur = parseFloat(document.getElementById('inputBundleCount').value) || 0;
  const next = Math.max(1, Math.floor(cur + delta));
  document.getElementById('inputBundleCount').value = next;
  onBundleCountInput();
}

function stepPieces(delta) {
  const cur = parseInt(document.getElementById('inputTotalPieces').value) || 1;
  const next = Math.max(1, cur + delta);
  document.getElementById('inputTotalPieces').value = next;
  onTotalPiecesInput();
}

function setQuickBundleCount(b) {
  document.getElementById('inputBundleCount').value = b;
  onBundleCountInput();
}

function setQuickLength(m) {
  document.getElementById('inputLength').value = m;
  recalculateMain();
}

function onTargetTonInput(tonVal) {
  const ton = parseFloat(tonVal);
  if (!isFinite(ton) || ton <= 0) return;
  const calc = computeCurrentState();
  if (calc.weightPerBundle <= 0) return;
  const idealBundles = Math.max(1, Math.round((ton * 1000) / calc.weightPerBundle));
  const pcsPerBag = Math.max(1, parseInt(document.getElementById('inputPcsPerBundle').value) || 1);
  document.getElementById('inputBundleCount').value = idealBundles;
  document.getElementById('inputTotalPieces').value = idealBundles * pcsPerBag;
  recalculateMain();
}

function applyTruckLoad() {
  const t = settings.truckTon || 25;
  document.getElementById('inputTargetTon').value = t;
  onTargetTonInput(t);
  showToast(`🚚 ${t} Ton (1 Tır) için tam bağ adedi otomatik hesaplandı.`);
}

// ==================== 9. ÇEKİRDEK AĞIRLIK + KG & BOY ÇİFT YÖNLÜ FİYAT MOTORU ====================

function getSelectedDensity() {
  const raw = document.getElementById('selectMaterial').value || String(settings.defaultDensity || 7.85);
  if (raw === '7.85_galv') return 7.85;
  const parsed = parseFloat(raw);
  return isFinite(parsed) && parsed > 0 ? parsed : (settings.defaultDensity || 7.85);
}

function computeCurrentState() {
  const density = getSelectedDensity();
  const method = document.getElementById('selectCalcMethod').value || 'strip';
  const shape = isCustomMode ? customShape : (activeMold ? activeMold.shape : 'box');
  const a = Math.max(0, parseFloat(document.getElementById('inputDimA').value) || 0);
  const b = Math.max(0, parseFloat(document.getElementById('inputDimB').value) || 0);
  const wall = Math.max(0, parseFloat(document.getElementById('inputWall').value) || 0);
  const stripWidth = Math.max(0, parseFloat(document.getElementById('inputStripWidth').value) || 0);
  const length = Math.max(0, parseFloat(document.getElementById('inputLength').value) || 0);
  const pcsPerBundle = Math.max(1, parseInt(document.getElementById('inputPcsPerBundle').value) || 1);
  const totalPieces = Math.max(1, parseInt(document.getElementById('inputTotalPieces').value) || 1);

  const areaEN10219 = computeEN10219AreaMm2(shape, a, b, wall);
  const kgPerMeterEN = (areaEN10219 * density) / 1000;

  let activeAreaMm2 = areaEN10219;
  if (method === 'strip' && stripWidth > 0 && shape !== 'roundbar') {
    activeAreaMm2 = stripWidth * wall;
  }

  const weightPerMeter = (activeAreaMm2 * density) / 1000;
  const weightPerPiece = weightPerMeter * length;
  const weightPerBundle = weightPerPiece * pcsPerBundle;
  const totalWeight = weightPerPiece * totalPieces;
  const totalMeters = length * totalPieces;

  const currency = document.getElementById('selectCurrency').value || settings.defaultCurrency || 'DA';
  let discountPct = Math.max(0, parseFloat(document.getElementById('inputDiscountPct').value) || 0);
  if (!hasPerm('bypassFloor') && settings.maxDiscountPct >= 0 && discountPct > settings.maxDiscountPct) {
    discountPct = settings.maxDiscountPct;
  }

  let rawKgPrice = Math.max(0, parseFloat(document.getElementById('inputKgPrice').value) || 0);
  let rawPiecePrice = Math.max(0, parseFloat(document.getElementById('inputPiecePrice').value) || 0);

  let effectiveKgPrice = rawKgPrice;
  let effectivePiecePrice = rawPiecePrice;
  let grossSubTotalHT = 0;

  if (pricingBasis === 'PIECE') {
    // BOY BAZLI: Tam Adet × Boy Fiyatı (Sıfır yuvarlama kaybı!)
    effectivePiecePrice = rawPiecePrice;
    effectiveKgPrice = weightPerPiece > 0 ? (effectivePiecePrice / weightPerPiece) : 0;
    grossSubTotalHT = totalPieces * effectivePiecePrice;
  } else {
    // KG BAZLI: Toplam Ağırlık × Kg Fiyatı
    effectiveKgPrice = rawKgPrice;
    effectivePiecePrice = weightPerPiece * effectiveKgPrice;
    grossSubTotalHT = totalWeight * effectiveKgPrice;
  }

  const discountAmount = grossSubTotalHT * (discountPct / 100);
  const netSubTotalHT = grossSubTotalHT - discountAmount;
  const vatRate = Math.max(0, Number(settings.defaultVatRate) || 0);
  const vatAmount = netSubTotalHT * (vatRate / 100);
  const grandTotalTTC = netSubTotalHT + vatAmount;

  const netFactor = 1 - discountPct / 100;
  const netKgPrice = effectiveKgPrice * netFactor;
  const netPiecePrice = effectivePiecePrice * netFactor;
  const netMeterPrice = length > 0 ? (netPiecePrice / length) : (weightPerMeter * netKgPrice);
  const netBundlePrice = pricingBasis === 'PIECE' ? (pcsPerBundle * netPiecePrice) : (weightPerBundle * netKgPrice);

  let specLabel = '';
  let lineTag = 'ÖZEL';
  if (!isCustomMode && activeMold) {
    const cleanLbl = activeMold.label.replace(/\s*\((63H|140H)\)/g, '');
    specLabel = `${cleanLbl} × ${wall} mm`;
    lineTag = `${activeMold.line} HAT (${activeMold.kalip})`;
  } else {
    if (shape === 'pipe') specLabel = `Ø${a} × ${wall} mm Boru`;
    else if (shape === 'square') specLabel = `${a}×${a} × ${wall} mm Kare`;
    else if (shape === 'box') specLabel = `${a}×${b} × ${wall} mm Kutu`;
    else if (shape === 'sheet') specLabel = `${a} × ${wall} mm Sac`;
    else if (shape === 'roundbar') specLabel = `Ø${a} mm Dolu Mil`;
    else specLabel = `${a}×${b} × ${wall} mm Köşebent`;
  }

  const belowFloor = settings.minFloorKgPrice > 0 && netKgPrice > 0 && (netKgPrice + 0.001 < settings.minFloorKgPrice);

  return {
    lineTag,
    specLabel,
    shape,
    stripWidth,
    wall,
    length,
    pcsPerBundle,
    totalPieces,
    density,
    method,
    kgPerMeterEN,
    weightPerMeter,
    weightPerPiece,
    weightPerBundle,
    totalWeight,
    totalMeters,
    pricingBasis,
    currency,
    discountPct,
    vatRate,
    effectiveKgPrice,
    effectivePiecePrice,
    netKgPrice,
    netPiecePrice,
    netMeterPrice,
    netBundlePrice,
    grossSubTotalHT,
    discountAmount,
    netSubTotalHT,
    vatAmount,
    grandTotalTTC,
    belowFloor
  };
}

function recalculateMain(syncInactivePriceInput = true) {
  const c = computeCurrentState();
  const max63 = settings.max63Wall || 2.9;

  // Başlık ve Hat Kuralları
  if (!isCustomMode && activeMold) {
    document.getElementById('selectedProfileTitle').innerText = `${activeMold.label} • ${activeMold.kalip} Kalıp`;
    document.getElementById('selectedProfileMeta').innerText = `${activeMold.line} Hat Üretim • 1 Bağ Standart: ${activeMold.defaultBag} Boy`;
  } else {
    document.getElementById('selectedProfileTitle').innerText = c.specLabel;
    document.getElementById('selectedProfileMeta').innerText = 'Serbest Özel Kesit • Algoritmik Bant & Kesit Hesabı';
  }

  document.getElementById('stripSourceBadge').innerText = stripSourceInfo;

  const lineBadge = document.getElementById('smartLineBadge');
  const noteBanner = document.getElementById('moldNoteBanner');
  const noteText = document.getElementById('moldNoteText');
  const switch140Btn = document.getElementById('btnSwitch140Suggestion');

  switch140Btn.classList.add('hidden');
  if (!isCustomMode && activeMold && activeMold.line === '63' && c.wall > max63) {
    lineBadge.className = 'badge badge-danger';
    lineBadge.innerText = `⚠️ ${c.wall}mm > ${max63}mm (140 Hat Önerilir)`;
    noteBanner.classList.remove('hidden');
    noteText.innerText = `Dikkat: 63 Hat için önerilen üst sınır ${max63} mm'dir. ${c.wall} mm et kalınlığı için 140 Hat tercih edilmelidir.`;
    if (find140EquivalentMold()) switch140Btn.classList.remove('hidden');
  } else if (c.wall <= max63) {
    lineBadge.className = 'badge badge-blue';
    lineBadge.innerText = `⚙️ 63 HAT UYGUN (≤${max63}mm)`;
    if (!isCustomMode && activeMold && activeMold.note) {
      noteBanner.classList.remove('hidden');
      noteText.innerText = `Fabrika Notu: ${activeMold.note}`;
    } else {
      noteBanner.classList.add('hidden');
    }
  } else {
    lineBadge.className = 'badge badge-purple';
    lineBadge.innerText = `🏭 140 HAT KALIN ET (${c.wall}mm)`;
    if (!isCustomMode && activeMold && activeMold.note) {
      noteBanner.classList.remove('hidden');
      noteText.innerText = `Fabrika Notu: ${activeMold.note}`;
    } else {
      noteBanner.classList.add('hidden');
    }
  }

  // Ağırlık KPI Kartları
  document.getElementById('kpiActiveSpecBadge').innerText = `${c.specLabel} • ${c.length}m`;
  document.getElementById('kpiKgPerMeter').innerText = `${fmt(c.weightPerMeter, 3)} kg/m`;
  document.getElementById('kpiStripFormula').innerText = c.method === 'strip' && c.shape !== 'roundbar'
    ? `Bant: ${c.stripWidth}mm × ${c.wall}mm`
    : `EN 10219 Teorik Kesit`;
  document.getElementById('kpiKgPerPiece').innerText = `${fmt(c.weightPerPiece, 2)} kg/Boy`;
  document.getElementById('kpiLengthSub').innerText = `${c.length} Metre / Boy`;
  document.getElementById('kpiKgPerBundle').innerText = `${fmt(c.weightPerBundle, 2)} kg`;
  document.getElementById('kpiPcsPerBundleSub').innerText = `${c.pcsPerBundle} Boy / Bağ`;
  document.getElementById('kpiTotalKg').innerText = `${fmt(c.totalWeight, 2)} kg`;
  document.getElementById('kpiTotalTonAndMeters').innerText = `${fmt(c.totalWeight / 1000, 2)} Ton • ${fmt(c.totalMeters, 0)} m`;

  // Bağ dağılımı + EN 10219 karşılaştırması
  const fullBags = Math.floor(c.totalPieces / c.pcsPerBundle);
  const loosePcs = c.totalPieces % c.pcsPerBundle;
  const bagDesc = fullBags > 0
    ? `📦 Paket: <b>${fullBags} Tam Bağ</b>${loosePcs > 0 ? ` + <b>${loosePcs} Açık Boy</b>` : ''} (${c.totalPieces} Boy)`
    : `📦 Paket: <b>${c.totalPieces} Açık Boy</b> (Paket Altı)`;
  document.getElementById('lblBundleBreakdown').innerHTML = bagDesc;
  document.getElementById('lblGeoCompare').innerText = `EN 10219 Teorik: ${fmt(c.kgPerMeterEN, 3)} kg/m`;

  // Fiyatlandırma Alanlarını Güncelle
  document.getElementById('lblCurrKg').innerText = `${c.currency}/kg`;
  document.getElementById('lblCurrPiece').innerText = `${c.currency}/Boy`;
  document.getElementById('lblVatRateTag').innerText = `%${c.vatRate} KDV/TVA`;

  if (syncInactivePriceInput) {
    if (pricingBasis === 'KG' && document.activeElement !== document.getElementById('inputPiecePrice')) {
      document.getElementById('inputPiecePrice').value = roundDec(c.effectivePiecePrice, 2);
    } else if (pricingBasis === 'PIECE' && document.activeElement !== document.getElementById('inputKgPrice')) {
      document.getElementById('inputKgPrice').value = roundDec(c.effectiveKgPrice, 2);
    }
  }

  document.getElementById('subTonPrice').innerText = `1 Ton: ${fmt(c.netKgPrice * 1000, 0)} ${c.currency}`;
  document.getElementById('subMeterPrice').innerText = `1 Metre: ${fmt(c.netMeterPrice, 2)} ${c.currency}/m`;

  // Taban fiyat kontrolü
  const floorWarn = document.getElementById('floorPriceWarning');
  if (c.belowFloor) {
    floorWarn.classList.remove('hidden');
    floorWarn.innerText = `⚠️ Dikkat: Net birim fiyat (${fmt(c.netKgPrice, 2)} ${c.currency}/kg), yönetici minimum taban fiyatının (${fmt(settings.minFloorKgPrice, 2)} ${c.currency}/kg) altındadır!`;
  } else {
    floorWarn.classList.add('hidden');
  }

  // Yönetici özel canlı kâr marjı
  const adminProfitBox = document.getElementById('adminProfitBox');
  const totalUnitCost = (Number(settings.rawCostPerKg) || 0) + (Number(settings.prodCostPerKg) || 0);
  if (currentUser.role === 'admin' && totalUnitCost > 0) {
    const unitProfit = c.netKgPrice - totalUnitCost;
    const totalProfit = unitProfit * c.totalWeight;
    const marginPct = c.netKgPrice > 0 ? (unitProfit / c.netKgPrice) * 100 : 0;
    adminProfitBox.classList.remove('hidden');
    document.getElementById('lblAdminMarginUnit').innerText = `👑 Kâr: ${fmt(unitProfit, 2)} ${c.currency}/kg (%${fmt(marginPct, 1)})`;
    document.getElementById('lblAdminMarginTotal').innerText = `Toplam Net Kâr: ${fmt(totalProfit, 2)} ${c.currency}`;
  } else {
    adminProfitBox.classList.add('hidden');
  }

  // Ana Toplam Tutar Gösterimi
  document.getElementById('badgeActivePricingMode').innerText = pricingBasis === 'PIECE' ? '📏 BOY (ADET) BAZLI' : '⚖️ KG BAZLI';
  document.getElementById('badgeActivePricingMode').className = pricingBasis === 'PIECE' ? 'badge badge-blue' : 'badge badge-emerald';

  if (showVatIncluded) {
    document.getElementById('lblActiveTotalHeading').innerText = `TOPLAM TUTAR (TTC — %${c.vatRate} KDV/TVA DAHİL)`;
    document.getElementById('kpiGrandTotalMain').innerText = `${fmt(c.grandTotalTTC, 2)} ${c.currency}`;
    document.getElementById('kpiSecondaryVatLine').innerText = `HT (Hariç): ${fmt(c.netSubTotalHT, 2)} ${c.currency} | Vergi: ${fmt(c.vatAmount, 2)} ${c.currency}`;
  } else {
    document.getElementById('lblActiveTotalHeading').innerText = `TOPLAM TUTAR (HT — VERGİ HARİÇ)`;
    document.getElementById('kpiGrandTotalMain').innerText = `${fmt(c.netSubTotalHT, 2)} ${c.currency}`;
    document.getElementById('kpiSecondaryVatLine').innerText = `+%${c.vatRate} Dahil (TTC): ${fmt(c.grandTotalTTC, 2)} ${c.currency}`;
  }
  document.getElementById('kpiBundlePriceLine').innerText = `1 Bağ: ${fmt(c.netBundlePrice, 2)} ${c.currency}`;
}

function setPricingBasis(basis) {
  pricingBasis = basis === 'PIECE' ? 'PIECE' : 'KG';
  document.getElementById('segBasis_KG').classList.toggle('active', pricingBasis === 'KG');
  document.getElementById('segBasis_PIECE').classList.toggle('active', pricingBasis === 'PIECE');

  const wrapKg = document.getElementById('fieldWrapKgPrice');
  const wrapPiece = document.getElementById('fieldWrapPiecePrice');
  if (pricingBasis === 'KG') {
    wrapKg.className = 'field emerald';
    wrapKg.style.borderWidth = '2px';
    wrapPiece.className = 'field';
    wrapPiece.style.borderWidth = '1px';
  } else {
    wrapPiece.className = 'field primary';
    wrapPiece.style.borderWidth = '2px';
    wrapKg.className = 'field';
    wrapKg.style.borderWidth = '1px';
  }
  recalculateMain(true);
}

function onKgPriceInput() {
  if (!hasPerm('editPrices')) {
    document.getElementById('inputKgPrice').value = settings.defaultKgPrice;
    showToast('Bu rolde birim fiyat değiştirme yetkisi kapalıdır.', true);
    return;
  }
  if (pricingBasis !== 'KG') setPricingBasis('KG');
  else recalculateMain(true);
  saveAppState();
}

function onPiecePriceInput() {
  if (!hasPerm('editPrices')) {
    recalculateMain(true);
    showToast('Bu rolde birim fiyat değiştirme yetkisi kapalıdır.', true);
    return;
  }
  if (pricingBasis !== 'PIECE') setPricingBasis('PIECE');
  else recalculateMain(true);
}

function setQuickKgPrice(val) {
  if (!hasPerm('editPrices')) {
    showToast('Fiyat değiştirme yetkiniz bulunmuyor.', true);
    return;
  }
  document.getElementById('inputKgPrice').value = val;
  setPricingBasis('KG');
  saveAppState();
}

function onDiscountInput() {
  const maxD = settings.maxDiscountPct || 25;
  const inp = document.getElementById('inputDiscountPct');
  if (!hasPerm('bypassFloor') && parseFloat(inp.value) > maxD) {
    inp.value = maxD;
    showToast(`Maksimum iskonto yetkiniz %${maxD} ile sınırlıdır.`, true);
  }
  recalculateMain(false);
}

function onCurrencyChange() {
  recalculateMain(false);
  renderQuoteView();
  saveAppState();
}

function setVatDisplayMode(incl) {
  showVatIncluded = !!incl;
  document.getElementById('btnVatHT').className = !showVatIncluded ? 'btn btn-primary btn-sm' : 'btn btn-outline btn-sm';
  document.getElementById('btnVatTTC').className = showVatIncluded ? 'btn btn-primary btn-sm' : 'btn btn-outline btn-sm';
  recalculateMain(false);
}


function setIntermediateWall(val) {
  document.getElementById('inputWall').value = val;
  onWallManualInput();
}

// ==================== 10. FIREBASE CLOUD FIRESTORE (hesaplama-umitck) ====================

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyDpAloc8LEM_540I6ENVK2CsB9dTGihlkc',
  authDomain: 'hesaplama-umitck.firebaseapp.com',
  projectId: 'hesaplama-umitck',
  storageBucket: 'hesaplama-umitck.firebasestorage.app',
  messagingSenderId: '1018538108398',
  appId: '1:1018538108398:web:925af6fc7327bc6fab9aff'
};

let firestoreDb = null;
let firebaseConnected = false;
let suppressCloudEcho = false;

function initFirebaseConnection() {
  const fbBadge = document.getElementById('firebaseStatusBadge');
  try {
    if (typeof firebase === 'undefined' || !firebase.firestore) {
      if (fbBadge) {
        fbBadge.className = 'badge badge-amber';
        fbBadge.innerText = '☁️ Yerel Mod';
      }
      return;
    }

    if (!firebase.apps.length) {
      firebase.initializeApp(FIREBASE_CONFIG);
    }
    firestoreDb = firebase.firestore();

    // Çevrimdışı Firestore Önbelleği (Offline Persistence)
    firestoreDb.enablePersistence({ synchronizeTabs: true }).catch(() => {});

    firebaseConnected = true;
    updateFirebaseBadgeUI(navigator.onLine);

    // 1) Yönetici Master Konfigürasyon Canlı Dinleyicisi (erp_config/master)
    firestoreDb.collection('erp_config').doc('master').onSnapshot((docSnap) => {
      if (!docSnap.exists || suppressCloudEcho) return;
      const data = docSnap.data();
      if (data && data.settings) {
        settings = { ...cloneObj(DEFAULT_SETTINGS), ...data.settings };
      }
      if (data && Array.isArray(data.molds) && data.molds.length > 0) {
        molds = data.molds;
      }
      if (data && Array.isArray(data.users) && data.users.length > 0) {
        users = data.users;
        const foundMe = users.find((u) => u.id === currentUser.id);
        if (foundMe) currentUser = foundMe;
      }
      if (data && data.rolePermissions) {
        rolePermissions = { ...cloneObj(DEFAULT_PERMISSIONS), ...data.rolePermissions };
      }
      saveLocalMasterCache();
      refreshAllViewsAfterConfigUpdate();
    }, () => {
      updateFirebaseBadgeUI(false);
    });

    // 2) Bulut Teklifler (quotes) Canlı Dinleyicisi
    firestoreDb.collection('quotes').orderBy('createdAt', 'desc').limit(35).onSnapshot((snap) => {
      const cloudList = [];
      snap.forEach((d) => cloudList.push({ id: d.id, ...d.data(), _cloud: true }));
      if (cloudList.length > 0) {
        savedQuotes = cloudList;
        try { localStorage.setItem('umitck_v5_quotes_archive', JSON.stringify(savedQuotes)); } catch (e) {}
        renderSavedQuotesArchive();
      }
      updateFirebaseBadgeUI(navigator.onLine);
    }, () => {});
  } catch (err) {
    console.warn('Firebase başlatma uyarısı:', err);
    firebaseConnected = false;
    updateFirebaseBadgeUI(false);
  }
}

function updateFirebaseBadgeUI(isOnline) {
  const fbBadge = document.getElementById('firebaseStatusBadge');
  if (!fbBadge) return;
  if (firebaseConnected && isOnline) {
    fbBadge.className = 'badge badge-emerald';
    fbBadge.innerText = '☁️ Firebase Canlı';
  } else if (firebaseConnected && !isOnline) {
    fbBadge.className = 'badge badge-amber';
    fbBadge.innerText = '☁️ Firebase Çevrimdışı Önbellek';
  } else {
    fbBadge.className = 'badge badge-neutral';
    fbBadge.innerText = '💾 Yerel Hafıza';
  }
}

async function syncMasterConfigToFirebase() {
  saveLocalMasterCache();
  if (!firebaseConnected || !firestoreDb) return;
  try {
    suppressCloudEcho = true;
    await firestoreDb.collection('erp_config').doc('master').set({
      settings,
      molds,
      users,
      rolePermissions,
      updatedAt: new Date().toISOString(),
      updatedBy: currentUser ? currentUser.name : 'Admin'
    }, { merge: true });
    setTimeout(() => { suppressCloudEcho = false; }, 800);
  } catch (err) {
    suppressCloudEcho = false;
    console.warn('Firestore master sync kuyruğa alındı:', err);
  }
}

// ==================== 11. MÜŞTERİ TEKLİF & SİPARİŞ MERKEZİ (DEVIS) ====================

function addCurrentToQuote() {
  if (!hasPerm('viewPrices')) {
    showToast('Bu rolde teklif oluşturma yetkisi kapalıdır.', true);
    return;
  }
  const c = computeCurrentState();
  if (c.totalWeight <= 0) {
    showToast('Lütfen geçerli ölçü ve miktar girin.', true);
    return;
  }
  if (c.belowFloor && !hasPerm('bypassFloor')) {
    showToast(`Taban fiyat (${fmt(settings.minFloorKgPrice, 2)} ${c.currency}/kg) altında teklif eklenemez!`, true);
    return;
  }

  quoteItems.push({
    id: Date.now() + Math.floor(Math.random() * 1000),
    lineTag: c.lineTag,
    specLabel: c.specLabel,
    stripWidth: c.stripWidth,
    wall: c.wall,
    length: c.length,
    pcsPerBundle: c.pcsPerBundle,
    totalPieces: c.totalPieces,
    weightPerPiece: c.weightPerPiece,
    totalWeight: c.totalWeight,
    totalMeters: c.totalMeters,
    pricingBasis: c.pricingBasis,
    kgPrice: c.netKgPrice,
    pricePerPiece: c.netPiecePrice,
    discountPct: c.discountPct,
    subTotalPrice: c.netSubTotalHT,
    currency: c.currency
  });

  saveAppState();
  renderQuoteView();
  showToast(`✅ ${c.specLabel} (${c.totalPieces} Boy) teklife eklendi.`);
}

function updateQuoteItemQty(itemId, newTotalPieces) {
  const item = quoteItems.find((x) => x.id === itemId);
  if (!item) return;
  const pcs = Math.max(1, parseInt(newTotalPieces) || 1);
  item.totalPieces = pcs;
  item.totalMeters = pcs * (item.length || 6);
  item.totalWeight = pcs * (item.weightPerPiece || 0);
  if (item.pricingBasis === 'PIECE') {
    item.subTotalPrice = pcs * (item.pricePerPiece || 0);
  } else {
    item.subTotalPrice = item.totalWeight * (item.kgPrice || 0);
  }
  saveAppState();
  renderQuoteView();
}

function updateQuoteItemUnitPrice(itemId, val, mode) {
  if (!hasPerm('editPrices')) {
    renderQuoteView();
    showToast('Fiyat düzenleme yetkiniz yok.', true);
    return;
  }
  const item = quoteItems.find((x) => x.id === itemId);
  if (!item) return;
  const num = Math.max(0, parseFloat(val) || 0);
  if (mode === 'PIECE') {
    item.pricingBasis = 'PIECE';
    item.pricePerPiece = num;
    item.kgPrice = item.weightPerPiece > 0 ? (num / item.weightPerPiece) : 0;
    item.subTotalPrice = item.totalPieces * num;
  } else {
    item.pricingBasis = 'KG';
    item.kgPrice = num;
    item.pricePerPiece = (item.weightPerPiece || 0) * num;
    item.subTotalPrice = item.totalWeight * num;
  }
  saveAppState();
  renderQuoteView();
}

function removeQuoteItem(itemId) {
  quoteItems = quoteItems.filter((x) => x.id !== itemId);
  saveAppState();
  renderQuoteView();
}

function clearQuoteItems() {
  if (!quoteItems.length) return;
  quoteItems = [];
  saveAppState();
  renderQuoteView();
  showToast('Teklif listesi temizlendi.');
}

function onQuoteVatInput() {
  const v = Math.max(0, parseFloat(document.getElementById('quoteVatRate').value) || 0);
  settings.defaultVatRate = v;
  recalculateMain(false);
  renderQuoteView();
}

function computeQuoteTotals() {
  const currency = document.getElementById('selectCurrency').value || settings.defaultCurrency || 'DA';
  const globalDiscPct = Math.max(0, parseFloat(document.getElementById('quoteGlobalDiscount').value) || 0);
  const vatRate = Math.max(0, parseFloat(document.getElementById('quoteVatRate').value) || 0);

  let totalPieces = 0;
  let totalBundles = 0;
  let totalMeters = 0;
  let totalWeight = 0;
  let rawHT = 0;

  quoteItems.forEach((it) => {
    totalPieces += Number(it.totalPieces) || 0;
    totalBundles += (Number(it.totalPieces) || 0) / Math.max(1, Number(it.pcsPerBundle) || 1);
    totalMeters += Number(it.totalMeters) || ((Number(it.totalPieces) || 0) * (Number(it.length) || 6));
    totalWeight += Number(it.totalWeight) || 0;
    rawHT += Number(it.subTotalPrice) || 0;
  });

  const discAmount = rawHT * (globalDiscPct / 100);
  const netHT = rawHT - discAmount;
  const vatAmount = netHT * (vatRate / 100);
  const grandTTC = netHT + vatAmount;

  return {
    currency,
    globalDiscPct,
    vatRate,
    totalPieces,
    totalBundles,
    totalMeters,
    totalWeight,
    rawHT,
    discAmount,
    netHT,
    vatAmount,
    grandTTC
  };
}

function renderQuoteView() {
  const count = quoteItems.length;
  document.getElementById('dBadgeQuote').innerText = count;
  const mBadge = document.getElementById('mBadgeQuote');
  mBadge.innerText = count;
  mBadge.classList.toggle('hidden', count === 0);

  const listEl = document.getElementById('quoteItemsList');
  if (count === 0) {
    listEl.innerHTML = `
      <div style="text-align:center;padding:28px 14px;border:1px dashed var(--border-strong);border-radius:10px;color:var(--text-muted);font-size:0.84rem;">
        Henüz teklif listesine ürün eklenmedi.<br>
        <b>Hesap & Fiyat</b> sekmesinden profil seçip <b>"Siparişe / Teklif Listesine Ekle"</b> butonuna basın.
      </div>
    `;
  } else {
    listEl.innerHTML = quoteItems.map((it, idx) => {
      const fullBags = Math.floor(it.totalPieces / Math.max(1, it.pcsPerBundle || 1));
      const remPcs = it.totalPieces % Math.max(1, it.pcsPerBundle || 1);
      const bagTxt = fullBags > 0 ? `${fullBags} Bağ${remPcs > 0 ? ` + ${remPcs} Boy` : ''}` : `${it.totalPieces} Açık Boy`;
      const basisBadge = it.pricingBasis === 'PIECE'
        ? '<span class="badge badge-blue">BOY BAZLI</span>'
        : '<span class="badge badge-emerald">KG BAZLI</span>';

      return `
        <div style="background:var(--surface-alt);border:1px solid var(--border);border-radius:10px;padding:10px 12px;">
          <div class="row-between" style="margin-bottom:6px;">
            <div class="row-wrap">
              <span class="badge badge-neutral mono">#${idx + 1}</span>
              <strong style="font-size:0.9rem;">${escapeHtml(it.specLabel)} (${it.length || 6}m)</strong>
              <span class="badge badge-amber mono">Bant: ${it.stripWidth}mm</span>
              ${basisBadge}
            </div>
            <button onclick="removeQuoteItem(${it.id})" class="btn btn-danger btn-sm" title="Kalemi Sil">✕</button>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(125px,1fr));gap:8px;align-items:center;font-size:0.78rem;">
            <div>
              <span class="text-muted">Miktar (Boy):</span>
              <div style="display:flex;align-items:center;gap:4px;margin-top:2px;">
                <input type="number" value="${it.totalPieces}" min="1" onchange="updateQuoteItemQty(${it.id}, this.value)" class="mono" style="width:74px;padding:4px 6px;border:1px solid var(--border-strong);border-radius:6px;background:var(--surface);font-weight:800;">
                <span class="text-muted">(${bagTxt})</span>
              </div>
            </div>
            <div>
              <span class="text-muted">Kantar Ağırlığı:</span>
              <div class="mono fw-800" style="margin-top:2px;">${fmt(it.totalWeight, 2)} kg</div>
            </div>
            <div>
              <span class="text-muted">Kg Fiyatı (${it.currency}):</span>
              <input type="number" value="${roundDec(it.kgPrice, 2)}" step="0.5" onchange="updateQuoteItemUnitPrice(${it.id}, this.value, 'KG')" class="mono" style="width:92px;padding:4px 6px;border:1px solid var(--border);border-radius:6px;background:var(--surface);font-weight:700;margin-top:2px;">
            </div>
            <div>
              <span class="text-muted">1 Boy Fiyatı (${it.currency}):</span>
              <input type="number" value="${roundDec(it.pricePerPiece, 2)}" step="1" onchange="updateQuoteItemUnitPrice(${it.id}, this.value, 'PIECE')" class="mono" style="width:98px;padding:4px 6px;border:1px solid var(--border);border-radius:6px;background:var(--surface);font-weight:700;margin-top:2px;">
            </div>
            <div style="text-align:right;">
              <span class="text-muted">Tutar (HT):</span>
              <div class="mono fw-800 text-emerald" style="font-size:0.95rem;margin-top:2px;">${fmt(it.subTotalPrice, 2)} ${it.currency}</div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  const t = computeQuoteTotals();
  document.getElementById('qSumQty').innerText = `${count} Kalem (${fmt(t.totalBundles, 1)} Bağ / ${t.totalPieces} Boy)`;
  document.getElementById('qSumMeters').innerText = `${fmt(t.totalMeters, 0)} Metre`;
  document.getElementById('qSumWeight').innerText = `${fmt(t.totalWeight, 2)} kg (${fmt(t.totalWeight / 1000, 2)} Ton)`;
  document.getElementById('qSumHT').innerText = `${fmt(t.netHT, 2)} ${t.currency}`;

  const discRow = document.getElementById('qRowDiscount');
  if (t.discAmount > 0) {
    discRow.classList.remove('hidden');
    document.getElementById('qSumDiscount').innerText = `-${fmt(t.discAmount, 2)} ${t.currency}`;
  } else {
    discRow.classList.add('hidden');
  }

  document.getElementById('qLblVat').innerText = `Vergi / TVA (%${t.vatRate}):`;
  document.getElementById('qSumVat').innerText = `${fmt(t.vatAmount, 2)} ${t.currency}`;
  document.getElementById('qSumTTC').innerText = `${fmt(t.grandTTC, 2)} ${t.currency}`;

  // Çoklu döviz karşılığı bilgi satırı
  if (t.currency === 'DA' && t.grandTTC > 0 && settings.rateUSD > 0 && settings.rateEUR > 0) {
    document.getElementById('qMultiCurrencyHint').innerText =
      `Yaklaşık: $${fmt(t.grandTTC / settings.rateUSD, 2)} USD  |  €${fmt(t.grandTTC / settings.rateEUR, 2)} EUR`;
  } else {
    document.getElementById('qMultiCurrencyHint').innerText = '';
  }
}

function buildQuoteText(lang = 'TR') {
  const cust = document.getElementById('quoteCustName').value.trim() || (lang === 'FR' ? 'Client' : 'Sayın Müşterimiz');
  const loc = document.getElementById('quoteCustLocation').value.trim();
  const phone = document.getElementById('quoteCustPhone').value.trim();
  const t = computeQuoteTotals();
  const dateStr = new Date().toLocaleDateString(lang === 'FR' ? 'fr-DZ' : 'tr-TR');

  const lines = [];
  if (lang === 'FR') {
    lines.push(`🏢 *${settings.companyLegal || settings.brandName} — DEVIS*`);
    lines.push(`👤 *Client:* ${cust}`);
    if (loc) lines.push(`📍 *Wilaya / Livraison:* ${loc}`);
    if (phone) lines.push(`📞 *Contact:* ${phone}`);
    lines.push(`📅 *Date:* ${dateStr}`);
    lines.push(`--------------------------------`);
    quoteItems.forEach((it, idx) => {
      const bags = Math.floor(it.totalPieces / Math.max(1, it.pcsPerBundle || 1));
      const modeStr = it.pricingBasis === 'PIECE' ? `${fmt(it.pricePerPiece, 2)} ${t.currency}/Barre` : `${fmt(it.kgPrice, 2)} ${t.currency}/kg`;
      lines.push(`*${idx + 1}. ${it.specLabel} (${it.length || 6}m)*`);
      lines.push(`   • Qté: *${it.totalPieces} Barres* (${bags} Fardeaux) | Poids: ${fmt(it.totalWeight, 2)} kg`);
      lines.push(`   • Prix: ${modeStr} → *HT: ${fmt(it.subTotalPrice, 2)} ${t.currency}*`);
    });
    lines.push(`--------------------------------`);
    lines.push(`⚖️ *POIDS TOTAL:* ${fmt(t.totalWeight, 2)} kg (${fmt(t.totalWeight / 1000, 2)} T)`);
    lines.push(`💵 *TOTAL HT:* ${fmt(t.netHT, 2)} ${t.currency}`);
    lines.push(`🧾 *TVA (${t.vatRate}%):* ${fmt(t.vatAmount, 2)} ${t.currency}`);
    lines.push(`💰 *TOTAL TTC:* *${fmt(t.grandTTC, 2)} ${t.currency}*`);
  } else {
    lines.push(`🏢 *${settings.companyLegal || settings.brandName} — FİYAT TEKLİFİ*`);
    lines.push(`👤 *Müşteri:* ${cust}`);
    if (loc) lines.push(`📍 *Sevk / Bölge:* ${loc}`);
    if (phone) lines.push(`📞 *İletişim / Not:* ${phone}`);
    lines.push(`📅 *Tarih:* ${dateStr}`);
    lines.push(`--------------------------------`);
    quoteItems.forEach((it, idx) => {
      const bags = Math.floor(it.totalPieces / Math.max(1, it.pcsPerBundle || 1));
      const basisInfo = it.pricingBasis === 'PIECE'
        ? `1 Boy: ${fmt(it.pricePerPiece, 2)} ${t.currency}`
        : `1 Kg: ${fmt(it.kgPrice, 2)} ${t.currency}`;
      lines.push(`*${idx + 1}. ${it.specLabel} (${it.length || 6}m)*`);
      lines.push(`   • Miktar: *${it.totalPieces} Boy* (${bags} Bağ) | Bant: ${it.stripWidth}mm`);
      lines.push(`   • Tonaj: ${fmt(it.totalWeight, 2)} kg | ${basisInfo}`);
      lines.push(`   • *Tutar (HT): ${fmt(it.subTotalPrice, 2)} ${t.currency}*`);
    });
    lines.push(`--------------------------------`);
    lines.push(`⚖️ *TOPLAM TONAJ:* ${fmt(t.totalWeight, 2)} kg (${fmt(t.totalWeight / 1000, 2)} Ton)`);
    lines.push(`💵 *ARA TOPLAM (HT):* ${fmt(t.netHT, 2)} ${t.currency}`);
    lines.push(`🧾 *KDV / TVA (%${t.vatRate}):* ${fmt(t.vatAmount, 2)} ${t.currency}`);
    lines.push(`💰 *GENEL TOPLAM (TTC):* *${fmt(t.grandTTC, 2)} ${t.currency}*`);
  }
  if (settings.quoteFooter) lines.push(`\n_${settings.quoteFooter}_`);
  return lines.join('\n');
}

function shareQuoteWhatsApp(lang = 'TR') {
  if (!quoteItems.length) {
    showToast('Önce teklif listesine en az 1 kalem ekleyin.', true);
    return;
  }
  const txt = buildQuoteText(lang);
  window.open(`https://wa.me/?text=${encodeURIComponent(txt)}`, '_blank');
}

function quickShareSingleCalc() {
  const c = computeCurrentState();
  const lines = [
    `🏢 *${settings.brandName} — HIZLI FİYAT & AĞIRLIK*`,
    `🔩 *Profil:* ${c.specLabel} (${c.length}m) • Bant: ${c.stripWidth}mm`,
    `📦 *Miktar:* ${c.totalPieces} Boy (${Math.floor(c.totalPieces / c.pcsPerBundle)} Bağ)`,
    `⚖️ *1 Boy:* ${fmt(c.weightPerPiece, 2)} kg | *Toplam:* ${fmt(c.totalWeight, 2)} kg (${fmt(c.totalWeight / 1000, 2)} Ton)`,
    `💰 *1 Kg:* ${fmt(c.netKgPrice, 2)} ${c.currency} | *1 Boy:* ${fmt(c.netPiecePrice, 2)} ${c.currency}`,
    `💵 *Toplam HT:* ${fmt(c.netSubTotalHT, 2)} ${c.currency}`,
    `🧾 *Toplam TTC (%${c.vatRate}):* *${fmt(c.grandTotalTTC, 2)} ${c.currency}*`
  ];
  window.open(`https://wa.me/?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
}

function copyQuoteClipboard() {
  if (!quoteItems.length) {
    showToast('Kopyalanacak teklif listesi boş!', true);
    return;
  }
  const txt = buildQuoteText('TR');
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(txt).then(() => showToast('Teklif metni panoya kopyalandı.'));
  } else {
    const ta = document.createElement('textarea');
    ta.value = txt;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('Teklif metni panoya kopyalandı.');
  }
}

async function archiveCurrentQuote() {
  if (!quoteItems.length) {
    showToast('Kaydedilecek teklif listesi boş!', true);
    return;
  }
  const custName = document.getElementById('quoteCustName').value.trim() || 'İsimsiz Müşteri';
  const custNote = document.getElementById('quoteCustLocation').value.trim();
  const custPhone = document.getElementById('quoteCustPhone').value.trim();
  const t = computeQuoteTotals();

  const record = {
    title: `${custName} - ${quoteItems.length} Kalem`,
    custName,
    custNote,
    custPhone,
    currency: t.currency,
    totalWeight: roundDec(t.totalWeight, 2),
    subTotal: roundDec(t.netHT, 2),
    grandTotal: roundDec(t.grandTTC, 2),
    totalPieces: t.totalPieces,
    itemsCount: quoteItems.length,
    quoteItems: cloneObj(quoteItems),
    createdBy: currentUser ? currentUser.name : 'Sistem',
    createdAt: new Date().toISOString(),
    createdAtFormatted: new Date().toLocaleDateString('tr-TR', {
      day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
    })
  };

  if (firebaseConnected && firestoreDb) {
    try {
      await firestoreDb.collection('quotes').add(record);
      showToast('☁️ Teklif Firebase Bulut ve Çevrimdışı Arşive kaydedildi!');
      return;
    } catch (e) {
      console.warn('Firestore quote kayıt hatası, yerel yedekleniyor:', e);
    }
  }

  record.id = 'local_' + Date.now();
  savedQuotes.unshift(record);
  try { localStorage.setItem('umitck_v5_quotes_archive', JSON.stringify(savedQuotes)); } catch (e) {}
  renderSavedQuotesArchive();
  showToast('💾 Teklif çevrimdışı arşive kaydedildi.');
}

function renderSavedQuotesArchive() {
  document.getElementById('savedQuotesCount').innerText = savedQuotes.length;
  const box = document.getElementById('savedQuotesList');
  if (!savedQuotes.length) {
    box.innerHTML = `<div style="font-size:0.78rem;color:var(--text-muted);text-align:center;padding:14px;">Henüz arşivlenmiş teklif bulunmuyor.</div>`;
    return;
  }
  box.innerHTML = savedQuotes.map((q) => `
    <div style="padding:9px 11px;border-radius:8px;background:var(--surface-alt);border:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;gap:8px;">
      <div style="min-width:0;">
        <div style="font-weight:800;font-size:0.82rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
          ${q._cloud ? '☁️ ' : '💾 '}${escapeHtml(q.custName || q.title || 'Müşteri')}
        </div>
        <div class="mono text-muted" style="font-size:0.71rem;">
          ${q.itemsCount || (q.quoteItems ? q.quoteItems.length : 0)} Kalem • ${fmt(q.totalWeight || 0, 0)} kg • <b class="text-emerald">${fmt(q.grandTotal || q.subTotal || 0, 0)} ${escapeHtml(q.currency || 'DA')}</b>
        </div>
        <div class="mono text-muted" style="font-size:0.67rem;">${escapeHtml(q.createdAtFormatted || '')}</div>
      </div>
      <div class="row-wrap" style="flex-shrink:0;">
        <button onclick="restoreSavedQuote('${q.id}')" class="btn btn-primary btn-sm">Yükle</button>
        <button onclick="deleteSavedQuote('${q.id}')" class="btn btn-danger btn-sm">Sil</button>
      </div>
    </div>
  `).join('');
}

function restoreSavedQuote(qId) {
  const found = savedQuotes.find((x) => String(x.id) === String(qId));
  if (!found || !Array.isArray(found.quoteItems)) return;
  quoteItems = cloneObj(found.quoteItems);
  document.getElementById('quoteCustName').value = found.custName || '';
  document.getElementById('quoteCustLocation').value = found.custNote || '';
  document.getElementById('quoteCustPhone').value = found.custPhone || '';
  if (found.currency) document.getElementById('selectCurrency').value = found.currency;
  saveAppState();
  renderQuoteView();
  showToast(`"${found.custName || 'Teklif'}" listeye yüklendi.`);
}

async function deleteSavedQuote(qId) {
  if (firebaseConnected && firestoreDb && !String(qId).startsWith('local_')) {
    try {
      await firestoreDb.collection('quotes').doc(String(qId)).delete();
    } catch (e) {}
  }
  savedQuotes = savedQuotes.filter((x) => String(x.id) !== String(qId));
  try { localStorage.setItem('umitck_v5_quotes_archive', JSON.stringify(savedQuotes)); } catch (e) {}
  renderSavedQuotesArchive();
  showToast('Kayıtlı teklif silindi.');
}

function printFormalQuote() {
  if (!quoteItems.length) {
    showToast('Yazdırılacak teklif listesi boş!', true);
    return;
  }
  const cust = document.getElementById('quoteCustName').value.trim() || 'Sayın Müşterimiz';
  const loc = document.getElementById('quoteCustLocation').value.trim() || '-';
  const phone = document.getElementById('quoteCustPhone').value.trim() || '-';
  const t = computeQuoteTotals();

  const rowsHtml = quoteItems.map((it, i) => {
    const bags = Math.floor(it.totalPieces / Math.max(1, it.pcsPerBundle || 1));
    return `
      <tr>
        <td style="text-align:center;">${i + 1}</td>
        <td><b>${escapeHtml(it.specLabel)}</b> (${it.length || 6}m)<br><small>${escapeHtml(it.lineTag)} • Bant: ${it.stripWidth}mm</small></td>
        <td style="text-align:center;">${it.pricingBasis === 'PIECE' ? 'Boy' : 'KG'}</td>
        <td style="text-align:right;">${it.totalPieces} Boy (${bags} Bağ)</td>
        <td style="text-align:right;">${fmt(it.weightPerPiece, 2)} kg</td>
        <td style="text-align:right;"><b>${fmt(it.totalWeight, 2)} kg</b></td>
        <td style="text-align:right;">${fmt(it.kgPrice, 2)} ${t.currency}</td>
        <td style="text-align:right;">${fmt(it.pricePerPiece, 2)} ${t.currency}</td>
        <td style="text-align:right;"><b>${fmt(it.subTotalPrice, 2)} ${t.currency}</b></td>
      </tr>
    `;
  }).join('');

  const printEl = document.getElementById('printDocument');
  printEl.innerHTML = `
    <div style="display:flex;justify-content:space-between;border-bottom:2px solid #0f172a;padding-bottom:10px;">
      <div>
        <h1 style="font-size:20px;margin:0;">${escapeHtml(settings.companyLegal || settings.brandName)}</h1>
        <div style="font-size:11px;color:#475569;margin-top:3px;">${escapeHtml(settings.companyAddress || '')} ${settings.companyPhone ? '• Tel: ' + escapeHtml(settings.companyPhone) : ''}</div>
        ${settings.companyTaxId ? `<div style="font-size:11px;color:#475569;">Vergi / RC / NIF: ${escapeHtml(settings.companyTaxId)}</div>` : ''}
      </div>
      <div style="text-align:right;">
        <h2 style="font-size:16px;margin:0;color:#1d4ed8;">PROFORMA / FİYAT TEKLİFİ (DEVIS)</h2>
        <div style="font-size:11px;margin-top:4px;">Tarih: <b>${new Date().toLocaleDateString('tr-TR')}</b></div>
      </div>
    </div>
    <div style="margin-top:10px;padding:8px 10px;background:#f8fafc;border:1px solid #cbd5e1;font-size:12px;display:flex;justify-content:space-between;">
      <div><b>Müşteri / Firma:</b> ${escapeHtml(cust)}</div>
      <div><b>Sevk / Wilaya:</b> ${escapeHtml(loc)}</div>
      <div><b>İletişim / Not:</b> ${escapeHtml(phone)}</div>
    </div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Profil / Ölçü</th>
          <th>Baz</th>
          <th>Miktar</th>
          <th>1 Boy Kg</th>
          <th>Toplam Kg</th>
          <th>Kg Fiyatı</th>
          <th>1 Boy Fiyatı</th>
          <th>Tutar (HT)</th>
        </tr>
      </thead>
      <tbody>${rowsHtml}</tbody>
    </table>
    <div style="margin-top:14px;display:flex;justify-content:space-between;align-items:flex-start;">
      <div style="font-size:11px;max-width:55%;color:#334155;">
        <b>Notlar & Şartlar:</b><br>${escapeHtml(settings.quoteFooter || '')}
      </div>
      <div style="width:280px;border:1px solid #94a3b8;padding:10px;font-size:12px;">
        <div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span>Toplam Tonaj:</span><b>${fmt(t.totalWeight, 2)} kg (${fmt(t.totalWeight / 1000, 2)} T)</b></div>
        <div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span>Ara Toplam (HT):</span><b>${fmt(t.netHT, 2)} ${t.currency}</b></div>
        <div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span>KDV / TVA (%${t.vatRate}):</span><b>${fmt(t.vatAmount, 2)} ${t.currency}</b></div>
        <div style="display:flex;justify-content:space-between;border-top:1px solid #0f172a;padding-top:5px;font-size:14px;"><b>GENEL TOPLAM (TTC):</b><b>${fmt(t.grandTTC, 2)} ${t.currency}</b></div>
      </div>
    </div>
  `;
  window.print();
}

function exportQuoteExcel() {
  if (!quoteItems.length) {
    showToast('Excel çıktısı için önce teklife kalem ekleyin.', true);
    return;
  }
  const cust = document.getElementById('quoteCustName').value.trim() || 'Musteri';
  const t = computeQuoteTotals();

  const rows = [
    [settings.companyLegal || settings.brandName, '', '', '', '', '', '', '', ''],
    ['Müşteri:', cust, 'Tarih:', new Date().toLocaleDateString('tr-TR'), 'Para Birimi:', t.currency, '', '', ''],
    [],
    ['Sıra', 'Hat / Kalıp', 'Profil Ölçüsü', 'Boy (m)', 'Bant (mm)', 'Fiyat Bazı', 'Toplam Boy', '1 Boy Kg', 'Toplam Kg', `Kg Fiyatı (${t.currency})`, `Boy Fiyatı (${t.currency})`, `Tutar HT (${t.currency})`]
  ];

  quoteItems.forEach((it, idx) => {
    rows.push([
      idx + 1,
      it.lineTag,
      it.specLabel,
      it.length || 6,
      it.stripWidth,
      it.pricingBasis === 'PIECE' ? 'BOY BAZLI' : 'KG BAZLI',
      it.totalPieces,
      roundDec(it.weightPerPiece, 3),
      roundDec(it.totalWeight, 2),
      roundDec(it.kgPrice, 2),
      roundDec(it.pricePerPiece, 2),
      roundDec(it.subTotalPrice, 2)
    ]);
  });

  rows.push([]);
  rows.push(['', '', 'TOPLAM TONAJ (KG):', '', '', '', t.totalPieces, '', roundDec(t.totalWeight, 2), 'TOTAL HT:', '', roundDec(t.netHT, 2)]);
  rows.push(['', '', '', '', '', '', '', '', '', `TVA / KDV (%${t.vatRate}):`, '', roundDec(t.vatAmount, 2)]);
  rows.push(['', '', '', '', '', '', '', '', '', 'TOTAL TTC:', '', roundDec(t.grandTTC, 2)]);

  exportArrayToSpreadsheet(rows, `Teklif_${cust.replace(/\s+/g, '_')}.xlsx`, 'Teklif_Devis');
}

// ==================== 12. ALGORİTMİK ÇOKLU DİLME & DP MİNİMUM FİRE MOTORU ====================

/**
 * Verilen sac kalınlığı için uygun hattaki kalıpları aynı bant genişliğine göre gruplar.
 * Örn: 3.7mm için 60x60, 80x40, 70x50 aynı 76,1Ø kalıpta aynı 233.5/233mm bandı kullanır!
 */
function getGroupedCandidatesForThickness(thickness) {
  const max63 = settings.max63Wall || 2.9;
  const targetLine = thickness <= max63 ? '63' : '140';
  const lineMolds = molds.filter((m) => m.line === targetLine);

  const byStrip = new Map();
  lineMolds.forEach((m) => {
    const res = resolveAlgorithmicStrip(m, thickness);
    const w = res.strip;
    if (w <= 10) return;
    const key = String(w);
    if (!byStrip.has(key)) {
      byStrip.set(key, {
        strip: w,
        line: m.line,
        primaryMoldId: m.id,
        kalip: m.kalip,
        defaultBag: m.defaultBag,
        labels: [m.label.replace(/\s*\((63H|140H)\)/g, '')]
      });
    } else {
      const grp = byStrip.get(key);
      const cleanL = m.label.replace(/\s*\((63H|140H)\)/g, '');
      if (!grp.labels.includes(cleanL)) grp.labels.push(cleanL);
    }
  });

  return Array.from(byStrip.values())
    .map((g) => ({
      ...g,
      groupLabel: g.labels.slice(0, 3).join(' / ')
    }))
    .sort((a, b) => b.strip - a.strip);
}

/**
 * Dinamik Kombinatoryal Kesim Optimizasyonu (1, 2 veya 3 farklı bant kombinasyonu)
 * Rulo net genişliğinde minimum fire (mm) bırakan en yüksek verimli reçeteleri bulur.
 */
function findOptimalSlitRecipes(netCoilMm, thickness, focusStripMm = null) {
  const groups = getGroupedCandidatesForThickness(thickness);
  if (!groups.length || netCoilMm < 40) return [];

  const recipes = [];
  const seenKeys = new Set();

  function pushRecipe(bands) {
    const clean = bands.filter((b) => b.count > 0);
    if (!clean.length) return;
    const used = roundDec(clean.reduce((s, b) => s + b.strip * b.count, 0), 2);
    if (used > netCoilMm + 0.001 || used <= 0) return;
    const scrap = roundDec(netCoilMm - used, 2);
    const sig = clean
      .slice()
      .sort((a, b) => b.strip - a.strip)
      .map((b) => `${b.count}x${b.strip}`)
      .join('+');
    if (seenKeys.has(sig)) return;
    seenKeys.add(sig);
    recipes.push({
      bands: clean,
      usedMm: used,
      scrapMm: scrap,
      yieldPct: roundDec((used / netCoilMm) * 100, 2)
    });
  }

  // A) Seçili odak bant varsa: odak bandın dilim sayısını [1 .. maxFit] arası değiştirip en iyi 1 veya 2 yan bandı bul!
  if (focusStripMm && focusStripMm >= 20 && focusStripMm <= netCoilMm) {
    const focusGrp = groups.find((g) => Math.abs(g.strip - focusStripMm) < 0.2) || {
      strip: focusStripMm,
      line: thickness <= (settings.max63Wall || 2.9) ? '63' : '140',
      primaryMoldId: '',
      groupLabel: `${focusStripMm}mm Ana Bant`,
      defaultBag: 30
    };
    const maxMain = Math.floor(netCoilMm / focusStripMm);
    const minMain = Math.max(1, maxMain - 4);

    for (let c1 = maxMain; c1 >= minMain; c1--) {
      const rem1 = roundDec(netCoilMm - c1 * focusStripMm, 2);
      pushRecipe([{ ...focusGrp, count: c1 }]);

      groups.forEach((g2) => {
        if (Math.abs(g2.strip - focusStripMm) < 0.1) return;
        if (g2.strip <= rem1) {
          const maxC2 = Math.floor(rem1 / g2.strip);
          for (let c2 = maxC2; c2 >= Math.max(1, maxC2 - 1); c2--) {
            const rem2 = roundDec(rem1 - c2 * g2.strip, 2);
            pushRecipe([{ ...focusGrp, count: c1 }, { ...g2, count: c2 }]);
            if (rem2 >= 40) {
              groups.forEach((g3) => {
                if (g3.strip <= rem2 && Math.abs(g3.strip - g2.strip) > 0.1 && Math.abs(g3.strip - focusStripMm) > 0.1) {
                  const c3 = Math.floor(rem2 / g3.strip);
                  if (c3 > 0) {
                    pushRecipe([{ ...focusGrp, count: c1 }, { ...g2, count: c2 }, { ...g3, count: c3 }]);
                  }
                }
              });
            }
          }
        }
      });
    }
  }

  // B) Genel En Yüksek Verimli 1'li ve 2'li Kombinasyon Taraması
  for (let i = 0; i < groups.length; i++) {
    const g1 = groups[i];
    if (g1.strip > netCoilMm) continue;
    const max1 = Math.floor(netCoilMm / g1.strip);
    pushRecipe([{ ...g1, count: max1 }]);

    for (let c1 = max1; c1 >= Math.max(1, max1 - 3); c1--) {
      const rem = roundDec(netCoilMm - c1 * g1.strip, 2);
      for (let j = i + 1; j < groups.length; j++) {
        const g2 = groups[j];
        if (g2.strip <= rem) {
          const c2 = Math.floor(rem / g2.strip);
          if (c2 > 0) pushRecipe([{ ...g1, count: c1 }, { ...g2, count: c2 }]);
        }
      }
    }
  }

  recipes.sort((a, b) => {
    if (Math.abs(a.scrapMm - b.scrapMm) > 0.05) return a.scrapMm - b.scrapMm;
    return a.bands.length - b.bands.length;
  });

  return recipes.slice(0, 6);
}

function populateSlitDropdown() {
  const sel = document.getElementById('slitMoldSelect');
  if (!sel) return;
  sel.innerHTML = molds.map((m) =>
    `<option value="${m.id}">[${m.line}H • ${escapeHtml(m.kalip)}] ${escapeHtml(m.label)}</option>`
  ).join('');
  if (activeMold) sel.value = activeMold.id;
  onSlitMoldSelectChange();
}

function onSlitMoldSelectChange() {
  const mId = document.getElementById('slitMoldSelect').value;
  const m = molds.find((x) => x.id === mId);
  if (!m) return;
  const t = parseFloat(document.getElementById('slitThickness').value) || 2.0;
  const res = resolveAlgorithmicStrip(m, t);
  document.getElementById('slitBandWidthInput').value = res.strip;
  renderSlitWorkspace();
}

function onSlitThicknessInput() {
  const t = parseFloat(document.getElementById('slitThickness').value) || 2.0;
  const mId = document.getElementById('slitMoldSelect').value;
  const m = molds.find((x) => x.id === mId);
  if (m) {
    document.getElementById('slitBandWidthInput').value = resolveAlgorithmicStrip(m, t).strip;
  }
  slitItems.forEach((it) => {
    if (it.moldId) {
      const refM = molds.find((x) => x.id === it.moldId);
      if (refM) it.stripWidth = resolveAlgorithmicStrip(refM, t).strip;
    }
  });
  renderSlitWorkspace();
}

function setSlitThicknessQuick(val) {
  document.getElementById('slitThickness').value = val;
  onSlitThicknessInput();
}

function setSlitCoilWidth(mm) {
  document.getElementById('slitCoilWidth').value = mm;
  renderSlitWorkspace();
}

function setSlitCoilKg(kg) {
  document.getElementById('slitCoilKg').value = kg;
  renderSlitWorkspace();
}

function sendCurrentMoldToSlitter() {
  if (!hasPerm('useSlitter')) {
    showToast('Bu rolde dilme planlayıcı yetkisi kapalıdır.', true);
    return;
  }
  const c = computeCurrentState();
  document.getElementById('slitThickness').value = c.wall;
  document.getElementById('slitBandWidthInput').value = c.stripWidth;
  if (activeMold) {
    document.getElementById('slitMoldSelect').value = activeMold.id;
  }
  addCustomSlitItem(
    activeMold ? activeMold.id : '',
    activeMold ? `${activeMold.label} (${activeMold.kalip})` : c.specLabel,
    activeMold ? activeMold.line : (c.wall <= (settings.max63Wall || 2.9) ? '63' : '140'),
    c.stripWidth,
    1,
    c.pcsPerBundle
  );
  switchTab('slit');
  showToast(`✂️ ${c.stripWidth} mm bant çoklu dilme planına aktarıldı.`);
}

function addBandToSlit() {
  const mId = document.getElementById('slitMoldSelect').value;
  const m = molds.find((x) => x.id === mId);
  const strip = Math.max(10, parseFloat(document.getElementById('slitBandWidthInput').value) || 100);
  const count = Math.max(1, parseInt(document.getElementById('slitBandCountInput').value) || 1);
  const t = parseFloat(document.getElementById('slitThickness').value) || 2.0;
  const lbl = m ? `${m.label} (${m.kalip})` : `Özel Bant (${strip}mm)`;
  const line = m ? m.line : (t <= (settings.max63Wall || 2.9) ? '63' : '140');
  addCustomSlitItem(mId, lbl, line, strip, count, m ? m.defaultBag : 30);
  showToast(`+${count} dilim × ${strip}mm ruloya eklendi.`);
}

function addCustomSlitItem(moldId, label, line, stripWidth, countToAdd, defaultBag = 30) {
  const existing = slitItems.find((x) => Math.abs(x.stripWidth - stripWidth) < 0.05 && x.label === label);
  if (existing) {
    existing.count += countToAdd;
  } else {
    slitItems.push({
      id: Date.now() + Math.floor(Math.random() * 1000),
      moldId,
      label,
      line,
      stripWidth: Number(stripWidth),
      count: countToAdd,
      defaultBag
    });
  }
  renderSlitWorkspace();
}

function stepSlitCount(id, delta) {
  const it = slitItems.find((x) => x.id === id);
  if (!it) return;
  it.count += delta;
  if (it.count <= 0) slitItems = slitItems.filter((x) => x.id !== id);
  renderSlitWorkspace();
}

function removeSlitItem(id) {
  slitItems = slitItems.filter((x) => x.id !== id);
  renderSlitWorkspace();
}

function clearSlitItems() {
  slitItems = [];
  renderSlitWorkspace();
  showToast('Dilme planı sıfırlandı.');
}

function applyOptimalRecipeIndex(idx) {
  const r = (window._lastOptimalRecipes || [])[idx];
  if (!r) return;
  slitItems = r.bands.map((b, i) => ({
    id: Date.now() + i,
    moldId: b.primaryMoldId || '',
    label: b.groupLabel,
    line: b.line,
    stripWidth: b.strip,
    count: b.count,
    defaultBag: b.defaultBag || 30
  }));
  renderSlitWorkspace();
  showToast(`✅ %${fmt(r.yieldPct, 2)} verimli (${r.scrapMm} mm fire) reçete uygulandı!`);
}

function autoOptimizeCurrentCoil() {
  const coilW = Math.max(100, parseFloat(document.getElementById('slitCoilWidth').value) || 1250);
  const trim = Math.max(0, parseFloat(document.getElementById('slitTrimMm').value) || 0);
  const t = Math.max(0.4, parseFloat(document.getElementById('slitThickness').value) || 2.0);
  const focusW = parseFloat(document.getElementById('slitBandWidthInput').value) || null;
  const recipes = findOptimalSlitRecipes(Math.max(0, coilW - trim), t, focusW);
  if (recipes.length > 0) {
    window._lastOptimalRecipes = recipes;
    applyOptimalRecipeIndex(0);
  } else {
    showToast('Uygun kombinasyon bulunamadı.', true);
  }
}

function loadStandardCoilBestPlan(coilW) {
  document.getElementById('slitCoilWidth').value = coilW;
  autoOptimizeCurrentCoil();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function sendSlitRowToQuote(itemId) {
  if (!hasPerm('viewPrices')) {
    showToast('Fiyat/Teklif yetkiniz bulunmuyor.', true);
    return;
  }
  const it = slitItems.find((x) => x.id === itemId);
  if (!it) return;
  const coilW = Math.max(100, parseFloat(document.getElementById('slitCoilWidth').value) || 1250);
  const coilKg = Math.max(10, parseFloat(document.getElementById('slitCoilKg').value) || 10000);
  const t = Math.max(0.4, parseFloat(document.getElementById('slitThickness').value) || 2.0);
  const density = settings.defaultDensity || 7.85;
  const kgPerMm = coilKg / coilW;
  const rowKg = it.stripWidth * it.count * kgPerMm;
  const wtPer6m = ((it.stripWidth * t * density) / 1000) * 6;
  const pcs6m = Math.max(1, Math.floor(rowKg / (wtPer6m || 1)));
  const kgPrice = parseFloat(document.getElementById('inputKgPrice').value) || settings.defaultKgPrice || 145;
  const currency = document.getElementById('selectCurrency').value || settings.defaultCurrency || 'DA';

  quoteItems.push({
    id: Date.now() + Math.floor(Math.random() * 1000),
    lineTag: `${it.line} HAT (Dilme)`,
    specLabel: `${it.label} × ${t} mm`,
    stripWidth: it.stripWidth,
    wall: t,
    length: 6,
    pcsPerBundle: it.defaultBag || 30,
    totalPieces: pcs6m,
    weightPerPiece: wtPer6m,
    totalWeight: pcs6m * wtPer6m,
    totalMeters: pcs6m * 6,
    pricingBasis: 'KG',
    kgPrice,
    pricePerPiece: wtPer6m * kgPrice,
    discountPct: 0,
    subTotalPrice: pcs6m * wtPer6m * kgPrice,
    currency
  });
  saveAppState();
  renderQuoteView();
  showToast(`📋 ${it.label} (~${pcs6m} Boy) teklif listesine aktarıldı.`);
}

function renderSlitWorkspace() {
  const coilW = Math.max(100, parseFloat(document.getElementById('slitCoilWidth').value) || 1250);
  const coilKg = Math.max(10, parseFloat(document.getElementById('slitCoilKg').value) || 10000);
  const t = Math.max(0.4, parseFloat(document.getElementById('slitThickness').value) || 2.0);
  const trimMm = Math.max(0, parseFloat(document.getElementById('slitTrimMm').value) || 0);
  const kerfMm = Math.max(0, parseFloat(document.getElementById('slitKerfMm').value) || 0);
  const density = settings.defaultDensity || 7.85;
  const max63 = settings.max63Wall || 2.9;

  // Standart rulo çipleri
  const stdChips = document.getElementById('slitStandardCoilChips');
  if (stdChips) {
    stdChips.innerHTML = (settings.standardCoils || [1000, 1219, 1250, 1380, 1500]).map((cw) =>
      `<button type="button" onclick="setSlitCoilWidth(${cw})" class="badge ${cw === coilW ? 'badge-blue' : 'badge-neutral'}">${cw}</button>`
    ).join('');
  }

  const recBadge = document.getElementById('slitLineRecommendationBadge');
  if (t <= max63) {
    recBadge.className = 'badge badge-blue';
    recBadge.innerText = `⚙️ 63 HAT ÖNERİLDİ (${t}mm ≤ ${max63}mm)`;
  } else {
    recBadge.className = 'badge badge-purple';
    recBadge.innerText = `🏭 140 HAT ÖNERİLDİ (${t}mm > ${max63}mm)`;
  }

  const kgPerMm = coilKg / coilW;
  const coilKgPerMeter = (coilW * t * density) / 1000;
  const coilLengthM = coilKgPerMeter > 0 ? (coilKg / coilKgPerMeter) : 0;

  document.getElementById('slitCoilMetricsBadge').innerText =
    `Rulo Metrajı: ~${fmt(coilLengthM, 1)} m | 1 mm Dilim = ${fmt(kgPerMm, 2)} kg`;

  const totalSlices = slitItems.reduce((s, x) => s + x.count, 0);
  document.getElementById('dBadgeSlit').innerText = totalSlices;
  const mBadgeSlit = document.getElementById('mBadgeSlit');
  mBadgeSlit.innerText = totalSlices;
  mBadgeSlit.classList.toggle('hidden', totalSlices === 0);

  const totalKerfLossMm = totalSlices * kerfMm;
  const usableCoilMm = Math.max(0, coilW - trimMm - totalKerfLossMm);

  let usedBandsMm = 0;
  let usedBandsKg = 0;

  const tbody = document.getElementById('slitTableBody');
  const vBar = document.getElementById('slitVisualBar');
  vBar.innerHTML = '';

  if (slitItems.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" class="text-center text-muted" style="padding:20px;">Henüz bant eklenmedi. "Otomatik Minimum Fire Planla" veya "+ Ruloya Ekle" butonunu kullanın.</td></tr>`;
  } else {
    let cursorMm = 0;
    tbody.innerHTML = slitItems.map((it, idx) => {
      const rowMm = roundDec(it.stripWidth * it.count, 2);
      const oneBandKg = it.stripWidth * kgPerMm;
      const rowKg = rowMm * kgPerMm;
      const sharePct = (rowMm / coilW) * 100;
      const wtPer6m = ((it.stripWidth * t * density) / 1000) * 6;
      const pipes6m = wtPer6m > 0 ? Math.floor(rowKg / wtPer6m) : 0;
      const bags6m = (pipes6m / Math.max(1, it.defaultBag || 30)).toFixed(1);

      const startMm = cursorMm;
      cursorMm = roundDec(cursorMm + rowMm, 1);

      usedBandsMm = roundDec(usedBandsMm + rowMm, 2);
      usedBandsKg += rowKg;

      const color = SLIT_BAR_COLORS[idx % SLIT_BAR_COLORS.length];
      const segPct = Math.min(100, (rowMm / coilW) * 100);
      const seg = document.createElement('div');
      seg.className = 'slit-seg mono';
      seg.style.width = `${segPct}%`;
      seg.style.background = color;
      seg.title = `${it.label}: ${it.count}×${it.stripWidth}mm = ${rowMm}mm [${startMm}→${cursorMm}mm] (${fmt(rowKg, 1)} kg)`;
      seg.innerText = `${it.count}×${it.stripWidth}`;
      vBar.appendChild(seg);

      return `
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:6px;">
              <span style="width:10px;height:10px;border-radius:3px;background:${color};display:inline-block;"></span>
              <div>
                <strong>${escapeHtml(it.label)}</strong>
                <div class="mono text-muted" style="font-size:0.68rem;">${it.line}H • [${startMm}–${cursorMm} mm]</div>
              </div>
            </div>
          </td>
          <td class="text-center mono fw-800 text-amber">${it.stripWidth}</td>
          <td class="text-center">
            <div class="stepper">
              <button onclick="stepSlitCount(${it.id}, -1)" class="step-btn" style="width:26px;height:26px;">−</button>
              <span class="mono fw-800" style="min-width:22px;text-align:center;">${it.count}</span>
              <button onclick="stepSlitCount(${it.id}, 1)" class="step-btn" style="width:26px;height:26px;">+</button>
            </div>
          </td>
          <td class="text-right mono fw-800">${rowMm} mm</td>
          <td class="text-right mono text-primary">${fmt(oneBandKg, 1)} kg</td>
          <td class="text-right mono fw-800 text-emerald">${fmt(rowKg, 1)} kg <span class="text-muted" style="font-size:0.7rem;">(%${fmt(sharePct, 1)})</span></td>
          <td class="text-right mono">~${pipes6m} Boy <span class="text-muted" style="font-size:0.7rem;">(${bags6m} Bağ)</span></td>
          <td class="text-center">
            <div class="row-wrap" style="justify-content:center;">
              <button onclick="sendSlitRowToQuote(${it.id})" class="btn btn-outline btn-sm" title="Teklife Gönder">📋</button>
              <button onclick="removeSlitItem(${it.id})" class="btn btn-danger btn-sm" title="Sil">✕</button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  const remUsableMm = roundDec(usableCoilMm - usedBandsMm, 2);
  const isOver = remUsableMm < -0.01;
  const totalScrapMm = Math.max(0, roundDec(coilW - usedBandsMm, 2));
  const totalScrapKg = totalScrapMm * kgPerMm;
  const yieldPct = coilW > 0 ? (usedBandsMm / coilW) * 100 : 0;

  if (!isOver && totalScrapMm > 0) {
    const scrapSeg = document.createElement('div');
    scrapSeg.className = 'slit-seg mono';
    scrapSeg.style.width = `${(totalScrapMm / coilW) * 100}%`;
    scrapSeg.style.background = '#dc2626';
    scrapSeg.innerText = `Fire:${totalScrapMm}`;
    vBar.appendChild(scrapSeg);
  }

  document.getElementById('slitVisualTitle').innerText = `${coilW} mm Rulo Kesit Şeması (Net Kullanılabilir: ${usableCoilMm} mm)`;
  const stEl = document.getElementById('slitVisualStatus');
  if (isOver) {
    stEl.className = 'mono text-danger fw-800';
    stEl.innerText = `⚠️ KAPASİTE AŞILDI! (${Math.abs(remUsableMm)} mm Fazla)`;
  } else {
    stEl.className = 'mono text-emerald fw-800';
    stEl.innerText = `Ürün: ${usedBandsMm} mm | Kalan En: ${remUsableMm} mm | Kütle Dengesi: %100 ✓`;
  }

  document.getElementById('slitYieldBadge').innerText = `Verim: %${fmt(yieldPct, 2)}`;
  document.getElementById('slitYieldBadge').className = yieldPct >= 97 ? 'badge badge-emerald mono' : 'badge badge-amber mono';
  document.getElementById('slitKpiCoilKg').innerText = `${fmt(coilKg, 0)} kg`;
  document.getElementById('slitKpiCoilMm').innerText = `${coilW} mm Rulo`;
  document.getElementById('slitKpiUsedKg').innerText = `${fmt(usedBandsKg, 1)} kg`;
  document.getElementById('slitKpiUsedMm').innerText = `${usedBandsMm} mm Ürün`;
  document.getElementById('slitKpiRemMm').innerText = `${remUsableMm} mm`;
  document.getElementById('slitKpiRemKg').innerText = `${fmt(Math.max(0, remUsableMm) * kgPerMm, 1)} kg Boş`;
  document.getElementById('slitKpiScrapKg').innerText = `${fmt(totalScrapKg, 2)} kg`;
  document.getElementById('slitKpiScrapPct').innerText = `%${fmt(100 - yieldPct, 2)} Fire (${totalScrapMm}mm)`;

  // Kalan boşluğa sığan tamamlayıcı bantlar
  const fillerBox = document.getElementById('slitFillerList');
  const groups = getGroupedCandidatesForThickness(t);
  if (isOver) {
    fillerBox.innerHTML = `<div class="badge badge-danger" style="padding:8px;">Toplam bant genişliği ruloyu ${Math.abs(remUsableMm)} mm aşıyor! Dilim azaltın.</div>`;
  } else {
    const fits = groups
      .filter((g) => g.strip <= remUsableMm)
      .map((g) => {
        const fitCnt = Math.floor(remUsableMm / g.strip);
        const remAfter = roundDec(remUsableMm - fitCnt * g.strip, 2);
        return { ...g, fitCnt, remAfter, fitKg: fitCnt * g.strip * kgPerMm };
      })
      .sort((a, b) => a.remAfter - b.remAfter);

    if (!fits.length) {
      fillerBox.innerHTML = `<div style="font-size:0.78rem;color:var(--emerald);font-weight:700;padding:6px;">✓ Kalan ${remUsableMm} mm boşluğa başka standart kalıp sığmıyor (Minimum fire!).</div>`;
    } else {
      fillerBox.innerHTML = fits.slice(0, 6).map((f) => `
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;padding:7px 9px;background:var(--surface-alt);border:1px solid var(--border);border-radius:8px;font-size:0.76rem;">
          <div>
            <strong>+${f.fitCnt}× <span class="mono text-amber">${f.strip}mm</span></strong> (${escapeHtml(f.groupLabel)})
            <div class="mono text-muted" style="font-size:0.7rem;">+${fmt(f.fitKg, 0)} kg | Kalan Fire: <b class="text-emerald">${f.remAfter} mm</b></div>
          </div>
          <button onclick="addCustomSlitItem('${f.primaryMoldId}', '${escapeHtml(f.groupLabel)}', '${f.line}', ${f.strip}, ${f.fitCnt}, ${f.defaultBag})" class="btn btn-primary btn-sm">+ Ekle</button>
        </div>
      `).join('');
    }
  }

  // Algoritmik DP En İyi Çoklu Reçeteler
  const focusW = parseFloat(document.getElementById('slitBandWidthInput').value) || null;
  const optimalRecipes = findOptimalSlitRecipes(Math.max(0, coilW - trimMm), t, focusW);
  window._lastOptimalRecipes = optimalRecipes;
  const recBox = document.getElementById('slitOptimalRecipesBox');
  recBox.innerHTML = optimalRecipes.map((r, idx) => {
    const desc = r.bands.map((b) => `<b>${b.count}×${b.strip}mm</b> (${escapeHtml(b.groupLabel)})`).join(' + ');
    return `
      <div style="padding:8px 10px;border-radius:8px;background:var(--surface-alt);border:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:0.76rem;">
        <div>
          <div>${desc}</div>
          <div class="mono" style="margin-top:2px;">
            Verim: <b class="text-emerald">%${fmt(r.yieldPct, 2)}</b> • Fire: <b class="text-danger">${r.scrapMm} mm</b> (${fmt(r.scrapMm * kgPerMm, 1)} kg)
          </div>
        </div>
        <button onclick="applyOptimalRecipeIndex(${idx})" class="btn btn-primary btn-sm">Uygula</button>
      </div>
    `;
  }).join('');

  // Standart Bobin Kıyaslama Kartları
  const stdGrid = document.getElementById('slitStandardCoilsGrid');
  stdGrid.innerHTML = (settings.standardCoils || [1000, 1219, 1250, 1380, 1500]).map((cw) => {
    const best = findOptimalSlitRecipes(Math.max(0, cw - trimMm), t, focusW)[0];
    if (!best) return '';
    const summary = best.bands.map((b) => `${b.count}×${b.strip}mm (${escapeHtml(b.groupLabel)})`).join(' + ');
    return `
      <div style="padding:11px;border-radius:10px;background:var(--surface-alt);border:1px solid var(--border);display:flex;flex-direction:column;justify-content:space-between;gap:8px;">
        <div>
          <div class="row-between">
            <strong class="mono" style="font-size:0.95rem;">${cw} mm Rulo</strong>
            <span class="badge ${best.yieldPct >= 98 ? 'badge-emerald' : 'badge-amber'} mono">%${fmt(best.yieldPct, 2)} Verim</span>
          </div>
          <div style="font-size:0.76rem;margin-top:6px;color:var(--text-secondary);">${summary}</div>
        </div>
        <div class="row-between" style="border-top:1px solid var(--border);padding-top:7px;font-size:0.75rem;">
          <span class="mono">Fire: <b class="text-danger">${best.scrapMm} mm</b></span>
          <button onclick="loadStandardCoilBestPlan(${cw})" class="btn btn-outline btn-sm">Bu Ruloyu Planla</button>
        </div>
      </div>
    `;
  }).join('');
}

function exportSlitExcel() {
  if (!slitItems.length) {
    showToast('Dilme planında henüz bant yok.', true);
    return;
  }
  const coilW = parseFloat(document.getElementById('slitCoilWidth').value) || 1250;
  const coilKg = parseFloat(document.getElementById('slitCoilKg').value) || 10000;
  const t = parseFloat(document.getElementById('slitThickness').value) || 2.0;
  const density = settings.defaultDensity || 7.85;
  const kgPerMm = coilKg / coilW;
  const metraj = coilKg / ((coilW * t * density) / 1000);

  const rows = [
    [`${settings.companyLegal || settings.brandName} — DİLME HATTI PROGRAMI`],
    [`Kalınlık: ${t} mm`, `Rulo Genişliği: ${coilW} mm`, `Tonaj: ${coilKg} kg`, `Metraj: ${roundDec(metraj, 2)} m`, `Tarih: ${new Date().toLocaleDateString('tr-TR')}`],
    [],
    ['NO', 'Bant Genişliği (mm)', 'Miktar (Adet)', 'Bant Türü / Profil', 'Hat', 'Toplam En (mm)', '1 Bant Ağırlığı (kg)', 'Toplam Ağırlık (kg)', 'Bobin Payı %', 'Tahmini 6m Boy']
  ];

  let usedMm = 0;
  slitItems.forEach((it, idx) => {
    const rMm = roundDec(it.stripWidth * it.count, 2);
    const oneKg = roundDec(it.stripWidth * kgPerMm, 2);
    const totKg = roundDec(rMm * kgPerMm, 2);
    const wt6m = ((it.stripWidth * t * density) / 1000) * 6;
    usedMm += rMm;
    rows.push([
      idx + 1,
      it.stripWidth,
      it.count,
      it.label,
      `${it.line} HAT`,
      rMm,
      oneKg,
      totKg,
      roundDec((rMm / coilW) * 100, 2),
      Math.floor(totKg / (wt6m || 1))
    ]);
  });

  const scrapMm = roundDec(Math.max(0, coilW - usedMm), 2);
  rows.push(['FİRE', scrapMm, '', 'FİRE (Toplam Artan + Tıraş)', '', scrapMm, roundDec(scrapMm * kgPerMm, 2), roundDec(scrapMm * kgPerMm, 2), roundDec((scrapMm / coilW) * 100, 2), 0]);
  rows.push(['TOPLAM', '', slitItems.reduce((s, x) => s + x.count, 0), 'KÜTLE DENGESİ %100', '', coilW, '', coilKg, 100, '']);

  exportArrayToSpreadsheet(rows, `Dilme_Programi_${coilW}x${t}mm.xlsx`, 'Dilme_Programi');
}

function printSlitWorkOrder() {
  if (!slitItems.length) {
    showToast('Yazdırılacak dilme planı boş!', true);
    return;
  }
  const coilW = parseFloat(document.getElementById('slitCoilWidth').value) || 1250;
  const coilKg = parseFloat(document.getElementById('slitCoilKg').value) || 10000;
  const t = parseFloat(document.getElementById('slitThickness').value) || 2.0;
  const kgPerMm = coilKg / coilW;
  let usedMm = 0;

  const trs = slitItems.map((it, i) => {
    const rMm = roundDec(it.stripWidth * it.count, 2);
    usedMm += rMm;
    return `
      <tr>
        <td style="text-align:center;">${i + 1}</td>
        <td><b>${escapeHtml(it.label)}</b> (${it.line} HAT)</td>
        <td style="text-align:center;"><b>${it.stripWidth} mm</b></td>
        <td style="text-align:center;"><b>${it.count} Adet</b></td>
        <td style="text-align:right;">${rMm} mm</td>
        <td style="text-align:right;">${fmt(it.stripWidth * kgPerMm, 2)} kg</td>
        <td style="text-align:right;"><b>${fmt(rMm * kgPerMm, 2)} kg</b></td>
        <td style="text-align:right;">%${fmt((rMm / coilW) * 100, 2)}</td>
      </tr>
    `;
  }).join('');

  const scrapMm = roundDec(Math.max(0, coilW - usedMm), 2);
  document.getElementById('printDocument').innerHTML = `
    <div style="display:flex;justify-content:space-between;border-bottom:2px solid #0f172a;padding-bottom:8px;">
      <div>
        <h1 style="font-size:18px;margin:0;">${escapeHtml(settings.companyLegal || settings.brandName)} — DİLME HATTI İŞ EMRİ</h1>
        <div style="font-size:12px;margin-top:4px;">Rulo: <b>${coilW} mm × ${t} mm</b> • Bobin Tonajı: <b>${fmt(coilKg, 0)} kg</b></div>
      </div>
      <div style="text-align:right;font-size:12px;">Tarih: <b>${new Date().toLocaleDateString('tr-TR')}</b><br>Verim: <b>%${fmt((usedMm / coilW) * 100, 2)}</b></div>
    </div>
    <table>
      <thead>
        <tr><th>#</th><th>Profil / Kalıp</th><th>Bant Eni</th><th>Dilim</th><th>Toplam En</th><th>1 Bant Kg</th><th>Toplam Kg</th><th>Pay %</th></tr>
      </thead>
      <tbody>
        ${trs}
        <tr>
          <td colspan="4"><b>TOPLAM FİRE / KALAN EN</b></td>
          <td style="text-align:right;"><b>${scrapMm} mm</b></td>
          <td>-</td>
          <td style="text-align:right;"><b>${fmt(scrapMm * kgPerMm, 2)} kg</b></td>
          <td style="text-align:right;">%${fmt((scrapMm / coilW) * 100, 2)}</td>
        </tr>
      </tbody>
    </table>
  `;
  window.print();
}


// ==================== 13. DOSYA YÜKLEME, ÇEVRİMDIŞI KASA (INDEXEDDB) & 45 KALIP MATRİSİ ====================

function exportArrayToSpreadsheet(aoa, filename, sheetName = 'Veri') {
  try {
    if (typeof XLSX !== 'undefined' && XLSX.utils) {
      const ws = XLSX.utils.aoa_to_sheet(aoa);
      const colWidths = [];
      aoa.forEach((row) => {
        (row || []).forEach((cell, cIdx) => {
          const len = String(cell ?? '').length;
          colWidths[cIdx] = Math.min(42, Math.max(colWidths[cIdx] || 10, len + 3));
        });
      });
      ws['!cols'] = colWidths.map((w) => ({ wch: w }));
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, sheetName.slice(0, 31));
      XLSX.writeFile(wb, filename);
      showToast(`📊 ${filename} indirildi.`);
      return;
    }
  } catch (err) {
    console.warn('XLSX oluşturma uyarısı, CSV yedek kullanılıyor:', err);
  }

  // Çevrimdışı CSV Yedek (UTF-8 BOM ile Türkçe karakter tam uyumlu)
  const csvContent = '\uFEFF' + aoa.map((row) =>
    (row || []).map((cell) => `"${String(cell ?? '').replace(/"/g, '""')}"`).join(';')
  ).join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  triggerBlobDownload(blob, filename.replace(/\.(xlsx|xls)$/i, '.csv'));
  showToast(`📊 Tablo CSV olarak indirildi.`);
}

function triggerBlobDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 300);
}

// --- Çevrimdışı IndexedDB Dosya Kasası ---
const VAULT_DB_NAME = 'umitck_erp_vault_v5';
const VAULT_STORE = 'uploaded_files';

function openVaultDb() {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('IndexedDB desteklenmiyor'));
      return;
    }
    const req = indexedDB.open(VAULT_DB_NAME, 1);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(VAULT_STORE)) {
        db.createObjectStore(VAULT_STORE, { keyPath: 'id' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function saveFileToOfflineVault(file, buffer, detectedKind) {
  try {
    const db = await openVaultDb();
    const record = {
      id: 'f_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
      name: file.name,
      type: file.type || 'application/octet-stream',
      size: file.size || buffer.byteLength || 0,
      kind: detectedKind || 'Dosya',
      savedAt: new Date().toLocaleDateString('tr-TR', {
        day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
      }),
      data: buffer
    };
    await new Promise((res, rej) => {
      const tx = db.transaction(VAULT_STORE, 'readwrite');
      tx.objectStore(VAULT_STORE).put(record);
      tx.oncomplete = () => res();
      tx.onerror = () => rej(tx.error);
    });
    await renderVaultFilesList();
    return record.id;
  } catch (err) {
    console.warn('IndexedDB kayıt uyarısı:', err);
    return null;
  }
}

async function getAllVaultFilesMeta() {
  try {
    const db = await openVaultDb();
    return await new Promise((res, rej) => {
      const tx = db.transaction(VAULT_STORE, 'readonly');
      const req = tx.objectStore(VAULT_STORE).getAll();
      req.onsuccess = () => res((req.result || []).reverse());
      req.onerror = () => rej(req.error);
    });
  } catch (e) {
    return [];
  }
}

async function getVaultFileRecord(id) {
  const db = await openVaultDb();
  return new Promise((res, rej) => {
    const tx = db.transaction(VAULT_STORE, 'readonly');
    const req = tx.objectStore(VAULT_STORE).get(id);
    req.onsuccess = () => res(req.result || null);
    req.onerror = () => rej(req.error);
  });
}

async function removeVaultFile(id) {
  try {
    const db = await openVaultDb();
    await new Promise((res, rej) => {
      const tx = db.transaction(VAULT_STORE, 'readwrite');
      tx.objectStore(VAULT_STORE).delete(id);
      tx.oncomplete = () => res();
      tx.onerror = () => rej(tx.error);
    });
    await renderVaultFilesList();
    showToast('Dosya çevrimdışı kasadan silindi.');
  } catch (e) {
    showToast('Dosya silinemedi.', true);
  }
}

async function downloadVaultFile(id) {
  try {
    const rec = await getVaultFileRecord(id);
    if (!rec || !rec.data) return;
    const blob = new Blob([rec.data], { type: rec.type || 'application/octet-stream' });
    triggerBlobDownload(blob, rec.name);
  } catch (e) {
    showToast('Dosya indirilemedi.', true);
  }
}

async function reopenVaultFile(id) {
  try {
    const rec = await getVaultFileRecord(id);
    if (!rec || !rec.data) return;
    await processUploadedBuffer(rec.name, rec.type, rec.size, rec.data, false);
  } catch (e) {
    showToast('Dosya okunamadı.', true);
  }
}

async function renderVaultFilesList() {
  const countEl = document.getElementById('vaultFilesCount');
  const listEl = document.getElementById('vaultFilesList');
  if (!countEl || !listEl) return;

  const files = await getAllVaultFilesMeta();
  countEl.innerText = `${files.length} Dosya`;

  if (!files.length) {
    listEl.innerHTML = `<div style="text-align:center;padding:18px;color:var(--text-muted);font-size:0.78rem;border:1px dashed var(--border);border-radius:8px;">Henüz çevrimdışı kasaya dosya yüklenmedi.</div>`;
    return;
  }

  listEl.innerHTML = files.map((f) => {
    const kb = Math.max(1, Math.round((f.size || 0) / 1024));
    return `
      <div style="padding:9px 11px;border-radius:8px;background:var(--surface-alt);border:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;gap:8px;">
        <div style="min-width:0;">
          <div style="font-weight:800;font-size:0.82rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">📄 ${escapeHtml(f.name)}</div>
          <div class="mono text-muted" style="font-size:0.7rem;">
            <span class="badge badge-blue" style="font-size:0.63rem;padding:1px 5px;">${escapeHtml(f.kind || 'Dosya')}</span>
            • ${kb} KB • ${escapeHtml(f.savedAt || '')}
          </div>
        </div>
        <div class="row-wrap" style="flex-shrink:0;">
          <button onclick="reopenVaultFile('${f.id}')" class="btn btn-primary btn-sm" title="Analiz Et / Önizle">Aç</button>
          <button onclick="downloadVaultFile('${f.id}')" class="btn btn-outline btn-sm" title="Cihaza İndir">⬇️</button>
          <button onclick="removeVaultFile('${f.id}')" class="btn btn-danger btn-sm" title="Sil">✕</button>
        </div>
      </div>
    `;
  }).join('');
}

function setupDropzoneEvents() {
  const dz = document.getElementById('fileDropzone');
  if (!dz) return;
  ['dragenter', 'dragover'].forEach((evName) => {
    dz.addEventListener(evName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dz.classList.add('dragover');
    });
  });
  ['dragleave', 'drop'].forEach((evName) => {
    dz.addEventListener(evName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dz.classList.remove('dragover');
    });
  });
  dz.addEventListener('drop', async (e) => {
    const file = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    if (file) await handleRawFileObject(file);
  });
}

async function handleFileUpload(event) {
  const file = event.target && event.target.files && event.target.files[0];
  if (!file) return;
  await handleRawFileObject(file);
  event.target.value = '';
}

async function handleRawFileObject(file) {
  if (!hasPerm('uploadFiles')) {
    showToast('Bu rolde dosya yükleme yetkisi kapalıdır.', true);
    return;
  }
  try {
    const buffer = await file.arrayBuffer();
    await processUploadedBuffer(file.name, file.type, file.size, buffer, true, file);
  } catch (err) {
    console.error('Dosya okuma hatası:', err);
    showToast('Dosya okunurken hata oluştu.', true);
  }
}

function parseSimpleCsv(text) {
  const sep = text.includes(';') ? ';' : ',';
  return text
    .split(/\r?\n/)
    .filter((l) => l.trim().length > 0)
    .map((line) =>
      line.split(sep).map((cell) => cell.replace(/^"|"$/g, '').replace(/""/g, '"').trim())
    );
}

function parseSpreadsheetWorkbookToSheets(name, buffer) {
  const lower = name.toLowerCase();
  if (lower.endsWith('.csv')) {
    const txt = new TextDecoder('utf-8').decode(buffer);
    return [{ sheetName: 'CSV', rows: parseSimpleCsv(txt) }];
  }
  if (typeof XLSX === 'undefined') {
    throw new Error('Excel okuyucu kütüphanesi henüz hazır değil');
  }
  const wb = XLSX.read(buffer, { type: 'array' });
  return wb.SheetNames.map((sn) => ({
    sheetName: sn,
    rows: XLSX.utils.sheet_to_json(wb.Sheets[sn], { header: 1, defval: '' })
  }));
}

function detectAndExtractSpreadsheetPayload(sheets) {
  // 1) Kalıp Listesi Tespiti (Hem Dışa Aktarılan Tablo hem Fabrika KALIP_LISTESI.xlsx formatı)
  const importedMolds = [];

  for (const sh of sheets) {
    const rows = sh.rows || [];
    if (!rows.length) continue;
    const flatSample = rows.slice(0, 6).map((r) => r.join(' ').toUpperCase()).join(' ');

    // A1: Sistemden dışa aktarılan Kalıp Veritabanı Excel formatı
    const headerIdx = rows.findIndex((r) =>
      r.some((c) => String(c).toUpperCase().includes('KALIP')) &&
      r.some((c) => String(c).toUpperCase().includes('BAĞ') || String(c).toUpperCase().includes('BAG') || String(c).toUpperCase().includes('PROFİL'))
    );

    if (headerIdx !== -1) {
      const hdr = rows[headerIdx].map((c) => String(c).trim());
      const colHat = hdr.findIndex((h) => /hat/i.test(h));
      const colKalip = hdr.findIndex((h) => /kal[ıi]p/i.test(h));
      const colTip = hdr.findIndex((h) => /tip/i.test(h));
      const colLabel = hdr.findIndex((h) => /profil|ölçü|olcu|ad/i.test(h));
      const colA = hdr.findIndex((h) => /kenar\s*a|çap/i.test(h));
      const colB = hdr.findIndex((h) => /kenar\s*b/i.test(h));
      const colBag = hdr.findIndex((h) => /ba[ğg]/i.test(h));
      const colNot = hdr.findIndex((h) => /not/i.test(h));

      const wallCols = [];
      hdr.forEach((h, idx) => {
        const cleanW = h.replace(/mm/gi, '').replace(',', '.').trim();
        const numW = Number(cleanW);
        if (cleanW && isFinite(numW) && numW >= 0.5 && numW <= 12 && idx !== colA && idx !== colB && idx !== colBag) {
          wallCols.push({ idx, key: cleanNumKey(numW) });
        }
      });

      if (colKalip !== -1 && wallCols.length >= 2) {
        for (let r = headerIdx + 1; r < rows.length; r++) {
          const row = rows[r];
          const label = String(row[colLabel] || '').trim();
          const kalip = String(row[colKalip] || '').trim();
          if (!label && !kalip) continue;

          const strips = {};
          wallCols.forEach((wc) => {
            const v = parseFloat(String(row[wc.idx] ?? '').replace(',', '.'));
            if (isFinite(v) && v > 10) strips[wc.key] = v;
          });
          if (Object.keys(strips).length === 0) continue;

          const lineRaw = colHat !== -1 ? String(row[colHat]).replace(/[^0-9A-Za-z]/g, '') : (sh.sheetName.includes('140') ? '140' : '63');
          const line = lineRaw.includes('140') ? '140' : (lineRaw.includes('63') ? '63' : 'OZEL');
          const type = (colTip !== -1 && /boru/i.test(String(row[colTip]))) || /boru|ø/i.test(label) ? 'Boru' : 'Kutu';

          let dimA = colA !== -1 ? parseFloat(String(row[colA]).replace(',', '.')) : NaN;
          let dimB = colB !== -1 ? parseFloat(String(row[colB]).replace(',', '.')) : NaN;
          if (!isFinite(dimA)) {
            const mNums = (label.replace(',', '.').match(/\d+(?:\.\d+)?/g) || []).map(Number);
            dimA = mNums[0] || 40;
            dimB = type === 'Boru' ? 0 : (mNums[1] || dimA);
          }
          if (!isFinite(dimB)) dimB = type === 'Boru' ? 0 : dimA;

          const shape = type === 'Boru' ? 'pipe' : (Math.abs(dimA - dimB) < 0.05 ? 'square' : 'box');
          importedMolds.push({
            id: `${line}_${importedMolds.length + 1}_${Date.now() % 10000}`,
            line,
            kalip: kalip || `${dimA}Ø`,
            type,
            shape,
            label: label || (type === 'Boru' ? `Ø${dimA} Boru` : `${dimA}x${dimB}`),
            aliases: '',
            a: dimA,
            b: type === 'Boru' ? 0 : dimB,
            defaultBag: Math.max(1, parseInt(row[colBag]) || 30),
            note: colNot !== -1 ? String(row[colNot] || '').trim() : '',
            strips
          });
        }
      }
    } else if (flatSample.includes('BORU') && flatSample.includes('KALIP') && (sh.sheetName.includes('63') || sh.sheetName.includes('140'))) {
      // A2: Orijinal Fabrika KALIP_LISTESI.xlsx (63 HAT / 140 HAT sekmeli format)
      const line = sh.sheetName.includes('140') ? '140' : '63';
      let wallMap = [];
      let lastKalip = '';
      for (let r = 0; r < rows.length; r++) {
        const row = rows[r];
        const joined = row.join(' ').toUpperCase();
        if (joined.includes('KALIP') && (joined.includes('0.8') || joined.includes('1.5') || joined.includes('2.5'))) {
          wallMap = [];
          row.forEach((cell, cIdx) => {
            const num = parseFloat(String(cell).replace(',', '.'));
            if (isFinite(num) && num >= 0.5 && num <= 10) wallMap.push({ idx: cIdx, key: cleanNumKey(num) });
          });
          continue;
        }
        if (!wallMap.length) continue;
        const c0 = String(row[0] || '').trim();
        if (c0) lastKalip = c0;
        const c1 = String(row[1] || '').trim();
        const c2 = String(row[2] || '').trim();
        if (!c1 && !c2) continue;

        const strips = {};
        wallMap.forEach((wm) => {
          const val = parseFloat(String(row[wm.idx] || '').replace(',', '.'));
          if (isFinite(val) && val > 15) strips[wm.key] = val;
        });
        if (!Object.keys(strips).length) continue;

        const isPipe = /boru/i.test(c1) || (!c2 && lastKalip);
        const type = isPipe ? 'Boru' : 'Kutu';
        const rawSpec = isPipe ? lastKalip.replace(/Ø/gi, '') : (c2 || c1);
        const nums = (rawSpec.replace(',', '.').match(/\d+(?:\.\d+)?/g) || []).map(Number);
        const a = nums[0] || 40;
        const b = type === 'Boru' ? 0 : (nums[1] || a);
        const shape = type === 'Boru' ? 'pipe' : (Math.abs(a - b) < 0.05 ? 'square' : 'box');
        const label = type === 'Boru' ? `Ø${lastKalip.replace(/Ø/gi, '')} Boru` : `${a}x${b}`;

        importedMolds.push({
          id: `${line}_${importedMolds.length + 1}_imp`,
          line,
          kalip: lastKalip || `${a}Ø`,
          type,
          shape,
          label,
          aliases: '',
          a,
          b,
          defaultBag: 30,
          note: '',
          strips
        });
      }
    }
  }

  if (importedMolds.length >= 3) {
    return { kind: 'MOLDS', count: importedMolds.length, molds: importedMolds };
  }

  // 2) Dilme Programı Tespiti (DİLME PROG 26-0584.xlsx benzeri veya sistem Dilme çıktısı)
  const firstRows = sheets[0].rows || [];
  const topText = firstRows.slice(0, 10).map((r) => r.join(' ').toUpperCase()).join(' ');
  if (topText.includes('DİLME') || topText.includes('DILME') || topText.includes('BANT GENİŞLİĞİ')) {
    let coilW = 1250;
    let coilKg = 10000;
    let thick = 2.0;
    const bands = [];

    firstRows.forEach((row) => {
      const lineStr = row.join(' ');
      const mRulo = lineStr.match(/(?:Rulo\s*Geni[şs]li[ğg]i|EBAT)[^\d]*(\d{3,4})/i);
      if (mRulo) coilW = Number(mRulo[1]);
      const mKal = lineStr.match(/Kal[ıi]nl[ıi]k[^\d]*(\d+(?:[.,]\d+)?)/i);
      if (mKal) thick = parseFloat(mKal[1].replace(',', '.'));
      const mTon = lineStr.match(/Tonaj[^\d]*(\d+(?:[.,]\d+)?)/i);
      if (mTon) {
        const rawT = parseFloat(mTon[1].replace(',', '.'));
        coilKg = rawT < 100 ? rawT * 1000 : rawT;
      }

      const c0 = String(row[0] || '').trim().toUpperCase();
      const bWidth = parseFloat(String(row[1] || '').replace(',', '.'));
      const bCount = parseInt(String(row[2] || '').trim());
      const bLabel = String(row[3] || '').trim();
      if (c0 !== 'FİRE' && c0 !== 'TOPLAM' && isFinite(bWidth) && bWidth >= 30 && bWidth <= 800 && isFinite(bCount) && bCount >= 1 && bCount <= 40) {
        bands.push({
          id: Date.now() + bands.length,
          moldId: '',
          label: bLabel || `${bWidth}mm Bant`,
          line: thick <= (settings.max63Wall || 2.9) ? '63' : '140',
          stripWidth: bWidth,
          count: bCount,
          defaultBag: 30
        });
      }
    });

    if (bands.length > 0) {
      return { kind: 'SLIT', coilW, coilKg, thick, bands };
    }
  }

  // 3) Müşteri Sipariş / Teklif Listesi Excel veya CSV Tespiti
  const parsedOrders = [];
  const orderRows = sheets[0].rows || [];
  for (let r = 0; r < orderRows.length; r++) {
    const row = orderRows[r];
    if (!row || !row.length) continue;
    const col0 = String(row[0] ?? '').trim();
    const col1 = String(row[1] ?? '').trim();
    const queryCandidate = /\d/.test(col0) && /[x*ø]|boru|kare/i.test(col0) ? col0 : (/\d/.test(col1) ? col1 : col0);
    if (!queryCandidate || /profil|ölçü|sıra|müşteri|toplam/i.test(queryCandidate)) continue;

    const smart = parseSmartQuery(queryCandidate);
    if (!smart || !smart.results.length) continue;

    const best = smart.results[0];
    const rowLen = parseFloat(String(row[2] || '').replace(',', '.'));
    const lengthM = isFinite(rowLen) && rowLen >= 1 && rowLen <= 24 ? rowLen : (best.length || 6);
    const rawQty = parseFloat(String(row[3] || row[1] || '').replace(',', '.'));
    const qtyPieces = isFinite(rawQty) && rawQty >= 1 ? Math.round(rawQty) : (best.mold ? best.mold.defaultBag : 60);
    const basisCell = String(row[4] || '').toUpperCase();
    const basis = basisCell.includes('BOY') || basisCell.includes('ADET') ? 'PIECE' : 'KG';
    const rawUnitPrice = parseFloat(String(row[5] || '').replace(',', '.'));

    const mold = best.mold || null;
    const wall = best.wall || 1.5;
    const strip = best.strip || (mold ? resolveAlgorithmicStrip(mold, wall).strip : computeCustomStrip(best.shape || 'box', best.a || 40, best.b || 20, wall));
    const density = settings.defaultDensity || 7.85;
    const wtPiece = ((strip * wall * density) / 1000) * lengthM;
    const totWt = wtPiece * qtyPieces;
    const defKgP = settings.defaultKgPrice || 145;

    let kgPrice = defKgP;
    let piecePrice = wtPiece * defKgP;
    let subTotal = totWt * defKgP;

    if (basis === 'PIECE' && isFinite(rawUnitPrice) && rawUnitPrice > 0) {
      piecePrice = rawUnitPrice;
      kgPrice = wtPiece > 0 ? rawUnitPrice / wtPiece : 0;
      subTotal = qtyPieces * piecePrice;
    } else if (isFinite(rawUnitPrice) && rawUnitPrice > 0) {
      kgPrice = rawUnitPrice;
      piecePrice = wtPiece * kgPrice;
      subTotal = totWt * kgPrice;
    }

    parsedOrders.push({
      id: Date.now() + r + Math.floor(Math.random() * 1000),
      lineTag: mold ? `${mold.line} HAT (${mold.kalip})` : 'ÖZEL KESİT',
      specLabel: mold ? `${mold.label.replace(/\s*\((63H|140H)\)/g, '')} × ${wall} mm` : (best.label || queryCandidate),
      stripWidth: strip,
      wall,
      length: lengthM,
      pcsPerBundle: mold ? mold.defaultBag : 30,
      totalPieces: qtyPieces,
      weightPerPiece: wtPiece,
      totalWeight: totWt,
      totalMeters: qtyPieces * lengthM,
      pricingBasis: basis,
      kgPrice,
      pricePerPiece: piecePrice,
      discountPct: 0,
      subTotalPrice: subTotal,
      currency: document.getElementById('selectCurrency').value || settings.defaultCurrency || 'DA'
    });
  }

  if (parsedOrders.length > 0) {
    return { kind: 'ORDER_LIST', items: parsedOrders };
  }

  return { kind: 'GENERIC_SHEET', rowCount: orderRows.length, previewRows: orderRows.slice(0, 6) };
}

async function processUploadedBuffer(name, mimeType, size, buffer, shouldSaveVault = true) {
  const box = document.getElementById('uploadedFilePreviewBox');
  box.classList.remove('hidden');
  const lower = name.toLowerCase();

  // 1. JSON Tam Sistem Yedeği
  if (lower.endsWith('.json')) {
    const text = new TextDecoder('utf-8').decode(buffer);
    const parsed = JSON.parse(text);
    pendingParsedUpload = { kind: 'JSON_BACKUP', data: parsed };
    if (shouldSaveVault) await saveFileToOfflineVault({ name, type: mimeType, size }, buffer, 'JSON Yedek');

    box.innerHTML = `
      <div class="row-between">
        <div>
          <span class="badge badge-emerald">JSON SİSTEM YEDEĞİ ALGILANDI</span>
          <div style="font-weight:800;margin-top:4px;">${escapeHtml(name)}</div>
          <div style="font-size:0.76rem;color:var(--text-secondary);">Kalıp Sayısı: <b>${(parsed.molds || []).length}</b> • Kayıtlı Teklif: <b>${(parsed.savedQuotes || []).length}</b></div>
        </div>
        <button onclick="applyPendingUpload()" class="btn btn-primary">⚡ Yedeği Sisteme Yükle</button>
      </div>
    `;
    showToast('JSON yedek dosyası analiz edildi.');
    return;
  }

  // 2. Excel / CSV Tablo Analizi
  if (lower.endsWith('.xlsx') || lower.endsWith('.xls') || lower.endsWith('.csv')) {
    const sheets = parseSpreadsheetWorkbookToSheets(name, buffer);
    const detected = detectAndExtractSpreadsheetPayload(sheets);
    pendingParsedUpload = detected;

    const kindLabelMap = {
      MOLDS: 'Kalıp Veritabanı',
      SLIT: 'Dilme Programı',
      ORDER_LIST: 'Sipariş Listesi',
      GENERIC_SHEET: 'Excel Tablo'
    };
    if (shouldSaveVault) {
      await saveFileToOfflineVault({ name, type: mimeType, size }, buffer, kindLabelMap[detected.kind] || 'Excel');
    }

    if (detected.kind === 'MOLDS') {
      box.innerHTML = `
        <div class="row-between">
          <div>
            <span class="badge badge-blue">🔩 KALIP & BANT MATRİSİ ALGILANDI</span>
            <div style="font-weight:800;margin-top:4px;">${escapeHtml(name)} — ${detected.count} Adet Kalıp/Profil Okundu</div>
            <div style="font-size:0.75rem;color:var(--text-secondary);">Onayladığınızda kalıp veritabanı bu dosyadaki bant genişlikleriyle güncellenir.</div>
          </div>
          <button onclick="applyPendingUpload()" class="btn btn-primary">🔩 Kalıp Veritabanına Aktar</button>
        </div>
      `;
    } else if (detected.kind === 'SLIT') {
      box.innerHTML = `
        <div class="row-between">
          <div>
            <span class="badge badge-amber">✂️ DİLME PROGRAMI ALGILANDI</span>
            <div style="font-weight:800;margin-top:4px;">${escapeHtml(name)} — ${detected.coilW}mm × ${detected.thick}mm (${fmt(detected.coilKg, 0)} kg)</div>
            <div style="font-size:0.75rem;color:var(--text-secondary);">${detected.bands.length} farklı bant grubu otomatik çözümlendi.</div>
          </div>
          <button onclick="applyPendingUpload()" class="btn btn-primary">✂️ Dilme Sekmesine Yükle</button>
        </div>
      `;
    } else if (detected.kind === 'ORDER_LIST') {
      box.innerHTML = `
        <div class="row-between">
          <div>
            <span class="badge badge-emerald">📋 SİPARİŞ / TEKLİF LİSTESİ ALGILANDI</span>
            <div style="font-weight:800;margin-top:4px;">${escapeHtml(name)} — ${detected.items.length} Kalem Otomatik Hesaplandı</div>
            <div style="font-size:0.75rem;color:var(--text-secondary);">Tüm profillerin kalıp, bant, kantar ağırlığı ve fiyatları tek seferde hazırlandı.</div>
          </div>
          <button onclick="applyPendingUpload()" class="btn btn-emerald">📋 Teklif Listesine Aktar</button>
        </div>
      `;
    } else {
      const previewHtml = (detected.previewRows || [])
        .map((r) => `<tr>${r.slice(0, 6).map((c) => `<td>${escapeHtml(c)}</td>`).join('')}</tr>`)
        .join('');
      box.innerHTML = `
        <div class="stack" style="gap:6px;">
          <div class="row-between">
            <strong>📊 ${escapeHtml(name)} (${detected.rowCount} satır çevrimdışı kasaya kaydedildi)</strong>
          </div>
          <div class="table-wrap"><table class="corp-table"><tbody>${previewHtml}</tbody></table></div>
        </div>
      `;
    }
    showToast(`📂 ${name} başarıyla okundu ve çevrimdışı kasaya kaydedildi.`);
    return;
  }

  // 3. Görsel veya PDF Referans Dosyası
  if (shouldSaveVault) {
    await saveFileToOfflineVault({ name, type: mimeType, size }, buffer, lower.endsWith('.pdf') ? 'PDF Belge' : 'Görsel');
  }
  const blob = new Blob([buffer], { type: mimeType || (lower.endsWith('.pdf') ? 'application/pdf' : 'image/png') });
  const objUrl = URL.createObjectURL(blob);

  if (lower.endsWith('.png') || lower.endsWith('.jpg') || lower.endsWith('.jpeg')) {
    box.innerHTML = `
      <div class="stack" style="gap:8px;">
        <div class="row-between">
          <strong>🖼️ ${escapeHtml(name)} (Çevrimdışı Kasaya Kaydedildi)</strong>
          <a href="${objUrl}" download="${escapeHtml(name)}" class="btn btn-outline btn-sm">İndir</a>
        </div>
        <img src="${objUrl}" alt="${escapeHtml(name)}" style="max-height:260px;object-fit:contain;border-radius:8px;border:1px solid var(--border);background:#fff;">
      </div>
    `;
  } else {
    box.innerHTML = `
      <div class="row-between">
        <div>
          <span class="badge badge-blue">📄 PDF / BELGE KAYDEDİLDİ</span>
          <div style="font-weight:800;margin-top:4px;">${escapeHtml(name)}</div>
          <div style="font-size:0.75rem;color:var(--text-secondary);">Çevrimdışı kasadan istediğiniz zaman açabilirsiniz.</div>
        </div>
        <a href="${objUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Belgeyi Aç ↗</a>
      </div>
    `;
  }
  showToast(`📂 ${name} çevrimdışı kasaya eklendi.`);
}

function applyPendingUpload() {
  if (!pendingParsedUpload) return;
  const p = pendingParsedUpload;

  if (p.kind === 'JSON_BACKUP' && p.data) {
    if (currentUser.role !== 'admin') {
      showToast('Tam sistem yedeğini geri yüklemek için Yönetici rolü gereklidir.', true);
      return;
    }
    if (p.data.settings) settings = { ...cloneObj(DEFAULT_SETTINGS), ...p.data.settings };
    if (Array.isArray(p.data.molds) && p.data.molds.length) molds = p.data.molds;
    if (Array.isArray(p.data.users) && p.data.users.length) users = p.data.users;
    if (p.data.rolePermissions) rolePermissions = { ...cloneObj(DEFAULT_PERMISSIONS), ...p.data.rolePermissions };
    if (Array.isArray(p.data.quoteItems)) quoteItems = p.data.quoteItems;
    if (Array.isArray(p.data.savedQuotes)) savedQuotes = p.data.savedQuotes;
    if (Array.isArray(p.data.slitItems) && p.data.slitItems.length) slitItems = p.data.slitItems;
    syncMasterConfigToFirebase();
    saveAppState();
    refreshAllViewsAfterConfigUpdate();
    showToast('✅ Tam sistem yedeği başarıyla geri yüklendi!');
    return;
  }

  if (p.kind === 'MOLDS' && Array.isArray(p.molds)) {
    if (!hasPerm('manageMolds')) {
      showToast('Kalıp veritabanını güncelleme yetkiniz bulunmuyor.', true);
      return;
    }
    molds = p.molds;
    activeMold = molds[0] || null;
    syncMasterConfigToFirebase();
    refreshAllViewsAfterConfigUpdate();
    showToast(`✅ ${molds.length} adet kalıp ve bant tablosu sisteme aktarıldı!`);
    return;
  }

  if (p.kind === 'SLIT') {
    document.getElementById('slitCoilWidth').value = p.coilW;
    document.getElementById('slitCoilKg').value = p.coilKg;
    document.getElementById('slitThickness').value = p.thick;
    slitItems = cloneObj(p.bands);
    renderSlitWorkspace();
    switchTab('slit');
    showToast('✂️ Dilme programı başarıyla yüklendi!');
    return;
  }

  if (p.kind === 'ORDER_LIST' && Array.isArray(p.items)) {
    quoteItems = quoteItems.concat(p.items);
    saveAppState();
    renderQuoteView();
    switchTab('quote');
    showToast(`📋 ${p.items.length} kalem sipariş teklif listesine aktarıldı!`);
  }
}

function downloadMoldDatabaseExcel() {
  const header = ['Hat', 'Kalıp', 'Tip', 'Profil Ölçüsü', 'Kenar A', 'Kenar B', '1 Bağ Adedi', ...ALL_WALL_COLUMNS.map((w) => `${w}mm`), 'Not'];
  const rows = [header];
  molds.forEach((m) => {
    rows.push([
      `${m.line} HAT`,
      m.kalip,
      m.type,
      m.label,
      m.a,
      m.b || 0,
      m.defaultBag,
      ...ALL_WALL_COLUMNS.map((w) => (m.strips && m.strips[w] !== undefined ? m.strips[w] : '')),
      m.note || ''
    ]);
  });
  exportArrayToSpreadsheet(rows, 'UMITCK_45_Kalip_ve_Bant_Veritabani.xlsx', 'Kalip_Veritabani');
}

function downloadSampleOrderExcel() {
  const rows = [
    ['Profil Ölçüsü (Tek Arama Formatı)', 'Açıklama', 'Boy (m)', 'Miktar (Boy Adedi)', 'Fiyat Bazı (KG / BOY)', 'Birim Fiyat'],
    ['40x20x1.5', 'Kutu Profil', 6, 120, 'KG', 145],
    ['50x50x2', 'Kare Profil', 6, 100, 'BOY', 1850],
    ['60,3 boru 2.5', 'Sanayi Borusu', 6, 74, 'KG', 148],
    ['80x40x3', '140 Hat Kutu', 6, 60, 'KG', 150],
    ['100x100x4', 'Ağır Kutu Profil', 6, 27, 'BOY', 8900]
  ];
  exportArrayToSpreadsheet(rows, 'Ornek_Siparis_Yukleme_Sablonu.xlsx', 'Siparis_Sablonu');
}

function exportFullSystemBackupJson() {
  const payload = {
    app: 'UMITCK ERP PWA',
    version: '5.2.0',
    exportedAt: new Date().toISOString(),
    settings,
    molds,
    users,
    rolePermissions,
    quoteItems,
    savedQuotes,
    slitItems
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  triggerBlobDownload(blob, `UMITCK_ERP_Tam_Yedek_${new Date().toISOString().slice(0, 10)}.json`);
  showToast('💾 Tam sistem yedeği (.json) indirildi.');
}

function pickFromMatrix(moldId, wallNum) {
  selectMold(moldId, wallNum);
  switchTab('calc');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  showToast(`⚡ ${activeMold ? activeMold.label : ''} • ${wallNum} mm hesaplamaya yüklendi.`);
}

function renderFullMatrixTables() {
  const container = document.getElementById('fullMatrixTablesContainer');
  if (!container) return;

  const groups = [
    { line: '63', title: '⚙️ 63 HAT KALIP & BANT GENİŞLİĞİ MATRİSİ (21Ø – 63Ø)', badgeCls: 'badge-blue', cols: ['0.8', '1', '1.5', '2', '2.5', '3', '3.5', '4'] },
    { line: '140', title: '🏭 140 HAT KALIP & BANT GENİŞLİĞİ MATRİSİ (63Ø – 139,7Ø)', badgeCls: 'badge-purple', cols: ['1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5'] }
  ];

  const customLineMolds = molds.filter((m) => m.line !== '63' && m.line !== '140');
  if (customLineMolds.length) {
    groups.push({ line: 'OZEL', title: '🔩 ÖZEL HAT KALIPLARI', badgeCls: 'badge-amber', cols: ALL_WALL_COLUMNS });
  }

  container.innerHTML = groups.map((grp) => {
    const list = molds.filter((m) => (grp.line === 'OZEL' ? (m.line !== '63' && m.line !== '140') : m.line === grp.line));
    if (!list.length) return '';

    const headCols = grp.cols.map((w) => `<th class="text-center mono">${w} mm</th>`).join('');
    const bodyRows = list.map((m) => {
      const cells = grp.cols.map((w) => {
        const val = m.strips ? m.strips[w] : undefined;
        if (val === undefined) return `<td class="text-center text-muted">—</td>`;
        const over63 = m.line === '63' && Number(w) > (settings.max63Wall || 2.9);
        return `
          <td class="text-center">
            <button type="button" onclick="pickFromMatrix('${m.id}', ${Number(w)})" class="mono fw-800" style="padding:3px 7px;border-radius:6px;border:1px solid ${over63 ? 'var(--danger-border)' : 'var(--amber-border)'};background:${over63 ? 'var(--danger-soft)' : 'var(--amber-soft)'};color:${over63 ? 'var(--danger)' : 'var(--amber)'};cursor:pointer;">
              ${val}
            </button>
          </td>
        `;
      }).join('');

      return `
        <tr>
          <td><span class="badge ${grp.badgeCls} mono">${escapeHtml(m.kalip)}</span></td>
          <td><strong>${escapeHtml(m.label)}</strong> <span class="text-muted" style="font-size:0.72rem;">(${escapeHtml(m.type)})</span></td>
          <td class="text-center mono fw-700">${m.defaultBag}</td>
          ${cells}
          <td style="font-size:0.73rem;color:var(--text-muted);">${escapeHtml(m.note || '')}</td>
        </tr>
      `;
    }).join('');

    return `
      <div>
        <div style="font-size:0.84rem;font-weight:800;margin-bottom:6px;color:var(--primary);">${grp.title} (${list.length} Profil)</div>
        <div class="table-wrap">
          <table class="corp-table">
            <thead>
              <tr>
                <th>Kalıp</th>
                <th>Profil Ölçüsü</th>
                <th class="text-center">1 Bağ</th>
                ${headCols}
                <th>Not</th>
              </tr>
            </thead>
            <tbody>${bodyRows}</tbody>
          </table>
        </div>
      </div>
    `;
  }).join('');
}

// ==================== 14. ROL BAZLI ERİŞİM (RBAC) & YÖNETİCİ TAM KONTROL PANELİ ====================

function openRoleModal(preselectAdmin = false) {
  pendingRoleTargetUser = null;
  document.getElementById('pinEntryBox').classList.add('hidden');
  document.getElementById('inputRolePin').value = '';

  const listEl = document.getElementById('roleUsersModalList');
  listEl.innerHTML = users.map((u) => {
    const meta = ROLE_META[u.role] || ROLE_META.viewer;
    const isCur = currentUser && currentUser.id === u.id;
    const needPin = settings.requirePinOnSwitch && u.pin && !isCur;
    return `
      <button type="button" onclick="selectUserForSwitch('${u.id}')" style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-radius:10px;border:2px solid ${isCur ? 'var(--primary)' : 'var(--border)'};background:${isCur ? 'var(--primary-soft)' : 'var(--surface-alt)'};text-align:left;width:100%;">
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-size:1.35rem;">${meta.icon}</span>
          <div>
            <div style="font-weight:800;font-size:0.88rem;color:var(--text);">${escapeHtml(u.name)}</div>
            <div style="font-size:0.72rem;color:var(--text-muted);">${meta.title} Rolü ${needPin ? '• 🔒 PIN Korumalı' : '• Hızlı Geçiş'}</div>
          </div>
        </div>
        <span class="badge ${isCur ? 'badge-blue' : 'badge-neutral'}">${isCur ? 'Aktif' : 'Seç'}</span>
      </button>
    `;
  }).join('');

  document.getElementById('roleModal').classList.remove('hidden');

  if (preselectAdmin) {
    const adminUser = users.find((u) => u.role === 'admin');
    if (adminUser) selectUserForSwitch(adminUser.id);
  }
}

function closeRoleModal() {
  document.getElementById('roleModal').classList.add('hidden');
  pendingRoleTargetUser = null;
}

function selectUserForSwitch(userId) {
  const target = users.find((u) => u.id === userId);
  if (!target) return;

  if (currentUser && currentUser.id === target.id) {
    closeRoleModal();
    return;
  }

  if (settings.requirePinOnSwitch && target.pin && String(target.pin).trim().length > 0) {
    pendingRoleTargetUser = target;
    document.getElementById('pinPromptLabel').innerText = `🔒 "${target.name}" için PIN Kodu Girin:`;
    document.getElementById('pinEntryBox').classList.remove('hidden');
    const pinInp = document.getElementById('inputRolePin');
    pinInp.value = '';
    setTimeout(() => pinInp.focus(), 40);
    return;
  }

  activateUserSession(target);
}

function submitRolePin() {
  if (!pendingRoleTargetUser) return;
  const entered = document.getElementById('inputRolePin').value.trim();
  if (entered !== String(pendingRoleTargetUser.pin).trim()) {
    showToast('Hatalı PIN kodu! (Varsayılan Yönetici PIN: 1234)', true);
    return;
  }
  activateUserSession(pendingRoleTargetUser);
}

function activateUserSession(userObj) {
  currentUser = userObj;
  try { localStorage.setItem('umitck_v5_active_user_id', currentUser.id); } catch (e) {}
  closeRoleModal();
  applyRolePermissionsToUI();
  recalculateMain(false);
  showToast(`${(ROLE_META[currentUser.role] || ROLE_META.viewer).icon} Aktif Rol: ${currentUser.name}`);
}

function applyRolePermissionsToUI() {
  const meta = ROLE_META[currentUser.role] || ROLE_META.viewer;
  document.getElementById('activeRoleIcon').innerText = meta.icon;
  document.getElementById('activeRoleLabel').innerText = meta.title;

  const canViewPrices = hasPerm('viewPrices');
  const canEditPrices = hasPerm('editPrices');
  const canUseSlitter = hasPerm('useSlitter');
  const canUpload = hasPerm('uploadFiles');

  // Fiyat Kartı vs Operatör Kartı
  document.getElementById('pricingCard').classList.toggle('hidden', !canViewPrices);
  document.getElementById('operatorOnlyActionsCard').classList.toggle('hidden', canViewPrices);

  // Fiyat input düzenleme kilidi
  document.getElementById('inputKgPrice').readOnly = !canEditPrices;
  document.getElementById('inputPiecePrice').readOnly = !canEditPrices;
  document.getElementById('inputDiscountPct').readOnly = !canEditPrices;

  // Sekme görünürlükleri
  document.getElementById('dTab_quote').classList.toggle('hidden', !canViewPrices);
  document.getElementById('mTab_quote').classList.toggle('hidden', !canViewPrices);
  document.getElementById('dTab_slit').classList.toggle('hidden', !canUseSlitter);
  document.getElementById('mTab_slit').classList.toggle('hidden', !canUseSlitter);
  document.getElementById('btnQuickUpload').classList.toggle('hidden', !canUpload);

  // Mevcut açık sekme artık yetkisizse Hesap sekmesine dön
  if (activeTab === 'admin' && currentUser.role !== 'admin') {
    switchTab('calc');
  } else if (activeTab === 'quote' && !canViewPrices) {
    switchTab('calc');
  } else if (activeTab === 'slit' && !canUseSlitter) {
    switchTab('calc');
  }
}

// --- Yönetim Paneli Alt Sekmeler & Form Yönetimi ---
function switchAdminSubTab(sub) {
  ['general', 'pricing', 'molds', 'roles'].forEach((k) => {
    const btn = document.getElementById('admSub_' + k);
    const panel = document.getElementById('admPanel_' + k);
    if (btn) btn.classList.toggle('active', k === sub);
    if (panel) panel.classList.toggle('hidden', k !== sub);
  });
  if (sub === 'molds') renderAdminMoldTable();
  if (sub === 'roles') renderAdminUsersAndPermissions();
}

function populateAdminForm() {
  const setVal = (id, v) => {
    const el = document.getElementById(id);
    if (el) el.value = v ?? '';
  };

  setVal('admBrandName', settings.brandName);
  setVal('admBrandCode', settings.brandCode);
  setVal('admBrandSub', settings.brandSub);
  setVal('admCompanyLegal', settings.companyLegal);
  setVal('admCompanyPhone', settings.companyPhone);
  setVal('admCompanyAddress', settings.companyAddress);
  setVal('admCompanyTaxId', settings.companyTaxId);
  setVal('admQuoteFooter', settings.quoteFooter);

  setVal('admDefaultDensity', settings.defaultDensity);
  setVal('admMax63Wall', settings.max63Wall);
  setVal('admStripRoundStep', String(settings.stripRoundStep || 0.5));
  setVal('admTruckTon', settings.truckTon);
  setVal('admQuickLengths', (settings.quickLengths || [6, 12]).join(', '));
  setVal('admQuickBundles', (settings.quickBundles || [1, 2, 5, 10]).join(', '));
  setVal('admStandardCoils', (settings.standardCoils || [1000, 1219, 1250, 1380, 1500]).join(', '));
  setVal('admDefaultTrim', settings.defaultTrim);
  setVal('admDefaultKerf', settings.defaultKerf);

  setVal('admDefaultCurrency', settings.defaultCurrency);
  setVal('admDefaultKgPrice', settings.defaultKgPrice);
  setVal('admDefaultVatRate', settings.defaultVatRate);
  setVal('admMinFloorKgPrice', settings.minFloorKgPrice);
  setVal('admMaxDiscountPct', settings.maxDiscountPct);
  setVal('admQuickPrices', (settings.quickPrices || [135, 140, 145, 150, 160]).join(', '));

  setVal('admRawCostPerKg', settings.rawCostPerKg);
  setVal('admProdCostPerKg', settings.prodCostPerKg);
  setVal('admRateUSD', settings.rateUSD);
  setVal('admRateEUR', settings.rateEUR);
  setVal('admRateTRY', settings.rateTRY);

  const pinChk = document.getElementById('admRequirePinOnSwitch');
  if (pinChk) pinChk.checked = !!settings.requirePinOnSwitch;

  renderAdminMoldTable();
  renderAdminUsersAndPermissions();
}

function parseNumberListInput(str, fallback) {
  const arr = String(str || '')
    .split(/[,;\s]+/)
    .map((s) => parseFloat(s.trim()))
    .filter((n) => isFinite(n) && n > 0);
  return arr.length ? arr : fallback;
}

function saveAdminSettingsFromForm() {
  if (currentUser.role !== 'admin') {
    showToast('Bu işlem yalnızca Yönetici yetkisiyle yapılabilir.', true);
    return;
  }

  const g = (id) => (document.getElementById(id) ? document.getElementById(id).value : '');

  settings.brandName = g('admBrandName').trim() || 'UMITCK ERP';
  settings.brandCode = g('admBrandCode').trim() || 'UC';
  settings.brandSub = g('admBrandSub').trim() || DEFAULT_SETTINGS.brandSub;
  settings.companyLegal = g('admCompanyLegal').trim() || settings.brandName;
  settings.companyPhone = g('admCompanyPhone').trim();
  settings.companyAddress = g('admCompanyAddress').trim();
  settings.companyTaxId = g('admCompanyTaxId').trim();
  settings.quoteFooter = g('admQuoteFooter').trim();

  settings.defaultDensity = Math.max(0.5, parseFloat(g('admDefaultDensity')) || 7.85);
  settings.max63Wall = Math.max(0.8, parseFloat(g('admMax63Wall')) || 2.9);
  settings.stripRoundStep = parseFloat(g('admStripRoundStep')) || 0.5;
  settings.truckTon = Math.max(1, parseFloat(g('admTruckTon')) || 25);
  settings.quickLengths = parseNumberListInput(g('admQuickLengths'), [6, 12]);
  settings.quickBundles = parseNumberListInput(g('admQuickBundles'), [1, 2, 5, 10]);
  settings.standardCoils = parseNumberListInput(g('admStandardCoils'), [1000, 1219, 1250, 1380, 1500]);
  settings.defaultTrim = Math.max(0, parseFloat(g('admDefaultTrim')) || 0);
  settings.defaultKerf = Math.max(0, parseFloat(g('admDefaultKerf')) || 0);

  settings.defaultCurrency = g('admDefaultCurrency') || 'DA';
  settings.defaultKgPrice = Math.max(0, parseFloat(g('admDefaultKgPrice')) || 145);
  settings.defaultVatRate = Math.max(0, parseFloat(g('admDefaultVatRate')) || 0);
  settings.minFloorKgPrice = Math.max(0, parseFloat(g('admMinFloorKgPrice')) || 0);
  settings.maxDiscountPct = Math.max(0, parseFloat(g('admMaxDiscountPct')) || 25);
  settings.quickPrices = parseNumberListInput(g('admQuickPrices'), [135, 140, 145, 150, 160]);

  settings.rawCostPerKg = Math.max(0, parseFloat(g('admRawCostPerKg')) || 0);
  settings.prodCostPerKg = Math.max(0, parseFloat(g('admProdCostPerKg')) || 0);
  settings.rateUSD = Math.max(0.01, parseFloat(g('admRateUSD')) || 135);
  settings.rateEUR = Math.max(0.01, parseFloat(g('admRateEUR')) || 146);
  settings.rateTRY = Math.max(0.01, parseFloat(g('admRateTRY')) || 4.1);

  document.getElementById('selectCurrency').value = settings.defaultCurrency;
  document.getElementById('inputKgPrice').value = settings.defaultKgPrice;
  document.getElementById('quoteVatRate').value = settings.defaultVatRate;
  document.getElementById('slitTrimMm').value = settings.defaultTrim;
  document.getElementById('slitKerfMm').value = settings.defaultKerf;

  syncMasterConfigToFirebase();
  refreshAllViewsAfterConfigUpdate();
  showToast('👑 Tüm yönetici ayarları kaydedildi ve Firebase Buluta senkronize edildi!');
}

function resetFactoryDefaultsConfirm() {
  if (currentUser.role !== 'admin') return;
  if (!window.confirm('Tüm kalıp, fiyat, kurumsal kimlik ve rol ayarları ilk fabrika değerlerine döndürülecek. Onaylıyor musunuz?')) {
    return;
  }
  settings = cloneObj(DEFAULT_SETTINGS);
  molds = cloneObj(DEFAULT_MOLDS);
  users = cloneObj(DEFAULT_USERS);
  rolePermissions = cloneObj(DEFAULT_PERMISSIONS);
  currentUser = users[0];
  activeMold = molds.find((m) => m.id === '63_38_K_40x20') || molds[0];
  syncMasterConfigToFirebase();
  refreshAllViewsAfterConfigUpdate();
  populateAdminForm();
  showToast('Fabrika varsayılan ayarları geri yüklendi.');
}

// --- Kalıp & Bant CRUD Yönetimi ---
function renderAdminMoldTable() {
  const tbody = document.getElementById('admMoldTableBody');
  if (!tbody) return;
  const q = (document.getElementById('admMoldFilterInput')?.value || '').toLowerCase().trim();

  const filtered = molds.filter((m) => {
    if (!q) return true;
    return `${m.line} ${m.kalip} ${m.label} ${m.type} ${m.note || ''}`.toLowerCase().includes(q);
  });

  tbody.innerHTML = filtered.map((m) => {
    const stripSummary = Object.entries(m.strips || {})
      .sort((a, b) => Number(a[0]) - Number(b[0]))
      .map(([w, s]) => `<span class="badge badge-neutral mono" style="margin:1px;">${w}→<b>${s}</b></span>`)
      .join(' ');
    const badgeCls = m.line === '63' ? 'badge-blue' : 'badge-purple';
    return `
      <tr>
        <td><span class="badge ${badgeCls}">${escapeHtml(m.line)}H</span></td>
        <td class="mono fw-700">${escapeHtml(m.kalip)}</td>
        <td>${escapeHtml(m.type)}</td>
        <td><strong>${escapeHtml(m.label)}</strong></td>
        <td class="text-center mono fw-800">${m.defaultBag}</td>
        <td>${stripSummary}</td>
        <td style="font-size:0.74rem;color:var(--text-muted);">${escapeHtml(m.note || '')}</td>
        <td class="text-center">
          <button onclick="openMoldEditorModal('${m.id}')" class="btn btn-outline btn-sm">Düzenle</button>
        </td>
      </tr>
    `;
  }).join('');
}

function openMoldEditorModal(moldId) {
  if (!hasPerm('manageMolds')) {
    showToast('Kalıp düzenleme yetkiniz yok.', true);
    return;
  }
  const existing = moldId ? molds.find((x) => x.id === moldId) : null;
  document.getElementById('moldEditorTitle').innerText = existing ? `🔩 Kalıp Düzenle: ${existing.label}` : '➕ Yeni Kalıp / Profil Tanımla';
  document.getElementById('editMoldId').value = existing ? existing.id : '';
  document.getElementById('editMoldLine').value = existing ? existing.line : '63';
  document.getElementById('editMoldKalip').value = existing ? existing.kalip : '38Ø';
  document.getElementById('editMoldType').value = existing ? existing.type : 'Kutu';
  document.getElementById('editMoldBag').value = existing ? existing.defaultBag : 60;
  document.getElementById('editMoldLabel').value = existing ? existing.label : '';
  document.getElementById('editMoldA').value = existing ? existing.a : 40;
  document.getElementById('editMoldB').value = existing ? (existing.b || 0) : 20;
  document.getElementById('editMoldNote').value = existing ? (existing.note || '') : '';

  document.getElementById('btnDeleteMoldModal').classList.toggle('hidden', !existing);

  const allCols = Array.from(new Set([...ALL_WALL_COLUMNS, ...Object.keys(existing?.strips || {})]))
    .sort((a, b) => Number(a) - Number(b));

  document.getElementById('editMoldStripsGrid').innerHTML = allCols.map((w) => {
    const val = existing && existing.strips && existing.strips[w] !== undefined ? existing.strips[w] : '';
    return `
      <div class="field">
        <label class="field-label"><span>${w} mm Et</span><span>Bant (mm)</span></label>
        <input type="number" step="0.5" data-wall-key="${w}" value="${val}" placeholder="—" class="field-input mono edit-strip-cell">
      </div>
    `;
  }).join('');

  onEditMoldTypeChange();
  document.getElementById('moldEditorModal').classList.remove('hidden');
}

function closeMoldEditorModal() {
  document.getElementById('moldEditorModal').classList.add('hidden');
}

function onEditMoldTypeChange() {
  const tp = document.getElementById('editMoldType').value;
  const inpB = document.getElementById('editMoldB');
  if (tp === 'Boru') {
    inpB.value = 0;
    inpB.disabled = true;
  } else {
    inpB.disabled = false;
  }
}

function saveMoldFromModal() {
  if (!hasPerm('manageMolds')) return;
  const id = document.getElementById('editMoldId').value.trim();
  const line = document.getElementById('editMoldLine').value;
  const kalip = document.getElementById('editMoldKalip').value.trim() || 'Özel';
  const type = document.getElementById('editMoldType').value;
  const defaultBag = Math.max(1, parseInt(document.getElementById('editMoldBag').value) || 30);
  const a = Math.max(1, parseFloat(document.getElementById('editMoldA').value) || 40);
  const b = type === 'Boru' ? 0 : Math.max(1, parseFloat(document.getElementById('editMoldB').value) || a);
  const label = document.getElementById('editMoldLabel').value.trim() || (type === 'Boru' ? `Ø${a} Boru` : `${a}x${b}`);
  const note = document.getElementById('editMoldNote').value.trim();

  const strips = {};
  document.querySelectorAll('.edit-strip-cell').forEach((inp) => {
    const wk = inp.getAttribute('data-wall-key');
    const v = parseFloat(inp.value);
    if (wk && isFinite(v) && v > 5) {
      strips[cleanNumKey(wk)] = v;
    }
  });

  if (Object.keys(strips).length === 0) {
    showToast('En az bir et kalınlığı için bant genişliği girmelisiniz.', true);
    return;
  }

  const shape = type === 'Boru' ? 'pipe' : (Math.abs(a - b) < 0.05 ? 'square' : 'box');
  const record = {
    id: id || `${line}_custom_${Date.now()}`,
    line,
    kalip,
    type,
    shape,
    label,
    aliases: type === 'Kutu' && Math.abs(a - b) > 0.1 ? `${b}x${a} ${a}*${b}` : '',
    a,
    b,
    defaultBag,
    note,
    strips
  };

  if (id) {
    const idx = molds.findIndex((x) => x.id === id);
    if (idx !== -1) molds[idx] = record;
  } else {
    molds.push(record);
  }

  activeMold = record;
  closeMoldEditorModal();
  syncMasterConfigToFirebase();
  refreshAllViewsAfterConfigUpdate();
  renderAdminMoldTable();
  showToast(`✅ ${record.label} kalıp veritabanına kaydedildi.`);
}

function deleteMoldFromModal() {
  const id = document.getElementById('editMoldId').value.trim();
  if (!id) return;
  if (molds.length <= 1) {
    showToast('Sistemde en az 1 kalıp bulunmalıdır.', true);
    return;
  }
  if (!window.confirm('Bu kalıbı veritabanından silmek istediğinize emin misiniz?')) return;
  molds = molds.filter((x) => x.id !== id);
  if (activeMold && activeMold.id === id) activeMold = molds[0];
  closeMoldEditorModal();
  syncMasterConfigToFirebase();
  refreshAllViewsAfterConfigUpdate();
  renderAdminMoldTable();
  showToast('Kalıp silindi.');
}

// --- Kullanıcılar, PIN ve RBAC Yetki Matrisi ---
function renderAdminUsersAndPermissions() {
  const uBox = document.getElementById('admUsersList');
  const mBody = document.getElementById('admPermissionsMatrixBody');
  if (!uBox || !mBody) return;

  const pinChk = document.getElementById('admRequirePinOnSwitch');
  if (pinChk) pinChk.checked = !!settings.requirePinOnSwitch;

  uBox.innerHTML = users.map((u) => {
    const meta = ROLE_META[u.role] || ROLE_META.viewer;
    return `
      <div style="padding:10px 12px;border-radius:9px;background:var(--surface-alt);border:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;gap:8px;">
        <div>
          <div style="font-weight:800;font-size:0.86rem;">${meta.icon} ${escapeHtml(u.name)}</div>
          <div class="mono text-muted" style="font-size:0.72rem;">Rol: <b>${meta.title}</b> • PIN: <b>${u.pin ? '•••• (' + escapeHtml(u.pin) + ')' : 'Yok'}</b></div>
        </div>
        <div class="row-wrap">
          <button onclick="openUserEditorModal('${u.id}')" class="btn btn-outline btn-sm">Düzenle</button>
          <button onclick="deleteUserAccount('${u.id}')" class="btn btn-danger btn-sm">Sil</button>
        </div>
      </div>
    `;
  }).join('');

  mBody.innerHTML = PERMISSION_LABELS.map((perm) => {
    const cols = ['sales', 'operator', 'viewer'].map((roleKey) => {
      const checked = !!(rolePermissions[roleKey] && rolePermissions[roleKey][perm.key]);
      return `
        <td class="text-center">
          <input type="checkbox" ${checked ? 'checked' : ''} onchange="toggleRolePermission('${roleKey}', '${perm.key}', this.checked)" style="width:18px;height:18px;cursor:pointer;">
        </td>
      `;
    }).join('');
    return `
      <tr>
        <td style="font-weight:700;">${escapeHtml(perm.label)}</td>
        ${cols}
      </tr>
    `;
  }).join('');
}

function onPinRequirementToggle(checked) {
  settings.requirePinOnSwitch = !!checked;
  syncMasterConfigToFirebase();
  showToast(checked ? '🔒 Rol geçişlerinde PIN koruması etkinleştirildi.' : '🔓 Hızlı rol geçişi etkinleştirildi.');
}

function toggleRolePermission(role, permKey, checked) {
  if (!rolePermissions[role]) rolePermissions[role] = {};
  rolePermissions[role][permKey] = !!checked;
  applyRolePermissionsToUI();
  syncMasterConfigToFirebase();
}

function openUserEditorModal(userId) {
  const existing = userId ? users.find((u) => u.id === userId) : null;
  document.getElementById('editUserId').value = existing ? existing.id : '';
  document.getElementById('editUserName').value = existing ? existing.name : '';
  document.getElementById('editUserRole').value = existing ? existing.role : 'sales';
  document.getElementById('editUserPin').value = existing ? (existing.pin || '') : '';
  document.getElementById('userEditorModal').classList.remove('hidden');
}

function closeUserEditorModal() {
  document.getElementById('userEditorModal').classList.add('hidden');
}

function saveUserFromModal() {
  const id = document.getElementById('editUserId').value.trim();
  const name = document.getElementById('editUserName').value.trim();
  const role = document.getElementById('editUserRole').value;
  const pin = document.getElementById('editUserPin').value.trim();

  if (!name) {
    showToast('Lütfen kullanıcı adı girin.', true);
    return;
  }

  if (id) {
    const existing = users.find((u) => u.id === id);
    if (existing && existing.role === 'admin' && role !== 'admin') {
      const adminCount = users.filter((u) => u.role === 'admin').length;
      if (adminCount <= 1) {
        showToast('Sistemdeki tek Yönetici hesabının rolü düşürülemez!', true);
        return;
      }
    }
    const idx = users.findIndex((u) => u.id === id);
    if (idx !== -1) {
      users[idx] = { id, name, role, pin };
      if (currentUser.id === id) currentUser = users[idx];
    }
  } else {
    users.push({ id: 'u_' + Date.now(), name, role, pin });
  }

  closeUserEditorModal();
  renderAdminUsersAndPermissions();
  applyRolePermissionsToUI();
  syncMasterConfigToFirebase();
  showToast('👤 Kullanıcı kaydedildi.');
}

function deleteUserAccount(userId) {
  const target = users.find((u) => u.id === userId);
  if (!target) return;
  if (target.role === 'admin' && users.filter((u) => u.role === 'admin').length <= 1) {
    showToast('Sistemde en az bir Yönetici hesabı kalmalıdır!', true);
    return;
  }
  users = users.filter((u) => u.id !== userId);
  if (currentUser.id === userId) {
    currentUser = users[0];
    applyRolePermissionsToUI();
  }
  renderAdminUsersAndPermissions();
  syncMasterConfigToFirebase();
  showToast('Kullanıcı silindi.');
}

// ==================== 15. NAVİGASYON, TEMA, HIZLI ÇİPLER, PWA & BAŞLATMA ====================

function switchTab(tabId) {
  if (tabId === 'admin' && currentUser.role !== 'admin') {
    showToast('🔒 Yönetim Paneline erişmek için Yönetici hesabına geçiş yapın.', true);
    openRoleModal(true);
    return;
  }
  if (tabId === 'quote' && !hasPerm('viewPrices')) {
    showToast('Bu rolde Teklif & Fiyat sekmesi kapalıdır.', true);
    return;
  }
  if (tabId === 'slit' && !hasPerm('useSlitter')) {
    showToast('Bu rolde Dilme sekmesi kapalıdır.', true);
    return;
  }

  activeTab = tabId;
  ['calc', 'quote', 'slit', 'files', 'admin'].forEach((t) => {
    const sec = document.getElementById('view_' + t);
    const dBtn = document.getElementById('dTab_' + t);
    const mBtn = document.getElementById('mTab_' + t);
    if (sec) sec.classList.toggle('hidden', t !== tabId);
    if (dBtn) dBtn.classList.toggle('active', t === tabId);
    if (mBtn) mBtn.classList.toggle('active', t === tabId);
  });

  if (tabId === 'quote') renderQuoteView();
  if (tabId === 'slit') renderSlitWorkspace();
  if (tabId === 'files') {
    renderFullMatrixTables();
    renderVaultFilesList();
  }
  if (tabId === 'admin') populateAdminForm();
}

function toggleTheme() {
  settings.darkMode = !settings.darkMode;
  applyThemeAndBranding();
  saveLocalMasterCache();
}

function applyThemeAndBranding() {
  document.documentElement.classList.toggle('dark', !!settings.darkMode);
  const iconEl = document.getElementById('themeIcon');
  if (iconEl) iconEl.innerText = settings.darkMode ? '☀️' : '🌙';

  document.getElementById('headerBrandLogo').innerText = (settings.brandCode || 'UC').slice(0, 4);
  document.getElementById('headerBrandName').innerText = settings.brandName || 'UMITCK ERP';
  document.getElementById('headerBrandSub').innerText = settings.brandSub || '';
  document.title = `${settings.brandName || 'UMITCK ERP'} — Kurumsal Profil, Dilme & Teklif Sistemi`;
}

function renderDynamicQuickChips() {
  const lenBox = document.getElementById('quickLengthChips');
  if (lenBox) {
    lenBox.innerHTML = (settings.quickLengths || [6, 12]).map((m) =>
      `<button type="button" onclick="setQuickLength(${m})" class="badge badge-blue" style="cursor:pointer;">${m}m</button>`
    ).join('');
  }

  const bagBox = document.getElementById('quickBundleChips');
  if (bagBox) {
    const bBtns = (settings.quickBundles || [1, 2, 5, 10]).map((b) =>
      `<button type="button" onclick="setQuickBundleCount(${b})" class="chip" style="padding:3px 9px;font-size:0.74rem;">${b} Bağ</button>`
    ).join('');
    bagBox.innerHTML = `${bBtns}<button type="button" onclick="applyTruckLoad()" class="chip" style="padding:3px 9px;font-size:0.74rem;border-color:var(--emerald-border);color:var(--emerald);">🚚 ${settings.truckTon || 25}T Tır</button>`;
  }

  const priceRow = document.getElementById('quickPriceChipsRow');
  if (priceRow) {
    const curr = document.getElementById('selectCurrency')?.value || settings.defaultCurrency || 'DA';
    priceRow.innerHTML = `<span class="badge badge-neutral" style="flex-shrink:0;">Hızlı Kg Fiyatı:</span>` +
      (settings.quickPrices || [135, 140, 145, 150, 160]).map((p) =>
        `<button type="button" onclick="setQuickKgPrice(${p})" class="chip mono" style="padding:3px 9px;font-size:0.74rem;">${p} ${escapeHtml(curr)}</button>`
      ).join('');
  }
}

// --- Yerel Önbellek (LocalStorage) Kalıcılığı ---
function saveLocalMasterCache() {
  try {
    localStorage.setItem('umitck_v5_master_config', JSON.stringify({
      settings,
      molds,
      users,
      rolePermissions
    }));
  } catch (e) {}
}

function loadLocalMasterCache() {
  try {
    const raw = localStorage.getItem('umitck_v5_master_config');
    if (raw) {
      const data = JSON.parse(raw);
      if (data.settings) settings = { ...cloneObj(DEFAULT_SETTINGS), ...data.settings };
      if (Array.isArray(data.molds) && data.molds.length) molds = data.molds;
      if (Array.isArray(data.users) && data.users.length) users = data.users;
      if (data.rolePermissions) rolePermissions = { ...cloneObj(DEFAULT_PERMISSIONS), ...data.rolePermissions };
    }
    const savedUid = localStorage.getItem('umitck_v5_active_user_id');
    if (savedUid) {
      const found = users.find((u) => u.id === savedUid);
      if (found) currentUser = found;
    }
  } catch (e) {}
}

function saveAppState() {
  try {
    const state = {
      activeMoldId: activeMold ? activeMold.id : null,
      wall: parseFloat(document.getElementById('inputWall')?.value) || 1.5,
      length: parseFloat(document.getElementById('inputLength')?.value) || 6,
      bundles: parseFloat(document.getElementById('inputBundleCount')?.value) || 1,
      kgPrice: parseFloat(document.getElementById('inputKgPrice')?.value) || settings.defaultKgPrice,
      currency: document.getElementById('selectCurrency')?.value || settings.defaultCurrency,
      pricingBasis,
      custName: document.getElementById('quoteCustName')?.value || '',
      custLoc: document.getElementById('quoteCustLocation')?.value || '',
      custPhone: document.getElementById('quoteCustPhone')?.value || '',
      quoteItems,
      slitItems
    };
    localStorage.setItem('umitck_v5_workspace_state', JSON.stringify(state));
  } catch (e) {}
}

function loadAppStateFromStorage() {
  try {
    const arch = localStorage.getItem('umitck_v5_quotes_archive');
    if (arch) {
      const parsedArch = JSON.parse(arch);
      if (Array.isArray(parsedArch)) savedQuotes = parsedArch;
    }

    const raw = localStorage.getItem('umitck_v5_workspace_state');
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

function refreshAllViewsAfterConfigUpdate() {
  applyThemeAndBranding();
  renderDynamicQuickChips();
  applyRolePermissionsToUI();
  populateSlitDropdown();
  if (!activeMold || !molds.some((m) => m.id === activeMold.id)) {
    activeMold = molds.find((m) => m.id === '63_38_K_40x20') || molds[0];
  }
  if (!isCustomMode && activeMold) {
    const curW = parseFloat(document.getElementById('inputWall').value) || 1.5;
    selectMold(activeMold.id, curW);
  } else {
    recalculateMain();
  }
  renderQuoteView();
  renderSlitWorkspace();
  renderFullMatrixTables();
}

// --- PWA Kurulum & Çevrimdışı (Service Worker) Durumu ---
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPwaPrompt = e;
  const btn = document.getElementById('btnInstallPwa');
  if (btn) btn.classList.remove('hidden');
});

window.addEventListener('appinstalled', () => {
  deferredPwaPrompt = null;
  showToast('📲 UMITCK ERP cihazınıza başarıyla kuruldu!');
});

async function handleInstallPwaClick() {
  if (deferredPwaPrompt) {
    deferredPwaPrompt.prompt();
    await deferredPwaPrompt.userChoice;
    deferredPwaPrompt = null;
    return;
  }
  document.getElementById('pwaGuideModal').classList.remove('hidden');
}

function updateNetworkStatusUI() {
  const isOnline = navigator.onLine;
  const netBadge = document.getElementById('netStatusBadge');
  if (netBadge) {
    if (isOnline) {
      netBadge.className = 'badge badge-emerald';
      netBadge.innerText = '✓ Çevrimdışı Hazır';
    } else {
      netBadge.className = 'badge badge-amber';
      netBadge.innerText = '⚡ Çevrimdışı (Offline) Mod';
    }
  }
  updateFirebaseBadgeUI(isOnline);
}

window.addEventListener('online', updateNetworkStatusUI);
window.addEventListener('offline', updateNetworkStatusUI);

function registerOfflineServiceWorker() {
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
    navigator.serviceWorker.register('./sw.js').catch((err) => {
      console.warn('Service Worker kayıt uyarısı:', err);
    });
  }
}

// --- Uygulama İlk Başlatma (Bootstrap) ---
document.addEventListener('DOMContentLoaded', () => {
  loadLocalMasterCache();
  const ws = loadAppStateFromStorage();

  applyThemeAndBranding();

  // Varsayılan değerleri forma yerleştir
  document.getElementById('selectCurrency').value = (ws && ws.currency) || settings.defaultCurrency || 'DA';
  document.getElementById('inputKgPrice').value = (ws && ws.kgPrice !== undefined) ? ws.kgPrice : (settings.defaultKgPrice || 145);
  document.getElementById('quoteVatRate').value = settings.defaultVatRate ?? 19;
  document.getElementById('slitTrimMm').value = settings.defaultTrim || 0;
  document.getElementById('slitKerfMm').value = settings.defaultKerf || 0;

  if (ws) {
    if (ws.custName) document.getElementById('quoteCustName').value = ws.custName;
    if (ws.custLoc) document.getElementById('quoteCustLocation').value = ws.custLoc;
    if (ws.custPhone) document.getElementById('quoteCustPhone').value = ws.custPhone;
    if (Array.isArray(ws.quoteItems)) quoteItems = ws.quoteItems;
    if (Array.isArray(ws.slitItems) && ws.slitItems.length) slitItems = ws.slitItems;
    if (ws.length) document.getElementById('inputLength').value = ws.length;
    if (ws.bundles) document.getElementById('inputBundleCount').value = ws.bundles;
  }

  renderDynamicQuickChips();
  applyRolePermissionsToUI();
  setupDropzoneEvents();

  const initialMoldId = (ws && ws.activeMoldId && molds.some((m) => m.id === ws.activeMoldId))
    ? ws.activeMoldId
    : ((molds.find((m) => m.id === '63_38_K_40x20') || molds[0]).id);

  selectMold(initialMoldId, ws && ws.wall ? ws.wall : 1.5);
  if (ws && ws.pricingBasis === 'PIECE') {
    setPricingBasis('PIECE');
  }

  populateSlitDropdown();
  renderQuoteView();
  renderSavedQuotesArchive();
  renderSlitWorkspace();
  renderFullMatrixTables();
  renderVaultFilesList();
  updateNetworkStatusUI();
  registerOfflineServiceWorker();
  initFirebaseConnection();
});
