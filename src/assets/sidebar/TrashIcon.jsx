import React from "react";

function TrashIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="20"
      fill="none"
      viewBox="0 0 18 20"
    >
      <path
        className="group-hover:fill-danger-main group-hover:stroke-danger-main"
        fill="#333"
        stroke="#333"
        d="M12.5 4v.5H17a.5.5 0 010 1h-1.5V17a2.5 2.5 0 01-2.5 2.5H5A2.5 2.5 0 012.5 17V5.5H1a.5.5 0 010-1h4.5V3A2.5 2.5 0 018 .5h2A2.5 2.5 0 0112.5 3v1zm-1.5.5h.5V3A1.5 1.5 0 0010 1.5H8A1.5 1.5 0 006.5 3v1.5H11zm-7 1h-.5V17A1.5 1.5 0 005 18.5h8a1.5 1.5 0 001.5-1.5V5.5H4zm3.354 9.854A.5.5 0 016.5 15V9a.5.5 0 011 0v6a.5.5 0 01-.146.354zm4 0A.5.5 0 0110.5 15V9a.5.5 0 011 0v6a.5.5 0 01-.146.354z"
      ></path>
    </svg>
  );
}

export default TrashIcon;
