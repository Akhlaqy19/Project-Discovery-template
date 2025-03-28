import React from 'react';
import PropTypes from 'prop-types';
import { isValidUrl } from '../../utils/urlUtils';

const UrlInput = ({ url, onChange, isHovered, inputRef }) => {
  const isValid = isValidUrl(url);

  return (
    <div className="relative w-full flex-1 sm:w-96 md:max-w-96">
      <input
        ref={inputRef}
        type="url"
        value={url}
        onChange={onChange}
        placeholder="Enter your domain to get started"
        className="input relative flex w-full z-30 h-12 px-4 py-3 text-gray caret-yellow placeholder:indent-3 placeholder:text-white/30"
        aria-label="Domain input"
        aria-invalid={!isValid}
        aria-describedby={!isValid && isHovered ? "url-error" : undefined}
      />

      {isHovered && !isValid && (
        <p
          id="url-error"
          className="fade-in absolute -bottom-7 left-1 z-40 w-full text-left text-xs text-sub-yellow show"
          role="alert"
        >
          Enter a valid domain to discover your infrastructure
        </p>
      )}
    </div>
  );
};

UrlInput.propTypes = {
  url: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isHovered: PropTypes.bool.isRequired,
  inputRef: PropTypes.object
};

export default UrlInput; 