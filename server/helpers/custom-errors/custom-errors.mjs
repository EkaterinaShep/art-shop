// CustomError
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

// DuplicateEmailError
class DuplicateEmailError extends CustomError {
  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = 200;
  }
}

// InvalidActivationLinkError
class InvalidActivationLinkError extends CustomError {
  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = 400;
  }
}

// NotFoundError
class NotFoundError extends CustomError {
  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = 404;
  }
}

// UnauthorizedError
class UnauthorizedError extends CustomError {
  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = 401;
  }
}

export {
  CustomError,
  DuplicateEmailError,
  InvalidActivationLinkError,
  NotFoundError,
  UnauthorizedError,
};
