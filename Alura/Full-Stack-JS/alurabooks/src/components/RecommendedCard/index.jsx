import styled from "styled-components";

const Card = styled.section`
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  margin: 0 auto;
  max-width: 600px;
  padding: 35px 20px;
  justify-content: space-around;
  width: 100%;
  box-shadow: 20px 20px 10px #00000040;
  margin-bottom: 75px;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
  }
`;

const Title = styled.h2`
  width: 100%;
  background-color: #fff;
  color: #eb9b00;
  font-size: 36px;
  text-align: left;
  margin: 0;
  border-radius: 10px 10px 0 0;
  text-transform: uppercase;
  font-size: 16px;
`;

const Subtitle = styled.h4`
  color: #002f52;
  font-size: 24px;
  font-weight: bold;
  margin: 15px 0;
`;

const Description = styled.p`
  max-width: 300px;
`;

const BookImg = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 5px;
`;

const Button = styled.button`
  background-color: #eb9b00;
  color: #fff;
  padding: 10px 0px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  display: block;
  text-align: center;
  width: 150px;
  &:hover {
    cursor: pointer;
  }
`;

export const RecommendedCard = ({ title, subtitle, description, img }) => {
  return (
    <Card>
      <div>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
      </div>
      <div>
        <BookImg src={img} />
        <Button>Saiba mais</Button>
      </div>
    </Card>
  );
};
