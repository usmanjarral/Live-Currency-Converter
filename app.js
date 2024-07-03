async function getData() {
    const url = "https://api.freecurrencyapi.com/v1/latest";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log(data);
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }