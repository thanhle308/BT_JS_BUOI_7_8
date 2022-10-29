var arr = [12, -10, 8];
function nhapMang() {
    arr.push(Number(document.getElementById('arr').value));
    document.getElementById('txtarr').innerHTML = arr.join(' ');
}
document.getElementById('btnarr').onclick = nhapMang;

// Bai 1
function bai1() {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    document.getElementById('txtkq').innerHTML = "Tổng các số dương là : " + sum;
}
document.getElementById('btn1').onclick = bai1;

// Bai 2
function bai2() {
    var dem = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            dem++;
        }
    }
    document.getElementById('txtkq').innerHTML = "Có " + dem + " số dương";
}
document.getElementById('btn2').onclick = bai2;

// Bai 3
function bai3() {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    document.getElementById('txtkq').innerHTML = "Min là :  " + min;
}
document.getElementById('btn3').onclick = bai3;

// Bai 4
function bai4() {
    var minduong = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if ((arr[i] < minduong) && (arr[i] >= 0)) {
            console.log(i);
            minduong = arr[i];
        }
    }
    if (minduong >= 0) {
        document.getElementById('txtkq').innerHTML = "Min dương là :  " + minduong;
    } else {
        document.getElementById('txtkq').innerHTML = "Không có số dương trong mảng !"
    }
}
document.getElementById('btn4').onclick = bai4;

// Bai 5 
function bai5() {
    var chan;
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 == 0) {
            chan = i;
            break;
        }
    }
    if (chan % 2 == 0) {
        document.getElementById('txtkq').innerHTML = "Số chẵn cuối là : " + arr[chan];

    } else {
        document.getElementById('txtkq').innerHTML = "Không có số chẵn trong chuỗi ";
    }
}
document.getElementById('btn5').onclick = bai5;

// Bai 6 
// Bai 7
function bai7() {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                var doi = arr[i];
                arr[i] = arr[j];
                arr[j] = doi;
            }
        }
    }
    document.getElementById('txtkq').innerHTML = "Chuổi sau khi sắp xếp là : " + arr;
}
document.getElementById('btn7').onclick = bai7;
// Bai 8
function bai8() {
    var nguyen = false;
    for (var i = 0; i < arr.length; i++) {
        var songuyen = true;
        if (arr[i] < 2) {
            continue;
        }
        for (var j = 2; j < parseInt(arr[i] / 2); j++) {
            if (arr[i] % j == 0) {
                songuyen = false;
                break;
            }
        }
        if (songuyen) {
            nguyen = true;
            break;
        }
    }
    if (nguyen) {
        document.getElementById('txtkq').innerHTML = "Số nguyên tố đầu tiên trong mảng là: " + arr[i];
    } else {
        document.getElementById('txtkq').innerHTML = "Số nguyên tố đầu tiên trong mảng là: -1";
    }
}
document.getElementById('btn8').onclick = bai8;

// Bai 9 
// Bai 10 
function bai10() {
    var am = 0, duong = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            duong += 1;
        } else {
            am += 1;
        }
    }
    if (am > duong) {
        document.getElementById('txtkq').innerHTML = "Số lượng số âm > Số lượng số dương";
    } else if (am < duong) {
        document.getElementById('txtkq').innerHTML = "Số lượng số âm < Số lượng số dương";
    } else {
        document.getElementById('txtkq').innerHTML = "Số lượng số âm = Số lượng số dương";
    }
}
document.getElementById('btn10').onclick = bai10;