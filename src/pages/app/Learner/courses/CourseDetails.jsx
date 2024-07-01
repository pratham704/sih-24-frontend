import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { load } from "@cashfreepayments/cashfree-js";
import { useNavigate } from "react-router-dom";
import { cashifyApi } from "../../../../api/Cashify";
import { baseUrl } from "../../../../api/BaseUrl";

const CourseDetails = () => {
  const nav = useNavigate();
  const [orderId, setOrderId] = useState("");
  const [courseData, setCourseData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const stdToken = localStorage.getItem("stdToken");
        const response = await axios.get(`${baseUrl}/api/courses/${id}`, {
          headers: {
            Authorization: `Bearer ${stdToken}`,
          },
        });
        setCourseData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchCourseData();
  }, [id]);

  let cashfree;

  let insitialzeSDK = async function () {
    cashfree = await load({
      mode: "sandbox",
    });
  };

  insitialzeSDK();

  const getSessionId = async () => {
    try {
      let res = await axios.get(`${cashifyApi}/payment`);

      if (res.data && res.data.payment_session_id) {
        console.log(res.data);
        setOrderId(res.data.order_id);
        return res.data.payment_session_id;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const verifyPayment = async () => {
    try {
      alert("payment verified");
      let res = await axios.post(`${cashifyApi}/verify`, {
        orderId: orderId,
      });
      nav("/student/dashboard");


      registerCourse();


      if (res && res.data) {
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (e) => {
    console.log("giygou");
    e.preventDefault();
    try {
      let sessionId = await getSessionId();
      let checkoutOptions = {
        paymentSessionId: sessionId,
        redirectTarget: "_modal",
      };

      cashfree.checkout(checkoutOptions).then((res) => {
        console.log("payment initialized");

        verifyPayment(orderId);
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (!courseData) {
    return <div>Loading...</div>;
  }

  const registerCourse = async () => {
    try {
      const stdToken = localStorage.getItem("stdToken");

      if (!stdToken) {
        throw new Error("stdToken not found in local storage");
      }

      const response = await axios.post(
        `${baseUrl}/api/courses/${id}/enroll`,
        {
          courseId: courseData.courseId,
        },
        {
          headers: {
            Authorization: `Bearer ${stdToken}`,
          },
        }
      );

      console.log("Course registration successful:", response.data);
    } catch (error) {
      console.error("Error registering course:", error);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <nav className="text-sm mb-4">
          <span>Course details</span>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:hidden mb-8">
            <img
              src={courseData.imgSrc}
              alt="Course preview"
              className="w-full h-auto rounded-md"
            />
            <button
              className="w-full bg-purple-600 text-white py-3 rounded-md mt-4"
              onClick={handleClick}
            >
              Start subscription
            </button>
            <div className="flex items-center justify-between text-sm text-gray-400 mt-4">
              <span>Starting at ₹850 per month</span>
              <span>Cancel anytime</span>
            </div>
            <div className="text-3xl font-bold mt-4">{courseData.price}</div>
          </div>
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{courseData.title}</h1>
            <p className="text-lg mb-6">{courseData.description}</p>
            <br />
            <div className="flex items-center mb-4">
              <span className="bg-yellow-500 text-black px-2 py-1 text-sm font-semibold mr-2">
                Bestseller
              </span>
              <span className="text-xl font-semibold">{courseData.rating}</span>
              <span className="text-sm text-gray-400 ml-2">
                (386,295 ratings) 1,287,446 students
              </span>
            </div>
            <div className="text-sm mb-6">
              <p>{courseData.instructor}</p>
              <p>Last updated 01/2024</p>
              <p>English</p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Build 16 web development projects for your portfolio, ready
                    to apply for junior developer jobs.
                  </li>
                  <li>
                    After the course you will be able to build ANY website you
                    want.
                  </li>
                  <li>Work as a freelance web developer.</li>
                  <li>Master backend development with Node.</li>
                </ul>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Learn the latest technologies, including Javascript, React,
                    Node and even Web3 development.
                  </li>
                  <li>
                    Build fully-fledged websites and web apps for your startup
                    or business.
                  </li>
                  <li>Master frontend development with React.</li>
                  <li>Learn professional developer best practices.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="hidden lg:block bg-gray-800 rounded-lg p-6">
            <img
              src={courseData.imgSrc}
              alt="Course preview"
              className="w-full h-auto rounded-md mb-4"
            />

            <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
              <span>Starting at ₹850 per month</span>
              <span>Cancel anytime</span>
            </div>
            <div className="text-3xl font-bold mb-4">{courseData.price}</div>
            <button
              className="w-full bg-purple-600 text-white py-3 rounded-md mb-4"
              onClick={handleClick}
            >
              Start subscription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
