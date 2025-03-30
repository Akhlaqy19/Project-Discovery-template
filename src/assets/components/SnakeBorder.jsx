import React from "react";
import PropTypes from "prop-types";

const SnakeBorder = ({ specialStyles }) => {
  return (
    <div
      className={`
        pointer-events-none
        absolute
        inset-0
        rounded-[inherit]
        [border:0.75px_solid_transparent] 
        ![mask-clip:padding-box,border-box] 
        ![mask-composite:intersect] 
        [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] 
        ${specialStyles}
        after:absolute 
        after:aspect-square 
        animate-border-beam 
        after:[offset-anchor:90%_50%]  
      `}
      role="presentation"
      aria-hidden="true"
    />
  );
};

SnakeBorder.propTypes = {
  specialStyles: PropTypes.string,
};

SnakeBorder.defaultProps = {
  specialStyles: "",
};

export default SnakeBorder;
