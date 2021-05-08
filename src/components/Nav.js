import React from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <h1>
            <svg
              width="77"
              height="22"
              viewBox="0 0 77 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.6952 21.24H18.8252V0H13.6952V8.04H5.41516V0H0.285156V21.24H5.41516V12.36H13.6952V21.24ZM39.4403 17.97C39.9003 17.13 40.1303 16.16 40.1303 15.06C40.1303 13.72 39.7203 12.62 38.9003 11.76C38.1003 10.88 37.0603 10.33 35.7803 10.11V10.05C36.8603 9.69 37.7103 9.12 38.3303 8.34C38.9503 7.56 39.2603 6.6 39.2603 5.46C39.2603 4.44 39.0403 3.56 38.6003 2.82C38.1803 2.06 37.6003 1.49 36.8603 1.11C36.1203 0.709999 35.3503 0.429999 34.5503 0.269998C33.7703 0.0899996 32.9303 0 32.0303 0H23.5703V21.24H32.0303C32.036 21.24 32.0417 21.24 32.0474 21.24H76.0952V19.24H38.4665C38.8545 18.8801 39.1791 18.4568 39.4403 17.97ZM31.0403 4.08C33.2203 4.08 34.3103 4.77 34.3103 6.15C34.3103 6.89 34.0403 7.46 33.5003 7.86C32.9803 8.26 32.2403 8.46 31.2803 8.46H28.5203V4.08H31.0403ZM31.3703 12.24C33.7903 12.24 35.0003 13.02 35.0003 14.58C35.0003 16.26 33.8003 17.1 31.4003 17.1H28.5203V12.24H31.3703Z"
                fill="black"
              />
            </svg>
          </h1>
        </div>
        <ul>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Our Classes</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
