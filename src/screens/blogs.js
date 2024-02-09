import React, { Component, StrictMode } from "react";
import { AppHeader, AppFooter } from "../widgets/headerFooter";
import "../styles/bl.css";
import { Link } from "react-router-dom";
import moment from "moment/moment";
import { blogs } from "../widgets/blogData";

export default class BlogsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ////////////////// SCREEN FUNCTION /////////////////////
      navScreen: props.navScreen,
      // blogs: props.blogs.data,
    };
  }

  render() {
    const state = this.state;

    return (
      <StrictMode>
        <AppHeader state={state} />

        <div className="blA">
          <div className="blAa">OUR BLOGS</div>
          <div className="blAb">
            A place to share stories, news and the successes of our users
          </div>
        </div>
        <MyCard data={blogs.data} />
        {/* <MyCard data={{ title: "IMPACT STORIES" }} /> */}
        <AppFooter state={state} />
      </StrictMode>
    );
  }
}

function MyCard({ data }) {
  function datetime(time) {
    return moment(time).format("ddd, MMM Do YYYY");
  }

  return (
    <div className="blH">
      <div className="blHa">TRENDING</div>
      {/* <div className="blHe"> */}
      <div className="grid sm:grid-cols-3 gap-8 py-8 z-0 ">
        {data.map((blog) => {
          return (
            <div className="rounded-xl overflow-hidden drop-shadow-md " style={{backgroundColor:"rgb(112 112 112 / 0.1)"}}>
              <div className="flex flex-row justify-between p-4 ">
                <div className="flex justify-center items-center gap-1">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={`${blog?.attributes.authorProfile.data.attributes.url}`}
                    alt=""
                  />
                  <div className="font-bold" style={{color:'white'}}>
                    {blog?.attributes?.authorName}
                  </div>
                </div>
                <div className="flex justify-center items-center" style={{color:'white'}}>
                  {datetime(blog.attributes.createdAt)}
                </div>
              </div>

              <a
                href={`blog-content?id=${
                  blog.id
                }?title=Impact-Ecosystem-${blog.attributes.blogTitle.replace(
                  /\s/g,
                  "-"
                )}`}
                key={blog.id}
              >
                {/* <a
                href={`blog-content?id=${
                  blog.id
                }?title=${blog.attributes.blogTitle.replace(/\s/g, "-")}`}
                key={blog.id}
              > */}
                <img
                  className="h-56 w-full object-fill rounded-md p-1"
                  src={`${blog.attributes.blogCoverImg.data.attributes.url}`}
                  alt=""
                />
                <div className="p-8 ">
                  <h3 className="font-bold text-xl my-1" style={{color:'white'}}>
                    {blog.attributes.blogTitle}
                  </h3>

                  <p className="text-gray-600 text-sm" style={{color:'white'}}>
                    {blog.attributes.blogDesc}
                  </p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
      {/* </div> */}
    </div>
  );
}
