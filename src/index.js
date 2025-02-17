import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


 
const courses = [
  {
    id: 1,
    title: "Event Planning Mastery",
    description: "Master the skills required for successful event planning.",
    image: "https://placehold.co/300",
    price: "$49.99",
  },
  {
    id: 2,
    title: "Effective Tourism Guiding",
    description: "Learn essential skills for becoming an effective tour guide",
    image: "https://placehold.co/300",
    price: "$39.99",
  },
  {
    id: 3,
    title: "Advanced Hotel Management",
    description: "Become a full-stack developer with React and Node.js.",
    image: "https://placehold.co/300",
    price: "$59.99",
  },
];

const CourseCard = ({ course }) => {
  return (
      <div className="course-card">
          <img src={course.image} alt={course.title} className="course-image" />
          <div className="course-info">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <p className="course-price">${course.price}</p>
              <a href={course.link} className="course-btn">Enroll Now</a>
          </div>
      </div>
  );
};

const CourseList = () => {
  return (

    <div className="course-container">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
