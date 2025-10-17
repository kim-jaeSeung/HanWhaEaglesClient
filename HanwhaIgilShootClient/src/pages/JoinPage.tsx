import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
interface JoinFormValues {
  userId: string;
  password: string;
  passwordCheck: string;
  nickname?: string;
  email: string;
}
function JoinPage() {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors, isValid },
  } = useForm<JoinFormValues>({
    mode: "onChange", // 입력 중 검증
    reValidateMode: "onChange",
  });
  const navigate = useNavigate();

  const onSubmit = (data: JoinFormValues) => {
    console.log("회원가입 데이터:", data);
    alert("회원가입 성공!");
    navigate("/", { replace: true });
  };
  const password = watch("password");
  useEffect(() => {
    void trigger("passwordCheck");
  }, [password, trigger]);
  return (
    <div className="mx-auto w-[90%] lg:w-[50%] bg-white rounded-2xl p-8 lg:p-10 shadow-lg mt-10 flex flex-col items-center justify-center">
      {/* 헤더 */}
      <div className="text-center w-[70%]">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-black">
          회원가입
        </h1>
        <p className="mt-3 text-sm lg:text-base text-black/70">
          회원이 되어 다양한 혜택을 경험해보세요!
        </p>
      </div>

      {/* 구분선 + 필수표시 */}
      <div className="flex justify-end mt-8 border-b-2 border-black mb-4 pb-4 w-[70%]">
        <span className="text-[13px] text-main-orange">* 필수입력사항</span>
      </div>

      {/* 폼 */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-6 w-[70%]"
      >
        {/* 아이디 */}
        <div className="grid grid-cols-12 gap-4">
          <label className="col-span-12 lg:col-span-3 self-center justify-self-start lg:justify-self-start text-left font-semibold text-black">
            아이디<span className="text-main-orange ml-1">*</span>
          </label>
          <div className="col-span-9 lg:col-span-7">
            <Input
              type="text"
              placeholder="아이디를 입력하세요."
              className="w-full h-12 rounded-md border border-black/10 px-4 placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-main-orange text-custom-black focus:text-custom-black caret-custom-black"
              autoComplete="username"
              register={register("userId", {
                required: "아이디는 필수 입력입니다.",
                minLength: {
                  value: 6,
                  message: "아이디는 6자 이상이어야 합니다.",
                },
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: "영문 또는 숫자만 입력 가능합니다.",
                },
              })}
              errorMessage={errors.userId?.message}
            />
            <p className="mt-2 text-xs text-black/60">
              6글자 이상의 영문 혹은 영문과 숫자를 조합
            </p>
          </div>
          <div className="col-span-3 lg:col-span-2">
            <button
              type="button"
              className="w-full h-12 rounded-md border border-main-orange text-main-orange hover:bg-main-orange/5 transition-colors"
            >
              중복확인
            </button>
          </div>
        </div>

        {/* 비밀번호 */}
        <div className="grid grid-cols-12 gap-4">
          <label className="col-span-12 lg:col-span-3 self-center justify-self-start lg:justify-self-start text-left font-semibold text-black">
            비밀번호<span className="text-main-orange ml-1">*</span>
          </label>
          <div className="col-span-12 lg:col-span-9">
            <Input
              type="password"
              placeholder="비밀번호를 입력하세요."
              className="w-full h-12 rounded-md border border-black/10 px-4 placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-main-orange text-custom-black focus:text-custom-black caret-custom-black"
              autoComplete="new-password"
              register={register("password", {
                required: "비밀번호를 입력하세요.",
                minLength: {
                  value: 8,
                  message: "비밀번호는 특수문자 포함 8자 이상이여야 합니다.",
                },
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/,
                  message: "비밀번호는 특수문자 포함 8자 이상이여야 합니다.",
                },
              })}
              errorMessage={errors.password?.message}
            />
            <p className="mt-2 text-xs text-black/60">특수문자 포함 8자 이상</p>
          </div>
        </div>

        {/* 비밀번호 확인 */}
        <div className="grid grid-cols-12 gap-4">
          <label className="col-span-12 lg:col-span-3 self-center justify-self-start lg:justify-self-start text-left font-semibold text-black">
            비밀번호 확인<span className="text-main-orange ml-1">*</span>
          </label>
          <div className="col-span-12 lg:col-span-9">
            <Input
              type="password"
              placeholder="비밀번호를 한 번 더 입력하세요."
              className="w-full h-12 rounded-md border border-black/10 px-4 placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-main-orange text-custom-black focus:text-custom-black caret-custom-black"
              autoComplete="new-password"
              register={register("passwordCheck", {
                required: "비밀번호 확인을 입력하세요.",
                validate: (value) =>
                  value === password || "비밀번호가 일치하지 않습니다.",
              })}
              errorMessage={errors.passwordCheck?.message}
            />
          </div>
        </div>

        {/* 닉네임 */}
        <div className="grid grid-cols-12 gap-4">
          <label className="col-span-12 lg:col-span-3 self-center justify-self-start lg:justify-self-start text-left font-semibold text-black">
            닉네임
          </label>
          <div className="col-span-12 lg:col-span-9">
            <Input
              type="text"
              placeholder="사용할 닉네임을 입력하세요."
              className="w-full h-12 rounded-md border border-black/10 px-4 placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-main-orange text-custom-black focus:text-custom-black caret-custom-black"
              autoComplete="nickname"
              register={register("nickname", {
                maxLength: {
                  value: 6,
                  message: "닉네임은 최대 6자까지 가능합니다.",
                },
              })}
              errorMessage={errors.nickname?.message}
            />
            <p className="mt-2 text-xs text-black/60">6글자까지 가능</p>
          </div>
        </div>

        {/* 이메일 */}
        <div className="grid grid-cols-12 gap-4">
          <label className="col-span-12 lg:col-span-3 self-center justify-self-start lg:justify-self-start text-left font-semibold text-black">
            이메일<span className="text-main-orange ml-1">*</span>
          </label>
          <div className="col-span-9 lg:col-span-7">
            <Input
              type="email"
              placeholder="이메일을 입력하세요."
              className="w-full h-12 rounded-md border border-black/10 px-4 placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-main-orange text-custom-black focus:text-custom-black caret-custom-black"
              autoComplete="email"
              register={register("email", {
                required: "이메일은 필수입니다.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "올바른 이메일 형식이 아닙니다.",
                },
              })}
              errorMessage={errors.email?.message}
            />
            <p className="mt-2 text-xs text-black/60">
              예 : example123@gmail.com
            </p>
          </div>
          <div className="col-span-3 lg:col-span-2">
            <button
              type="button"
              className="w-full h-12 rounded-md border border-main-orange text-main-orange hover:bg-main-orange/5 transition-colors"
            >
              인증하기
            </button>
          </div>
        </div>

        {/* 제출 버튼 */}
        <div className="pt-4">
          <button
            type="submit"
            className="mx-auto block w-56 h-12 rounded-md bg-main-orange text-white font-bold hover:bg-main-orange/90 transition-colors disabled:bg-gray-300 disabled:text-gray-500
             disabled:cursor-not-allowed disabled:hover:bg-gray-300"
            disabled={!isValid}
            onClick={handleSubmit(onSubmit)}
          >
            가입하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default JoinPage;
