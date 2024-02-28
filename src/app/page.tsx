import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <>
      <div className={css({ fontSize: "2xl", fontWeight: "light" })}>
        Hello 🐼!
      </div>

      <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
        <p>hello</p>
        <p>hello</p>
      </div>
    </>
  );
}