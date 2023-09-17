import React, {useState, useMemo} from 'react'
import styled from "styled-components";
import bg from './img/bg.png'
import {MainLayout} from './styles/Layouts'
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation'
import Income from './Components/Income/Income'
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';
import Dashboard from './Components/Dashboard/Dashboard';
import LoginPage from './Components/LoginPage/LoginPage';

function App() {
  // primeiro ao entrar
  const [active, setActive] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const global = useGlobalContext()
  console.log(global);

  function displayData() {
    // se estiver logado
    if (isAuthenticated) {
      switch (active) {
        case 1:
          return <Dashboard />;
        case 2:
          return <Dashboard />;
        case 3:
          return <Income />;
        case 4:
          return <Expenses />;
        default:
          return <Dashboard />;
      }
    } else {
      return <LoginPage setIsAuthenticated={setIsAuthenticated} setActive={setActive} />
    }
}
  

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])

  let content;

  if (active === 'login') {
      content = (
        <AppStyled bg={bg} className="App">
          {displayData()}
        </AppStyled>
      );
    } else {
      content = (
        <AppStyled bg={bg} className="App">
          {orbMemo}
          <MainLayout>
            <Navigation active={active} setActive={setActive} />
            <main>
              {displayData()}
            </main>
          </MainLayout>
        </AppStyled>
      );
    }
  
  return content;
  
}


const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;
