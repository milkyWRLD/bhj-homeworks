function loadPoll() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true);
    xhr.send();

    xhr.onload = function() {
        if (xhr.status != 200) {
            alert('Ошибка: ' + xhr.status);
            return;
        }

        let responseObj = JSON.parse(xhr.response);
        let pollTitle = document.getElementById('poll__title');
        let pollAnswers = document.getElementById('poll__answers');

        pollTitle.textContent = responseObj.data.title;
        pollAnswers.innerHTML = '';

        for(let i = 0; i < responseObj.data.answers.length; i++) {
            let button = document.createElement('button');
            button.textContent = responseObj.data.answers[i];
            button.classList.add('poll__answer');
            button.onclick = function() {
                vote(responseObj.id, i);
            }
            pollAnswers.appendChild(button);
        }
    };
}

function vote(pollId, answerIndex) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(`vote=${pollId}&answer=${answerIndex}`);

    xhr.onload = function() {
        if (xhr.status != 200 && xhr.status != 201) {
            alert('Ошибка: ' + xhr.status);
            return;
        }

        alert('Спасибо, ваш голос засчитан!');
        showResults(JSON.parse(xhr.response));
    };
}


function showResults(results) {
    let totalVotes = results.stat.reduce((prev, curr) => prev + curr.votes, 0);

    let pollAnswers = document.getElementById('poll__answers');
    pollAnswers.innerHTML = '';

    for(let i = 0; i < results.stat.length; i++) {
        let p = document.createElement('p');
        p.textContent = `${results.stat[i].answer}: ${((results.stat[i].votes / totalVotes) * 100).toFixed(2)}%`;
        pollAnswers.appendChild(p);
    }
}

loadPoll();
