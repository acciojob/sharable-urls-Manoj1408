// your code here
const button = document.getElementById('button');
  const url = document.getElementById('url');
  
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const year = document.getElementById("year").value;
    const queryString = `?name=${name}&year=${year}`;

    url.textContent = url.textContent + queryString;
  });