import { useSelector } from 'react-redux';
import styles from './styles.module.css';

function FormInput({
	name, handleFieldChange, handleFieldFocus, handleFieldBlur, tagType, placeholder, errorMessage,
}) {
	const formState = useSelector((state) => state.form);
	const Tag = tagType === 'textarea' ? 'textarea' : 'input';
	const { isValid } = formState.fields[name];
	const inputClassName = tagType === 'textarea' ? `${styles.formInput} ${styles.formText}` : styles.formInput;
	const tagClassName = isValid ? inputClassName : `${inputClassName} ${styles.errorBorder}`;

	return (
		<div>
			<Tag
				type="text"
				rows="4"
				placeholder={`${placeholder}*`}
				name={name}
				onChange={handleFieldChange}
				onBlur={handleFieldBlur}
				onFocus={handleFieldFocus}
				value={formState.fields[name].value}
				className={tagClassName}
			/>
			{ isValid ? (
				<div className={styles.errorContainer} />
			) : (
				<div className={styles.errorActive}>
					{errorMessage}
				</div>
			)}

		</div>
	);
}

export default FormInput;
