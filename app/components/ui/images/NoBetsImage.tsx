import { useTheme } from "next-themes";

export const NoBetsImage = ({ ...props }) => {
  const { resolvedTheme } = useTheme();

  return resolvedTheme === "light" ? (
    <BetsImageLight {...props} />
  ) : (
    <BetsImageDark {...props} />
  );
};

const BetsImageLight = ({ ...props }) => (
  <svg
    width="184"
    height="112"
    viewBox="0 0 184 112"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 50.8C0 46.3003 0 44.0505 1.1459 42.4733C1.51598 41.9639 1.96392 41.516 2.47329 41.1459C4.05048 40 6.30032 40 10.8 40H45.2C49.6997 40 51.9495 40 53.5267 41.1459C54.0361 41.516 54.484 41.9639 54.8541 42.4733C56 44.0505 56 46.3003 56 50.8V61.2C56 65.6997 56 67.9495 54.8541 69.5267C54.484 70.0361 54.0361 70.484 53.5267 70.8541C51.9495 72 49.6997 72 45.2 72H10.8C6.30032 72 4.05048 72 2.47329 70.8541C1.96392 70.484 1.51598 70.0361 1.1459 69.5267C0 67.9495 0 65.6997 0 61.2V50.8Z"
      fill="#F3F3F4"
    />
    <path
      d="M0 10.8C0 6.30032 0 4.05048 1.1459 2.47329C1.51598 1.96392 1.96392 1.51598 2.47329 1.1459C4.05048 0 6.30032 0 10.8 0H45.2C49.6997 0 51.9495 0 53.5267 1.1459C54.0361 1.51598 54.484 1.96392 54.8541 2.47329C56 4.05048 56 6.30032 56 10.8V21.2C56 25.6997 56 27.9495 54.8541 29.5267C54.484 30.0361 54.0361 30.484 53.5267 30.8541C51.9495 32 49.6997 32 45.2 32H10.8C6.30032 32 4.05048 32 2.47329 30.8541C1.96392 30.484 1.51598 30.0361 1.1459 29.5267C0 27.9495 0 25.6997 0 21.2V10.8Z"
      fill="#F8F8F8"
    />
    <rect
      x="64"
      y="40"
      width="56"
      height="32"
      rx="6"
      fill="url(#paint0_linear_6631_6392)"
    />
    <circle cx="119" cy="41" r="6" fill="url(#paint1_linear_6631_6392)" />
    <path
      d="M64.5 10.8C64.5 8.53902 64.5007 6.88345 64.6403 5.59457C64.779 4.31504 65.0497 3.45634 65.5504 2.76718C65.8896 2.30026 66.3003 1.88964 66.7672 1.55041C67.4563 1.0497 68.315 0.778956 69.5946 0.640328C70.8835 0.500686 72.539 0.5 74.8 0.5H109.2C111.461 0.5 113.117 0.500686 114.405 0.640328C115.685 0.778956 116.544 1.0497 117.233 1.55041C117.7 1.88964 118.11 2.30026 118.45 2.76718C118.95 3.45634 119.221 4.31504 119.36 5.59457C119.499 6.88345 119.5 8.53902 119.5 10.8V21.2C119.5 23.461 119.499 25.1165 119.36 26.4054C119.221 27.685 118.95 28.5437 118.45 29.2328C118.11 29.6997 117.7 30.1104 117.233 30.4496C116.544 30.9503 115.685 31.221 114.405 31.3597C113.117 31.4993 111.461 31.5 109.2 31.5H74.8C72.539 31.5 70.8835 31.4993 69.5946 31.3597C68.315 31.221 67.4563 30.9503 66.7672 30.4496C66.3003 30.1104 65.8896 29.6997 65.5504 29.2328C65.0497 28.5437 64.779 27.685 64.6403 26.4054C64.5007 25.1165 64.5 23.461 64.5 21.2V10.8Z"
      fill="#F8F8F8"
    />
    <path
      d="M64.5 10.8C64.5 8.53902 64.5007 6.88345 64.6403 5.59457C64.779 4.31504 65.0497 3.45634 65.5504 2.76718C65.8896 2.30026 66.3003 1.88964 66.7672 1.55041C67.4563 1.0497 68.315 0.778956 69.5946 0.640328C70.8835 0.500686 72.539 0.5 74.8 0.5H109.2C111.461 0.5 113.117 0.500686 114.405 0.640328C115.685 0.778956 116.544 1.0497 117.233 1.55041C117.7 1.88964 118.11 2.30026 118.45 2.76718C118.95 3.45634 119.221 4.31504 119.36 5.59457C119.499 6.88345 119.5 8.53902 119.5 10.8V21.2C119.5 23.461 119.499 25.1165 119.36 26.4054C119.221 27.685 118.95 28.5437 118.45 29.2328C118.11 29.6997 117.7 30.1104 117.233 30.4496C116.544 30.9503 115.685 31.221 114.405 31.3597C113.117 31.4993 111.461 31.5 109.2 31.5H74.8C72.539 31.5 70.8835 31.4993 69.5946 31.3597C68.315 31.221 67.4563 30.9503 66.7672 30.4496C66.3003 30.1104 65.8896 29.6997 65.5504 29.2328C65.0497 28.5437 64.779 27.685 64.6403 26.4054C64.5007 25.1165 64.5 23.461 64.5 21.2V10.8Z"
      stroke="#F3F3F4"
    />
    <path
      d="M128 50.8C128 46.3003 128 44.0505 129.146 42.4733C129.516 41.9639 129.964 41.516 130.473 41.1459C132.05 40 134.3 40 138.8 40H173.2C177.7 40 179.95 40 181.527 41.1459C182.036 41.516 182.484 41.9639 182.854 42.4733C184 44.0505 184 46.3003 184 50.8V61.2C184 65.6997 184 67.9495 182.854 69.5267C182.484 70.0361 182.036 70.484 181.527 70.8541C179.95 72 177.7 72 173.2 72H138.8C134.3 72 132.05 72 130.473 70.8541C129.964 70.484 129.516 70.0361 129.146 69.5267C128 67.9495 128 65.6997 128 61.2V50.8Z"
      fill="#F3F3F4"
    />
    <path
      d="M0 90.8C0 86.3003 0 84.0505 1.1459 82.4733C1.51598 81.9639 1.96392 81.516 2.47329 81.1459C4.05048 80 6.30032 80 10.8 80H45.2C49.6997 80 51.9495 80 53.5267 81.1459C54.0361 81.516 54.484 81.9639 54.8541 82.4733C56 84.0505 56 86.3003 56 90.8V101.2C56 105.7 56 107.95 54.8541 109.527C54.484 110.036 54.0361 110.484 53.5267 110.854C51.9495 112 49.6997 112 45.2 112H10.8C6.30032 112 4.05048 112 2.47329 110.854C1.96392 110.484 1.51598 110.036 1.1459 109.527C0 107.95 0 105.7 0 101.2V90.8Z"
      fill="#F8F8F8"
    />
    <path
      d="M64 90.8C64 86.3003 64 84.0505 65.1459 82.4733C65.516 81.9639 65.9639 81.516 66.4733 81.1459C68.0505 80 70.3003 80 74.8 80H109.2C113.7 80 115.95 80 117.527 81.1459C118.036 81.516 118.484 81.9639 118.854 82.4733C120 84.0505 120 86.3003 120 90.8V101.2C120 105.7 120 107.95 118.854 109.527C118.484 110.036 118.036 110.484 117.527 110.854C115.95 112 113.7 112 109.2 112H74.8C70.3003 112 68.0505 112 66.4733 110.854C65.9639 110.484 65.516 110.036 65.1459 109.527C64 107.95 64 105.7 64 101.2V90.8Z"
      fill="#F8F8F8"
    />
    <path
      d="M128 90.8C128 86.3003 128 84.0505 129.146 82.4733C129.516 81.9639 129.964 81.516 130.473 81.1459C132.05 80 134.3 80 138.8 80H173.2C177.7 80 179.95 80 181.527 81.1459C182.036 81.516 182.484 81.9639 182.854 82.4733C184 84.0505 184 86.3003 184 90.8V101.2C184 105.7 184 107.95 182.854 109.527C182.484 110.036 182.036 110.484 181.527 110.854C179.95 112 177.7 112 173.2 112H138.8C134.3 112 132.05 112 130.473 110.854C129.964 110.484 129.516 110.036 129.146 109.527C128 107.95 128 105.7 128 101.2V90.8Z"
      fill="#F8F8F8"
    />
    <path
      d="M128 10.8C128 6.30032 128 4.05048 129.146 2.47329C129.516 1.96392 129.964 1.51598 130.473 1.1459C132.05 0 134.3 0 138.8 0H173.2C177.7 0 179.95 0 181.527 1.1459C182.036 1.51598 182.484 1.96392 182.854 2.47329C184 4.05048 184 6.30032 184 10.8V21.2C184 25.6997 184 27.9495 182.854 29.5267C182.484 30.0361 182.036 30.484 181.527 30.8541C179.95 32 177.7 32 173.2 32H138.8C134.3 32 132.05 32 130.473 30.8541C129.964 30.484 129.516 30.0361 129.146 29.5267C128 27.9495 128 25.6997 128 21.2V10.8Z"
      fill="#F8F8F8"
    />
    <defs>
      <linearGradient
        id="paint0_linear_6631_6392"
        x1="92"
        y1="40"
        x2="92"
        y2="72"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#7755FF" />
        <stop offset="1" stop-color="#F4F3FF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_6631_6392"
        x1="119"
        y1="35"
        x2="119"
        y2="47"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#BDB5FD" />
        <stop offset="1" stop-color="#907EF9" />
      </linearGradient>
    </defs>
  </svg>
);

