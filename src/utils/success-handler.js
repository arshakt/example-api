function handleList(res, data) {
  const result = {
    status: 200,
    message: 'OK',
    data
  };
  res.status(200).json(result);
}

module.exports = {
  handleList
};
