import { cn } from "@/lib/utills";

const Line = ({ className }) => {
  return <div className={cn("w-[170px] h-1 bg-primary", className)} />;
};

export default Line;
