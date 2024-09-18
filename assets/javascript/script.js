document.addEventListener('DOMContentLoaded', () => {
  const fields = [
    { inputId: 'first_name', labelId: 'first_name_label' },
    { inputId: 'last_name', labelId: 'last_name_label' },
    { inputId: 'email', labelId: 'email_label' },
    { inputId: 'phone_number', labelId: 'phone_number_label' },
    { inputId: 'password', labelId: 'password_label' },
    { inputId: 'confirm_password', labelId: 'confirm_password_label' }
  ];

  fields.forEach(({ inputId, labelId }) => {
    const input = document.getElementById(inputId);
    const label = document.getElementById(labelId);

    input.addEventListener('focus', () => label.classList.add('main__label--focus'));
    input.addEventListener('blur', () => label.classList.remove('main__label--focus'));
  });
});

document.getElementById('sign_up_form').addEventListener('submit', (event) => {
  const firstName = document.getElementById('first_name');
  const lastName = document.getElementById('last_name');
  const email = document.getElementById('email');
  const phoneNumber = document.getElementById('phone_number');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm_password');
  const passwordValue = document.getElementById('password').value;
  const confirmPasswordValue = document.getElementById('confirm_password').value;
  const passwordMessage = document.getElementById('password_message');

  passwordMessage.classList.remove('main__txt-password--message');

  if (passwordValue === confirmPasswordValue) {
    event.preventDefault();
    alert('Form validated.');
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    phoneNumber.value = '';
    password.value = '';
    confirmPassword.value = '';
    password.classList.remove('main__input-password--invalid');
    confirmPassword.classList.remove('main__input-password--invalid');
    passwordMessage.classList.remove('main__txt-password--message');
  }

  if (passwordValue !== confirmPasswordValue) {
    event.preventDefault();
    password.classList.add('main__input-password--invalid');
    confirmPassword.classList.add('main__input-password--invalid');
    passwordMessage.classList.add('main__txt-password--message');
  }
});