function registerRouters(server, routers) {
  routers.forEach((router) => server.register(router));
}


export {registerRouters}
