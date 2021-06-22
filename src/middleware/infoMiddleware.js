const infoMiddleware = (req, _, next) => {
  console?.log(`Remote IP: ${req?.ip}`);
  console?.log(`Method: ${req?.method}`);
  console?.log(`Protocol: ${req?.protocol}`);
  console?.log(`Host: ${req?.hostname}`);
  console?.log(`URL: ${req?.originalUrl}`);
  console?.log("--");
  next();
};

export { infoMiddleware };
