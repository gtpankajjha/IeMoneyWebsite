import React, { useEffect } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useLocation, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { AppFooter, AppHeader } from "../widgets/headerFooter";
import moment from "moment";
import { blogs } from "../widgets/blogData";
import { Helmet } from "react-helmet";

const BlogContent = () => {
  // console.log(props);
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");

  // let { loading, data, error } = useFetch(
  //   `https://strapi-cms-1707.onrender.com/api/ie-blogs/${
  //     id.split("?")[0]
  //   }?populate=*`
  // );

  // console.log("BlogContent data:", data);

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center mx-auto h-screen">
  //       <div
  //         class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
  //         role="status"
  //       >
  //         <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
  //           Loading...
  //         </span>
  //       </div>
  //     </div>
  //   );
  // }

  // if (error) return console.log("cms error:", error);

  function datetime(time) {
    return moment(time).format("dddd, MMMM Do YYYY");
  }

  let data = blogs.data.filter((el) => el.id == id.split("?")[0])[0];
  // console.log(data?.attributes?.blogTitle);

  useEffect(() => {
    if (data) {
      const { blogTitle, blogDesc, blogCoverImg } = data.attributes;

      // Update meta tags dynamically
      const updateMetaTags = () => {
        document.title = blogTitle;

        document.querySelector('meta[name="description"]').setAttribute(
          "content",
          blogTitle // Set your custom description here
        );

        const ogTitle = document.createElement("meta");
        ogTitle.setAttribute("property", "og:title");
        ogTitle.setAttribute("content", blogTitle);
        document.head.appendChild(ogTitle);

        const ogDescription = document.createElement("meta");
        ogDescription.setAttribute("property", "og:description");
        ogDescription.setAttribute("content", blogDesc.substring(0, 200));
        document.head.appendChild(ogDescription);

        const ogImage = document.createElement("meta");
        ogImage.setAttribute("property", "og:image");
        ogImage.setAttribute("content", blogCoverImg?.data?.attributes?.url);
        document.head.appendChild(ogImage);

        // console.log(blogCoverImg?.data?.attributes?.url);

        const ogImageTag = document.querySelector('meta[property="og:image"]');
        if (ogImageTag) {
          ogImageTag.setAttribute(
            "content",
            blogCoverImg?.data?.attributes?.url // Set the URL of your custom image here
          );
        } else {
          // If OG image tag doesn't exist, create and append it to the head
          const newOgImageTag = document.createElement("meta");
          newOgImageTag.setAttribute("property", "og:image");
          newOgImageTag.setAttribute(
            "content",
            "URL_TO_YOUR_CUSTOM_IMAGE" // Set the URL of your custom image here
          );
          document.head.appendChild(newOgImageTag);
        }
      };

      updateMetaTags();

      return () => {
        document.title = "Your Default Title";
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDescription = document.querySelector(
          'meta[property="og:description"]'
        );
        const ogImage = document.querySelector('meta[property="og:image"]');

        if (ogTitle) document.head.removeChild(ogTitle);
        if (ogDescription) document.head.removeChild(ogDescription);
        if (ogImage) document.head.removeChild(ogImage);
      };
    }
  }, [data]);
  // console.log(data?.attributes?.blogCoverImg?.data?.attributes?.url);

  return (
    <>
      {/* <Helmet>
        <title>{data?.attributes?.blogTitle}</title>
        <meta property="og:title" content={data?.attributes?.blogTitle} />
        <meta
          property="og:description"
          content={data?.attributes?.blogDesc.substring(0, 200)}
        />
        <meta
          property="og:image"
          content={data?.attributes?.blogCoverImg?.data?.attributes?.url}
        />
      </Helmet> */}
      <AppHeader />

      <div className="w-full sm:py-10 max-sm:mt-24 bg-[#f9f9f9]">
        <div className="max-w-[1240px] mx-auto">
          {data && (
            <div className="grid lg:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1 md:gap-8 sm:gap-y-8 ss:gap-y-8  px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">
              <div className="col-span-2 gap-8">
                <img
                  src={`${data?.attributes?.blogCoverImg?.data?.attributes?.url}`}
                  className="h-80 w-full"
                  alt=""
                />
                <h1 className="font-bold text-3xl my-1 pt-5">
                  {data?.attributes?.blogTitle}
                </h1>
                <div className="pt-5">
                  <ReactMarkdown className="line-break markdown-content">
                    {data?.attributes?.blogContent}
                  </ReactMarkdown>
                </div>
              </div>

              <div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5  max-h-[300px] max-md:mt-10 max-md:col-span-3">
                <div className="p-2">
                  <img
                    className="p-2 w-32 h-auto rounded-full mx-auto object-cover"
                    //   src={`http://localhost:1337/uploads/logo_e97795328d.jpg`}
                    src={`${data?.attributes?.authorProfile?.data?.attributes?.url}`}
                    alt="profile"
                  />

                  <h1 className="font-bold text-2xl text-center text-gray-900 sm:pt-3">
                    {data?.attributes?.authorName}
                  </h1>
                  <p className="text-center text-gray-900 font-medium">
                    {data?.attributes?.authorDesc}
                  </p>

                  <div className="flex justify-center items-center sm:mt-4">
                    {datetime(data?.attributes?.createdAt)}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <AppFooter />
    </>
  );
};

export default BlogContent;
