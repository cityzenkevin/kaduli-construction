
const Reviews = () => {
  return (
    <div className="">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extralight italic text-center tracking-tight text-gray-900">
          client
        </h2>
        <h1 className="text-5xl font-extrabold text-center tracking-tight text-gray-900 mt-2">
          INSIGHT
        </h1>
        <blockquote className="mt-10">
          <p className="text-2xl leading-9 font-medium text-center text-gray-900">
            “This team of professionals has exceeded our expectations every step
            along the way. The quality of their work and attention to detail is
            extraordinary. Not only would we recommend them without hesitation,
            we will use them ourselves for every additional home project.”
          </p>
        </blockquote>
        <div className="flex justify-center space-x-1 mt-8">
          <span className="block h-3 w-3 rounded-full bg-gray-300" />
          <span className="block h-3 w-3 rounded-full bg-gray-300" />
          <span className="block h-3 w-3 rounded-full bg-gray-900" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
