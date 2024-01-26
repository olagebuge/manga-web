import Image from "next/image";

export default function LoginPage() {
  return (
    <section className="flex flex-col items-center mt-5">
      <div className="flex flex-col w-[500px]">
        <h1 className="h1title">登入</h1>
        <form
          action="http://localhost:8080/api/auth/login"
          method="POST"
          className="tracking-wide flex flex-col gap-5 mt-5 w-[400px]"
        >
          <div>
            <label htmlFor="email" className="mr-3">
              信箱
            </label>
            <input
              type="email"
              id="email"
              aria-describedby="emailHelp"
              name="username"
              className="p-2 rounded-md w-[80%]"
            />
          </div>

          <div>
            <label htmlFor="password" className="mr-3">
              密碼
            </label>
            <input
              type="password"
              id="exampleInputPassword1"
              name="password"
              className="p-2 rounded-md w-[80%]"
            />
          </div>
          <div className="flex flex-col items-center gap-3 mt-5">
          <button className="form_button">會員登入</button>
          <a
            className="flex justify-center bg-slate-950 rounded-[6px] py-3 px-3 text-white w-[50%]"
            href="http://localhost:8080/api/auth/google"
          >
            <Image
              className="mr-2"
              src="https://img.icons8.com/color/16/000000/google-logo.png"
              width="24"
              height="24"
              alt="google_icon"
            />
            透過Google登入
          </a>

          </div>
          
        </form>
      </div>
    </section>
  );
}
