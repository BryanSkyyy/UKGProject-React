import React from 'react';
import './style.css';
import MatchForm from './MatchForm.js';
import webComponents from 'ignite/web-components';

export default function App() {
  return (
    <div id="app">
      <h1>Magic Matcher</h1>
      <MatchForm />
    </div>
  );
}
