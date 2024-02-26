import React, { Component, StrictMode, useEffect, useState } from "react";
import { AppHeader, AppFooter } from "../widgets/headerFooter";
import "../styles/nw.css";
import { Card1 } from "../widgets/cards";
import axios from "axios";
import { BsArrowUpRight } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import CategoryMultiSelectFilter from "../components/CategoryMultiSelectFilter";

const Networks = () => {
  const [partnersData, setPartnersData] = useState();
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    getPartnersByIndividual();
  }, []);

  useEffect(() => {
    if (partnersData) {
      const filteredPartners =
        selectedCategory !== ""
          ? partnersData.filter(
              (partner) =>
                selectedCategory.length === 0 ||
                selectedCategory.some((category) =>
                  partner.areas.includes(category)
                )
            )
          : partnersData;

      setFilteredData(filteredPartners);
    }
  }, [selectedCategory, partnersData]);

  // search
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter the partners based on the search query
    const filteredPartners = partnersData.filter((partner) =>
      partner.partnerName.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(filteredPartners);
  };

  async function getPartnersByIndividual() {
    const apiUrl = `${process.env.REACT_APP_API_PORT}/partners/getPartnersByCategory`;
    try {
      // Make the GET request using Axios
      const response = await axios.post(apiUrl, {
        categoryName: "Individuals",
      });

      // Access the data from the response
      const data = response.data.data;
      setPartnersData(data);
      // Process or display the data as needed
      console.log("Data:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const openModal = (partner) => {
    setSelectedPartner(partner);
  };

  const closeModal = () => {
    setSelectedPartner(null);
  };

  return (
    <StrictMode>
      <div className="nwA">
        <div className="sm:flex justify-center items-center p-10 gap-10 w-3/4 max-sm:w-full max-sm:p-2 max-sm:gap-4 bg-black/50">
          <div className="font-bold text-6xl text-center">INDIVIDUALS</div>
          <div className="text-lg max-sm:text-sm">
            Individuals drive a regenerative economy by supporting local
            initiatives, choosing sustainable products, advocating for policy
            changes, and investing in eco-friendly businesses. Their awareness,
            skills, and behaviors—such as supporting community currencies,
            sharing knowledge, and reducing waste—shape a resilient local
            economy. Through education, collaboration, and conscious
            consumerism, they foster natural capital preservation and
            sustainable living. These collective efforts create a transformative
            impact, building a future centered on regenerating resources and
            strengthening community ties.
          </div>
        </div>
      
      </div>
      {/* intro */}
      <div className="nwB">
        <div className="nwBa">We are joining hands for impact</div>
        <div className="nwBb">
          We engage individuals by educating them on regenerative practices,
          offering investment platforms for sustainable projects, and fostering
          community involvement in decision-making. They create networks for
          collaboration, develop accessible financial instruments for
          regenerative investments, and provide transparent impact measurement.
          By advocating for supportive policies and facilitating forums, We
          empower individuals to contribute financially, learn, and actively
          participate in building a regenerative economy focused on
          sustainability and community well-being.
        </div>
      </div>

      {/* IMpact partners */}
      <div className="nwD">
        <div className="nwDa">Impact Projects</div>

        {/* filter and search */}
        <div className="sm:flex w-full justify-between items-center bg-black/5 p-8 mb-8 rounded-md">
          <div
            className="flex justify-center items-center gap-4 cursor-pointer"
            onClick={() => setShowFilter(!showFilter)}
          >
            <FiFilter className="w-8 h-8" />
            <span className="font-bold">Filter by category</span>

           
          </div>

          {showFilter && (
            <CategoryMultiSelectFilter
              setSelectedCategories={setSelectedCategory}
              selectedCategories={selectedCategory}
            />
          )}

          {/* search bar */}
          <div className="flex items-center p-4 sm:w-1/2">
            <form className="sm:w-full">
              <div className="relative">
                {/* search icon */}
                <button className="absolute right-0 top-1/2 -translate-y-1/2 p-4">
                  <svg
                    className="fill-black hover:fill-black dark:fill-black dark:hover:fill-black"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                      fill=""
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                      fill=""
                    />
                  </svg>
                </button>

                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full bg-white pl-4 pr-4 py-3 font-medium rounded-full focus:outline-none xl:w-125 shadow-md hover:shadow-lg"
                />
              </div>
            </form>
          </div>
        </div>

        {/* partners data */}
        <div className="overflow-x-auto w-full">
          <div className="flex flex-row flex-wrap justify-center gap-10">
            {filteredData.map((partner, index) => (
              <div
                className="w-[400px] p-4 flex flex-col justify-center items-center rounded-md shadow-md  max-sm:p-2 max-sm:gap-4 bg-black/10 cursor-pointer"
                key={index}
                onClick={() => openModal(partner)}
              >
                {/* logo */}
                <div className="border-2 border-green-500/50 rounded-full">
                  <img
                    src={partner.logo}
                    alt="logo"
                    className="w-40 h-40 rounded-full"
                  />
                </div>

                {/* title */}
                <div className="text-2xl font-bold">{partner.partnerName}</div>

                {/* desc */}
                <div className="text-sm p-4">
                  {partner.about.length < 60
                    ? partner.about
                    : `${partner.about.slice(0, 100)}`}
                  <span className="text-blue-500 italic font-semibold">
                    ... more
                  </span>
                </div>

                {/* web link */}
                <div className="w-full flex justify-between gap-4 p-4">
                  {partner.website && (
                    <div>
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noreferrer"
                        className="flex font-semibold underline text-blue-500 underline-offset-4"
                      >
                        Web
                        <span>
                          <BsArrowUpRight className="font-bold text-xl" />
                        </span>
                      </a>
                    </div>
                  )}

                  <div>
                    <a
                      href={partner.linkedIn}
                      target="_blank"
                      rel="noreferrer"
                      className="flex font-semibold underline text-blue-500 underline-offset-4"
                    >
                      Linkedin
                      <span>
                        <BsArrowUpRight className="font-bold text-xl" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* modal */}

          {selectedPartner && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
              <div className="modal-overlay"></div>
              <div className="modal-container bg-white w-11/12 md:max-w-lg mx-auto rounded shadow-lg z-50 overflow-y-auto p-4">
                <div className="modal-content py-4 text-left px-6">
                  <div className="flex justify-between items-center pb-3">
                    <div className="flex gap-2 items-center">
                      {/* logo */}
                      <img
                        src={selectedPartner.logo}
                        alt=""
                        className="w-8 h-8 rounded-full"
                      />
                      {/* name */}
                      <p className="text-2xl font-bold">
                        {selectedPartner.partnerName}
                      </p>
                    </div>
                    <button
                      className="modal-close-button cursor-pointer z-50"
                      onClick={closeModal}
                    >
                      <span className="text-2xl">&times;</span>
                    </button>
                  </div>
                  {/* divider */}
                  <div className="h-1 bg-[#00000029] w-full my-2" />
                  {/* about */}
                  <div className="my-4">
                    <h1 className="text-lg font-semibold">About</h1>
                    <p>{selectedPartner.about}</p>
                  </div>
                  {/* website */}
                  {selectedPartner.website && (
                    <a
                      href={selectedPartner.website}
                      target="_blank"
                      rel="noreferrer"
                      className="flex gap-4  items-center my-2"
                    >
                      <h1 className="text-lg font-semibold">Website: </h1>
                      <p className="text-blue-500">{selectedPartner.website}</p>
                      <span>
                        <BsArrowUpRight className="font-bold text-xl text-blue-500" />
                      </span>
                    </a>
                  )}
                  {/* linkenin */}
                  {selectedPartner.linkedIn && (
                    <a
                      href={selectedPartner.linkedIn}
                      target="_blank"
                      rel="noreferrer"
                      className="flex gap-4  items-center my-2"
                    >
                      <h1 className="text-lg font-semibold">Linkedin:</h1>
                      <p className="text-blue-500">
                        {selectedPartner.linkedIn}
                      </p>
                      <span>
                        <BsArrowUpRight className="font-bold text-xl text-blue-500" />
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <AppFooter />
      <AppHeader />
    </StrictMode>
  );
};

export default Networks;
