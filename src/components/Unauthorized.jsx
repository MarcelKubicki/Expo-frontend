import { useNavigate } from "react-router-dom";

function Unauthorized() {
  const navigate = useNavigate();

  return (
    <main>
      <p>Nieautoryzowany dostęp</p>
      <button onClick={() => navigate(-1)}>Powrót</button>
    </main>
  );
}

export default Unauthorized;
