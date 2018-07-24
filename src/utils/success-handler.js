function handleCreate(res, data) {
  const result = {
    status: 201,
    message: 'Created',
    data
  }
  res.status(201).json(result)
}

function handleGet(res, data) {
  const result = {
    status: 200,
    message: 'Ok',
    data
  }
  res.status(200).json(result)
}

module.exports = {
  handleCreate,
  handleGet
}
