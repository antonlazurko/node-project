export const getCommentsHandler = (req, res) => {
  console.log('Hello get comments!');
  res.send('Hello get comments!');
};
export const getCommentByIdHandler = (req, res) => {
  console.log(req.params);

  console.log('Hello get comment by id!');
  res.send('Hello get comment by id!');
};

export const postCommentsHandler = (req, res) => {
  console.log('Hello post comments!');
  res.send('Hello post comments!');
};
