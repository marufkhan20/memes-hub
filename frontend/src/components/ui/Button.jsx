import { cn } from "@/lib/utills";

const Button = ({ variant = "default", className, children }) => {
  const sytles = `px-[13px] py-[10px] rounded-[3px] transition-all border border-transparent ${
    variant === "default" &&
    "bg-primary text-white  font-bold hover:border-primary hover:text-primary hover:bg-transparent"
  } ${
    variant === "secondary" &&
    "text-black hover:bg-primary hover:text-white hover:font-bold"
  }`;

  return <button className={cn(sytles, className)}>{children}</button>;
};

export default Button;
