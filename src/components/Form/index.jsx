import styles from './styles.module.css';
import logoIcon from './assets/logoImg.svg';
import buttonIcon from './assets/buttonImg.svg';

function Form() {
	return (
		<div className={styles.mainForm}>
			<div className={styles.header}>
				<img className={styles.logoIcon} src={logoIcon} alt="Корзина без сыны" />
				<h2 className={styles.title}>Свяжитесь с нами</h2>
			</div>
			<p className={styles.subtitle}>Отправьте нам сообщение и мы ответим в ближайшее время</p>
			<form className={styles.form}>
				<input
					className={styles.formInput}
					placeholder="Ваше Имя*"
					type="text"
					id="name"
					required
				/>
				<input
					className={styles.formInput}
					placeholder="Телефон"
					type="tel"
					id="phone"
				/>
				<input
					className={styles.formInput}
					placeholder="Электронная почта*"
					type="email"
					id="email"
					required
				/>
				<textarea
					className={`${styles.formInput} ${styles.formText}`}
					placeholder="Ваше сообщение*"
					id="message"
					required
				/>
				<p className={styles.requiredFields}>*обязательные поля</p>
				<div className={styles.rulesChecked}>
					<input className={styles.checkbox} type="checkbox" name="form" id="rules" value="rules" />
					<label className={styles.checkboxLable} htmlFor="rules">
						Я согласен(-на) с
						{' '}
						<span className={styles.rulesCheckedBold}>правилами</span>
						{' '}
						о обработке моих персональных данных
					</label>
				</div>
				<button type="submit" className={styles.formButton}>
					<img className={styles.buttonIcon} src={buttonIcon} alt="Самолет" />
					<p className={styles.formButtonTitle}>Отправить сообщение</p>
				</button>
			</form>
		</div>
	);
}

export default Form;
