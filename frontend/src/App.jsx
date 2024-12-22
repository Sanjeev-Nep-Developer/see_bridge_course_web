import React from "react";
import Header from "./components/1header/Header";
import Homepage from "./components/2homepage/Homepage";
import Bridge from "./components/3bridge/Bridge";
// import Form from "./components/4forms/Forms";
import Footer from "./components/5footer/Footer";
import Stock from "./components/videosCourses/1stock/Stock";
import Team from './components/6team/Team'
import Demo from "./components/4demoVideos/Demo";
import CourseContent from "./components/7coursesContent/CourseContent";
import Hacking from "./components/videosCourses/2hacking/Hacking";

function App() {
  return (
    <>
      <Header />
      <Homepage />
      <Bridge />
      <Demo />
      <CourseContent />
      <Stock />
      <Hacking/>
      <Team />
      <Footer />
    </>
  );
}

export default App;
