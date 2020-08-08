import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
	return (
		<article className='teacher-item'>
			<header>
				<img
					src='https://avatars2.githubusercontent.com/u/46088089?s=460&u=0e82c947b2f5226c68d7c4c6710191513b9962b1&v=4'
					alt='Nubelson Fernandes'
				/>
				<div>
					<strong>Nubelson Fernandes</strong>
					<span>Química</span>
				</div>
			</header>

			<p>
				Entusiasta das melhores tecnologias de química avançada.
				<br /> <br />
				Apaixonado por explodir coisas em laboratório e por mudar a vida
				das pessoas através de experiências. Mais de 200.000 pessoas já
				passaram por uma das minhas explosões.
			</p>

			<footer>
				<p>
					Preço/hora:
					<strong>$ 30,00</strong>
				</p>

				<button type='button'>
					<img src={whatsappIcon} alt='Whatsapp' />
					Entrar em contacto
				</button>
			</footer>
		</article>
	);
};

export default TeacherItem;
