import { MdOutlineLocalGroceryStore, MdPhoneIphone } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LiaCarSideSolid, LiaLaptopSolid } from "react-icons/lia";
import { IoWalletOutline } from "react-icons/io5";
import { GoGift } from "react-icons/go";
import { PiHeartbeatBold, PiCoffeeBold } from "react-icons/pi";

import {} from "react-icons/lia";

// Category Names By Type
export const expenseCategories = [
  "Groceries",
  "Shopping",
  "Car",
  "Coffee",
  "Health",
];
export const incomeCategories = [
  "Salary",
  "Bonus",
  "Social Media",
  "Freelancing",
];

// Category Colors
export const categoryColors = {
  Groceries: "bg-green-200",
  Shopping: "bg-blue-200",
  Car: "bg-yellow-200",
  Coffee: "bg-[#CEC0B8]",
  Health: "bg-[#E9D2ED]",
  Salary: "bg-purple-200",
  Bonus: "bg-pink-200",
  "Social Media": "bg-[#B6E6E9]",
  Freelancing: "bg-[#BAE7C0]",
};

// Category Icons
export const categoryIcons = {
  Groceries: <MdOutlineLocalGroceryStore />,
  Shopping: <HiOutlineShoppingBag />,
  Car: <LiaCarSideSolid />,
  Health: <PiHeartbeatBold />,
  Coffee: <PiCoffeeBold />,
  Salary: <IoWalletOutline />,
  Bonus: <GoGift />,
  "Social Media": <LiaLaptopSolid />,
  Freelancing: <MdPhoneIphone />,
};
