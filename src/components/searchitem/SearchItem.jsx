import Hotel from "../../pages/hotel/Hotel";
import "./searchItem.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchItem = () => {
  const [isClicked,setIsCLicked]=useState(false);

  const handleClick = () => {
    setIsCLicked(true);
  };
  return (
    <>
      {/* 1 */}
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Tower Street Apartments</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Entire studio • 1 bathroom • 21m² 1 full bed
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">₹ 2,743</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            
              
              <button className="siCheckButton" onClick={handleClick}>See availability</button>
              {isClicked && <Hotel/>}
           
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/327848166.jpg?k=617500498c90084f795e149eddee5cd5a7949179c1164c9dc1be8483f3f9a3b6&o=&hp=1"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Ronnie's Studio ApartmentOpens</h1>
          <span className="siDistance">1.5km from saligo</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">Apartment with Balcony</span>
          <span className="siFeatures">
            Entire apartment • 1 bedroom • 1 living room • 1 bathroom • 1
            kitchen • 56m² 2 beds (1 double, 1 sofa bed)
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>very good</span>
            <button>8.4</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">₹ 5,530</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/327278123.jpg?k=2bd75c68dc7a9ffd7bf56356c6074824da2c269f3c1897d64ae4b4ccd1243a1b&o=&hp=1"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Alvorada Resort</h1>
          <span className="siDistance">1.5 km from beach</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">Double or Twin Room with Balcony</span>
          <span className="siFeatures">1 extra-large double bed</span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>good</span>
            <button>7.6</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">₹ 6,353</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/327846118.jpg?k=6c683ac2304fdef7f02d4f5515163331377c48bda6f0f2b5989a67a9c9263095&o=&hp=1"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Tower Street Apartments</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Entire studio • 1 bathroom • 21m² 1 full bed
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">₹ 3,321</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
          </div>
        </div>
      </div>
      {/* 5 */}
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/420196551.webp?k=9c7dfe0ad0a0d766b2fcc783490574356e7072952f86acd1d109290d7ee92db8&o="
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Hotel Casa De Patio</h1>
          <span className="siDistance">2.5km from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Double or Twin Room with Balcony 1 king bed
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.7</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">₹ 1,308</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
          </div>
        </div>
      </div>

      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/227222651.webp?k=8bfb6658c0dc4e0e1de2065d3982296f8ff3483b351672d059a5a9dc9e4b5a38&o="
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Zulu Land cottages</h1>
          <span className="siDistance">1.57km from beach</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">Cottage with Garden View</span>
          <span className="siFeatures">
            Entire bungalow • 1 bedroom • 1 bathroom • 33m² 1 queen bed
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.0</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">₹ 3,653</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
          </div>
        </div>
      </div>

      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/332085032.webp?k=b9b627303b62da9730634dd7af0fd1c6475e392b39d9d7380c0b0f98aad669ed&o="
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Sea Queen Beach Resort & Spa</h1>
          <span className="siDistance">5km from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">Garden View King Room</span>
          <span className="siFeatures">1 King bed</span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">₹ 2,533</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
          </div>
        </div>
      </div>

      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/285246897.webp?k=760d6ffcbc816ef6534f9f4993078b3e0fdbe57120ee64158656fa9ef71e3086&o="
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Marbella Guest HouseOpens in new window</h1>
          <span className="siDistance">3.4 from vasco</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Deluxe Pool Facing Rooms with 15% discount on Food and Beverages
          </span>
          <span className="siFeatures">2 beds (1 full, 1 sofa bed)</span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>very good</span>
            <button>8.6</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">₹ 4,533</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchItem;
