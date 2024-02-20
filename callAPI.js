function callAPI() {
    console.log("123")
    const url = 'https://api.moonshot.cn/v1/chat/completions';
    const apiKey = 'Y2xhdHFmaHI2a2oxMTgxMjQ3NDA6bXNrLWpUSEJqRlI4WXlzVUFNbmF2R1dDT0NGN0JlaDU=';

    const inputText = document.getElementById('inputText').value;
    const resultDiv = document.getElementById('result');

    const requestData = {
        model: 'moonshot-v1-8k',
        messages: [
            { role: 'user', content: inputText }
        ],
        temperature: 0.3
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(requestData)
    })
        .then(response => response.json())
        .then(data => {
            const responseText = data.choices[0].message.content;
            resultDiv.textContent = responseText;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

document.getElementById('printButton').addEventListener('click', callAPI);
