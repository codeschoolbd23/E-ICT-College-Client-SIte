import React from 'react';
import { Link } from 'react-router';
import Footer from '../shared/footer/Footer';
import Head from '../shared/navbar/Head';

const Blog = () => {
  const blg = [
    { id: 0, https: "https://i.ibb.co/HfJQnwKG/blog-Layout.jpg" },
    { id: 1, https: "https://i.ibb.co/KpPyQ7L6/blog1.jpg" },
    { id: 2, https: "https://i.ibb.co/qYkVWBsm/blog2.jpg" },
    { id: 3, https: "https://i.ibb.co/0px6PDVB/blog3.jpg" },
    { id: 4, https: "https://i.ibb.co/yBKHYJfh/blog4.jpg" },
  ];
    return (
      <div>
        <Head></Head>
        <div className='text-2xl bg-primary py-5 text-shadow-lg/40 text-center text-yellow-300'>Welcome To E-ICT College Blog Site!!!</div>
        {blg.map((bl) => (
          <div className="hero bg-base-200" key={bl.id}>
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={bl.https} className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-3xl font-bold">
                  Our Hobby And Gossypi News!
                </h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <Link className="btn btn-primary p-1 w-28">See more</Link>
              </div>
            </div>
          </div>
        ))}
        <Footer />
      </div>
    );
};

export default Blog;