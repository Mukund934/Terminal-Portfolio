import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
     __    __       _     _    _         _     _       _      _   _____
    /  \\  /  \\     | |   | |  | |   //  | |   | |     / \\   /  / |  _  \\
   / /\\ \\/ /\\ \\    | |   | |  | |  //   | |   | |    /   \\ /  /  | | \\  \\
  / /  \\  /  \\ \\   | |   | |  | |_//    | |   | |   / /\\  V  /   | |  ❭  ❭
 / /    \\/    \\ \\  | \\___/ |  | |  \\\\   | \\___/ |  / /  \\   /    | |_/  /
/_/            \\_\\ \\_______/  |_|   \\\\  \\_______/ /_/    \\_/     |_____/



          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
     __    __       _     _    _         _     _       _      _   _____
    /  \\  /  \\     | |   | |  | |   //  | |   | |     / \\   /  / |  _  \\
   / /\\ \\/ /\\ \\    | |   | |  | |  //   | |   | |    /   \\ /  /  | | \\  \\
  / /  \\  /  \\ \\   | |   | |  | |_//    | |   | |   / /\\  V  /   | |  ❭  ❭
 / /    \\/    \\ \\  | \\___/ |  | |  \\\\   | \\___/ |  / /  \\   /    | |_/  /
/_/            \\_\\ \\_______/  |_|   \\\\  \\_______/ /_/    \\_/     |_____/

          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. </div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Link href="">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
