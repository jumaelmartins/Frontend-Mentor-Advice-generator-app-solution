const url = "https://api.adviceslip.com/advice";

export const getAdvice = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        "Erro ao fazer requisição. Código de status: " + response.status
      );
    }
    const jsonBody = await response.json();
    const slip = jsonBody.slip;
    const advice = await slip;
    return advice;
  } catch (error) {
    console.error("Erro ao fazer requisição:", error);
  }
};

export const convertAdviceToHtml = async (dados) => {
  const adviceText =  dados.advice;
  const id =  dados.id;

  return `
  <h1> advice #${await id}</h1>
  <p>${await adviceText}</p>
  `
}



