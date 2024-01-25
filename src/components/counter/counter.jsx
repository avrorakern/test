import './counter.css'

function Counter() {
    return (
        <div className="counter">
            <h1 className='counter__cap'>
                Дней без душноты 0
            </h1>
            <button className='counter__btn'>
                <p className='counter__btn_text'>
                    История
                </p>
                <svg className='arrow' width="28" height="29" viewBox="0 0 28 29" xmlns="http://www.w3.org/2000/svg">
                    <path className='counter__btn_arrow' d="M24.5 14.2521L18.6667 8.41879M24.5 14.2521L18.6667 20.0855M24.5 14.2521H3.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    )
}

export default Counter;