import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export default function MatchForm() {
  const navigate = useNavigate();

  let [Name, setName] = useState('');
  let [Email, setEmail] = useState('');
  let [Title, setTitle] = useState('');

  let [Sport, setSport] = useState();
  let [Os, setOs] = useState('default');
  let [Hobby, setHobby] = useState('default');
  let [Social, setSocial] = useState('default');
  let [Entertainment, setEntertainment] = useState('default');
  let [Timezone, setTimezone] = useState('default');
  let [Programming, setProgramming] = useState('default');
  let [Drink, setDrink] = useState('');

  let [Contact, setContact] = useState('default');

  const handleSubmit = () => {
    alert('submitted');
    //Send request to backend, get response.

    navigate('/');
  };

  const handleNameChanged = (event) => {
    setName(event.target.value);
  };

  const handleTitleChanged = (event) => {
    setTitle(event.target.value);
  };

  const handleEmailChanged = (event) => {
    setEmail(event.target.value);
  };

  const handleSportChanged = (event) => {
    setSport(event.target.value);
  };

  const handleComputerChanged = (e) => {
    setOs(e.target.value);
  };

  const handleHobbyChanged = (event) => {
    setHobby(event.target.value);
  };

  const handleSocialChanged = (event) => {
    setSocial(event.target.value);
  };

  const handleEntertainmentChanged = (event) => {
    setEntertainment(event.target.value);
  };

  const handleTimeChanged = (event) => {
    setTimezone(event.target.value);
  };

  const handleProgrammingChanged = (event) => {
    setProgramming(event.target.value);
  };

  const handleDrinkChanged = (event) => {
    setDrink(event.target.value);
  };

  const handleContactChanged = (e) => {
    setContact(e.target.value);
  };

  return (
    <div id="formDiv">
      <h1 id="formHeader">Connect</h1>
      <form onSubmit={handleSubmit} id="connectForm">
        <input
          type="text"
          value={Name}
          onChange={handleNameChanged}
          name="name"
          placeholder="*Your Name"
          required="true"
        />
        <input
          type="Email"
          value={Email}
          onChange={handleEmailChanged}
          name="email"
          placeholder="*Your UKG Email (first.last@ukg.com"
          required="true"
        />
        <input
          type="text"
          value={Title}
          onChange={handleTitleChanged}
          name="title"
          placeholder="*Your Job Title"
          required="true"
        />
        <select
          value={Sport}
          onChange={handleSportChanged}
          required
          form="connectForm"
        >
          <option hidden disabled selected value>
            *Favorite Sport?
          </option>
          <option value="basketball">Basketball</option>
          <option value="football">Football</option>
          <option value="baseball">Baseball</option>
          <option value="soccer">Soccer</option>
          <option value="tennis">Tennis</option>
        </select>
        <select value={Os} onChange={handleComputerChanged} required="true">
          <option value="default" disabled hidden>
            *PC or Mac?
          </option>
          <option value="pc">PC</option>
          <option value="mac">Mac</option>
        </select>
        <select value={Hobby} onChange={handleHobbyChanged} required>
          <option value="default" disabled hidden>
            *Favorite Hobby
          </option>
          <option value="read">Read a Book</option>
          <option value="code">Code All Day</option>
          <option value="netflix">Watch Netflix</option>
          <option value="outside">Touch Grass</option>
        </select>
        <select value={Social} onChange={handleSocialChanged} required>
          <option value="default" disabled hidden>
            *Social Media Addiction
          </option>
          <option value="twitter">Twitter</option>
          <option value="tiktok">TikTok</option>
          <option value="instagram">Instagram</option>
          <option value="facebook">FaceBook</option>
        </select>
        <select
          value={Entertainment}
          onChange={handleEntertainmentChanged}
          required
        >
          <option value="default" disabled hidden>
            *Movie or TV Show?
          </option>
          <option value="movie">Movie</option>
          <option value="tv">TV Show</option>
        </select>
        <select value={Timezone} onChange={handleTimeChanged} required>
          <option value="default" disabled hidden>
            *What Time Zone are you in?
          </option>
          <option value="eastern">Eastern</option>
          <option value="central">Central</option>
          <option value="mountain">Central</option>
          <option value="pacific">Central</option>
          <option value="other">Central</option>
        </select>
        <select
          value={Programming}
          onChange={handleProgrammingChanged}
          required="true"
        >
          <option value="default" disabled hidden>
            *Front or Back End?
          </option>
          <option value="frontend">Front-End</option>
          <option value="backend">Back-End</option>
          <option value="fullstack">Back-End</option>
        </select>
        <select value={Drink} onChange={handleDrinkChanged} required>
          <option value disabled hidden>
            *Coffee or Tea?
          </option>
          <option value="coffee">Coffee</option>
          <option value="tea">Tea</option>
          <option value="neither">Neither</option>
        </select>
        <select value={Contact} onChange={handleContactChanged} required="true">
          <option value="default" disabled hidden>
            *Preferred Contact
          </option>
          <option value="email">Email</option>
          <option value="linkedin">LinkedIn</option>
          <option value="teams">Microsoft Teams</option>
          <option value="slack">Slack</option>
        </select>
        <input id="submitButton" type="submit" value="Submit" />
      </form>
    </div>
  );
}
