import { btnProps } from "../../utils/types/Types";
// import classes from './button.module.css'
// import { twMerge } from "tailwind-merge"

const Button = ({ logo, children, onClick, className }: btnProps) => {
  function twMerge(
    arg0: string,
    className: string | undefined
  ): string | undefined {
    throw new Error("Function not implemented.");
  }

  return (
    <button
      onClick={onClick}
      className={twMerge("flex items-center gap-x-2 h-fit", className)}
    >
      <img src={logo} height={16} width={16} />

      <span>{children}</span>
    </button>
  );
};

export default Button;

// display: flex;
//     /* width: 100px; */
//     /* background-color: yellow; */
//     border: none;
//     justify-content: space-between;
//     align-items: center;
//     column-gap:10px ;
//     font-weight: 600;
//     color: #444A5B;
//     background-color: transparent;
