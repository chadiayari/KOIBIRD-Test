import './Koiski.scss';
import { koiski } from '../../data';

/**
 * Component for the KOISKI images section
 * 
 * @returns section
 */
const Koiski = () => {
  return (
    <section className="koiski">
      {koiski.map((image, index) => {
        return (
          <div key={index} className="gridItem">
            <img src={image} alt="SHOP THE LOOK" />
          </div>
        );
      })}
      <div className="koiski-title">
        <span>#KOISKI</span>
      </div>
    </section>
  );
};

export default Koiski;
