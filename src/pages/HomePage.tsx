import Footer from '../components/Footer/Footer';
import {StyledHero, HeroText, HeroIcon} from './HomePage.styled'

const HomePage = () => (
    <>
        <StyledHero>
            <HeroText>
                <div>
                    <h1>Сервис по поиску публикаций <br />о&nbsp;компании <br />по&nbsp;его&nbsp;ИНН</h1>
                    <p>Комплексный анализ публикаций, получение данных<br /> в формате PDF на электронную почту.</p>
                </div>
                <a href="">Запросить данные</a>
            </HeroText>
            <HeroIcon>
                <img src="src\pages\Group13.png" alt="" />
            </HeroIcon>
        </StyledHero>
        <h2>Почему именно мы</h2>
        <div>
            <img src="" alt="" />
            <p>Высокая и оперативная скорость обработки заявки</p>
        </div>
        <div>
            <img src="" alt="" />
            <p>Высокая и оперативная скорость обработки заявки</p>
        </div>
        <div>
            <img src="" alt="" />
            <p>Высокая и оперативная скорость обработки заявки</p>
        </div>
        <div>
            <img src="src\pages\dis1.png" alt="" />
            <img src="src\pages\dis2.png" alt="" />
        </div>
        <h2>наши тарифы</h2>
        <div>
            <div>
                <div>
                    <div>
                        <p>Beginner</p>
                        <p>Для небольшого исследования</p>
                    </div>
                    <img src="src\pages\lamp.svg" alt="" />
                </div>
                <div>
                    <div>чип</div>
                    <p><span>ЦЕНА</span> <span>зачеркнутая цена</span></p>
                    <p>или 150 ₽/мес. при рассрочке на 24 мес.</p>
                
                    <p>В тариф входит:</p>
                    <ul>
                        <li>Безлимитная история запросов</li>
                        <li>Безопасная сделка</li>
                        <li>Поддержка 24/7</li>
                    </ul>
                    <a href="">Перейти в личный кабинет</a>
                </div>
            </div>
        </div>
        <Footer />
    </>
);

export default HomePage;