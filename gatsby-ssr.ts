/*
This is the SSR script that makes the whole server-side rendering for Gatsby Possible.

Without this, SSR is not possible at all, it throws a GetServerState error, so please be careful when you're using
SSR/
 */
const React = require("react");
const Layout = require("./src/components/layout");

// Adds a class name to the body element
exports.onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
  setBodyAttributes({
    className: "my-body-class",
  });
};

// Wraps every page in a component
