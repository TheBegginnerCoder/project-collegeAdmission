

// ─── DATA ───────────────────────────────────────────────

const jadwalData = [
  { hari: 'Senin',  waktu: '08:50–10:30', mk: 'Statistik Dasar',          dosen: 'Muhammad Fauzi Firdaus',       ruang: 'SC.510', sks: 3, status: 'berlangsung' },
  { hari: 'Senin',  waktu: '10:30–12:10', mk: 'Komunikasi Data',           dosen: 'Maisan Dewi Puspa Khairani',   ruang: 'SC.510', sks: 2, status: 'selesai'     },
  { hari: 'Senin',  waktu: '12:10–14:30', mk: 'Rangkaian Linear Aktif',    dosen: 'Hayadi Hamuda',                ruang: 'SC.510', sks: 2, status: 'libur'       },
  { hari: 'Selasa', waktu: '07:10–08:50', mk: 'Rangkaian Listrik',         dosen: 'Rizka Ardiantika',             ruang: 'SC.510', sks: 2, status: 'mendatang'   },
  { hari: 'Selasa', waktu: '08:50–10:30', mk: 'Interaksi Manusia Komputer',dosen: 'Asep Suryadi',                 ruang: 'SC.510', sks: 2, status: 'mendatang'   },
  { hari: 'Selasa', waktu: '10:30–12:10', mk: 'Sistem Operasi',            dosen: 'Majid Rahman Aziz',            ruang: 'SC.510', sks: 3, status: 'mendatang'   },
  { hari: 'Rabu',   waktu: '07:10–08:50', mk: 'Kalkulus 2',                dosen: 'Resty Amalia Putri',           ruang: 'SC.510', sks: 2, status: 'mendatang'   },
  { hari: 'Rabu',   waktu: '08:50–10:30', mk: 'Sistem Digital 2',          dosen: 'Adiyaksha',                    ruang: 'SC.510', sks: 3, status: 'mendatang'   },
];

const statusBadge = {
  berlangsung: '<span class="badge badge-green">Berlangsung</span>',
  selesai:     '<span class="badge badge-yellow">Selesai</span>',
  mendatang:   '<span class="badge badge-blue">Mendatang</span>',
  libur:       '<span class="badge badge-red">Libur</span>',
};

const mahasiswaData = [
  { nama: 'Aditya Rahman',          nim: '241091950089', prodi: 'Sistem Komputer',   sem: 3},
  { nama: 'Ahmad Faudji',           nim: '241091950094', prodi: 'Sistem Komputer',   sem: 3},
  { nama: 'Amara Najwa',            nim: '241091950114', prodi: 'Sistem Komputer',   sem: 3},
  { nama: 'Arip Sodikin',           nim: '241091950112', prodi: 'Sistem Komputer',   sem: 3},
  { nama: 'Ayatullah',              nim: '241091950051', prodi: 'Sistem Komputer',   sem: 3},
  { nama: 'Dasuki',                 nim: '241091950109', prodi: 'Sistem Komputer',   sem: 3},
  { nama: 'Dimas Abimayu',          nim: '241091950045', prodi: 'Sistem Komputer',   sem: 3},
  { nama: 'Ferry Adiyatama',        nim: '241091950057', prodi: 'Sistem Komputer',   sem: 3},
  { nama: 'Gilang Andriana',        nim: '241091950027', prodi: 'Sistem Komputer',   sem: 3},
  { nama: 'Hadi Hidayatullah',      nim: '241091950054', prodi: 'Sistem Komputer',   sem: 3},
  { nama: 'Husein Khotib',          nim: '241091950092', prodi: 'Sistem Komputer',   sem: 3},
  { nama: 'Irvan Nurwahyu',         nim: '241091950050', prodi: 'Sistem Komputer',   sem: 3},
  { nama: 'Joe Martin',             nim: '241091950403', prodi: 'Sistem Komputer',   sem: 3},
  { nama: 'M Muchlis',              nim: '241091950023', prodi: 'Sistem Komputer',   sem: 3},
  { nama: 'Milan Haryadi',          nim: '241091950067', prodi: 'Sistem Komputer',   sem: 3},
  { nama: 'Muhammad Alek',          nim: '241091950010', prodi: 'Sistem Komputer',   sem: 3},
  { nama: 'Muhamad Zidan R',        nim: '241091950061', prodi: 'Sistem Komputer',   sem: 3},
  { nama: 'Muhammad Dzikri Z',      nim: '241091950012', prodi: 'Sistem Komputer',   sem: 3},
  { nama: 'Nazario Eka P',          nim: '241091950070', prodi: 'Sistem Komputer',   sem: 3},
  { nama: 'Rifat Qoinu G',          nim: '241091950080', prodi: 'Sistem Komputer',   sem: 3},
  { nama: 'Salamania',              nim: '241091950044', prodi: 'Sistem Komputer',   sem: 3},
  { nama: 'Supriana',               nim: '241091950028', prodi: 'Sistem Komputer',   sem: 3},
  { nama: 'Tasya Ayu P',            nim: '241091950116', prodi: 'Sistem Komputer',   sem: 3},
  { nama: 'Tubagus Muhammad N',     nim: '241091950066', prodi: 'Sistem Komputer',   sem: 3},
  { nama: 'Yudhistira Satya W',     nim: '241091950105', prodi: 'Sistem Komputer',   sem: 3},
];

