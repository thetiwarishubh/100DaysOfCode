const randomQuotes = async function () {
  try {
    const response = await fetch(
      "https://api.freeapi.app/api/v1/public/quotes/quote/random"
    );
    if (!response.ok) {
      throw new Error(`HTTP Error : ${response.status}`);
    }
    const data = await response.json();
    console.log(data.data.content);
  } catch (error) {
    console.log(`Error : ${error}`);
  }
};

randomQuotes();
