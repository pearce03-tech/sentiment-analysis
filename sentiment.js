const assets = [
    { name: "Apple", symbol: "AAPL" },
    { name: "Tesla", symbol: "TSLA" },
    { name: "Google", symbol: "GOOGL" },
    { name: "Amazon", symbol: "AMZN" },
    { name: "Microsoft", symbol: "MSFT" },
    { name: "Facebook", symbol: "META" }
];

// Function to generate a random sentiment (positive, neutral, negative)
function getRandomSentiment() {
    const sentiments = ["positive", "neutral", "negative"];
    return sentiments[Math.floor(Math.random() * sentiments.length)];
}

// Function to display the assets and their sentiment scores
function displayAssets() {
    const assetList = document.getElementById("asset-list");
    
    assets.forEach(asset => {
        const sentiment = getRandomSentiment(); // Generate sentiment
        const row = document.createElement("tr");

        // Create columns for asset name and sentiment
        const nameCell = document.createElement("td");
        nameCell.textContent = `${asset.name} (${asset.symbol})`;

        const sentimentCell = document.createElement("td");
        sentimentCell.textContent = sentiment.charAt(0).toUpperCase() + sentiment.slice(1);
        sentimentCell.classList.add(sentiment); // Add sentiment-specific class

        // Append the cells to the row
        row.appendChild(nameCell);
        row.appendChild(sentimentCell);

        // Append the row to the table
        assetList.appendChild(row);
    });
}

// Call the function to display the assets and their sentiment
window.onload = displayAssets;