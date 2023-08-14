import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>About</h1>
      <button onClick={handleNavigate}>Go back</button>
    </div>
  );
};
