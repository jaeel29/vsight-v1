const properties = {
  sun: {
    r: 9,
    transform: "rotate(40deg)",
    cx: 12,
    cy: 4,
    opacity: 0,
  },
  moon: {
    r: 5,
    transform: "rotate(90deg)",
    cx: 30,
    cy: 0,
    opacity: 1,
  },
};

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="feather feather-sun"
      viewBox="0 0 24 24"
      style={{ transform: "rotate(40deg)", cursor: "pointer" }}
    >
      <mask id="mask">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <circle cx="12" cy="4" r="9" fill="black" />
      </mask>
      <circle fill="black" cx="12" cy="12" r="5" mask="url(#mask)"></circle>
      <g stroke="currentColor">
        <path d="M12 1L12 3"></path>
        <path d="M12 21L12 23"></path>
        <path d="M4.22 4.22L5.64 5.64"></path>
        <path d="M18.36 18.36L19.78 19.78"></path>
        <path d="M1 12L3 12"></path>
        <path d="M21 12L23 12"></path>
        <path d="M4.22 19.78L5.64 18.36"></path>
        <path d="M18.36 5.64L19.78 4.22"></path>
      </g>
    </svg>
  );
}

export default SunIcon;