const BetsImageDark = ({ ...props }) => (
  <svg
    width="184"
    height="112"
    viewBox="0 0 184 112"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 50.8C0 46.3003 0 44.0505 1.1459 42.4733C1.51598 41.9639 1.96392 41.516 2.47329 41.1459C4.05048 40 6.30032 40 10.8 40H45.2C49.6997 40 51.9495 40 53.5267 41.1459C54.0361 41.516 54.484 41.9639 54.8541 42.4733C56 44.0505 56 46.3003 56 50.8V61.2C56 65.6997 56 67.9495 54.8541 69.5267C54.484 70.0361 54.0361 70.484 53.5267 70.8541C51.9495 72 49.6997 72 45.2 72H10.8C6.30032 72 4.05048 72 2.47329 70.8541C1.96392 70.484 1.51598 70.0361 1.1459 69.5267C0 67.9495 0 65.6997 0 61.2V50.8Z"
      fill="#1F1F1F"
    />
    <path
      d="M0 10.8C0 6.30032 0 4.05048 1.1459 2.47329C1.51598 1.96392 1.96392 1.51598 2.47329 1.1459C4.05048 0 6.30032 0 10.8 0H45.2C49.6997 0 51.9495 0 53.5267 1.1459C54.0361 1.51598 54.484 1.96392 54.8541 2.47329C56 4.05048 56 6.30032 56 10.8V21.2C56 25.6997 56 27.9495 54.8541 29.5267C54.484 30.0361 54.0361 30.484 53.5267 30.8541C51.9495 32 49.6997 32 45.2 32H10.8C6.30032 32 4.05048 32 2.47329 30.8541C1.96392 30.484 1.51598 30.0361 1.1459 29.5267C0 27.9495 0 25.6997 0 21.2V10.8Z"
      fill="#131313"
    />
    <rect
      x="64"
      y="40"
      width="56"
      height="32"
      rx="6"
      fill="url(#paint0_linear_6631_6295)"
    />
    <g filter="url(#filter0_df_6631_6295)">
      <circle cx="119" cy="41" r="6" fill="url(#paint1_linear_6631_6295)" />
    </g>
    <circle cx="119" cy="41" r="6" fill="url(#paint2_linear_6631_6295)" />
    <path
      d="M64 10.8C64 6.30032 64 4.05048 65.1459 2.47329C65.516 1.96392 65.9639 1.51598 66.4733 1.1459C68.0505 0 70.3003 0 74.8 0H109.2C113.7 0 115.95 0 117.527 1.1459C118.036 1.51598 118.484 1.96392 118.854 2.47329C120 4.05048 120 6.30032 120 10.8V21.2C120 25.6997 120 27.9495 118.854 29.5267C118.484 30.0361 118.036 30.484 117.527 30.8541C115.95 32 113.7 32 109.2 32H74.8C70.3003 32 68.0505 32 66.4733 30.8541C65.9639 30.484 65.516 30.0361 65.1459 29.5267C64 27.9495 64 25.6997 64 21.2V10.8Z"
      fill="#131313"
    />
    <path
      d="M128 50.8C128 46.3003 128 44.0505 129.146 42.4733C129.516 41.9639 129.964 41.516 130.473 41.1459C132.05 40 134.3 40 138.8 40H173.2C177.7 40 179.95 40 181.527 41.1459C182.036 41.516 182.484 41.9639 182.854 42.4733C184 44.0505 184 46.3003 184 50.8V61.2C184 65.6997 184 67.9495 182.854 69.5267C182.484 70.0361 182.036 70.484 181.527 70.8541C179.95 72 177.7 72 173.2 72H138.8C134.3 72 132.05 72 130.473 70.8541C129.964 70.484 129.516 70.0361 129.146 69.5267C128 67.9495 128 65.6997 128 61.2V50.8Z"
      fill="#1F1F1F"
    />
    <path
      d="M0 90.8C0 86.3003 0 84.0505 1.1459 82.4733C1.51598 81.9639 1.96392 81.516 2.47329 81.1459C4.05048 80 6.30032 80 10.8 80H45.2C49.6997 80 51.9495 80 53.5267 81.1459C54.0361 81.516 54.484 81.9639 54.8541 82.4733C56 84.0505 56 86.3003 56 90.8V101.2C56 105.7 56 107.95 54.8541 109.527C54.484 110.036 54.0361 110.484 53.5267 110.854C51.9495 112 49.6997 112 45.2 112H10.8C6.30032 112 4.05048 112 2.47329 110.854C1.96392 110.484 1.51598 110.036 1.1459 109.527C0 107.95 0 105.7 0 101.2V90.8Z"
      fill="#131313"
    />
    <path
      d="M64 90.8C64 86.3003 64 84.0505 65.1459 82.4733C65.516 81.9639 65.9639 81.516 66.4733 81.1459C68.0505 80 70.3003 80 74.8 80H109.2C113.7 80 115.95 80 117.527 81.1459C118.036 81.516 118.484 81.9639 118.854 82.4733C120 84.0505 120 86.3003 120 90.8V101.2C120 105.7 120 107.95 118.854 109.527C118.484 110.036 118.036 110.484 117.527 110.854C115.95 112 113.7 112 109.2 112H74.8C70.3003 112 68.0505 112 66.4733 110.854C65.9639 110.484 65.516 110.036 65.1459 109.527C64 107.95 64 105.7 64 101.2V90.8Z"
      fill="#131313"
    />
    <path
      d="M128 90.8C128 86.3003 128 84.0505 129.146 82.4733C129.516 81.9639 129.964 81.516 130.473 81.1459C132.05 80 134.3 80 138.8 80H173.2C177.7 80 179.95 80 181.527 81.1459C182.036 81.516 182.484 81.9639 182.854 82.4733C184 84.0505 184 86.3003 184 90.8V101.2C184 105.7 184 107.95 182.854 109.527C182.484 110.036 182.036 110.484 181.527 110.854C179.95 112 177.7 112 173.2 112H138.8C134.3 112 132.05 112 130.473 110.854C129.964 110.484 129.516 110.036 129.146 109.527C128 107.95 128 105.7 128 101.2V90.8Z"
      fill="#131313"
    />
    <path
      d="M128 10.8C128 6.30032 128 4.05048 129.146 2.47329C129.516 1.96392 129.964 1.51598 130.473 1.1459C132.05 0 134.3 0 138.8 0H173.2C177.7 0 179.95 0 181.527 1.1459C182.036 1.51598 182.484 1.96392 182.854 2.47329C184 4.05048 184 6.30032 184 10.8V21.2C184 25.6997 184 27.9495 182.854 29.5267C182.484 30.0361 182.036 30.484 181.527 30.8541C179.95 32 177.7 32 173.2 32H138.8C134.3 32 132.05 32 130.473 30.8541C129.964 30.484 129.516 30.0361 129.146 29.5267C128 27.9495 128 25.6997 128 21.2V10.8Z"
      fill="#131313"
    />
    <defs>
      <filter
        id="filter0_df_6631_6295"
        x="105"
        y="27"
        width="28"
        height="28"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_6631_6295"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_6631_6295"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="4"
          result="effect2_foregroundBlur_6631_6295"
        />
      </filter>
      <linearGradient
        id="paint0_linear_6631_6295"
        x1="92"
        y1="40"
        x2="92"
        y2="72"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#7755FF" />
        <stop offset="1" stop-color="#251255" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_6631_6295"
        x1="119"
        y1="35"
        x2="119"
        y2="47"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#7755FF" />
        <stop offset="1" stop-color="#897AFF" />
        <stop offset="1" stop-color="#907EF9" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_6631_6295"
        x1="119"
        y1="35"
        x2="119"
        y2="47"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#BDB5FD" />
        <stop offset="1" stop-color="#907EF9" />
      </linearGradient>
    </defs>
  </svg>
);
