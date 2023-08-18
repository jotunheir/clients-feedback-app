import * as Yup from 'yup';

const validation = Yup.object().shape({
	userName: Yup.string()
		.required()
		.min(2, 'Username must be at least 2 characters long')
		.max(128, 'Username can be up to 128 characters long'),
	phoneNumber: Yup.string()
		.required('Email is required')
		.matches(
			/^(\+7\(\d{3}\)\d{3}-\d{2}-\d{2}|7\d{10})$/,
			'Неправильный формат номера телефона',
		),
	email: Yup.string()
		.required('Email is required')
		.test('email', 'Invalid email format', (value) => {
			if (!value) return true;
			const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
			if (!emailRegex.test(value)) {
				return false;
			}
			const [localPart, domainPart] = value.split('@');
			if (localPart.length < 2 || localPart.length > 64) {
				return false;
			}
			if (domainPart.length < 6 || domainPart.length > 255) {
				return false;
			}
			if (value.length > 320) {
				return false;
			}
			return true;
		}),
	reviewText: Yup.string()
		.required('Review is required')
		.min(5, 'Review must be at least 5 characters long')
		.max(1024, 'Review can be up to 1024 characters long'),

	agreeForPersonalDataProcessing: Yup.boolean()
		.required('You must agree to the data processing')
		.oneOf([true], 'You must agree to the data processing'),
});

export default validation;
