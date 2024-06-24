import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "I am really impressed by the quality of services I received from Globusoft Solutions. You were right on schedule, charged reasonable prices, were professional and courteous in dealings, and delivered items well before time.",
      imgSrc: "https://picsum.photos/seed/picsum/50/50",
      name: "Leroy Jenkins",
      position: "General Manager  Anaal firm",
    },
    {
      text: "We thank Globusoft Solutions for the wonderful job in helping us develop our program. Everyone was professional, excellent and hard working. Thanks to them, we were able to achieve our goal on time, and we look forward to continue working with them in the future.",
      imgSrc: "https://picsum.photos/50/50?random=1",
      name: "Leroy Jenkins",
      position: "CTO Digital Avitex ",
    },
    {
      text: "I will admit - originally the thought of outsourcing scared the hell out of me. As a business owner I am used to control and always having my finger on the pulse of my employees and contractors. Globusoft has delivered great results and has convinced me of the value of outsourcing.",
      imgSrc: "https://picsum.photos/50/50?random=2",
      name: "Leroy Jenkins",
      position: "UI UX Design TechX",
    },
    {
      text: "Just wanted to let you know that our client is very happy with the movies. I know that the deadlines were very strict, but thanks to your managing capabilities, everything went smooth!",
      imgSrc: "https://picsum.photos/50/50?random=4",
      name: "Leroy Jenkins",
      position: "Servie Dev HiveLab",
    },
  ];

  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 mt-6">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <h2 className="text-4xl font-bold">
              What our <span className="text-blue-500">Customers</span> say about us.
            </h2>
            <p className="dark:text-gray-600">
            Our partners are our treasured assets and the life- force behind our corporation, who have been with us through our decade of excellence by virtue of our commitment and passion.
            </p>
          </div>
          <div className="p-6 xl:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md dark:bg-gray-50">
                    <p>{testimonial.text}</p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src={testimonial.imgSrc}
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">
                          {testimonial.name}
                        </p>
                        <p className="text-sm dark:text-gray-400">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
