import React from 'react';
import CourseCard from './CourseCard';
import { useState } from 'react';



const courses = [
  {
    id: 1,
    title: 'Introduction to React',
    description: 'Learn the fundamentals of React.js',
  },
  {
    id: 2,
    title: 'JavaScript for Beginners',
    description: 'A beginner-friendly guide to JavaScript programming',
  },
  {
    id: 3,
    title: 'Advanced CSS Techniques',
    description: 'Master advanced CSS concepts and techniques',
  },
  {
    id: 1,
    title: 'Introduction to React',
    description: 'Learn the fundamentals of React.js',
  },
  {
    id: 2,
    title: 'JavaScript for Beginners',
    description: 'A beginner-friendly guide to JavaScript programming',
  },
  {
    id: 3,
    title: 'Advanced CSS Techniques',
    description: 'Master advanced CSS concepts and techniques',
  },
  {
    id: 1,
    title: 'Introduction to React',
    description: 'Learn the fundamentals of React.js',
  },
  {
    id: 2,
    title: 'JavaScript for Beginners',
    description: 'A beginner-friendly guide to JavaScript programming',
  },
  {
    id: 3,
    title: 'Advanced CSS Techniques',
    description: 'Master advanced CSS concepts and techniques',
  },
  {
    id: 1,
    title: 'Introduction to React',
    description: 'Learn the fundamentals of React.js',
  },
  {
    id: 2,
    title: 'JavaScript for Beginners',
    description: 'A beginner-friendly guide to JavaScript programming',
  },
  {
    id: 3,
    title: 'Advanced CSS Techniques',
    description: 'Master advanced CSS concepts and techniques',
  },
  // Add more courses as needed
];

const CoursesPage = () => {

  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
    
    <div>
      <h1 className='text-[25px] font-extrabold text-center m-5 uppercase'>Courses</h1>

    </div>
    <div className="flex flex-wrap justify-center max-h-screen overflow-y-scroll pb-[300px] ">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
    </>
  );
};


const TabButton = ({ active, onClick, children }) => {
  return (
    <button
      className={`px-4 py-2 mx-1 rounded-md ${active ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default CoursesPage;