import './Categories.scss';
import { categories } from '../../data';

/**
 * Component for showing products' categories
 * (OUTERWEAR, SKIS, etc..)
 * 
 * @returns div
 */
const Categories = () => {
  return (
    <div className="categories">
      {categories.map((category, index) => {
        const { title, img } = category;
        return (
          <div key={index} className="gridItem">
            <img src={img} alt={title} />
            <div className="grid-text">
              <h2 className="grid-text-title">{title}</h2>
              <h4 className="gridTextBtn">SHOP NOW &rsaquo;</h4>
            </div>
            <div className="overlay"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
