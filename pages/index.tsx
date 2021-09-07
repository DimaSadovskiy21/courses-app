import Head from 'next/head';
import Image from 'next/image';
import { Button } from '../components/Button/Button';
import { Htag } from '../components/Htag/Htag';


export default function Home(): JSX.Element {
  return <>
    <Htag tag='h3'>Text</Htag>
    <Button appearance='primary'>Кнопка</Button>
    <Button appearance='ghost'>Кнопка</Button>
    </>
  
}
