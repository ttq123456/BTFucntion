/**
 * Input: Điểm chuẩn, khu vực, đối tượng, điểm 3 môn
 * 
 * Xử lý:
 *      - Lấy giá trị từ form
 *      - Kiểm tra có môn 0 điểm là rớt
 *      - Công thức tongDiem = diem1 + diem2 + diem3 + diemUuTien 
 *                  diemUuTien = diemKV + diemDT;
 *      if tongDiem >= diemChuan => đậu
 *          ngược lại là rớt
 * 
 * Output: Tổng điểm, kết quả đậu hay rớt
 */

const diem_KVA = 2;
const diem_KVB = 1;
const diem_KVC = 0.5;
const diem_DT1 = 2.5;
const diem_DT2 = 1.5;
const diem_DT3 = 1;
function tinhTong(){
    var diemChuan = document.getElementById("diemChuan").value;
    var KV = document.getElementById("khuVuc").value; 
    var DT = document.getElementById("doiTuong").value;
    var diem1= Number(document.getElementById("diemMon1").value);
    var diem2= Number(document.getElementById("diemMon2").value);
    var diem3= Number(document.getElementById("diemMon3").value);
    var kq="";
    var tongDiem = 0;

    if (diem1 == 0 || diem2 == 0 || diem3 == 0) {
        kq = "Bạn đã rớt vì có môn 0 điểm";
        document.getElementById("txtResult").innerHTML = kq;
    } else {
        tongDiem= diem1 + diem2 + diem3 + tinhDiemUuTien(KV,DT);
        if (tongDiem >= diemChuan) {
            kq = "Bạn đã đậu";
        }
        else kq = "Bạn đã rớt vì thấp hơn điểm chuẩn";
        document.getElementById("txtResult").innerHTML = "Tổng điểm: " + tongDiem + "; " + kq;
    }
}

document.getElementById("btnTinh").onclick = tinhTong ; 

function tinhDiemUuTien(khuVuc,doiTuong) {
    var diemUuTien = 0;
    switch (khuVuc) {
        case "A":
            diemUuTien += diem_KVA;
            break;
        case "B":
            diemUuTien += diem_KVB;
            break;
        case "C":
            diemUuTien += diem_KVC;
            break;
        default:
            break;
    }
    switch (doiTuong) {
        case "1":
            diemUuTien += diem_DT1;
            break;
        case "2":
            diemUuTien += diem_DT2;
            break;
        case "3":
            diemUuTien += diem_DT3;
            break;
        default:
            break;
    }

    return diemUuTien;
}