import React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <p className='header__wordmark'>Video Fetcher</p>

      <div className='header__info'>
        <a href='https://github.com/vo-eric/VideoFetcher'>
          <i className='fa fa-github' aria-hidden='true'></i>
        </a>
        <a href='https://www.linkedin.com/in/eric-vo-13150b144/'>
          <i className='fa fa-linkedin' aria-hidden='true'></i>
        </a>
        <a href='http://www.ericvo.life'>
          <i className='fa fa-user-circle-o' aria-hidden='true'></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
