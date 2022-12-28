import type { ReactNode } from "react";

export const Container = (props: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={props.className}>
      <div className="mx-auto min-h-[100vh] max-w-7xl bg-slate-800 px-6 pt-6 text-gray-200">
        {props.children}
      </div>
    </div>
  );
};
