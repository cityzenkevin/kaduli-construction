import  { useState } from "react";

const reviews = [
  {
    id: 0,
    name: "John Doe",
    review:
      "This team of professionals has exceeded our expectations every step along the way. The quality of their work and attention to detail is  extraordinary. Not only would we recommend them without hesitation, we will use them ourselves for every additional home project.",
  },
  {
    id: 1,
    name: "Jane Smith",
    review:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  // Add more reviews as needed
];

const ReviewsCarousel = () => {
  const [currentReview, setCurrentReview] = useState(0);

console.log(currentReview)

  return (
    <div className=" h-1/4">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extralight italic text-center tracking-tight text-gray-900">
          {reviews[currentReview].name}
        </h2>
        <h1 className="text-5xl font-extrabold text-center tracking-tight text-gray-900 mt-2">
          INSIGHT
        </h1>
        <blockquote className="mt-10">
          <p className="text-2xl leading-9 font-medium text-center text-gray-900">
            “{reviews[currentReview].review}”
          </p>
        </blockquote>
        <div className="flex justify-center space-x-1 mt-8">
          {reviews.map((review, i) => {
            return (
              <span
                onClick={() => setCurrentReview(i)}
                key={i}
                className={`block cursor-pointer h-3 w-3 p-2 rounded-full ${
                  currentReview == review.id ? "bg-gray-900" : "bg-gray-300"
                } `}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
