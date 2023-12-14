const validate = (input) => {
  let errors = {};
  if (!input.nombre) {
    errors.nombre = "El nombre es requerido";
  } else if (!/^[a-zA-Z\s]*$/.test(input.nombre)) {
    errors.nombre = "El nombre solo puede contener letras";
  }
  if (!input.apellido) {
    errors.apellido = "El apellido es requerido";
  } else if (!/^[a-zA-Z\s]*$/.test(input.apellido)) {
    errors.apellido = "El apellido solo puede contener letras";
  }
  if (!input.dni) {
    errors.dni = "El dni es requerido";
  } else if (!/^[0-9]*.{9,}$/.test(input.dni)) {
    errors.dni = "El dni solo puede contener números (min. 9)";
  }
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
  if (input.password !== input.confirmPassword) {
    errors.confirmPassword = "Las contraseñas no coinciden";
  }

  return errors;
};

export default validate