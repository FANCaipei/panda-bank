const generateErrMsg = (internalErrCode, msg) => {
  return {
    errCode: internalErrCode,
    msg: msg,
  };
};

module.exports = generateErrMsg;
