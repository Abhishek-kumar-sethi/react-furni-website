import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import person1 from '../image/person-1.png'
const testimonials = [
  {
    quote: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
    author: "Maria Jones",
    position: "CEO, Co-Founder, XYZ Inc.",
    image: "person1",
  },
  {
    quote: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
    author: "John Doe",
    position: "CTO, ABC Corp.",
    image: "person1",
  },
  {
    quote: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
    author: "Jane Smith",
    position: "COO, DEF Ltd.",
    image: "person1",
  }
];

const Slider = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  margin: auto;
  overflow: hidden;
  text-align: center;
  font-weight:500;
  align-content:center;
`;

const Slide = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const SlideItem = styled.div`
  min-width: 100%;
  box-sizing: border-box;
  padding: 40px;
  height:500px;
  background:'';
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  gap:10px;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0,0,0,0.2);
  border: none;
  padding: 30px;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:25px;
  &:hover {
    background-color:#3b5d50;
    color:#fff;
    transition: 0.3s ease;
  }
`;

const PrevButton = styled(Button)`
  left: 10px;
`;

const NextButton = styled(Button)`
  right: 10px;
`;

const Dots = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Dot = styled.span`
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: ${props => (props.active ? "#3b5d50" : "#bbb")};
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
`;

export default function Homecontent4slider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Slider>
      <Slide style={{ transform: `translateX(-${current * 100}%)` }}>
        {testimonials.map((testimonial, index) => (
          <SlideItem key={index}>
            <p style={{width:"80%",color:"#3b5d50",lineHeight:"30px"}}>"{testimonial.quote}"</p>
            <img src={person1} alt={testimonial.author} style={{ borderRadius: '50%', width: '100px', height: '100px',padding:"20px"}} />
            <p>{testimonial.author}</p>
            <p style={{color:"#3b5d50"}}>{testimonial.position}</p>
          </SlideItem>
        ))}
      </Slide>
      <PrevButton onClick={prevSlide}>&lt;</PrevButton>
      <NextButton onClick={nextSlide}>&gt;</NextButton>
      <Dots>
        {testimonials.map((_, index) => (
          <Dot key={index} active={current === index} onClick={() => setCurrent(index)} />
        ))}
      </Dots>
    </Slider>
  );
}
