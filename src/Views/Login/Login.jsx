import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Login.css";
import validate from "../../utils/validateLogin";
import useLogin from "../../hooks/useLogin";
import Spinner from "../../Components/Spinner/Spinner";
import { useGlobalState } from '../../Context/context';

const Login = () => {
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [trigger, setTrigger] = useState(0);
  const { login, isLoading } = useLogin();
  const navigate = useNavigate();
  const { loggedUser } = useGlobalState(); 

  const handleChange = (e) => {
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
    setTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    if (trigger > 0) {
      setErrors(validate(input));
    }
  }, [input]);

  useEffect(() => {
    if(loggedUser){
      navigate("/logout");
    }
  },[loggedUser])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const success = await login(input.email, input.password);

      if (success) {
        // Handle the successful login
        console.log("Login successful");
        navigate("/panel");
        // Clear the form inputs
        setInput({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      setTimeout(() => {
        setErrors({
          ...errors,
          login: "Login inválido. Intente nuevamente.",
        });
        setTimeout(() => {
          setErrors((prevErrors) => ({
            ...prevErrors,
            login: "",
          }));
        }, 3000);
      }, 0);
    } finally {
      setTrigger(0);
      setInput({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="login-container">
      <div>
        <h1>Login</h1>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
        {errors.email !== "" && <p className="p-login-error">{errors.email}</p>}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={handleChange}
        />
        {errors.password !== "" && (
          <p className="p-login-error">{errors.password}</p>
        )}
        <button
          type="submit"
          className={`
            login-button ${
              !input.email || !input.password || errors.email || errors.password
                ? "disabled-button"
                : ""
            }
          `}
          disabled={
            !input.email || !input.password || errors.email || errors.password
          }
        >
          {isLoading ? <Spinner /> : "Ingresar"}
        </button>
        {errors.login !== "" && <p className="p-login-error">{errors.login}</p>}
        <p>
          ¿No tienes cuenta? Ingresa <Link to={"/signup"}>aquí</Link>
        </p>
      </form>
      {/* <div className="login-google">
        <p>Login with</p>
        <p>google</p>
      </div> */}
    </div>
  );
};

export default Login;
