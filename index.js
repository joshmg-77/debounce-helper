
const timeout = (fn, params, delay) => {
  let timeout;
  timeout ? clearTimeout(timeout) : timeout = setTimeout(() => fn(params), delay)
}

const debouncing = (callback, delay = 350 ) => {
  if (!callback) throw new TypeError("debounce require a function as argument") 
  if (Array.isArray(callback)) {
    return callback.map(fn =>  params => timeout(fn, params, delay))
  } else {
    return params => timeout(callback, params, delay)
  }
}

export default debouncing
