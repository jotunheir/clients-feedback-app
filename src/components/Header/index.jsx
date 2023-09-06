import Form from '../Form';
import babyImg from './assets/babyImg.png';
import formIcon from './assets/formIcon.svg';

import {
	HeaderContainer,
	BackgroundImage,
	IconImage,
	SemiCircle,
} from './styled';

function Header() {
	return (
		<HeaderContainer>
			<BackgroundImage src={babyImg} alt="Сына-корзина" />
			<IconImage src={formIcon} alt="Вам пришло новое сообщение" />
			<SemiCircle />
			<Form />
		</HeaderContainer>
	);
}

export default Header;
