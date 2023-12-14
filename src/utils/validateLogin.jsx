const validate = (input) => {
  let errors = {};
  if (!input.email) {
    errors.email = "El email es requerido";
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email = "El email no es válido";
  }
  if (!input.password) {
    errors.password = "La contraseña es requerida";
  } else if (!/(?=.*[A-Z])(?=.*\d).{6,}/.test(input.password)) {
    errors.password = "La contraseña debe tener al menos 6 caracteres, 1 numero y una mayúscula.";
  }
  return errors;
};

export default validate