const Home = () => {
  return (
    <>
      <div className=" home-container">
        <div className="mt-3">
          Yêu cầu:
          <br />
          Sử dụng API từ trang web Http://reqres.in/ để tạo website.
        </div>
        <div>
          Sử dụng thư viện React để tạo một màn hình website cơ bản bao gồm các
          chức năng:{" "}
        </div>
        <ul>
          <li>1. Đăng nhập</li>
          <li>2. Thêm user</li>
          <li>3. Sửa user</li>
          <li>4. Xóa user</li>
          <li>5.Hiển thị tất cả user</li>
          <li>6. Tìm kiếm User theo Id</li>
          <li>7. Sắp xếp theo First name</li>
          <li>8. Import User từ file .csv </li>
          <li>9. Export User từ file .csv</li>
        </ul>
        <div>
          Tự do tùy chỉnh html, css, để có một website nhẹ nhàng, khoa học và
          đẹp.
        </div>
        <div>Commit và đẩy source code lên gitbub public. </div>
        <div>Triển khai website lên Heroku để demo.</div>
      </div>
    </>
  );
};
export default Home;
