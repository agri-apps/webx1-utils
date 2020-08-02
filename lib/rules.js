const isString = (o) => {
  return o !== null && typeof o === "string";
};

const isEmptyObject = (o) => {
  var name;
  for (name in o) {
    if (o.hasOwnProperty(name)) return false;
  }
  return true;
}

const isFunc = (o) => {
  return typeof o === "function";
}

const isAsyncFunc = (fn) => {
  return fn && typeof fn === 'function' && fn.constructor.name === "AsyncFunction";
}

const isNode = (o) => {
  return typeof Node === "object"
    ? o instanceof Node
    : o &&
        typeof o === "object" &&
        typeof o.nodeType === "number" &&
        typeof o.nodeName === "string";
}

const isElement = (o) => {
  return typeof HTMLElement === "object"
    ? o instanceof HTMLElement //DOM2
    : o &&
        typeof o === "object" &&
        o !== null &&
        o.nodeType === 1 &&
        typeof o.nodeName === "string";
}

export default {
  isString,
  isEmptyObject,
  isFunc,
  isAsyncFunc,
  isNode,
  isElement
};