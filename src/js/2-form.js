import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const formData = {
  email: '',
  message: '',
};
const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');

fillFormFields();

formEl.addEventListener('input', handleFormChange);

function handleFormChange(e) {
  const fieldName = e.target.name;
  const fieldValue = e.target.value.trim();

  formData[fieldName] = fieldValue;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadFormFieldsValues() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (error) {
    console.error(`JSON parsing error: ${error}`);
    return null;
  }
}

function fillFormFields() {
  const dataForm = loadFormFieldsValues();

  if (!dataForm) {
    return;
  }

  for (const key in dataForm) {
    formEl.elements[key].value = dataForm[key];
    formData[key] = dataForm[key];
  }
}

formEl.addEventListener('submit', handleSubmitForm);

function handleSubmitForm(e) {
  e.preventDefault();

  for (const key in formData) {
    if (!formData[key]) {
      const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Fill please all fields.
        </p>
    </div>
`);
      instance.show();
      return;
    }
  }

  console.log(`FormData => ${JSON.stringify(formData)}`);
  localStorage.removeItem(STORAGE_KEY);
  formEl.reset();
  for (const key in formData) {
    formData[key] = '';
  }
}
