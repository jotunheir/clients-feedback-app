import { useSelector } from 'react-redux';

import {
	ErrorActive,
	ErrorContainer,
	Input,
	Textarea,
} from './styled';

function FormInput({
	name, handleFieldChange, handleFieldFocus, handleFieldBlur, tagType, placeholder, errorMessage,
}) {
	const formState = useSelector((state) => state.form);
	const { isValid } = formState.fields[name];
	const isTextarea = tagType === 'textarea';
	const isError = !isValid;
	const Tag = isTextarea ? Textarea : Input;

	return (
		<>
			<Tag
				type={isTextarea ? 'textarea' : 'text'}
				rows={isTextarea ? '4' : undefined}
				placeholder={`${placeholder}*`}
				name={name}
				onChange={handleFieldChange}
				onBlur={handleFieldBlur}
				onFocus={handleFieldFocus}
				value={formState.fields[name].value}
				isTextarea={isTextarea}
				isError={isError}
			/>
			{isValid ? (
				<ErrorContainer />
			) : (
				<ErrorActive>
					{errorMessage}
				</ErrorActive>
			)}
		</>
	);
}

export default FormInput;
