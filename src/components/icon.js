import React from "react";

const importAll = (requireContext) =>
  requireContext.keys().forEach(requireContext);
try {
   const res =importAll(require.context("../common/images/", true, /\.svg$/));
   console.log('res',res)
} catch (error) {
  console.log(error);
}



const Icon = ({ width = 16, height = 16, style, ...rest }) => {
  return (
    <svg width={width} height={height} style={style} {...rest}>
      <use xlinkHref={"#" + rest.name} />
    </svg>
  );
};

export default Icon;