/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import parse from "html-react-parser";

const BlogStandard = ({ blogs }) => {
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
                  key={blogItem.id}>
                  <div className="img">
                    <img src={blogItem.image} alt="" />
                  </div>
                  <div className="content">
                    <div className="row justify-content-center">
                      <div className="col-10">
                        <a>
                          <div className="tags">
                            <a className="num">
                              {blogItem.id === 4 ? "Authors" : "Author"}:{" "}
                              {blogItem.author}
                            </a>
                          </div>
                        </a>

                        <div className="tags">
                          <a>
                            {blogItem.date.day} {blogItem.date.month}
                          </a>
                        </div>

                        <div className="tags">
                          <a
                            href={blogItem.source}
                            className="num"
                            target="_blank">
                            Original Article Source
                          </a>
                        </div>
                        <h4 className="title">{blogItem.title}</h4>
                        <p>{parse(blogItem.intro)}</p>
                        <Link href={`/blog-details-page?id=${blogItem.id}`}>
                          <a className="butn bord curve mt-15">Read More</a>
                        </Link>
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

export default BlogStandard;
