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