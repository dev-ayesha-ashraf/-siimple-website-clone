function toggleAnswer(questionNumber) {
    var answer = document.getElementsByClassName('answer')[questionNumber - 1];
    var showIcon = document.getElementsByClassName('show-icon')[questionNumber - 1];
    var hideIcon = document.getElementsByClassName('hide-icon')[questionNumber - 1];

    if (answer.style.display === 'none') {
      answer.style.display = 'block';
      showIcon.style.display = 'none';
      hideIcon.style.display = 'inline';
    } else {
      answer.style.display = 'none';
      showIcon.style.display = 'inline';
      hideIcon.style.display = 'none';
    }
  }