const nilaiData = [
  { kode: 'SKO0153', mk: 'Statistik Dasar',                sks: 3, nilai: 'A', poin: 4.0 },
  { kode: 'SKO0182', mk: 'Komunikasi Data',                sks: 2, nilai: 'A', poin: 4.0 },
  { kode: 'SKO0162', mk: 'Rangkaian Linear Aktif',         sks: 2, nilai: 'A', poin: 4.0 },
  { kode: 'SKO0172', mk: 'Rangkaian Listrik',              sks: 2, nilai: 'A', poin: 4.0 },
  { kode: 'SKO0132', mk: 'Interaksi Manusia dan Komputer', sks: 2, nilai: 'A', poin: 4.0 },
  { kode: 'SKO0143', mk: 'Sistem Operasi',                 sks: 3, nilai: 'A', poin: 4.0 },
  { kode: 'SKO0123', mk: 'Sistem Digital 2',               sks: 3, nilai: 'A', poin: 4.0 },
  { kode: 'SKO0192', mk: 'Kalkulus 2',                     sks: 2, nilai: 'A', poin: 4.0 },
];

const pengumumanData = [
  {
    day: '21', month: 'Apr',
    title: 'Jadwal UTS Semester Genap 2024/2025',
    body: 'UTS akan dilaksanakan mulai 5 Mei s.d. 16 Mei 2025. Mahasiswa diharapkan memperhatikan jadwal dan ruang ujian masing-masing yang tersedia di papan pengumuman tiap gedung.',
    tag: 'Akademik', urgent: true
  },
  {
    day: '19', month: 'Apr',
    title: 'Pendaftaran Beasiswa Bidikmisi Gelombang II',
    body: 'Pendaftaran beasiswa prestasi akademik gelombang II dibuka hingga 30 April 2025. Syarat: IPK ≥ 3.5, tidak sedang menerima beasiswa lain. Formulir tersedia di Biro Kemahasiswaan.',
    tag: 'Beasiswa', urgent: false
  },
  {
    day: '17', month: 'Apr',
    title: 'Seminar Nasional: AI & Masa Depan Teknologi',
    body: 'Hadir bersama pembicara dari Google Indonesia, Gojek, dan Kemenristekdikti. Terbuka untuk umum. Daftar melalui tautan di portal e-learning kampus.',
    tag: 'Kegiatan', urgent: false
  },
  {
    day: '15', month: 'Apr',
    title: 'Penutupan Pendaftaran KRS Semester Genap',
    body: 'Pengisian KRS ditutup pada 30 April 2025. Mahasiswa yang belum mengisi harap segera menghubungi Dosen Wali masing-masing.',
    tag: 'Akademik', urgent: true
  },
  {
    day: '10', month: 'Apr',
    title: 'Pemeliharaan Sistem E-Learning (Terjadwal)',
    body: 'Sistem e-learning akan mengalami pemeliharaan pada Sabtu, 26 April 2025 pukul 00.00–06.00 WIB. Selama pemeliharaan layanan tidak dapat diakses.',
    tag: 'Sistem', urgent: false
  },
];

