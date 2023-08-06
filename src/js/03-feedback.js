import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

const STORAGE_KEY = 'feedback-form-state';

let feedbackForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

const { email, message } = refs.form.elements;

refs.form.addEventListener('submit', onSubmitClickBtn);
refs.form.addEventListener('input', throttle(onInputSubmit, 500));

function onSubmitClickBtn(evt) {
  evt.preventDefault();

  if (!email.value || !message.value)
    return alert('Please fill in all the fields!');

  console.log(feedbackForm);

  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
  feedbackForm = {};
}

function onInputSubmit(evt) {
  feedbackForm[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackForm));
}

function populateTextarea() {
  if (feedbackForm) {
    email.value = feedbackForm.email || '';
    message.value = feedbackForm.message || '';
  }
}
populateTextarea();
