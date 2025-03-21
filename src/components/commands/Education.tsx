import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};
const eduBg = [
  {
    title:
      "Bachelor of Technology in Electronics and Communication Engineering",
    desc: "International Institute of Information Technology, Naya Raipur | 2023 – 2027",
  },
  {
    title: "Higher Secondary (Class XII) (87%)",
    desc: "Krishna Public School, Raipur | 2021 – 2022 • C.B.S.E Board",
  },
  {
    title: "Secondary School (Class X)",
    desc: "Krishna Public School, Raipur | 2019 – 2020 • C.B.S.E Board",
  },
];

export default Education;
