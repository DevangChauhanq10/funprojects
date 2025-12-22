/*A Promise in JavaScript is an object that represents the result of an asynchronous operation that will finish later.

“I promise I will give you the data later — either successfully or with an error.*/

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true; //or false
      if (success) {
        resolve("Data fetched succesfully");
      } else reject("Data not fetched.Error");
    }, 3000);
  });
}

//consuming a promise
/*let response = fetchData();
console.log(response);*/

//If the Promise returned by fetchData() is fulfilled, then() is called. If the Promise is rejected or an error occurs in any then(), catch() is called.
// fetchData().then().catch();  or just write whats below
fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
