// Define an async function sendReminder(email).
// Inside, wait for 5 seconds.
// Then log "Reminder sent to [email]".
// Call this function for 3 different users.


const sendEmailReminder = (email) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Reminder sent to ${email}`);
    }, 5000);
  });
};


const sendRemindersAsync = async () => {
  const users = ["jane@example.com", "takur@example.com", "jonathan@example.com"];
  for (const email of users) {
    try {
      const result = await sendEmailReminder(email);
      console.log({ result });
    } catch (error) {
      console.log({ error });
    }
  }
};
sendRemindersAsync();

// Create a function tryLogin using a counter.
// Use a Promise to simulate delay and login attempts.
// First two attempts fail, third one succeeds.
// If login successful on 3rd attempt, log "Login successful".
// If all 3 attempts fail, log "Login failed after 3 attempts".

function tryLogin() {
 let attempt = 0;
 function attemptLogin() {
  return new Promise((resolve, reject) => {
   setTimeout(() => {
    attempt++;
    if (attempt === 3) {
     resolve("Login successful");
    } else if (attempt < 3) {
     console.log(`Attempt ${attempt}: Failed`);
     resolve(attemptLogin());
    }
   }, 1000); // 1 second delay
  });
 }
 attemptLogin().then(result => {
  console.log(result);
 });


}


// Start a countdown from 5 to 0 using setInterval.
// Each second, log the current number.
// When it reaches 0, stop the interval and log "Time’s up!".

const countdownTimer=() =>{
  let count = 5;
  const timer = setInterval(() => {
    console.log(count);
    count--;
    if (count < 0) {
      clearInterval(timer);
      console.log("Time's up!");
    }
  }, 1000);
}
countdownTimer();






// Create an async function loadPage.
// Log "Loading header...", wait 1 second.
// Log "Loading content...", wait 2 seconds.
// Log "Loading footer...", wait 1 second.
// Finally, log "Page fully loaded".

function delay(ms) {
 return new Promise(resolve => setTimeout(resolve, ms));
}
async function loadPage() {
 console.log("Loading header...");
 await delay(1000);
 console.log("Loading content...");
 await delay(2000);
 console.log("Loading footer...");
 await delay(1000);
 console.log("Page fully loaded");
}
loadPage();



// Create a function fetchPrice(symbol) that returns a Promise.
// After 2 seconds, resolve with a message "Price for [symbol] retrieved".
// Use async/await to fetch multiple stock prices.

function fetchPrice(symbol) {
 return new Promise(resolve => {
  setTimeout(() => {
   resolve(`Price for ${symbol} retrieved`);
  }, 2000);
 });
}
async function fetchAllPrices() {
 const symbols = ["AAPL", "GOOG", "TSLA"];
 for (const symbol of symbols) {
  const result = await fetchPrice(symbol);
  console.log(result);
 }
}
fetchAllPrices();