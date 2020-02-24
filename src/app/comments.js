const getComments = Comments => async () => {
  const results = await Comments.getAll();
  return results;
};

const createComment = Comments => async comment => {
  const created = await Comments.create(
    Object.assign({}, comment, { date: new Date() })
  );
  return created;
};

module.exports = {
  getComments,
  createComment,
};
