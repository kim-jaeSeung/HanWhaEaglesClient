import React from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import { Link } from "react-router-dom";

interface LoginFormValues {
  account: string; // 통합계정 또는 이메일
  password: string;
  autoLogin: boolean;
}

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: { account: "", password: "", autoLogin: false },
  });

  React.useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const [showPassword, setShowPassword] = React.useState(false);

  const onSubmit = (data: LoginFormValues) => {
    // TODO: 로그인 처리 API 연결
    console.log("login submit", data);
  };

  const passwordType = showPassword ? "text" : "password";

  return (
    <div className="mx-auto w-[90%] lg:w-[50%] rounded-2xl p-8 lg:p-10 flex flex-col items-center h-[100vh] login-shadow bg-white">
      <img className="w-[60%] mb-10" alt="로고" src="/img/logo.svg"></img>
      <div className="w-full flex justify-between items-center mb-6">
        <h2 className="text-black text-2xl">로그인</h2>
      </div>
      <form className="w-full max-w-[720px]" onSubmit={handleSubmit(onSubmit)}>
        {/* 통합계정 또는 이메일 */}
        <div className="mb-4">
          <Input
            type="text"
            placeholder="아이디"
            className="w-full h-12 rounded-lg border border-black/10 px-4 placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black/80 text-custom-black caret-custom-black"
            autoComplete="username"
            register={register("account", {
              required: "아이디 또는 이메일을 입력하세요.",
            })}
            errorMessage={errors.account?.message}
          />
        </div>

        {/* 비밀번호 + toggle */}
        <div className="mb-6 relative ">
          <Input
            type={passwordType}
            placeholder="비밀번호"
            className="w-full h-12 rounded-lg border border-black/10 px-4 pr-10 placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black/80 text-custom-black caret-custom-black"
            autoComplete="current-password"
            register={register("password", {
              required: "비밀번호를 입력하세요.",
              minLength: { value: 8, message: "비밀번호는 8자 이상입니다." },
            })}
            errorMessage={errors.password?.message}
          />
          <button
            type="button"
            onClick={() => setShowPassword((p) => !p)}
            aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-black/40 hover:text-black/70"
          ></button>
        </div>

        {/* 로그인 버튼 */}
        <button
          type="submit"
          disabled={!isValid}
          className="w-full h-12 rounded-lg bg-black text-white font-semibold tracking-wide disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
        >
          로그인
        </button>

        {/* 하단 옵션 행 */}
        <div className="mt-6 flex items-center justify-between text-sm text-black/60">
          <label className="inline-flex items-center gap-2 select-none">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border border-black/20 accent-black"
              {...register("autoLogin")}
            />
            <span>자동 로그인</span>
          </label>

          <div className="flex items-center gap-2">
            <Link to="/find-id" className="hover:text-black/80">
              아이디 찾기
            </Link>
            <span aria-hidden className="text-black/30">
              |
            </span>
            <Link to="/find-password" className="hover:text-black/80">
              비밀번호 찾기
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
