function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Coffee", url: "https://abc.com", age: 24 });
    }, 3000);
  });
}

async function getUserData() {
  //async Marks the function as asynchronous & allows this function to perform asynchronous operations and use await//
  try {
    //good things go here
    console.log("Fetching User Data");
    const c = await fetchUserData(); //can only be used under async. It Pauses execution of this function waits until the Promise resolves or rejects
    console.log("User data is", c);
  } catch (error) {
    //bad things go here
    console.log("There was error fetching data", error);
  }
}

getUserData();
