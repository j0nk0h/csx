let dataReceived;

function ajaxSimulate(id, callback) {
  const database = ['Aaron', 'Barbara', 'Chris'];
  // Add code here
  setTimeout(() => {
    callback(database[id]);
  }, 0)
}

// Also add code here
const storeData = data => {
  dataReceived = data;
}

ajaxSimulate(1, storeData);
