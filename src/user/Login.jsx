import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeUsername = (e) => setUsername(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      url: "http://localhost:8080/loginProc",
      data: { username, password },
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1>로그인 페이지</h1>
      <form onSubmit={handleSubmit}>
        Username:{" "}
        <input type="text" value={username} onChange={changeUsername} />
        <br />
        Password:{" "}
        <input type="text" value={password} onChange={changePassword} />
        <br />
        <button type="submit">로그인</button>
      </form>
    </>
  );
}
