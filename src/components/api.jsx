const baseUrl = "https://superheroapi.com/api/2063471723999700";


function generateId() {
  const randomHeroId = Math.floor(Math.random() * 731) + 1;
  return randomHeroId;
}

async function getHero(id) {
  try {
    const response = await fetch(`${baseUrl}/${id}`);
    const data = await response.json();
    console.log(data);
    return data;  
  } catch (error) {
    console.error("Error fetching data:", error);
  };
}


export { generateId, getHero,};
