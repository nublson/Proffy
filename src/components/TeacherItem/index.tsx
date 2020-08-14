import React from 'react';

import api from '../../services/api';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface Teacher {
	id: number;
	user_id: number;
	name: string;
	avatar: string;
	bio: string;
	subject: string;
	cost: number;
	whatsapp: string;
}

interface ITeacherItemProps {
	teacher: Teacher;
}

const TeacherItem: React.FC<ITeacherItemProps> = ({ teacher }) => {
	const createConnection = () => {
		api.post('/connections', { user_id: teacher.user_id });
	};

	return (
		<article className='teacher-item'>
			<header>
				<img src={teacher.avatar} alt={teacher.name} />
				<div>
					<strong>{teacher.name}</strong>
					<span>{teacher.subject}</span>
				</div>
			</header>

			<p>{teacher.bio}</p>

			<footer>
				<p>
					Preço/hora:
					<strong>$ {teacher.cost}</strong>
				</p>

				<a
					href={`https://wa.me/${teacher.whatsapp}`}
					target='_blank'
					rel='noopener noreferrer'
					onClick={createConnection}
				>
					<img src={whatsappIcon} alt='Whatsapp' />
					Entrar em contacto
				</a>
			</footer>
		</article>
	);
};

export default TeacherItem;
