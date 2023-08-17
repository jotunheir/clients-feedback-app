import { useSelector } from 'react-redux';
import styles from './styles.module.css';

function FormCheckbox({
	name, handleFieldCheckbox, handleFieldFocus, errorMessage,
}) {
	const formState = useSelector((state) => state.form);

	return (
		<div className={styles.rules}>
			<div className={styles.rulesCheckbox}>
				<input
					type="checkbox"
					className={styles.checkbox}
					name={name}
					id="rules"
					checked={formState.fields.agreeForPersonalDataProcessing.checked}
					onChange={handleFieldCheckbox}
					onFocus={handleFieldFocus}
				/>

				<label className={styles.checkboxLabel} htmlFor="rules">
					Я согласен(-на) с
					{' '}
					<span className={styles.checkboxLabelBold}>правилами</span>
					{' '}
					о обработке моих персональных данных
				</label>
			</div>

			{(formState.fields.agreeForPersonalDataProcessing.isValid) ? (
				<div className={styles.errorContainer} />
			) : (
				<div className={styles.errorActive}>
					{errorMessage}
				</div>
			)}
		</div>
	);
}

export default FormCheckbox;
