
type SpinnerProps = {
  color?: string;
};

function Spinner({color = "text-white"}: SpinnerProps) {
  return (
    <div className="w-5 h-5">
      <svg
        className={`animate-spin -ml-1 mr-3 h-5 w-5 ${color}`}
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        ></path>
      </svg>
    </div>
  );
}

export default Spinner;
