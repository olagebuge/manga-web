export default function SignupPage() {
  return (
    <section className="flex flex-col items-center mt-5">
      <div className="w-[500px]">
        <h1 className="h1title">註冊頁</h1>
        <form action="http://localhost:8080/api/auth/signup" method="POST"  className="tracking-wide flex flex-col gap-5 mt-5 w-[400px]">
          <div className="flex">
            <label htmlFor="name" className="mr-3 py-2">
              姓名
            </label>
            <div className="flex flex-col w-[80%]">
              <input
                name="name"
                type="text"
                id="name"
                aria-describedby="nameHelp"
                required
                className="p-2 rounded-md"
              />
              <small id="nameHelp" className="block mt-1 text-right text-gray-500">請輸入您的名字或暱稱。</small>
            </div>
          </div>

          <div className="flex">
            <label htmlFor="email" className="mr-3 py-2">
              信箱
            </label>
            <div className="flex flex-col w-[80%]">
            <input
              type="email"
              id="email"
              aria-describedby="emailHelp"
              name="email"
              required
              className="p-2 rounded-md"
            />
            <small id="emailHelp" className="block mt-1 text-right text-gray-500">請輸入信箱，我們不會與其他人分享你的個人資訊。</small>

            </div>
            
          </div>

          <div className="flex">
            <label htmlFor="password"  className="mr-3 py-2">密碼</label>
            <div className="flex flex-col w-[80%]">
            <input
              type="password"
              id="password"
              aria-describedby="passwordHelp"
              name="password"
              required
              className="p-2 rounded-md"
            />
             <small id="passwordHelp" className="block mt-1 text-right text-gray-500">請輸入8位數以上英數字混合之密碼</small>
            </div>
          </div>
          <div className="flex justify-center items-center my-3">
            <input type="checkbox" className="mr-2 w-5 h-5"/>
            <p>我已閱讀並同意本站<a href="#" className="slink">隱私權保護政策</a></p>
          </div>
          <button className="form_button">
              確認註冊
          </button>
        </form>
      </div>
    </section>
  );
}
