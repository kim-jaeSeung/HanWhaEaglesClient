function Login(join: any) {
  return (
    <div className="flex items-center space-x-4">
      <button className="px-4 py-2 text-light-gray text-xl hover:text-main-orange transition-colors">
        로그인
      </button>
      <button className="px-4 py-2 bg-main-orange text-xl text-white rounded-lg hover:bg-dim-black transition-colors">
        회원가입
      </button>
    </div>
  );
}

export default Login;
