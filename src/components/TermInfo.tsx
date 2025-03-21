import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>mukund</User>@<WebsiteName>terminal.mukund.dev</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
