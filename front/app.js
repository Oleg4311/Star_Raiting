const div = document.getElementById('stars');
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const classRate = document.querySelector('.rate');
const classComment = document.querySelector('.comment');

function testFunction(thisRate, thisEl) {
  document.getElementById('rate').innerHTML = `Ваша оценка: ${thisRate}`;
  thisEl.parentNode.classList.add('disabled');
  classRate.style.display = 'block';

  if (thisRate < 4) {
    input.style.display = 'block';
    button.style.display = 'block';
  } else {
    input.style.display = 'none';
    button.style.display = 'none';
  }
}

function commentFunction(thisComment) {
  if (thisComment !== null) {
    classComment.style.display = 'block';
    document.getElementById('comment').innerHTML = `Ваш комментарий: ${thisComment}`;
    button.style.display = 'none';
    input.style.display = 'none';
  }
}

(function clicked() {
  const prevRate = localStorage.getItem('myRate');
  const comment = localStorage.getItem('comment');
  if (prevRate !== undefined && prevRate !== null) {
    const thisInput = document.getElementById(`star-${prevRate}`);
    thisInput.checked = true;
    testFunction(prevRate, thisInput);
    commentFunction(comment);
  }
}());

div.addEventListener('click', (e) => {
  const clickedEl = e.target;
  const rate = e.target.value;
  localStorage.setItem('myRate', rate);
  testFunction(rate, clickedEl);
}, false);

button.addEventListener('click', (e) => {
  e.preventDefault();
  const thisComment = input.value;
  localStorage.setItem('comment', thisComment);
  commentFunction(thisComment);
  document.getElementById('content').value = '';
}, false);
