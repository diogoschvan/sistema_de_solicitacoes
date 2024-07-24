import style from '@/styles/home.module.css'
import { useState } from 'react'
import ListItems from '@/components/listItems'
import ExpandMoreIcon from '@/assets/icons/ExpandMoreIcon'
import ListIcon from '@/assets/icons/ListIcon'
import GridIcon from '@/assets/icons/GridIcon'

export default function index() {
    const [dropdown, setDropdown] = useState({
        isOpen: false,
        select: 'Todos',
        paginationIsOpen: false,
        paginationSelect: '24 por pagina'
    })

    let [listingType, setListingType] = useState('gridType')

    function changeListingType(type) {
        setListingType(type)
    }

    function toggleDropdownMenu(value) {
        setDropdown((prevState) => ({
            ...prevState,
            isOpen: !prevState.isOpen,
            select: value
        }))
    }

    function paginationToggleDropdownMenu(value) {
        setDropdown((prevState) => ({
            ...prevState,
            paginationIsOpen: !prevState.paginationIsOpen,
            paginationSelect: value
        }))
    }

    return (
        <div className={style.contentWrapper}>
            <div className={style.headerContainer}>
                <div className={style.categorySection}>
                    <div className={style.categoryHeader}>
                        <span className={style.title}>All</span>
                        <div
                            onClick={() => toggleDropdownMenu(`${dropdown.select}`)}
                            className={style.dropdownTrigger}
                        >
                            <span className={style.dropdownButton}>{dropdown.select}</span>
                            <ExpandMoreIcon className={style.dropdownIcon} />
                        </div>
                        {dropdown.isOpen ? (
                            <div className={style.dropdownMenu}>
                                <div
                                    onClick={() => toggleDropdownMenu('Materiais de Construcao')}
                                    className={style.dropdownOption}
                                >
                                    Materiais de Construção
                                </div>
                                <div
                                    onClick={() =>
                                        toggleDropdownMenu('Materiais para o escritorio')
                                    }
                                    className={style.dropdownOption}
                                >
                                    Materiais para o escritório
                                </div>
                                <div
                                    onClick={() => toggleDropdownMenu('Ordem Alfabetica')}
                                    className={style.dropdownOption}
                                >
                                    Ordem Alfabetica
                                </div>
                            </div>
                        ) : null}
                    </div>
                    <div className={style.paginationSection}>
                        <span className={style.title}>Exibir:</span>
                        <div
                            onClick={() => paginationToggleDropdownMenu(`${dropdown.paginationSelect}`)}
                            className={style.paginationDropdownTrigger}
                        >
                            <span className={style.paginationDropdownButton}>{dropdown.paginationSelect}</span>
                        </div>
                        {dropdown.paginationIsOpen ? (
                            <div className={style.paginationDropdownMenu}>
                                <div
                                    onClick={() => paginationToggleDropdownMenu('all')}
                                    className={style.dropdownOption}
                                >
                                    All
                                </div>
                                <div
                                    onClick={() => paginationToggleDropdownMenu('24 por pagina')}
                                    className={style.dropdownOption}
                                >
                                    24 por Página
                                </div>
                                <div
                                    onClick={() => paginationToggleDropdownMenu('50 por pagina')}
                                    className={style.dropdownOption}
                                >
                                    50 por Página
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
                <div>
                    <span className={style.requestListTitle}>Lista de Solicitações</span>
                    <div className={style.requestListContainer}>
                        <span className={style.requestListCount}>8 Itens</span>
                        <div className={style.viewModeIcons}>
                            <span onClick={() => changeListingType('listType')}>
                                <ListIcon className={style.viewIcon} />
                            </span>
                            <span onClick={() => changeListingType('gridType')}>
                                <GridIcon className={style.viewIcon} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <ListItems listingType={listingType} />
        </div>
    )
}
