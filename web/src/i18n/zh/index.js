// Get filename only.
// Example: './foo.json' becomes 'foo'
function getFileNameOnly(filePath) {
  if (filePath.endsWith(".json")) {
    return filePath.split("/").pop().split(".").shift();
  } else {
    return null;
  }
}

// ALL THE JSON!
function loadJson() {
  const requireContext = require.context("./", true, /\.json$/);
  const json = {};
  requireContext.keys().forEach((key) => {
    const obj = requireContext(key);
    const simpleKey = getFileNameOnly(key);
    if (simpleKey) {
      json[simpleKey] = obj;
    }
  });
  return json;
}

const transDatas = loadJson();

export default transDatas;
