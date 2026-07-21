import { RiHome2Line } from "react-icons/ri";
import { RiHome2Fill } from "react-icons/ri";

import { GrTransaction } from "react-icons/gr";
import { PiTipJar } from "react-icons/pi";
import { PiTipJarDuotone } from "react-icons/pi";

import { IoSettingsOutline } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";

import { FaPlus } from "react-icons/fa6";

function NavBar({
  onShowModal,
  showTransactionsPage,
  showHomePage,
  showBudgetPage,
  showSettingsPage,
  activeMenu,
}) {
  const menuStyles =
    "flex flex-col items-center w-full py-2 rounded-2xl text-secondary cursor-pointer";
  const activeMenuStyles = "text-active font-semibold ";
  return (
    <div className="fixed inset-x-0 bottom-1.5 mx-3 mb-3 flex h-16 items-center justify-between rounded-3xl bg-white px-4 text-sm shadow-xl md:text-lg lg:m-auto lg:w-1/2 lg:mb-5">
      {/* HOME BUTTON */}
      <div
        onClick={showHomePage}
        className={`${menuStyles} ${activeMenu === "home" ? activeMenuStyles : ""}`}
      >
        {activeMenu === "home" ? (
          <RiHome2Fill
            className={`text-xl lg:text-2xl ${activeMenu === "home" ? activeMenuStyles : ""} `}
          />
        ) : (
          <RiHome2Line
            className={`text-xl lg:text-2xl ${activeMenu === "home" ? activeMenuStyles : ""} `}
          />
        )}

        <p className={` ${activeMenu === "home" ? activeMenuStyles : ""} `}>
          {" "}
          Home
        </p>
      </div>

      {/* MOVES BUTTON */}
      <div
        onClick={showTransactionsPage}
        className={`${menuStyles} ${activeMenu === "transactions" ? activeMenuStyles : ""}`}
      >
        <GrTransaction
          className={`text-xl lg:text-2xl ${activeMenu === "transactions" ? activeMenuStyles : ""} `}
        />
        <p
          className={` ${activeMenu === "transactions" ? activeMenuStyles : ""} `}
        >
          {" "}
          Moves
        </p>
      </div>

      {/* ADD BUTTON */}

      <div className="relative -top-6">
        <button
          onClick={onShowModal}
          className="bg-primary z-20 flex w-full cursor-pointer items-center justify-center rounded-full p-4 text-white shadow-xl"
        >
          <FaPlus />
        </button>
      </div>

      {/* BUDGET BUTTON */}
      <div
        onClick={showBudgetPage}
        className={`${menuStyles} ${activeMenu === "budget" ? activeMenuStyles : ""}`}
      >
        {activeMenu === "budget" ? (
          <PiTipJarDuotone
            className={`text-xl lg:text-2xl ${activeMenu === "budget" ? "text-primary" : ""} `}
          />
        ) : (
          <PiTipJar
            className={`text-xl lg:text-2xl ${activeMenu === "budget" ? "text-primary" : ""} `}
          />
        )}

        <p className={` ${activeMenu === "budget" ? activeMenuStyles : ""} `}>
          Budget
        </p>
      </div>

      {/* SETTINGS BUTTON */}
      <div
        onClick={showSettingsPage}
        className={`${menuStyles} ${activeMenu === "settings" ? activeMenuStyles : ""}`}
      >
        {activeMenu === "settings" ? (
          <IoSettings
            className={`text-xl lg:text-2xl ${activeMenu === "settings" ? activeMenuStyles : ""} `}
          />
        ) : (
          <IoSettingsOutline
            className={`text-xl lg:text-2xl ${activeMenu === "settings" ? "text-primary font-bold" : ""} `}
          />
        )}

        <p className={` ${activeMenu === "settings" ? activeMenuStyles : ""} `}>
          {" "}
          Settings
        </p>
      </div>
    </div>
  );
}

export default NavBar;
