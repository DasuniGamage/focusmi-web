import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4 max-w-xs w-full">
      <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
      <p className="text-gray-600">{course.description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700">
        Enroll Now
      </button>
    </div>
  );
};

export default CourseCard;