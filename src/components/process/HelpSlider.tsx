import { Carousel } from "react-bootstrap"
import Image from 'next/image';

const HelpSlider = () => {
    return (
        <div className='content'>
            <p><b>Главная цель игры:</b> собрать самый большой капитал и обанкротить остальных.</p>
            <p><b>Основные элементы игры</b></p>
            <div className="container">
                <Image
                    src='/assets/helpimg/1.png'
                    width='250px'
                    height='350px'
                    style={{borderRadius: '10px'}}
                    placeholder='blur'
                    blurDataURL={`/_next/image?url=/assets/helpimg/1.png&w=16&q=1`}
                />
            </div>
            <p>
                При входе в игру вы появляетесь на поле для игроков. 
                На нем подсвечивается активный игрок, отображается имя и текущий баланс всех игроков. 
                Нажав на свое имя вы можете сдаться и выйти из игры.
            </p>
            <div className="container">
                <Image
                    src='/assets/helpimg/2.png'
                    width='550px'
                    height='550px'
                    style={{borderRadius: '10px'}}
                    placeholder='blur'
                    blurDataURL={`/_next/image?url=/assets/helpimg/2.png&w=16&q=1`}
                />
            </div>
            <p>
                Поле отображает текущее состояние игры: расположение фишек игроков, купленные компании и количество их филиалов.
                В центре поля распологается чат, который сохроняет историю игры и сообщения игроков.
                Также в центре поля отображаются эвенты различных карт: джекпот, стоимость аренды, покупка компании и эвенты банков на снятие средств.
                Еще есть эвенты, которые отображаются только в чате: карты шансов, телепорт, старт игры, а также через старт.
            </p>
            <div className="container">
                <Image
                    src='/assets/helpimg/4.png'
                    width='400px'
                    height='150px'
                    style={{borderRadius: '10px'}}
                    placeholder='blur'
                    blurDataURL={`/_next/image?url=/assets/helpimg/4.png&w=16&q=1`}
                />
            </div>
            <p>
                Пример джекпота, в котором можно выбрать до 3 кубиков и, если выпадет один из выбранных, то ты получишь вознаграждение.
            </p>
            <div className="container">
                <Image
                    src='/assets/helpimg/3.png'
                    width='200px'
                    height='300px'
                    style={{borderRadius: '10px'}}
                    placeholder='blur'
                    blurDataURL={`/_next/image?url=/assets/helpimg/3.png&w=16&q=1`}
                />
            </div>
            <p>
                Нажав на карту, можно получить информацию о ней.
                Для улучшения вашей компании, 
                вам необходимо выкупить всю улицу, и, когда наступит ваш ход, вы сможете построить дополнительные филиалы, 
                чтобы получать больший доход с аренды.
                Помимо этого, вы можете в свой ход, продать любую улицу, если у вас недостаточно средств для дальнейшей игры.
            </p>
            <div className="container">
                <Image
                    src='/assets/helpimg/6.png'
                    width='250px'
                    height='150px'
                    style={{borderRadius: '10px'}}
                    placeholder='blur'
                    blurDataURL={`/_next/image?url=/assets/helpimg/6.png&w=16&q=1`}
                />
            </div>
            <p>
                Пример улицы с филиалами.
            </p>
        </div>
    )
}

export default HelpSlider