import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/ico";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
      >
        <rect width="64" height="64" rx="2.5" fill="#008A19" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M55.25 19L31.875 6L8.5 19V45L31.875 58L55.25 45V19ZM32.7429 10.5341C32.1436 10.197 31.4118 10.197 30.8125 10.5341L13.257 20.4091C12.6371 20.7578 12.2534 21.4137 12.2534 22.125V41.875C12.2534 42.5862 12.6371 43.2422 13.257 43.5909L30.8125 53.4659C30.8292 53.4753 30.846 53.4844 30.8629 53.4933C31.1077 53.6218 31.373 53.6954 31.6412 53.714C31.6866 53.7171 31.7322 53.7187 31.7777 53.7187L31.7786 53.7187C32.1487 53.7187 32.4949 53.6166 32.7906 53.439L50.2984 43.5909C50.9184 43.2422 51.302 42.5862 51.302 41.875V22.1927C51.3143 21.8435 51.2339 21.4866 51.05 21.1598C50.8575 20.8175 50.5779 20.555 50.2547 20.3845L41.5612 15.4944C41.5358 15.4793 41.5101 15.4649 41.4841 15.451L32.7429 10.5341ZM47.3645 40.7236L33.7473 48.3832V33.1514L47.3645 25.4918V40.7236ZM45.318 22.1252L31.7781 29.7414L27.0159 27.0626L40.5557 19.4465L45.318 22.1252ZM22.0482 28.786L22.0186 28.7694L16.1909 25.4913V40.7236L29.8098 48.3842V33.1519L22.0482 28.786ZM36.54 17.1876L23.0002 24.8038L18.2379 22.125L31.7777 14.5088L36.54 17.1876Z"
          fill="white"
        />
      </svg>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    },
  );
}
