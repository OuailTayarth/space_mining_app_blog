/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import parse from "html-react-parser";

const BlogStandardV2 = ({ blogsV2 }) => {
  return (
    <section className="blog-pg section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts">
              {blogsV2.map((blogItem, index) => (
                <div
                  className={`item ${
                    index === blogsV2.length - 1 ? "" : "mb-80"
                  }`}
                  key={blogItem.id}>
                  <div className="img">
                    <img src={blogItem.image} alt="" />
                  </div>
                  <div className="content">
                    <div className="row justify-content-center">
                      <div className="col-10">
                        <div className="tags">
                          <a className="num">Author: {blogItem.author}</a>
                        </div>

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

                        <h4 className="title">{parse(blogItem.title)}</h4>
                        <p>{parse(blogItem.intro)}</p>
                        <Link href={`/blog-details-page-v2?id=${blogItem.id}`}>
                          <a className="butn bord curve mt-30">Read More</a>
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

export default BlogStandardV2;
