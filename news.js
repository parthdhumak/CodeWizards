const apiKey = '4db90fff1dda41a19de50131aff02a0c'; // Replace with your NewsAPI key
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.articles && data.articles.length > 0) {
            const newsContainer = document.getElementById('news-container');
            newsContainer.innerHTML = '';
            
            data.articles.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.classList.add('article');
                
                articleElement.innerHTML = `
                    <h2><a href="${article.url}" target="_blank">${article.title}</a></h2>
                    <p>${article.description || 'No description available'}</p>
                `;
                
                newsContainer.appendChild(articleElement);
            });
        } else {
            document.getElementById('news-container').innerHTML = '<p>No news available at the moment.</p>';
        }
    } catch (error) {
        console.error('Error fetching news:', error);
        document.getElementById('news-container').innerHTML = '<p>Unable to load news at this time.</p>';
    }
}
window.onload = fetchNews;