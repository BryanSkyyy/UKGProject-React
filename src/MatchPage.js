import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export default function MatchPage() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  let name = 'John Doe';
  let email = 'john.doe@ukg.com';
  let title = 'Intern';

  let matches = ['Basketball', 'PC', 'Outside', 'Twitter', 'Eastern', 'Coffee'];

  const matchList = matches.map((match, index) => <li key={index}>{match}</li>);

  return (
    <div id="matchpage">
      <div id="matchHeader" onClick={handleHomeClick}>
        <h1 onClick={handleHomeClick}>Magic Matcher</h1>
      </div>
      <div id="match">
        <h1>Your top match is {name}!</h1>
        <p>
          {name} is a {title}, and their email is {email}
        </p>
        <p>These are the matching responses you both had:</p>
        <ul>{matchList}</ul>
        <p>
          We've also sent you an email with a list of your other matches, go
          look!
        </p>
      </div>
    </div>
  );
}
