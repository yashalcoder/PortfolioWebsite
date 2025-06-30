import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold">ScheduleEase</h1>
      <ul className="flex gap-4">
        <li><a href="#features" className="text-gray-600">Features</a></li>
        <li><a href="#booking" className="text-gray-600">Book Now</a></li>
        <li><a href="#testimonials" className="text-gray-600">Testimonials</a></li>
      </ul>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="text-center py-20 bg-blue-50">
      <h2 className="text-4xl font-bold">Seamless Appointment Scheduling</h2>
      <p className="text-gray-600 mt-4">Book and manage your appointments with ease.</p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md">Get Started</button>
    </section>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 text-center">
      <h3 className="text-3xl font-bold">Why Choose Us?</h3>
      <div className="flex justify-center gap-6 mt-6">
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
          <h4 className="font-semibold">Easy Booking</h4>
          <p className="text-gray-600">Schedule in just a few clicks.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
          <h4 className="font-semibold">Reminders</h4>
          <p className="text-gray-600">Never miss an appointment.</p>
        </div>
      </div>
    </section>
  );
};

const Booking = () => {
  return (
    <section id="booking" className="py-20 text-center bg-blue-100">
      <h3 className="text-3xl font-bold">Book an Appointment</h3>
      <input
        type="text"
        placeholder="Enter your name"
        className="mt-4 p-2 border rounded-md"
      />
      <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md">Submit</button>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 text-center">
      <h3 className="text-3xl font-bold">What Our Users Say</h3>
      <p className="mt-4 text-gray-600">"Amazing scheduling experience!" - Alex</p>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-6 text-center bg-gray-800 text-white">
      <p>&copy; 2025 ScheduleEase. All rights reserved.</p>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Booking />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
