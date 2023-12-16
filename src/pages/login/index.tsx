import { Box, Paper, Stack } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import PasswordField from "@/components/items/inputs/PasswordField/PasswordField";
import LoadingButton from "@/components/items/buttons/loadingButton/LoadingButton";
import Logo from "@/components/ui/svg/logo";
import Name from "@/components/ui/svg/name";
import { LoginValues } from "./type";
import { useNavigate } from "react-router-dom";

const validation = Yup.object().shape({
  password: Yup.string().matches(
    /111111/,
    "wrong password please re enter your password"
  ),
});
const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (
    values: LoginValues,
    { setSubmitting }: FormikHelpers<LoginValues>
  ) => {
    localStorage.setItem("password", JSON.stringify(values.password));
    navigate("/");
  };
  return (
    <Stack
      minHeight={"97vh"}
      overflow={"hidden"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Paper
        sx={{
          width: { md: "40vw" },
        }}
      >
        <Formik
          initialValues={{ password: "" }}
          validationSchema={validation}
          onSubmit={handleLogin}
        >
          {({
            values,
            touched,
            errors,
            isSubmitting,
            handleBlur,
            handleChange,
          }) => (
            <Form>
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                p={{ xs: 3, sm: 6, md: 9, lg: 12 }}
                gap={4}
              >
                <Stack direction={"row"}>
                  <Logo sx={{ width: 50, height: 50 }} />
                  <Name sx={{ width: 50, height: 50 }} />
                </Stack>
                <PasswordField
                  name="password"
                  type="password"
                  label={"password"}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  error={touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                />
                <LoadingButton isSubmitting={isSubmitting} buttonText="login" />
              </Stack>
            </Form>
          )}
        </Formik>
      </Paper>
    </Stack>
  );
};

export default LoginPage;
