function getBody(req) {
  return Object.fromEntries(
    Object.keys(req.body).map((key) => [key, req.body[key].value])
  );
}

export {getBody}
