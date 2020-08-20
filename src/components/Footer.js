import React from 'react';

const Footer = (props) => {
  return (
    <div className="footer">
      <span className="footer__text">
        Made with <i className="fa fa-heart"> </i> by{' '}
        <a
          href="https://github.com/claudiasanes"
          className="footer__text__link"
        >
          <i className="fa fa-github" aria-hidden="true">
            {' '}
          </i>{' '}
          Claudia Santaella{' '}
        </a>{' '}
        &copy;2020
      </span>
    </div>
  );
};

export default Footer;
