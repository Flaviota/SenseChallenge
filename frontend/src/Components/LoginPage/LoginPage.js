import React, { useState } from 'react';
import styled from 'styled-components'; 
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import Img from '../../img/img_login.svg'


//Recebendo setIsAuthenticated como propriedade
const LoginPage = ({ setIsAuthenticated, setActive }) => { 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      if (username === 'flaviota' && password === 'flaviota') {
        // Autenticação bem-sucedida
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
            setIsAuthenticated(true); 
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
          <img src={Img}/>
        </div>
      
        <div className="right-login">
          <div className="card-login">
            <h1>LOGIN</h1>
            <div className="textfield">
              <label htmlFor="usuario">Usuário</label>
              <input
                type="text"
                name="usuario"
                placeholder="Digite o usuário"
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
                placeholder="Digite sua senha"
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

  //Styled para definir os estilos do login
  const LoginPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2f2841;
    height: 100vh;
    border-radius: 20px;
    box-shadow: 0px 10px 40px #00000056;
    color: #00ff88;

    body * {
      box-sizing: border-box;
    }

    h1 {
      font-size: 3vw;
      color: #15291f;
    }

    .main-login {
      width: 100vW;
      height: 100vh;
      background: #ecfaed;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .left-login {
      width: 50rem;
      height: 50vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .left-login-image {
      width: 35vw;
    }

    .left-login img{
      padding-top: 40px;
      
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
      background: #88c082;
      border-radius: 20px;
      box-shadow: 0px 10px 40px #00000056;

      h1 {
        color: #15291f;
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
          background: #e9f3ecd3;
          color: #0a0a0ab4;
          font-size: 14pt;
          outline: none;
          box-sizing: border-box;
        }

        label {
          color: #252727d8;
          margin-bottom: 10px;
        }

        input::placeholder {
          color: #25272781;
        }
      }

      .btn-login {
        font-weight: bold;
        width: 100%;
        padding: 16px 0px;
        margin: 25px;
        border: none;
        font-size: 20px;
        border-radius: 18px;
        outline: none;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: #dfdae6;
        background: #484b499c;
        cursor: pointer;
        box-shadow: 0px 10px 40px -12px #e1f3e89d;
      }
    }

    button:hover {
      background-color: #ffffff56;
    }

    //Media queries para responsividade 
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
