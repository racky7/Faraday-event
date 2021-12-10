import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../../images/arrow.svg";

const data = [
  {
    title: "Event Title",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis eveniet ratione ab obcaecati! Quisquam quibusdam voluptates atque unde culpa!",
    image:
      "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
  },
  {
    title: "Event Title",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis eveniet ratione ab obcaecati! Quisquam quibusdam voluptates atque unde culpa!",
    image:
      "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
  },
  {
    title: "Event Title",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis eveniet ratione ab obcaecati! Quisquam quibusdam voluptates atque unde culpa!",
    image:
      "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
  },
];

function EventList() {
  return (
    <section className="my-5">
      <h2 className="container text-2xl font-bold">Upcomming Events</h2>
      <div className="space-y-4 mt-4">
        {data.map((event, i) => (
          <article key={i} className="odd:bg-[#F1F2F6] py-8">
            <div className="container md:flex gap-12">
              <img src={event.image} alt="" className="w-full md:max-w-sm" />

              <div className="space-y-3 my-3">
                <h3 className="text-2xl font-semibold">{event.title}</h3>
                <p>{event.desc}</p>

                <Link to="/event" className="inline-block mt-5 text-primary">
                  Learn More
                  <img
                    src={Arrow}
                    alt="arrow"
                    aria-hidden="true"
                    className="inline ml-5"
                  />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default EventList;
