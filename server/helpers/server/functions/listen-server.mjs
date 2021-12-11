async function listenServer({ server, PORT, HOST }) {
  try {
    await server.listen(PORT, HOST);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}

export { listenServer };
