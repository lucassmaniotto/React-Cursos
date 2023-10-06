import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about", {
        state: `Hello from Home - ${new Date().toLocaleString()}`,
    });
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleNavigate}>Navigate</button>
    </div>
  );
};
