import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./SignUp.css";
import { useDispatch } from "react-redux";
import { createUser } from "../../Redux/actions";
import validate from "../../utils/validateSignUp";
import { useGlobalState } from "../../Context/context";

const SignUp = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [trigger, setTrigger] = useState(0);
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});
  const { loggedUser } = useGlobalState()

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
      navigate("/panel");
    }
  },[loggedUser])

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(createUser(input))
      .then(() => {
        setInput({
          nombre: "",
          apellido: "",
          dni: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setTrigger(0)
        navigate('/login')
      })
      .catch((error) => {
        console.error("Catch login",error);
        setTimeout(() => {
          setErrors({
            ...errors,
            register: "Registro inválido. Intente nuevamente con otro email.",
          });
          setTimeout(() => {
            setErrors((prevErrors) => ({
              ...prevErrors,
              register: "",
            }));
          }, 3000);
        }, 0);
      }).finally(()=>{
        setTrigger(0)
      })
  };

  return (
    <div className="sign-up-container">
      <div>
        <h1>Registro</h1>
      </div>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <label htmlFor="">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={input.nombre}
          onChange={handleChange}
        />
        {errors.nombre !== "" && (
          <p className="p-login-error">{errors.nombre}</p>
        )}

        <label htmlFor="">Apellido</label>
        <input
          type="text"
          name="apellido"
          value={input.apellido}
          onChange={handleChange}
        />
        {errors.apellido !== "" && (
          <p className="p-login-error">{errors.apellido}</p>
        )}

        <label htmlFor="">DNI</label>
        <input
          type="number"
          name="dni"
          value={input.dni}
          onChange={handleChange}
        />
        {errors.dni !== "" && <p className="p-login-error">{errors.dni}</p>}

        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
        {errors.email !== "" && <p className="p-login-error">{errors.email}</p>}

        <label htmlFor="">Contraseña</label>
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={handleChange}
        />
        {errors.password !== "" && (
          <p className="p-login-error">{errors.password}</p>
        )}

        <label htmlFor="">Confirmar contraseña</label>
        <input
          type="password"
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword !== "" && (
          <p className="p-login-error">{errors.confirmPassword}</p>
        )}
        <button
          type="submit"
          className={`
          sign-up-button ${
            !input.nombre ||
            !input.apellido ||
            !input.dni ||
            !input.email ||
            !input.password ||
            !input.confirmPassword ||
            errors.apellido ||
            errors.dni ||
            errors.email ||
            errors.password ||
            errors.confirmPassword
              ? "disabled-button"
              : ""
          }
        `}
          disabled={
            !input.nombre ||
            !input.apellido ||
            !input.dni ||
            !input.email ||
            !input.password ||
            !input.confirmPassword ||
            errors.apellido ||
            errors.dni ||
            errors.email ||
            errors.password ||
            errors.confirmPassword
          }
        >
          Registrarme
        </button>
        {errors.register !== "" && <p className="p-login-error">{errors.register}</p>}
        <p>
          ¿Ya tienes cuenta? Ingresa <Link to={"/login"}>aquí</Link>
        </p>
      </form>
      {/* <div>
        <p>Registrate con</p>
        <p>google</p>
      </div> */}
    </div>
  );
};

export default SignUp;
