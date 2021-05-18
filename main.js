// Bai 4: Tinh dien tich, chu vi hinh chu nhat 
/**
 * B1: Input: Chieu dai, chieu rong hinh chu nhat
 * B2:
 * - Dat bien chieuDai, chieuRong, chuVi, dienTich
 * - Tinh chuVi = (chieuDai + chieuRong)*2
 * - Tinh dienTich = (chieuDai * chieuRong)
 * B3:
 * - Xuat ket qua chuVi va dienTich
 */

console.log('===================Bai4===============');
var chieuDai = 5;
var chieuRong = 10;
var chuVi, dienTich;
chuVi = (chieuDai + chieuRong) * 2;
dienTich = (chieuDai * chieuRong);
console.log('Chu vi hinh chu nhat la: ',chuVi);
console.log('Dien tich hinh chu nhat la: ',dienTich);


//Bai 5: Tong 2 ki tu cua so
/**
 * B1: Input : so co 2 chu so
 * B2: Handle
 * - Dat bien: soHaiChuSo, soHangDonVi, soHangChuc, tongHaiSo
 * - Tinh: 
 *  + soHangDonVi = soHaiChuSo % 10;
 *  + soHangChuc = (sohaiChuSo - soHangDonVi )/10
 *  + tongHaiSo = soHangDonVi + soHangChuc
 * B3:Output
 * - Xuat ket qua tongHaiSo
 */

 console.log('===================Bai5===============');
var soHaiChuSo = 99;
var soHangDonVi, soHangChuc, tongHaiSo;
soHangDonVi = soHaiChuSo % 10;
soHangChuc = (soHaiChuSo - soHangDonVi)/10;
tongHaiSo = soHangChuc + soHangDonVi;
console.log('Tong hai chu so cua', soHaiChuSo,'la: ',tongHaiSo);