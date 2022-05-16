import React from 'react';
import { LayerCard } from '../components/LayerCard';
import { Header } from './Header';
import './page.css';
import BackgroundImage from './assets/card-media.png';

type User = {
  name: string;
};

export const Page: React.VFC = () => {
  const [user, setUser] = React.useState<User>();
  const [checked, setChecked] = React.useState(false);

  const onCheckedChange = () => {
    setChecked(prev => !prev);
  };

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section>
        <h2>Pages in Storybook</h2>
        <LayerCard
          checked={checked}
          label='Flood zone 3'
          backgroundImage={BackgroundImage}
          onCheckedChange={onCheckedChange}
        />
      </section>
    </article>
  );
};
