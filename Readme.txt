1 - clone project về
2- cai đặt project,
   +cài nodejs vs 6.11lts
   + cài đặt webpack bằng câu lệnh
     npm install -g webpack

  + Nếu máy bạn không cài git-scm thì có thể dùng cmd
   đầu tiên đi vào thư mục project và chạy câu lệnh
    npm install 
  + đẫ cài git-scm
    vào thư mục chuột phải chọn git bash here để bật màn hình consol
    sau đó chạy npm install để cài đặt cái module cần thiết cho project
  
3 chạy project
  -vào thư mục project chạy câu lệnh
  -sails lift or node app 
  -vào địa chỉ localhost công 1337 để test,
  -vào menu sự kiện log
  - mở 2 tab và click vào nút recevice log.
  - Ở đây mình cho 1 buton để kích hoạt sự kiện.
    có 2 sự kiện test.
    +1 sự kiện lắng nghe nhận log từ 2 server có công là 1337 và 1339

    +1 sự kiện còn lại là sự kiên socket của sails khi model thay đổi(sẽ phát ra sự kiện cho toàn bộ client lắng nghe model đó .. cái này sẽ giải thích thêm)


  