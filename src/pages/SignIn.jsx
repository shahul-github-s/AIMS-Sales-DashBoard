import AuthLayout from "@components/AuthLayout";
import PasswordInput from "@components/PasswordInput";
import GoogleButton from "@components/GoogleButton";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@contexts/themeContext";
import classNames from "classnames";

const SignIn = ({ setIsAuthenticated }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { theme } = useTheme();

  const onSubmit = (data) => {
    const { email, password } = data;
    // Authentication logic
    if (email === "admin@aimstravels.com" && password === "27.04.1987@Anees") {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } else {
      // Handle invalid login attempt
      alert("Invalid email or password.");
    }
  };

  return (
    <AuthLayout title="Sign In">
      <div className="flex flex-col gap-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field-wrapper mb-5">
            <label className="field-label" htmlFor="email">
              Email
            </label>
            <input
              className={classNames("field-input", {
                "field-input--error": errors.email,
              })}
              id="email"
              type="text"
              placeholder="Enter your email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
              <p className="error-message">Please enter a valid email.</p>
            )}
          </div>
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <PasswordInput
                id="password"
                placeholder="Enter your password"
                isInvalid={errors.password}
                value={field.value}
                onChange={field.onChange}
                innerRef={field.ref}
              />
            )}
          />
          {errors.password && (
            <p className="error-message">Password is required.</p>
          )}
          <button
            className={`btn btn--primary w-full mt-6 ${
              theme === "light" ? "green" : ""
            }`}
            type="submit"
          >
            Sign In
          </button>
        </form>
        <div className="flex flex-col gap-4 xs:gap-6">
          <GoogleButton onSubmit={onSubmit} />
          {/* Add more authentication buttons if needed */}
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
