import styles from '../../styles/login.module.css'
import KeyIcon from '../../assets/icons/KeyIcon'
import PersonIcon from '../../assets/icons/PersonIcon'

export default function index() {
    return (
        <div className={styles.pageContainer}>
            <form className={styles.loginForm}>
                <div className={styles.formElementsContainer}>
                    <div className={styles.titleContainer}>
                        <span className={styles.loginTitle}>Welcome Back</span>
                    </div>
                    <div className={styles.fieldsContainer}>
                        <div className={styles.inputField}>
                            <div className={styles.inputContainer}>
                                <PersonIcon />
                                <input
                                    type="text"
                                    id="email"
                                    name="email" 
                                    placeholder='email'
                                    className={styles.inputs}
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.inputField}>
                            <div className={styles.inputContainer}>
                                <KeyIcon />
                                <input
                                    type="password"
                                    id="senha"
                                    name="senha"
                                    placeholder='password'
                                    className={styles.inputs}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.loginButton} type="submit">
                            Login
                        </button>
                        <span>
                            <a href="" className={styles.forgotPasswordLink}>
                                FORGOT PASSWORD?{' '}
                            </a>
                        </span>
                    </div>
                </div>
            </form>
        </div>
    )
}
