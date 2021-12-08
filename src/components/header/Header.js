import "./Header.scss";
import { FavoriteBorder, SearchRounded } from "@material-ui/icons";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

/**
 * Component for the header section
 * @returns div
 */
const Header = () => {
  const shopbybrandDropdownItems = ["ANNAKIKI" ,"ANNE WEST", "BACON CLOTHING", "BLACK CROWS", "BLANCHA", "CANCELLATO", "CORDOVA", 
    "FUSALP", "I LOVE MR MITTENS", "IENKI IENKI"];
  const shopbybrandDropdownItemsSecond = ["LE KILT", "LINGUA FRANCA", "MORPHO AND LUNA", "NASTAHA ZINKO",
    "PERFECT MOMENT", "SPENCER VLADIMIR", "STAND", "WILD AND WOOLLY", "WOOLY BOOLY", "BLACK CROWS"];

  /**
   * this function makes the navigation bar fixed
   * while scrolling to the bottom
   */
  function fixedNavigation() {
    const nav = document.querySelector("#header-navbar");
    const image = document.getElementById("mainImage");
    let navTop = nav.offsetTop;
    if (window.scrollY >= navTop && window.scrollY > 80) {
      nav.classList.add("fixed");
      image.style.marginTop = "5rem";
    } else {
      nav.classList.remove("fixed");
      image.style.marginTop = "0rem";
    }
  }
  window.addEventListener("scroll", fixedNavigation);

  return (
    <div id="container">
      <header id="header">
        <div className="header-wrapper">
          <div className="header-searchbar">
            <form action="#" id="header-form">
              <SearchRounded className="header-search-icon" />
              <input id="search-input" type="text" />
            </form>
          </div>
          <div className="mainLogo">
            <img
              src="/assets/logo.png"
              className="logoImage"
              alt="Logo goes here"
            />
          </div>
          <div className="header-accounts">
            <div className="register-account">
              <span>Register | My Account </span>
            </div>
            <div className="headerIcons">
              <FavoriteBorder fontSize="small" />
              <ShoppingBagOutlinedIcon fontSize="small" />
            </div>
          </div>
        </div>
      </header>
      <nav id="header-navbar">
        <div className="navbar-fixed-wrapper">
          <img
            src="/assets/logo.png"
            className="logoImage-fixed"
            alt="KOIBIRD"
          />
          <a href="#">SHOP BY CATEGORY</a>
          <a href="#" className="second">
            SHOP BY BRAND
            <div class="openNav dropdown-content">
              <ul>
                <div className="dropdownRow">
                  <div className="dropdownRow1">
                    {shopbybrandDropdownItems.map((item) => (
                      <li>
                        <a href="#">{item}</a>
                      </li>
                    ))}
                  </div>
                  <div className="dropdownRow2">
                    {shopbybrandDropdownItemsSecond.map((item) => (
                      <li>
                        <a href="#">{item}</a>
                      </li>
                    ))}
                  </div>
                </div>
              </ul>
            </div>
          </a>

          <a className="link-btn" href="#">
            SHOP BY COLLECTION
          </a>
          <a className="link-btn" href="#">
            ABOUT KOIBIRD
          </a>
          <a className="link-btn" href="#">
            POP-UP SHOP
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
