/**
 * input: Tên khách hàng, số kW sử dụng
 * 
 * Xử lý:
 *      - Lấy giá trị từ form
 *      - Xây dựng công thức tính tiền
 *          <=50kW: tongTien = soKW * GIA_50_DAU
 *          50<soKW<=100: tongTien = 50*GIA_50_DAU + (soKW-50)*GIA_50_KE
 *          100<soKW<=200: tongTien = 50*GIA_50_DAU + 50*GIA_50_KE + (soKW-100)*GIA_100_KE
 *          200<soKW<=350: tongTien = 50*GIA_50_DAU + 50*GIA_50_KE + 100*GIA_100_KE + (soKW-200)*GIA_150_KE
 *          sokW>350: tongTien = 50*GIA_50_DAU + 50*GIA_50_KE + 100*GIA_100_KE + 150*GIA_150_KE + (soKW-350)*GIA_CONLAI
 *        - Thông báo kết quả
 * 
 * 
 * output: số tiền phải trả
 */

const GIA_50_DAU = 500;
const GIA_50_KE = 650;
const GIA_100_KE = 850;
const GIA_150_KE = 1100;
const GIA_CONLAI = 1300;

function tinhTienDien() {
    var tenKH = document.getElementById("hoTen").value;
    var soKW = Number(document.getElementById("soDien").value);
    var tongTien = 0;

    if (soKW<=50) {
        tongTien = soKW * GIA_50_DAU;
    } else if (50 < soKW && soKW <= 100) {
        tongTien = 50*GIA_50_DAU + (soKW-50)*GIA_50_KE;
    } else if (100 < soKW && soKW <= 200) {
        tongTien = 50*GIA_50_DAU + 50*GIA_50_KE + (soKW-100)*GIA_100_KE
    } else if (200 < soKW && soKW <= 350) {
        tongTien = 50*GIA_50_DAU + 50*GIA_50_KE + 100*GIA_100_KE + (soKW-200)*GIA_150_KE;
    } else if (soKW > 350) {
        tongTien = 50*GIA_50_DAU + 50*GIA_50_KE + 100*GIA_100_KE + 150*GIA_150_KE + (soKW-350)*GIA_CONLAI
    }

    document.getElementById("txtTien").innerHTML = "Khách hàng: " + tenKH + "<br>" + "Số tiền phải trả: "+ tongTien.toLocaleString() + " đồng" ;

}

    document.getElementById("btnTinhTien").onclick = tinhTienDien;