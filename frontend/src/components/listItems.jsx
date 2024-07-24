import style from '@/styles/home.module.css'
import ArrowLeftIcon from '@/assets/icons/ArrowLeftIcon'
import ArrowRightIcon from '@/assets/icons/ArrowRightIcon'

export default function listItems({ listingType }) {
    let arrayTemporario = [
        {
            name: 'Produto 1',
            price: 100,
            image: 'https://via.placeholder.com/150',
            description: 'Descrição do produto 1'
        },
        {
            name: 'Produto 2',
            price: 200,
            image: 'https://via.placeholder.com/150',
            description: 'Descrição do produto 2'
        },
        {
            name: 'Produto 3',
            price: 300,
            image: 'https://via.placeholder.com/150',
            description: 'Descrição do produto 3'
        },
        {
            name: 'Produto 4',
            price: 400,
            image: 'https://via.placeholder.com/150',
            description: 'Descrição do produto 4'
        },
        {
            name: 'Produto 1',
            price: 100,
            image: 'https://via.placeholder.com/150',
            description: 'Descrição do produto 1'
        },
        {
            name: 'Produto 2',
            price: 200,
            image: 'https://via.placeholder.com/150',
            description: 'Descrição do produto 2'
        },
        {
            name: 'Produto 3',
            price: 300,
            image: 'https://via.placeholder.com/150',
            description: 'Descrição do produto 3'
        },
        {
            name: 'Produto 4',
            price: 400,
            image: 'https://via.placeholder.com/150',
            description: 'Descrição do produto 4'
        }
    ]
    return (
        <div className={listingType === 'gridType' ? style.gridContainer : style.listContainer}>
            {listingType === 'gridType' &&
                arrayTemporario.map((item, index) => (
                    <div key={index} className={style.gridItem}>
                        <div className={style.gridContainerImg}>
                            <img className={style.gridImg} src="imagens/tmp/img1.png" alt="" />
                        </div>
                        <div className={style.gridContent}>
                            <span className={style.gridContentTitle}>TITULO</span>
                            <span className={style.gridContentDescription}>Descrição</span>
                            <a className={style.gridItemLink} href="">
                                Adicionar a lista
                            </a>
                        </div>
                    </div>
                ))}
            {listingType === 'listType' &&
                arrayTemporario.map((item, index) => (
                    <div key={index} className={style.listItem}>
                        <div className={style.listContainerImg}>
                            <img className={style.listImg} src="imagens/tmp/img1.png" alt="" />
                        </div>
                        <div className={style.listContent}>
                            <span className={style.listContentTitle}>TITULO</span>
                            <span className={style.listContentDescription}>Descrição</span>
                            <a className={style.listItemLink} href="">
                                Adicionar a lista
                            </a>
                        </div>
                    </div>
                ))}
            <div className={style.paginationContainer}>
                <span className={style.paginationCount}>1 - 10 of 200</span>
                <div className={style.paginationControls}>
                    <ArrowLeftIcon className={style.paginationIcon} />
                    <ArrowRightIcon className={style.paginationIcon} />
                </div>
            </div>
        </div>
    )
}
