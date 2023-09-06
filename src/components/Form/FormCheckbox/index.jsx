import { useSelector } from 'react-redux';
import {
	Checkbox,
	CheckboxLabel,
	CheckboxLabelBold,
	ErrorActive,
	ErrorContainer,
	Rules,
	RulesCheckbox,
} from './styled';

function FormCheckbox({
	name, handleFieldCheckbox, handleFieldFocus, errorMessage,
}) {
	const agreeForPersonalDataProcessing = useSelector(
		(state) => state.form.fields.agreeForPersonalDataProcessing,
	);

	return (
		<Rules>
			<RulesCheckbox>
				<Checkbox
					type="checkbox"
					name={name}
					id="rules"
					checked={agreeForPersonalDataProcessing.checked}
					onChange={handleFieldCheckbox}
					onFocus={handleFieldFocus}
				/>
				<CheckboxLabel htmlFor="rules">
					Я согласен(-на) с
					{' '}
					<CheckboxLabelBold>правилами</CheckboxLabelBold>
					{' '}
					о обработке моих персональных данных
				</CheckboxLabel>
			</RulesCheckbox>
			{(agreeForPersonalDataProcessing.isValid) ? (
				<ErrorContainer />
			) : (
				<ErrorActive>
					{errorMessage}
				</ErrorActive>
			)}
		</Rules>
	);
}

export default FormCheckbox;
