const Login = () => {
  return (
    <section className="flex h-screen w-full select-none items-center justify-center bg-slate-50">
      <div className="flex flex-col gap-y-5 bg-white px-10 py-20">
        <center className="text-2xl font-bold text-[#2B3674]">
          Sign in
          {/* <div className="mt-2 w-[50px] border-b-4 border-red-400"></div> */}
        </center>
        <span className="text-slate-500">
          Enter your email and password to sign in!
        </span>
        <button className="flex items-center justify-center gap-x-2 rounded-xl bg-[#F4F7FE] p-3 font-[500] text-[#2B3674] transition duration-100 ease-in-out hover:bg-slate-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          <span className="font-[600]">Sign in with Google</span>
        </button>
        <center className="text-lg text-slate-600">or</center>
        <form action="" className="flex flex-col justify-center gap-y-5">
          <div className="flex flex-col gap-y-5">
            <label htmlFor="email" className="font-semibold text-[#2B3674]">
              Email
            </label>
            <input
              type="email"
              placeholder="abc@gmail.com"
              className="rounded-xl border-2 p-3 outline-none focus:border-[#4318FF]"
            />
          </div>
          <div className="flex flex-col gap-y-5">
            <label htmlFor="password" className="font-semibold text-[#2B3674]">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="rounded-xl border-2 p-3 outline-none focus:border-[#4318FF]"
            />
          </div>
          <button className="my-5 rounded-xl bg-[#4318FF] p-3 font-semibold text-white transition duration-300 ease-in-out hover:bg-indigo-600">
            Sign in
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
