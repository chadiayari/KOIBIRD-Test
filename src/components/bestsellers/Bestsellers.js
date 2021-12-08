import './Bestsellers.scss';
import { articles } from '../../data';
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";

/** Component for showing best sellers products' section
 * 
 * @returns section
 */
const Bestsellers = () => {
  const [localProducts, setLocalproducts] = useState(articles);
  const [mountCount, setMountCount] = useState(0);

   /**
   * This function is made to refresh the button once clicked
   * in order for react to render
   * 
   */
  const refresh = () => {
    setMountCount(mountCount + 1);
  };

  /**
   * This function handles click on like button
   * for unliked products
   * 
   * @param {int} index Product's index
   */
  const handleLikeProduct = (index) => {
    const newProducts = localProducts;
    newProducts[index]["liked"] = true;
    setLocalproducts(newProducts);
    refresh();
  };

  /**
   * This function handles click on like button
   * for liked products
   * 
   * @param {int} index Product's index
   */
  const handleUnlikeProduct = (index) => {
    const newProducts = localProducts;
    newProducts[index]["liked"] = false;
    setLocalproducts(newProducts);
    refresh();
  };
  return (
    <>
      <section className="best-sellers">
        <div className="best-sellers-header">
          <div className="best-sellers-line"></div>
          <div className="best-sellers-title">
            <h4>BEST SELLERS</h4>
          </div>
          <div className="best-sellers-line"></div>
        </div>
      </section>
      <section className="best-sellers-slider">
        <div className="slider-container">
          {localProducts.map((article, index) => {
            const { img, title, brand, price, liked } = article;
            return (
              <article key={index} className="slider-product">
                <img className="product-image" src={img} alt={brand} />
                <div className="product-like">
                  {liked ? (
                    <FavoriteIcon
                      onClick={() => handleUnlikeProduct(index)}
                      style={{ fill: "#E0FF04" }}
                      fontSize="small"
                    />
                  ) : (
                    <FavoriteBorderIcon
                      onClick={() => handleLikeProduct(index)}
                      fontSize="small"
                    />
                  )}
                </div>
                <div className="product-info">
                  <h5 className="product-title">{title}</h5>
                  <h5 className="product-brand">{brand}</h5>
                  <h5 className="product-price">{price}</h5>
                  <button className="product-shopnow-btn">
                    <h4 className="shopnow-btn-title">SHOP NOW</h4>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        <button className="slider-btns prev-btn">
          <span className="slider-btn-icon">&lsaquo;</span>
        </button>
        <button className="slider-btns next-btn">
          <span className="slider-btn-icon">&rsaquo;</span>
        </button>
      </section>
    </>
  );
};

export default Bestsellers;
