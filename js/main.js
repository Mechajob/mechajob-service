
        function switchPage(el, id) {
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            el.classList.add('active');
            document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
            document.getElementById(id).classList.add('active');
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        function setMode(mode) {
            const body = document.getElementById('mainBody');
            const role = document.getElementById('userRole');
            const grid = document.getElementById('statsGrid');
            const menuList = document.getElementById('mainMenuList');
            const hCont = document.getElementById('home');
            const aCont = document.getElementById('activity');
            const wCont = document.getElementById('wallet');
            const nH = document.getElementById('navHome');
            const nO = document.getElementById('navOrder');
            const nHi = document.getElementById('navHistory');
            const nP = document.getElementById('navProfile');

            if(mode === 'mechanic') {
                body.classList.add('mode-mechanic');
                document.getElementById('mechBtn').classList.add('active');
                document.getElementById('custBtn').classList.remove('active');
                role.innerText = "EXPERT MECHANIC • LEVEL 42";
                role.style.color = "var(--mecha-blue)";

                nH.innerHTML = '<i class="fas fa-chart-pie"></i><span>Dash</span>';
                nO.innerHTML = '<i class="fas fa-satellite"></i><span>Cari</span>';
                nHi.innerHTML = '<i class="fas fa-list-ul"></i><span>Logs</span>';
                nP.innerHTML = '<i class="fas fa-screwdriver-wrench"></i><span>Base</span>';

                hCont.innerHTML = `
                    <div style="padding: 24px;">
                        <h3 style="color:var(--mecha-blue); font-weight:800; margin-bottom:20px;">MECHANIC CONSOLE</h3>
                        <div class="form-card" style="background: linear-gradient(135deg, rgba(0,210,255,0.1), transparent);">
                            <small style="color:var(--mecha-dim); font-size:10px;">DAILY EARNINGS</small>
                            <h1 style="margin:5px 0;">Rp 842.000</h1>
                            <div style="color:#00ff88; font-size:11px; font-weight:700;"><i class="fas fa-arrow-up"></i> +12% dari kemarin</div>
                        </div>
                        <div class="form-card">
                            <h4 style="margin:0 0 15px 0; font-size:12px; color:var(--mecha-blue);">RIWAYAT TERAKHIR</h4>
                            <table class="mecha-table">
                                <tr><td>Vario 150</td><td><b>Rp 85k</b></td><td><span style="color:#00ff88">DONE</span></td></tr>
                                <tr><td>PCX 160</td><td><b>Rp 150k</b></td><td><span style="color:#00ff88">DONE</span></td></tr>
                            </table>
                        </div>
                    </div><div id="chat-container">
    <div id="chat-window">
        <div class="chat-header">
            <div class="user-info">
                <div class="dot"></div>
                <strong>Customer Aktif</strong>
            </div>
            <button id="close-chat">&times;</button>
        </div>
        <div class="chat-body" id="chat-messages">
            <div class="msg received">Halo! Ada yang bisa kami bantu?</div>
        </div>
        <div class="chat-footer">
            <input type="text" id="chat-input" placeholder="Tulis pesan..." onkeypress="handleEnter(event)">
            <button onclick="sendMessage()"><i class="fas fa-paper-plane"></i></button>
        </div>
    </div>

    <div id="chat-bubble">
        <i class="fas fa-comments"></i>
    </div>
</div>
`;

                aCont.innerHTML = `<div style="padding:50px; text-align:center"><div class="form-card"><i class="fas fa-compass fa-spin" style="font-size:40px; color:var(--mecha-blue); margin-bottom:15px;"></i><p>Scanning nearby requests...</p></div></div>`;
                wCont.innerHTML = `<div style="padding:24px;"><h3>WORK LOGS</h3><div class="form-card">No logs found today.</div></div>`;

                grid.innerHTML = `
                    <div class="stat-item"><i class="fas fa-bolt"></i><small>Power</small><b>98%</b></div>
                    <div class="stat-item"><i class="fas fa-star"></i><small>Rate</small><b>4.9</b></div>
                    <div class="stat-item"><i class="fas fa-award"></i><small>Rank</small><b>Pro</b></div>`;
                
                menuList.innerHTML = `
                    <div class="menu-row"><div class="menu-left"><i class="fas fa-toolbox"></i><span>Equipment</span></div><i class="fas fa-chevron-right"></i></div>
                    <div class="menu-row"><div class="menu-left"><i class="fas fa-wallet"></i><span>Withdraw Balance</span></div><i class="fas fa-chevron-right"></i></div>
                    <div class="menu-row" style="color: #ff4444;"><div class="menu-left"><i class="fas fa-power-off"></i><span>Sign Out</span></div></div>`;

            } else {
                body.classList.remove('mode-mechanic');
                document.getElementById('custBtn').classList.add('active');
                document.getElementById('mechBtn').classList.remove('active');
                role.innerText = "PREMIUM MEMBER • ELITE";
                role.style.color = "var(--mecha-orange)";

                nH.innerHTML = '<i class="fas fa-house"></i><span>Home</span>';
                nO.innerHTML = '<i class="fas fa-plus-circle"></i><span>Order</span>';
                nHi.innerHTML = '<i class="fas fa-receipt"></i><span>History</span>';
                nP.innerHTML = '<i class="fas fa-user-circle"></i><span>Profile</span>';

                hCont.innerHTML = `
<div id="chat-container">
    <div id="chat-window">
        <div class="chat-header">
            <div class="user-info">
                <div class="dot"></div>
                <strong>Mekanik Aktif</strong>
            </div>
            <button id="close-chat">&times;</button>
        </div>
        <div class="chat-body" id="chat-messages">
            <div class="msg received">Halo! Ada yang bisa kami bantu?</div>
        </div>
        <div class="chat-footer">
            <input type="text" id="chat-input" placeholder="Tulis pesan..." onkeypress="handleEnter(event)">
            <button onclick="sendMessage()"><i class="fas fa-paper-plane"></i></button>
        </div>
    </div>

    <div id="chat-bubble">
        <i class="fas fa-comments"></i>
    </div>
</div>
`;

                aCont.innerHTML = `<iframe src="form-pesan.html" width="100%" height="900" style="border:none;"></iframe>
`;
                wCont.innerHTML = `<div style="padding:24px"><h3>ACTIVITY</h3><div class="form-card">No recent activity.</div></div><div style="padding: 24px;">
    <h3 style="margin-bottom: 20px; letter-spacing: 1px;">RIWAYAT LAYANAN</h3>
    
    <div class="form-card" style="padding: 10px;">
        <table class="history-table">
            <thead>
                <tr>
                    <th>TANGGAL</th>
                    <th>LAYANAN / UNIT</th>
                    <th>STATUS</th>
                    <th>TOTAL</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <span style="display:block; font-weight:bold;">12 Des</span>
                        <small style="color: var(--mecha-dim);">2025</small>
                    </td>
                    <td>
                        <span style="display:block; font-weight:bold;">Ganti Oli & Filter</span>
                        <small style="color: var(--mecha-orange);">Honda Vario 150</small>
                    </td>
                    <td>
                        <span class="badge status-done">SELESAI</span>
                    </td>
                    <td style="text-align: right; font-weight: 800;">Rp 125k</td>
                </tr>

                <tr>
                    <td>
                        <span style="display:block; font-weight:bold;">05 Des</span>
                        <small style="color: var(--mecha-dim);">2025</small>
                    </td>
                    <td>
                        <span style="display:block; font-weight:bold;">Tambal Ban Tubeless</span>
                        <small style="color: var(--mecha-orange);">Yamaha NMAX</small>
                    </td>
                    <td>
                        <span class="badge status-cancel">BATAL</span>
                    </td>
                    <td style="text-align: right; font-weight: 800;">Rp 0</td>
                </tr>

                <tr>
                    <td>
                        <span style="display:block; font-weight:bold;">28 Nov</span>
                        <small style="color: var(--mecha-dim);">2025</small>
                    </td>
                    <td>
                        <span style="display:block; font-weight:bold;">Servis CVT</span>
                        <small style="color: var(--mecha-orange);">Honda Vario 150</small>
                    </td>
                    <td>
                        <span class="badge status-done">SELESAI</span>
                    </td>
                    <td style="text-align: right; font-weight: 800;">Rp 85k</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`;

                grid.innerHTML = `
                    <div class="stat-item"><i class="fas fa-wallet"></i><small>Wallet</small><b>Rp 54k</b></div>
                    <div class="stat-item"><i class="fas fa-motorcycle"></i><small>Units</small><b>2</b></div>
                    <div class="stat-item"><i class="fas fa-gift"></i><small>Points</small><b>1.2k</b></div>`;
                
                menuList.innerHTML = `
                    <div class="menu-row"><div class="menu-left"><i class="fas fa-credit-card"></i><span>Payment Methods</span></div><i class="fas fa-chevron-right"></i></div>
                    <div class="menu-row"><div class="menu-left"><i class="fas fa-map-marked-alt"></i><span>Saved Address</span></div><i class="fas fa-chevron-right"></i></div>
                    <div class="menu-row" style="color: #ff4444;"><div class="menu-left"><i class="fas fa-power-off"></i><span>Logout</span></div></div>`;
            }
        }

        // Initialize
        setMode('customer');
/* --- GLOBAL VARIABLES --- */
let isDragging = false;
let dragOccurred = false;
let startX, startY;

/* --- 1. EVENT DELEGATION (Penting agar fitur tidak mati saat pindah menu) --- */
document.addEventListener("mousedown", (e) => { 
    if(e.target.closest("#chat-bubble")) dragStart(e); 
});

document.addEventListener("touchstart", (e) => { 
    if(e.target.closest("#chat-bubble")) dragStart(e); 
}, { passive: false });

document.addEventListener("mousemove", (e) => { 
    if (isDragging) { dragOccurred = true; moveAt(e.clientX, e.clientY); } 
});

document.addEventListener("touchmove", (e) => { 
    if (isDragging) { dragOccurred = true; moveAt(e.touches[0].clientX, e.touches[0].clientY); } 
}, { passive: false });

document.addEventListener("mouseup", () => { isDragging = false; });
document.addEventListener("touchend", () => { isDragging = false; });

// Delegasi klik untuk Buka/Tutup dan Kirim Pesan
document.addEventListener("click", (e) => {
    // Tombol Buka/Tutup
    if (e.target.closest("#chat-bubble") || e.target.closest("#close-chat")) {
        toggleChat();
    }
    // Tombol Kirim Pesan
    if (e.target.closest(".chat-footer button")) {
        sendMessage();
    }
});

/* --- 2. DRAG LOGIC (Membatasi agar tidak keluar frame) --- */
function dragStart(e) {
    const container = document.getElementById("chat-container");
    const windowChat = document.getElementById("chat-window");
    if(!container) return;

    isDragging = true;
    dragOccurred = false;
    
    const rect = container.getBoundingClientRect();
    const clientX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === "touchstart" ? e.touches[0].clientY : e.clientY;

    startX = clientX - rect.left;
    startY = clientY - rect.top;

    // Tutup jendela saat mulai geser agar ringan
    if(windowChat) windowChat.classList.remove("active");
}

function moveAt(clientX, clientY) {
    const container = document.getElementById("chat-container");
    if(!container) return;

    let x = clientX - startX;
    let y = clientY - startY;

    // Batasi dalam layar (Clamping)
    const padding = 10;
    const maxX = window.innerWidth - container.offsetWidth - padding;
    const maxY = window.innerHeight - container.offsetHeight - padding;

    x = Math.max(padding, Math.min(x, maxX));
    y = Math.max(padding, Math.min(y, maxY));

    container.style.right = "auto";
    container.style.bottom = "auto";
    container.style.left = x + "px";
    container.style.top = y + "px";
}

/* --- 3. TOGGLE CHAT (Buka Atas/Bawah Berdasarkan Posisi) --- */
function toggleChat() {
    if (dragOccurred) return; // Jika baru selesai geser, jangan buka/tutup

    const container = document.getElementById("chat-container");
    const windowChat = document.getElementById("chat-window");
    if(!container || !windowChat) return;

    const isOpen = windowChat.classList.contains("active");

    if (isOpen) {
        // Logika Menutup
        windowChat.classList.remove("active");
        setTimeout(() => { 
            if(!windowChat.classList.contains("active")) windowChat.style.display = "none"; 
        }, 300);
    } else {
        // Logika Membuka
        const rect = container.getBoundingClientRect();
        const isAtBottom = rect.top > window.innerHeight / 2;
        const isAtRight = rect.left > window.innerWidth / 2;

        // Reset arah animasi
        windowChat.style.top = "auto"; windowChat.style.bottom = "auto";
        windowChat.style.left = "auto"; windowChat.style.right = "auto";

        // ANIMASI ADAPTIF: Bawah buka ke Atas, Atas buka ke Bawah
        if (isAtBottom) {
            windowChat.style.bottom = "75px";
            windowChat.style.transformOrigin = "bottom center";
        } else {
            windowChat.style.top = "75px";
            windowChat.style.transformOrigin = "top center";
        }

        // Horizontal Adaptif agar tidak keluar frame
        if (isAtRight) windowChat.style.right = "0";
        else windowChat.style.left = "0";

        windowChat.style.display = "flex";
        // Timeout kecil agar transisi CSS 'active' berjalan
        setTimeout(() => windowChat.classList.add("active"), 10);
    }
}

/* --- 4. CHAT MESSAGING --- */
function sendMessage() {
    const input = document.getElementById("chat-input");
    const messagesArea = document.getElementById("chat-messages");
    if (!input || !input.value.trim()) return;

    // Tambah pesan pengirim
    const userHtml = `<div class="msg sent">${input.value}</div>`;
    messagesArea.insertAdjacentHTML('beforeend', userHtml);
    
    const text = input.value;
    input.value = "";
    messagesArea.scrollTop = messagesArea.scrollHeight;

    // Simulasi balasan otomatis
    setTimeout(() => {
        const botHtml = `<div class="msg received">Siap! Kami sedang memproses informasi mengenai "${text}".</div>`;
        messagesArea.insertAdjacentHTML('beforeend', botHtml);
        messagesArea.scrollTop = messagesArea.scrollHeight;
    }, 1000);
}

// Support tombol Enter
function handleEnter(e) {
    if (e.key === "Enter") sendMessage();
}
