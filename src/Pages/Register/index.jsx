import { useForm } from "react-hook-form";
import { FlexContainer } from "../../styles/global";
import { StyledForm } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";

import { Button, Paper } from "@mui/material";

export const Register = () => {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Require field!")
      .matches(
        /^[a-záàâãéèêíïóôõöúçñ ]+$/i,
        "Use only letters in the username"
      ),
    email: yup.string().required("Require field!").email("Email invalid"),
    password: yup
      .string()
      .required("Require field!")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Uma letra maiúscula, um número e um caractere especial!!"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password does not match!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const signUp = (data) => console.log(data);

  return (
    <>
      <StyledForm onSubmit={handleSubmit(signUp)}>
        <Paper elevation={3}>
          <FlexContainer flexDirection="column" justifyContent="center">
            <TextField
              required
              error={!!errors.username}
              helperText={errors?.username?.message}
              label="Username"
              {...register("username")}
            />
            <TextField
              required
              error={!!errors.email}
              helperText={errors?.email?.message}
              label="email"
              {...register("email")}
            />
            <TextField
              required
              error={!!errors.password}
              helperText={errors?.password?.message}
              label="password"
              {...register("password")}
            />
            <TextField
              required
              error={!!errors.confirmPassword}
              helperText={errors?.confirmPassword?.message}
              label="Confirm password"
              {...register("confirmPassword")}
              type="password"
            />
            <Button variant="contained" type="submit">
              Create an Account
            </Button>
          </FlexContainer>
        </Paper>
      </StyledForm>
    </>
  );
};