const fasilitasData = [
  { icon: '📚', nama: 'Perpustakaan',   desc: 'Koleksi 80.000+ buku & e-journal', status: 'Buka'      },
  { icon: '💻', nama: 'Lab Komputer 1', desc: '40 unit workstation terbaru',       status: 'Tersedia'  },
  { icon: '🔬', nama: 'Lab Riset',      desc: 'Peralatan penelitian lengkap',      status: 'Digunakan' },
  { icon: '⚽', nama: 'Lapangan Bola',  desc: 'Rumput sintetis berstandar',        status: 'Tersedia'  },
  { icon: '🍽️', nama: 'Kantin Utama',  desc: '24 tenant makanan & minuman',       status: 'Buka'      },
  { icon: '🏥', nama: 'Klinik Kampus',  desc: 'minimalis dan bertenaga ahli',       status: 'Buka'      },
];

const galeriData = [
  {
    type: 'foto',
    src:   'file media/zidan.jpeg',
    thumb: 'file media/zidThumb.png',
    title: 'Muhammad Zidan Rahmatullah',
    tag:   '241091950064'
  },
  {
    type: 'foto',
    src:   'file media/arip.jpeg',
    thumb: 'file media/arThumb.png',
    title: 'Arip Sodikin',
    tag:   '2410919500'
  },
  {
    type: 'foto',
    src:   'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=85',
    thumb: '/Users/zidan/Downloads/Gemini_Generated_Image_8mhi0l8mhi0l8mhi.png',
    title: 'Husen Khotib',
    tag:   '2410919500'
  },
  {
    type: 'video',
    src:   'file media/hbd.mp4',
    thumb: 'file media/arip.jpeg',
    title: 'Video Profil Kampus Unpam Serang',
    tag:   'Video · 02:45 · April 2026'
  },
];

// Indeks item galeri yang sedang dibuka di lightbox
let galeriCur = 0;


// ─── RENDER: JADWAL ─────────────────────────────────────

function renderJadwal() {
  const tbody = document.getElementById('jadwal-tbody');
  tbody.innerHTML = jadwalData.map(j => `
    <tr>
      <td><b>${j.hari}</b></td>
      <td style="font-family:'DM Mono',monospace;font-size:0.76rem">${j.waktu}</td>
      <td>${j.mk}</td>
      <td style="color:var(--muted);font-size:0.78rem">${j.dosen}</td>
      <td>
        <span style="font-family:'DM Mono',monospace;font-size:0.75rem;
          background:var(--cream);padding:2px 6px;border-radius:2px">
          ${j.ruang}
        </span>
      </td>
      <td style="text-align:center">${j.sks}</td>
      <td>${statusBadge[j.status]}</td>
    </tr>
  `).join('');
}


// ─── RENDER: MAHASISWA ──────────────────────────────────

function renderStudents(list) {
  const el = document.getElementById('student-list');
  el.innerHTML = list.map(s => `
    <div class="student-row">
      <div class="student-avatar">${s.nama.charAt(0).toUpperCase()}</div>
      <div>
        <div class="student-name">${s.nama}</div>
        <div class="student-nim">NIM: ${s.nim}</div>
      </div>
      <div class="student-info">
        <div class="student-prodi">${s.prodi}</div>
        <div class="student-sem">Semester ${s.sem}</div>
      </div>
    </div>
  `).join('');
}

