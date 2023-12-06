function hitung() {
  var umur = document.counter.umur.value;
  var tinggibadan = document.counter.tinggibadan.value;
  var beratbadan = document.counter.beratbadan.value;
  var aktivitas = document.counter.aktivitas.value;
  var jeniskelamin = document.counter.gender.value;
  var bmr;
  if (jeniskelamin == "1") {
    bmr = 66 + 13.86 * beratbadan + 5.03 * tinggibadan - 6.8 * umur;
  } else if (jeniskelamin == "2") {
    bmr = 655 + 9.46 * beratbadan + 1.83 * tinggibadan - (4.7 + umur);
  }
  if (aktivitas == "1") {
    var hasil = bmr + bmr * 0.2;
  } else if (aktivitas == "2") {
    var hasil = bmr + bmr * 0.3;
  } else if (aktivitas == "3") {
    var hasil = bmr + bmr * 0.4;
  } else if (aktivitas == "4") {
    var hasil = bmr + bmr * 0.5;
  } else if (aktivitas == "5") {
    var hasil = bmr + bmr * 0.6;
  }
  totalbmr.innerHTML = bmr;
  totalcalorie.innerHTML = hasil;
}
function bersihkan() {
  totalbmr.innerHTML = "";
  totalcalorie.innerHTML = "";
}
