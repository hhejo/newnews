const url = 'http://127.0.0.1:3000';
const params = new URLSearchParams({ query: '서울' });
const newsUrl = `${url}/api/news?${params}`;
fetch(newsUrl, {
  method: 'GET',
})
  .then((res) => res.json())
  .then((data) => console.log('Data:', data))
  .catch((err) => console.error(err));
