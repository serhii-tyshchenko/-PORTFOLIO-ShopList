import React, { useState } from 'react';
import {
  UIButton, UIIconButton, UITabs, UIModal, UIModalConfirm,
} from 'modules/ui';
import { BaseLayout } from '../_Layout';
import './UI.scss';

const UI = () => {
  const [isModalVisible, toggleModalVisible] = useState(false);
  const [isModalConfirmVisible, toggleModalConfirmVisible] = useState(false);
  function handleModalClick() {
    toggleModalVisible(!isModalVisible);
  }
  function handleModalConfirmClick() {
    toggleModalConfirmVisible(!isModalConfirmVisible);
  }
  const icons = [
    'user',
    'user-o',
    'pin-outline',
    'pin',
    'trash',
    'adjust',
    'calendar',
    'plus',
    'cancel',
    'star',
    'star-empty',
    'pencil',
    'bell',
    'bell-alt',
    'bell-off',
    'bell-off-empty',
    'left-open',
    'right-open',
    'left-big',
    'right-big',
    'resize-full',
    'color-adjust',
    'filter',
    'sun',
    'moon',
    'google',
  ];
  return (
    <BaseLayout>
      <h1>Styleguide</h1>
      <section className="ui__section">
        <h3 className="ui__section__title">Typography</h3>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <p>
          Paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          vel reiciendis quaerat dolor inventore consequuntur beatae necessitatibus
          atque possimus fugit rerum labore sint dignissimos voluptatem impedit,
          dolores, quisquam omnis quasi?Veritatis perferendis cum nobis voluptatum
          est, error magnam recusandae ipsam voluptate a eveniet laborum, optio
          dignissimos neque velit, repellendus voluptatem quos eos similique! Sunt
          asperiores assumenda numquam labore? Dolorem, iste.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          obcaecati similique voluptas dolores quod unde fuga animi! Minus repudiandae
          explicabo corporis ipsa corrupti, facilis nam deleniti veritatis debitis
          amet neque!
        </p>
        <a href="/">Link</a>
      </section>
      <section className="ui__section">
        <h3 className="ui__section__title">Buttons</h3>
        <div className="ui__section__row">
          <UIButton btnType="primary" text="Primary" />
          <UIButton btnType="secondary" text="Secondary" />
          <UIButton btnType="primary" text="Small" size="small" />
          <UIButton btnType="secondary" text="Large" size="large" />
        </div>
      </section>
      <section className="ui__section">
        <h3 className="ui__section__title">Icon buttons</h3>
        <div className="ui__section__row">
          {icons.map((item) => (
            <UIIconButton key={item} icon={item} style={{ padding: '10px' }}>
              {item}
            </UIIconButton>
          ))}
        </div>
      </section>
      <section className="ui__section">
        <h3 className="ui__section__title">Modals</h3>
        <UIButton
          btnType="primary"
          text="Show simple modal"
          onClick={handleModalClick}
        />
        <UIModal
          isVisible={isModalVisible}
          title="Simple UI Modal"
          onClose={handleModalClick}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa debitis
          molestias aut ducimus quasi adipisci odit pariatur, nulla ex. Dignissimos
          vero molestiae ratione vel aliquam. Eius libero labore natus molestias.
        </UIModal>
        <UIButton
          btnType="primary"
          text="Show modal confirm"
          onClick={handleModalConfirmClick}
        />
        <UIModalConfirm
          isVisible={isModalConfirmVisible}
          title="Simple UI Modal Confirm"
          onClose={handleModalConfirmClick}
                        // eslint-disable-next-line no-alert
          onSave={() => window.alert('Save was clicked!')}
        >
          Modal Confirm content here
        </UIModalConfirm>
      </section>
      <section className="ui__section">
        <h3 className="ui__section__title">Tabs</h3>
        <UITabs labels={['Tab 1', 'Tab 2']}>
          <p>Tab 1 Content</p>
          <p>Tab 2 Content</p>
        </UITabs>
      </section>
    </BaseLayout>
  );
};

export { UI };
