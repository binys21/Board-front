export default function BoardWrite() {
  return (
    <>
      <div className="container">
        <h2>게시판 등록</h2>
        <form
          id="frm"
          method="post"
          action="/board/insertBoard.do"
          enctype="multipart/form-data"
        >
          <table className="board_detail">
            <tbody>
              <tr>
                <td>제목</td>
                <td>
                  <input type="text" id="title" name="title" />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <textarea id="contents" name="contents"></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <input type="file" id="files" name="files" multiple="multiple" />
          <input type="submit" id="submit" value="저장" className="btn" />
        </form>
      </div>
    </>
  );
}
