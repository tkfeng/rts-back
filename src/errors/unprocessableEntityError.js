export default class UnprocessableEntityError extends Error {
  constructor(error) {
    super(error.message);

    this.data = { error };
    this.statusCode = 422;
  }
}
