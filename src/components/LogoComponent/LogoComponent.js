import React,  { useState } from 'react';
import styles from './LogoComponent.module.css';
import ModaleWindow from '../ModaleWindow/ModaleWindow';

const LogoComponent = () => {

 

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className={styles.component}>
      {/* Декор */}
      <img src="/images/decor-lines.png" alt="" className={styles.decor} />
      <img src="/images/RightLine.png" alt="" className={styles.decorRight} />

      {/* Фото */}
      <img src="/images/ruslan.png" className={styles.photo} alt="Фото" />

      <div>
        {/* Інформаційний блок */}
        <div className={styles.infoWrapper}>
          <div className={styles.textTitle}>Уманський Руслан</div>
          <div className={styles.textUnder}>
            бізнесмен, благодійник та громадський діяч
          </div>
        </div>

        {/* Роздільник */}
        <hr className={styles.separator} />

        {/* Соцмережі + кнопка */}
        <div className={styles.socialContainer}>
          <div className={styles.socialIcons}>
            <img onClick={() => window.open('https://t.me/RusikProAiChannel', '_blank')} className={styles.telegram} src="/images/logoTelegram.png" alt="Телеграм" />
            <img onClick={() => window.open('https://www.tiktok.com/@rusikproai?_t=ZM-8w1x1EceOZB&_r=1', '_blank')} className={styles.tiktok} src="/images/logoTiktok.png" alt="Тікток" />
            <img onClick={() => window.open('https://www.instagram.com/rusikproai?igsh=MTRvM2UzaHJjOWw2Mg==', '_blank')} className={styles.instagram} src="/images/logoInstagram.png" alt="Інстаграм" />
            <img onClick={() => window.open('https://www.facebook.com/share/16QjR7d6ST/', '_blank')} className={styles.facebook} src="/images/logoFacebook.png" alt="Фейсбук" />
          </div>
          <button className={styles.btn} onClick={openModal}>про мене</button>
        </div>
        <ModaleWindow isOpen={isModalOpen} onClose={closeModal} names={"Про мене"}>
        Руслан Уманський<br/>
        бізнесмен, благодійник та громадський діяч<br/>
        - Творець філософії "Триєдність Успіху: Бізнес, Благодійність, Духовність"<br/>
- Засновник "UMKA.SHOP - family stores"<br/>
- Голова Благодійного Фонду «Майбутнє для дітей»<br/>
- Візіонер Innovation HUB (центр інновацій) RusikProAi <br/>
- Очільник департаменту у справах сім'ї та молоді ГО «Військові капелани м.Київ»<br/>
- Керівник міжнародної консалтингової компанії URS Group<br/>
- Ідейний лідер проекту екосистеми World of Real Life<br/>
- Власник видавництва RusikProAi - Press<br/>
- Куратор адаптаційного ресурсного центру "Барвінок"<br/>


Крім керівництва фондом, Руслан бере активну участь у соціальних ініціативах, спрямованих на покращення умов життя дітей та підлітків. Його діяльність включає організацію освітніх програм, культурних та спортивних заходів для молоді.<br/>

Руслан активно співпрацює з громадськими організаціями, представниками бізнесу, соціальними активістами та лідерами думок для впровадження масштабних ініціатив, спрямованих на соціально-економічний розвиток. Його діяльність спрямована на формування сприятливого інвестиційного клімату, підтримці інноваційних стартапів та створенню ефективних умов для розвитку малого і середнього бізнесу, що позитивно впливає на економічну динаміку регіону.<br/>





        </ModaleWindow>
      </div>
    </div>
  );
};

export default LogoComponent;
