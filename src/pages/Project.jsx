import React from 'react';

function Project() {
  const handleClick = () => {
    window.location.href = 'https://vibester.vercel.app/';
  };
  const handleClick1 = () => {
    window.location.href = 'https://meetwise-app-bbackend-ruby-on-rails-lyqk.vercel.app/';
  };

  return (
    <div>
      <h3>Projects</h3>
      <div>
            <h5>Vibester Music App</h5>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKSLjjT9CDVf1uPa7PQHPgewS_8tgzWhhzhLlwK3uHWXkTOQTeiey7L7mrkCi3Ne56P1I&usqp=CAU"
                alt="vibester music app"
                onClick={handleClick} 
                style={{
                  cursor: 'pointer'
                }}
              />
            </div>
      </div>
      <div>
        <h5> Meetwise Event App</h5>
        <div>
              <img
                src="https://divineevents.com.au/content/uploads/2019/05/F1-Mirror-Runners-with-Metallics-and-bright-florals-300x200.jpg"
                alt="Meetwise Event App"
                onClick={handleClick1} 
                style={{
                  cursor: 'pointer'
                }}
              />
            </div>

      </div>
    </div>
  );
}

export default Project;
