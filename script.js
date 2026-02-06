function hesapla() {
  const tutar = Number(document.getElementById("tutar").value);
  const vade = Number(document.getElementById("vade").value);
  const faiz = Number(document.getElementById("faiz").value);

  if (!tutar || !vade || !faiz) {
    document.getElementById("sonuc").innerText = "Tüm alanları doldur";
    return;
  }

  const toplam = tutar * (1 + (faiz / 100) * vade);
  const taksit = toplam / vade;

  document.getElementById("sonuc").innerText =
    "Aylık taksit: " + taksit.toFixed(2) + " TL";
}
