// --- TABELAS DE ALTITUDE (ANEXO B - CONFORME IMAGEM) ---
const tabelaAltitude = {
    3.0:  { 304.8: 3.0, 609.6: 4.6, 914.4: 4.6, 1219.1: 4.6, 1523.9: 4.6, 1828.7: 4.6, 2133.5: 4.6, 2438.3: 4.6, 2743.1: 4.6, 3047.9: 4.6 },
    4.6:  { 304.8: 4.6, 609.6: 6.1, 914.4: 6.1, 1219.1: 6.1, 1523.9: 6.1, 1828.7: 6.1, 2133.5: 6.1, 2438.3: 7.6, 2743.1: 7.6, 3047.9: 7.6 },
    6.1:  { 304.8: 6.1, 609.6: 7.6, 914.4: 7.6, 1219.1: 7.6, 1523.9: 7.6, 1828.7: 7.6, 2133.5: 9.1, 2438.3: 9.1, 2743.1: 9.1, 3047.9: 9.1 },
    7.6:  { 304.8: 7.6, 609.6: 9.1, 914.4: 9.1, 1219.1: 9.1, 1523.9: 10.7, 1828.7: 10.7, 2133.5: 10.7, 2438.3: 10.7, 2743.1: 10.7, 3047.9: 12.2 },
    9.1:  { 304.8: 9.1, 609.6: 10.7, 914.4: 10.7, 1219.1: 10.7, 1523.9: 12.2, 1828.7: 12.2, 2133.5: 12.2, 2438.3: 13.7, 2743.1: 13.7, 3047.9: 13.7 },
    10.7: { 304.8: 10.7, 609.6: 12.2, 914.4: 12.2, 1219.1: 13.7, 1523.9: 13.7, 1828.7: 13.7, 2133.5: 15.2, 2438.3: 15.2, 2743.1: 15.2, 3047.9: 18.3 },
    12.2: { 304.8: 12.2, 609.6: 13.7, 914.4: 13.7, 1219.1: 15.2, 1523.9: 15.2, 1828.7: 15.2, 2133.5: 16.8, 2438.3: 16.8, 2743.1: 18.3, 3047.9: 18.3 },
    15.2: { 304.8: 15.2, 609.6: 16.8, 914.4: 18.3, 1219.1: 18.3, 1523.9: 21.3, 1828.7: 21.3, 2133.5: 21.3, 2438.3: 21.3, 2743.1: 21.3, 3047.9: 24.4 },
    18.3: { 304.8: 18.3, 609.6: 21.3, 914.4: 21.3, 1219.1: 21.3, 1523.9: 24.4, 1828.7: 24.4, 2133.5: 24.4, 2438.3: 27.4, 2743.1: 27.4, 3047.9: 27.4 },
    21.3: { 304.8: 21.3, 609.6: 24.4, 914.4: 24.4, 1219.1: 27.4, 1523.9: 27.4, 1828.7: 27.4, 2133.5: 30.5, 2438.3: 30.5, 2743.1: 30.5, 3047.9: 33.5 },
    24.4: { 304.8: 24.4, 609.6: 27.4, 914.4: 27.4, 1219.1: 30.5, 1523.9: 30.5, 1828.7: 30.5, 2133.5: 33.5, 2438.3: 33.5, 2743.1: 36.6, 3047.9: 36.6 },
    27.4: { 304.8: 27.4, 609.6: 30.5, 914.4: 33.5, 1219.1: 33.5, 1523.9: 33.5, 1828.7: 36.6, 2133.5: 36.6, 2438.3: 39.6, 2743.1: 39.6, 3047.9: 42.7 },
    30.5: { 304.8: 30.5, 609.6: 33.5, 914.4: 36.6, 1219.1: 36.6, 1523.9: 39.6, 1828.7: 39.6, 2133.5: 39.6, 2438.3: 42.7, 2743.1: 42.7, 3047.9: 45.7 },
    33.5: { 304.8: 33.5, 609.6: 36.6, 914.4: 39.6, 1219.1: 39.6, 1523.9: 42.7, 1828.7: 42.7, 2133.5: 45.7, 2438.3: 45.7, 2743.1: 48.8, 3047.9: 48.8 },
    35.1: { 304.8: 35.1, 609.6: 39.6, 914.4: 39.6, 1219.1: 42.7, 1523.9: 42.7, 1828.7: 45.7, 2133.5: 45.7, 2438.3: 48.8, 2743.1: 51.8, 3047.9: 51.8 }
};

