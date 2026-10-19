const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/interactions';
const apiKeyInput = document.getElementById('api-key');
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const toneButtons = document.querySelectorAll('.tone-btn');

if (!apiKeyInput || !inputText || !outputText) {
    throw new Error('Ett eller flera formulärfält saknas i HTML-dokumentet.');
}

toneButtons.forEach(button => {
    button.addEventListener('click', async () => {
        const apiKey = apiKeyInput.value.trim();
        const text = inputText.value.trim();
        const tone = button.dataset.tone;


        try {
          const response = await fetch(apiUrl, {
          method: 'POST',
         headers: {
           'Content-Type': 'application/json',
          'x-goog-api-key': apiKey
          },
        body: JSON.stringify({
             model: 'gemini-2.5-flash-lite',
             input: `Skriv om följande text: ${text}. Skriv med en ${tone} ton. Ge bara ett alternativ och svara enbart med den nya texten. Skriv inte något annat än den nya texten.`

          })
        });    

         const data = await response.json();
         console .log('Response:', data);

    } catch (error) {
       console.error('Gemini error:', error.message);
    }
  });   


   

    
})    
