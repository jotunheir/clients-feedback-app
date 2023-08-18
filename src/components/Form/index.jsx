import { useDispatch, useSelector } from 'react-redux';

import {
	setFieldValue, setFieldValidation, setIsSubmitting, setFormValidation,
} from '../../store/slices/formSlice';
import validation from '../../store/slices/validation';
import { validateField } from './utils';
import { FORM_FIELDS } from './constants';

import FormInput from './FormInput';
import FormCheckbox from './FormCheckbox';
import styles from './styles.module.css';

import logoIcon from './assets/logoImg.svg';
import buttonIcon from './assets/buttonImg.svg';

function Form() {
	const dispatch = useDispatch();
	const formState = useSelector((state) => state.form);

	const handleFieldBlur = async (evt) => {
		const { name, value } = evt.target;
		const isValid = await validateField(name, value);

		dispatch(setFieldValidation({ fieldName: name, isValid }));
	};

	const handleFieldChange = async (evt) => {
		const { name, value } = evt.target;
		dispatch(setFieldValue({ fieldName: name, value }));
		await handleFieldBlur(evt);
	};

	const handleFieldFocus = async (evt) => {
		const { name } = evt.target;
		dispatch(setFieldValidation({ fieldName: name, isValid: true }));
	};

	const handleFieldCheckbox = async (evt) => {
		const { name, checked } = evt.target;
		dispatch(setFieldValue({ fieldName: name, value: checked }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const validationFields = {
			userName: formState.fields.userName.value,
			phoneNumber: formState.fields.phoneNumber.value,
			email: formState.fields.email.value,
			reviewText: formState.fields.reviewText.value,
			agreeForPersonalDataProcessing: formState.fields.agreeForPersonalDataProcessing.value,
		};

		validation.validate(validationFields, { abortEarly: false })
			.then(() => {
				dispatch(setIsSubmitting(true));
				setTimeout(() => {
					dispatch(setIsSubmitting(false));
				}, 1000);
			})
			.catch((errors) => {
				const fieldErrors = {};

				errors.inner.forEach((error) => {
					fieldErrors[error.path] = error.message;
				});
				dispatch(setFormValidation({ fieldErrors }));
			});
	};

	return (
		<div className={styles.mainForm}>
			<div className={styles.header}>
				<img className={styles.logoIcon} src={logoIcon} alt="Корзина без сына" />
				<h2 className={styles.title}>Свяжитесь с нами</h2>
			</div>
			<p className={styles.subtitle}>Отправьте нам сообщение и мы ответим в ближайшее время</p>
			<form className={styles.form} onSubmit={handleSubmit} noValidate>
				<FormInput
					name={FORM_FIELDS.userName}
					placeholder="Введите имя"
					handleFieldChange={handleFieldChange}
					handleFieldFocus={handleFieldFocus}
					handleFieldBlur={handleFieldBlur}
					errorMessage="Имя должно содержать от 2 до 128 символов"
				/>
				<FormInput
					name={FORM_FIELDS.phoneNumber}
					placeholder="Введите номер телефона"
					handleFieldChange={handleFieldChange}
					handleFieldFocus={handleFieldFocus}
					handleFieldBlur={handleFieldBlur}
					errorMessage="Неправильный формат номера телефона"
				/>
				<FormInput
					name={FORM_FIELDS.email}
					placeholder="Введите электорнную почту"
					handleFieldChange={handleFieldChange}
					handleFieldFocus={handleFieldFocus}
					handleFieldBlur={handleFieldBlur}
					errorMessage="Неправильный формат электронной почты"
				/>
				<FormInput
					name={FORM_FIELDS.reviewText}
					placeholder="Напишите ваш отзыв"
					tagType="textarea"
					handleFieldChange={handleFieldChange}
					handleFieldFocus={handleFieldFocus}
					handleFieldBlur={handleFieldBlur}
					errorMessage="Текст должен содержать от 5 до 1024 символов"
				/>
				<p className={styles.requiredFields}>*обязательные поля</p>
				<FormCheckbox
					name={FORM_FIELDS.agreeForPersonalDataProcessing}
					handleFieldCheckbox={handleFieldCheckbox}
					handleFieldFocus={handleFieldFocus}
					errorMessage="Вам нужно согласиться с правилами"
				/>
				<button type="submit" className={styles.formButton}>
					<img className={styles.buttonIcon} src={buttonIcon} alt="Самолет" />
					<p className={styles.formButtonTitle}>Отправить сообщение</p>
				</button>
			</form>
		</div>
	);
}

export default Form;
