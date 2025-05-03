import React,{useState} from 'react';
import ShadowCard from './UI/ShadowCard';
import styles from './AdvertiseComponent.module.css';
import ModaleWindow from '../ModaleWindow/ModaleWindow';

const AdvertiseComponent = () => {
  
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

///////
    const [isModalOpen1, setIsModalOpen1] = useState(false);
  
    const openModal1 = () => setIsModalOpen1(true);
    const closeModal1 = () => setIsModalOpen1(false);
///////////
const [isModalOpen2, setIsModalOpen2] = useState(false);
  
const openModal2 = () => setIsModalOpen2(true);
const closeModal2 = () => setIsModalOpen2(false);
  return (
    <div className={styles.component}>
    <div className={styles.textUnder}>
      Заходи та конференції за участі Руслана
    </div>

    <div className={styles.shadowcards}>
    <ShadowCard
        src="/images/baner1.jpg"
        alt="Руки з кольоровим пігментом"
        caption={'1 червня 2025 р. "Свято дитячих мрій" '}
        onClick={openModal}
      />
         <ShadowCard
        src="/images/baner2.png"
        alt="Руки з кольоровим пігментом"
        caption={'3-4 травня: Фестиваль "Краща версія себе"  '}
        onClick={openModal1}
      />
         <ShadowCard
        src="/images/baner3.png"
        alt="Руки з кольоровим пігментом"
        caption="7 червня: Конференція Триєдність Успіху"
        onClick={openModal2}
      />
      </div>

      <ModaleWindow isOpen={isModalOpen} onClose={closeModal} names={'1 червня 2025 р. "Свято дитячих мрій: Ярмарок радості та добрих справ! - Мрії Збуваються"'}>
      1 червня відбудеться великий дитячий захід, присвячений Міжнародному дню захисту дітей. У цей день маленькі гості зможуть поринути в атмосферу свята, яке наповнене радістю та веселощами. Ярмарка, виступи талановитих дітей, майстер-класи для творчості — все це стане частиною незабутнього дня.<br/>
      <br/>
Дата: 1 червня <br/>
Час: з 12:00 до 17:00 <br/>
Адреса: алея Дарницького ринку, вздовж сімейного магазину "UMKA.SHOP", вулиця Ісмаїла Гаспринського, 15Б, Київ

        </ModaleWindow>

        <ModaleWindow isOpen={isModalOpen1} onClose={closeModal1} names={'3-4 травня: Фестиваль розвитку особистості "Краща версія себе"'}>
        Запрошуємо вас на унікальну подію, яка об'єднає душевні практики, самопізнання та гармонію!  <br/>
        <br/>
Що на вас чекає?  <br/>
🔸 Майстер-класи з психології та арт-терапії  <br/>
🔸 Sound-healing сесії  <br/>
🔸 Тілесні практики  <br/>
🔸 Ярмарок HANDMADE виробів та книг  <br/>
🔸 Дитячі майстер-класи (7-12 років)  <br/>
📌 Дата та місце проведення:  <br/>
3-4 травня 2025 року  <br/>
Місце проведення:  Нивки-Готельl (м. Київ, вул. Академіка Туполева 16Є)<br/>
Придбати квитки - https://secure.wayforpay.com/payment/thebestverion

        </ModaleWindow>

        <ModaleWindow isOpen={isModalOpen2} onClose={closeModal2} names={'7 червня: Конференція "Триєдність Успіху: Бізнес, Благодійність, Духовність"'}>
        Конференція "Триєдність Успіху: Бізнес, Благодійність, Духовність" — це ексклюзивний захід, що об'єднує провідних експертів, бізнесменів та соціальних діячів задля обміну досвідом, колаборації та створення нових зв'язків. У форматі динамічних TED-презентацій, які триватимуть по 20 хвилин, учасники матимуть змогу перейняти найкращі практики від лідерів у своїх галузях.<br/>
        <br/>

Особливістю цьогорічного заходу стане презентація Digital-глянцю "World of Real Life" та напрямків діяльності RusikProAi. Приєднуйтесь, щоб стати частиною спільноти, яка поєднує бізнес, благодійність і духовність у єдину філософію успіху!
        </ModaleWindow>


    </div>
  );
};

export default AdvertiseComponent;