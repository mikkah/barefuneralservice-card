import cx from './style.module.scss'

interface ButtonProps {
    children: JSX.Element | string,
    type?: 'button' | 'submit',
    variant?: 'primary' | 'outline',
    onClick?: () => void
    
}

const Button = ({ children, type = 'button', variant = 'primary', onClick  }: ButtonProps) => {
    return (
        <button 
            type={type}
            className={cx[`btn-${variant}`]}
            onClick={onClick}
            >
            { children }
        </button> 
    )
}

export default Button