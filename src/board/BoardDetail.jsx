import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BoardDetail() {
  const [board, setBoard] = useState({});

  const { boardIdx } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/board/${boardIdx}`)
      .then((res) => res && res.data && setBoard(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container">
        <h2>게시판 상세</h2>
        <form id="frm" method="post">
          <input type="hidden" name="boardIdx" value={board.boardIdx} />

          <table className="board_detail">
            <colgroup>
              <col width="15%" />
              <col width="*" />
              <col width="15%" />
              <col width="35%" />
            </colgroup>
            <tbody>
              <tr>
                <th>글번호</th>
                <td>{board.boardIdx}</td>
                <th>조회수</th>
                <td>{board.hitCnt}</td>
              </tr>
              <tr>
                <th>작성자</th>
                <td>{board.createdId}</td>
                <th>작성일</th>
                <td>{board.createdDt}</td>
              </tr>
              <tr>
                <th>제목</th>
                <td colSpan="3">
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={board.title}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="4">
                  <textarea
                    id="contents"
                    name="contents"
                    value={board.contents}
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </form>

        <div className="file_list">
          {board.fileInfoList &&
            board.fileInfoList.map((file, index) => (
              <p key={index}>
                {file.originalFileName} ({file.fileSize}kb)
              </p>
            ))}
        </div>

        <input type="button" id="list" className="btn" value="목록으로" />
        <input type="button" id="update" className="btn" value="수정하기" />
        <input type="button" id="delete" className="btn" value="삭제하기" />

        {/* 버튼 동작은 이벤트 핸들러로 대체 */}
      </div>
    </>
  );
}
