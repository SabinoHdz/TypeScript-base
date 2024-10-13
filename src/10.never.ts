(() => {
  const error = (message: string): never | number => {
    if (false) {
      throw new Error(message);
    }
    return 1;
  };

  error("This is an error");
})();