// --- TABELA 1: LSD (NDL) ---
const tabelaLSD = {
    12.2: { lnd: 163, grupos: [12, 20, 27, 36, 44, 53, 63, 73, 84, 95, 108, 121, 135, 151, 163] },
    15.2: { lnd: 92,  grupos: [9, 15, 21, 28, 34, 41, 48, 56, 63, 71, 80, 89, 92] },
    18.3: { lnd: 60,  grupos: [7, 12, 17, 22, 28, 33, 39, 45, 51, 57, 60] },
    21.3: { lnd: 48,  grupos: [6, 10, 14, 19, 23, 28, 32, 37, 42, 47, 48] },
    24.4: { lnd: 39,  grupos: [5, 9, 12, 16, 20, 24, 28, 32, 36, 39] },
    27.4: { lnd: 30,  grupos: [4, 7, 10, 13, 16, 19, 21, 24, 27, 30] },
    30.5: { lnd: 25,  grupos: [3, 6, 8, 11, 13, 16, 18, 21, 23, 25] },
    33.5: { lnd: 15,  grupos: [3, 5, 7, 10, 13, 15] },
    36.6: { lnd: 12,  grupos: [3, 5, 7, 9, 11, 12] },
    39.6: { lnd: 10,  grupos: [3, 5, 7, 8, 10] },
    42.7: { lnd: 9,   grupos: [3, 4, 6, 8, 9] }
};

// --- TABELA 2: INTERVALO ---
const tabelaIntervalos = {
    "A": [ { min: 10, max: 720, novo: "A" } ],
    "B": [ { min: 10, max: 47, novo: "B" }, { min: 48, max: 720, novo: "A" } ],
    "C": [ { min: 10, max: 59, novo: "C" }, { min: 60, max: 109, novo: "B" }, { min: 110, max: 720, novo: "A" } ],
    "D": [ { min: 10, max: 69, novo: "D" }, { min: 70, max: 128, novo: "C" }, { min: 129, max: 227, novo: "B" }, { min: 228, max: 720, novo: "A" } ],
    "E": [ { min: 10, max: 45, novo: "E" }, { min: 46, max: 130, novo: "D" }, { min: 131, max: 232, novo: "C" }, { min: 233, max: 418, novo: "B" }, { min: 419, max: 720, novo: "A" } ],
    "F": [ { min: 10, max: 45, novo: "F" }, { min: 46, max: 89, novo: "E" }, { min: 90, max: 159, novo: "D" }, { min: 160, max: 284, novo: "C" }, { min: 285, max: 479, novo: "B" }, { min: 480, max: 720, novo: "A" } ],
    "G": [ { min: 10, max: 40, novo: "G" }, { min: 41, max: 85, novo: "F" }, { min: 86, max: 129, novo: "E" }, { min: 130, max: 199, novo: "D" }, { min: 200, max: 324, novo: "C" }, { min: 325, max: 519, novo: "B" }, { min: 520, max: 720, novo: "A" } ]
};

// --- TABELA 3: TNR ---
const tabelaTNR = {
    "A": { 12.2: 12, 15.2: 9, 18.3: 7, 21.3: 6, 24.4: 5, 27.4: 4, 30.5: 3, 33.5: 3, 36.6: 2, 39.6: 2 },
    "B": { 12.2: 20, 15.2: 15, 18.3: 12, 21.3: 10, 24.4: 9, 27.4: 8, 30.5: 6, 33.5: 6, 36.6: 5, 39.6: 5 },
    "C": { 12.2: 27, 15.2: 21, 18.3: 17, 21.3: 14, 24.4: 12, 27.4: 11, 30.5: 9, 33.5: 8, 36.6: 7, 39.6: 7 },
    "D": { 12.2: 36, 15.2: 28, 18.3: 22, 21.3: 19, 24.4: 16, 27.4: 14, 30.5: 12, 33.5: 11, 36.6: 10, 39.6: 9 },
    "E": { 12.2: 44, 15.2: 34, 18.3: 28, 21.3: 23, 24.4: 20, 27.4: 17, 30.5: 15, 33.5: 14, 36.6: 12, 39.6: 11 },
    "F": { 12.2: 53, 15.2: 41, 18.3: 33, 21.3: 28, 24.4: 24, 27.4: 21, 30.5: 18, 33.5: 16, 36.6: 15, 39.6: 14 }
};

const letrasGrupo = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];

