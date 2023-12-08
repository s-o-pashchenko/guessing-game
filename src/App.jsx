import React, { useState, useEffect } from 'react';

const App = () => {
  const [hintVisible, setHintVisible] = useState(false);
  const [presidentsData, setPresidentsData] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    // Assuming 'data.json' contains your JSON data
    const fetchData = async () => {
      try {
        const response = await fetch('data.json');
        const data = await response.json();
        setPresidentsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once on mount

  const showHint = () => {
    setHintVisible(true);
  };

  const choosePresident = () => {
    if (presidentsData && presidentsData.presidents) {
      return presidentsData.presidents[Math.floor(Math.random() * presidentsData.presidents.length)];
    }
    return null;
  };

  const hintNum = 0;

  const createOptions = () => {
    if (presidentsData && presidentsData.presidents) {
      return presidentsData.presidents.map((president, index) => ({
        value: president.name,
        label: president.name,
      }));
    }
    return [];
  };

  const options = createOptions();

  return (
    <div>
      <label htmlFor="guess">Select a Guess:</label>
      <select
        id="guess"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <button onClick={showHint}>Hint</button>

      {hintVisible && (
        <div id="hintBox">
          {selectedOption ? (
            <p>Here's your hint: {choosePresident().hints[hintNum]}</p>
          ) : (
            <p>Please select an option.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
