/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import parse from "html-react-parser";

const BlogStanderd = ({ blogs }) => {
  return (
    <section className="blog-pg section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts">
              {blogs.map((blogItem, index) => (
                <div
                  className={`item ${
                    index === blogs.length - 1 ? "" : "mb-80"
                  }`}
                  key={blogItem.id}
                >
                  <div className="img">
                        <img src={blogItem.image} alt="" />
                  </div>
                  <div className="content">
                    <div className="row justify-content-center">
                      <div className="col-10">

                      <a >
                          <div className="tags">
                            <a className="num">Author: {blogItem.author}</a>
                          </div>
                        </a>

                        <a >
                          <div className="tags">
                            <a >{blogItem.date.day} {blogItem.date.month}</a>
                          </div>
                        </a>

                        <a >
                          <a className="tags">
                            <a href={blogItem.source} className="num" target="_blank">Original Article Source</a>
                          </a>
                        </a>

                        {/* <div className="tags">
                          {blogItem.tags.map((tag, index) => (
                            <Link key={index} href="/blog/blog-dark">
                              {tag}
                            </Link>
                          ))}
                        </div> */}
                        <h4 className="title">
                            {parse(blogItem.title)}
                        </h4>
                        <p>{parse(blogItem.intro)}</p>
                        <Link href={`/blog-details-page?id=${blogItem.id}`}>
                          <a className="butn bord curve mt-30">Read More</a>
                        </Link>
                        {/* <Link href="#">
                          <a className="butn bord curve mt-30">Read More</a>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* <div className="pagination">
                <span className="active">
                  <Link href="#">1</Link>
                </span>
                <span>
                  <Link href={`/blog/blog-dark`}>2</Link>
                  <Link href="#">2</Link>
                </span>
                <span>
                  <Link href="#">
                    <a>
                      <i className="fas fa-angle-right"></i>
                    </a>
                  </Link>
                </span>
              </div> */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogStanderd;