// --- FUNÇÃO PRINCIPAL ---
function calcularMergulho() {
    const altitudeKey = document.getElementById('altitude').value;
    const prof1 = parseFloat(document.getElementById('profundidade').value);
    const tempo1 = parseInt(document.getElementById('tempo').value);
    const intervalo = parseInt(document.getElementById('intervalo').value);
    const prof2 = parseFloat(document.getElementById('profundidade2').value);

    const resStatus = document.getElementById('resStatus');
    const panel = document.getElementById('resultsPanel');

    if (isNaN(prof1) || isNaN(tempo1)) {
        showToast("Preencha Profundidade e Tempo!", "error");
        return;
    }

    try {
        // 1. Correção Altitude
        let profCorrigida1 = prof1;
        if (altitudeKey !== "0") {
            const chavesAlt = Object.keys(tabelaAltitude).map(Number).sort((a,b) => a - b);
            let linha = chavesAlt.find(k => k >= prof1) || 35.1;
            profCorrigida1 = tabelaAltitude[linha][altitudeKey] || prof1;
        }

        // 2. Busca LSD
        const chavesLSD = Object.keys(tabelaLSD).map(Number).sort((a,b) => a - b);
        let p1TabLSD = chavesLSD.find(k => k >= profCorrigida1);
        
        if (!p1TabLSD) {
            resStatus.innerText = "ERRO: Profundidade fora da tabela!";
            panel.style.display = 'block';
            return;
        }

        const dadosLSD = tabelaLSD[p1TabLSD];
        let grupo1 = "--";
        let statusText = "Plano calculado com sucesso.";

        // Verificação NDL
        if (tempo1 > dadosLSD.lnd) {
            grupo1 = "X";
            statusText = "PERIGO: Tempo excedeu o NDL! Mergulho com descompressão.";
        } else {
            for (let i = 0; i < dadosLSD.grupos.length; i++) {
                if (tempo1 <= dadosLSD.grupos[i]) { grupo1 = letrasGrupo[i]; break; }
            }
        }

        // 3. Lógica Sucessiva
        let novoGrupo = "--";
        let tnr = "--";
        if (!isNaN(intervalo) && !isNaN(prof2) && grupo1 !== "X") {
            const regras = tabelaIntervalos[grupo1];
            if (regras) {
                let res = regras.find(r => intervalo >= r.min && intervalo <= r.max);
                novoGrupo = res ? res.novo : (intervalo > 720 ? "A" : "--");
            }

            let profCorrigida2 = prof2;
            if (altitudeKey !== "0") {
                const chavesAlt = Object.keys(tabelaAltitude).map(Number).sort((a,b) => a - b);
                let linha2 = chavesAlt.find(k => k >= prof2) || 35.1;
                profCorrigida2 = tabelaAltitude[linha2][altitudeKey] || prof2;
            }
            let p2TabLSD = chavesLSD.find(k => k >= profCorrigida2);
            
            if (tabelaTNR[novoGrupo] && tabelaTNR[novoGrupo][p2TabLSD]) {
                tnr = tabelaTNR[novoGrupo][p2TabLSD];
            } else {
                tnr = "N/A";
            }
            document.getElementById('resultadoSucessivo').style.display = "flex";
            document.getElementById('divisaoSucessivo').style.display = "block";
        } else {
            document.getElementById('resultadoSucessivo').style.display = "none";
            document.getElementById('divisaoSucessivo').style.display = "none";
        }

        // 4. Atualizar UI
        document.getElementById('resProfCorrigida').innerText = profCorrigida1.toFixed(1);
        document.getElementById('resLND').innerText = dadosLSD.lnd;
        document.getElementById('resGrupo').innerText = grupo1;
        document.getElementById('resNovoGrupo').innerText = novoGrupo;
        document.getElementById('resTNR').innerText = tnr;
        
        let tempoRestante = dadosLSD.lnd - tempo1;
        const elRestante = document.getElementById('resTempoRestante');
        elRestante.innerText = (grupo1 === "X") ? "EXCEDIDO" : tempoRestante + " MIN";
        elRestante.style.color = (grupo1 === "X") ? "#d32f2f" : "#27ae60";

        resStatus.innerText = statusText;
        panel.style.display = 'block';

    } catch (e) {
        resStatus.innerText = "Erro ao processar dados. Verifique os valores.";
        console.error(e);
    }
}

// --- OUTRAS FUNÇÕES ---
function switchTab(tabId, element, title) {
    document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    document.getElementById('tab-' + tabId).classList.add('active');
    element.classList.add('active');
    document.getElementById('header-title').innerText = title;
}

function resetarPlano() {
    document.getElementById('resultsPanel').style.display = 'none';
    document.getElementById('resStatus').innerText = "Aguardando cálculos...";
    document.querySelectorAll('#tab-plano input').forEach(i => i.value = '');
    document.getElementById('altitude').value = "0";
}

function calcularGas() {
    const pIn = parseFloat(document.getElementById('pressaoInicial').value);
    const vol = parseFloat(document.getElementById('volumeCilindro').value);
    const res = parseFloat(document.getElementById('reservaGas').value);
    const prof = parseFloat(document.getElementById('profMedia').value);
    const sac = parseFloat(document.getElementById('sacConsumo').value);
    
    if (isNaN(pIn) || isNaN(vol) || isNaN(prof)) {
        showToast("Preencha os campos obrigatórios!", "error");
        return;
    }
    

    const ata = (prof / 10) + 1;
    const tempo = ((pIn - res) * vol) / (sac * ata);

    
    
    document.getElementById('resTempoGas').innerText = Math.floor(tempo);
    document.getElementById('resLitrosTotais').innerText = Math.floor((pIn - res) * vol);
    document.getElementById('resATA').innerText = ata.toFixed(1);
    document.getElementById('resultsGas').style.display = 'block';

     showToast("Cálculo de autonomia realizado!", "success");
}

function resetarGas() {
    document.getElementById('resultsGas').style.display = 'none';
    document.querySelectorAll('#tab-gas input').forEach(i => i.value = '');
}

function exportarPDF(id) {
    const element = document.getElementById(id);
    const opt = {
        margin: 10,
        filename: 'Relatorio_Mergulho.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
}

// --- FUNÇÃO DE TOAST  ---
function showToast(message, type = "info") {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = type === "success" ? "fa-check-circle" : (type === "error" ? "fa-exclamation-triangle" : "fa-info-circle");
    
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3500);
}