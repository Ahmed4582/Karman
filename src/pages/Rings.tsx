import {   Button, Card} from "react-bootstrap";
import img2 from "../assets/RingsSvg/img2.svg"
import img1 from "../assets/RingsSvg/img1.svg"
import img3 from "../assets/RingsSvg/img3.svg"
import img4 from "../assets/RingsSvg/img4.svg"
import img5 from "../assets/RingsSvg/img5.svg"
import img6 from "../assets/RingsSvg/img6.svg"
import img7 from "../assets/RingsSvg/img7.svg"
import img8 from "../assets/RingsSvg/img8.svg"
import img9 from "../assets/RingsSvg/img9.svg"
import img10 from "../assets/RingsSvg/img10.svg"
import img11 from "../assets/RingsSvg/img11.svg"
import img12 from "../assets/RingsSvg/img12.svg"
import img13 from "../assets/RingsSvg/img13.svg"
import img14 from "../assets/RingsSvg/img14.svg"
import img15 from "../assets/RingsSvg/img15.svg"

import star from "../assets/svg/star.svg"



const products = [
  { name: "Gold Rings", price: "1000", image: img1 },
  { name: "Gold Rings", price: "5000", image: img9 },
  { name: "Heart Necklaces", price: "7000", image: img2 },
  { name: "small Hoop Earrings ", price: "5000", image: img3 },
  { name: "Silver watch", price: "1000", image: img4 },
  { name: "Gold Braceletes", price: "7000", image: img5 },
  { name: "Gold Rings", price: "5000", image: img6 },
  { name: "Gold Rings", price: "1000", image: img7 },
  { name: "Gucci watch", price: "7000", image: img8 },
  { name: "Gold Rings", price: "1000", image: img10 },
  { name: "Silver Braceletes", price: "7000", image: img11 },
  { name: "Gold watch", price: "5000", image: img12 },
  { name: "Silver Rings", price: "1000", image: img13 },
  { name: "Silver Rings", price: "7000", image: img3 },
  { name: "Silver Braceletes", price: "5000", image: img7 },
  { name: "Silver Rings", price: "1000", image: img14 },
   { name: "Gold Braceletes", price: "7000", image: img15 },
];


const Rings = () => {
  return (
    <div>
      <h1 className="fw-bold mb-5">Rings</h1>
      <div className="row  d-flex justify-content-center g-3">
          {products.map((p) => (
            <div className="  mb-5 mt-2  col-lg-4 col-sm-6 ">
                  <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={p.image} />
            <Card.Body>
              <Card.Title>
                <h4>{p.name}</h4>
                <h5>{p.price}</h5>
                <div className="d-flex align-items-center gap-2">
                  <img src={star} alt="" />
                </div>
                </Card.Title>
            <Button style={{color:"black" }} variant="outline-warning">Add To Card</Button>
            </Card.Body>
      </Card>
       </div>
        ))}
      </div>
     <div className="d-flex justify-content-center mb-5">
        <Button className="px-5 py-2 rounded-5 text-white" variant="secondary">Load 60 More</Button>
       </div>
    </div>
  );
};

export default Rings;