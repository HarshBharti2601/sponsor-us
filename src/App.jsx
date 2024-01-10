import React from "react";

const Myapp = () => {
  return (
    <>
      <div className="bg-black min-h-screen text-white">
        <div className="flex flex-col justify-center p-8 sm:p-16">
          <h1 className="text-4xl sm:text-5xl text-center border-b-2 border-lime-500 py-4">
            Sponsor <span className="text-lime-500">Us</span>
          </h1>
          <p className="text-md mt-4">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti neque nostrum provident fuga repellat ullam, dolorem eveniet odit deserunt! Enim aliquid nulla tempora consequuntur a ipsum, pariatur natus maiores consequatur neque assumenda incidunt, voluptatem ipsa molestiae! Sunt eius inventore itaque dolorem, deserunt aspernatur aut cum fugiat odio consectetur nobis quod.

          </p>
        </div>

        <div className="flex flex-col sm:flex-row text-md justify-around text-lime-500 mt-8">
          <div className="m-6 flex flex-col items-center">
            <h1 className="text-md sm:text-lg mb-2">Become Our Partner</h1>
            <img
              src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg"
              className="h-16 w-24"
            />
          </div>

          <div className="m-6 flex flex-col items-center">
            <h1 className="text-md sm:text-lg mb-2">Donate</h1>
            <img
              src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg"
              className="h-16 w-24"
            />
          </div>

          <div className="m-6 flex flex-col items-center">
            <h1 className="text-md sm:text-lg mb-2">Brochure</h1>
            <img
              src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg"
              className="h-16 w-24"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row p-4 sm:p-8 items-center">
          {[1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className="m-3 h-32 w-1/2 sm:w-1/4 bg-slate-500 rounded overflow-hidden"
            >
              <img
                src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg"
                className="h-full w-full object-cover"
                alt={`Image ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Myapp;
