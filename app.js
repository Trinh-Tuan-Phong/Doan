const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql'); // Hoặc mysql2

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Kết nối với cơ sở dữ liệu MySQL
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'user',
  password: 'password',
  database: 'db',
});

db.connect((err) => {
  if (err) {
    console.error('Lỗi kết nối cơ sở dữ liệu:', err);
    return;
  }
  console.log('Kết nối cơ sở dữ liệu thành công');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home_page.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login-signup/login.html');
});

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/login-signup/sign_up.html');
});

app.get('/PC', (req, res) => {
    res.sendFile(__dirname + '/select__item--PC/PC.html');
});

app.get('/PC_PVN_x_ASUS_EVANGELION_2', (req, res) => {
    res.sendFile(__dirname + '/select__item--PC/item__1.html');
});

app.get('/PC_PVN_Gaming_Intel_i7-13700k', (req, res) => {
    res.sendFile(__dirname + '/select__item--PC/item__2.html');
});

app.get('/PC_PVN_Gaming_Intel_i7-13700F', (req, res) => {
    res.sendFile(__dirname + '/select__item--PC/item__3.html');
});

app.get('/PC_PVN_Gaming_Intel_i5-13400F', (req, res) => {
    res.sendFile(__dirname + '/select__item--PC/item__4.html');
});

app.get('/PC_PVN_Intel_i5-13600KF', (req, res) => {
    res.sendFile(__dirname + '/select__item--PC/item__5.html');
});

app.get('/PC_PVN_AMD_R5-7600', (req, res) => {
    res.sendFile(__dirname + '/select__item--PC/item__6.html');
});

app.get('/PC_GVN_Intel_i5-12400F', (req, res) => {
    res.sendFile(__dirname + '/select__item--PC/item__7.html');
});

app.get('/PC_PVN_AMD_R5-7600.', (req, res) => {
    res.sendFile(__dirname + '/select__item--PC/item__8.html');
});

app.get('/LAPTOP', (req, res) => {
    res.sendFile(__dirname + '/select__item--laptop/LAPTOP.html');
});

app.get('/Laptop_LG_Gram_Style_14Z90RS_GAH54A5', (req, res) => {
    res.sendFile(__dirname + '/select__item--laptop/item__1.html');
});

app.get('/Laptop_ASUS_Zenbook_14_OLED_UX3402VA_KM068W', (req, res) => {
    res.sendFile(__dirname + '/select__item--laptop/item__2.html');
});

app.get('/Laptop_LG_Gram_2023_14Z90R_GAH53A5', (req, res) => {
    res.sendFile(__dirname + '/select__item--laptop/item__3.html');
});

app.get('/Laptop_Dell_Vostro_13_5320_V3I7005W_Gray', (req, res) => {
    res.sendFile(__dirname + '/select__item--laptop/item__4.html');
});

app.get('/Laptop_Lenovo_Yoga_Slim_6_14IRH8_83E0000VVN', (req, res) => {
    res.sendFile(__dirname + '/select__item--laptop/item__5.html');
});

app.get('/Laptop_Asus_Vivobook_15_OLED_A1505VA_L1114W', (req, res) => {
    res.sendFile(__dirname + '/select__item--laptop/item__6.html');
});

app.get('/LAPTOP__GAMING', (req, res) => {
    res.sendFile(__dirname + '/select__item--laptopgaming/LAPTOP__gaming.html');
});

app.get('/Laptop_gaming_MSI_Stealth_GS77_12UHS_250VN', (req, res) => {
    res.sendFile(__dirname + '/select__item--laptopgaming/item__1.html');
});

app.get('/Laptop_gaming_ASUS_ROG_Zephyrus_G15_GA503RS_LN892W', (req, res) => {
    res.sendFile(__dirname + '/select__item--laptopgaming/item__2.html');
});

app.get('/Laptop_gaming_Acer_Predator_Helios_Neo_16_PHN16_71_53M7', (req, res) => {
    res.sendFile(__dirname + '/select__item--laptopgaming/item__3.html');
});

app.get('/Laptop_gaming_ASUS_TUF_A15_FA507NU_LP031W', (req, res) => {
    res.sendFile(__dirname + '/select__item--laptopgaming/item__4.html');
});

app.get('/Laptop_gaming_MSI_GF63_12UC_887VN', (req, res) => {
    res.sendFile(__dirname + '/select__item--laptopgaming/item__5.html');
});

app.get('/MOUSE', (req, res) => {
    res.sendFile(__dirname + '/select__item--mouse/Mouse.html');
});

app.get('/Chuot_Logitech_G_Pro_X_Superlight_Wireless_Red', (req, res) => {
    res.sendFile(__dirname + '/select__item--mouse/item__1.html');
});

app.get('/Chuot_Pulsar_X2_Super_Clear_Edition', (req, res) => {
    res.sendFile(__dirname + '/select__item--mouse/item__2.html');
});

app.get('/Chuot_Steelseries_Prime_Wireless', (req, res) => {
    res.sendFile(__dirname + '/select__item--mouse/item__3.html');
});

app.get('/Chuot_Asus_TUF_Gaming_M3_Gen_II', (req, res) => {
    res.sendFile(__dirname + '/select__item--mouse/item__4.html');
});

app.get('/Chuot_Gaming_Havit_MS878', (req, res) => {
    res.sendFile(__dirname + '/select__item--mouse/item__5.html');
});

// Login 

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Truy vấn cơ sở dữ liệu để kiểm tra thông tin đăng nhập
    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(sql, [username, password], (err, results) => {
        if (err) {
            console.error('Lỗi truy vấn cơ sở dữ liệu:', err);
            res.send('Đăng nhập thất bại');
        } else {
            if (results.length > 0) {
                res.send('<script>alert("Đăng nhập thành công"); window.location="/";</script>');
            } else {
                res.send('<script>alert("Đăng nhập thất bại");window.location="/login";</script>');
            }
        }
    });
});

// Sign-up

app.post('/signup', (req, res) => {
    const newUsername = req.body['new-username'];
    const newPassword = req.body['new-password'];

    // Thực hiện việc đăng ký (thêm tài khoản mới) vào cơ sở dữ liệu
    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(sql, [newUsername, newPassword], (err, results) => {
        if (err) {
            console.error('Lỗi truy vấn cơ sở dữ liệu:', err);
            res.send('Đăng ký thất bại');
        } else {
            res.send('<script>alert("Đăng ký thành công");window.location="/";</script>');
        }
    });
});

const port = 8000;
app.listen(port, () => {
    console.log(`Ứng dụng đang lắng nghe tại cổng ${port}`);
});

app.use(express.static(__dirname + '/public'));

app.use(express.static(__dirname + '/select__item--PC'));

app.use(express.static(__dirname + '/select__item--laptop'));

app.use(express.static(__dirname + '/select__item--laptopgaming'));

app.use(express.static(__dirname + '/select__item--mouse'));

app.use('/images', express.static(path.join(__dirname, 'public/image')));

app.use('/image__LT', express.static(path.join(__dirname, 'public/image__item--laptop')));

app.use('/image__LTGM', express.static(path.join(__dirname, 'public/image__item--laptopgaming')));

app.use('/image__Mouse', express.static(path.join(__dirname, 'public/image__item--mouse')));
