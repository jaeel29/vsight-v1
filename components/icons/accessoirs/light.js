function Light() {
  return (
    <svg
      style={{ position: "absolute", top: "0", right: "0", zIndex: "-5" }}
      xmlns="http://www.w3.org/2000/svg"
      width="337"
      height="549"
      fill="none"
      viewBox="0 0 337 549"
    >
      <circle
        cx="339.848"
        cy="208.821"
        r="339.848"
        fill="url(#paint0_radial)"
        opacity="0.3"
      ></circle>
      <defs>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="translate(339.848 208.821) scale(339.848)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDA3FF" stopOpacity="0.45"></stop>
          <stop offset="1" stopColor="#FDA3FF" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
}

export default Light;
