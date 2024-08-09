import cx from './style.module.scss'

interface ButtonProps {
    children: JSX.Element | string,
    type?: 'button' | 'submit',
    variant?: 'primary' | 'outline'
}

const Button = ({ children, type = 'button', variant = 'primary' }: ButtonProps) => {
    return (
        <button 
            type={type}
            className={cx[`btn-${variant}`]}>
            { children }
        </button> 
    )
}

export default Button