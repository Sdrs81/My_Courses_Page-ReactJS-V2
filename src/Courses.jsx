import { useState } from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"

function Courses({ courses, removeCourse }) {
  const [index, setIndex] = useState(0);
  const {content, title, price } = courses[index]; // Javascript feature 
  
  const checkIndex = (index) =>{
    if(index < 0){
        return courses.length - 1;
    }
    if(index > courses.length - 1){
        return 0;
    }
    return index;
  }  

  const prevCourse = () => {
    setIndex((index) => {
        let newIndex = index - 1;
        return checkIndex(newIndex);
    })
  }

  const nextCourse = () => {
    setIndex((index) => {
        let newIndex = index + 1;
        return checkIndex(newIndex);
    })
  }

  return (
    <div className="courseMainDiv">
      <div>
        <h2>Kurslarım</h2>
      </div>
      <div className="cardDiv">
        <button className="prevNext" onClick={prevCourse}>
            <FaChevronLeft/>
        </button>
        <div className="card">
          <div className="cardTitlePrice">
            <h2 className="cardTitle">{title}</h2>
            <h4 className="cardPrice">{price}TL</h4>
          </div>
          <p>{content}</p>
        </div>
        <button className="prevNext" onClick={nextCourse}>
            <FaChevronRight/>
        </button>
      </div>
    </div>
  );
}

export default Courses;
