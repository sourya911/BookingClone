import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./hotel.css";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import { tr } from "date-fns/locale";

const Hotel = () => {
  const [slide,setSlide]=useState(0)
  const [open,setOpen]=useState(false)

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  
  const handleMove=(dir)=>{
    let newSlide;
    if(dir==="r"){
      newSlide = slide === 5 ? 0 : slide +1
    }
    else{
      newSlide = slide === 0 ? 5 : slide -1
    }
    setSlide(newSlide)
  }
  const handleOpen=(i)=>{
    setSlide(i);
    setOpen(true);
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
        <FontAwesomeIcon icon={faCircleXmark} className="close"/>
        <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>{handleMove("l")}}/>
        <div className="sliderWrapper">
          <img src= {photos[slide].src} alt="" />
        </div>
        <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>{handleMove("r")}}/>
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now !</button>
          <div className="hotelTitle">Grand Hotel</div>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>ABC Beach Resort, Baga Beach, Goa</span>
          </div>
          <span className="hotelDistance">
            Excellent Location - 500 meter from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ₹2,743 at this property and get a free airort taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo,i) => (
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)}
                src={photo.src} alt="" className="hotelImg"/>
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from a popular beach in Goa, Beachfront
                Hotel offers air-conditioned rooms with free WiFi. The rooms
                have stylish interiors and come with a fully equipped
                kitchenette, including a microwave. Each room has a flat-screen
                TV and a private bathroom with a shower and hairdryer. A
                refrigerator, electric kettle, and coffee machine are also
                provided. The hotel is conveniently located near popular tourist
                attractions such as the local market, famous beach shacks, and
                historical sites. The nearest airport is Goa International
                Airport, approximately 20 km from Beachfront Hotel, and the
                hotel offers a paid airport shuttle service for guests'
                convenience.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 4-night stay!</h1>
              <span>
                Located in the prime location of Goa, this property boasts an
                exceptional location score of 9.8!
              </span>
              <h2>
                <b> ₹2,743</b>(4 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Hotel;
