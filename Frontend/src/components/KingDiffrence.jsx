import React from "react";

const KingDiffrence = () => {
  const kings = [
    {
      id: 1,
      beforeImage:
        "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "Precision Installations",
      description:
        "Precision installations for professionals who demand lasting quality and safety",
    },
    // {
    //     id: 2,
    //     beforeImage: 'https://images.unsplash.com/photo-1605106325680-3485ff3a36f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    //     afterImage: 'https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    //     title: 'Precision Installations',
    //     description: 'Precision installations for professionals who demand lasting quality and safety'
    // },
    // {
    //     id: 3,
    //     beforeImage: 'https://images.unsplash.com/photo-1605106325680-3485ff3a36f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    //     afterImage: 'https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    //     title: 'Precision Installations',
    //     description: 'Precision installations for professionals who demand lasting quality and safety'
    // },
    // {
    //     id: 4,
    //     beforeImage: 'https://images.unsplash.com/photo-1605106325680-3485ff3a36f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    //     afterImage: 'https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    //     title: 'Precision Installations',
    //     description: 'Precision installations for professionals who demand lasting quality and safety'
    // },
    // {
    //     id: 5,
    //     beforeImage: 'https://images.unsplash.com/photo-1605106325680-3485ff3a36f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    //     afterImage: 'https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    //     title: 'Precision Installations',
    //     description: 'Precision installations for professionals who demand lasting quality and safety'
    // },
    // {
    //     id: 6,
    //     beforeImage: 'https://images.unsplash.com/photo-1605106325680-3485ff3a36f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    //     afterImage: 'https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    //     title: 'Precision Installations',
    //     description: 'Precision installations for professionals who demand lasting quality and safety'
    // }
  ];
  return (
    <div className="max-w-7xl my-10 mx-auto px-4 md:px-8 gap-24 lg:px-16">
      <div className="lg:text-center ml-4 lg:ml-0 mb-16 ">
        <h2 className="text-4xl lg:text-5xl  lg:mx-auto font-bold lg:text-center mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          See the King Difference{" "}
        </h2>
        <p className="text-blue-900 font-semibold text-lg">
          Precision installations for professionals who demand lasting quality
          and safety{" "}
        </p>
      </div>
      <div className="absolute top-0 left-1/2 w-1 h-full bg-yellow cursor-col-resize z-10 -translate-x-1/2 before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[50px] before:h-[50px] before:bg-[var(--accent-yellow)] before:rounded-full before:border-4 before:border-white">fdsa</div>
      {kings.map((king) => (
        <div
          key={king.id}
          className="grid grid-cols-2 lg:grid-cols-2 max-w-7xl gap-2 items-center justify-center"
        >
          <div className="flex flex-row max-w-7xl items-center justify-center gap-1">
            <img
              src={king.beforeImage}
              alt={king.title}
              className="w-1/2 h-full object-cover"
            />
            <img
              src={king.afterImage}
              alt={king.title}
              className="w-1/2 h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default KingDiffrence;
