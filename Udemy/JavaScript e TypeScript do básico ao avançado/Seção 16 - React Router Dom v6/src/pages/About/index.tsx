import { useLocation, useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>About</h1>
      <p>{state as string}</p>
      <button onClick={handleNavigate}>Go back</button>
    </div>
  );
};
