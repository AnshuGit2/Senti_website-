document.addEventListener("DOMContentLoaded", () => {
    const randomTweetCheckbox = document.getElementById("randomTweetCheckbox");
    const randomTweetSection = document.getElementById("randomTweetSection");
    const tweetsBySentimentCheckbox = document.getElementById("tweetsBySentimentCheckbox");
    const tweetsBySentimentSection = document.getElementById("tweetsBySentimentSection");
    const tweetTimingCheckbox = document.getElementById("tweetTimingCheckbox");
    const tweetTimingSection = document.getElementById("tweetTimingSection");
    const breakdownCheckbox = document.getElementById("breakdownCheckbox");
    const breakdownSection = document.getElementById("breakdownSection");
    const hourOfDay = document.getElementById("hourOfDay");
    const selectedHour = document.getElementById("selectedHour");

    randomTweetCheckbox.addEventListener("change", () => {
        randomTweetSection.style.display = randomTweetCheckbox.checked ? "block" : "none";
    });

    tweetsBySentimentCheckbox.addEventListener("change", () => {
        tweetsBySentimentSection.style.display = tweetsBySentimentCheckbox.checked ? "block" : "none";
    });

    tweetTimingCheckbox.addEventListener("change", () => {
        tweetTimingSection.style.display = tweetTimingCheckbox.checked ? "block" : "none";
    });

    breakdownCheckbox.addEventListener("change", () => {
        breakdownSection.style.display = breakdownCheckbox.checked ? "block" : "none";
    });

    hourOfDay.addEventListener("input", () => {
        selectedHour.textContent = `Hour: ${hourOfDay.value}`;
    });

    document.getElementById("visualizeButton").addEventListener("click", () => {
        const vizType = document.getElementById("vizType").value;
        const chart = document.getElementById("chart");

        // Mock data for visualization
        const data = [
            { sentiment: "positive", count: 10 },
            { sentiment: "neutral", count: 5 },
            { sentiment: "negative", count: 15 }
        ];

        chart.innerHTML = "";

        if (vizType === "histogram") {
            // Simple histogram mock visualization
            data.forEach(item => {
                const bar = document.createElement("div");
                bar.style.height = "30px";
                bar.style.width = `${item.count * 10}px`;
                bar.style.backgroundColor = "lightblue";
                bar.style.margin = "5px 0";
                bar.textContent = `${item.sentiment}: ${item.count}`;
                chart.appendChild(bar);
            });
        } else if (vizType === "bar") {
            // Simple bar chart mock visualization
            data.forEach(item => {
                const bar = document.createElement("div");
                bar.style.height = "30px";
                bar.style.width = `${item.count * 10}px`;
                bar.style.backgroundColor = "lightgreen";
                bar.style.margin = "5px 0";
                bar.textContent = `${item.sentiment}: ${item.count}`;
                chart.appendChild(bar);
            });
        } else if (vizType === "line") {
            // Simple line chart mock visualization
            let line = document.createElement("div");
            line.style.borderBottom = "2px solid blue";
            line.style.width = "100%";
            chart.appendChild(line);
        }
    });

    document.getElementById('apiButton').addEventListener('click', fetchData);

    function fetchData() {
        // Define the data to be sent
        const data = {
            "data": [
                "URGENT! You have won a 1 week FREE membership in our £100,000 Prize Jackpot! Txt the word: CLAIM"
            ]
        };

        // Make the POST request to your API endpoint
        fetch("https://sanjayrathore.app.modelbit.com/v1/classifer_text/latest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response data
            const score = data['data'][0]['label'];
            document.getElementById('apiResult').innerText = `API Score: ${score}`;
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }
});
