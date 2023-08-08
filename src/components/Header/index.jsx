import styles from './styles.module.css';
import Form from '../Form';
import babyImg from './assets/babyImg.png';
import formIcon from './assets/formIcon.svg';

function Header() {
	return (
		<div className={styles.header}>
			<img className={styles.babyImg} src={babyImg} alt="Сына-корзина" />
			<img className={styles.formIcon} src={formIcon} alt="Вам пришло новое сообщение" />
			<Form />
		</div>
	);
}

export default Header;
