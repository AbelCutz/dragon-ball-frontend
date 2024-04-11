const baseUrl = "https://www.dragonball-api.com/api";

const checkServerRes = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

const getAllCharacters = async () => {
  try {
    const res = await fetch(`${baseUrl}/characters`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return checkServerRes(res);
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
};
export { getAllCharacters };
