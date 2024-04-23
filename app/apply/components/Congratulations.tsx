import { useEffect } from 'react';
import strings from '../../strings.json';

const Congratulations = () => {
  useEffect(() => {
    const firework = document.querySelector('.firework');

    let count = 0; // Initialize a counter for sparkles
    const maxSparkles = 1; // Set the maximum number of sparkles

    // Function to handle sparkle animation
    function handleSparkle() {
      count++; // Increment the counter
      if (count >= maxSparkles) {
        // If reached maximum sparkles, stop the animation
        firework?.classList.remove('sparkle'); // Remove sparkle animation class
        firework?.removeEventListener('animationiteration', handleSparkle); // Remove event listener
      }
    }

    // Add event listener for animation iteration
    firework?.addEventListener('animationiteration', handleSparkle);

    // Clean up function
    return () => {
      firework?.removeEventListener('animationiteration', handleSparkle); // Remove event listener on component unmount
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className='stack'>
      <main>
        <h1>{strings.Congratulations.Heading}</h1>
        <div className='lightTheMatch'>
          <div className='before'></div>
          <div className='after'></div>
        </div>
      </main>
    </div>
  );
};

export default Congratulations;
