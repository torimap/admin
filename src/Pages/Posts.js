import styled from "styled-components";
import Header from "../Components/Header";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState } from "react";

const reportNumbers = [
  { id: 1, user: "Will Smith", date: "2012/1/3", reason: "false info" },
  { id: 2, user: "Angelina Jolie", date: "2013/1/3", reason: "false info" },
  { id: 3, user: "Naomi Osaka", date: "2002/1/3", reason: "false info" },
  { id: 4, user: "Vanessa Williams", date: "2022/1/3", reason: "false info" },
  { id: 5, user: "Katy Perry", date: "2022/1/3", reason: "false info" },
  { id: 6, user: "Nick Jonas", date: "2022/1/3", reason: "false info" },
  { id: 7, user: "Justin Bieber", date: "2002/5/3", reason: "false info" },
  { id: 8, user: "Emma Stone", date: "2005/1/3", reason: "false info" },
  { id: 9, user: "Nicole Kidman", date: "2022/1/3", reason: "false info" },
  { id: 10, user: "Tom Cruise", date: "2022/1/3", reason: "false info" },
];

const Posts = () => {
  const [info, setInfo] = useState("");
  const selectID = (_id) => {
    const [info] = reportNumbers.filter((i) => i.id === _id);
    setInfo(info);
  };

  return (
    <Container>
      <HeaderSection>
        <Header />
      </HeaderSection>
      <LeftTab>
        <Router>
          <Button to="/">posts</Button>
        </Router>
      </LeftTab>
      <ContentSection>
        <Select>
          report number:
          <ReportNumbers>
            {reportNumbers.map((i) => (
              <Id onClick={() => selectID(i.id)}>{i.id}</Id>
            ))}
          </ReportNumbers>
        </Select>
        {info && (
          <Details>
            <div>
              <Title>Date: {info.date}</Title>
              <Title>User: {info.user}</Title>
              <Title>Reason: {info.reason}</Title>
              <TextContainer>{info.reason}</TextContainer>
            </div>
          </Details>
        )}
      </ContentSection>
    </Container>
  );
};

export default Posts;

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "a a a a a a a a a a a a a a a a a a a a a a a"
    "b c c c c c c c c c c c c c c c c c c c c c c";
`;

const ContentSection = styled.div`
  grid-area: c;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const Select = styled.div`
  padding: 40px;
`;

const Details = styled.div`
  padding: 30px;
`;

const Title = styled.div`
  margin: 20px 0;
`;

const ReportNumbers = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background: #f3f2f2;
  height: 80%;
  width: 100%;
  margin: 20px 0;
`;

const TextContainer = styled.div`
  background: #f3f2f2;
  height: 500px;
  max-width: 700px;
  padding: 20px;
`;

const HeaderSection = styled.div`
  grid-area: a;
`;

const Button = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #6e3ace;
  height: 50px;
  color: white;
  margin: 10px 0;
`;

const LeftTab = styled.div`
  grid-area: b;
  background: rgba(110, 58, 206, 0.06);
  min-width: 150px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
`;

const Id = styled.div`
cursor: pointer;
`;