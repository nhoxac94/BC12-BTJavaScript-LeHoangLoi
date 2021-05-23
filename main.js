// Bai 4: Tính diện tích và chu vi hình chữ nhật
/**
 * B1: Input: Chiều dài và chiều rộng hình chứ nhật.
 * B2:
 * - Tạo form để người dùng nhập chiều dài và chiều rộng, nút tính kết quả, nơi xuất kết quả.
 * - Dat bien  chieuDaiHinhChuNhat, chieuRongHinhChuNhat để lấy giá trị người dùng nhập.
 * - Tính giá trị khí người dùng click vào button:
 *  + tinhChuVi = (chieuDai + chieuRong)*2
 *  + tinhDienTich = (chieuDai * chieuRong)
 * 
 * B3:
 * - Xuat ket qua tinhChuVi va tinhDienTich ra màn hình.
 */

console.log('===================Bai4===============');


var btnKetQua = document.getElementById('btnKetQua');
var chuViHinhChuNhat = document.getElementById('chuViHinhChuNhat');
var dienTichHinhChuNhat = document.getElementById('dienTichHinhChuNhat');
var ketQua = document.getElementById('ketQua');

ketQua.style.display = 'none';

btnKetQua.onclick = function() {
    var chieuDaiHinhChuNhat = Number(document.getElementById('chieuDaiHinhChuNhat').value);
    var chieuRongHinhChuNhat = Number(document.getElementById('chieuRongHinhChuNhat').value);
    var tinhChuVi = (chieuDaiHinhChuNhat + chieuRongHinhChuNhat) * 2;
    var tinhDienTich = chieuDaiHinhChuNhat * chieuRongHinhChuNhat;
   
    ketQua.style.display = 'block';
    chuViHinhChuNhat.innerHTML = 'Chu vi hình chữ nhật là: '+ tinhChuVi +' cm^2';
    dienTichHinhChuNhat.innerHTML = 'Diện tích hình chữ nhật là: '+ tinhDienTich +' cm^3';
    
   
}





//Bai 5: Tong 2 ki tu cua so
/**
 * B1: Input : so co 2 chu so
 * B2: Handle
 * - Tạo form để người dùng nhập số, nút button, vùng xuất dữ liệu.
 * - Dat bien: soHaiChuSo để lấy giá trị người dùng nhập
 * - Dặt biến: soHangDonVi, soHangChuc, tongHaiSo.
 * - Tinh khi người dùng click vào button. 
 *  + soHangDonVi = soHaiChuSo % 10;
 *  + soHangChuc = (sohaiChuSo - soHangDonVi )/10
 *  + tongDonViVaChuc = soHangDonVi + soHangChuc
 * B3:Output
 * - Xuat ket qua tongDonViVaChuc ra màn hình.
 */

 console.log('===================Bai5===============');

 var btnTinhTong = document.getElementById('btnTinhTong');
 var ketQuaTong = document.getElementById('btnTinhTong');
 btnTinhTong.onclick = function() {
    var soCoHaiChuSo = document.getElementById('soCoHaiChuSo').value;
    var soHangDonVi = soCoHaiChuSo % 10;
    var soHangChuc = (soCoHaiChuSo - soHangDonVi)/10;
    var tongDonViVaChuc = soHangDonVi + soHangChuc ;

    ketquaTong.innerHTML = 'Tổng hai số của số ' +  soCoHaiChuSo + ' là ' + tongDonViVaChuc;
 }

