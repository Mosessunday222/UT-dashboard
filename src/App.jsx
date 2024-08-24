import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1"> helo world</Heading>
            <div>
              <Heading as="h2"> check in and out</Heading>
              <Button onClick={() => alert("me is checking in!!!")}>
                check in
              </Button>
              <Button
                size="small"
                variation="secondary"
                onClick={() => alert("me is checking out!!!!")}
              >
                check out
              </Button>
            </div>
          </Row>

          <Heading as="h3"> form</Heading>
          <Row type="vertical">
            <form>
              <Input placeholder="number of guess" type="number"></Input>
              <Input placeholder="number of guess" type="number"></Input>
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
