import axios from 'axios';
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import { Button } from '../components/Button/Button';
import { Htag } from '../components/Htag/Htag';
import { P } from '../components/P/P';
import { Rating } from '../components/Rating/Rating';
import { Tag } from '../components/Tag/Tag';
import { Textarea } from '../components/Textarea/Textarea';
import { API } from '../helpers/api';
import { MenuItem } from '../interface/menu.interface';
import { withLayout } from '../layout/Layout';




function Home({menu}: HomePropsType): JSX.Element {


  const [counter, setCounter] = useState<number>(0);
  
  useEffect(() => {
    console.log('Counter:' + counter);
  }, [counter]);

  const [rating, setRating] = useState<number>(4);
  
  return <>
    <Htag tag='h3'>{counter}</Htag>
    <Button onClick={() => setCounter(x => x + 1)} appearance='primary' arrow="down">Кнопка</Button>
    <Button appearance='ghost' arrow="down">Кнопка</Button>
    <P size='small'>small</P>
    <P>medium</P>
    <P size='large'>large</P>
    <Tag size='large' color='gray'>10</Tag>
    <Tag size='small' color='ghost'>Photoshop</Tag>
    <Tag size='small' color='green'>-10 000$</Tag>
    <Tag size='large' color='red' href='https://hh.ru/'>hh.ru</Tag>
    <Tag size='small' color='primary'>Графический дизайн</Tag>
    <Rating rating={rating} isEditable setRating={setRating }/>
    <ul>
{menu.map((m) => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
    </ul>
    
    < Textarea placeholder="Dfkdffdkl"/>
    
    
    </>;
  
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomePropsType extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
