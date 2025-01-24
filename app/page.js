"use client"
import { Button } from "@/components/ui/button"
import Typed from 'typed.js';
import React, {useRef, useEffect} from 'react';

export default function Home() {
    // Create reference to store the DOM element containing the animation
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: [  "Coding",
          "Web Development",
          "Software Engineering",
          "Andriod development",
          "IOS Developer",],
          typeSpeed: 50,
          backSpeed: 30,
          loop: true,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []); 

  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
          Building <span className="font-semibold">scalable solutions</span> for the modern web and mobile world.<br className="hidden lg:block" />
          Expertise in <span className="font-semibold underline decoration-primary">Full Stack Development</span> & Android Applications.<span className="font-semibold underline decoration-primary"><span ref={el} /></span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          Delivering robust, user-friendly web platforms and mobile apps using the latest technologies to empower your business growth. <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
             
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
        {/* https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg */}
          <img src="logo.jpg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Website Solutions Plans</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Choose the perfect solution for your website needs</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Basic Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Starter</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">$50/month</p>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400">Custom Landing Page</li>
            <li className="text-gray-600 dark:text-gray-400">Basic SEO Optimization</li>
            <li className="text-gray-600 dark:text-gray-400">Up to 5 Pages</li>
            <li className="text-gray-600 dark:text-gray-400">Responsive Design</li>
            <li className="text-gray-600 dark:text-gray-400">Monthly Maintenance</li>
          </ul>
          <Button className="mx-1" variant="outline">Choose Plan</Button>
        </div>
      </div>
      {/* Standard Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Professional</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">$100/month</p>
          <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">Most Popular</span>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400">Full Website Development</li>
            <li className="text-gray-600 dark:text-gray-400">Advanced SEO Optimization</li>
            <li className="text-gray-600 dark:text-gray-400">Up to 15 Pages</li>
            <li className="text-gray-600 dark:text-gray-400">E-commerce Integration</li>
            <li className="text-gray-600 dark:text-gray-400">Weekly Maintenance</li>
          </ul>
          <Button className="mx-1" variant="outline">Choose Plan</Button>
        </div>
      </div>
      {/* Premium Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Enterprise</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">$200/month</p>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400">Comprehensive Web Solution</li>
            <li className="text-gray-600 dark:text-gray-400">Custom SEO Strategy</li>
            <li className="text-gray-600 dark:text-gray-400">Unlimited Pages</li>
            <li className="text-gray-600 dark:text-gray-400">Premium E-commerce Features</li>
            <li className="text-gray-600 dark:text-gray-400">24/7 Support & Maintenance</li>
          </ul>
          <Button className="mx-1" variant="outline">Choose Plan</Button>
        </div>
      </div>
    </div>
  </div>
</section>




 <section className="py-12 bg-white dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">What Our Clients Say</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Hear from our satisfied customers</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Testimonial 1 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">&quotThis service has been a game-changer for our business. Highly recommend!&quot</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">John Doe</h3>
          <p className="text-gray-500 dark:text-gray-300">CEO, Company A</p>
        </div>
      </div>
      {/* Testimonial 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">&quotAmazing experience! The team was professional and the results were outstanding.&quot</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Jane Smith</h3>
          <p className="text-gray-500 dark:text-gray-300">Marketing Director, Company B</p>
        </div>
      </div>
      {/* Testimonial 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">&quotExceptional service and support. We couldn&apost be happier with the results.&quot</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Michael Brown</h3>
          <p className="text-gray-500 dark:text-gray-300">CTO, Company C</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="py-12 bg-gray-100 dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Top Blogs</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Check out our most popular blog posts</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Blog 1 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <img src="/typescript.webp" className="w-full h-64 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">C Programming Tutorial</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">This is c/c++ tutorial and this is for learning C++/C</p>
            <Button className="m-2" variant="outline" href="/c-programming-tutorial">Read More</Button>
          </div>
        </div>
      </div>
      {/* Blog 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <img src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog 2" className="w-full h-64 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">ChatGPT vs. Gemini</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the This is ChatGPT vs. Gemini tutorial and this is for learning ChatGPT vs. Gemini</p>
            <Button className="m-2" variant="outline" href="/chatgpt-vs-gemini">Read More</Button>
          </div>
        </div>
      </div>
      {/* Blog 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <img src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg" alt="Blog 3" className="w-full h-64 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">CSS Tutorial</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">This is CSS Tutorial tutorial and this is for learning CSS</p>
            <Button className="m-2" variant="outline" href="/blog">Read More</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </main>
  );
};








