import { IoMdArrowDropright } from "react-icons/io";

const Feature = ({ feature }) => {
  return <p className="flex items-center gap-2 text-lg">
   <IoMdArrowDropright></IoMdArrowDropright> {feature}
  </p>;
};

export default Feature;
