// import ButtonLog from "../../button/ButtonLog";
// import Logo from "./Logo";
// import NavUl from "./NavUl";
// export default function NavBar({ className }) {
//   const addClassName = className ? `${className}` : "";
//   return (
//     <div className={`flex items-center py-10 ${addClassName}`}>
//       <div className="w-3/12 sm:w-2/4">
//         <Logo />
//       </div>
//       <div className="w-6/12 justify-center flex">
//         <NavUl />
//       </div>
//       <div className="w-3/12 text-right">
//         <ButtonLog
//           variant="outline-green"
//           href="/auth/register"
//           className="mr-2 ml-6 sm:py-1 sm:px-2 sm:text-sm md:px-4 md:py-2 2xl:py-3 2xl:px-6 2xl:text-lg sm:ml-10"
//         >
//           regist
//         </ButtonLog>
//         <ButtonLog
//           variant="green"
//           href="/auth/login"
//           className="sm:py-1 sm:px-2 md:px-4 md:py-2 2xl:py-3 sm:text-sm 2xl:px-6 2xl:text-lg border-2 border-[#1f1f38]"
//         >
//           Login
//         </ButtonLog>
//       </div>
//     </div>
//   );
// }

import ButtonLog from "../../button/ButtonLog";
import React, { useState } from "react";
import Link from "next/link";
import Loading from "../../Loading";

function NavBar() {
  const [loading, setLoading] = useState(false);

  function handleLoading() {
    setLoading(true);
  }
  return (
    <div className="fixed left-0 top-0 w-full z-10  ease-in duration-300">
      <Loading trigger={loading} />
      <div className="m-auto flex justify-between  items-center p-4 text-black sm:bg-[var(--color-bg)]  h-[58px]">
        <Link href="/">
          <h1 className="hidden sm:block font-semibold text-2xl">HENDRY</h1>
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-4">
            <Link href={"#about"}>About</Link>
          </li>
          <li className="p-4">
            <Link href={"#galery"}>Galery</Link>
          </li>
          <li className="p-4">
            <Link href={"#contact"}>contact</Link>
          </li>
          <li className="p-4">
            <div onClick={handleLoading}>
              <ButtonLog
                variant="outline-green"
                href="/auth/register"
                className="sm:py-1 sm:px-2 sm:text-sm md:py-[7px]"
              >
                regist
              </ButtonLog>
            </div>
          </li>
          <li className="p-4">
            <div onClick={handleLoading}>
              <ButtonLog
                variant="green"
                href="/auth/login"
                className="sm:py-1 sm:px-2 sm:text-sm md:py-[7px] border-[1px] border-[#1f1f38]"
              >
                Login
              </ButtonLog>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
