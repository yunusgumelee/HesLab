function hesapla() {
  const tutar = parseFloat(document.getElementById("tutar").value);
  const vade = parseInt(document.getElementById("vade").value);
  const faiz = parseFloat(document.getElementById("faiz").value);

  if (isNaN(tutar) || isNaN(vade) || isNaN(faiz)) {
    document.getElementById("sonuc").innerText = "Tüm alanları doldur";
    return;
  }

  const toplam = tutar * (1 + (faiz / 100) * vade);
  const taksit = toplam / vade;

  document.getElementById("sonuc").innerText =
    "Aylık Taksit: " + taksit.toFixed(2) + " TL";
}
