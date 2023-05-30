const xhr  =  new XMLHttpRequest() ;

xhr.onreadystatechange = () => {
    if(xhr.readyState === 4){
        xhr.status == 200 ? console.log(xhr.response) : console.log('error')
    }
}


xhr.open('GET', 'https://yoursite.com');
xhr.send(); 

process.nextTick(() => {
    console.log("Running at next tick => number 2");
  });