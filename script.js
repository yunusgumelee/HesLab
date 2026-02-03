function hesapla() function hesapla() {
  let tutar = document.getElementById("tutar").value;
  let vade = document.getElementById("vade").value;
  let faiz = document.getElementById("faiz").value;

  if (tutar === "" || vade === "" || faiz === "") {
    document.getElementById("sonuc").innerText =
      "Lütfen tüm alanları doldurun.";
    return;
  }

  let toplam = tutar * (1 + (faiz / 100) * vade);
  let taksit = toplam / vade;

  document.getElementById("sonuc").innerText =
    "Aylık Taksit: " + taksit.toFixed(2) + " TL";
}