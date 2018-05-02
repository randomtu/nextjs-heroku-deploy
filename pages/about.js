// pages/index.js
import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Menu from '../components/Header/Menu';
import Cover from '../components/Cover/Cover';
import SectionOne from '../components/Sections/Section-1';
import SectionTwo from '../components/Sections/Section-2';

class About extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header></Header>
        <Menu></Menu>
        <Cover></Cover>
        <div id="main">
          <SectionOne></SectionOne>
          <SectionTwo></SectionTwo>
        </div>
      </div>
    );
  }
}

export default About;