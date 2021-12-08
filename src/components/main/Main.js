import "./Main.scss";

/**
 * Component for the first hero section in the page
 * 
 * @returns main
 */
const Main = () => {
  return (
    <main>
      <div className="main-img">
        <img id="mainImage" src="/assets/main.png" alt="KOIBIRD" />
        <div className="brand-logo-container">
          <img
            alt="brand-logo"
            src="/assets/BANNER LOGO.png"
            className="brand-logo"
          />
          <div>
            <span>BEAUTY AND THE PISTE</span>
            <svg
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0L21 12L0 24V0Z" fill="#E0FF04" />
            </svg>
          </div>
        </div>
      </div>

      <div className="main-title">
        <h4>WHAT WE ARE SHOPPING NOW</h4>
      </div>
    </main>
  );
};

export default Main;
