  
  
  
  
  let read = (fileObj:File, callback) => {
      let reader = new FileReader();
      reader.readAsText(fileObj);
      reader.onload = () => {
        callback(reader.result);
      };
    };
    

    export { read};
    