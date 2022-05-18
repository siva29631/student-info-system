import { Link } from 'react-router-dom';
import React from "react";
import "./news.css"

function News() {
    return(
        <div className="news">
            <div class="news_container">
  <div class="news_card">
    <div class="circle">
      <h2>01</h2>
    </div>
    <div class="news_content">
      <p>Series Test III for 2nd Year is Scheduled from 01.02.22</p>
      <Link to="/">Attachment</Link>
    </div>
  </div>
  <div class="news_card">
    <div class="circle">
      <h2>02</h2>
    </div>
    <div class="news_content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptates ea officia totam magni
        natus recusandae.</p>
      <Link to="/">Read More</Link>
    </div>
  </div>
  <div class="news_card">
    <div class="circle">
      <h2>03</h2>
    </div>
    <div class="news_content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptates ea officia totam magni
        natus recusandae.</p>
      <Link to="/">Read More</Link>
    </div>
  </div>
</div>
        </div>
    );
}

export default News;