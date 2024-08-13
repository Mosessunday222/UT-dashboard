import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600px;
`;

const StyledApp = styled.div`
  background: orchid;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1> helo world</H1>
        <Button onClick={() => alert("me is checking in!!!")}>check in</Button>
        <Button onClick={() => alert("me is checking out!!!!")}>
          check out
        </Button>
        <Input placeholder="number of guess" type="number"></Input>
        <Input placeholder="number of guess" type="number"></Input>
      </StyledApp>
    </>
  );
}

export default App;
