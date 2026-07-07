const chart = LightweightCharts.createChart(document.getElementById('chart'), {
    width: window.innerWidth,
    height: 500,
    layout: {
        background: { color: '#111111' },
        textColor: '#ffffff',
    },
    grid: {
        vertLines: { color: '#333333' },
        horzLines: { color: '#333333' },
    },
});

const candleSeries = chart.addCandlestickSeries();

candleSeries.setData([
{time:'2026-07-01',open:2900,high:2940,low:2880,close:2920},
{time:'2026-07-02',open:2920,high:2960,low:2910,close:2950},
{time:'2026-07-03',open:2950,high:3000,low:2940,close:2980},
{time:'2026-07-04',open:2980,high:3010,low:2960,close:2990},
{time:'2026-07-05',open:2990,high:3030,low:2970,close:3010},
]);

document.getElementById("setHarga").onclick = function () {

    const awal = Number(document.getElementById("hargaAwal").value);

    const akhir = 3000;

    const poin = akhir - awal;

    const persen = ((poin / awal) * 100).toFixed(2);

    document.getElementById("akhir").innerHTML = akhir;
    document.getElementById("poin").innerHTML = poin;
    document.getElementById("persen").innerHTML = persen + "%";
};
