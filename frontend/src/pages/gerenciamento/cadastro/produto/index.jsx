import style from '@/styles/cadastro_de_produtos.module.css'
import { useState } from 'react'
import SearchIcon from '@/assets/icons/SearchIcon'
import ArrowLeftIcon from '@/assets/icons/ArrowLeftIcon'
import ArrowRightIcon from '@/assets/icons/ArrowRightIcon'
import TrashIcon from '@/assets/icons/TrashIcon'
import EditIcon from '@/assets/icons/EditIcon'

export default function index() {
    const [dropdown, setDropdown] = useState({
        paginationIsOpen: false,
        paginationSelect: '24 por pagina'
    })

    function paginationToggleDropdownMenu(value) {
        setDropdown((prevState) => ({
            ...prevState,
            paginationIsOpen: !prevState.paginationIsOpen,
            paginationSelect: value
        }))
    }

    return (
        <div className={style.productManagementContainer}>
            <form className={style.productFormContainer}>
                <div className={style.productFormContent}>
                    <div className={style.productFormRow}>
                        <input
                            className={style.productFormInput}
                            type="text"
                            placeholder="Descrição do item"
                        />
                        <input
                            className={style.productFormInput}
                            type="text"
                            placeholder="Quantidade em estoque"
                        />
                        <input className={style.productFormInput} type="text" placeholder="Tipo" />
                    </div>
                    <div className={style.productFormRow}>
                        <input className={style.productFormInput} type="text" placeholder="Tipo" />
                        <input
                            className={style.productFormInput}
                            type="text"
                            placeholder="Aprovador"
                        />
                    </div>
                    <div className={style.productImageRow}>
                        <div className={style.productImage}></div>
                    </div>

                    <input type="submit" value="Salvar" className={style.productFormSubmitButton} />
                </div>
            </form>
            <div className={style.searchContainer}>
                <SearchIcon className={style.serachIcon} />
                <input className={style.inputSearch} type="text" placeholder="Usuário" />
            </div>
            <div className={style.separador}></div>
            <div className={style.productTableContainer}>
                <table className={style.productTableContent}>
                    <thead className={style.productTableHeader}>
                        <tr>
                            <th>Titulo</th>
                            <th>Descrição</th>
                            <th>Quantidade em estoque</th>
                            <th colSpan={3}>Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Teste 1</td>
                            <td>
                                Teste Um teste qualquer Um teste qualquer Um teste qualquer Um teste
                                qualquer Um teste qualquerUm teste qualquer vTeste Um teste qualquer
                                Um teste qualquer Um teste qualquer Um teste qualquer Um teste
                                qualquerUm teste qualquer Teste Um teste qualquer Um teste qualquer
                                Um teste qualquer Um teste qualquer Um teste qualquerUm teste
                                qualquer
                            </td>
                            <td>Almox</td>
                            <td>Teste</td>
                            <td>
                                <EditIcon className={style.tableIcon} />
                            </td>
                            <td>
                                <TrashIcon className={style.tableIcon} />
                            </td>
                        </tr>
                        <tr>
                            <td>Teste 1283</td>
                            <td>Um teste qualquer Um teste qualquer Um teste qualquer</td>
                            <td>Varios Um teste qualquer</td>
                            <td>Eletronico</td>
                            <td>
                                <EditIcon className={style.tableIcon} />
                            </td>
                            <td>
                                <TrashIcon className={style.tableIcon} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className={style.paginationWrapper}>
                    <div className={style.paginationDisplaySection}>
                        <span className={style.paginationLabel}>Exibir:</span>
                        <div
                            onClick={() =>
                                paginationToggleDropdownMenu(`${dropdown.paginationSelect}`)
                            }
                            className={style.paginationDropdownTrigger}
                        >
                            <span className={style.paginationDropdownButton}>
                                {dropdown.paginationSelect}
                            </span>
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
                <div className={style.paginationControlsContainer}>
                    <span className={style.paginationCount}>1 - 10 of 200</span>
                    <div className={style.paginationNavigation}>
                        <ArrowLeftIcon className={style.paginationIcon} />
                        <ArrowRightIcon className={style.paginationIcon} />
                    </div>
                </div>
            </div>
        </div>
    )
}
