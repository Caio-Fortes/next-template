'use client';

import Image from 'next/image';
import Logo from '@/public/images/next._icon.svg';
import './styles.scss';

export default function Header(){
  const links = [
    {label: 'Quem somos'},
    {label: 'Especialistas'},
    {label: 'Empresas'},
    {label: 'Startups'},
    {label: 'Blog'},
  ];

  return (
    <div id='headerContainer'>
      <div className='logo'>
        <Image src={Logo} alt="logo árvore" />
      </div>
      <div>
        <ul className="lista-horizontal">
          {links.map((link, index) => (
            <li key={index}>
              <a>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}