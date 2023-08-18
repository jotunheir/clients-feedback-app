import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	fields: {
		userName: {
			value: '',
			isValid: true,
		},
		phoneNumber: {
			value: '',
			isValid: true,
		},
		email: {
			value: '',
			isValid: true,
		},
		reviewText: {
			value: '',
			isValid: true,
		},
		agreeForPersonalDataProcessing: {
			value: false,
			isValid: true,
		},
	},
	isSubmitting: false,
};

const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {

		setFieldValue: (state, action) => {
			const { fieldName, value } = action.payload;
			state.fields[fieldName].value = value;
		},

		setFieldValidation: (state, action) => {
			const { fieldName, isValid } = action.payload;
			state.fields[fieldName].isValid = isValid;
		},

		setIsSubmitting: (state, action) => {
			state.isSubmitting = action.payload;
		},

		setFormValidation: (state, action) => {
			const { fieldErrors } = action.payload;
			const fieldNames = Object.keys(fieldErrors);
			return fieldNames.reduce((nextState, fieldName) => ({
				...nextState,
				fields: {
					...nextState.fields,
					[fieldName]: {
						...nextState.fields[fieldName],
						isValid: !fieldErrors[fieldName],
					},
				},
			}), state);
		},
	},
});

export const {
	setFieldValue,
	setFieldValidation,
	setIsSubmitting,
	setFormValidation,
} = formSlice.actions;

export default formSlice.reducer;
