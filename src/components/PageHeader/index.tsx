import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

//* Definindo as propriedades do componente PageHeader
interface PageHeaderProps {
	title: string;
}

//? Indicamos que o nosso componente (PageHeader) é um Funcional Component (React.FC) e que recebe como propriedades (<...>) a interface definida acima.
const PageHeader: React.FC<PageHeaderProps> = props => {
	return (
		<header className='page-header'>
			<div className='top-bar-container'>
				<Link to='/'>
					<img src={backIcon} alt='Voltar' />
				</Link>
				<img src={logoImg} alt='Proffy' />
			</div>

			<div className='header-content'>
				<strong>{props.title}</strong>

				{props.children}
			</div>
		</header>
	);
};

export default PageHeader;
