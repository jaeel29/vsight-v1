function ToTopArrow({ onClick }) {
  return (
    <svg
      style={{ cursor: "pointer" }}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      fill="none"
      viewBox="0 0 42 42"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.155"
        d="M30.008 1.753H11.99c-6.277 0-10.216 4.446-10.216 10.737v16.978c0 6.291 3.918 10.737 10.216 10.737h18.018c6.298 0 10.218-4.446 10.218-10.737V12.49c0-6.291-3.92-10.737-10.218-10.737z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.155"
        d="M21 12.486v16.986M13.21 20.31L21 12.486l7.79 7.824"
      ></path>
    </svg>
  );
}

export default ToTopArrow;
