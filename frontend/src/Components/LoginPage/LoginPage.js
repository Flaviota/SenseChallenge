import React, { useState } from 'react';
import styled from 'styled-components'; // Importe styled-components
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';


const LoginPage = ({ setIsAuthenticated, setActive }) => { // Recebe setIsAuthenticated como propriedade
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      if (username === 'flaviota' && password === 'flaviota') {
        // Autenticação bem-sucedida, você pode definir a autenticação como verdadeira aqui.
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Login bem-sucedido!'
          }).then(() => {
            setIsAuthenticated(true); // Define como autenticado usando a propriedade passada
            setActive(1); 
        })
      } else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        })

        Toast.fire({
            icon: 'error',
            title: 'Usuário ou senha incorretos!'
        })
      }
    };

  return (
    <LoginPageWrapper>
      <div className="main-login">
        <div className="left-login">
          <h1>Faça login<br />E entre para o nosso time</h1>
          <img src="./img/investment.svg" className="left-login-image" alt="Investiment animation" />
        </div>
        <div className="right-login">
          <div className="card-login">
            <h1>LOGIN</h1>
            <div className="textfield">
              <label htmlFor="usuario">Usuário</label>
              <input
                type="text"
                name="usuario"
                placeholder="Usuário"
                id="login"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="textfield">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                name="senha"
                placeholder="Senha"
                id="senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn-login" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </LoginPageWrapper>
  );
};

  // Use a função styled para definir estilos CSS para seus componentes
  const LoginPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2f2841;
    height: 100vh;
    border-radius: 20px;
    box-shadow: 0px 10px 40px #00000056;
    color: #00ff88;

    h1 {
      font-size: 3vw;
      color: #77ffc0;
    }

    .main-login {
      width: 100vW;
      height: 100vh;
      background: #201b2c;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .left-login {
      width: 50vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .left-login-image {
      width: 35vw;
    }

    .right-login {
      width: 50vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .card-login {
      width: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 30px 35px;
      background: #2f2841;
      border-radius: 20px;
      box-shadow: 0px 10px 40px #00000056;

      h1 {
        color: #00ff88;
        font-weight: 800;
        margin: 0;
      }

      .textfield {
        width: 100%;
        display: flex;
        margin: 10px 0px;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        input {
          width: 100%;
          border: none;
          border-radius: 10px;
          padding: 15px;
          background: #514869;
          color: #f0ffffde;
          font-size: 12pt;
          box-shadow: 0px 10px 40px #00000056;
          outline: none;
          box-sizing: border-box;
        }

        label {
          color: #f0ffffde;
          margin-bottom: 10px;
        }

        input::placeholder {
          color: #f0ffff94;
        }
      }

      .btn-login {
        width: 100%;
        padding: 16px 0px;
        margin: 25px;
        border: none;
        border-radius: 8px;
        outline: none;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: #2b134b;
        background: #00ff88;
        cursor: pointer;
        box-shadow: 0px 10px 40px -12px #00ff8052;
      }
    }

    button:hover {
      background-color: #00cc66;
    }

    @media only screen and (max-width: 950px) {
      .card-login {
        width: 85%;
      }
    }

    @media only screen and (max-width: 600px) {
      .main-login {
        flex-direction: column;
      }
      .left-login > h1 {
        display: none;
      }

      .left-login {
        width: 100%;
        height: auto;
      }

      .right-login {
        width: 100%;
        height: auto;
      }

      .left-login-image {
        width: 50vw;
      }

      .card-login {
        width: 90%;
      }
    }
  `;

export default LoginPage;