function filterStudents() {
  const q = document.getElementById('search-input').value.toLowerCase();
  const filtered = mahasiswaData.filter(s =>
    s.nama.toLowerCase().includes(q) || s.nim.includes(q)
  );
  renderStudents(filtered);
}


// ─── RENDER: NILAI ──────────────────────────────────────

function renderNilai() {
  const tbody = document.getElementById('nilai-tbody');
  const totalBobot = nilaiData.reduce((a, n) => a + n.poin * n.sks, 0);
  const totalSks   = nilaiData.reduce((a, n) => a + n.sks, 0);
  const ipk        = (totalBobot / totalSks).toFixed(2);

  tbody.innerHTML = nilaiData.map(n => {
    const pct   = (n.poin / 4.0 * 100).toFixed(0);
    const color = n.poin >= 3.7 ? '#2563eb' : n.poin >= 3.0 ? '#16a34a' : '#d97706';
    return `
      <tr>
        <td style="font-family:'DM Mono',monospace;font-size:0.75rem;color:var(--muted)">${n.kode}</td>
        <td>${n.mk}</td>
        <td style="text-align:center">${n.sks}</td>
        <td><b style="font-family:'Syne',sans-serif;font-size:1.05rem">${n.nilai}</b></td>
        <td>${n.poin.toFixed(1)}</td>
        <td>
          <div class="grade-bar-wrap">
            <div style="font-size:0.65rem;color:var(--muted);margin-bottom:3px">${pct}%</div>
            <div class="grade-bar">
              <div class="grade-bar-fill" data-pct="${pct}" style="width:0;background:${color}"></div>
            </div>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  // Animasi counter IPK
  let cur = 0;
  const target = parseFloat(ipk);
  const step   = target / 40;
  const iv = setInterval(() => {
    cur = Math.min(cur + step, target);
    document.getElementById('ipk-display').textContent = cur.toFixed(2);
    if (cur >= target) clearInterval(iv);
  }, 30);

  // Animasi grade bar setelah delay singkat
  setTimeout(() => {
    document.querySelectorAll('.grade-bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.pct + '%';
    });
  }, 200);
}


// ─── RENDER: PENGUMUMAN ─────────────────────────────────

function renderPengumuman() {
  const el = document.getElementById('announce-list');
  el.innerHTML = pengumumanData.map(p => `
    <div class="announce-item reveal">
      <div class="announce-date">
        <div class="announce-day">${p.day}</div>
        <div class="announce-month">${p.month}</div>
      </div>
      <div>
        <div class="announce-title">${p.title}</div>
        <div class="announce-body">${p.body}</div>
        <div class="announce-footer">
          <span class="tag">${p.tag}</span>
          ${p.urgent ? '<span class="tag" style="border-color:var(--accent);color:var(--accent)">Penting</span>' : ''}
        </div>
      </div>
    </div>
  `).join('');
  triggerReveal();
}


// ─── RENDER: FASILITAS ──────────────────────────────────

function renderFasilitas() {
  const statusColor = {
    'Buka':      '#22c55e',
    'Tersedia':  '#22c55e',
    'Beroperasi':'#22c55e',
    'Digunakan': '#f59e0b',
  };
  const el = document.getElementById('facility-grid');
  el.innerHTML = fasilitasData.map(f => `
    <div class="facility-card reveal">
      <span class="facility-icon">${f.icon}</span>
      <div class="facility-name">${f.nama}</div>
      <div class="facility-desc">${f.desc}</div>
      <div class="facility-status">
        <span class="dot" style="background:${statusColor[f.status] || '#ef4444'}"></span>
        ${f.status}
      </div>
    </div>
  `).join('');
  triggerReveal();
}


// ─── RENDER: GALERI ─────────────────────────────────────
// FIX: fungsi ini sebelumnya tersarang di dalam renderNilai()
// sehingga tidak bisa dipanggil dari luar. Sekarang dipindah ke scope global.

function renderGaleri(filter) {
  filter = filter || 'semua';
  const filtered = filter === 'semua'
    ? galeriData
    : galeriData.filter(g => g.type === filter);

  const grid = document.getElementById('gallery-grid');
  grid.innerHTML = filtered.map(g => {
    const idx = galeriData.indexOf(g);
    return `
      <div class="gallery-item" onclick="openLightbox(${idx})">
        <img src="${g.thumb}" alt="${g.title}" loading="lazy">
        ${g.type === 'video' ? `
          <div class="play-badge">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        ` : ''}
        <div class="gallery-overlay">
          <div class="overlay-title">${g.title}</div>
          <div class="overlay-tag">${g.tag}</div>
        </div>
      </div>
    `;
  }).join('');
}

// FIX: filterGallery juga sebelumnya tersarang di dalam renderNilai()
function filterGallery(type, e) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (e && e.target) e.target.classList.add('active');
  renderGaleri(type);
}


// ─── LIGHTBOX ───────────────────────────────────────────

function openLightbox(i) {
  galeriCur = i;
  renderLightboxContent();
  document.getElementById('lightbox').classList.add('open');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.getElementById('lightboxContent').innerHTML = '';
}

function navLightbox(dir) {
  galeriCur = (galeriCur + dir + galeriData.length) % galeriData.length;
  renderLightboxContent();
}

function renderLightboxContent() {
  const m  = galeriData[galeriCur];
  const el = document.getElementById('lightboxContent');
  el.innerHTML = m.type === 'video'
    ? `<video src="${m.src}" controls autoplay></video>`
    : `<img src="${m.src}" alt="${m.title}">`;
  document.getElementById('lightboxCaption').textContent = `${m.title} · ${m.tag}`;
}

// Tutup lightbox bila klik di luar konten
document.getElementById('lightbox').addEventListener('click', function (e) {
  if (e.target === this) closeLightbox();
});


// ─── NAVIGASI SECTION ───────────────────────────────────

function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  // Tandai tombol nav yang aktif (cocokkan teks tombol dengan id section)
  document.querySelectorAll('.nav-btn').forEach(b => {
    const label = b.textContent.trim().toLowerCase().replace(/\s+/g, '');
    b.classList.toggle('active', label === id);
  });

  triggerReveal();
}


// ─── REVEAL ANIMATION ───────────────────────────────────

function triggerReveal() {
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.in)').forEach((el, i) => {
      setTimeout(() => el.classList.add('in'), i * 60);
    });
  }, 40);
}


// ─── JAM LIVE ───────────────────────────────────────────

function updateClock() {
  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  document.getElementById('clock').textContent =
    `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  document.getElementById('footer-date').textContent =
    now.toLocaleDateString('id-ID', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
}
setInterval(updateClock, 1000);
updateClock();


// ─── COUNTER ANIMATION ──────────────────────────────────

function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    let cur = 0;
    const step = Math.ceil(target / 60);
    const iv = setInterval(() => {
      cur = Math.min(cur + step, target);
      el.textContent = cur.toLocaleString('id-ID');
      if (cur >= target) clearInterval(iv);
    }, 20);
  });
}


// ─── CUSTOM CURSOR ──────────────────────────────────────

const dot  = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
});

function animateCursor() {
  dot.style.left = mx + 'px';
  dot.style.top  = my + 'px';
  rx += (mx - rx) * 0.15;
  ry += (my - ry) * 0.15;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();


// ─── INIT ────────────────────────────────────────────────

renderJadwal();
renderStudents(mahasiswaData);
renderNilai();
renderPengumuman();
renderFasilitas();
renderGaleri();     // sekarang bisa dipanggil karena scope-nya sudah global
triggerReveal();
setTimeout(animateCounters, 400);