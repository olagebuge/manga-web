"use client";

import Image from "next/image";
import Link from "next/link";
import { LuLogIn, LuFileEdit } from "react-icons/lu";

//MyNavLink元件
const MyNavLink = ({
  onClick: myOnClick,
  href,
  title,
  ...rest
}: {
  onClick?: () => void;
  href: string;
  title: string;
}) => (
  <Link
    color={"#fff"}
    onClick={() => myOnClick?.()}
    href={href}
    style={{ textDecoration: "none" }}
    {...rest}
  >
    {title}
  </Link>
);

const navLinks = [
  { href: "/recommend", title: "鑑賞家" },
  { href: "/cate", title: "逛逛作品" },
  { href: "/profile", title: "工作室" },
].map(({ href, title }) => <MyNavLink key={title} href={href} title={title} />);

export const Navbar = () => {
  return (
    <nav className="bg-zinc-50">
      <div className="max-w-[1440px] flex p-4 mx-auto justify-between items-center">
        <Link href="/">
          <Image width={100} height={50} alt="logo-mark" src="/vercel.svg" />
        </Link>
        <div className="flex gap-6">{navLinks}</div>
        <div className="flex">
          <Link
            href="/login"
            className="rounded-ss-full rounded-es-full bg-black text-white pl-5 pr-3 py-2 flex items-center gap-1"
          >
            <LuLogIn />
            登入
          </Link>
          <Link
            href="/signup"
            className="rounded-se-full rounded-ee-full bg-violet-200 text-black pl-3 pr-5 py-2 flex items-center gap-1"
          >
            <LuFileEdit />
            註冊
          </Link>
        </div>
      </div>
    </nav>
  );
};
