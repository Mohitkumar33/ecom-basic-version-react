import * as React from "react";

const RedHeartIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <defs>
      <filter id="a" y={-0.124} width={1.232} height={1.248} x={-0.116}>
        <feGaussianBlur stdDeviation={2.804} />
      </filter>
    </defs>
    <path
      filter="url(#a)"
      d="M20 6c-4.475 0-8.428 1.727-11.858 5.176-6.566 6.602-6.843 17.075-.837 24.006C7.15 35.12 31.953 60.062 32.016 60l24.68-24.818c6.005-6.931 5.728-17.404-.838-24.006C49.298 4.578 38.893 3.976 32 10c-3.293-2.885-7.906-4-12-4z"
      transform="matrix(.86762 0 0 .88719 4.236 3.797)"
      fillOpacity={0.392}
    />
    <path
      d="M21.241 7.15c-4.013 0-7.556 1.53-10.631 4.586a15.51 15.51 0 0 0-.75 21.273c-.14-.056 22.098 22.046 22.154 21.99L54.14 33.01a15.51 15.51 0 0 0-.75-21.273C47.508 5.889 38.18 5.356 32 10.694c-2.952-2.557-7.088-3.545-10.76-3.545z"
      fill="#d92856"
    />
  </svg>
);

export default RedHeartIcon;
