import styles from './Button.module.css';

interface Props {
    children: string
    colour?: 'primary' | 'secondary';
    onClick: () => void;

}

const Button = ({children, onClick, colour = 'primary'} : Props) => {
    return (
        <div>
            <button className={[styles.btn, styles['btn-' + colour]].join(' ')} onClick={onClick}>{children}</button>
        </div>
    );
};

export default Button;