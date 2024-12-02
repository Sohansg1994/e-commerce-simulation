import {ArrowRightIcon} from "@heroicons/react/24/outline";
import Spinner from "./Spinner";


type ButtonProps = {
  title: string;
  className?: string;
  ghost?: boolean;
  long?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  loading?: boolean;
};

function Button({
  title,
  className,
  ghost,
  long,
  onClick,
  type,
  disabled,
  loading,
}: ButtonProps) {
  const ghostClasses = () => {
    return ghost
      ? `bg-transparent text-primary-light `
      : ` bg-primary-light duration-200 text-white`;
  };

  return (
    <>
      <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={`${className} ${ghostClasses()} ${
          disabled && "!bg-light cursor-not-allowed !text-gray !border-light"
        } ${
          long ? "w-full" : "w-auto"
        } px-8 py-4 rounded-2xl  border border-primary group`}
      >
        <div className="flex items-center justify-center group-hover:gap-3">
          {loading && <Spinner />}
          {!loading && (
            <>
              <div>{title}</div>
              {!disabled && (
                <ArrowRightIcon className="w-5 group-hover:ml-0 -ml-5 group-hover:opacity-100 opacity-0 duration-200 stroke-current stroke-2" />
              )}
            </>
          )}
        </div>
      </button>
    </>
  );
}
export default Button;
