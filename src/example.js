class Example {

  message = (msg, ...others) => {
    return msg + ' ' + (others ? others.join(' ') : '');
  }

}

export default Example;
