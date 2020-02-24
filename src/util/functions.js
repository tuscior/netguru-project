const buildQuery = params => {
  return Object.keys(params)
    .reduce(
      (acc, key) =>
        params[key]
          ? acc.concat([key, params[key]].map(encodeURIComponent).join('='))
          : acc,
      []
    )
    .join('&');
};

module.exports = {
  buildQuery,
};
