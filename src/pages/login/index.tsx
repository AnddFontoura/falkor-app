import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4 mt-3">
          <div className="">
            <h2 className="text-center">
              SBFA - Sistema Brasileiro de Futebol Amador
            </h2>
          </div>
          <div className="card-body">
            <div className="form-group">
              <span className=""> E-mail </span>
              <input
                type="email"
                id="loginEmail"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="form-group mt-3">
              <span className=""> Senha </span>
              <input
                type="password"
                id="loginPassword"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="card-footer text-right">
            <button className="btn btn-success mt-3" onClick={handleLogin}>
              Logar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
