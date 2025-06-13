import React,{useState} from 'react';
import ShadowCard from './UI/ShadowCard';
import styles from './AdvertiseComponent.module.css';
import ModaleWindow from '../ModaleWindow/ModaleWindow';

const AdvertiseComponent = () => {
  
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

///////
//     const [isModalOpen1, setIsModalOpen1] = useState(false);
  
//     const openModal1 = () => setIsModalOpen1(true);
//     const closeModal1 = () => setIsModalOpen1(false);
// ///////////
// const [isModalOpen2, setIsModalOpen2] = useState(false);
  
// const openModal2 = () => setIsModalOpen2(true);
// const closeModal2 = () => setIsModalOpen2(false);
  return (
    <div className={styles.component}>
    <div className={styles.textUnder}>
      Найближчий захід на якому я буду
    </div>

    <div className={styles.shadowcards}>
    <ShadowCard
        src="/images/baner1.webp"
        alt="ШОУ ВІКТОРІЇ ЦАПОК"
        caption={'22  червня 2025 р. "Трансформаційне шоу високих вібрацій" '}
        onClick={openModal}
      />
       <ShadowCard
        src="/images/baner3.jpg"
        alt="ТРИЄДНІСТЬ"
        caption={'ТРИЄДНІСТЬ УСПІХУ" '}
        onClick={openModal}
      />
      </div>

      <ModaleWindow isOpen={isModalOpen} onClose={closeModal} names={'1 червня 2025 р. "Свято дитячих мрій: Ярмарок радості та добрих справ! - Мрії Збуваються"'}>
      1 червня відбудеться великий дитячий захід, присвячений Міжнародному дню захисту дітей. У цей день маленькі гості зможуть поринути в атмосферу свята, яке наповнене радістю та веселощами. Ярмарка, виступи талановитих дітей, майстер-класи для творчості — все це стане частиною незабутнього дня.<br/>
      <br/>
Дата: 1 червня <br/>
Час: з 12:00 до 17:00 <br/>
Адреса: алея Дарницького ринку, вздовж сімейного магазину "UMKA.SHOP", вулиця Ісмаїла Гаспринського, 15Б, Київ

        </ModaleWindow>

      


    </div>
  );
};

export default AdvertiseComponent;