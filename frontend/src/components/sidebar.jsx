import style from '@/styles/sidebar.module.css'

import Link from 'next/link'
import GridIcon from '@/assets/icons/GridIcon'
import ClipboardIcon from '@/assets/icons/ClipboardIcon'
import PackageIcon from '@/assets/icons/PackageIcon'
import MoneyIcon from '@/assets/icons/MoneyIcon'
import ShelfIcon from '@/assets/icons/ShelfIcon'
import GroupIcon from '@/assets/icons/GroupIcon'
import HistoryIcon from '@/assets/icons/HistoryIcon'
import UserIcon from '@/assets/icons/UserIcon'
import NotificationsIcon from '@/assets/icons/NotificationsIcon'
import LogoutIcon from '@/assets/icons/LogoutIcon'


export default function Sidebar() {
    return (
        <div className={style.sidebar}>
            <div>
                <div>
                    <img className={style.logo} src="/imagens/logo.png" alt="" />
                </div>
                <div className={style.separador}></div>
                <div className={style.menuSection}>
                    <span className={style.sectionTitle}>Solicitações</span>
                    <div className={style.linkContainer}>
                        <div>
                            <Link href="/" className={`${style.link} ${style.active}`}>
                                <GridIcon className={style.icon} />
                                <span className={style.linkText}>Materiais</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={style.separador}></div>
                <div className={style.menuSection}>
                    <span className={style.sectionTitle}>Aprovações</span>
                    <div className={style.linkContainer}>
                        <div>
                            <a className={style.link}>
                                <ClipboardIcon className={style.icon} />
                                <span className={style.linkText}>Aprovações</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={style.separador}></div>
                <div className={style.menuSection}>
                    <span className={style.sectionTitle}>Relatórios</span>
                    <div className={style.linkContainer}>
                        <div>
                            <a className={style.link}>
                                <PackageIcon className={style.icon} />
                                <span className={style.linkText}>Estoques</span>
                            </a>
                        </div>
                        <div>
                            <a href="#" className={style.link}>
                                <MoneyIcon className={style.icon} />
                                <span className={style.linkText}>Vendas</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={style.separador}></div>
                <div className={style.menuSection}>
                    <span className={style.sectionTitle}>Gerenciamento</span>
                    <div className={style.linkContainer}>
                        <div>
                            <Link href="/gerenciamento/cadastro/produto" className={style.link}>
                                <ShelfIcon className={style.icon} />
                                <span className={style.linkText}>Cadastro de Produtos</span>
                            </Link>
                        </div>
                        <div>
                            <a href="#" className={style.link}>
                                <GroupIcon className={style.icon} />
                                <span className={style.linkText}>Cadastro de Grupos</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={style.separador}></div>
                <div className={style.menuSection}>
                    <span className={style.sectionTitle}>Sistema</span>
                    <div className={style.linkContainer}>
                        <div>
                            <a className={style.link}>
                                <HistoryIcon className={style.icon} />
                                <span className={style.linkText}>Logs</span>
                            </a>
                        </div>
                        <div>
                            <a href="#" className={style.link}>
                                <UserIcon className={style.icon} />
                                <span className={style.linkText}>Usuários</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.bottomSection}>
                <div className={style.menuSection}>
                    <div className={style.linkContainer}>
                        <div>
                            <a className={style.bottomLink}>
                                <NotificationsIcon className={style.bottomIcon} />
                                <span className={style.linkText}>Notificações</span>
                            </a>
                        </div>
                        <div>
                            <a href="#" className={style.bottomLink}>
                                <LogoutIcon className={style.bottomIcon} />
                                <span className={style.linkText}>Log out</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={style.userSection}>
                    <img className={style.logo} src="/imagens/logo.png" alt="" />
                    <span className={style.userName}>Diogo Aurelio Schvan</span>
                </div>
            </div>
        </div>
    )
}
